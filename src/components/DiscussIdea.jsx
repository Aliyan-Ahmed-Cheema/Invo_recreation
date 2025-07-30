// src/components/DiscussIdea.jsx
import React from 'react';
import './DiscussIdea.css';

const DiscussIdea = () => {
    return (
        <section className="discuss-idea-section">
            <div className="container discuss-idea-container">
                <div className="discuss-text-content">
                    <h3>Got An Idea Or Concerns?</h3>
                    <h2>Let's Discuss.</h2>
                </div>
                <a href="#" className="discuss-button">
                    Explore More
                    <span className="arrow-circle">→</span>
                </a>
            </div>
        </section>
    );
};

export default DiscussIdea;