import React from 'react';
import Logo from './Logo';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <Logo variant="light" className="footer-logo-component" />
            <p className="footer-description">Inalgo helps you build faster by transforming your design vision into fully functional, production-ready digital solutions.</p>
            <div className="footer-social">
              <a href="https://t.me/inaialgo" aria-label="Telegram" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
              <a href="https://github.com/inalgo" aria-label="GitHub" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/in-algo09/" aria-label="LinkedIn" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@inaialgo" aria-label="YouTube" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/inaialgo" aria-label="Instagram" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-list">
                <li><a href="/services/web-development">Web Development</a></li>
                <li><a href="/services/mobile-apps">Mobile Apps</a></li>
                <li><a href="/services/saas-solutions">SaaS Solutions</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Resources</h3>
              <ul className="footer-list">
                <li><a href="/about">About Inalgo</a></li>
                <li><a href="/services">Our Services</a></li>
                <li><a href="/case-studies" target="_blank" rel="noopener noreferrer">Case Studies</a></li>
                <li><a href="/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
                <li><a href="/partners" target="_blank" rel="noopener noreferrer">Partners</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-list">
                <li><a href="/about">About Us</a></li>
                <li><a href="/about">Our Vision</a></li>
                <li>
                  <a href="/careers">Careers</a>
                  <span className="hiring-badge">HIRING</span>
                </li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Brand Section */}
            <div className="footer-column footer-brand-column">
              <div className="footer-bottom">
                <div className="footer-glow"></div>
                <h3 className="footer-brand-large">Inalgo</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; {currentYear} Inalgo Design</p>
          <p>All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
