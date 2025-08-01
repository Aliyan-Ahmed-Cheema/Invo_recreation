// src/components/Testimonials.jsx
import React, { useState } from 'react';
import './Testimonials.css';

// Import all the images for the testimonials
import oliverWolffImg from '../images/Oliver-Wolff.png';
import davidSmithImg from '../images/david-smith.webp';
import ronZabelImg from '../images/ron-zabel.png';
import ryanCarterImg from '../images/ryan-carter.webp';
import chrisDominguezImg from '../images/chris-dominguez.webp';

// Import company logos if you have them as SVG/PNG
// For this example, we'll use text, but importing an image is better.
// import kindeLogo from '../images/logos/kinde.svg';

const testimonialsData = [
    {
        id: 1,
        companyName: 'easyfill.ai',
        personName: 'David Smith',
        personTitle: 'CEO & Co-Founder - Easyfill',
        quote: "InvoZone has been a game-changer for us, offering fresh ideas and genuine support. This wasn't our first outsourcing experience, but it has definitely been the smoothest.",
        image: davidSmithImg,
    },
    {
        id: 2,
        companyName: 'Kinde',
        personName: 'Oliver Wolff',
        personTitle: 'Kindle Product Manager',
        quote: "We partnered with InvoZone to enhance our Elixir SDK, and the process was seamless. Consistent communication and timely status updates... allowed us to adapt efficiently. Their proactive approach kept us informed, and the code quality exceeded our expectations...",
        image: oliverWolffImg,
    },
    {
        id: 3,
        companyName: 'cryptool',
        personName: 'Ron Zabel',
        personTitle: 'CEO - Crytool.io',
        quote: "InvoZone has been a game-changer for us, bringing fresh ideas and genuine support to our projects. This was not the first time we outsourced, but for sure the smoothest experience we had.",
        image: ronZabelImg,
    },
    {
        id: 4,
        companyName: 'Shield Republic',
        personName: 'Ryan Carter',
        personTitle: 'Co Founder - Shield Republic',
        quote: "We were initially hesitant to outsource overseas, especially after our previous experience... Since partnering with InvoZone, we've seen no decline in quality. The team is responsive, easy to work with, and possesses comprehensive knowledge...",
        image: ryanCarterImg,
    },
    {
        id: 5,
        companyName: 'StorageChain',
        personName: 'Chris Dominguez',
        personTitle: 'CEO - StorageChain',
        quote: "Every member of the InvoZone team has been diligent and focused, fostering a genuine partnership on the technology front.",
        image: chrisDominguezImg,
    },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const activeTestimonial = testimonialsData[currentSlide];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>Partner's <span>Success</span> Stories</h2>
          <div className="slider-nav">
            <button onClick={prevSlide} className="nav-button" aria-label="Previous testimonial">←</button>
            <button onClick={nextSlide} className="nav-button" aria-label="Next testimonial">→</button>
          </div>
        </div>

        <div key={activeTestimonial.id} className="testimonial-content-area">
          <div className="testimonial-image-wrapper">
            <img src={activeTestimonial.image} alt={activeTestimonial.personName} className="testimonial-photo" />
            <button className="play-button">
              <span className="play-icon">►</span> Play Video
            </button>
          </div>
          <div className="testimonial-text-wrapper">
            <h3 className="company-name">{activeTestimonial.companyName}</h3>
            <h4 className="person-name">{activeTestimonial.personName}</h4>
            <p className="person-title">{activeTestimonial.personTitle}</p>
            <blockquote className="testimonial-quote">
              “{activeTestimonial.quote}”
            </blockquote>
            <a href="#" className="case-study-link">View Case Study</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;