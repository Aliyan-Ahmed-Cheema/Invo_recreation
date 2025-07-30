// src/components/CaseStudies.jsx
import React from 'react';
import './CaseStudies.css';

// Import your case study images
import caseStudy1 from '../images/case-study-1.jpg';
import caseStudy2 from '../images/case-study-2.jpg';
import caseStudy3 from '../images/case-study-3.jpg';

const CaseStudyCard = ({ image, tag, title, description, logo }) => (
    <a href="#" className="case-study-card">
        <div className="card-image-wrapper">
            <img src={image} alt={title} />
            <span className="card-tag">{tag}</span>
        </div>
        <div className="card-content-wrapper">
            <p>{description}</p>
            <h3>{title}</h3>
            <div className="card-footer">
                <img src={logo} alt="Client logo" className="client-logo" />
                <span className="arrow-circle-cs">→</span>
            </div>
        </div>
    </a>
);

const CaseStudies = () => {
    const studies = [
        {
            image: caseStudy1,
            tag: 'AI-Powered Precision',
            description: 'Real Time Factory Tracker',
            title: 'Where Data Drives: Decisions, Efficiency, Downtime, Quality, Visibility, Competitiveness.',
            logo: '../images/global_reader.png',
        },
        {
            image: caseStudy2,
            tag: 'Resource Augmentation',
            description: 'Food Delivery & Retail',
            title: 'Quick & effective resource augmentation for agile development',
            logo: '../images/global_reader.png',
        },
        {
            image: caseStudy3,
            tag: 'Application Modernization',
            description: 'A Fintech Card Issuer & Service Provider',
            title: 'Managed IT Teams For Modernizing Global Payment Platform',
            logo: '../images/global_reader.png',
        },
    ];

    return (
        <section className="case-studies-section">
            <div className="container">
                <div className="section-header">
                    <h2>Case Study: <span>We Don't Just Talk, We Deliver Results</span></h2>
                    <a href="#" className="view-all-button">
                        View All <span className="arrow-circle">→</span>
                    </a>
                </div>
                <div className="case-studies-grid">
                    {studies.map((study, index) => (
                        <CaseStudyCard key={index} {...study} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;