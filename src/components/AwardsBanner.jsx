
import React from 'react';
import './AwardsBanner.css';

// Import the award logos
import clutchLogo from '../images/clutch.png';
import designrushLogo from '../images/designrush.png';
import trustpilotLogo from '../images/trustpilot.png';
import googleLogo from '../images/google.png';
import goodfirmsLogo from '../images/goodfirms.png';

const AwardsBanner = () => {
    const awards = [
        { name: 'Clutch', logo: clutchLogo },
        { name: 'DesignRush', logo: designrushLogo },
        { name: 'Trustpilot', logo: trustpilotLogo },
        { name: 'Google', logo: googleLogo },
        { name: 'GoodFirms', logo: goodfirmsLogo },
    ];

    return (
        <div className="awards-banner-section">
            <div className="container awards-container">
                {awards.map(award => (
                    <div key={award.name} className="award-logo-wrapper">
                        <img src={award.logo} alt={`${award.name} logo`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AwardsBanner;