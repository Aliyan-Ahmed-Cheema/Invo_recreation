// src/components/TechStack.jsx
import React, { useState } from 'react';
import './TechStack.css';
import { techStackData } from './techStackData'; // Import the simple data file

const TechStack = () => {
    const [activeTab, setActiveTab] = useState('all');
    const tabs = ['All', 'Front-End', 'Back-End', 'Low/No Code', 'Database', 'DevOps', 'Mobile', 'AI & ML'];

    return (
        <section className="tech-stack-section">
            <div className="container">
                <div className="tech-header">
                    <h2>Build Your Own Team - <span>Hire Developer</span></h2>
                    <p>We've built our business by assembling a team of skilled developers, experts in the frameworks and technologies driving modern solutions.</p>
                    <div className="search-bar">
                        <input type="text" placeholder="What are you looking for?" />
                    </div>
                </div>

                <div className="tech-tabs-nav-wrapper">
                    <div className="tech-tabs-nav">
                        {tabs.map(tab => {
                            const tabKey = tab.toLowerCase().replace(/[\s/&]/g, '-');
                            return (
                                <button
                                    key={tabKey}
                                    onClick={() => setActiveTab(tabKey)}
                                    className={activeTab === tabKey ? 'active' : ''}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="tech-icons-scroll-container">
                    <div className="tech-icons-grid">
                        {techStackData[activeTab]?.map(tech => (
                            <div key={tech.name} className="tech-item">
                                 <img src={tech.icon} alt={`${tech.name} logo`} />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;