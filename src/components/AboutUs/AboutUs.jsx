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

  // Animated counting effect
  useEffect(() => {
    if (!contentVisible) {
      setYearsCount(0);
      setStudentsCount(0);
      setSuccessRate(0);
      return;
    }

    const duration = 2000; // 2 seconds
    const steps = 80; // smoother steps
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
        {/* Left Image */}
        <div
          ref={imageRef}
          className={`about-image-container ${imageVisible ? "visible" : ""}`}
          data-animation-delay="0"
        >
          <div className="image-wrapper">
            <img
              src={img12}
              alt="Meenakshi Education Sansthan campus and students"
              className="about-image"
              loading="lazy"
            />
            <div className="image-overlay"></div>
            <div className="image-decoration">
              <div className="decoration-circle"></div>
              <div className="decoration-circle"></div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div
          ref={contentRef}
          className={`about-content-container ${contentVisible ? "visible" : ""}`}
        >
          <div
            className={`about-badge ${contentVisible ? "visible" : ""}`}
            data-animation-delay="100"
          >
            <span className="badge-icon">🏫</span>
            <span className="badge-text">About Institution</span>
          </div>

          <div className="heading-wrapper">
            <h2
              id="about-heading"
              className={`about-heading ${contentVisible ? "visible" : ""}`}
              data-animation-delay="200"
            >
              <span className="heading-line">Meenakshi Education</span>
              <span className="heading-line highlight">
                Sansthan - Salumber
              </span>
            </h2>

            <div
              className={`heading-underline ${
                contentVisible ? "visible" : ""
              }`}
              data-animation-delay="300"
            ></div>
          </div>

          <div className="text-container">
            <p
              className={`about-text ${contentVisible ? "visible" : ""}`}
              data-animation-delay="400"
            >
              <strong>Meenakshi Education Sansthan</strong> is a premier
              educational institute established in 2019 with a vision to provide
              quality education and empower students to excel in competitive
              examinations.
            </p>

            <p
              className={`about-text ${contentVisible ? "visible" : ""}`}
              data-animation-delay="500"
            >
              The institution focuses on intellectual growth, innovation, and
              practical learning so that students become skilled professionals
              and contribute meaningfully to society.
            </p>

            <div
              className={`about-stats ${contentVisible ? "visible" : ""}`}
              data-animation-delay="600"
            >
              <div className="stat-item">
                <div className="stat-number">
                  <span className="counting-number">{yearsCount}</span>+
                </div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <span className="counting-number">{studentsCount}</span>+
                </div>
                <div className="stat-label">Students Enrolled</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  <span className="counting-number">{successRate}</span>%
                </div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="content-decoration">
            <div className="floating-element"></div>
            <div className="floating-element"></div>
          </div>
        </div>
      </div>

      <div className="section-background">
        <div className="bg-pattern"></div>
        <div className="bg-gradient"></div>
      </div>
    </section>
  );
};

export default AboutUs;
