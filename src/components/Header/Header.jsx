
import React, { useState } from 'react'
import './Header.css'
import logo from '../../images/logo.png'

const navItems = [
  { name: 'Home', link: '/' },
  {
    name: 'About Us',
    submenu: [
      { name: 'Director Message', link: '/about-us/director-message' },
      { name: 'Management Head', link: '/about-us/management-head' },
      { name: 'Principal Message', link: '/about-us/principal-message' },
      { name: 'Other Faculty', link: '/about-us/other-faculty' },
      { name: 'Vision & Mission', link: '/about-us/vision-mission' },
      { name: 'Linkage and Authorization', link: '/about-us/linkage-authorization' },
      { name: 'Testimonial', link: '/about-us/testimonial' },
    ],
  },
  {
    name: 'Courses',
    submenu: [
      { name: 'BA Course', link: '/courses/ba-course' },
      { name: 'BSC Course', link: '/courses/bsc-course' },
    ],
  },
  {
    name: 'Student Zone',
    submenu: [
      { name: 'Student Query', link: '/student-zone/student-query' },
      { name: 'Student Verification', link: '/student-zone/student-verification' },
      { name: 'Student Login', link: '/student-zone/student-login' },
      { name: 'Syllabus', link: '/student-zone/syllabus' },
      { name: 'Old Paper', link: '/student-zone/old-paper' },
    ],
  },
  {
    name: 'Gallery',
    submenu: [
      { name: 'Photo Gallery', link: '/gallery/photo-gallery' },
      { name: 'Video Gallery', link: '/gallery/video-gallery' },
    ],
  },
  {
    name: 'Career',
    submenu: [{ name: 'IT Consultant', link: '/career/it-consultant' }],
  },
  {
    name: 'Highlights',
    submenu: [
      { name: 'Blog', link: '/highlights/blog' },
      { name: 'Event', link: '/highlights/event' },
      { name: 'News', link: '/highlights/news' },
    ],
  },
  { name: 'Online Fee Payment', link: '/online-fee-payment' },
  {
    name: 'Contact',
    submenu: [
      { name: 'Contact Us', link: '/contact/contact-us' },
      { name: 'Download', link: '/contact/download' },
    ],
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)

  return (
    <>
      {/* Topbar */}
      <div className="topbar" role="banner">
        <div className="container">
          <div className="topbar-left">
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            <span>
             <strong> Adkaliya chauraha, opposite Meenakshi gas, Godam, udaipur road, Salumber District - Udaipur (Rajasthan) 313027</strong>
            </span>
          </div>
          <div className="topbar-right" role="navigation" aria-label="User links">
            {/* FIXED LINKS */}
            <a href="/login">
              <i className="fas fa-user" aria-hidden="true"></i> Login
            </a>
            <a href="/student-zone/student-login">
              <i className="fas fa-user-graduate" aria-hidden="true"></i> Student Login
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar" role="navigation" aria-label="Main menu">
        <div className="container">
          <div className="logo">
            <a href="/" aria-label="Homepage">
              <img src={logo} alt="Meenakshi Education Sansthan Logo" />
            </a>
          </div>

          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setMenuOpen(!menuOpen)
              }
            }}
          >
            <i className="fas fa-bars" aria-hidden="true"></i>
          </div>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="main-menu">
            {navItems.map((item, i) => (
              <li
                key={i}
                className={`nav-item ${item.submenu ? 'dropdown' : ''}`}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                {!item.submenu ? (
                  <a href={item.link}>{item.name}</a>
                ) : (
                  <>
                    <button
                      className="dropdown-btn"
                      onMouseEnter={() => setDropdownOpen(i)}
                      onClick={() =>
                        setDropdownOpen(dropdownOpen === i ? null : i)
                      }
                      aria-expanded={dropdownOpen === i}
                      aria-haspopup="true"
                    >
                      {item.name}
                    </button>
                    <ul
                      className={`dropdown-menu ${dropdownOpen === i ? 'show' : ''}`}
                      role="menu"
                    >
                      {item.submenu.map((sub, si) => (
                        <li key={si} role="none">
                          <a href={sub.link} role="menuitem" tabIndex={dropdownOpen === i ? 0 : -1}>
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
