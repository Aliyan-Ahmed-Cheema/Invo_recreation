
import React, { useState } from 'react';
import './Services.css';
import { servicesData } from './servicesData'; // Import the data file

const Services = () => {
    // Set the first service as the default active tab
    const [activeTab, setActiveTab] = useState('product-engineering');
    const activeService = servicesData[activeTab];

    return (
        <section className="services-section">
            <div className="container">
                {/* Section Header */}
                <div className="services-header">
                    <div className="title-block">
                        <h2 className="section-title">Software Development Services</h2>
                        <p className="section-subtitle">Forward Planners</p>
                    </div>
                    <a href="#" className="view-all-button">
                        View All <span className="arrow-circle">→</span>
                    </a>
                </div>

                {/* Main Layout Grid */}
                <div className="services-layout">
                    {/* Left side: The 3x2 grid of service tabs */}
                    <div className="service-tabs-grid">
                        {Object.entries(servicesData).map(([key, { icon, title }]) => (
                            <button
                                key={key}
                                className={`service-tab ${activeTab === key ? 'active' : ''}`}
                                onClick={() => setActiveTab(key)}
                            >
                                <img src={icon} alt={`${title} icon`} className="tab-icon" />
                                <span className="tab-title">{title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Right side: The content panel */}
                    <div className="service-content-panel">
                        {activeService && (
                            <>
                                <h3>{activeService.title}</h3>
                                <p className="service-description">{activeService.description}</p>
                                <ul className="service-links">
                                    {activeService.links.map(link => (
                                        <li key={link}><a href="#">{link}</a></li>
                                    ))}
                                </ul>
                                <div className="tech-stack-icons">
                                    {activeService.techIcons.map((icon, index) => (
                                        <img key={index} src={icon} alt="Tech stack icon" className="tech-icon" />
                                    ))}
                                </div>
                                <a href="#" className="view-more-button">
                                    View More <span className="arrow-circle">→</span>
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;