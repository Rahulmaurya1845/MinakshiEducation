import React from "react";
import { Link } from "react-router-dom";
import "./DirectorMessage.css";
import director from "../images/director.jpeg";

export default function DirectorMessage() {
  return (
    <div className="director-container">
      {/* Header Section */}
      <div className="director-header">
        <div className="director-header-overlay" />
        <div className="director-header-content">
          <h1 className="director-title">Director Message</h1>
          <p className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>{" "}
            &gt; <span>About Us</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="director-content">
        <div className="director-card">
          {/* Left: Image */}
          <div className="director-image-wrapper">
            <img
              src={director}
              alt="Director"
              className="director-image"
            />
            <div className="director-image-badge">
              <span>Director</span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="director-text">
            <h3 className="director-subtitle">
              ABOUT MEENAKSHI EDUCATION SANSTHAN - SALUMBER
            </h3>
            <h2 className="director-name">
              Mrs. Meena Masar
              <span className="director-role">Director</span>
            </h2>

            <p className="director-quote">
              “Education opens the doors of opportunity, builds character, and
              prepares students to lead with confidence in a dynamic world.”
            </p>

            <p>
              Empowering students with quality education across a broader
              horizon is the mission embraced at{" "}
              <strong>Meenakshi Education Sansthan</strong>. As the{" "}
              <strong>Director</strong>, it is a privilege to guide young minds
              in today&apos;s rapidly evolving academic and professional
              landscape.
            </p>

            <p>
              Understanding the competitive environment, the institute is
              committed to offering excellent learning pathways that support
              personal growth, skill development, and career advancement for
              students aspiring to excel in the IT sector and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="director-bottom">
        <div className="director-bottom-inner">
          <p>
            In the emerging context of the IT industry, updated computer
            education and strong fundamentals ensure a bright future with a
            continuously advancing career profile, backed by robust academic
            standards.
          </p>

          <p>
            The institute provides an adaptable support system that assists
            students from the pre-application stage to guided learning. A
            dedicated and experienced team strives for excellence in computer
            education, upholding values of integrity, discipline, and academic
            quality.
          </p>

          <p>
            With a focus on affordability, guidance, and result-oriented
            mentoring, Meenakshi Education Sansthan works closely with students
            to help them achieve their academic goals and reach admirable
            heights in their chosen careers.
          </p>

          <strong className="signature">
            Meenakshi Education Sansthan
            <br />
            Mrs. Meena Masar
            <br />
            (Director)
          </strong>
        </div>
      </div>
    </div>
  );
}
