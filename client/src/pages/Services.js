import React from 'react';
import './Services.css';
import GlassButton from '../components/GlassButton';
import FAQ from '../components/FAQ';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      icon: '💻',
      features: ['Custom Web Applications', 'Full-Stack Solutions', 'Progressive Web Apps', 'Responsive Design', 'SEO Optimization', 'Performance Tuning'],
      technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Express', 'Next.js'],
      timeline: '4-12 weeks',
      pricing: '₹2,00,000 - ₹10,00,000',
      cta: 'Start Your Project'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      features: ['iOS & Android Apps', 'Cross-Platform Development', 'App Store Deployment', 'Push Notifications', 'Offline Mode', 'In-App Purchases'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
      timeline: '8-16 weeks',
      pricing: '₹4,00,000 - ₹20,00,000',
      cta: 'Build Your App'
    },
    {
      id: 3,
      title: 'SaaS Solutions',
      description: 'Scalable software-as-a-service platforms built for growth and efficiency.',
      icon: '☁️',
      features: ['Multi-Tenant Architecture', 'Subscription Management', 'Analytics Dashboard', 'API Integration', 'Role-Based Access', 'Automated Billing'],
      technologies: ['React', 'Node.js', 'Stripe', 'Redis', 'Docker', 'Kubernetes'],
      timeline: '12-24 weeks',
      pricing: '₹8,00,000 - ₹40,00,000',
      cta: 'Launch Your SaaS'
    },
    {
      id: 4,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with advanced analytics solutions.',
      icon: '📊',
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Custom Reports', 'Real-Time Dashboards', 'Data Warehousing'],
      technologies: ['Python', 'TensorFlow', 'Power BI', 'Tableau', 'Apache Spark', 'PostgreSQL'],
      timeline: '6-14 weeks',
      pricing: '₹3,50,000 - ₹16,00,000',
      cta: 'Unlock Your Data'
    },
    {
      id: 5,
      title: 'API & Backend Systems',
      description: 'Robust server-side solutions with scalable and secure architecture.',
      icon: '⚙️',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Database Design', 'API Documentation', 'Rate Limiting'],
      technologies: ['Node.js', 'Express', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Redis'],
      timeline: '4-10 weeks',
      pricing: '₹2,50,000 - ₹12,00,000',
      cta: 'Build Your API'
    },
    {
      id: 6,
      title: 'AI Automation',
      description: 'Intelligent automation solutions powered by artificial intelligence.',
      icon: '🤖',
      features: ['Machine Learning Models', 'Process Automation', 'AI Chatbots', 'Smart Analytics', 'NLP Integration', 'Workflow Automation'],
      technologies: ['Python', 'TensorFlow', 'OpenAI GPT', 'Langchain', 'Scikit-learn', 'PyTorch'],
      timeline: '8-18 weeks',
      pricing: '₹5,00,000 - ₹25,00,000',
      cta: 'Automate Now'
    },
    {
      id: 7,
      title: 'Cloud Infrastructure',
      description: 'Secure and scalable cloud solutions for modern applications.',
      icon: '🌐',
      features: ['AWS/Azure Setup', 'Cloud Migration', 'Auto-Scaling', 'Load Balancing', 'Infrastructure as Code', 'Disaster Recovery'],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      timeline: '3-8 weeks',
      pricing: '₹1,50,000 - ₹8,00,000',
      cta: 'Go Cloud'
    },
    {
      id: 8,
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions with payment and inventory management.',
      icon: '🛒',
      features: ['Shopping Cart', 'Payment Gateway', 'Order Management', 'Customer Portal', 'Inventory Tracking', 'Multi-Currency Support'],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'React', 'Node.js'],
      timeline: '6-14 weeks',
      pricing: '₹3,50,000 - ₹15,00,000',
      cta: 'Start Selling'
    },
    {
      id: 9,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      icon: '🔒',
      features: ['Security Audits', 'Penetration Testing', 'Data Encryption', 'Compliance (GDPR, SOC2)', 'Vulnerability Assessment', 'Security Training'],
      technologies: ['OWASP', 'Metasploit', 'Burp Suite', 'SSL/TLS', 'OAuth 2.0', 'JWT'],
      timeline: '2-6 weeks',
      pricing: '₹1,25,000 - ₹6,00,000',
      cta: 'Secure Your App'
    },
    {
      id: 10,
      title: 'DevOps & CI/CD',
      description: 'Streamline development with automated deployment and continuous integration.',
      icon: '🚀',
      features: ['Automated Testing', 'Continuous Deployment', 'Monitoring & Alerts', 'Version Control', 'Pipeline Setup', 'Performance Monitoring'],
      technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
      timeline: '3-8 weeks',
      pricing: '₹2,00,000 - ₹8,00,000',
      cta: 'Optimize Workflow'
    },
    {
      id: 11,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing', 'Design Systems'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Principle'],
      timeline: '4-10 weeks',
      pricing: '₹1,75,000 - ₹7,50,000',
      cta: 'Design With Us'
    },
    {
      id: 12,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge digital solutions.',
      icon: '💼',
      features: ['Strategy Consulting', 'Legacy Modernization', 'Digital Workflows', 'Change Management', 'Training & Support', 'Technology Roadmap'],
      technologies: ['Cloud Platforms', 'Low-Code Tools', 'API Integration', 'Automation Tools', 'Analytics', 'CRM Systems'],
      timeline: '8-20 weeks',
      pricing: '₹6,00,000 - ₹30,00,000',
      cta: 'Transform Today'
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="lead">Comprehensive solutions for all your web development needs</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="card service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="service-section">
                  <h4>What's Included</h4>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-section">
                  <h4>Technologies</h4>
                  <div className="service-tech">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="service-details">
                  <div className="detail-item">
                    <span className="detail-icon">⏱️</span>
                    <div>
                      <div className="detail-label">Timeline</div>
                      <div className="detail-value">{service.timeline}</div>
                    </div>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">💰</span>
                    <div>
                      <div className="detail-label">Starting From</div>
                      <div className="detail-value">{service.pricing}</div>
                    </div>
                  </div>
                </div>

                <button className="service-btn" onClick={() => window.open('/contact', '_blank')}>
                  <span className="btn-text">Get Details</span>
                  <span className="btn-icon">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help bring your project to life.</p>
            <GlassButton href="/contact">
              Contact Us Today
            </GlassButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
