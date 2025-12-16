import React from "react";
import "./StudentAchievement.css";

const StudentAchievement = () => {
  return (
    <section className="page-container">
      <div className="page-box">
        <h1 className="page-title">Student Achievements</h1>

        <p className="page-text">
          Our students have consistently excelled in academics, sports,
          cultural events, and various inter-school competitions. We take
          pride in their dedication and accomplishments.
        </p>

        <ul className="achievement-list">
          <li>🏆 State-level Science Exhibition Winner</li>
          <li>🥇 1st Rank in District Olympiad</li>
          <li>🎨 Art & Craft Competition – Gold Medal</li>
          <li>⚽ Inter-school Football Tournament Champions</li>
        </ul>
      </div>
    </section>
  );
};

export default StudentAchievement;
