import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted className="hero-video">
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="mb-4">
          <span className="consulting-badge">
            Software Development Consulting
          </span>
        </div>
        <h1 className="text-6xl font-bold leading-tight">
          Future-Driven Innovations.
        </h1>
        <p className="mt-4 text-xl">
          Fostering Growth For Startups, Enterprises, And Innovators.
        </p>
        <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors text-lg">
          Book a 15 min Call
        </button>
      </div>
    </div>
  );
};

export default Hero;
