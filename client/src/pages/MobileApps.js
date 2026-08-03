import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

function MobileApps() {
  return (
    <div className="service-detail-page">
      <div className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>Mobile Apps</span>
          </div>
          <h1 className="service-title">Mobile App Development</h1>
          <p className="service-subtitle">
            Native and cross-platform mobile applications for iOS and Android
          </p>
        </div>
      </div>

      <div className="container">
        <section className="service-overview">
          <div className="overview-content">
            <h2>Reach Your Users Anywhere</h2>
            <p>
              Create engaging mobile experiences that users love. Our mobile app development services 
              deliver high-performance applications for iOS and Android platforms. Whether you need a 
              native app or a cross-platform solution, we build apps that are intuitive, fast, and reliable.
            </p>
          </div>
          <div className="overview-image">
            <div className="image-placeholder">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M12 18h.01" />
              </svg>
            </div>
          </div>
        </section>

        <section className="service-features">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Native Development</h3>
              <p>Platform-specific apps for optimal performance on iOS and Android.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Cross-Platform</h3>
              <p>Build once, deploy everywhere with React Native or Flutter.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>User-Centric Design</h3>
              <p>Intuitive interfaces that users love and understand instantly.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Push Notifications</h3>
              <p>Keep users engaged with timely, relevant notifications.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3>Cloud Integration</h3>
              <p>Seamless sync across devices with cloud backend services.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>App Analytics</h3>
              <p>Track user behavior and app performance with detailed analytics.</p>
            </div>
          </div>
        </section>

        <section className="service-technologies">
          <h2>Technologies We Use</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <span className="tech-name">React Native</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Flutter</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Swift</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Kotlin</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Firebase</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">GraphQL</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Redux</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Jest</span>
            </div>
          </div>
        </section>

        <section className="service-process">
          <h2>Our Development Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Strategy & Research</h3>
              <p>Understanding your users, market, and app objectives.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>UX/UI Design</h3>
              <p>Creating beautiful, intuitive interfaces for mobile users.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Development & Testing</h3>
              <p>Building and testing your app with continuous integration.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Launch & Support</h3>
              <p>App store submission and ongoing maintenance support.</p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="cta-content">
            <h2>Ready to Build Your Mobile App?</h2>
            <p>Let's create an app that users will love</p>
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

export default MobileApps;
