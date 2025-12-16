
// import React, { useState } from "react";
// import HeroSlider from "../components/HeroSlider/HeroSlider";
// import "./Home.css";
// import img12 from "../images/img12.jpeg";
// import { Link } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

// // Partner Images
// import img17 from "../images/img17.png";
// import img18 from "../images/img18.png";
// import img19 from "../images/img19.png";
// import img20 from "../images/img20.png";
// import img21 from "../images/img21.png";
// import img23 from "../images/img23.jpg";
// import img24 from "../images/img24.jpg";
// import img25 from "../images/img25.jpg";
// import img22 from "../images/img22.jpg";

// // Blog Images
// import blog1 from "../images/blog1.jpg";
// import blog2 from "../images/blog2.jpg";
// import blog3 from "../images/blog3.jpg";
// import blog4 from "../images/blog4.jpg";
// import blog5 from "../images/blog5.jpg";

// const blogs = [
//   { img: blog1, title: "Help to Women Education", date: "03 March 2023", link: "/blog-detail/help-to-women-education" },
//   { img: blog2, title: "Admission Notice", date: "21 May 2024", link: "/blog-detail/admission-notice" },
//   { img: blog3, title: "Admission Open 2024-2025", date: "21 May 2024", link: "/blog-detail/admission-open" },
//   { img: blog4, title: "Annual Function 2023", date: "11 Feb 2023", link: "/blog-detail/function-2023" },
//   { img: blog5, title: "Student Achievement", date: "02 April 2023", link: "/blog-detail/student-achievement" },
// ];

// const facilities = [
//   "Verifiable Certifications",
//   "Placement",
//   "Security",
//   "Low Fee Structure",
//   "Theory To Practical",
//   "Batch Flexibilities",
//   "Course Materials",
//   "Doubt Clearing Session",
//   "Time Flexibilities",
// ];

// const bscImg = "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop";
// const baImg = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop";

// export default function Home() {
//   const [pageIndex, setPageIndex] = useState(0);
//   const totalPages = Math.ceil(blogs.length / 3);
//   const filteredBlogs = blogs.slice(pageIndex * 3, pageIndex * 3 + 3);

//   return (
//     <>
//       {/* ===== SLIDER ===== */}
//       <div className="home-slider-wrapper">
//         <HeroSlider />
//       </div>

//       {/* ===== ABOUT SECTION ===== */}
//       <section className="about-section">
//         <div className="about-image">
//           <img src={img12} alt="About Meenakshi Education" />
//         </div>
//         <div className="about-content">
//           <h4>About Us</h4>
//           <h2>Meenakshi Education Sansthan - Salumber</h2>
//           <p>
//             Meenakshi Education Sansthan is a leading education institute,
//             established in 2019 to help students who want quality education and
//             success in competitive exams.
//           </p>
//           <button className="about-btn">Know More →</button>
//         </div>
//       </section>

//       {/* ===== COURSES ===== */}
//       <section className="courses-section">
//         <h3 className="courses-top">Top Categories</h3>
//         <h2 className="courses-title">Browse Popular Course</h2>

//         <div className="courses-grid">
//           <a href="/courses/bsc-course" className="course-card">
//             <div className="course-thumb">
//               <img src={bscImg} alt="B.Sc Course" />
//               <span className="course-tag">Graduation</span>
//             </div>
//             <div className="course-body">
//               <div className="course-meta">📘 &nbsp; 5 Subjects</div>
//               <h4 className="course-name">B.Sc Course</h4>
//             </div>
//           </a>

//           <a href="/courses/ba-course" className="course-card">
//             <div className="course-thumb">
//               <img src={baImg} alt="BA Course" />
//               <span className="course-tag">Graduation</span>
//             </div>
//             <div className="course-body">
//               <div className="course-meta">📗 &nbsp; 5 Subjects</div>
//               <h4 className="course-name">BA Course</h4>
//             </div>
//           </a>
//         </div>
//       </section>

//       {/* ===== FACILITIES ===== */}
//       <section className="facilities-section">
//         <h2 className="facilities-title">Explore by Facilities</h2>
//         <p className="facilities-sub">We provide modern facilities for students.</p>

//         <div className="facilities-grid">
//           {facilities.map((item, index) => (
//             <div key={index} className="facility-card">
//               <div className="facility-title">{item}</div>
//               <div className="facility-stars">★★★★★</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ===== BLOG SECTION ===== */}
//       <section className="blog-section">
//         <h4 className="blog-sub-title">OUR BLOG</h4>
//         <h2 className="blog-title">We are thrilled to bring you the latest updates</h2>
//         <p className="blog-desc">Stay informed with the latest happenings.</p>

