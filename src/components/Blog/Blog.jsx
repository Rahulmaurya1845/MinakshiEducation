import React, { useRef, useState, useEffect } from 'react';
import './Blog.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const blogData = [
  {
    id: 1,
    title: "Help to Women Education",
    excerpt: "Empowering women through education initiatives and support programs.",
    date: "03 March 2023",
    readTime: "5 min read",
    category: "Education",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop",
    color: "#ff6b6b",
    tags: ["Women Empowerment", "Education", "Support"],
    slug: "help-to-women-education"
  },
  {
    id: 2,
    title: "Admission Notice",
    excerpt: "Important updates and notices regarding admissions for the upcoming academic year.",
    date: "21 May 2024",
    readTime: "3 min read",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop",
    color: "#4ecdc4",
    tags: ["Admissions", "Notice", "Updates"],
    slug: "admission-notice"
  },
  {
    id: 3,
    title: "Annual Function 2023",
    excerpt: "A glimpse into our spectacular annual function celebrating student achievements.",
    date: "11 Feb 2023",
    readTime: "4 min read",
    category: "Event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w-1200&auto=format&fit=crop",
    color: "#ffd166",
    tags: ["Annual Function", "Celebration", "Students"],
    slug: "function-2023"
  },
  // {
  //   id: 4,
  //   title: "Student Achievement",
  //   excerpt: "Celebrating outstanding student achievements in academics and extracurricular activities.",
  //   date: "02 April 2023",
  //   readTime: "6 min read",
  //   category: "Achievement",
  //   image: "https://images.unsplash.com/photo-1524178239883-269a632bb546?q=80&w=1200&auto=format&fit=crop",
  //   color: "#6a0572",
  //   tags: ["Achievement", "Success", "Awards"],
  //   slug: "student-achievement"
  // }
];

const Blog = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Section visibility animation - trigger once
  const { isVisible: sectionVisible } = useScrollAnimation(sectionRef, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  // Heading animation - trigger once
  const { isVisible: headingVisible } = useScrollAnimation(headingRef, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });

  // Stagger animation for cards - trigger once
  const { animatedChildren: animatedCards } = useStaggerAnimation(
    cardsContainerRef,
    '.blog-card-animated',
    {
      threshold: 0.05,
      staggerDelay: 100,
      triggerOnce: true
    }
  );

  // Once animations complete, keep them visible
  useEffect(() => {
    if (sectionVisible && headingVisible && animatedCards.length > 0) {
      setHasAnimated(true);
    }
  }, [sectionVisible, headingVisible, animatedCards]);

  return (
    <section 
      ref={sectionRef}
      className={`blog-section ${sectionVisible || hasAnimated ? 'visible' : ''}`}
      id="blog"
      aria-labelledby="blog-heading"
    >
      {/* Background Elements */}
      <div className="blog-background">
        <div className="blog-bg-shape blog-bg-shape-1"></div>
        <div className="blog-bg-shape blog-bg-shape-2"></div>
        <div className="blog-bg-shape blog-bg-shape-3"></div>
        <div className="blog-bg-gradient"></div>
      </div>

      <div className="blog-container">
        {/* Section Header */}
        <div className="blog-header">
          <div 
            ref={headingRef}
            className={`blog-section-subtitle ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="0"
          >
            <span className="blog-subtitle-icon">📰</span>
            <span className="blog-subtitle-text">OUR BLOG & UPDATES</span>
          </div>
          
          <h2 
            id="blog-heading"
            className={`blog-section-title ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="100"
          >
            <span className="blog-title-line">Latest Updates &</span>
            <span className="blog-title-line highlight">Educational Insights</span>
          </h2>
          
          <div 
            className={`blog-section-description ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="200"
          >
            <p>
              Stay informed with the latest happenings, achievements, and educational insights 
              from our institute. Discover stories that inspire and shape futures.
            </p>
          </div>
          
          <div 
            className={`blog-title-decoration ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="300"
          ></div>
        </div>

        {/* Blog Grid - Showing all 4 blogs */}
        <div 
          ref={cardsContainerRef}
          className="blog-grid"
        >
          {blogData.map((blog, index) => (
            <div 
              key={blog.id}
              className={`blog-card-animated ${(animatedCards.length > index || hasAnimated) ? 'visible' : ''}`}
              style={{ 
                '--stagger-delay': `${index * 100}ms`,
                '--blog-color': blog.color
              }}
              onMouseEnter={() => setHoveredBlog(blog.id)}
              onMouseLeave={() => setHoveredBlog(null)}
            >
              <div className="blog-card">
                {/* Blog Image */}
                <div className="blog-image-container">
                  <Link to={`/highlights/blog/${blog.slug}`}>
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="blog-image"
                      loading="lazy"
                    />
                  </Link>
                  
                  {/* Category Badge */}
                  <div 
                    className="blog-category-badge"
                    style={{ backgroundColor: blog.color }}
                  >
                    {blog.category}
                  </div>
                  
                  {/* Date Overlay */}
                  <div className="blog-date-overlay">
                    <div className="blog-date-day">{blog.date.split(' ')[0]}</div>
                    <div className="blog-date-month">{blog.date.split(' ')[1]}</div>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="blog-content">
                  {/* Tags */}
                  <div className="blog-tags">
                    {blog.tags.slice(0, 2).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="blog-tag"
                        style={{ 
                          '--tag-delay': `${idx * 60}ms`,
                          borderColor: blog.color
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="blog-title">
                    <Link to={`/highlights/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="blog-excerpt">{blog.excerpt}</p>

                  {/* Meta Information */}
                  <div className="blog-meta">
                    <div className="blog-meta-item">
                      <span className="blog-meta-icon">📅</span>
                      <span className="blog-meta-text">{blog.date}</span>
                    </div>
                    <div className="blog-meta-item">
                      <span className="blog-meta-icon">⏱️</span>
                      <span className="blog-meta-text">{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="blog-action">
                    <Link 
                      to={`/highlights/blog/${blog.slug}`}
                      className="blog-read-more"
                      style={{ color: blog.color }}
                    >
                      <span className="blog-read-text">Read Full Story</span>
                      <span className="blog-read-icon">→</span>
                    </Link>
                  </div>
                </div>

                {/* Card Effects */}
                <div className="blog-card-effects">
                  <div className={`blog-hover-glow ${hoveredBlog === blog.id ? 'active' : ''}`}></div>
                  <div className="blog-corner-dots blog-corner-top-left"></div>
                  <div className="blog-corner-dots blog-corner-top-right"></div>
                </div>
              </div>
              
              {/* Blog Particles */}
              <div className="blog-card-particles">
                {[...Array(2)].map((_, i) => (
                  <div 
                    key={i}
                    className="blog-particle"
                    style={{
                      '--particle-delay': `${i * 0.4}s`,
                      '--particle-duration': `${2 + i * 0.2}s`,
                      backgroundColor: blog.color
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Particles */}
      <div className="blog-section-particles">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="blog-floating-particle"
            style={{
              '--particle-delay': `${i * 0.25}s`,
              '--particle-duration': `${2.5 + i * 0.2}s`,
              left: `${(i * 15)}%`,
              backgroundColor: i % 3 === 0 ? '#ff6b6b' : i % 3 === 1 ? '#4ecdc4' : '#ffd166'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Blog;