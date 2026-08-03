import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const demoProjects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'Full-featured admin dashboard with real-time analytics, inventory management, and order tracking.',
      image: '🛍️',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      features: ['Real-time Analytics', 'Inventory Management', 'Order Processing', 'Payment Integration'],
      liveDemo: '#',
      github: '#',
      category: 'Web App'
    },
    {
      id: 2,
      title: 'AI Task Automation Platform',
      description: 'Intelligent automation tool that uses AI to streamline repetitive business tasks and workflows.',
      image: '🤖',
      tech: ['Python', 'OpenAI API', 'React', 'PostgreSQL'],
      features: ['AI-Powered Automation', 'Workflow Builder', 'Integration Hub', 'Analytics Dashboard'],
      liveDemo: '#',
      github: '#',
      category: 'AI Solution'
    },
    {
      id: 3,
      title: 'Local Business Website',
      description: 'Modern, responsive website for local restaurants with online ordering and reservation system.',
      image: '🍽️',
      tech: ['React', 'Stripe', 'Firebase', 'Google Maps API'],
      features: ['Online Ordering', 'Reservation System', 'Menu Management', 'Customer Reviews'],
      liveDemo: '#',
      github: '#',
      category: 'Business Site'
    }
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">Live Demo Products</h2>
          <p className="section-subtitle">
            Explore our production-ready solutions built with modern technologies
          </p>
        </div>

        <div className="portfolio-grid">
          {demoProjects.map(project => (
            <div key={project.id} className="portfolio-card card">
              <div className="portfolio-card-header">
                <div className="portfolio-icon">{project.image}</div>
                <span className="portfolio-category">{project.category}</span>
              </div>

              <div className="portfolio-content">
                <div>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                </div>

                <div className="portfolio-details">
                  <div className="portfolio-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="portfolio-tech">
                    <h4>Tech Stack:</h4>
                    <div className="tech-tags">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="portfolio-actions">
                  <a href={project.liveDemo} className="portfolio-btn primary" target="_blank" rel="noopener noreferrer">
                    <span>View Live Demo</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href={project.github} className="portfolio-btn secondary" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p>Need a custom solution for your business?</p>
          <a href="/contact" className="btn btn-primary">Let's Build Together</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
