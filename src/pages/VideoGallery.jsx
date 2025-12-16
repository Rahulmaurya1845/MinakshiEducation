import React from "react";
import { Link } from "react-router-dom";
import "./VideoGallery.css";
import videogalleryimg from "../images/videogalleryimg.png";

const VideoGallery = () => {
  return (
    <section className="video-gallery-section">

      {/* Header Section */}
      <div className="page-header">
        <h2>Video Gallery</h2>
        <p className="breadcrumb">
          <Link to="/">Home</Link> &nbsp;&gt;&nbsp; Video Gallery
        </p>
      </div>

      {/* Image Section */}
      <div className="gallery-container">
        <div className="image-card">
          <img src={videogalleryimg} alt="Video Gallery" />
          <h3>Education</h3>
        </div>
      </div>

    </section>
  );
};

export default VideoGallery;
