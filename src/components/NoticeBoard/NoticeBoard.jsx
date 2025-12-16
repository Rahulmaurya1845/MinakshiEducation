import React, { useRef, useState, useEffect } from 'react';
import './NoticeBoard.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const noticesData = [
  {
    id: 1,
    title: "Admission Open 2024-25",
    description: "Admissions are now open for all courses. Last date: 30th June 2024",
    date: "15 May 2024",
    type: "Admission",
    priority: "high"
  },
  {
    id: 2,
    title: "Annual Exam Schedule",
    description: "Annual examination schedule for all courses has been published",
    date: "10 May 2024",
    type: "Examination",
    priority: "medium"
  },
  {
    id: 3,
    title: "Holiday List 2024",
    description: "List of holidays for the academic year 2024-25",
    date: "05 May 2024",
    type: "Holiday",
    priority: "low"
  },
  {
    id: 4,
    title: "Scholarship Application",
    description: "Last date for scholarship applications extended to 25th May",
    date: "01 May 2024",
    type: "Scholarship",
    priority: "high"
  }
];

const studentsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    course: "B.Sc Computer Science",
    joinDate: "15 May 2024",
    avatar: "👨‍🎓",
    achievement: "98% in 12th Board"
  },
  {
    id: 2,
    name: "Priya Patel",
    course: "MS-CIT",
    joinDate: "14 May 2024",
    avatar: "👩‍🎓",
    achievement: "Gold Medalist"
  },
  {
    id: 3,
    name: "Amit Verma",
    course: "KLiC Programming",
    joinDate: "13 May 2024",
    avatar: "👨‍💻",
    achievement: "IIT JEE Qualified"
  },
  {
    id: 4,
    name: "Sneha Singh",
    course: "NIELIT 'O' Level",
    joinDate: "12 May 2024",
    avatar: "👩‍💼",
    achievement: "State Topper"
  }
];

const NoticeBoard = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [activeNotice, setActiveNotice] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Section visibility animation - trigger once
  const { isVisible: sectionVisible } = useScrollAnimation(sectionRef, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  });

  // Heading animation - trigger once
  const { isVisible: headingVisible } = useScrollAnimation(headingRef, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });

  // Auto rotate notices
  useEffect(() => {
    if (sectionVisible || hasAnimated) {
      const interval = setInterval(() => {
        setActiveNotice((prev) => (prev + 1) % noticesData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [sectionVisible, hasAnimated]);

  // Once animations complete, keep them visible
  useEffect(() => {
    if (sectionVisible && headingVisible) {
      setHasAnimated(true);
    }
  }, [sectionVisible, headingVisible]);

  return (
    <section 
      ref={sectionRef}
      className={`noticeboard-section ${sectionVisible || hasAnimated ? 'visible' : ''}`}
      id="noticeboard"
      aria-labelledby="noticeboard-heading"
    >
      {/* Background Elements */}
      <div className="noticeboard-background">
        <div className="notice-bg-shape notice-bg-shape-1"></div>
        <div className="notice-bg-shape notice-bg-shape-2"></div>
        <div className="notice-bg-gradient"></div>
      </div>

      <div className="noticeboard-container">
        {/* Section Header */}
        <div className="noticeboard-header">
          <div 
            ref={headingRef}
            className={`notice-section-subtitle ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="0"
          >
            <span className="notice-subtitle-icon">📢</span>
            <span className="notice-subtitle-text">UPDATES & ACHIEVEMENTS</span>
          </div>
          
          <h2 
            id="noticeboard-heading"
            className={`notice-section-title ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="100"
          >
            <span className="notice-title-line">Latest Updates &</span>
            <span className="notice-title-line highlight">New Students</span>
          </h2>
          
          <div 
            className={`notice-section-description ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="200"
          >
            <p>
              Stay updated with the latest institute announcements and meet our recently joined talented students.
            </p>
          </div>
          
          <div 
            className={`notice-title-decoration ${headingVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="300"
          ></div>
        </div>

        {/* Notice Board & Students Row */}
        <div className="notice-students-row">
          {/* Notice Board Section */}
          <div 
            className={`notice-board-container ${sectionVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="400"
          >
            <div className="notice-board-header">
              <div className="board-title">
                <span className="board-icon">📌</span>
                <h3>Notice Board</h3>
              </div>
              <div className="board-badge">
                <span className="badge-text">Latest</span>
              </div>
            </div>

            <div className="notices-list">
              {noticesData.map((notice, index) => (
                <div 
                  key={notice.id}
                  className={`notice-item ${index === activeNotice ? 'active' : ''}`}
                  onClick={() => setActiveNotice(index)}
                  style={{ '--notice-delay': `${index * 100}ms` }}
                >
                  <div className="notice-item-header">
                    <div className={`notice-type ${notice.priority}`}>
                      {notice.type}
                    </div>
                    <div className="notice-date">
                      <span className="date-icon">📅</span>
                      <span className="date-text">{notice.date}</span>
                    </div>
                  </div>
                  
                  <h4 className="notice-title">{notice.title}</h4>
                  <p className="notice-description">{notice.description}</p>
                  
                  <div className="notice-read-more">
                    <span className="read-text">View Details</span>
                    <span className="read-icon">→</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Notice Navigation Dots */}
            <div className="notice-navigation">
              {noticesData.map((_, index) => (
                <button
                  key={index}
                  className={`notice-dot ${index === activeNotice ? 'active' : ''}`}
                  onClick={() => setActiveNotice(index)}
                  aria-label={`Show notice ${index + 1}`}
                >
                  <span className="dot-inner"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Students Section */}
          <div 
            className={`students-container ${sectionVisible || hasAnimated ? 'visible' : ''}`}
            data-animation-delay="500"
          >
            <div className="students-header">
              <div className="students-title">
                <span className="students-icon">🎓</span>
                <h3>Recently Joined</h3>
              </div>
              <div className="students-count">
                <span className="count-number">{studentsData.length}</span>
                <span className="count-text">Students</span>
              </div>
            </div>

            <div className="students-list">
              {studentsData.map((student, index) => (
                <div 
                  key={student.id}
                  className="student-card"
                  style={{ '--student-delay': `${index * 100}ms` }}
                >
                  <div className="student-avatar">
                    <span className="avatar-icon">{student.avatar}</span>
                    <div className="online-indicator"></div>
                  </div>
                  
                  <div className="student-info">
                    <h4 className="student-name">{student.name}</h4>
                    <p className="student-course">{student.course}</p>
                    
                    <div className="student-meta">
                      <div className="meta-item">
                        <span className="meta-icon">📅</span>
                        <span className="meta-text">Joined: {student.joinDate}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">🏆</span>
                        <span className="meta-text">{student.achievement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="students-footer">
              <button className="view-all-students">
                <span className="view-text">View All Students</span>
                <span className="view-icon">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Particles */}
      <div className="notice-section-particles">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="notice-floating-particle"
            style={{
              '--particle-delay': `${i * 0.2}s`,
              '--particle-duration': `${2.8 + i * 0.2}s`,
              left: `${(i * 15)}%`,
              backgroundColor: i % 3 === 0 ? '#ff6b6b' : i % 3 === 1 ? '#4a6bff' : '#00b894'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default NoticeBoard;