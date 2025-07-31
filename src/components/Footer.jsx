// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

// Import icons from the library we just installed
import { FiPhone, FiMail, FiStar } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

// Data for the link columns to keep JSX clean
const footerLinks = {
    Services: ["Web App Development", "Mobile App Development", "Enterprise App Development", "AI Development Services", "DevOps Services", "Software Quality Assurance", "UI UX Design Services", "Product Development Services"],
    "Hire Developers": ["Elixir Developer", "MERN Stack Developer", "Node Js Developer", "Python Developer", "ROR Developer", "Flutter Developer", "React Js Developer", "SaaS Developer"],
    Industry: ["Fintech", "Ecommerce", "On-Demand", "Real Estate", "Healthcare", "Food & Grocery", "Education"],
    Company: ["About Us", "Portfolio", "Blog", "Careers", "Pricing", "Contact Us", "Events"]
};

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            {/* Main Dark Blue Footer Section */}
            <div className="main-footer">
                <div className="container">
                    <div className="footer-grid">
                        {/* Column 1: Contact Info & Socials */}
                        <div className="footer-col-contact">
                            <div className="contact-item">
                                <div className="icon-circle"><FiPhone /></div>
                                <div>
                                    <span>Direct Call</span>
                                    <a href="tel:+17867537752">+1 786 753 7752</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-circle"><FiMail /></div>
                                <div>
                                    <span>Email Us</span>
                                    <a href="mailto:sales@invozone.com">sales@invozone.com</a>
                                </div>
                            </div>
                            <div className="rating-section">
                                <h5>5 Star Reviews</h5>
                                <div className="rating-icons">
                                    {/* These would ideally be specific logos */}
                                    <div className="icon-circle-sm">C</div>
                                    <div className="icon-circle-sm"><FiStar /></div>
                                    <div className="icon-circle-sm"><FiStar /></div>
                                    <div className="icon-circle-sm">G</div>
                                </div>
                            </div>
                            <div className="socials-section">
                                <h5>Our Socials</h5>
                                <div className="social-icons">
                                    <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                    <a href="#" aria-label="Twitter"><FaTwitter /></a>
                                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                                    <a href="#" aria-label="YouTube"><FaYoutube /></a>
                                </div>
                            </div>
                        </div>

                        {/* Columns 2-5: Mapped from our data */}
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title} className="footer-col-links">
                                <h4>{title}</h4>
                                <ul>
                                    {links.map(link => (
                                        <li key={link}><a href="#">{link}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Address Section at the bottom */}
                    <div className="footer-addresses">
                        <div className="address-item">
                            <img src="/images/flags/usa.png" alt="USA flag"/>
                            <p>130 NW 77th Ave Pembroke Pines, Florida 33024</p>
                        </div>
                        <div className="address-item">
                             <img src="/images/flags/canada.png" alt="Canada flag"/>
                            <p>220 Duncan Mill Road, Toronto, Ontario M3B 3J5</p>
                        </div>
                        <div className="address-item">
                            <img src="/images/flags/malaysia.png" alt="Malaysia flag"/>
                            <p>Unit 10, Jalan Kerinchi, Bangsar South, 59200 Kuala Lumpur</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sub-Footer (Bright Blue Section) */}
            <div className="sub-footer">
                <div className="container sub-footer-content">
                    <p>© {new Date().getFullYear()} All Rights Reserved by InvoZone</p>
                    <div className="sub-footer-links">
                        <a href="#">Sitemap</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">IMS Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>

             <a href="#" className="chat-bubble" aria-label="Chat with us">
                <img src="/images/chat-icon.svg" alt="Chat icon" />
            </a>
        </footer>
    );
};

export default Footer;