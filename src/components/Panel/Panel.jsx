import React, { useRef, useState, useEffect } from 'react';
import './Panel.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const panelData = [
  {
    id: 1,
    title: "Admin Panel",
    description: "Institute management system for administrators and faculty members.",
    icon: "👨‍💼",
    color: "#4a6bff",
    role: "Administrator",
    features: ["Student Management", "Course Management", "Reports & Analytics"],
    link: "/login"
  },
  {
    id: 2,
    title: "Student Login",
    description: "Access your student portal for courses, results, and resources.",
    icon: "🎓",
    color: "#00b894",
    role: "Student",
    features: ["Course Materials", "Exam Results", "Attendance Tracking"],
    link: "/student-zone/student-login"
  }
];

const Panel = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  
  const [hoveredPanel, setHoveredPanel] = useState(null);
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
    '.panel-card-animated',
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

  // Convert hex to rgba
  const hexToRgba = (hex, alpha = 0.3) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}, ${alpha}`;
  };

  return (
    <section 
      ref={sectionRef}
      className={`panel-section ${sectionVisible || hasAnimated ? 'visible' : ''}`}
      id="panel"
      aria-labelledby="panel-heading"
    >
      {/* Background Elements */}
      <div className="panel-background">
        <div className="panel-bg-shape panel-bg-shape-1"></div>
        <div className="panel-bg-shape panel-bg-shape-2"></div>
        <div className="panel-bg-gradient"></div>
      </div>

      <div className="panel-container">
        {/* Section Header */}
        <div className="panel-header">
          <div 
            ref={headingRef}
            className={`panel-section-subtitle ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="0"
          >
            <span className="panel-subtitle-icon">🔐</span>
            <span className="panel-subtitle-text">OUR PANEL</span>
          </div>
          
          <h2 
            id="panel-heading"
            className={`panel-section-title ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="100"
          >
            <span className="panel-title-line">Secure Access to</span>
            <span className="panel-title-line highlight">Institute Portals</span>
          </h2>
          
          <div 
            className={`panel-section-description ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="200"
          >
            <p>
              Access our secure portals designed for different user roles. 
              Each panel provides specialized tools and features for efficient institute management and student success.
            </p>
          </div>
          
          <div 
            className={`panel-title-decoration ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="300"
          ></div>
        </div>

        {/* Panel Grid */}
        <div 
          ref={cardsContainerRef}
          className="panel-grid"
        >
          {panelData.map((panel, index) => (
            <div 
              key={panel.id}
              className={`panel-card-animated ${(animatedCards.length > index || hasAnimated) ? 'visible' : ''}`}
              style={{ 
                '--stagger-delay': `${index * 120}ms`,
                '--panel-color': panel.color,
                '--panel-color-rgb': hexToRgba(panel.color, 1).split(',').slice(0, 3).join(',')
              }}
              onMouseEnter={() => setHoveredPanel(panel.id)}
              onMouseLeave={() => setHoveredPanel(null)}
            >
              <div className="panel-card">
                {/* Card Header */}
                <div className="panel-card-header">
                  <div 
                    className="panel-icon-wrapper"
                    style={{ 
                      background: `linear-gradient(135deg, ${panel.color}20, ${panel.color}40)`,
                      borderColor: panel.color
                    }}
                  >
                    <span className="panel-icon">{panel.icon}</span>
                  </div>
                  
                  {/* Role Badge */}
                  <div 
                    className="panel-role-badge"
                    style={{ backgroundColor: panel.color }}
                  >
                    {panel.role}
                  </div>
                </div>

                {/* Card Content */}
                <div className="panel-card-content">
                  <h3 className="panel-card-title">{panel.title}</h3>
                  <p className="panel-card-description">{panel.description}</p>
                  
                  {/* Features List */}
                  <div className="panel-features">
                    {panel.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="panel-feature-item"
                        style={{ '--feature-delay': `${idx * 60}ms` }}
                      >
                        <span className="panel-feature-bullet"></span>
                        <span className="panel-feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="panel-card-footer">
                  <div className="access-status">
                    <div className="status-indicator">
                      <div className="status-dot active"></div>
                      <span className="status-text">24/7 Access Available</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={panel.link}
                    className="panel-login-button"
                    style={{ backgroundColor: panel.color }}
                  >
                    <span className="login-icon">→</span>
                    <span className="login-text">Access Portal</span>
                  </Link>
                </div>

                {/* Card Effects */}
                <div className="panel-card-effects">
                  <div className={`panel-hover-glow ${hoveredPanel === panel.id ? 'active' : ''}`}></div>
                  <div className="panel-corner-dots panel-corner-top-left"></div>
                  <div className="panel-corner-dots panel-corner-top-right"></div>
                </div>
              </div>
              
              {/* Panel Particles */}
              <div className="panel-card-particles">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="panel-particle"
                    style={{
                      '--particle-delay': `${i * 0.3}s`,
                      '--particle-duration': `${1.8 + i * 0.2}s`,
                      backgroundColor: panel.color
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Particles */}
      <div className="panel-section-particles">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="panel-floating-particle"
            style={{
              '--particle-delay': `${i * 0.2}s`,
              '--particle-duration': `${2.5 + i * 0.2}s`,
              left: `${(i * 20)}%`,
              backgroundColor: i % 2 === 0 ? '#4a6bff' : '#00b894'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Panel;