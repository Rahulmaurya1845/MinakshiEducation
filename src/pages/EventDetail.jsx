import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EventDetail.css";

import event1 from "../images/event1.jpg";
import event2 from "../images/event2.jpg";
import event3 from "../images/event3.jpg";
import event4 from "../images/event4.jpg";

const events = [
  {
    slug: "tech-future",
    title: "Tech Future",
    img: event1,
    date: "March 3, 2023",
    tagline: "Shaping Tomorrow with Technology",
  },
  {
    slug: "ai-seminar",
    title: "AI Seminar",
    img: event2,
    date: "May 21, 2024",
    tagline: "Exploring Intelligence Beyond Code",
  },
  {
    slug: "innovation-workshop",
    title: "Innovation Workshop",
    img: event3,
    date: "February 11, 2023",
    tagline: "Ideas That Transform the Future",
  },
  {
    slug: "new-event",
    title: "New Event",
    img: event4,
    date: "April 2, 2023",
    tagline: "Learning That Creates Impact",
  },
];

export default function EventDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <h2 style={{ textAlign: "center", padding: "60px" }}>
        Event Not Found
      </h2>
    );
  }

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="event-hero" key={slug}>
        {/* HD IMAGE LAYER */}
        <div
          className="event-hero-image"
          style={{ backgroundImage: `url(${event.img})` }}
        />

        {/* OVERLAY */}
        <div className="event-hero-overlay" />

        {/* BACK BUTTON */}
        <button
          className="event-back-btn"
          onClick={() => navigate("/highlights/event")}
        >
          ← Back to Events
        </button>

        {/* HERO CONTENT */}
        <div className="event-hero-content">
          <span className="event-badge">EVENT</span>
          <h1>{event.title}</h1>
          <p className="event-meta">{event.date}</p>
          <p className="event-tagline">{event.tagline}</p>
        </div>
      </section>

      {/* ================= BODY ================= */}
      <section className="event-page-body">
        {/* MAIN CONTENT */}
        <div className="event-main-content">
          <p>
            <strong>{event.title}</strong> was organized to provide students with
            valuable exposure to modern trends, emerging technologies, and
            real-world applications.
          </p>

          <p>
            The event featured expert speakers, live demonstrations, and
            interactive sessions designed to bridge the gap between academic
            learning and industry requirements.
          </p>

          <p>
            Participants actively engaged in discussions, asked insightful
            questions, and gained practical knowledge that extends beyond
            traditional classroom education.
          </p>

          <p>
            Such initiatives strengthen critical thinking, innovation, and
            career readiness while motivating students to pursue excellence in
            their respective domains.
          </p>

          <p>
            We encourage students to regularly participate in upcoming seminars,
            workshops, and learning programs to stay updated in a rapidly
            evolving technological landscape.
          </p>
        </div>

        {/* SIDEBAR */}
        <aside className="event-sidebar">
          <h3>Other Events</h3>

          {events.map((evt) => (
            <div
              key={evt.slug}
              className={`event-sidebar-item ${
                evt.slug === slug ? "active" : ""
              }`}
              onClick={() => navigate(`/highlights/event/${evt.slug}`)}
            >
              <img src={evt.img} alt={evt.title} />
              <div>
                <p className="sidebar-title">{evt.title}</p>
                <span className="sidebar-date">{evt.date}</span>
              </div>
            </div>
          ))}
        </aside>
      </section>
    </>
  );
}
