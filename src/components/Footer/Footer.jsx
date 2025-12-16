import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import logo from "../../images/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-line"></div>
      <div className="footer-container">
        
        {/* BRAND SECTION */}
        <div className="footer-brand">
          <div className="brand-header">
            <img src={logo} alt="Meenakshi Education Sansthan Logo" className="footer-logo" />
            <div className="brand-title">
              <h2>Meenakshi</h2>
              <p className="brand-subtitle">Education Sansthan</p>
            </div>
          </div>
          <p className="footer-text">
            A premier IT and education institute dedicated to shaping skilled professionals through innovative learning and industry-relevant curriculum.
          </p>
          
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
              <span className="social-tooltip">Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
              <span className="social-tooltip">Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
              <span className="social-tooltip">Instagram</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
              <span className="social-tooltip">YouTube</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
              <span className="social-tooltip">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* USEFUL LINKS */}
        <div className="footer-section">
          <h3 className="footer-heading">
            <span className="heading-icon">✦</span>
            Useful Links
          </h3>
          <div className="divider"></div>
          <ul className="footer-links-list">
            <li><Link to="/contact/contact-us" className="footer-link">Contact Us</Link></li>
            <li><Link to="/highlights/blog" className="footer-link">Blog & Articles</Link></li>
            <li><Link to="/highlights/event" className="footer-link">Events & Workshops</Link></li>
            <li><Link to="/highlights/news" className="footer-link">News & Updates</Link></li>
            {/* <li><Link to="/gallery" className="footer-link">Photo Gallery</Link></li> */}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3 className="footer-heading">
            <span className="heading-icon">✦</span>
            Quick Access
          </h3>
          <div className="divider"></div>
          <ul className="footer-links-list">
            <li><Link to="/student-zone/student-login" className="footer-link">Student Portal</Link></li>
            <li><Link to="/online-fee-payment" className="footer-link">Online Fee Payment</Link></li>
            <li><Link to="/courses" className="footer-link">All Courses</Link></li>
            {/* <li><Link to="/admissions" className="footer-link">Admissions 2024</Link></li> */}
            {/* <li><Link to="/career" className="footer-link">Career Opportunities</Link></li> */}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-section">
          <h3 className="footer-heading">
            <span className="heading-icon">✦</span>
            Contact Information
          </h3>
          <div className="divider"></div>
          <ul className="contact-info">
            <li className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <p className="contact-label">Campus Address</p>
                <p>Adkaliya Chauraha, Opposite Meenakshi Gas, Salumber, Rajasthan 313027</p>
              </div>
            </li>
            <li className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <p className="contact-label">Phone Number</p>
                <p>+91 7737676701</p>
              </div>
            </li>
            <li className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <p className="contact-label">Email Address</p>
                <p>meenakshicollegesalumber@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <MdSchool className="copyright-icon" />
            <span>© {new Date().getFullYear()} Meenakshi Education Sansthan. All rights reserved.</span>
          </div>
          <div className="design-credit">
            Designed & Developed by <span className="credit-highlight">Webcodian LLP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}