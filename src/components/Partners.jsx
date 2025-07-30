// src/components/Partners.jsx
import React from 'react';
import './Partners.css';

// YOUR IMPORTS - This is the correct way, using your file names and paths.
import meridio from '../images/Meridio.png';
import column from '../images/column.png';
import globalreader from '../images/globalreader.png';
import shield from '../images/shield.png';
import stakestar from '../images/stakester.png';
import analog from '../images/analog.png';
import freshprep from '../images/freshprep.png';
import nymcard from '../images/nymcard.png';
import artefy from '../images/artefy.png';
import stitch from '../images/stitch.png';


const Partners = () => {
    // This array now uses YOUR variable names (e.g., `meridio`, not `meridioLogo`)
    const partnerLogos = [
        { src: meridio, alt: 'Meridio' },
        { src: column, alt: 'Column' },
        { src: globalreader, alt: 'GlobalReader' },
        { src: shield, alt: 'Shield Republic' },
        { src: stakestar, alt: 'Stakestar' },
        { src: analog, alt: 'Analog' },
        { src: freshprep, alt: 'Freshprep' },
        { src: nymcard, alt: 'Nymcard' },
        { src: artefy, alt: 'Artefy' },
        { src: stitch, alt: 'Stitch' },
    ];

    return (
        <div className="partners-section">
            <div className="container">
                <h2 className="partners-heading">
                    <strong>400+</strong> Products Developed For <strong>300+</strong> Customers Across <strong>120+</strong> Countries.
                </h2>

                <div className="partners-grid">
                    {/* The rest of this code was correct and maps over the data */}
                    {partnerLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="partner-logo"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;