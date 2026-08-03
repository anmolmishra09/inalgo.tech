import React from 'react';
import './Partners.css';

function Partners() {
  const partners = [
    {
      id: 1,
      name: 'TechCorp Global',
      category: 'Technology Partner',
      description: 'Leading cloud infrastructure and enterprise solutions provider',
      logo: '🌐',
      partnership: 'Strategic Partner',
      services: ['Cloud Services', 'Enterprise Software', 'AI Solutions']
    },
    {
      id: 2,
      name: 'DesignHub Studio',
      category: 'Design Partner',
      description: 'Award-winning design agency specializing in UX/UI',
      logo: '🎨',
      partnership: 'Creative Partner',
      services: ['UI/UX Design', 'Branding', 'Prototyping']
    },
    {
      id: 3,
      name: 'DataFlow Analytics',
      category: 'Analytics Partner',
      description: 'Data science and business intelligence experts',
      logo: '📊',
      partnership: 'Data Partner',
      services: ['Data Analytics', 'Business Intelligence', 'Machine Learning']
    },
    {
      id: 4,
      name: 'SecureNet Systems',
      category: 'Security Partner',
      description: 'Comprehensive cybersecurity and compliance solutions',
      logo: '🔒',
      partnership: 'Security Partner',
      services: ['Cybersecurity', 'Compliance', 'Security Audits']
    },
    {
      id: 5,
      name: 'CloudScale Infrastructure',
      category: 'Infrastructure Partner',
      description: 'Scalable cloud infrastructure and DevOps services',
      logo: '☁️',
      partnership: 'Infrastructure Partner',
      services: ['Cloud Migration', 'DevOps', 'Infrastructure Management']
    },
    {
      id: 6,
      name: 'MobileFirst Labs',
      category: 'Mobile Partner',
      description: 'Cross-platform mobile application development specialists',
      logo: '📱',
      partnership: 'Mobile Partner',
      services: ['iOS Development', 'Android Development', 'React Native']
    }
  ];

  return (
    <div className="partners-page">
      <section className="hero">
        <div className="container">
          <h1>Our Partners</h1>
          <p className="lead">Working together to deliver excellence</p>
        </div>
      </section>

      <section className="partners-content">
        <div className="container">
          <div className="partners-intro">
            <h2>Strategic Partnerships</h2>
            <p>We collaborate with industry-leading companies to provide comprehensive solutions for our clients.</p>
          </div>

          <div className="partners-grid">
            {partners.map(partner => (
              <div key={partner.id} className="partner-card">
                <div className="partner-logo">{partner.logo}</div>
                <span className="partner-badge">{partner.partnership}</span>
                <h3>{partner.name}</h3>
                <p className="partner-category">{partner.category}</p>
                <p className="partner-description">{partner.description}</p>
                
                <div className="partner-services">
                  <h4>Services</h4>
                  <div className="service-tags">
                    {partner.services.map((service, idx) => (
                      <span key={idx} className="service-tag">{service}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="partner-cta">
            <h2>Become a Partner</h2>
            <p>Interested in partnering with Inalgo? Let's discuss collaboration opportunities.</p>
            <a href="/contact" className="cta-button">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;
