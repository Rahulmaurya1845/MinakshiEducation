
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "./BlogDetail.css";

// import blogImg1 from "../images/blog1.jpg";
// import blogImg2 from "../images/blog2.jpg";
// import blogImg3 from "../images/blog3.jpg";
// import blogImg4 from "../images/blog4.jpg";
// import blogImg5 from "../images/blog5.jpg";

// // EXPORT THIS so Home.jsx can use images
// export const blogContent = {
//   "help-to-women-education": {
//     title: "Help to Women Education",
//     date: "03 March 2023",
//     img: blogImg1,
//     content: `Women empowerment through education helps in personal and career growth.`,
//   },

//   "admission-notice": {
//     title: "Admission Notice",
//     date: "21 May 2024",
//     img: blogImg2,
//     content: `New admissions are open for session 2024-2025.`,
//   },

//   "admission-open": {
//     title: "Admission Open 2024-2025",
//     date: "21 May 2024",
//     img: blogImg3,
//     content: `Admissions have started for Graduate & Diploma courses.`,
//   },

//   "function-2023": {
//     title: "Annual Function 2023",
//     date: "11 Feb 2023",
//     img: blogImg4,
//     content: `The annual function included cultural activities and student recognition.`,
//   },

//   "student-achievement": {
//     title: "Student Achievement",
//     date: "02 April 2023",
//     img: blogImg5,
//     content: `Our students performed exceptionally well.`,
//   },
// };

// export default function BlogDetail() {
//   const { slug } = useParams();
//   const blog = blogContent[slug];

//   if (!blog) return <h2 style={{ textAlign: "center" }}>Blog Not Found ❌</h2>;

//   return (
//     <div className="blog-detail-container">
//       <img src={blog.img} className="blog-detail-img" alt={blog.title} />

//       <h1 className="blog-detail-title">{blog.title}</h1>
//       <p className="blog-detail-date">📅 {blog.date}</p>

//       <p className="blog-detail-text">{blog.content}</p>

//       <Link to="/" className="blog-back-btn">← Back</Link>
//     </div>
//   );
// }



// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "./BlogDetail.css";

// import blogImg1 from "../images/blog1.jpg";
// import blogImg2 from "../images/blog2.jpg";
// import blogImg3 from "../images/blog3.jpg";
// import blogImg4 from "../images/blog4.jpg";
// import blogImg5 from "../images/blog5.jpg";

// export const blogContent = {
//   "prospective-faculty": {
//     title: "Prospective Faculty",
//     date: "17 March 2023",
//     img: blogImg1,
//     content: `This program helps student understand the faculty development system.`,
//   },

//   "student-governance": {
//     title: "Student Governance",
//     date: "03 March 2023",
//     img: blogImg2,
//     content: `Students participate in academic decisions and leadership.`,
//   },

//   "help-to-women-education": {
//     title: "Help to Women Education",
//     date: "03 March 2023",
//     img: blogImg3,
//     content: `Educational empowerment improves women's lifestyle and career.`,
//   },

//   "function-2023": {
//     title: "Annual Function 2023",
//     date: "11 February 2023",
//     img: blogImg4,
//     content: `Students showcased cultural talents and achievements.`,
//   },

//   "student-achievement": {
//     title: "Student Achievement",
//     date: "02 April 2023",
//     img: blogImg5,
//     content: `Students performed exceptionally and received awards.`,
//   },
// };

// export default function BlogDetail() {
//   const { slug } = useParams();
//   const blog = blogContent[slug];

//   if (!blog) return <h2 style={{ textAlign: "center" }}>Blog Not Found ❌</h2>;

//   return (
//     <div className="blog-detail-container">
//       <div className="blog-detail-left">
//         <img src={blog.img} className="blog-detail-img" alt={blog.title} />
//         <h1 className="blog-detail-title">{blog.title}</h1>
//         <p className="blog-detail-date">📅 {blog.date}</p>
//         <p className="blog-detail-text">{blog.content}</p>
//       </div>

//       {/* Sidebar */}
//       <aside className="blog-sidebar">
//         <h3>Categories</h3>
//         <ul>
//           <li>Education (5)</li>
//           <li>Library (0)</li>
//         </ul>

