import React, { useState } from 'react';
import './Header.css';
import { menuData } from './menuData';
import logo from '../images/invozone-logo.png';

const PortfolioTag = ({ tag }) => {
  const tagClass = tag.toLowerCase().replace(/\s+/g, '-');
  return <span className={`portfolio-tag ${tagClass}`}>{tag}</span>;
};

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const currentMenuData = activeMenu ? menuData[activeMenu] : null;

  return (
    <header className="header-wrapper" onMouseLeave={handleMenuLeave}>
      <div className="header-main">
        <a href="/" className="logo-link">
          <img src={logo} alt="InvoZone Logo" className="logo" />
        </a>

        {/* Mobile Menu Button */}
        <button className="hamburger" onClick={toggleMobileMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Desktop Nav */}
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

        <a href="#" className="contact-button">Contact Us →</a>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {Object.entries(menuData).map(([key, data]) => (
            <div key={key} className="mobile-menu-item">
              <h4>{data.title || key}</h4>
              {data.layout === 'tabs' && (
                <ul>
                  {Object.entries(data.subMenus).map(([subKey, sub]) => (
                    <li key={subKey}>
                      <a href="#">{sub.title}</a>
                    </li>
                  ))}
                </ul>
              )}
              {data.layout === 'static-columns' && (
                <ul>
                  {data.columns.flatMap((col) => col.links.map((link) => (
                    <li key={link}><a href="#">{link}</a></li>
                  )))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* --- Desktop Mega Menu --- */}
      {activeMenu && currentMenuData && (
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
