
// import React from "react";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// // Pages
// import Home from "../pages/Home";
// import AboutUs from "../pages/AboutUs";
// import DirectorMessage from "../pages/DirectorMessage";
// import ManagementHead from "../pages/ManagementHead";
// import PrincipalMessage from "../pages/PrincipalMessage";
// import OtherFaculty from "../pages/OtherFaculty";
// import VisionMission from "../pages/VisionMission";
// import LinkageAuthorization from "../pages/LinkageAuthorization";
// import Testimonial from "../pages/Testimonial";
// import Courses from "../pages/Courses";
// import BACourse from "../pages/BACourse";
// import BSCCourse from "../pages/BSCCourse";
// import StudentZone from "../pages/StudentZone";
// import StudentQuery from "../pages/StudentQuery";
// import StudentVerification from "../pages/StudentVerification";
// import StudentLogin from "../pages/StudentLogin";
// import Syllabus from "../pages/Syllabus";
// import OldPaper from "../pages/OldPaper";
// import Gallery from "../pages/Gallery";
// import PhotoGallery from "../pages/PhotoGallery";
// import VideoGallery from "../pages/VideoGallery";
// import Career from "../pages/Career";
// import ITConsultant from "../pages/ITConsultant";
// import Highlights from "../pages/Highlights";
// import Blog from "../pages/Blog";
// import Event from "../pages/Event";
// import News from "../pages/News";
// import FeePayment from "../pages/FeePayment";
// import Contact from "../pages/Contact";
// import ContactUs from "../pages/ContactUs";
// import Download from "../pages/Download";
// import Login from "../pages/Login";
// import BlogDetail from "../pages/BlogDetail";

// // Components
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import ScrollToTop from "../components/ScrollToTop";
// import PageWrapper from "../components/PageWrapper";

// function RootLayout() {
//   return (
//     <>
//       <ScrollToTop />
//       <Header />

//       {/* Added gap here */}
//       <main style={{ minHeight: "80vh", paddingBottom: "50px" }}>
//         <PageWrapper>
//           <Outlet />
//         </PageWrapper>
//       </main>

//       <Footer />
//     </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "about-us", element: <AboutUs /> },
//       { path: "about-us/director-message", element: <DirectorMessage /> },
//       { path: "about-us/management-head", element: <ManagementHead /> },
//       { path: "about-us/principal-message", element: <PrincipalMessage /> },
//       { path: "about-us/other-faculty", element: <OtherFaculty /> },
//       { path: "about-us/vision-mission", element: <VisionMission /> },
//       { path: "about-us/linkage-authorization", element: <LinkageAuthorization /> },
//       { path: "about-us/testimonial", element: <Testimonial /> },

//       { path: "courses", element: <Courses /> },
//       { path: "courses/ba-course", element: <BACourse /> },
//       { path: "courses/bsc-course", element: <BSCCourse /> },

//       { path: "student-zone", element: <StudentZone /> },
//       { path: "student-zone/student-query", element: <StudentQuery /> },
//       { path: "student-zone/student-verification", element: <StudentVerification /> },
//       { path: "student-zone/student-login", element: <StudentLogin /> },
//       { path: "student-zone/syllabus", element: <Syllabus /> },
//       { path: "student-zone/old-paper", element: <OldPaper /> },

//       { path: "gallery", element: <Gallery /> },
//       { path: "gallery/photo-gallery", element: <PhotoGallery /> },
//       { path: "gallery/video-gallery", element: <VideoGallery /> },

//       { path: "career", element: <Career /> },
//       { path: "career/it-consultant", element: <ITConsultant /> },

//       { path: "highlights", element: <Highlights /> },
//       { path: "highlights/blog", element: <Blog /> },
//       { path: "highlights/event", element: <Event /> },
//       { path: "highlights/news", element: <News /> },
//       { path: "blog-detail/:slug", element: <BlogDetail /> },

//       { path: "online-fee-payment", element: <FeePayment /> },