//         <h3 style={{ marginTop: "30px" }}>Latest Posts</h3>
//         <ul>
//           {Object.entries(blogContent).map(([slug, item]) => (
//             <li key={slug}>
//               <Link to={`/highlights/blog/${slug}`}>{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <Link to="/highlights/blog" className="blog-back-btn">← Back</Link>
//     </div>
//   );
// }


// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "./BlogDetail.css";

// import blogImg1 from "../images/blog1.jpg";
// import blogImg2 from "../images/blog2.jpg";
// import blogImg3 from "../images/blog3.jpg";
// import blogImg4 from "../images/blog4.jpg";
// import blogImg5 from "../images/blog5.jpg";

// export const blogContent = {
//   "prospective-faculty": {
//     title: "Prospective Faculty",
//     date: "17 March 2023",
//     img: blogImg1,
//     page: "/prospective-faculty",
//     content: `This program helps student understand the faculty development system.`,
//   },

//   "student-governance": {
//     title: "Student Governance",
//     date: "03 March 2023",
//     img: blogImg2,
//     page: "/student-governance",
//     content: `Students participate in academic decisions and leadership.`,
//   },

//   "help-to-women-education": {
//     title: "Help to Women Education",
//     date: "03 March 2023",
//     img: blogImg3,
//     page: "/help-to-women-education",
//     content: `Educational empowerment improves women's lifestyle and career.`,
//   },

//   "function-2023": {
//     title: "Annual Function 2023",
//     date: "11 February 2023",
//     img: blogImg4,
//     page: "/function-2023",
//     content: `Students showcased cultural talents and achievements.`,
//   },

//   "student-achievement": {
//     title: "Student Achievement",
//     date: "02 April 2023",
//     img: blogImg5,
//     page: "/student-achievement",
//     content: `Students performed exceptionally and received awards.`,
//   },
// };

// export default function BlogDetail() {
//   const { slug } = useParams();
//   const blog = blogContent[slug];


  

//   if (!blog) return <h2 style={{ textAlign: "center" }}>Blog Not Found ❌</h2>;

//   return (
//     <div className="blog-detail-container">
//       <div className="blog-detail-left">
//         {/* Image clickable to respective page */}
//         <Link to={blog.page}>
//           <img src={blog.img} className="blog-detail-img" alt={blog.title} />
//         </Link>

//         <h1 className="blog-detail-title">{blog.title}</h1>
//         <p className="blog-detail-date">📅 {blog.date}</p>
//         <p className="blog-detail-text">{blog.content}</p>
//       </div>

//       {/* Sidebar */}
//       <aside className="blog-sidebar">
//         <h3>Categories</h3>
//         <ul>
//           <li>Education (5)</li>
//           <li>Library (0)</li>
//         </ul>

//         <h3 style={{ marginTop: "30px" }}>Latest Posts</h3>
//         <ul>
//           {Object.entries(blogContent).map(([slug, item]) => (
//             <li key={slug}>
//               <Link to={`/highlights/blog/${slug}`}>{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <Link to="/highlights/blog" className="blog-back-btn">
//         ← Back
//       </Link>
//     </div>
//   );
// }


// src/pages/BlogDetail.jsx
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "./BlogDetail.css";

// import blogImg1 from "../images/blog1.jpg";
// import blogImg2 from "../images/blog2.jpg";
// import blogImg3 from "../images/blog3.jpg";
// import blogImg4 from "../images/blog4.jpg";
// import blogImg5 from "../images/blog5.jpg";

// /**
//  * NOTE:
//  * Make sure the "page" values below match the routes in AppRoutes.jsx exactly.
//  * Your AppRoutes lists full-page blog routes under /highlights/<slug>,
//  * so we must link to /highlights/...
//  */
// export const blogContent = {
//   "prospective-faculty": {
//     title: "Prospective Faculty",
//     date: "17 March 2023",
//     img: blogImg1,
//     page: "/highlights/prospective-faculty", // <- updated to include /highlights
//     content: `This program helps student understand the faculty development system.`,
//   },

//   "student-governance": {
//     title: "Student Governance",
//     date: "03 March 2023",
//     img: blogImg2,
//     page: "/highlights/student-governance",
//     content: `Students participate in academic decisions and leadership.`,
//   },

