import React from "react";
import { Link } from "react-router-dom";
import "./PrincipalMessage.css";
import principalimg from "../images/principalimg.jpeg";

export default function PrincipalMessage() {
  return (
    <div className="principal-container">
      {/* Header Section */}
      <div className="principal-header">
        <div className="principal-header-overlay" />
        <div className="principal-header-content">
          <h1 className="principal-title">Principal Message</h1>
          <p className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>{" "}
            &gt; <span>About Us</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="principal-content">
        <div className="principal-card">
          {/* Left: Image */}
          <div className="principal-image-wrapper">
            <img
              src={principalimg}
              alt="Principal"
              className="principal-image"
            />
            <div className="principal-image-badge">
              <span>Principal</span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="principal-text">
            <h3 className="principal-subtitle">
              ABOUT MEENAKSHI EDUCATION SANSTHAN - SALUMBER
            </h3>
            <h2 className="principal-name">
              Dr. Neetu Solanki
              <span className="principal-role">Principal</span>
            </h2>

            <p className="principal-quote">
              “A nurturing academic environment helps every learner discover
              potential, build character, and move confidently towards a
              successful future.”
            </p>

            <p>
              At <strong>Meenakshi Education Sansthan</strong>, the focus is on
              creating a student-centric ecosystem where discipline, innovation,
              and strong values go hand in hand with academic excellence.
            </p>
            <p>
              With dedicated faculty, structured guidance, and continuous
              mentoring, the institute strives to ensure that every student can
              grow, perform, and achieve remarkable milestones in their
              educational journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
