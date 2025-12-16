import React from "react";

import womenImg from "../images/blog3.jpg";

export default function WomenEducation() {
  return (
    <div className="blog-detail-container">
      <img src={womenImg} className="blog-detail-img" alt="" />

      <div className="blog-detail-meta">
        <span>03 March 2023</span>
        <span>12:00 Ago</span>
      </div>

      <h2 className="blog-detail-title">Help to Women Education</h2>

      <p className="blog-detail-text">
        Our institute promotes women education by providing equal opportunities, safe campus
        culture, and supportive learning environments. Special awareness programs and training
        sessions are conducted for women empowerment.
      </p>

      <p className="blog-detail-text">
        Scholarship assistance and counselling support help female students continue their studies
        without hurdles.
      </p>
    </div>
  );
}
