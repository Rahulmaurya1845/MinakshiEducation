import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BACourse.css";

import img14 from "../images/img14.png";
import img13 from "../images/img13.jpg";

export default function BSCCourse() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bacourse-page">
      {/* -------- Banner + Breadcrumb -------- */}
      <section className="banner">
        <div className="banner-inner">
          <h1>B.Sc Course</h1>

          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-home">
              Home
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">B.Sc Course</span>
          </nav>

          <p className="banner-subtitle">
            A three–year Bachelor of Science programme focusing on core science
            disciplines and practical laboratory exposure. [web:149]
          </p>
        </div>
      </section>

      {/* -------- Main Content + Sidebar -------- */}
      <section className="content-wrapper">
        {/* LEFT: MAIN CONTENT */}
        <div className="main-content">
          <h2>B.Sc Course Overview</h2>

          {/* Tabs */}
          <div className="tabs">
            <button
              type="button"
              className={activeTab === "overview" ? "tab active" : "tab"}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>

            <button
              type="button"
              className={activeTab === "subject" ? "tab active" : "tab"}
              onClick={() => setActiveTab("subject")}
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
                  <strong>B.Sc (Bachelor of Science)</strong> is a three–year
                  undergraduate programme that builds a strong foundation in
                  scientific concepts and analytical thinking. [web:149]
                </p>
                <p>
                  The curriculum typically covers specialisations such as{" "}
                  <strong>Physics, Chemistry, Mathematics, Botany, Zoology</strong>{" "}
                  and related lab work, combining theory with practical
                  application. [web:146]
                </p>
                <p>
                  Many institutions require candidates to complete{" "}
                  <strong>10+2 with at least 50% marks</strong> in a relevant
                  science stream, and may also consider entrance tests as per
                  their admission policy. [web:140]
                </p>
                <p>
                  Graduates can pursue roles in laboratories, education,
                  research, healthcare, data analysis, or continue higher
                  studies such as M.Sc and professional programmes. [web:139]
                </p>
              </div>
            )}

            {activeTab === "subject" && (
              <div className="fade-in">
                <h3 className="panel-heading">Core Subjects Offered</h3>
                <ul className="subject-list">
                  <li>Botany</li>
                  <li>Zoology</li>
                  <li>Chemistry</li>
                  <li>Physics</li>
                  <li>Mathematics</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-image-wrapper">
            <img src={img13} alt="B.Sc Course Cover" className="course-cover" />
          </div>

          <ul className="course-info">
            <li>
              <span className="label">Course Fee</span>
              <span className="value">Rs 45,650</span>
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
              <span className="value">10+2 (Science)</span>
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

          <Link to="/courses/ba-course" className="course-card">
            <div className="course-image-wrapper">
              <img src={img14} alt="BA Course" />
              <div className="course-overlay" />
              <div className="course-tag">Graduation</div>
            </div>
            <div className="course-card-body">
              <h4>BA Course</h4>
              <p>
                Build a strong base in humanities and social sciences with the
                Bachelor of Arts programme.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