//         <div className="blog-slider-wrapper">
//           <div className="blog-row">
//             {filteredBlogs.map((item, index) => (
//               <div className="blog-card" key={index}>
//                 <img src={item.img} alt="" className="blog-img" />
//                 <div className="blog-content">
//                   <span className="blog-category">Education</span>
//                   <h3 className="blog-name">{item.title}</h3>
//                   <div className="blog-meta">📅 {item.date}</div>
//                   <a href={item.link} className="blog-btn">Read More →</a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="dots-container">
//           {Array.from({ length: totalPages }).map((_, i) => (
//             <span key={i} className={`dot ${pageIndex === i ? "active" : ""}`} onClick={() => setPageIndex(i)} />
//           ))}
//         </div>
//       </section>

//       {/* ===== PARTNERS ===== */}
//       <section className="partners-wrapper">
//         <h4 className="partners-subtitle">PARTNERS</h4>
//         <h2 className="partners-title">Our Partners</h2>
//         <p className="partners-desc">These partnerships benefit students and institute.</p>

//         <div className="partners-logos">
//           <img src={img17} alt="" />
//           <img src={img18} alt="" />
//           <img src={img19} alt="" />
//           <img src={img20} alt="" />
//           <img src={img21} alt="" />
//         </div>
//       </section>

//       {/* ===== PANEL SECTION ===== */}
//       <section className="panel-section py-12 px-6 text-center">
//         <h4 className="text-orange-500 font-semibold tracking-widest">OUR PANEL</h4>
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-10">
//           Uses of panel page
//         </h2>

//         <div className="panel-grid">
//           {/* ADMIN */}
//           <Link to="/login" className="panel-card">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
//               alt="Admin"
//               className="panel-img"
//             />
//             <h3>Admin</h3>
//             <button className="panel-btn">Login</button>
//           </Link>

//           {/* STUDENT */}
//           <Link to="/student-zone/student-login" className="panel-card">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
//               alt="Student Login"
//               className="panel-img"
//             />
//             <h3>Student Login</h3>
//             <button className="panel-btn">Login</button>
//           </Link>
//         </div>
//       </section>

//       {/* ===== AUTHORIZATION ===== */}
//       <section className="authorization-section px-4 py-8">
//         <h4 className="text-center text-orange-500 font-semibold tracking-widest">AUTHORIZATION</h4>
//         <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-500 mb-3">
//           Our Authorization
//         </h2>
//         <p className="max-w-3xl text-center mx-auto text-gray-600 mb-10">
//           Institute authorization refers to the process by which an educational institution obtains approval or recognition from a governing body or
//           regulatory agency. This authorization allows the institute to offer courses or programs of study and award degrees or certifications to its
//           students.
//         </p>

//         <Swiper
//           slidesPerView={1}
//           spaceBetween={20}
//           autoplay={{ delay: 4000 }}
//           loop={true}
//           breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
//           modules={[Autoplay]}
//           className="w-full max-w-7xl mx-auto"
//         >
//           {[{img: img23, title: "Function"}, {img: img25, title: "Certificate"}, {img: img24, title: "Admission Open"}, {img: img22, title: "Group Photo"}].map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white rounded-xl overflow-hidden shadow-md border text-center p-3">
//                 <img src={item.img} alt={item.title} className="w-full h-20 object-cover rounded-lg" />
//                 <h3 className="py-3 font-bold text-gray-800 text-lg">{item.title}</h3>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </>
//   );
// }

// import React, { useState } from "react";
// import HeroSlider from "../components/HeroSlider/HeroSlider";
// import "./Home.css";
// import img12 from "../images/img12.jpeg";
// import { Link } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

// // Partner Images
// import img17 from "../images/img17.png";
// import img18 from "../images/img18.png";
// import img19 from "../images/img19.png";
// import img20 from "../images/img20.png";
// import img21 from "../images/img21.png";
// import img23 from "../images/img23.jpg";
// import img24 from "../images/img24.jpg";
// import img25 from "../images/img25.jpg";
// import img22 from "../images/img22.jpg";

// // Blog Images
// import blog1 from "../images/blog1.jpg";
// import blog2 from "../images/blog2.jpg";
// import blog3 from "../images/blog3.jpg";
// import blog4 from "../images/blog4.jpg";
// import blog5 from "../images/blog5.jpg";

// // Define blogs with slug for routing
// const blogs = [
//   { img: blog1, title: "Help to Women Education", date: "03 March 2023", slug: "help-to-women-education" },
//   { img: blog2, title: "Admission Notice", date: "21 May 2024", slug: "admission-notice" },
//   { img: blog3, title: "Admission Open 2024-2025", date: "21 May 2024", slug: "admission-open" },
//   { img: blog4, title: "Annual Function 2023", date: "11 Feb 2023", slug: "function-2023" },
//   { img: blog5, title: "Student Achievement", date: "02 April 2023", slug: "student-achievement" },
// ];

