import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./Authorization.css";

import img23 from "../../images/img23.jpg";
import img25 from "../../images/img25.jpg";
import img24 from "../../images/img24.jpg";
import img22 from "../../images/img22.jpg";

export default function Authorization() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("auth-visible");
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const authItems = [
    { img: img23, title: "Function" },
    { img: img25, title: "Certificate" },
    { img: img24, title: "Admission Open" },
    { img: img22, title: "Group Photo" },
  ];

  return (
    <section ref={sectionRef} className="authorization-section">
      <div className="authorization-bg-layer" />

      <div className="authorization-inner">
        <div className="authorization-header">
          <h4 className="authorization-subtitle">AUTHORIZATION</h4>
          <h2 className="authorization-title">Our Authorization</h2>
          <p className="authorization-description">
            Institute authorization from recognized bodies allows us to conduct
            certified courses, assessments and award qualifications that hold
            value for students in their academic and professional journey.
          </p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={28}
          autoplay={{ delay: 3800, disableOnInteraction: false }}
          loop
          speed={650}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
          className="authorization-slider"
        >
          {authItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="auth-card">
                <div className="auth-card-glow" />
                <div className="auth-image-wrapper">
                  <img src={item.img} alt={item.title} />
                </div>
                <h3 className="auth-card-title">{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
