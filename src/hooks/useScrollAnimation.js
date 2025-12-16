import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * Provides smooth, replayable animations triggered by scroll position
 * 
 * @param {React.RefObject} ref - Reference to the DOM element to observe
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - When to trigger (0-1), default: 0.3
 * @param {string} options.rootMargin - Root margin for observer
 * @param {boolean} options.triggerOnce - Whether to animate only once
 * @param {number} options.triggerPercentage - Percentage of element visible to trigger (30-100)
 * @returns {Object} - Animation state and controls
 */
export const useScrollAnimation = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const observerRef = useRef(null);
  const frameRef = useRef(null);

  const defaultOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: false,
    triggerPercentage: 30,
    ...options
  };

  // Handle intersection with smooth animation progress
  const handleIntersection = useCallback((entries) => {
    const [entry] = entries;
    
    if (!entry) return;

    // Calculate visible percentage
    const visiblePercentage = (entry.intersectionRatio * 100);
    
    if (entry.isIntersecting && visiblePercentage >= defaultOptions.triggerPercentage) {
      setIsVisible(true);
      if (!defaultOptions.triggerOnce) {
        setHasAnimated(true);
      }
      
      // Calculate animation progress based on scroll
      const progress = Math.min(100, Math.max(0, (visiblePercentage - 30) / 70 * 100));
      setAnimationProgress(progress);
    } else if (!defaultOptions.triggerOnce && hasAnimated) {
      // Reset animation when element leaves viewport
      setIsVisible(false);
      setAnimationProgress(0);
    }
  }, [defaultOptions.triggerOnce, defaultOptions.triggerPercentage, hasAnimated]);

  // Handle scroll progress for smooth animations
  const handleScrollProgress = useCallback(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') return;

    const element = ref.current;
    const elementRect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Calculate how much of the element is visible
    const elementTop = elementRect.top;
    const elementHeight = elementRect.height;
    
    let progress = 0;
    
    if (elementTop < viewportHeight && elementTop > -elementHeight) {
      // Element is in viewport
      const visibleHeight = Math.min(
        viewportHeight - elementTop,
        elementHeight,
        elementTop + elementHeight
      );
      progress = (visibleHeight / elementHeight) * 100;
      progress = Math.min(100, Math.max(0, progress));
    }
    
    setAnimationProgress(progress);
    
    // Trigger animation when progress reaches threshold
    if (progress >= defaultOptions.triggerPercentage && !isVisible) {
      setIsVisible(true);
    } else if (progress < 10 && isVisible && !defaultOptions.triggerOnce) {
      setIsVisible(false);
    }
  }, [ref, defaultOptions.triggerPercentage, isVisible, defaultOptions.triggerOnce]);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') {
      // Fallback for browsers without IntersectionObserver
      setIsVisible(true);
      return;
    }

    // Create Intersection Observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Multiple thresholds for smoothness
      rootMargin: defaultOptions.rootMargin
    });

    const currentRef = ref.current;
    observerRef.current.observe(currentRef);

    // Add scroll listener for smooth progress tracking
    if (!defaultOptions.triggerOnce) {
      window.addEventListener('scroll', handleScrollProgress);
      handleScrollProgress(); // Initial check
    }

    // Cleanup
    return () => {
      if (observerRef.current && currentRef) {
        observerRef.current.unobserve(currentRef);
      }
      window.removeEventListener('scroll', handleScrollProgress);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [ref, handleIntersection, handleScrollProgress, defaultOptions.rootMargin, defaultOptions.triggerOnce]);

  return { 
    isVisible, 
    hasAnimated, 
    animationProgress,
    // Helper method to manually trigger animation
    triggerAnimation: () => setIsVisible(true),
    // Helper method to reset animation
    resetAnimation: () => {
      setIsVisible(false);
      setHasAnimated(false);
      setAnimationProgress(0);
    }
  };
};

/**
 * Hook for staggered animations on multiple elements
 * 
 * @param {React.RefObject} parentRef - Reference to parent element
 * @param {string} childSelector - CSS selector for child elements
 * @param {Object} options - Configuration options
 * @returns {Object} - Staggered animation state
 */
export const useStaggerAnimation = (parentRef, childSelector, options = {}) => {
  const [animatedChildren, setAnimatedChildren] = useState([]);
  const [allVisible, setAllVisible] = useState(false);
  
  const defaultOptions = {
    threshold: 0.2,
    staggerDelay: 100,
    triggerOnce: false,
    ...options
  };

  useEffect(() => {
    if (!parentRef.current) return;

    const children = parentRef.current.querySelectorAll(childSelector);
    if (children.length === 0) return;

    let isUnmounted = false;

    const observers = [];
    let visibleCount = 0;

    const handleChildIntersection = (entries, index) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isUnmounted) {
          setTimeout(() => {
            if (!isUnmounted) {
              setAnimatedChildren(prev => {
                if (!prev.includes(entry.target)) {
                  return [...prev, entry.target];
                }
                return prev;
              });
              visibleCount++;
              
              if (visibleCount === children.length) {
                setAllVisible(true);
              }
            }
          }, index * defaultOptions.staggerDelay);
        } else if (!defaultOptions.triggerOnce && !isUnmounted) {
          // Remove from animated children when leaving viewport
          setTimeout(() => {
            if (!isUnmounted) {
              setAnimatedChildren(prev => prev.filter(child => child !== entry.target));
              visibleCount = Math.max(0, visibleCount - 1);
              setAllVisible(false);
            }
          }, index * defaultOptions.staggerDelay);
        }
      });
    };

    children.forEach((child, index) => {
      const observer = new IntersectionObserver(
        (entries) => handleChildIntersection(entries, index),
        {
          threshold: defaultOptions.threshold,
          rootMargin: '0px 0px -50px 0px'
        }
      );
      observers.push(observer);
      observer.observe(child);
    });

    return () => {
      isUnmounted = true;
      observers.forEach(observer => {
        observer.disconnect();
      });
    };
  }, [parentRef, childSelector, defaultOptions.threshold, defaultOptions.staggerDelay, defaultOptions.triggerOnce]);

  return { 
    animatedChildren, 
    allVisible,
    // Helper to check if a specific child is animated
    isChildAnimated: (child) => animatedChildren.includes(child)
  };
};

/**
 * Hook for parallax scroll effects
 * 
 * @param {React.RefObject} ref - Reference to the element
 * @param {number} speed - Parallax speed multiplier (0-1)
 * @returns {Object} - Parallax transform values
 */
export const useParallaxScroll = (ref, speed = 0.5) => {
  const [transform, setTransform] = useState({ translateY: 0, opacity: 1 });

  useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const elementRect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate parallax effect
      const elementCenter = elementRect.top + elementRect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      const translateY = distanceFromCenter * speed * -1;
      const opacity = 1 - Math.abs(distanceFromCenter) / (viewportHeight * 2);
      
      setTransform({
        translateY: Math.max(-100, Math.min(100, translateY)),
        opacity: Math.max(0.3, Math.min(1, opacity))
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, speed]);

  return transform;
};