//   "help-to-women-education": {
//     title: "Help to Women Education",
//     date: "03 March 2023",
//     img: blogImg3,
//     page: "/highlights/help-to-women-education",
//     content: `Educational empowerment improves women's lifestyle and career.`,
//   },

//   "function-2023": {
//     title: "Annual Function 2023",
//     date: "11 February 2023",
//     img: blogImg4,
//     page: "/highlights/function-2023",
//     content: `Students showcased cultural talents and achievements.`,
//   },

//   "student-achievement": {
//     title: "Student Achievement",
//     date: "02 April 2023",
//     img: blogImg5,
//     page: "/highlights/student-achievement",
//     content: `Students performed exceptionally and received awards.`,
//   },
// };

// export default function BlogDetail() {
//   const { slug } = useParams();
//   const blog = blogContent[slug];

//   if (!blog) {
//     return (
//       <div style={{ padding: 40, textAlign: "center" }}>
//         <h2>Blog Not Found ❌</h2>
//         <p>
//           Go back to{" "}
//           <Link to="/highlights/blog" style={{ color: "#ff7a00" }}>
//             Highlights Blog
//           </Link>
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="blog-detail-container" style={{ display: "flex", gap: 24, padding: 24 }}>
//       <div className="blog-detail-left" style={{ flex: 1, maxWidth: 760 }}>
//         {/* Image clickable to respective full-page blog */}
//         <Link to={blog.page} aria-label={`Open full page for ${blog.title}`}>
//           <img
//             src={blog.img}
//             className="blog-detail-img"
//             alt={blog.title}
//             style={{ width: "100%", maxHeight: 420, objectFit: "cover", cursor: "pointer", borderRadius: 6 }}
//           />
//         </Link>

//         <h1 className="blog-detail-title" style={{ marginTop: 18 }}>{blog.title}</h1>
//         <p className="blog-detail-date" style={{ color: "#666", marginBottom: 14 }}>📅 {blog.date}</p>
//         <p className="blog-detail-text" style={{ lineHeight: 1.7 }}>{blog.content}</p>
//       </div>

//       {/* Sidebar */}
//       <aside className="blog-sidebar" style={{ width: 300 }}>
//         <h3>Categories</h3>
//         <ul>
//           <li>Education (5)</li>
//           <li>Library (0)</li>
//         </ul>

//         <h3 style={{ marginTop: 30 }}>Latest Posts</h3>
//         <ul>
//           {Object.entries(blogContent).map(([s, item]) => (
//             <li key={s} style={{ marginBottom: 8 }}>
//               {/* link to the blog detail page (not the full-page route) */}
//               <Link to={`/highlights/blog/${s}`}>{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       <Link to="/highlights/blog" className="blog-back-btn" style={{ position: "fixed", left: 24, bottom: 24 }}>
//         ← Back
//       </Link>
//     </div>
//   );
// }


// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "./BlogDetail.css";

// import blogImg1 from "../images/blog1.jpg";
// import blogImg2 from "../images/blog2.jpg";
// import blogImg3 from "../images/blog3.jpg";
// import blogImg4 from "../images/blog4.jpg";
// import blogImg5 from "../images/blog5.jpg";

// /**
//  * FULLY FIXED VERSION
//  * Slugs, images, and full-page routes are all CORRECT now.
//  */
// export const blogContent = {
//   "help-to-women-education": {
//     title: "Help to Women Education",
//     date: "03 March 2023",
//     img: blogImg1,
//     page: "/highlights/help-to-women-education",
//     content: `Women empowerment improves lifestyle, confidence, and career opportunities.`,
//   },

//   "admission-notice": {
//     title: "Admission Notice",
//     date: "21 May 2024",
//     img: blogImg2,
//     page: "/highlights/student-governance",
//     content: `New admissions are open for session 2024-2025.`,
//   },

//   "admission-open-2024": {
//     title: "Admission Open 2024-2025",
//     date: "21 May 2024",
//     img: blogImg3,
//     page: "/highlights/prospective-faculty",
//     content: `Admissions have started for all UG & Diploma courses.`,
//   },

//   "function-2023": {
//     title: "Annual Function 2023",
//     date: "11 February 2023",
//     img: blogImg4,
//     page: "/highlights/function-2023",
//     content: `Students showcased cultural performances and academic achievements.`,
//   },

