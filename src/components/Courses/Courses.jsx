import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';

const courseData = [
  {
    id: 1,
    title: "B.Sc Course",
    description: "Bachelor of Science with comprehensive curriculum covering Physics, Chemistry, Mathematics, and Computer Science.",
    subjects: 5,
    duration: "3 Years",
    level: "Graduation",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop",
    link: "/courses/bsc-course",
    icon: "🔬",
    features: ["Advanced Lab Sessions", "Research Projects", "Industry Internships"],
    color: "#4a6bff"
  },
  {
    id: 2,
    title: "BA Course",
    description: "Bachelor of Arts with diverse specializations in Humanities, Social Sciences, and Languages.",
    subjects: 5,
    duration: "3 Years",
    level: "Graduation",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    link: "/courses/ba-course",
    icon: "📚",
    features: ["Multidisciplinary Approach", "Cultural Studies", "Language Specializations"],
    color: "#8a2be2"
  }
];

const Courses = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  
  const [isInView, setIsInView] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // Use Intersection Observer directly for better control
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setAnimationTriggered(true);
            
            // Add a small delay to ensure CSS loads
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 100);
          } else {
            entry.target.classList.remove('visible');
            setAnimationTriggered(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Heading animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 300);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  // Handle card hover effects
  const handleMouseEnter = useCallback((id) => {
    setHoveredCard(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  // Prevent animation on page load until section is in view
  useEffect(() => {
    const checkAnimation = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = (
          rect.top <= (window.innerHeight * 0.8) &&
          rect.bottom >= (window.innerHeight * 0.2)
        );
        
        if (isVisible) {
          setShouldAnimate(true);
        }
      }
    };

    // Initial check
    checkAnimation();

    // Check on scroll
    window.addEventListener('scroll', checkAnimation);
    return () => window.removeEventListener('scroll', checkAnimation);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="courses-section"
      id="courses"
      aria-labelledby="courses-heading"
      style={{ 
        opacity: shouldAnimate ? 0 : 1,
        transform: shouldAnimate ? 'translateY(20px)' : 'translateY(0)'
      }}
    >
      {/* Background Elements */}
      <div className="courses-background">
        <div className="bg-pattern bg-pattern-1"></div>
        <div className="bg-pattern bg-pattern-2"></div>
        <div className="bg-gradient"></div>
      </div>

      <div className="courses-container">
        {/* Section Header */}
        <div className="courses-header">
          <div 
            ref={headingRef}
            className="section-subtitle"
          >
            <span className="subtitle-icon">🎯</span>
            <span className="subtitle-text">Our Programs</span>
          </div>
          
          <h2 
            id="courses-heading"
            className="section-title"
          >
            <span className="title-line">Browse Popular</span>
            <span className="title-line highlight">Courses</span>
          </h2>
          
          <div className="section-description">
            <p>
              Choose from our premier degree programs designed to provide 
              industry-relevant education and prepare students for successful careers.
            </p>
          </div>
          
          <div className="title-decoration"></div>
        </div>

        {/* Courses Grid - Only 2 cards side by side */}
        <div 
          ref={cardsContainerRef}
          className="courses-grid"
        >
          {courseData.map((course, index) => (
            <div 
              key={course.id}
              className={`course-card-animated ${isInView ? 'visible' : ''}`}
              style={{ 
                '--stagger-delay': `${index * 200}ms`,
                '--card-color': course.color,
                animationDelay: `${index * 200}ms`
              }}
              onMouseEnter={() => handleMouseEnter(course.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                to={course.link} 
                className="course-card-link"
                aria-label={`View details for ${course.title}`}
              >
                {/* Card Image */}
                <div className="course-image-container">
                  <div className="image-overlay"></div>
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="course-image"
                    loading="lazy"
                    onLoad={(e) => {
                      e.target.classList.add('loaded');
                    }}
                  />
                  <div className="course-badge">
                    <span className="badge-icon">{course.icon}</span>
                    <span className="badge-text">{course.level}</span>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`image-hover-effect ${hoveredCard === course.id ? 'active' : ''}`}>
                    <div className="hover-shine"></div>
                  </div>
                  
                  {/* Card Glow Effect */}
                  <div className={`card-glow ${hoveredCard === course.id ? 'active' : ''}`}></div>
                </div>

                {/* Card Content */}
                <div className="course-content">
                  {/* Course Meta */}
                  <div className="course-meta">
                    <div className="meta-item">
                      <span className="meta-icon">📘</span>
                      <span className="meta-text">{course.subjects} Subjects</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">⏱️</span>
                      <span className="meta-text">{course.duration}</span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="course-title">{course.title}</h3>

                  {/* Course Description */}
                  <p className="course-description">{course.description}</p>

                  {/* Course Features */}
                  <div className="course-features">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="course-cta">
                    <span className="cta-text">Explore Program</span>
                    <span className="cta-arrow">→</span>
                    <div className="cta-hover-effect"></div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="course-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: hoveredCard === course.id ? '100%' : '0%',
                          background: `linear-gradient(90deg, ${course.color}, var(--color-accent))`
                        }}
                      ></div>
                    </div>
                    <div className="progress-text">Enrollment Open</div>
                  </div>
                </div>

                {/* Card Decoration */}
                <div className="card-decoration">
                  <div className="decoration-corner corner-top-left"></div>
                  <div className="decoration-corner corner-top-right"></div>
                  <div className="decoration-corner corner-bottom-left"></div>
                  <div className="decoration-corner corner-bottom-right"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="floating-element floating-1"></div>
                <div className="floating-element floating-2"></div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div 
          className={`view-all-container ${isInView ? 'visible' : ''}`}
          style={{ animationDelay: '800ms' }}
        >
          <Link to="/courses" className="view-all-link">
            <span className="view-all-text">View All Courses</span>
            <span className="view-all-arrow">↗</span>
            <div className="view-all-background"></div>
          </Link>
        </div>
      </div>

      {/* Floating Particles */}
      {isInView && (
        <div className="floating-particles">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="particle"
              style={{
                '--particle-delay': `${i * 0.3}s`,
                '--particle-duration': `${2.5 + i * 0.3}s`,
                left: `${5 + i * 10}%`,
                backgroundColor: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-accent)'
              }}
            ></div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Courses;