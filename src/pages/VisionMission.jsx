import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import your local images (replace path and filenames as needed)
import missionImg from '../images/mission.png';
import visionImg from '../images/vision.png';
import valueImg from '../images/value.png';

import './VisionMission.css';

const images = {
  mission: missionImg,
  vision: visionImg,
  value: valueImg,
};

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState('mission');
  const navigate = useNavigate();

  return (
    <>
      {/* Header with centered heading and left-aligned breadcrumb */}
      <header className="principal-header">
        <h1>Vision & Mission</h1>
        <div className="breadcrumb">
          <button className="breadcrumb-link" onClick={() => navigate('/')}>Home</button>
          <span> › </span>
          <span>About Us</span>
        </div>
      </header>

      {/* Buttons to select mission, vision or value */}
      <section className="vision-mission-section">
        <div className="buttons-container">
          <button
            className={activeTab === 'mission' ? 'active' : ''}
            onClick={() => setActiveTab('mission')}
          >
            Our Mission
          </button>
          <button
            className={activeTab === 'vision' ? 'active' : ''}
            onClick={() => setActiveTab('vision')}
          >
            Our Vision
          </button>
          <button
            className={activeTab === 'value' ? 'active' : ''}
            onClick={() => setActiveTab('value')}
          >
            Our Value
          </button>
        </div>

        {/* Content area showing heading, paragraph and image side by side */}
        {activeTab === 'mission' && (
          <div className="content-wrapper">
            <div className="text-content">
              <h2>OUR MISSION</h2>
              <p>
                We are committed to providing the best educational experience to our students.
              </p>
            </div>
            <img src={images.mission} alt="Our Mission" />
          </div>
        )}

        {activeTab === 'vision' && (
          <div className="content-wrapper">
            <div className="text-content">
              <h2>OUR VISION</h2>
              <p>
                To be a leading institute inspiring lifelong learning and innovation.
              </p>
            </div>
            <img src={images.vision} alt="Our Vision" />
          </div>
        )}

        {activeTab === 'value' && (
          <div className="content-wrapper">
            <div className="text-content">
              <h2>OUR VALUE</h2>
              <p>
                Integrity, Excellence, and Commitment to our community.
              </p>
            </div>
            <img src={images.value} alt="Our Value" />
          </div>
        )}
      </section>
    </>
  );
}