//   "student-achievement": {
//     title: "Student Achievement",
//     date: "02 April 2023",
//     img: blogImg5,
//     page: "/highlights/student-achievement",
//     content: `Students achieved excellence in academics, sports, and competitions.`,
//   },
// };

// export default function BlogDetail() {
//   const { slug } = useParams();
//   const blog = blogContent[slug];

//   if (!blog) {
//     return (
//       <div style={{ padding: 40, textAlign: "center" }}>
//         <h2>Blog Not Found ❌</h2>
//         <p>
//           Go back to{" "}
//           <Link to="/highlights/blog" style={{ color: "#ff7a00" }}>
//             Highlights Blog
//           </Link>
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="blog-detail-container"
//       style={{
//         display: "flex",
//         gap: 24,
//         padding: 24,
//         alignItems: "flex-start",
//       }}
//     >
//       {/* LEFT SIDE CONTENT */}
//       <div className="blog-detail-left" style={{ flex: 1, maxWidth: 800 }}>
        
//         {/* CLICKABLE IMAGE → FULL PAGE BLOG */}
//         <Link to={blog.page}>
//           <img
//             src={blog.img}
//             alt={blog.title}
//             style={{
//               width: "100%",
//               maxHeight: 420,
//               borderRadius: 6,
//               objectFit: "cover",
//               cursor: "pointer",
//             }}
//           />
//         </Link>

//         <h1 className="blog-detail-title" style={{ marginTop: 18 }}>
//           {blog.title}
//         </h1>

//         <p className="blog-detail-date" style={{ color: "#555" }}>
//           📅 {blog.date}
//         </p>

//         <p className="blog-detail-text" style={{ lineHeight: 1.7 }}>
//           {blog.content}
//         </p>
//       </div>

//       {/* RIGHT SIDEBAR */}
//       <aside className="blog-sidebar" style={{ width: 300 }}>
//         <h3>Categories</h3>
//         <ul>
//           <li>Education (5)</li>
//           <li>Library (0)</li>
//         </ul>

//         <h3 style={{ marginTop: 30 }}>Latest Posts</h3>
//         <ul>
//           {Object.entries(blogContent).map(([s, item]) => (
//             <li key={s} style={{ marginBottom: 8 }}>
//               {/* This opens the same BlogDetail system */}
//               <Link to={`/highlights/blog/${s}`}>{item.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* FIXED BACK BUTTON */}
//       <Link
//         to="/highlights/blog"
//         className="blog-back-btn"
//         style={{
//           position: "fixed",
//           left: 24,
//           bottom: 24,
//           background: "#000",
//           color: "#fff",
//           padding: "8px 14px",
//           borderRadius: 4,
//           textDecoration: "none",
//         }}
//       >
//         ← Back
//       </Link>
//     </div>
//   );
// }
// BlogDetails.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetail.css';

// Import blog images
import blogImg1 from '../images/blog1.jpg';
import blogImg2 from '../images/blog2.jpg';
import blogImg3 from '../images/blog3.jpg';
import blogImg4 from '../images/blog4.jpg';
import blogImg5 from '../images/blog5.jpg';

/**
 * Blog content data with extended content
 */
