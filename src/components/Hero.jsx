// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <video
        autoPlay
        loop
        muted
        className="hero-video"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>

      {/* This new wrapper will center the content block on the page */}
      <div className="hero-content-wrapper">
        {/* This block will align its own text to the left */}
        <div className="hero-content">
          <span className="consulting-badge">
            Software Development Consulting
          </span>

          <h1 className="hero-headline">
            Future-Driven Innovations.
          </h1>

          <p className="hero-subheadline">
            Fostering Growth For Startups, Enterprises, And Innovators.
          </p>

          {/* New structure for the CTA button */}
          <a href="#" className="hero-cta-link">
            <div className="cta-icon-wrapper">
              <div className="cta-icon-inner"></div>
            </div>
            <span>Book a 15 min Call</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;