//       { path: "contact", element: <Contact /> },
//       { path: "contact/contact-us", element: <ContactUs /> },
//       { path: "contact/download", element: <Download /> },

//       { path: "login", element: <Login /> },
//     ],
//   },
// ]);

// export default function AppRoutes() {
//   return <RouterProvider router={router} />;
// }

// import React from "react";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// // Pages
// import Home from "../pages/Home";
// import AboutUs from "../pages/AboutUs";
// import DirectorMessage from "../pages/DirectorMessage";
// import ManagementHead from "../pages/ManagementHead";
// import PrincipalMessage from "../pages/PrincipalMessage";
// import OtherFaculty from "../pages/OtherFaculty";
// import VisionMission from "../pages/VisionMission";
// import LinkageAuthorization from "../pages/LinkageAuthorization";
// import Testimonial from "../pages/Testimonial";
// import Courses from "../pages/Courses";
// import BACourse from "../pages/BACourse";
// import BSCCourse from "../pages/BSCCourse";
// import StudentZone from "../pages/StudentZone";
// import StudentQuery from "../pages/StudentQuery";
// import StudentVerification from "../pages/StudentVerification";
// import StudentLogin from "../pages/StudentLogin";
// import Syllabus from "../pages/Syllabus";
// import OldPaper from "../pages/OldPaper";
// import Gallery from "../pages/Gallery";
// import PhotoGallery from "../pages/PhotoGallery";
// import VideoGallery from "../pages/VideoGallery";
// import Career from "../pages/Career";
// import ITConsultant from "../pages/ITConsultant";
// import Highlights from "../pages/Highlights";
// import Blog from "../pages/Blog";
// import Event from "../pages/Event";
// import News from "../pages/News";
// import FeePayment from "../pages/FeePayment";
// import Contact from "../pages/Contact";
// import ContactUs from "../pages/ContactUs";
// import Download from "../pages/Download";
// import Login from "../pages/Login";
// import BlogDetail from "../pages/BlogDetail";

// // ⭐ Correct Blog Imports
// import ProspectiveFaculty from "../Blogs/ProspectiveFaculty";
// import StudentGovernance from "../Blogs/StudentGovernance";
// import WomenEducation from "../Blogs/WomenEducation";
// import StudentAchievement from "../Blogs/StudentAchievement";
// import AnnualFunction from "../Blogs/AnnualFunction";

// // Components
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import ScrollToTop from "../components/ScrollToTop";
// import PageWrapper from "../components/PageWrapper";

// function RootLayout() {
//   return (
//     <>
//       <ScrollToTop />
//       <Header />
//       <main style={{ minHeight: "80vh", paddingBottom: "50px" }}>
//         <PageWrapper>
//           <Outlet />
//         </PageWrapper>
//       </main>
//       <Footer />
//     </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "highlights/blog", element: <Blog /> },

//       // ⭐ Blog Detail Pages
//       { path: "highlights/blog/prospective-faculty", element: <ProspectiveFaculty /> },
//       { path: "highlights/blog/student-governance", element: <StudentGovernance /> },
//       { path: "highlights/blog/women-education", element: <WomenEducation /> },
//       { path: "highlights/blog/student-achievement", element: <StudentAchievement /> },
//       { path: "highlights/blog/annual-function", element: <AnnualFunction /> },
//     ],
//   },
// ]);

// export default function AppRoutes() {
//   return <RouterProvider router={router} />;
// }


// import React from "react";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// // ------- All Pages -------
// import Home from "../pages/Home";
// import AboutUs from "../pages/AboutUs";
// import DirectorMessage from "../pages/DirectorMessage";
// import ManagementHead from "../pages/ManagementHead";
// import PrincipalMessage from "../pages/PrincipalMessage";
// import OtherFaculty from "../pages/OtherFaculty";
// import VisionMission from "../pages/VisionMission";
// import LinkageAuthorization from "../pages/LinkageAuthorization";
// import Testimonial from "../pages/Testimonial";

