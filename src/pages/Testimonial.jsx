import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Testimonial.css";
import img1 from "../images/testimonial.png";

export default function Testimonial() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="testimonial-container">
      {/* ===== PAGE HEADER ===== */}
      <div className="page-header fade-up">
        <h1>Student Testimonial</h1>
        <p className="breadcrumb">
          <Link className="breadcrumb-home" to="/">
            Home
          </Link>{" "}
          › <span>Testimonial</span>
        </p>
      </div>

      {/* ===== TESTIMONIAL CARD ===== */}
      <section className="testimonial-box fade-up">
        {/* Image Section */}
        <div className="testimonial-image">
          <img src={img1} alt="Student Review" />
        </div>

        {/* Content Section */}
        <div className="testimonial-text">
          <h3>⭐ Genuine Student Feedback</h3>

          <p>
            “This institution played a crucial role in shaping my academic
            journey. The faculty is highly knowledgeable, approachable, and
            always supportive. The learning environment is disciplined,
            motivating, and student-focused.”
          </p>

          <div className="student-info">
            <h4>Rahul Sharma</h4>
            <span>Batch: 2024 · Computer Science</span>
          </div>
        </div>
      </section>
    </div>
  );
}
