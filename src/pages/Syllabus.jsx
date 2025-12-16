import React from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css'; // We'll create CSS for background and padding

export default function Syllabus() {
  return (
    <div className="syllabus-page">
      {/* Banner / Page Header */}
      <div className="syllabus-banner">
        <h1>Syllabus</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; <span>Syllabus</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="syllabus-content">
        <p>Download syllabus here.</p>
        {/* You can later add links to PDF files */}
      </section>
    </div>
  )
}