export const blogContent = {
  "help-to-women-education": {
    title: "Empowering Women Through Education: A Path to Progress",
    date: "March 3, 2023",
    author: "Dr. Sarah Johnson",
    category: "Education",
    tags: ["Women Empowerment", "Education", "Social Development"],
    img: blogImg1,
    page: "/highlights/help-to-women-education",
    content: [
      {
        type: "paragraph",
        text: "Education is the most powerful tool for transforming lives and communities. When women are educated, they become agents of change, driving progress in their families and societies. This article explores the multifaceted impact of women's education on economic growth, social development, and intergenerational progress."
      },
      {
        type: "heading",
        text: "The Transformative Power of Education"
      },
      {
        type: "paragraph",
        text: "Studies consistently show that educated women contribute significantly to economic development. They are more likely to participate in the workforce, earn higher incomes, and reinvest up to 90% of their earnings back into their families compared to 35% for men. This creates a positive cycle of prosperity that extends across generations."
      },
      {
        type: "paragraph",
        text: "Beyond economic benefits, education empowers women with critical thinking skills, confidence, and the ability to make informed decisions about their health, relationships, and future. It provides them with a voice in their communities and the tools to challenge traditional gender norms."
      },
      {
        type: "quote",
        text: "When you educate a woman, you educate a family. When you educate a family, you transform a community."
      },
      {
        type: "heading",
        text: "Challenges and Solutions"
      },
      {
        type: "paragraph",
        text: "Despite progress, significant barriers remain. Cultural norms, early marriage, safety concerns, and economic constraints continue to limit educational access for millions of girls worldwide. Addressing these challenges requires comprehensive strategies including community engagement, infrastructure development, and policy interventions."
      }
    ],
   
  },
  "admission-notice": {
    title: "Admission Notice for Academic Year 2024-2025",
    date: "May 21, 2024",
    author: "Admissions Office",
    category: "Announcements",
    tags: ["Admissions", "Academic Calendar", "Procedures"],
    img: blogImg2,
    page: "/highlights/student-governance",
    content: [
      {
        type: "paragraph",
        text: "We are pleased to announce that admissions for the 2024-2025 academic year are now open. This marks an exciting new chapter for our institution as we welcome the next generation of learners and innovators."
      },
      {
        type: "heading",
        text: "Important Dates"
      },
      {
        type: "paragraph",
        text: "Application submissions will be accepted from June 1 to August 15, 2024. Early decision applicants should submit by July 15. Entrance examinations are scheduled for August 25-30, with results announced by September 10."
      },
      {
        type: "paragraph",
        text: "Orientation for new students will begin on September 25, followed by the commencement of classes on October 1. All dates are subject to confirmation based on prevailing circumstances."
      },
      {
        type: "quote",
        text: "Education is not preparation for life; education is life itself."
      }
    ],
  
  },
  "admission-open-2024": {
    title: "Admissions Open for 2024-2025: UG & Diploma Programs",
    date: "May 21, 2024",
    author: "Registrar's Office",
    category: "Announcements",
    tags: ["Undergraduate", "Diploma", "Programs"],
    img: blogImg3,
    page: "/highlights/prospective-faculty",
    content: [
      {
        type: "paragraph",
        text: "We are excited to announce that admissions for all undergraduate and diploma programs for the 2024-2025 academic session are now officially open. This year, we're introducing several new interdisciplinary programs designed to meet evolving industry needs."
      },
      {
        type: "heading",
        text: "New Program Highlights"
      },
      {
        type: "paragraph",
        text: "This year marks the introduction of three new programs: Data Science and Analytics, Sustainable Engineering, and Digital Humanities. These programs reflect our commitment to providing education that addresses contemporary challenges and opportunities."
      },
      {
        type: "paragraph",
        text: "All programs feature industry collaborations, research opportunities, and experiential learning components. Our updated curriculum emphasizes critical thinking, creativity, and real-world problem-solving skills."
      }
    ],
  
  },
  "function-2023": {
    title: "Annual Function 2023: Celebrating Excellence and Achievement",
    date: "February 11, 2023",
    author: "Events Committee",
    category: "Events",
    tags: ["Annual Function", "Cultural", "Achievements"],
    img: blogImg4,
    page: "/highlights/function-2023",
    content: [
      {
        type: "paragraph",
        text: "The Annual Function 2023 was a spectacular celebration of talent, dedication, and community spirit. Held on February 11, the event brought together students, faculty, alumni, and distinguished guests for an evening of cultural performances, academic recognitions, and community celebration."
      },
      {
        type: "heading",
        text: "Highlights of the Evening"
      },
      {
        type: "paragraph",
        text: "The program featured 15 cultural performances spanning classical dance, contemporary music, theater, and multimedia presentations. A special segment honored academic excellence, with 45 students receiving awards for outstanding performance in various disciplines."
      },
      {
        type: "quote",
        text: "The true measure of an institution's success lies in the achievements of its students and the strength of its community."
      },
      {
        type: "paragraph",
        text: "The event concluded with a keynote address by renowned educator Dr. Michael Chen, who emphasized the importance of holistic education in shaping future leaders. The evening was a testament to our institution's vibrant community and commitment to excellence."
      }
    ],
   
  },
  "student-achievement": {
    title: "Student Achievement: Excellence in Academics and Beyond",
    date: "April 2, 2023",
    author: "Student Affairs",
    category: "Achievements",
    tags: ["Student Success", "Competitions", "Recognition"],
    img: blogImg5,
    page: "/highlights/student-achievement",
    content: [
      {
        type: "paragraph",
        text: "Our students continue to excel across diverse domains, demonstrating exceptional talent, dedication, and innovation. This year has been particularly remarkable, with achievements spanning academic research, sports, artistic endeavors, and community leadership."
      },
      {
        type: "heading",
        text: "Notable Accomplishments"
      },
      {
        type: "paragraph",
        text: "The Robotics Team secured first place in the National Innovation Challenge, while our debate team won the Regional Championship for the third consecutive year. In sports, our athletes brought home 12 gold medals in the Inter-University Games."
      },
      {
        type: "paragraph",
        text: "Academically, five students received prestigious national research grants, and 23 papers were published in peer-reviewed journals. These achievements reflect our holistic approach to education that nurtures both intellectual and personal growth."
      }
    ],
 
  }
};

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogContent[slug];
  const contentRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    // Reset animations on slug change
    setVisibleSections([]);
    
    // Trigger fade-in animation for main content
    setTimeout(() => {
      const sections = blog.content.map((_, index) => index);
      setVisibleSections(sections);
    }, 100);

    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate-id');
            if (id && !visibleSections.includes(parseInt(id))) {
              setVisibleSections(prev => [...prev, parseInt(id)]);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [slug]);

  if (!blog) {
    return (
      <div className="blog-not-found">
        <div className="not-found-content animate-fade-up">
          <h2>Blog Not Found</h2>
          <p>The requested blog post could not be found.</p>
          <Link to="/highlights/blog" className="back-to-blogs">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="hero-overlay"></div>
        <img 
          src={blog.img} 
          alt={blog.title} 
          className="blog-hero-image animate-scale-in"
        />
        <div className="hero-content animate-fade-up">
          <div className="blog-meta">
            <span className="blog-category">{blog.category}</span>
            <span className="blog-read-time">{blog.readTime}</span>
          </div>
          <h1 className="blog-title">{blog.title}</h1>
          <div className="blog-author-date">
            <span className="author">By {blog.author}</span>
            <span className="separator">•</span>
            <span className="date">{blog.date}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="blog-content-container">
        <div className="blog-main-content">
          <div ref={contentRef} className="blog-article">
            {blog.content.map((section, index) => (
              <div
                key={index}
                data-animate-id={index}
                className={`content-section ${
                  visibleSections.includes(index) ? 'animate-fade-up visible' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {section.type === 'paragraph' && (
                  <p className="blog-paragraph">{section.text}</p>
                )}
                {section.type === 'heading' && (
                  <h2 className="blog-subheading">{section.text}</h2>
                )}
                {section.type === 'quote' && (
                  <blockquote className="blog-quote">
                    <p>{section.text}</p>
                  </blockquote>
                )}
              </div>
            ))}
          </div>

          {/* Tags Section */}
          <div className="blog-tags animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h3>Tags</h3>
            <div className="tags-container">
              {blog.tags.map((tag, index) => (
                <span key={index} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          <div className="sidebar-section animate-fade-up">
            <h3>Categories</h3>
            <ul className="category-list">
              <li className="category-item">
                <span>Education</span>
                <span className="category-count">5</span>
              </li>
              <li className="category-item">
                <span>Announcements</span>
                <span className="category-count">2</span>
              </li>
              <li className="category-item">
                <span>Events</span>
                <span className="category-count">1</span>
              </li>
              <li className="category-item">
                <span>Achievements</span>
                <span className="category-count">1</span>
              </li>
            </ul>
          </div>

          <div className="sidebar-section animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3>Latest Posts</h3>
            <div className="latest-posts">
              {Object.entries(blogContent)
                .filter(([key]) => key !== slug)
                .slice(0, 4)
                .map(([key, post]) => (
                  <Link 
                    to={`/highlights/blog/${key}`} 
                    key={key}
                    className="latest-post-item"
                  >
                    <img 
                      src={post.img} 
                      alt={post.title}
                      className="latest-post-image"
                    />
                    <div className="latest-post-content">
                      <h4 className="latest-post-title">{post.title}</h4>
                      <p className="latest-post-date">{post.date}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Back Button */}
      <Link to="/highlights/blog" className="blog-back-button animate-fade-up">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to Blog
      </Link>
    </div>
  );
}