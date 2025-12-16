import React from "react";
// import "./BlogDetail.css";
import governanceImg from "../images/blog2.jpg";

export default function StudentGovernance() {
  return (
    <div className="blog-detail-container">
      <img src={governanceImg} className="blog-detail-img" alt="" />

      <div className="blog-detail-meta">
        <span>03 March 2023</span>
        <span>12:00 Ago</span>
      </div>

      <h2 className="blog-detail-title">Student Governance</h2>

      <p className="blog-detail-text">
        Student governance encourages leadership skills among students and provides them with
        opportunities to take part in important decision-making activities. Committees and clubs
        are formed to manage academic, cultural, and sports events.
      </p>

      <p className="blog-detail-text">
        Students actively participate in maintaining discipline, organizing programs, and
        improving communication channels between administration and learners.
      </p>
    </div>
  );
}