// import Courses from "../pages/Courses";
// import BACourse from "../pages/BACourse";
// import BSCCourse from "../pages/BSCCourse";

// import StudentZone from "../pages/StudentZone";
// import StudentQuery from "../pages/StudentQuery";
// import StudentVerification from "../pages/StudentVerification";
// import StudentLogin from "../pages/StudentLogin";
// import Syllabus from "../pages/Syllabus";
// import OldPaper from "../pages/OldPaper";

// import Gallery from "../pages/Gallery";
// import PhotoGallery from "../pages/PhotoGallery";
// import VideoGallery from "../pages/VideoGallery";

// import Career from "../pages/Career";
// import ITConsultant from "../pages/ITConsultant";

// import Highlights from "../pages/Highlights";
// import Blog from "../pages/Blog";
// import BlogDetail from "../pages/BlogDetail";
// import Event from "../pages/Event";
// import News from "../pages/News";

// import FeePayment from "../pages/FeePayment";

// import Contact from "../pages/Contact";
// import ContactUs from "../pages/ContactUs";
// import Download from "../pages/Download";

// import Login from "../pages/Login";

// // ------- NEW FULL PAGE BLOG ROUTES -------
// import ProspectiveFaculty from "../Blogs/ProspectiveFaculty";
// import StudentGovernance from "../Blogs/StudentGovernance";
// import WomenEducation from "../Blogs/WomenEducation";
// import StudentAchievement from "../Blogs/StudentAchievement";
// import AnnualFunction from "../Blogs/AnnualFunction";

// // ------- Components -------
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import ScrollToTop from "../components/ScrollToTop";
// import PageWrapper from "../components/PageWrapper";


// function RootLayout() {
//   return (
//     <>
//       <ScrollToTop />
//       <Header />

//       <main style={{ minHeight: "80vh", paddingBottom: "50px" }}>
//         <PageWrapper>
//           <Outlet />
//         </PageWrapper>
//       </main>

