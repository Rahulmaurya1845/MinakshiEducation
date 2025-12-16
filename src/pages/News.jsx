import React from 'react';
import { Link } from 'react-router-dom';
import './Syllabus.css'; // We'll create CSS for background and padding

export default function News() {
  return (
    <div className="syllabus-page">
      {/* Banner / Page Header */}
      <div className="syllabus-banner">
        <h1>News</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; <span>News</span>
        </div>
      </div>

     
    </div>
  )
}
