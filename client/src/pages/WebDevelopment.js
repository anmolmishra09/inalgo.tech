import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

function WebDevelopment() {
  return (
    <div className="service-detail-page">
      <div className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>Web Development</span>
          </div>
          <h1 className="service-title">Web Development</h1>
          <p className="service-subtitle">
            Build powerful, scalable web applications that drive your business forward
          </p>
        </div>
      </div>

      <div className="container">
        <section className="service-overview">
          <div className="overview-content">
            <h2>Transform Your Ideas Into Reality</h2>
            <p>
              Our web development services combine cutting-edge technology with user-centric design 
              to create websites and web applications that not only look great but perform exceptionally. 
              From simple landing pages to complex enterprise solutions, we've got you covered.
            </p>
          </div>
          <div className="overview-image">
            <div className="image-placeholder">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
              </svg>
            </div>
          </div>
        </section>

        <section className="service-features">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Responsive Design</h3>
              <p>Websites that look perfect on all devices - desktop, tablet, and mobile.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Performance</h3>
              <p>Optimized code and infrastructure for lightning-fast load times.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>Built with security best practices and robust error handling.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>SEO Optimized</h3>
              <p>Structured for search engines to help your business get discovered.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">♿</div>
              <h3>Accessible</h3>
              <p>WCAG compliant designs that work for everyone.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics Ready</h3>
              <p>Integrated tracking and analytics to measure success.</p>
            </div>
          </div>
        </section>

        <section className="service-technologies">
          <h2>Technologies We Use</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <span className="tech-name">React</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Next.js</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Node.js</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Express</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">MongoDB</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">PostgreSQL</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">AWS</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Docker</span>
            </div>
          </div>
        </section>

        <section className="service-process">
          <h2>Our Development Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery & Planning</h3>
              <p>We understand your goals, target audience, and project requirements.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Design & Prototype</h3>
              <p>Creating wireframes and mockups to visualize the final product.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Development</h3>
              <p>Building your web application with clean, maintainable code.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Testing & Launch</h3>
              <p>Rigorous testing followed by smooth deployment to production.</p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="cta-content">
            <h2>Ready to Start Your Web Project?</h2>
            <p>Let's discuss how we can bring your vision to life</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Get Started</Link>
              <Link to="/services" className="btn-secondary">View All Services</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WebDevelopment;
