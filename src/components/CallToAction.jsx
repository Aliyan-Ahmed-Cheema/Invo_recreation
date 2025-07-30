
import React from 'react';
import './CallToAction.css';

// This is our reusable card component.
// It takes props to change its content and appearance ('variant').
const ActionCard = ({ titleLine1, titleLine2, description, buttonText, variant = 'default' }) => {
    // We dynamically create class names based on the variant prop
    const cardClassName = `action-card ${variant}`;

    return (
        <div className={cardClassName}>
            <h3 className="card-title">
                {titleLine1}
                <br />
                <span>{titleLine2}</span>
            </h3>
            <p className="card-description">{description}</p>
            <a href="#" className="card-button">
                {buttonText}
                <span className="card-arrow">→</span>
            </a>
        </div>
    );
};


const CallToAction = () => {
    return (
        <section className="cta-section">
            <div className="container">
                {/* Section Header */}
                <div className="cta-header">
                    <h2>Backing Your Up At <span>Every Stage</span> Of Your Progress</h2>
                    <p>
                        From launching startups to expanding enterprises, or recovering from setbacks, we help businesses
                        overcome every challenge on their journey.
                    </p>
                </div>

                {/* Grid Container for the cards */}
                <div className="cta-grid">
                    <ActionCard
                        titleLine1="I'm A"
                        titleLine2="Startup."
                        description="Remarkable ideas often stall without the right team to bring them to life."
                        buttonText="Get Started"
                        variant="default" // This uses the light blue style
                    />
                    <ActionCard
                        titleLine1="I'm An"
                        titleLine2="Enterprise."
                        description="Scaling without the right infrastructure and expertise can lead to costly bottlenecks."
                        buttonText="Explore More"
                        variant="primary" // This uses the solid blue style
                    />
                    <ActionCard
                        titleLine1="I Need A"
                        titleLine2="Rescue."
                        description="A messy codebase and tech debt are suffocating your progress."
                        buttonText="Need a Fix"
                        variant="default" // This also uses the light blue style
                    />
                </div>
            </div>
        </section>
    );
};

export default CallToAction;