import React from "react";
import { Link } from "react-router-dom";
import "./PhotoGallery.css";

import collageimg from "../images/College.png";
import classroom from "../images/classroom.png";
import admission from "../images/admission.png";
import admissionopen from "../images/admissionopen.png";
import bsc3rdyear from "../images/bsc3rdyear.png";

export default function PhotoGallery() {
  const photos = [
    { src: collageimg, title: "College" },
    { src: classroom, title: "Classroom Area" },
    { src: admission, title: "Admission" },
    { src: admissionopen, title: "Admission Open 2023-2024" },
    { src: bsc3rdyear, title: "B.Sc 3rd Year Students" },
  ];

  return (
    <div className="photo-gallery-page">
      {/* -------- Banner Section -------- */}
      <section className="gallery-banner">
        <div className="gallery-banner-inner">
          <h1>Photo Gallery</h1>

          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-home">
              Home
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">Photo Gallery</span>
          </nav>

          <p className="gallery-subtitle">
            Take a glimpse of our campus, classrooms, and student activities
            through the curated gallery below.
          </p>
        </div>
      </section>

      {/* -------- Gallery Section -------- */}
      <section className="gallery-section">
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <article className="gallery-card" key={index}>
              <div className="image-wrapper">
                <img src={photo.src} alt={photo.title} />

                <div className="image-overlay" />

                <div className="gallery-caption">
                  <span>{photo.title}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
