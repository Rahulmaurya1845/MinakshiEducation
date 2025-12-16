import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Yaha API / EmailJS / backend ko call kar sakte ho
    alert("Thank you! Your message has been submitted.");
  };

  return (
    <>
      {/* -------- TOP GRADIENT HEADER -------- */}
      <header className="contact-header">
        <div className="contact-header-content">
          <h1>Contact Us</h1>

          <p className="breadcrumb-text">
            <Link
              to="/"
              className="breadcrumb-link"
            >
              Home
            </Link>{" "}
            <span className="breadcrumb-separator">›</span> Contact Us
          </p>

          <p className="header-subtitle">
            We are here to help you with admissions, courses, and any other
            queries related to Meenakshi Education Sansthan.
          </p>
        </div>
      </header>

      {/* -------- NEED HELP TEXT -------- */}
      <div className="need-help-wrapper">
        <h2 className="need-help-title">Need Help?</h2>

        <h2 className="need-help-subtitle">
          If you have any questions or need additional information, feel free to
          reach out to us using the details below or the contact form.
        </h2>
      </div>

      {/* -------- MAIN GRID WRAPPER (LEFT CARDS + RIGHT FORM) -------- */}
      <section className="contact-container">
        {/* LEFT SIDE 4 BOX GRID */}
        <div className="left-box-grid">
          {/* CALL BOX */}
          <div className="contact-card">
            <div className="icon-circle phone-icon"></div>
            <h3>Call Us On</h3>
            <p className="contact-info-text">+91 7737676701</p>
            <p className="contact-info-subtext">
              Monday to Saturday, 9:00 AM – 5:00 PM
            </p>
          </div>

          {/* EMAIL BOX */}
          <div className="contact-card">
            <div className="icon-circle mail-icon"></div>
            <h3>Email Us</h3>
            <p className="contact-info-text">
              meenakshicollegesalumber@gmail.com
            </p>
            <p className="contact-info-subtext">
              We usually respond within 24 hours.
            </p>
          </div>

          {/* LOCATION BOX */}
          <div className="contact-card">
            <div className="icon-circle location-icon"></div>
            <h3>Our Location</h3>
            <p className="contact-info-text">
              Adkaliya chauraha, opposite Meenakshi Gas Godam, Udaipur Road,
              Salumber, District – Udaipur (Rajasthan) 313027
            </p>
            <p className="contact-info-subtext">
              Easily accessible from the main Udaipur–Salumber highway.
            </p>
          </div>

          {/* SOCIAL LINKS BOX */}
          <div className="contact-card">
            <div className="icon-circle social-main-icon"></div>
            <h3>Social Links</h3>

            <p className="contact-info-subtext">
              Stay connected with us on social media.
            </p>

            <div className="social-icons-row">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Send Us a Message</h3>
          <p className="form-subtitle">
            Fill in the form and our team will get back to you shortly.
          </p>

          <div className="form-row">
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              className="form-input"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="form-input"
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="Enter Your Mobile"
              required
              className="form-input"
            />
            <input
              type="text"
              placeholder="Enter Your Address"
              required
              className="form-input"
            />
          </div>

          <textarea
            placeholder="Enter Your Message"
            required
            className="form-textarea"
          ></textarea>

          <button type="submit" className="submit-button">
            Submit Now →
          </button>

          <p className="form-note">
            By submitting this form, you agree to be contacted by our team for
            counselling and admission-related information.
          </p>
        </form>
      </section>

      {/* -------- GOOGLE MAP SECTION -------- */}
      <div className="map-container">
        <div className="map-card">
          <h3 className="map-title">Find Us on Map</h3>
          <p className="map-subtitle">
            Visit our campus for counselling, campus tours, and admission
            assistance.
          </p>
          <iframe
            title="Meenakshi Education Sansthan Salumber Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14236.765771548318!2d73.961697!3d24.121582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967bf4f0d2bb1f7%3A0x7a0c9adbb40b500a!2sMeenakshi%20Education%20Sansthan%2C%20Salumber!5e0!3m2!1sen!2sin!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
