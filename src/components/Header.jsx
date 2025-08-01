// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import './Header.css';
import { menuData } from './menuData'; // Assuming menuData.js is in the same folder
import logo from '../images/invozone-logo.png'; // Using .png as per your file

// Helper component for the mobile menu's accordion functionality
const MobileAccordionItem = ({ title, subMenus, activeItem, setActiveItem }) => {
    const isOpen = activeItem === title;

    const handleClick = () => {
        setActiveItem(isOpen ? null : title); // Toggle: open if closed, close if open
    };

    return (
        <div className="mobile-accordion-item">
            <button className="mobile-accordion-title" onClick={handleClick}>
                <span>{title}</span>
                <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </button>
            {/* Conditional rendering with a smooth transition class */}
            <div className={`mobile-accordion-content ${isOpen ? 'open' : ''}`}>
                <ul>
                    {subMenus.map(subMenu => (
                        <li key={subMenu.title}>
                            <a href="#">{subMenu.title}</a>
                            {/* Render sub-links if they exist (for "What We Do") */}
                            {subMenu.links && (
                                <ul className="sub-links">
                                    {subMenu.links.map(link => <li key={link}><a href="#">{link}</a></li>)}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Helper component for portfolio tags in the desktop mega-menu
const PortfolioTag = ({ tag }) => {
    const tagClass = tag.toLowerCase().replace(/\s+/g, '-');
    return <span className={`portfolio-tag ${tagClass}`}>{tag}</span>;
};

const Header = () => {
    // --- STATE MANAGEMENT ---
    const [activeMenu, setActiveMenu] = useState(null); // For desktop mega-menu hover
    const [activeSubMenu, setActiveSubMenu] = useState(null); // For desktop mega-menu sidebar selection
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Toggles the entire mobile menu panel
    const [openMobileSubMenu, setOpenMobileSubMenu] = useState(null); // Tracks the active accordion item in mobile

    // Effect to close the mobile menu if the window is resized to desktop width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    // --- DESKTOP EVENT HANDLERS ---
    const handleMenuEnter = (menuKey) => {
        setActiveMenu(menuKey);
        const menu = menuData[menuKey];
        if (menu?.layout === 'tabs') {
            setActiveSubMenu(Object.keys(menu.subMenus)[0]);
        }
    };
    const handleMenuLeave = () => {
        setActiveMenu(null);
        setActiveSubMenu(null);
    };

    const currentMenuData = activeMenu ? menuData[activeMenu] : null;

    return (
        <header className={`header-wrapper ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`} onMouseLeave={handleMenuLeave}>
            <div className="header-main">
                <a href="/" className="logo-link">
                    <img src={logo} alt="InvoZone Logo" className="logo" />
                </a>

                {/* --- DESKTOP NAVIGATION --- */}
                <nav className="main-nav">
                    <ul className="nav-links">
                        <li onMouseEnter={() => handleMenuEnter('what-we-do')}><button>What We Do</button></li>
                        <li onMouseEnter={() => handleMenuEnter('who-we-serve')}><button>Who We Serve</button></li>
                        <li onMouseEnter={() => handleMenuEnter('how-we-engage')}><button>How We Engage</button></li>
                        <li onMouseEnter={() => handleMenuEnter('hire-dev')}><button>Hire Dev</button></li>
                        <li onMouseEnter={() => handleMenuEnter('company')}><button>Company</button></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </nav>
                <a href="#" className="contact-button desktop-only">Contact Us →</a>

                {/* --- MOBILE HAMBURGER BUTTON --- */}
                <button className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>
            </div>

            {/* --- MOBILE MENU PANEL --- */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <MobileAccordionItem
                        title="What We Do"
                        activeItem={openMobileSubMenu}
                        setActiveItem={setOpenMobileSubMenu}
                        subMenus={Object.values(menuData['what-we-do'].subMenus).map(sub => ({
                            title: sub.title,
                            links: sub.content.items.map(item => item.title)
                        }))}
                    />
                    <MobileAccordionItem
                        title="Who We Serve"
                        activeItem={openMobileSubMenu}
                        setActiveItem={setOpenMobileSubMenu}
                        subMenus={Object.values(menuData['who-we-serve'].subMenus).map(sub => ({ title: sub.title }))}
                    />
                     <MobileAccordionItem
                        title="How We Engage"
                        activeItem={openMobileSubMenu}
                        setActiveItem={setOpenMobileSubMenu}
                        subMenus={Object.values(menuData['how-we-engage'].subMenus).map(sub => ({ title: sub.title }))}
                    />
                     <MobileAccordionItem
                        title="Hire Dev"
                        activeItem={openMobileSubMenu}
                        setActiveItem={setOpenMobileSubMenu}
                        subMenus={Object.values(menuData['hire-dev'].subMenus).map(sub => ({ title: sub.title }))}
                    />
                    <MobileAccordionItem
                        title="Company"
                        activeItem={openMobileSubMenu}
                        setActiveItem={setOpenMobileSubMenu}
                        subMenus={menuData['company'].columns.map(col => ({ title: col.title }))}
                    />
                    <a href="#" className="mobile-menu-link">Careers</a>
                    <a href="#" className="mobile-contact-button">Contact Us</a>
                </div>
            )}

            {/* --- DESKTOP MEGA MENU PANEL --- */}
            {!isMobileMenuOpen && activeMenu && currentMenuData && (
                <div className="mega-menu-overlay">
                    {currentMenuData.layout === 'tabs' && (
                        <div className={`mega-menu-content-area ${!currentMenuData.sideCard && !currentMenuData.sidebarCta ? 'full-width' : ''}`}>
                            <div className="sidebar">
                                {Object.entries(currentMenuData.subMenus).map(([key, { title, icon }]) => (
                                    <button key={key} onMouseEnter={() => setActiveSubMenu(key)} className={`sidebar-item ${activeSubMenu === key ? 'active' : ''}`}>
                                        <span className="icon">{icon}</span><span>{title}</span><span className="arrow">→</span>
                                    </button>
                                ))}
                                {currentMenuData.sidebarCta && (
                                    <div className="sidebar-cta-card">
                                        <h4>{currentMenuData.sidebarCta.title}</h4>
                                        <a href={currentMenuData.sidebarCta.link}>{currentMenuData.sidebarCta.buttonText} →</a>
                                    </div>
                                )}
                            </div>
                            <div className="main-content">
                                {activeSubMenu && currentMenuData.subMenus[activeSubMenu]?.content.type === 'links' &&
                                    <div className="content-grid-links">{currentMenuData.subMenus[activeSubMenu].content.items.map(item => (<a href="#" key={item.title}><h4>{item.title}</h4><p>{item.text}</p></a>))}</div>}
                                {activeSubMenu && currentMenuData.subMenus[activeSubMenu]?.content.type === 'grid' &&
                                    <div className="content-grid-tags">{currentMenuData.subMenus[activeSubMenu].content.items.map(item => (<a href="#" key={item}>{item}</a>))}</div>}
                                {activeSubMenu && currentMenuData.subMenus[activeSubMenu]?.content.type === 'portfolio' &&
                                    <div className="content-grid-portfolio">{currentMenuData.subMenus[activeSubMenu].content.items.map(item => (<a href="#" key={item.title} className="portfolio-item"><div className="portfolio-item-header"><h4>{item.title}</h4><PortfolioTag tag={item.tag} /></div><p>{item.text}</p></a>))}</div>}
                            </div>
                            {currentMenuData.sideCard && (
                                <div className="side-card">
                                    <h4>{currentMenuData.sideCard.title}</h4>
                                    {currentMenuData.sideCard.text && <p>{currentMenuData.sideCard.text}</p>}
                                    <a href={currentMenuData.sideCard.link} className="side-card-cta">{currentMenuData.sideCard.buttonText} →</a>
                                </div>
                            )}
                        </div>
                    )}
                    {currentMenuData.layout === 'static-columns' && (
                        <div className="mega-menu-content-area">
                            <div className="static-columns-container">
                                {currentMenuData.columns.map(column => (
                                    <div key={column.title} className="static-column">
                                        <h4>{column.title}</h4>
                                        {column.links.map(link => (<a key={link} href="#">{link}</a>))}
                                    </div>
                                ))}
                            </div>
                            {currentMenuData.sideCard && (
                                <div className="side-card">
                                    <h4>{currentMenuData.sideCard.title}</h4>
                                    <a href={currentMenuData.sideCard.link} className="side-card-cta">{currentMenuData.sideCard.buttonText} →</a>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;