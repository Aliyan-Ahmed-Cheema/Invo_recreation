
import React from 'react';
import './Industries.css';

// Import your industry images here
import healthcareImg from '../images/healthcare.webp';
import fintechImg from '../images/fintech.webp';
import foodImg from '../images/food.webp';
import ecommerceImg from '../images/ecommerce.webp';

// Reusable card component
const IndustryCard = ({ title, services, image }) => (
    <div className="industry-card">
        <div className="card-image-container">
            <img src={image} alt={title} />
        </div>
        <div className="card-text-content">
            <h4>{title}</h4>
            <ul>
                {services.map(service => <li key={service}>{service}</li>)}
            </ul>
            <a href="#">Explore More →</a>
        </div>
    </div>
);

const Industries = () => {
    const industriesData = [
        { title: 'Healthcare', services: ['Telemedicine Platforms', 'Healthcare CRM', 'Medical Billing Applications', 'Patient Portals'], image: healthcareImg },
        { title: 'Fintech', services: ['Payment Gateways', 'Digital Banking', 'Lending Platforms', 'Personal Finance Management'], image: fintechImg },
        { title: 'Food & Grocery', services: ['Grocery Delivery Apps', 'Meal Kit Delivery Services', 'Recipe And Cooking Apps', 'Food Waste Management Apps'], image: foodImg },
        { title: 'E-commerce', services: ['Social Commerce', 'Subscription-Based E-commerce', 'Marketplace Platforms', 'Digital Goods E-commerce'], image: ecommerceImg },
    ];

    return (
        <section className="industries-section">
            <div className="container">
                <div className="industries-header">
                    <h2>Expertise in Software Development Across Multiple <span>Industries</span></h2>
                    <div className="slider-nav">
                        <button className="nav-button">←</button>
                        <button className="nav-button">→</button>
                    </div>
                </div>
                <div className="industries-grid">
                    {industriesData.map(industry => (
                        <IndustryCard key={industry.title} {...industry} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;