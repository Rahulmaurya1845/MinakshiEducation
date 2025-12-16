import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import event1 from "../images/event1.jpg";
import event2 from "../images/event2.jpg";
import event3 from "../images/event3.jpg";
import event4 from "../images/event4.jpg";
import "./EventDetail.css";

// Event data
const events = [
  { slug: "tech-future", title: "Tech Future", img: event1, description: "Details about Tech Future event..." },
  { slug: "ai-seminar", title: "AI Seminar", img: event2, description: "Details about AI Seminar..." },
  { slug: "innovation-workshop", title: "Innovation Workshop", img: event3, description: "Details about Innovation Workshop..." },
  { slug: "new-event", title: "New Event", img: event4, description: "Details about New Event..." },
];

export default function EventDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return <h2 style={{ textAlign: "center", padding: "50px" }}>Event Not Found</h2>;
  }

  return (
    <div className="event-detail-page">

      {/* LEFT SIDE: BIG IMAGE + CONTENT */}
      <div className="event-main">
        <img src={event.img} alt={event.title} className="main-event-img" />
        <h1>{event.title}</h1>
        <p className="event-content">{event.description}</p>
      </div>

      {/* RIGHT SIDE: SIDEBAR */}
      <div className="event-sidebar">
        <h3>EVENTS</h3>

        {events.map((evt) => (
          <div
            key={evt.slug}
            className={`sidebar-item ${evt.slug === slug ? "active" : ""}`}
            onClick={() => navigate(`/highlights/event/${evt.slug}`)}
          >
            <img src={evt.img} alt={evt.title} />
            <p>{evt.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
