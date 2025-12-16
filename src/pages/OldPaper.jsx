import React from 'react';
import { Link } from 'react-router-dom';
import './OldPaper.css'; // We'll create CSS for background and padding

export default function OldPaper() {
  return (
    <div className="oldpaper-page">
      {/* Banner / Page Header */}
      <div className="oldpaper-banner">
        <h1>Old Paper</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; <span>Old Paper</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="oldpaper-content">
        <p>Access old papers here.</p>
        {/* Later you can add links to PDF files or download buttons */}
      </section>
    </div>
  )
}
