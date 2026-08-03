import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

function SaaSSolutions() {
  return (
    <div className="service-detail-page">
      <div className="service-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>SaaS Solutions</span>
          </div>
          <h1 className="service-title">SaaS Solutions</h1>
          <p className="service-subtitle">
            Scalable software-as-a-service platforms that grow with your business
          </p>
        </div>
      </div>

      <div className="container">
        <section className="service-overview">
          <div className="overview-content">
            <h2>Build Your SaaS Platform</h2>
            <p>
              Transform your innovative idea into a successful SaaS business. We develop robust, 
              scalable cloud-based platforms with subscription management, multi-tenancy architecture, 
              and seamless integrations. From MVP to enterprise-scale solutions, we handle the 
              technical complexity so you can focus on growing your business.
            </p>
          </div>
          <div className="overview-image">
            <div className="image-placeholder">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="M7 16l4-4 4 4 6-6" />
              </svg>
            </div>
          </div>
        </section>

        <section className="service-features">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3>Multi-Tenant Architecture</h3>
              <p>Secure, isolated environments for each customer with shared infrastructure.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Subscription Management</h3>
              <p>Integrated billing, payment processing, and subscription lifecycle management.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Admin Dashboard</h3>
              <p>Powerful admin tools for managing users, analytics, and configurations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔌</div>
              <h3>API Integration</h3>
              <p>RESTful and GraphQL APIs for seamless third-party integrations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Scalable Infrastructure</h3>
              <p>Auto-scaling cloud architecture that grows with your user base.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Enterprise Security</h3>
              <p>SOC 2 compliance, data encryption, and advanced security measures.</p>
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
              <span className="tech-name">Node.js</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">AWS/Azure</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Kubernetes</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">PostgreSQL</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Redis</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Stripe</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Terraform</span>
            </div>
          </div>
        </section>

        <section className="service-process">
          <h2>Our Development Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>MVP Planning</h3>
              <p>Define core features and build a minimum viable product strategy.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Architecture Design</h3>
              <p>Design scalable, multi-tenant architecture and database schema.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Development & Integration</h3>
              <p>Build features iteratively with continuous testing and deployment.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Launch & Scale</h3>
              <p>Deploy to production and optimize for growth and performance.</p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="cta-content">
            <h2>Ready to Launch Your SaaS?</h2>
            <p>Let's build a platform that scales with your vision</p>
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

export default SaaSSolutions;
