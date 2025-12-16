import React from "react";
import { Link } from "react-router-dom";
import "./OtherFaculty.css";
import otherfaculty from '../images/otherfaculty.jpeg';

export default function OtherFaculty() {
  return (
    <div className="faculty-wrapper">

      {/* Top Gradient Section */}
      <div className="faculty-header">
        <h1>Our Faculties</h1>
        <p className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link> &gt; Our Faculties
        </p>
      </div>

      {/* Content Section */}
      <div className="faculty-content">

        <div className="circle-wrapper">
          <div className="circle-border">
            <img src={otherfaculty} alt="staff" className="faculty-img" />
          </div>
        </div>

        <h2 className="faculty-title">STAFF</h2>
        <p className="faculty-details">
          Managing Trustee, Ravada Foundation, Hyderabad <br />
          500 029
        </p>

      </div>
    </div>
  );
}
