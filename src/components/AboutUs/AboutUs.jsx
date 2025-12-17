// AboutUs.jsx - Perfect Image & Spacing Fixed
import React, { useRef, useEffect, useState } from "react";
import "./AboutUs.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import img12 from "../../images/img12.jpeg";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const [yearsCount, setYearsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  const { isVisible: sectionVisible } = useScrollAnimation(sectionRef, {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px",
  });

  const { isVisible: imageVisible } = useScrollAnimation(imageRef, {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  const { isVisible: contentVisible } = useScrollAnimation(contentRef, {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  // Smooth Counter Animation
  useEffect(() => {
    if (!contentVisible) {
      setYearsCount(0);
      setStudentsCount(0);
      setSuccessRate(0);
      return;
    }

    const duration = 2500;
    const steps = 100;
    const stepDuration = duration / steps;

    let currentStep = 0;
    let cancelled = false;

    const animateCounter = () => {
      if (cancelled) return;

      if (currentStep <= steps) {
        const progress = currentStep / steps;
        setYearsCount(Math.floor(4 * progress));
        setStudentsCount(Math.floor(500 * progress));
        setSuccessRate(Math.floor(95 * progress));
        currentStep++;
        setTimeout(animateCounter, stepDuration);
      } else {
        setYearsCount(4);
        setStudentsCount(500);
        setSuccessRate(95);
      }
    };

    animateCounter();

    return () => {
      cancelled = true;
    };
  }, [contentVisible]);

  return (
    <section
      ref={sectionRef}
      className={`about-section ${sectionVisible ? "visible" : ""}`}
      id="about-us"
      aria-labelledby="about-heading"
    >
      <div className="about-container">
        {/* Perfect Image Section */}
        <div
          ref={imageRef}
          className={`about-image-container ${imageVisible ? "visible" : ""}`}
        >
          <div className="image-frame">
            <img
              src={img12}
              alt="Meenakshi Education Sansthan campus"
              className="about-image"
              loading="lazy"
            />
            <div className="image-shine"></div>
            <div className="image-border"></div>
          </div>
        </div>

        {/* Compact Content Section */}
        <div
          ref={contentRef}
          className={`about-content-container ${contentVisible ? "visible" : ""}`}
        >
          <div className={`about-badge ${contentVisible ? "visible" : ""}`}>
            <div className="badge-dot"></div>
            <span>About Institution</span>
          </div>

          <h2
            id="about-heading"
            className={`about-heading ${contentVisible ? "visible" : ""}`}
          >
            <span>Meenakshi Education</span>
            <span className="highlight">Sansthan - Salumber</span>
          </h2>

          <div className="about-description">
            <p className={`about-text ${contentVisible ? "visible" : ""}`}>
              <strong>Meenakshi Education Sansthan</strong> is a premier educational 
              institute established in 2019 with a vision to provide quality education 
              and empower students to excel in competitive examinations.
            </p>

            <p className={`about-text ${contentVisible ? "visible" : ""}`}>
              The institution focuses on intellectual growth, innovation, and practical 
              learning so students become skilled professionals and contribute 
              meaningfully to society.
            </p>
          </div>

          {/* Executive Stats - Compact */}
          <div className={`about-stats ${contentVisible ? "visible" : ""}`}>
            <div className="stat-item">
              <div className="stat-value">
                <span className="counter">{yearsCount}</span>
                <span className="suffix">+</span>
              </div>
              <div className="stat-label">Years Excellence</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                <span className="counter">{studentsCount}</span>
                <span className="suffix">K+</span>
              </div>
              <div className="stat-label">Students Enrolled</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                <span className="counter">{successRate}</span>%
              </div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="background-elements">
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
        <div className="bg-gradient"></div>
      </div>
    </section>
  );
};

export default AboutUs;
