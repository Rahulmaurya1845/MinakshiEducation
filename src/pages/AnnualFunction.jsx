import React from "react";
// import "./BlogDetail.css";
import annualImg from "../images/blog4.jpg";

export default function AnnualFunction() {
  return (
    <div className="blog-detail-container">
      <img src={annualImg} className="blog-detail-img" alt="" />

      <div className="blog-detail-meta">
        <span>11 February 2023</span>
        <span>12:00 Ago</span>
      </div>

      <h2 className="blog-detail-title">Annual Function 2023</h2>

      <p className="blog-detail-text">
        The Annual Function is a celebration of talent, culture, and academic achievements.
        Students participate in various activities like dance, drama, singing, sports awards,
        and academic prizes.
      </p>

      <p className="blog-detail-text">
        The event highlights the accomplishments of the year and motivates students to explore
        their abilities and showcase their skills.
      </p>
    </div>
  );
}
