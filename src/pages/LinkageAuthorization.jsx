import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LinkageAuthorization.css";

import img22 from "../images/img22.jpg";
import img23 from "../images/img23.jpg";
import img24 from "../images/img24.jpg";
import img25 from "../images/img25.jpg";

export default function LinkageAuthorization() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal-card");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // ek baar show hone ke baad unobserve (optional, performance ke liye)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const cards = [
    { src: img22, alt: "Authorization certificate 1", label: "Authorization Certificate 1" },
    { src: img23, alt: "Authorization certificate 2", label: "Authorization Certificate 2" },
    { src: img24, alt: "Authorization certificate 3", label: "Authorization Certificate 3" },
    { src: img25, alt: "Authorization certificate 4", label: "Authorization Certificate 4" },
  ];

  return (
    <div className="linkage-container">
      {/* Header */}
      <header className="page-header">
        <div className="page-header-overlay" />
        <div className="page-header-inner">
          <h1>Linkage Authorization</h1>

          <p className="breadcrumb">
            <Link className="breadcrumb-home" to="/">
              Home
            </Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">Linkage Authorization</span>
          </p>

          <p className="header-subtitle">
            Recognized partnerships that authenticate our academic standards,
            training programs, and certifications.
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="linkage-content">
        <p className="description">
          Our institution is associated with reputed academic councils and
          certification bodies to ensure that training, assessment, and
          qualifications received by students are formally recognized and
          valued in the industry.
        </p>

        <div className="image-gallery">
          {cards.map((card, index) => (
            <div
              key={index}
              className="image-card reveal-card"
              style={{ "--delay": `${index * 80}ms` }}
            >
              <div className="image-glass">
                <img src={card.src} alt={card.alt} />
              </div>
              <div className="image-caption">{card.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
