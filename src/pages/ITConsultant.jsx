import React, { useState } from "react";
import "./ITConsultant.css";

export default function ITConsultant() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const goHome = () => {
    window.location.href = "/";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your application has been submitted successfully.");
    setShowModal(false);
    e.target.reset();
  };

  return (
    <>
      {/* -------- HEADER SECTION -------- */}
      <header className="itc-header">
        <div className="itc-header-inner">
          <p className="itc-badge">Career Opportunity</p>
          <h1>Web Designer Talent Hunt</h1>

          <p className="itc-breadcrumb-text">
            <a href="/" className="itc-breadcrumb-link">
              Home
            </a>{" "}
            <span className="itc-breadcrumb-separator">›</span> Career
          </p>

          <p className="itc-header-subtitle">
            Join a high-performing technology team and work on modern web
            experiences with global clients.
          </p>
        </div>
      </header>

      {/* -------- JOB SECTION -------- */}
      <section className="itc-job-section">
        <div className="job-header">
          <h3 className="job-main-title">
            <span className="job-index">1.</span>
            <span className="job-title">
              Web Designer Talent Hunt Hiring for IT Company
            </span>
          </h3>

          <button
            className="apply-btn"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            Apply Now
          </button>
        </div>

        <div className="job-meta">
          <span className="job-meta-item">📅 07 April, 2023</span>
          <span className="job-meta-item">
            📍 10/13-1 Ganj, Sarnath, Varanasi
          </span>
          <span className="job-meta-item">🔖 Part Time</span>
        </div>

        <hr className="itc-divider" />

        {/* Job Description */}
        <h4 className="job-subtitle">Job Description</h4>

        <p className="job-summary">
          <strong>Job Summary</strong>
          <br />
          Lotus Interworks Inc is an advanced technology company led by a
          global team of experienced professionals. Candidates should be
          passionate about design, detail oriented, and comfortable working on
          modern web experiences for international clients.
        </p>

        <p className="job-summary">
          The role focuses on web page development and design, from concept to
          execution, for a range of digital products and marketing initiatives.
        </p>

        {/* Responsibilities */}
        <h4 className="job-subtitle">Responsibilities and Duties</h4>

        <ul className="job-responsibilities">
          <li>
            Conceptualize, prototype, and implement creative web UI designs
            that delight end users.
          </li>
          <li>
            Collaborate with web development teams and stakeholders to deliver
            projects using an iterative approach.
          </li>
          <li>
            Define and maintain design guidelines and reusable web components,
            themes, and layouts.
          </li>
          <li>
            Create visual assets such as icons, images, logos, banners, and
            headers as per requirements.
          </li>
          <li>
            Provide design guidance and support to junior team members when
            required.
          </li>
        </ul>

        {/* Qualifications */}
        <h4 className="job-subtitle">Qualifications</h4>

        <ul className="job-responsibilities">
          <li>
            Strong hands-on experience in designing web pages using WordPress,
            DIVI, HTML, CSS, or similar tools.
          </li>
          <li>Good understanding of web design principles and usability.</li>
          <li>Solid grasp of layout, color theory, and typography.</li>
          <li>Creative mindset with a portfolio of design work.</li>
          <li>
            Ability to work collaboratively and align with team and company
            goals.
          </li>
          <li>
            Quick learner with the ability to adapt to new tools and workflows.
          </li>
          <li>
            Effective communication skills, including the ability to prepare
            presentations and explain design concepts.
          </li>
          <li>
            Capability to organize and prioritize multiple tasks and projects.
          </li>
          <li>
            Any relevant degree, preferably in Computer Science, Engineering,
            MCA, or a related field, with a focus on web design.
          </li>
        </ul>

        {/* Skills */}
        <h4 className="job-subtitle">Skills</h4>

        <ul className="job-responsibilities">
          <li>
            Experience in responsive web page design with modern HTML and CSS
            tools and frameworks.
          </li>
          <li>
            Practical knowledge of graphic tools such as Photoshop, Illustrator,
            or similar.
          </li>
          <li>Understanding of UI/UX fundamentals and user-centered design.</li>
          <li>Basic familiarity with SEO friendly design practices.</li>
          <li>
            Working knowledge of wireframing tools like Adobe XD, Figma, Sketch,
            or InVision.
          </li>
        </ul>
      </section>

      {/* -------- APPLY MODAL -------- */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button className="close-btn" type="button" onClick={closeModal}>
              ×
            </button>

            <h2 className="modal-title">Apply for Web Designer Role</h2>
            <p className="modal-subtitle">
              Fill in your details and upload your latest resume. Our team will
              review your application and contact you if shortlisted.
            </p>

            <form className="apply-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="tel"
                  placeholder="Phone Number (10 digits)"
                  name="phone"
                  pattern="[0-9]{10}"
                  title="Enter 10 digit phone number"
                  required
                />
              </div>

              <div className="form-row file-row">
                <label className="file-label">
                  <span>Upload Resume (PDF/DOC)</span>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <textarea
                  placeholder="Short cover letter / message"
                  name="letter"
                  required
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="primary-btn">
                  Submit Application
                </button>
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={goHome}
                >
                  Go to Home
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
