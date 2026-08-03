import React from 'react';
import './TargetClients.css';

function TargetClients() {
  return (
    <section className="target-clients">
      <div className="container">
        <div className="target-header">
          <h2 className="section-title">Perfect For Startups & Local Businesses</h2>
          <p className="section-subtitle">
            Professional digital solutions at student-friendly prices. No agencies, no overhead—just quality work that fits your budget.
          </p>
        </div>

        <div className="target-grid">
          {/* For Startups */}
          <div className="target-card">
            <div className="target-header-section">
              <div className="target-icon">🚀</div>
              <h3>For Startups</h3>
            </div>
            
            <div className="target-content">
              <ul className="target-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>MVP Development (4-8 weeks)</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Scalable Architecture from Day 1</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10 C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Modern Tech Stack (React, Node.js, Cloud)</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Flexible payment plans available</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Post-launch support & iterations</span>
                </li>
              </ul>
            </div>
            
            <div className="target-pricing-section">
              <div className="target-pricing">
                <div className="pricing-label">Starting from</div>
                <div className="pricing-value">₹2,50,000</div>
                <div className="pricing-note">50% less than agencies</div>
              </div>
              <a href="/contact" className="target-cta btn btn-primary">Get Your MVP Quote</a>
            </div>
          </div>

          {/* For Local Businesses */}
          <div className="target-card featured">
            <div className="featured-badge">Most Popular</div>
            
            <div className="target-header-section">
              <div className="target-icon">🏪</div>
              <h3>For Local Businesses</h3>
            </div>
            
            <div className="target-content">
              <ul className="target-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Professional Website (Mobile-Friendly)</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Online Booking/Ordering System</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Google Maps & Contact Integration</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>SEO Optimized for Local Search</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Free training on managing your site</span>
                </li>
              </ul>
            </div>
            
            <div className="target-pricing-section">
              <div className="target-pricing">
                <div className="pricing-label">Starting from</div>
                <div className="pricing-value">₹1,25,000</div>
                <div className="pricing-note">Perfect for restaurants, salons, shops</div>
              </div>
              <a href="/contact" className="target-cta btn btn-primary">Book Free Consultation</a>
            </div>
          </div>

          {/* For Agencies/Consultants */}
          <div className="target-card">
            <div className="target-header-section">
              <div className="target-icon">💼</div>
              <h3>For Agencies/Consultants</h3>
            </div>
            
            <div className="target-content">
              <ul className="target-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>White-Label Development Partner</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Overflow Work & Tight Deadlines</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>High-Quality, Production-Ready Code</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Clear documentation & handoff</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Competitive developer rates</span>
                </li>
              </ul>
            </div>
            
            <div className="target-pricing-section">
              <div className="target-pricing">
                <div className="pricing-label">Hourly rate</div>
                <div className="pricing-value">₹3,500/hr</div>
                <div className="pricing-note">Volume discounts available</div>
              </div>
              <a href="/contact" className="target-cta btn btn-primary">Partner With Us</a>
            </div>
          </div>
        </div>

        {/* Student Founder Value Prop */}
        <div className="student-founder-section">
          <div className="student-founder-content">
            <div className="student-founder-badge">
              <span className="badge-icon">🎓</span>
              <span>Built by a Student Founder</span>
            </div>
            <h3>Why Work With Inalgo?</h3>
            <div className="student-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <div className="benefit-text">
                  <strong>50-70% Lower Costs</strong>
                  <p>No agency overhead. You get professional quality at student-friendly prices.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div className="benefit-text">
                  <strong>Dedicated &lt; 4 Hours Daily</strong>
                  <p>Focused work sessions mean quality output. Projects delivered on time, every time.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <div className="benefit-text">
                  <strong>Modern Tech Stack</strong>
                  <p>Using latest technologies (React, AI, Cloud) - not outdated agency templates.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🤝</div>
                <div className="benefit-text">
                  <strong>Direct Communication</strong>
                  <p>Work directly with the developer. No account managers, no middlemen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TargetClients;

