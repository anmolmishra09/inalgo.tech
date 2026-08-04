import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [expandedCard, setExpandedCard] = useState(null);

  const categories = ['All', 'SaaS Platform', 'AI Tools', 'E-Commerce'];

  const demoProjects = [
    {
      id: 1,
      title: 'Enterprise Analytics Suite',
      subtitle: 'Real-time observability & data intelligence',
      description: 'Unified administrative dashboard offering real-time stream processing, customizable telemetry widgets, and instant alert workflows.',
      image: '⚡',
      category: 'SaaS Platform',
      statusBadge: 'Production Ready',
      metric: '99.99% Uptime',
      tech: ['React 18', 'TypeScript', 'Node.js', 'ClickHouse', 'TailwindCSS'],
      features: [
        'Real-time WebSocket Data Ingestion',
        'Customizable Drag-and-Drop Widgets',
        'Role-Based Access Control (RBAC)',
        'Stripe Billing & Tier Metering'
      ],
      liveDemo: 'https://demo.example.com/analytics',
      github: 'https://github.com/example/analytics-suite'
    },
    {
      id: 2,
      title: 'Neural Workflow Automation',
      subtitle: 'AI-driven business process copilot',
      description: 'Intelligent automation engine leveraging LLMs to parse documents, orchestrate multi-app workflows, and reduce manual operations.',
      image: '🤖',
      category: 'AI Tools',
      statusBadge: 'Trending',
      metric: '10x Speedup',
      tech: ['Python', 'OpenAI API', 'React', 'FastAPI', 'PostgreSQL'],
      features: [
        'Autonomous Multi-Step AI Agents',
        'Visual No-Code Pipeline Builder',
        '50+ Native SaaS Integrations',
        'Enterprise Security & Audit Logs'
      ],
      liveDemo: 'https://demo.example.com/ai-copilot',
      github: 'https://github.com/example/neural-workflow'
    },
    {
      id: 3,
      title: 'Global Storefront & Checkout',
      subtitle: 'High-conversion headless commerce engine',
      description: 'Ultra-fast headless checkout architecture with localized multi-currency support, real-time inventory management, and zero latency.',
      image: '🛍️',
      category: 'E-Commerce',
      statusBadge: 'Popular',
      metric: '< 200ms Latency',
      tech: ['Next.js', 'GraphQL', 'Stripe API', 'Redis', 'TailwindCSS'],
      features: [
        'Sub-second Serverless Page Loads',
        'Multi-Currency & Instant Tax Calculation',
        'Dynamic Inventory Tracking Engine',
        'Custom Webhook & Event Dispatcher'
      ],
      liveDemo: 'https://demo.example.com/commerce',
      github: 'https://github.com/example/global-storefront'
    }
  ];

  // Filter projects based on selected SaaS category tab
  const filteredProjects = activeTab === 'All' 
    ? demoProjects 
    : demoProjects.filter(p => p.category === activeTab);

  const toggleDetails = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="portfolio-section">
      <div className="container">
        
        {/* Header Section */}
        <div className="portfolio-header">
          <span className="portfolio-pill">Production Ready Architecture</span>
          <h2 className="section-title">Live SaaS Product Demos</h2>
          <p className="section-subtitle">
            Explore scalable, production-tested SaaS solutions built with cutting-edge cloud tech stacks.
          </p>
          
          {/* Interactive Category Tabs */}
          <div className="portfolio-tabs">
            {categories.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => {
            const isExpanded = expandedCard === project.id;

            return (
              <div key={project.id} className={`portfolio-card ${isExpanded ? 'expanded' : ''}`}>
                
                {/* Card Top / Badges */}
                <div className="portfolio-card-header">
                  <div className="portfolio-icon-wrapper">
                    <span className="portfolio-icon">{project.image}</span>
                  </div>
                  <div className="badge-group">
                    <span className="portfolio-metric">{project.metric}</span>
                    <span className="portfolio-status">{project.statusBadge}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="portfolio-content">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-subtitle-text">{project.subtitle}</p>
                  <p className="portfolio-description">{project.description}</p>

                  {/* Tech Stack Pills */}
                  <div className="portfolio-tech">
                    <div className="tech-tags">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Collapsible Interactive Details */}
                  <div className="interactive-details-container">
                    <button 
                      className="details-toggle-btn"
                      onClick={() => toggleDetails(project.id)}
                    >
                      <span>{isExpanded ? 'Hide Architecture Details' : 'View Key Capabilities'}</span>
                      <svg 
                        className={`chevron ${isExpanded ? 'open' : ''}`} 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div className="portfolio-features">
                        <h4>Core System Capabilities:</h4>
                        <ul>
                          {project.features.map((feature, idx) => (
                            <li key={idx}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="portfolio-actions">
                    <a 
                      href={project.liveDemo} 
                      className="portfolio-btn primary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span>Launch Interactive Demo</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                    
                    <a 
                      href={project.github} 
                      className="portfolio-btn secondary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>Repository</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call To Action Banner */}
        <div className="portfolio-cta">
          <div className="cta-content">
            <h3>Need a Custom Enterprise Solution?</h3>
            <p>We build production-ready microservices, AI pipelines, and SaaS platforms tailored to your scale.</p>
          </div>
          <a href="/contact" className="cta-btn">
            <span>Schedule Architecture Call</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;