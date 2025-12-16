import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BACourse.css";

import img14 from "../images/img14.png";
import img13 from "../images/img13.jpg";

export default function BACourse() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bacourse-page">
      {/* -------- Banner + Breadcrumb -------- */}
      <section className="banner">
        <div className="banner-inner">
          <h1>BA Course</h1>

          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-home">
              Home
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">BA Course</span>
          </nav>

          <p className="banner-subtitle">
            A comprehensive Bachelor of Arts programme designed to build a strong
            foundation in humanities and social sciences.
          </p>
        </div>
      </section>

      {/* -------- Main Content + Sidebar -------- */}
      <section className="content-wrapper">
        {/* LEFT: MAIN CONTENT */}
        <div className="main-content">
          <h2>BA Course Overview</h2>

          {/* Tabs */}
          <div className="tabs">
            <button
              className={activeTab === "overview" ? "tab active" : "tab"}
              onClick={() => setActiveTab("overview")}
              type="button"
            >
              Overview
            </button>

            <button
              className={activeTab === "subject" ? "tab active" : "tab"}
              onClick={() => setActiveTab("subject")}
              type="button"
            >
              Subjects
            </button>
          </div>

          {/* Tab Panel */}
          <div className="tab-panel">
            {activeTab === "overview" && (
              <div className="fade-in">
                <h3 className="panel-heading">Course Description</h3>
                <p>
                  BA admission generally requires candidates to pass{" "}
                  <strong>Higher Secondary (10+2)</strong> with a minimum of
                  <strong> 40% aggregate</strong>, as per institutional
                  guidelines.
                </p>
                <p>
                  The first year of the BA programme helps students build a
                  conceptual foundation, develop critical thinking, and prepare
                  for advanced studies.
                </p>
                <p>
                  Graduates can explore opportunities in administration, civil
                  services, teaching, content writing, human resources, and
                  various other fields.
                </p>
              </div>
            )}

            {activeTab === "subject" && (
              <div className="fade-in">
                <h3 className="panel-heading">Core Subjects Offered</h3>
                <ul className="subject-list">
                  <li>Hindi Literature</li>
                  <li>English Literature</li>
                  <li>History</li>
                  <li>Political Science</li>
                  <li>Geography</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-image-wrapper">
            <img src={img14} alt="BA Course Cover" className="course-cover" />
          </div>

          <ul className="course-info">
            <li>
              <span className="label">Course Fee</span>
              <span className="value">Rs 30,650</span>
            </li>
            <li>
              <span className="label">Duration</span>
              <span className="value">3 Years</span>
            </li>
            <li>
              <span className="label">Fee Type</span>
              <span className="value">One Time</span>
            </li>
            <li>
              <span className="label">Skill Level</span>
              <span className="value">Intermediate</span>
            </li>
            <li>
              <span className="label">Eligibility</span>
              <span className="value">10+2</span>
            </li>
            <li>
              <span className="label">Language</span>
              <span className="value">English / Hindi</span>
            </li>
          </ul>
        </aside>
      </section>

      {/* -------- Related Course Section -------- */}
      <section className="related-courses">
        <div className="related-inner">
          <h3>Related Courses</h3>
          <h2>Courses You May Like</h2>

          <Link to="/courses/bsc-course" className="course-card">
            <div className="course-image-wrapper">
              <img src={img13} alt="B.Sc Course" />
              <div className="course-overlay" />
              <div className="course-tag">Graduation</div>
            </div>
            <div className="course-card-body">
              <h4>B.Sc Course</h4>
              <p>
                Explore scientific disciplines with a structured Bachelor of
                Science programme.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
