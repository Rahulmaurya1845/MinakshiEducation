import React from "react";
import { useNavigate } from "react-router-dom";
import "./Event.css";

import event1 from "../images/event1.jpg";
import event2 from "../images/event2.jpg";
import event3 from "../images/event3.jpg";
import event4 from "../images/event4.jpg";

const events = [
  {
    id: 1,
    title: "Tech Future",
    subtitle: "Emerging Technologies Summit",
    imgSrc: event1,
    link: "/highlights/event/tech-future",
  },
  {
    id: 2,
    title: "AI Seminar",
    subtitle: "Artificial Intelligence & ML",
    imgSrc: event2,
    link: "/highlights/event/ai-seminar",
  },
  {
    id: 3,
    title: "Innovation Workshop",
    subtitle: "Hands-on Innovation Lab",
    imgSrc: event3,
    link: "/highlights/event/innovation-workshop",
  },
  {
    id: 4,
    title: "New Event",
    subtitle: "Campus Highlights & Activities",
    imgSrc: event4,
    link: "/highlights/event/new-event",
  },
];

export default function Event() {
  const navigate = useNavigate();

  return (
    <section className="event-section">
      {/* Top title area */}
      <div className="event-header">
        <h1 className="event-title">Events</h1>
        <p className="event-subtitle">
          Explore our latest seminars, workshops, and campus activities.
        </p>
      </div>

      {/* Grid of event cards */}
      <div className="event-grid">
        {events.map((evt) => (
          <article
            key={evt.id}
            className="event-card"
            onClick={() => navigate(evt.link)}
          >
            <div className="event-image-wrapper">
              <img src={evt.imgSrc} alt={evt.title} className="event-image" />
              <div className="event-overlay" />
              <div className="event-chip">View Details</div>
            </div>

            <div className="event-content">
              <h3 className="event-card-title">{evt.title}</h3>
              <p className="event-card-subtitle">{evt.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
