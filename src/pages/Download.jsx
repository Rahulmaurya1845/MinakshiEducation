import React from "react";
import "./Download.css";

export default function Download() {
  const goToHome = () => {
    window.location.href = "/";
  };

  const handleView = () => {
    window.open(
      "https://example.com/view-affiliation", // yaha actual VIEW URL lagana
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleDownload = () => {
    window.open(
      "https://example.com/download-affiliation.pdf", // yaha actual DOWNLOAD URL lagana
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="download-page">
      {/* --------- Banner + Breadcrumb --------- */}
      <section className="download-banner">
        <div className="download-banner-inner">
          <h1 className="download-title">Download</h1>

          <div className="download-breadcrumb">
            <button
              type="button"
              onClick={goToHome}
              className="breadcrumb-home-btn"
            >
              Home
            </button>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">Download</span>
          </div>

          <p className="download-subtitle">
            Access important documents, affiliation details, and official
            resources directly from this section.
          </p>
        </div>
      </section>

      {/* --------- Main Content --------- */}
      <section className="download-content-wrapper">
        <div className="download-main-content">
          <h2 className="section-heading">Affiliation Process</h2>

          <div className="download-card">
            <div className="download-card-header">
              <h3>Affiliation Guidelines & Procedure</h3>
              <span className="download-tag">PDF</span>
            </div>

            <p className="download-card-text">
              View or download the detailed affiliation process, including
              eligibility, required documents, fee structure, and approval
              timelines.
            </p>

            <div className="download-meta">
              <span>Last updated: 08 December 2025</span>
              <span>File size: 1.2 MB</span>
            </div>

            <div className="download-actions">
              <button
                type="button"
                className="btn btn-outline"
                onClick={handleView}
              >
                View Document
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDownload}
              >
                Download PDF
              </button>
            </div>
          </div>

          {/* Agar future me aur documents add karne ho to isi pattern pe naya card add kar sakte ho */}
        </div>
      </section>
    </div>
  );
}
