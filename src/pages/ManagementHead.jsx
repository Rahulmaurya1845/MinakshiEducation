import React from "react";
import { Link } from "react-router-dom";
import "./ManagementHead.css";
import managementHead from "../images/managementhead.jpeg";

export default function ManagementHead() {
  return (
    <div className="management-container">
      {/* Header Section */}
      <div className="management-header">
        <div className="management-header-overlay" />
        <div className="management-header-content">
          <h1 className="management-title">Management Head</h1>
          <p className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>{" "}
            &gt; <span>About Us</span>
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="management-content">
        <div className="management-card">
          <div className="management-image-wrapper">
            <img
              className="management-image"
              src={managementHead}
              alt="Management Head"
            />
            <div className="management-image-badge">
              <span>Leadership</span>
            </div>
          </div>

          <div className="management-text">
            <h3 className="management-subtitle">
              ABOUT MEENAKSHI EDUCATION SANSTHAN - SALUMBER
            </h3>
            <h2 className="management-name">
              Savita Parmar
              <span className="management-role">Management Head</span>
            </h2>

            <p className="management-quote">
              “Education is not just about learning facts, but training the mind
              to think and grow with purpose.”
            </p>

            <p>
              The opportunities provided here, both in academics and
              extracurricular activities, are truly enriching and thoughtfully
              designed to support holistic growth of every student.
            </p>
            <p>
              From experienced faculty to modern facilities, every element of
              the institute reflects a commitment to quality, safety, and
              student well-being, even during challenging times.
            </p>
            <p>
              With a focus on discipline, innovation, and values, the institute
              creates an environment where students can thrive, excel, and
              realize their full potential under dedicated leadership.
            </p>

            <div className="management-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1500+</span>
                <span className="stat-label">Students Guided</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Faculty Members</span>
              </div>
            </div>

            <div className="management-actions">
              <button className="primary-btn">
                Know More About Institute
              </button>
              <button className="outline-btn">View Vision & Mission</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