//       <Footer />
//     </>
//   );
// }


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [

//       // ---------- Home ----------
//       { index: true, element: <Home /> },

//       // ---------- ABOUT ----------
//       { path: "about-us", element: <AboutUs /> },
//       { path: "about-us/director-message", element: <DirectorMessage /> },
//       { path: "about-us/management-head", element: <ManagementHead /> },
//       { path: "about-us/principal-message", element: <PrincipalMessage /> },
//       { path: "about-us/other-faculty", element: <OtherFaculty /> },
//       { path: "about-us/vision-mission", element: <VisionMission /> },
//       { path: "about-us/linkage-authorization", element: <LinkageAuthorization /> },
//       { path: "about-us/testimonial", element: <Testimonial /> },


//       // ---------- COURSES ----------
//       { path: "courses", element: <Courses /> },
//       { path: "courses/ba-course", element: <BACourse /> },
//       { path: "courses/bsc-course", element: <BSCCourse /> },


//       // ---------- STUDENT ZONE ----------
//       { path: "student-zone", element: <StudentZone /> },
//       { path: "student-zone/student-query", element: <StudentQuery /> },
//       { path: "student-zone/student-verification", element: <StudentVerification /> },
//       { path: "student-zone/student-login", element: <StudentLogin /> },
//       { path: "student-zone/syllabus", element: <Syllabus /> },
//       { path: "student-zone/old-paper", element: <OldPaper /> },


//       // ---------- GALLERY ----------
//       { path: "gallery", element: <Gallery /> },
//       { path: "gallery/photo-gallery", element: <PhotoGallery /> },
//       { path: "gallery/video-gallery", element: <VideoGallery /> },


//       // ---------- CAREER ----------
//       { path: "career", element: <Career /> },
//       { path: "career/it-consultant", element: <ITConsultant /> },


//       // ---------- HIGHLIGHTS ----------
//       { path: "highlights", element: <Highlights /> },
//       { path: "highlights/blog", element: <Blog /> },
//       { path: "highlights/event", element: <Event /> },
//       { path: "highlights/news", element: <News /> },

//       // ⭐ BLOG SYSTEM ⭐
//       { path: "highlights/blog/:slug", element: <BlogDetail /> },

//       // ⭐ FULL PAGE BLOG ROUTES (BUTTON → FULL PAGE)
//       { path: "highlights/prospective-faculty", element: <ProspectiveFaculty /> },
//       { path: "highlights/student-governance", element: <StudentGovernance /> },
//       { path: "highlights/help-to-women-education", element: <WomenEducation /> },
//       { path: "highlights/student-achievement", element: <StudentAchievement /> },
//       { path: "highlights/function-2023", element: <AnnualFunction /> },


//       // ---------- PAYMENT ----------
//       { path: "online-fee-payment", element: <FeePayment /> },


//       // ---------- CONTACT ----------
//       { path: "contact", element: <Contact /> },
//       { path: "contact/contact-us", element: <ContactUs /> },
//       { path: "contact/download", element: <Download /> },


//       // ---------- LOGIN ----------
//       { path: "login", element: <Login /> },
//     ],
//   },
// ]);


// export default function AppRoutes() {
//   return <RouterProvider router={router} />;
// }


// import React from "react";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// // ------- All Pages -------
// import Home from "../pages/Home";
// import AboutUs from "../pages/AboutUs";
// import DirectorMessage from "../pages/DirectorMessage";
// import ManagementHead from "../pages/ManagementHead";
// import PrincipalMessage from "../pages/PrincipalMessage";
// import OtherFaculty from "../pages/OtherFaculty";
// import VisionMission from "../pages/VisionMission";
// import LinkageAuthorization from "../pages/LinkageAuthorization";
// import Testimonial from "../pages/Testimonial";

// import Courses from "../pages/Courses";
// import BACourse from "../pages/BACourse";
// import BSCCourse from "../pages/BSCCourse";

// import StudentZone from "../pages/StudentZone";
// import StudentQuery from "../pages/StudentQuery";
// import StudentVerification from "../pages/StudentVerification";
// import StudentLogin from "../pages/StudentLogin";
// import Syllabus from "../pages/Syllabus";
// import OldPaper from "../pages/OldPaper";

// import Gallery from "../pages/Gallery";
// import PhotoGallery from "../pages/PhotoGallery";
// import VideoGallery from "../pages/VideoGallery";

// import Career from "../pages/Career";
// import ITConsultant from "../pages/ITConsultant";

// import Highlights from "../pages/Highlights";
// import Blog from "../pages/Blog";
// import BlogDetail from "../pages/BlogDetail";
// import Event from "../pages/Event";
// import News from "../pages/News";

// import FeePayment from "../pages/FeePayment";

// import Contact from "../pages/Contact";
// import ContactUs from "../pages/ContactUs";
// import Download from "../pages/Download";

// import Login from "../pages/Login";

// // ------- NEW FULL PAGE BLOG ROUTES (from pages folder) -------
// import ProspectiveFaculty from "../pages/ProspectiveFaculty";
// import StudentGovernance from "../pages/StudentGovernance";
// import WomenEducation from "../pages/WomenEducation";
// import StudentAchievement from "../pages/StudentAchievement";
// import AnnualFunction from "../pages/AnnualFunction";

// // ------- Components -------
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// import ScrollToTop from "../components/ScrollToTop";
// import PageWrapper from "../components/PageWrapper";

// function RootLayout() {
//   return (
//     <>
//       <ScrollToTop />
//       <Header />

//       <main style={{ minHeight: "80vh", paddingBottom: "50px" }}>
//         <PageWrapper>
//           <Outlet />
//         </PageWrapper>
//       </main>

//       <Footer />
//     </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       // ---------- Home ----------
//       { index: true, element: <Home /> },

//       // ---------- ABOUT ----------
//       { path: "about-us", element: <AboutUs /> },
//       { path: "about-us/director-message", element: <DirectorMessage /> },
//       { path: "about-us/management-head", element: <ManagementHead /> },
//       { path: "about-us/principal-message", element: <PrincipalMessage /> },
//       { path: "about-us/other-faculty", element: <OtherFaculty /> },
//       { path: "about-us/vision-mission", element: <VisionMission /> },
//       { path: "about-us/linkage-authorization", element: <LinkageAuthorization /> },
//       { path: "about-us/testimonial", element: <Testimonial /> },

//       // ---------- COURSES ----------
//       { path: "courses", element: <Courses /> },
//       { path: "courses/ba-course", element: <BACourse /> },
//       { path: "courses/bsc-course", element: <BSCCourse /> },

//       // ---------- STUDENT ZONE ----------
//       { path: "student-zone", element: <StudentZone /> },
//       { path: "student-zone/student-query", element: <StudentQuery /> },
//       { path: "student-zone/student-verification", element: <StudentVerification /> },
//       { path: "student-zone/student-login", element: <StudentLogin /> },
//       { path: "student-zone/syllabus", element: <Syllabus /> },
//       { path: "student-zone/old-paper", element: <OldPaper /> },

//       // ---------- GALLERY ----------
//       { path: "gallery", element: <Gallery /> },
//       { path: "gallery/photo-gallery", element: <PhotoGallery /> },
//       { path: "gallery/video-gallery", element: <VideoGallery /> },

//       // ---------- CAREER ----------
//       { path: "career", element: <Career /> },
//       { path: "career/it-consultant", element: <ITConsultant /> },

//       // ---------- HIGHLIGHTS ----------
//       { path: "highlights", element: <Highlights /> },
//       { path: "highlights/blog", element: <Blog /> },
//       { path: "highlights/event", element: <Event /> },
//       { path: "highlights/news", element: <News /> },

//       // ⭐ BLOG SYSTEM ⭐
//       { path: "highlights/blog/:slug", element: <BlogDetail /> },

//       // ⭐ FULL PAGE BLOG ROUTES
//       { path: "highlights/prospective-faculty", element: <ProspectiveFaculty /> },
//       { path: "highlights/student-governance", element: <StudentGovernance /> },
//       { path: "highlights/help-to-women-education", element: <WomenEducation /> },
//       { path: "highlights/student-achievement", element: <StudentAchievement /> },
//       { path: "highlights/function-2023", element: <AnnualFunction /> },

//       // ---------- PAYMENT ----------
//       { path: "online-fee-payment", element: <FeePayment /> },

//       // ---------- CONTACT ----------
//       { path: "contact", element: <Contact /> },
//       { path: "contact/contact-us", element: <ContactUs /> },
//       { path: "contact/download", element: <Download /> },

//       // ---------- LOGIN ----------
//       { path: "login", element: <Login /> },
//     ],
//   },
// ]);

// export default function AppRoutes() {
//   return <RouterProvider router={router} />;
// }

import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// ------- All Pages -------
import Home from "../pages/Home";
import AboutUs from "../components/AboutUs/AboutUs";
import DirectorMessage from "../pages/DirectorMessage";
import ManagementHead from "../pages/ManagementHead";
import PrincipalMessage from "../pages/PrincipalMessage";
import OtherFaculty from "../pages/OtherFaculty";
import VisionMission from "../pages/VisionMission";
import LinkageAuthorization from "../pages/LinkageAuthorization";
import Testimonial from "../pages/Testimonial";

import Courses from "../components/Courses/Courses";
import BACourse from "../pages/BACourse";
import BSCCourse from "../pages/BSCCourse";

import StudentZone from "../pages/StudentZone";
import StudentQuery from "../pages/StudentQuery";
import StudentVerification from "../pages/StudentVerification";
import StudentLogin from "../pages/StudentLogin";
import Syllabus from "../pages/Syllabus";
import OldPaper from "../pages/OldPaper";

import Gallery from "../pages/Gallery";
import PhotoGallery from "../pages/PhotoGallery";
import VideoGallery from "../pages/VideoGallery";

import Career from "../pages/Career";
import ITConsultant from "../pages/ITConsultant";

import Highlights from "../pages/Highlights";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Event from "../pages/Event";
import News from "../pages/News";

import FeePayment from "../pages/FeePayment";
import Facilities from "../components/Facilities/Facilities";
import Contact from "../pages/Contact";
import ContactUs from "../pages/ContactUs";
import Download from "../pages/Download";

import Login from "../pages/Login";

// ------- NEW FULL PAGE BLOG ROUTES -------
import ProspectiveFaculty from "../pages/ProspectiveFaculty";
import StudentGovernance from "../pages/StudentGovernance";
import WomenEducation from "../pages/WomenEducation";
import StudentAchievement from "../pages/StudentAchievement";
import AnnualFunction from "../pages/AnnualFunction";

// ------- NEW EVENT DETAIL PAGE -------
import EventDetail from "../pages/EventDetail";

// ------- Components -------
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import PageWrapper from "../components/PageWrapper";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main style={{ minHeight: "80vh", paddingBottom: "50px" }}>
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </main>

      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // ---------- Home ----------
      { index: true, element: <Home /> },

      // ---------- ABOUT ----------
      { path: "about-us", element: <AboutUs /> },
      { path: "about-us/director-message", element: <DirectorMessage /> },
      { path: "about-us/management-head", element: <ManagementHead /> },
      { path: "about-us/principal-message", element: <PrincipalMessage /> },
      { path: "about-us/other-faculty", element: <OtherFaculty /> },
      { path: "about-us/vision-mission", element: <VisionMission /> },
      { path: "about-us/linkage-authorization", element: <LinkageAuthorization /> },
      { path: "about-us/testimonial", element: <Testimonial /> },

      // ---------- COURSES ----------
      { path: "courses", element: <Courses /> },
      { path: "courses/ba-course", element: <BACourse /> },
      { path: "courses/bsc-course", element: <BSCCourse /> },

      // ---------- STUDENT ZONE ----------
      { path: "student-zone", element: <StudentZone /> },
      { path: "student-zone/student-query", element: <StudentQuery /> },
      { path: "student-zone/student-verification", element: <StudentVerification /> },
      { path: "student-zone/student-login", element: <StudentLogin /> },
      { path: "student-zone/syllabus", element: <Syllabus /> },
      { path: "student-zone/old-paper", element: <OldPaper /> },

      // ---------- GALLERY ----------
      { path: "gallery", element: <Gallery /> },
      { path: "gallery/photo-gallery", element: <PhotoGallery /> },
      { path: "gallery/video-gallery", element: <VideoGallery /> },

      // ---------- CAREER ----------
      { path: "career", element: <Career /> },
      { path: "career/it-consultant", element: <ITConsultant /> },

      // ---------- HIGHLIGHTS ----------
      { path: "highlights", element: <Highlights /> },
      { path: "highlights/blog", element: <Blog /> },
      { path: "highlights/event", element: <Event /> },
      { path: "highlights/news", element: <News /> },

      // ⭐ BLOG SYSTEM ⭐
      { path: "highlights/blog/:slug", element: <BlogDetail /> },

      // ⭐ FULL PAGE BLOG ROUTES ⭐
      { path: "highlights/prospective-faculty", element: <ProspectiveFaculty /> },
      { path: "highlights/student-governance", element: <StudentGovernance /> },
      { path: "highlights/help-to-women-education", element: <WomenEducation /> },
      { path: "highlights/student-achievement", element: <StudentAchievement /> },
      { path: "highlights/function-2023", element: <AnnualFunction /> },

      // ⭐ NEW EVENT DETAIL ROUTE ⭐
      { path: "highlights/event/:slug", element: <EventDetail /> },

      // ---------- PAYMENT ----------
      { path: "online-fee-payment", element: <FeePayment /> },

      // ---------- CONTACT ----------
      { path: "contact", element: <Contact /> },
      { path: "contact/contact-us", element: <ContactUs /> },
      { path: "contact/download", element: <Download /> },

      // ---------- LOGIN ----------
      { path: "login", element: <Login /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
