import React from 'react';
import './Services.css';
import GlassButton from '../components/GlassButton';
import FAQ from '../components/FAQ';
// SEO Component
import SEO from '../components/SEO';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      description: 'High-performance, search-optimized web apps engineered for conversion and scale.',
      icon: '💻',
      features: [
        'Custom Single Page & Multi-Page Apps',
        'Next.js SSR/SSG Architecture',
        'Headless CMS & Database Integration',
        'Core Web Vitals & Technical SEO',
        'Role-Based Auth & Admin Dashboards',
        'Automated CI/CD Deployment'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      timeline: '3-8 weeks',
      pricing: '₹95,000 - ₹4,50,000',
      cta: 'Start Your Project'
    },
    {
      id: 2,
      title: 'Cross-Platform Mobile Apps',
      description: 'Fluid iOS and Android experiences built from a unified, maintainable codebase.',
      icon: '📱',
      features: [
        'Native Feel on iOS & Android',
        'Offline Caching & Background Sync',
        'Push Notifications & Deep Linking',
        'Payment Gateways & Biometric Auth',
        'App Store & Play Store Submissions',
        'Crashlytics & Event Tracking'
      ],
      technologies: ['Flutter', 'React Native', 'Firebase', 'Swift', 'Kotlin', 'Supabase'],
      timeline: '6-12 weeks',
      pricing: '₹1,50,000 - ₹6,00,000',
      cta: 'Build Your App'
    },
    {
      id: 3,
      title: 'SaaS Architecture & MVPs',
      description: 'End-to-end software platforms with billing, tenant separation, and customer dashboards.',
      icon: '☁️',
      features: [
        'Multi-Tenant Data Isolation',
        'Stripe/Razorpay Recurring Billing',
        'Granular RBAC & Permissions',
        'Usage-Based Metering & Analytics',
        'Webhooks & Public API Gateway',
        'Onboarding & Email Workflows'
      ],
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Stripe'],
      timeline: '8-16 weeks',
      pricing: '₹2,75,000 - ₹12,00,000',
      cta: 'Launch Your SaaS'
    },
    {
      id: 4,
      title: 'Custom AI & LLM Systems',
      description: 'Domain-specific AI copilots, retrieval pipelines (RAG), and operational automations.',
      icon: '🤖',
      features: [
        'Private Knowledge Base RAG Systems',
        'Autonomous Workflow Agents',
        'LLM Fine-Tuning & Model Eval',
        'Smart Document Processing (OCR/NLP)',
        'Custom Vector DB Integrations',
        'Fallback & Guardrail Architecture'
      ],
      technologies: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'Pinecone', 'Llama 3'],
      timeline: '4-10 weeks',
      pricing: '₹1,80,000 - ₹7,50,000',
      cta: 'Integrate AI'
    },
    {
      id: 5,
      title: 'High-Scale Backend & APIs',
      description: 'Distributed services engineered for sub-100ms response times and zero downtime.',
      icon: '⚙️',
      features: [
        'RESTful & GraphQL Architectures',
        'Microservices & Event-Driven Pub/Sub',
        'Multi-Layer Distributed Caching',
        'Schema Migrations & Index Tuning',
        'OpenAPI / Swagger Documentation',
        'Rate-Limiting & DDOS Throttling'
      ],
      technologies: ['Go', 'Node.js', 'Express', 'Redis', 'PostgreSQL', 'RabbitMQ'],
      timeline: '3-8 weeks',
      pricing: '₹85,000 - ₹3,50,000',
      cta: 'Build Your Backend'
    },
    {
      id: 6,
      title: 'Cloud & DevOps Automation',
      description: 'Reproducible cloud setups, zero-downtime rollouts, and proactive observability.',
      icon: '🚀',
      features: [
        'Infrastructure as Code (Terraform)',
        'Kubernetes & Container Orchestration',
        'GitOps-Driven CI/CD Pipelines',
        'Zero-Downtime Blue/Green Deploys',
        '24/7 Uptime & Error Alerting',
        'Cloud Cost Optimization & Audits'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana'],
      timeline: '2-6 weeks',
      pricing: '₹75,000 - ₹3,00,000',
      cta: 'Scale Infrastructure'
    },
    {
      id: 7,
      title: 'E-commerce & Custom Headless Stores',
      description: 'Lightning-fast online stores engineered to cut cart abandonment and maximize AOV.',
      icon: '🛒',
      features: [
        'Headless Commerce Frontends',
        'Custom Cart & Checkout Flows',
        'Multi-Currency & Regional Taxes',
        'ERP, Inventory & 3PL Integration',
        'Automated Abandoned Cart Sequences',
        'Instant Search & Faceted Filters'
      ],
      technologies: ['Shopify Plus', 'Next.js', 'Medusa.js', 'Stripe', 'Algolia', 'Tailwind CSS'],
      timeline: '4-10 weeks',
      pricing: '₹1,20,000 - ₹5,00,000',
      cta: 'Start Selling'
    },
    {
      id: 8,
      title: 'UI/UX Design & Design Systems',
      description: 'Data-driven UI/UX and reusable design systems ready for developer handoff.',
      icon: '🎨',
      features: [
        'User Journey Mapping & Wireframes',
        'Interactive Figma Clickable Prototypes',
        'Tokenized Design Systems in Figma',
        'Usability Audits & User Testing',
        'Micro-Interactions & Motion Design',
        'Pixel-Perfect Developer Handoff'
      ],
      technologies: ['Figma', 'FigJam', 'Principle', 'Adobe CC', 'Tokens Studio', 'Framer'],
      timeline: '3-6 weeks',
      pricing: '₹60,000 - ₹2,50,000',
      cta: 'Design With Us'
    },
    {
      id: 9,
      title: 'Security Audits & Pen Testing',
      description: 'End-to-end vulnerability scanning and regulatory hardening for web and API layers.',
      icon: '🔒',
      features: [
        'OWASP Top 10 Vulnerability Scans',
        'Manual Penetration Testing',
        'Authentication & Session Auditing',
        'API Security & Data Leak Analysis',
        'Compliance Roadmaps (SOC2, ISO, DPDP)',
        'Remediation Support & Re-Testing'
      ],
      technologies: ['Burp Suite', 'OWASP ZAP', 'Metasploit', 'Nmap', 'SonarQube', 'Snyk'],
      timeline: '2-4 weeks',
      pricing: '₹70,000 - ₹2,80,000',
      cta: 'Audit Your Security'
    },
    {
      id: 10,
      title: 'Data Engineering & BI Dashboards',
      description: 'Centralized data pipelines and real-time executive dashboards for rapid decisions.',
      icon: '📊',
      features: [
        'ETL/ELT Data Pipeline Setup',
        'Warehouse Modeling (Snowflake/BigQuery)',
        'Automated Executive Dashboards',
        'Customer Cohort & Churn Analytics',
        'Granular Event Tracking Instrumentation',
        'Scheduled Alert Reports via Slack/Email'
      ],
      technologies: ['Python', 'dbt', 'BigQuery', 'Snowflake', 'Power BI', 'Metabase'],
      timeline: '4-8 weeks',
      pricing: '₹1,10,000 - ₹4,50,000',
      cta: 'Connect Your Data'
    },
    {
      id: 11,
      title: 'Codebase Refactoring & Performance',
      description: 'Rescue slow, buggy legacy apps and transform them into maintainable codebases.',
      icon: '⚡',
      features: [
        'Full Architecture & Code Review',
        'Bundle Size & Latency Optimization',
        'Database Query & Index Tuning',
        'JavaScript/TypeScript Upgrades',
        'Unit & Integration Test Coverage',
        'Technical Debt Elimination Plan'
      ],
      technologies: ['TypeScript', 'Lighthouse', 'PostgreSQL EXPLAIN', 'Jest', 'Cypress', 'Webpack'],
      timeline: '2-5 weeks',
      pricing: '₹55,000 - ₹2,20,000',
      cta: 'Audit Your App'
    },
    {
      id: 12,
      title: 'Dedicated Engineering Pods',
      description: 'Embedded senior engineers, product designers, and QA talent on a monthly basis.',
      icon: '👥',
      features: [
        'Vetted Senior Engineers & Leads',
        'Agile Sprints & Daily Standups',
        'Direct Slack/Discord Collaboration',
        'No Long-Term Hiring Lock-in',
        'Zero Overhead for Equipment/Benefits',
        'Flexible Pod Scaling (1 to 6 members)'
      ],
      technologies: ['Full-Stack', 'Mobile', 'DevOps', 'QA Automation', 'Product Management'],
      timeline: 'Monthly Rolling',
      pricing: '₹1,25,000 / month / engineer',
      cta: 'Hire a Pod'
    }
  ];

  return (
    <>
      <SEO
        title="Services | Inalgo"
        description="Inalgo offers full-stack web development, mobile app development, UI/UX design, cloud solutions, and custom software development tailored to your business needs."
        canonicalUrl="https://inalgo.tech/services"
        openGraph={{
          url: "https://inalgo.tech/services",
          title: "Services | Inalgo",
          description: "Inalgo offers full-stack web development, mobile app development, UI/UX design, cloud solutions, and custom software development tailored to your business needs.",
          image: "https://inalgo.tech/logo.png"
        }}
        twitter={{
          url: "https://inalgo.tech/services",
          title: "Services | Inalgo",
          description: "Inalgo offers full-stack web development, mobile app development, UI/UX design, cloud solutions, and custom software development tailored to your business needs.",
          image: "https://inalgo.tech/logo.png"
        }}
        schemaOrg={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Inalgo Services",
          "description": "Inalgo offers full-stack web development, mobile app development, UI/UX design, cloud solutions, and custom software development tailored to your business needs.",
          "url": "https://inalgo.tech/services",
          "serviceType": "Custom Software Development",
          "areaServed": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Global",
              "addressCountry": "US"
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Inalgo Service Offerings",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full-Stack Web Development",
                  "description": "High-performance, search-optimized web apps engineered for conversion and scale."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile App Development",
                  "description": "Cross-platform mobile apps for iOS and Android with native performance."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "UI/UX Design",
                  "description": "Data-driven UI/UX and reusable design systems ready for developer handoff."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Solutions",
                  "description": "Reproducible cloud setups, zero-downtime rollouts, and proactive observability."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Software Development",
                  "description": "Tailored software solutions for unique business requirements."
                }
              }
            ]
          }
        }}
      />
      <div className="services">
      <section className="services-hero">
        <div className="container">
          <h1>Engineered for Growth. Priced for Value.</h1>
          <p className="lead">
            Production-grade digital systems built with modern engineering practices, transparent timelines, and fixed milestones.
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="card service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-section">
                  <h4>Key Deliverables</h4>
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
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
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

                <button
                  className="service-btn"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  <span className="btn-text">{service.cta}</span>
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
            <h2>Have a Unique Requirement?</h2>
            <p>We tailor custom development scopes, tech stacks, and fixed-milestone budgets to match your launch goals.</p>
            <GlassButton href="/contact">Book a Discovery Call</GlassButton>
          </div>
        </div>
      </section>
    </div>
        </>

    );
}

export default Services;