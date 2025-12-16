import React, { useRef, useState, useEffect } from 'react';
import './Facilities.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';

const facilitiesData = [
  {
    id: 1,
    title: "Verifiable Certifications",
    description: "All certifications are verifiable and recognized by educational authorities.",
    icon: "🏆",
    color: "#4a6bff",
    features: ["Government Recognized", "Online Verification", "Lifetime Validity"]
  },
  {
    id: 2,
    title: "Placement Assistance",
    description: "Comprehensive placement support with industry partnerships and career counseling.",
    icon: "💼",
    color: "#8a2be2",
    features: ["Industry Tie-ups", "Career Guidance", "Interview Preparation"]
  },
  {
    id: 3,
    title: "Campus Security",
    description: "24/7 security surveillance and dedicated safety protocols for students.",
    icon: "🛡️",
    color: "#00b894",
    features: ["CCTV Surveillance", "Security Personnel", "Emergency Response"]
  },
  {
    id: 4,
    title: "Affordable Fee Structure",
    description: "Transparent and affordable fee structure with flexible payment options.",
    icon: "💰",
    color: "#fd79a8",
    features: ["No Hidden Charges", "Installment Plans", "Scholarships Available"]
  },
  {
    id: 5,
    title: "Theory to Practical",
    description: "Hands-on learning approach with practical labs and real-world projects.",
    icon: "🔬",
    color: "#e17055",
    features: ["Modern Labs", "Project Work", "Industry Visits"]
  },
  {
    id: 6,
    title: "Flexible Batch Timing",
    description: "Multiple batch options to accommodate different student schedules.",
    icon: "⏰",
    color: "#0984e3",
    features: ["Morning & Evening", "Weekend Batches", "Online Options"]
  },
  {
    id: 7,
    title: "Study Materials",
    description: "Comprehensive study materials including books, notes, and digital resources.",
    icon: "📚",
    color: "#6c5ce7",
    features: ["Printed Books", "E-Library", "Video Lectures"]
  },
  {
    id: 8,
    title: "Doubt Clearing Sessions",
    description: "Regular doubt clearing sessions with faculty for personalized attention.",
    icon: "🎯",
    color: "#00cec9",
    features: ["One-on-One Sessions", "Group Discussions", "Online Support"]
  },
  {
    id: 9,
    title: "Modern Infrastructure",
    description: "State-of-the-art infrastructure with modern classrooms and facilities.",
    icon: "🏛️",
    color: "#fdcb6e",
    features: ["Smart Classes", "Wi-Fi Campus", "Library Resources"]
  }
];

const Facilities = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
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
    '.facility-card-animated',
    {
      threshold: 0.05,
      staggerDelay: 80,
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
      className={`facilities-section ${sectionVisible || hasAnimated ? 'visible' : ''}`}
      id="facilities"
      aria-labelledby="facilities-heading"
    >
      {/* Background Elements */}
      <div className="facilities-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
        <div className="bg-gradient"></div>
      </div>

      <div className="facilities-container">
        {/* Section Header */}
        <div className="facilities-header">
          <div 
            ref={headingRef}
            className={`section-subtitle ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="0"
          >
            <span className="subtitle-icon">✨</span>
            <span className="subtitle-text">Premium Facilities</span>
          </div>
          
          <h2 
            id="facilities-heading"
            className={`section-title ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="100"
          >
            <span className="title-line">Explore Our World-Class</span>
            <span className="title-line highlight">Student Facilities</span>
          </h2>
          
          <div 
            className={`section-description ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="200"
          >
            <p>
              We provide state-of-the-art facilities designed to enhance learning experience 
              and ensure holistic development of every student.
            </p>
          </div>
          
          <div 
            className={`title-decoration ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="300"
          ></div>
        </div>

        {/* Facilities Grid */}
        <div 
          ref={cardsContainerRef}
          className="facilities-grid"
        >
          {facilitiesData.map((facility, index) => (
            <div 
              key={facility.id}
              className={`facility-card-animated ${(animatedCards.length > index || hasAnimated) ? 'visible' : ''}`}
              style={{ 
                '--stagger-delay': `${index * 80}ms`,
                '--card-color': facility.color
              }}
              onMouseEnter={() => setHoveredCard(facility.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveCard(activeCard === facility.id ? null : facility.id)}
            >
              <div className="facility-card">
                {/* Card Header */}
                <div className="card-header">
                  <div 
                    className="icon-wrapper"
                    style={{ 
                      background: `linear-gradient(135deg, ${facility.color}20, ${facility.color}40)`,
                      borderColor: facility.color
                    }}
                  >
                    <span className="facility-icon">{facility.icon}</span>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="rating-stars">
                    <div className="stars-container">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`star ${i < 4 ? 'filled' : ''}`}
                          style={{ '--star-delay': `${i * 60}ms` }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="rating-text">4.8/5</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  <h3 className="facility-title">{facility.title}</h3>
                  <p className="facility-description">{facility.description}</p>
                  
                  {/* Features List */}
                  <div className={`features-list ${activeCard === facility.id ? 'expanded' : ''}`}>
                    {facility.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="feature-item"
                        style={{ '--feature-delay': `${idx * 60}ms` }}
                      >
                        <span className="feature-bullet"></span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="card-footer">
                  <div className="progress-indicator">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: hoveredCard === facility.id ? '100%' : '85%',
                          background: `linear-gradient(90deg, ${facility.color}, ${facility.color}dd)`
                        }}
                      ></div>
                    </div>
                    <span className="progress-text">High Demand</span>
                  </div>
                  
                  <button 
                    className={`info-button ${activeCard === facility.id ? 'active' : ''}`}
                    aria-label={activeCard === facility.id ? 'Show less' : 'Show features'}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCard(activeCard === facility.id ? null : facility.id);
                    }}
                  >
                    <span className="button-icon">ⓘ</span>
                    <span className="button-text">
                      {activeCard === facility.id ? 'Less' : 'More'}
                    </span>
                  </button>
                </div>

                {/* Card Effects */}
                <div className="card-effects">
                  <div className={`hover-glow ${hoveredCard === facility.id ? 'active' : ''}`}></div>
                  <div className="corner-dots corner-top-left"></div>
                  <div className="corner-dots corner-top-right"></div>
                  <div className="corner-dots corner-bottom-left"></div>
                  <div className="corner-dots corner-bottom-right"></div>
                </div>
              </div>
              
              {/* Floating Particles */}
              <div className="card-particles">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="particle"
                    style={{
                      '--particle-delay': `${i * 0.3}s`,
                      '--particle-duration': `${1.5 + i * 0.2}s`,
                      backgroundColor: facility.color
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div 
          className={`facilities-stats ${sectionVisible || hasAnimated ? 'visible' : ''}`}
          data-animation-delay="500"
        >
          <div className="stats-container">
            <div className="stat-item" style={{ '--i': 0 }}>
              <div className="stat-number">100+</div>
              <div className="stat-label">Happy Students</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item" style={{ '--i': 1 }}>
              <div className="stat-number">9+</div>
              <div className="stat-label">Premium Facilities</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item" style={{ '--i': 2 }}>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Section Particles */}
      <div className="section-particles">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="floating-particle"
            style={{
              '--particle-delay': `${i * 0.15}s`,
              '--particle-duration': `${2 + i * 0.15}s`,
              left: `${(i * 12)}%`,
              backgroundColor: i % 3 === 0 ? '#4a6bff' : i % 3 === 1 ? '#8a2be2' : '#00cec9'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;