// const facilities = [
//   "Verifiable Certifications",
//   "Placement",
//   "Security",
//   "Low Fee Structure",
//   "Theory To Practical",
//   "Batch Flexibilities",
//   "Course Materials",
//   "Doubt Clearing Session",
// ];

// const bscImg = "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop";
// const baImg = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop";

// export default function Home() {
//   const [pageIndex, setPageIndex] = useState(0);
//   const totalPages = Math.ceil(blogs.length / 3);
//   const filteredBlogs = blogs.slice(pageIndex * 3, pageIndex * 3 + 3);

//   return (
//     <>
//       {/* ===== SLIDER ===== */}
//       <div className="home-slider-wrapper">
//         <HeroSlider />
//       </div>

//       {/* ===== ABOUT SECTION ===== */}
//       <section className="about-section">
//         <div className="about-image">
//           <img src={img12} alt="About Meenakshi Education" />
//         </div>
//         <div className="about-content">
//           <h4>About Us</h4>
//           <h2>Meenakshi Education Sansthan - Salumber</h2>
//           <p>
//             Meenakshi Education Sansthan is a leading education institute,
//             established in 2019 to help students who want quality education and
//             success in competitive exams.
//           </p>
//           <button className="about-btn">Know More →</button>
//         </div>
//       </section>

//       {/* ===== COURSES ===== */}
//       <section className="courses-section">
//         <h3 className="courses-top">Top Categories</h3>
//         <h2 className="courses-title">Browse Popular Course</h2>

//         <div className="courses-grid">
//           <Link to="/courses/bsc-course" className="course-card">
//             <div className="course-thumb">
//               <img src={bscImg} alt="B.Sc Course" />
//               <span className="course-tag">Graduation</span>
//             </div>
//             <div className="course-body">
//               <div className="course-meta">📘 &nbsp; 5 Subjects</div>
//               <h4 className="course-name">B.Sc Course</h4>
//             </div>
//           </Link>

//           <Link to="/courses/ba-course" className="course-card">
//             <div className="course-thumb">
//               <img src={baImg} alt="BA Course" />
//               <span className="course-tag">Graduation</span>
//             </div>
//             <div className="course-body">
//               <div className="course-meta">📗 &nbsp; 5 Subjects</div>
//               <h4 className="course-name">BA Course</h4>
//             </div>
//           </Link>
//         </div>
//       </section>

//       {/* ===== FACILITIES ===== */}
//       <section className="facilities-section">
//         <h2 className="facilities-title">Explore by Facilities</h2>
//         <p className="facilities-sub">We provide modern facilities for students.</p>

//         <div className="facilities-grid">
//           {facilities.map((item, index) => (
//             <div key={index} className="facility-card">
//               <div className="facility-title">{item}</div>
//               <div className="facility-stars">★★★★★</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ===== BLOG SECTION ===== */}
//       <section className="blog-section">
//         <h4 className="blog-sub-title">OUR BLOG</h4>
//         <h2 className="blog-title">We are thrilled to bring you the latest updates</h2>
//         <p className="blog-desc">Stay informed with the latest happenings.</p>

//         <div className="blog-slider-wrapper">
//           <div className="blog-row">
//             {filteredBlogs.map((item, index) => (
//               <div className="blog-card" key={index}>
//                 {/* Wrap image in Link for proper routing */}
//                 <Link to={`/blog/${item.slug}`}>
//                   <img src={item.img} alt={item.title} className="blog-img" />
//                 </Link>
//                 <div className="blog-content">
//                   <span className="blog-category">Education</span>
//                   <h3 className="blog-name">{item.title}</h3>
//                   <div className="blog-meta">📅 {item.date}</div>
//                   <Link to={`/blog/${item.slug}`} className="blog-btn">Read More →</Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="dots-container">
//           {Array.from({ length: totalPages }).map((_, i) => (
//             <span key={i} className={`dot ${pageIndex === i ? "active" : ""}`} onClick={() => setPageIndex(i)} />
//           ))}
//         </div>
//       </section>

//       {/* ===== PARTNERS ===== */}
//       <section className="partners-wrapper">
//         <h4 className="partners-subtitle">PARTNERS</h4>
//         <h2 className="partners-title">Our Partners</h2>
//         <p className="partners-desc">These partnerships benefit students and institute.</p>

//         <div className="partners-logos">
//           <img src={img17} alt="" />
//           <img src={img18} alt="" />
//           <img src={img19} alt="" />
//           <img src={img20} alt="" />
//           <img src={img21} alt="" />
//         </div>
//       </section>

