import React, { useRef, useState, useEffect } from 'react';
import './Partners.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';

// Import your partner images
import img17 from '../../images/img17.png';
import img18 from '../../images/img18.png';
import img19 from '../../images/img19.png';
import img20 from '../../images/img20.png';
import img21 from '../../images/img21.png';

const partnersData = [
  { id: 1, name: "OPENEDG", logo: img17, description: "EDUCATION PARTNER" },
  { id: 2, name: "School and Family Partnership", logo: img18, description: "School and Family Partnership" },
  { id: 3, name: "PROJECT MANAGMENT INSTITUTE", logo: img19, description: "PROJECT MANAGMENT INSTITUTE" },
  { id: 4, name: "MSME", logo: img20, description: "Micro, Small and Medium Enterprises" },
  { id: 5, name: "webcodian", logo: img21, description: "Authorized Traning Partner" }
];

const Partners = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const logosContainerRef = useRef(null);
  
  const [hoveredPartner, setHoveredPartner] = useState(null);
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

  // Stagger animation for logos - trigger once
  const { animatedChildren: animatedLogos } = useStaggerAnimation(
    logosContainerRef,
    '.partner-logo-animated',
    {
      threshold: 0.05,
      staggerDelay: 80,
      triggerOnce: true
    }
  );

  // Once animations complete, keep them visible
  useEffect(() => {
    if (sectionVisible && headingVisible && animatedLogos.length > 0) {
      setHasAnimated(true);
    }
  }, [sectionVisible, headingVisible, animatedLogos]);

  return (
    <section 
      ref={sectionRef}
      className={`partners-section ${sectionVisible || hasAnimated ? 'visible' : ''}`}
      id="partners"
      aria-labelledby="partners-heading"
    >
      {/* Background Elements */}
      <div className="partners-background">
        <div className="partners-bg-shape partners-bg-shape-1"></div>
        <div className="partners-bg-shape partners-bg-shape-2"></div>
        <div className="partners-bg-gradient"></div>
      </div>

      <div className="partners-container">
        {/* Section Header */}
        <div className="partners-header">
          <div 
            ref={headingRef}
            className={`partners-section-subtitle ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="0"
          >
            <span className="partners-subtitle-icon">🤝</span>
            <span className="partners-subtitle-text">OUR PARTNERS</span>
          </div>
          
          <h2 
            id="partners-heading"
            className={`partners-section-title ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="100"
          >
            <span className="partners-title-line">Trusted Partnerships for</span>
            <span className="partners-title-line highlight">Quality Education</span>
          </h2>
          
          <div 
            className={`partners-section-description ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="200"
          >
            <p>
              These strategic partnerships benefit students through enhanced learning opportunities, 
              recognized certifications, and industry-relevant curriculum.
            </p>
          </div>
          
          <div 
            className={`partners-title-decoration ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="300"
          ></div>
        </div>

        {/* Partners Grid */}
        <div 
          ref={logosContainerRef}
          className="partners-grid"
        >
          {partnersData.map((partner, index) => (
            <div 
              key={partner.id}
              className={`partner-logo-animated ${(animatedLogos.length > index || hasAnimated) ? 'visible' : ''}`}
              style={{ 
                '--stagger-delay': `${index * 80}ms`
              }}
              onMouseEnter={() => setHoveredPartner(partner.id)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <div className="partner-logo-card">
                {/* Logo Container */}
                <div className="partner-logo-container">
                  <div className="partner-logo-wrapper">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="partner-logo"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Partner Info */}
                <div className="partner-info">
                  <h3 className="partner-name">{partner.name}</h3>
                  <p className="partner-description">{partner.description}</p>
                </div>

                {/* Hover Effect */}
                <div className={`partner-hover-effect ${hoveredPartner === partner.id ? 'active' : ''}`}>
                  <div className="hover-dot hover-dot-1"></div>
                  <div className="hover-dot hover-dot-2"></div>
                  <div className="hover-dot hover-dot-3"></div>
                  <div className="hover-dot hover-dot-4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Particles */}
      <div className="partners-section-particles">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="partners-floating-particle"
            style={{
              '--particle-delay': `${i * 0.15}s`,
              '--particle-duration': `${2.5 + i * 0.2}s`,
              left: `${(i * 15)}%`,
              backgroundColor: i % 5 === 0 ? '#0066cc' : 
                             i % 5 === 1 ? '#ff6600' : 
                             i % 5 === 2 ? '#800080' : 
                             i % 5 === 3 ? '#009933' : '#cc0000'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Partners;