import React, { useState, useEffect, useRef } from "react";
import "./HeroSlider.css";

import slide1 from "../../images/img1.jpg";
import slide2 from "../../images/img2.jpg";
import slide3 from "../../images/img3.jpg";
import slide4 from "../../images/img4.jpg";
import slide5 from "../../images/img5.jpg";
import slide6 from "../../images/img6.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);

  /* ===== START SLIDER ===== */
  const startSlider = () => {
    stopSlider(); // safety
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setCurrentIndex(prev => (prev + 1) % slides.length);
      }
    }, 3000); // ✅ 3 seconds
  };

  /* ===== STOP SLIDER ===== */
  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  /* ===== AUTO START ON MOUNT ===== */
  useEffect(() => {
    startSlider();
    return stopSlider;
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  };

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
      aria-label="Hero Image Slider"
    >
      {/* Blurred background */}
      <div
        className="hero-bg-blur"
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      />

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === currentIndex ? "active" : "inactive"
          }`}
        >
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            className="hero-image"
            draggable="false"
          />
          <div className="hero-overlay" />
        </div>
      ))}

      {/* Arrows */}
      <button
        className="arrow left"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        className="arrow right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
