import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentVerification.css';
import verification from '../images/verification.png';
export default function StudentVerification() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [dob, setDob] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Registration Number:', registrationNumber);
    console.log('Date of Birth:', dob);
  };

  return (
    <div className="student-verification-page">
      {/* Header Section */}
      <div className="student-verification-header">
        <h1>Student Verification</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> &rsaquo; <span>Student Verification</span>
        </div>
      </div>

      {/* Form Section */}
      <section className="student-verification-section">
        <div className="student-verification-container">
          <div className="form-container">
            <h2>Student Verification</h2>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Enter Registration Number"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                required
              />
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
              <button type="submit">Search</button>
            </form>
          </div>

          <div className="image-container">
            <img src={verification}alt="Verification Illustration" />
          </div>
        </div>
      </section>
    </div>
  );
}
