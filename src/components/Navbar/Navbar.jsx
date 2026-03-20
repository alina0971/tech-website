import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/tech-website/', label: '首页' },
    { path: '/tech-website/products', label: '产品' },
    { path: '/tech-website/contact', label: '联系我们' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/tech-website/" className="navbar-logo" onClick={closeMobileMenu}>
          <div className="logo-icon">⚡</div>
          <span>TechCorp</span>
        </Link>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/tech-website/contact" className="navbar-cta">
            免费咨询
          </Link>
        </div>

        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="切换菜单"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/tech-website/contact" className="navbar-cta" onClick={closeMobileMenu}>
          免费咨询
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