//       {/* ===== PANEL SECTION ===== */}
//       <section className="panel-section py-12 px-6 text-center">
//         <h4 className="text-orange-500 font-semibold tracking-widest">OUR PANEL</h4>
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-10">
//           Uses of panel page
//         </h2>

//         <div className="panel-grid">
//           {/* ADMIN */}
//           <Link to="/login" className="panel-card">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
//               alt="Admin"
//               className="panel-img"
//             />
//             <h3>Admin</h3>
//             <button className="panel-btn">Login</button>
//           </Link>

//           {/* STUDENT */}
//           <Link to="/student-zone/student-login" className="panel-card">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
//               alt="Student Login"
//               className="panel-img"
//             />
//             <h3>Student Login</h3>
//             <button className="panel-btn">Login</button>
//           </Link>
//         </div>
//       </section>

//       {/* ===== AUTHORIZATION ===== */}
//       <section className="authorization-section px-4 py-8">
//         <h4 className="text-center text-orange-500 font-semibold tracking-widest">AUTHORIZATION</h4>
//         <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-500 mb-3">
//           Our Authorization
//         </h2>
//         <p className="max-w-3xl text-center mx-auto text-gray-600 mb-10">
//           Institute authorization refers to the process by which an educational institution obtains approval or recognition from a governing body or
//           regulatory agency. This authorization allows the institute to offer courses or programs of study and award degrees or certifications to its
//           students.
//         </p>

//         <Swiper
//           slidesPerView={1}
//           spaceBetween={20}
//           autoplay={{ delay: 4000 }}
//           loop={true}
//           breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
//           modules={[Autoplay]}
//           className="w-full max-w-7xl mx-auto"
//         >
//           {[{img: img23, title: "Function"}, {img: img25, title: "Certificate"}, {img: img24, title: "Admission Open"}, {img: img22, title: "Group Photo"}].map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white rounded-xl overflow-hidden shadow-md border text-center p-3">
//                 <img src={item.img} alt={item.title} className="w-full h-20 object-cover rounded-lg" />
//                 <h3 className="py-3 font-bold text-gray-800 text-lg">{item.title}</h3>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </>
//   );
// }



import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import "./Home.css";
import Blog from "../components/Blog/Blog";
// import img12 from "../images/img12.jpeg";
import { Link } from "react-router-dom";
import Panel from "../components/Panel/Panel";
import AboutUs from "../components/AboutUs/AboutUs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Authorization from "../components/Authorization/Authorization";

import "swiper/css/autoplay";
import Partners from "../components/Partners/Partners";
import NoticeBoard from "../components/NoticeBoard/NoticeBoard";
import { Autoplay } from "swiper/modules";
import Facilities from "../components/Facilities/Facilities";
import Courses from "../components/Courses/Courses";
// Partner Images
// import img17 from "../images/img17.png";
// import img18 from "../images/img18.png";
// import img19 from "../images/img19.png";
// import img20 from "../images/img20.png";
// import img21 from "../images/img21.png";
// import img23 from "../images/img23.jpg";
// import img24 from "../images/img24.jpg";
// import img25 from "../images/img25.jpg";
// import img22 from "../images/img22.jpg";

// Blog Images
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
// import blog3 from "../images/blog3.jpg";
import blog4 from "../images/blog4.jpg";
import blog5 from "../images/blog5.jpg";

// Define blogs with slug for routing
const blogs = [
  { img: blog1, title: "Help to Women Education", date: "03 March 2023", slug: "help-to-women-education" },
  { img: blog2, title: "Admission Notice", date: "21 May 2024", slug: "admission-notice" },
  // { img: blog3, title: "Admission Open 2024-2025", date: "21 May 2024", slug: "admission-open" },
  { img: blog4, title: "Annual Function 2023", date: "11 Feb 2023", slug: "function-2023" },
  { img: blog5, title: "Student Achievement", date: "02 April 2023", slug: "student-achievement" },
];

const facilities = [
  "Verifiable Certifications",
  "Placement",
  "Security",
  "Low Fee Structure",
  "Theory To Practical",
  "Batch Flexibilities",
  "Course Materials",
  "Doubt Clearing Session",
];

const bscImg = "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop";
const baImg = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop";

export default function Home() {
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = Math.ceil(blogs.length / 3);
  const filteredBlogs = blogs.slice(pageIndex * 3, pageIndex * 3 + 3);

  return (
    <>
      {/* ===== SLIDER ===== */}
      <div className="home-slider-wrapper">
        <HeroSlider />
      </div>

  
<AboutUs />
<Courses /> 
<Facilities />
<Blog />
<NoticeBoard />
<Partners />
<Panel />
<Authorization />

     
    </>
  );
}
