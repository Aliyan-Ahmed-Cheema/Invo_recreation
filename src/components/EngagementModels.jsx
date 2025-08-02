
import React, { useState } from 'react';
import './EngagementModels.css';
import { engagementData } from './engagementData';

const EngagementModels = () => {
    const [activeTab, setActiveTab] = useState('product-development');
    const activeContent = engagementData[activeTab];

    return (
        <section className="engagement-section">
            <div className="container">
                <div className="engagement-header">
                    <h2>Engagement <span>Models</span></h2>
                    <p>Choose from flexible engagement models tailored to your needs, ensuring seamless collaboration with time & material or dedicated teams.</p>
                </div>

                <div className="engagement-card">
                    <div className="tabs-nav">
                        <button onClick={() => setActiveTab('product-development')} className={activeTab === 'product-development' ? 'active' : ''}>Product Development</button>
                        <button onClick={() => setActiveTab('managed-it')} className={activeTab === 'managed-it' ? 'active' : ''}>Managed IT Systems</button>
                        <button onClick={() => setActiveTab('team-augmentation')} className={activeTab === 'team-augmentation' ? 'active' : ''}>Team Augmentation</button>
                    </div>

                    <div className="tab-content">
                        <div className="content-text">
                            <h3>{activeContent.title}</h3>
                            <p>{activeContent.subtitle}</p>
                            <ul>
                                {activeContent.points.map(point => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                            <a href="#" className="details-button">
                                View Details <span className="arrow-circle">→</span>
                            </a>
                        </div>
                        
                        {/* --- THIS IS THE CORRECTED PART --- */}
                        <div className="content-video">
                            <video
                                key={activeContent.image} // Add a key to force re-render on change
                                width="100%"
                                height="auto"
                                autoPlay
                                loop
                                muted
                                playsInline // Important for iOS compatibility
                            >
                                <source src={activeContent.image} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngagementModels;