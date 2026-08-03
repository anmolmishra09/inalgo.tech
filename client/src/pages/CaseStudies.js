import React from 'react';
import './CaseStudies.css';

function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      client: 'RetailTech Inc.',
      category: 'Web Development',
      description: 'Built a scalable e-commerce platform handling 10,000+ daily transactions',
      image: '🛍️',
      results: ['300% increase in sales', '50% faster checkout', '99.9% uptime'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis']
    },
    {
      id: 2,
      title: 'Healthcare SaaS',
      client: 'MediCare Solutions',
      category: 'SaaS Development',
      description: 'Developed a HIPAA-compliant patient management system',
      image: '🏥',
      results: ['5000+ active users', '40% cost reduction', 'HIPAA certified'],
      technologies: ['React', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      id: 3,
      title: 'Food Delivery App',
      client: 'QuickBite',
      category: 'Mobile App',
      description: 'Created a cross-platform mobile app for food delivery',
      image: '🍔',
      results: ['100K+ downloads', '4.8★ rating', '30min avg delivery'],
      technologies: ['React Native', 'Firebase', 'Google Maps API']
    }
  ];

  return (
    <div className="case-studies-page">
      <section className="hero">
        <div className="container">
          <h1>Case Studies</h1>
          <p className="lead">Real results from real clients</p>
        </div>
      </section>

      <section className="case-studies-content">
        <div className="container">
          <div className="case-studies-grid">
            {caseStudies.map(study => (
              <div key={study.id} className="case-study-card">
                <div className="case-icon">{study.image}</div>
                <span className="case-category">{study.category}</span>
                <h3>{study.title}</h3>
                <p className="client">Client: {study.client}</p>
                <p className="description">{study.description}</p>
                
                <div className="results">
                  <h4>Results</h4>
                  <ul>
                    {study.results.map((result, idx) => (
                      <li key={idx}>✓ {result}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack">
                  <h4>Tech Stack</h4>
                  <div className="tech-tags">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
