import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const [expandedCard, setExpandedCard] = useState(null);

  const categories = [
    'All',
    'AI & SaaS',
    'ML & Data Analytics',
    'Web & E-Commerce'
  ];

  const projects = [
    {
      id: 1,
      title: 'Bus Wala (बस वाला)',
      subtitle: 'Immersive Lofi Highway Bus Journey & Radio Experience',
      description:
        'An interactive, nostalgic nocturnal journey along Indian highways (NH-39: Jhansi – Sonbhadra). Features an integrated vintage retro cassette/radio player, ambient highway video feeds, real-time passenger counter, and intuitive hotkey navigation.',
      category: 'Interactive Web Experience',
      filterGroup: 'Web & E-Commerce',
      statusBadge: 'Live Experience',
      metric: '200+ Live Aboard',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 6v6" />
          <path d="M15 6v6" />
          <path d="M2 12h19.6" />
          <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
          <circle cx="7" cy="18" r="2" />
          <path d="M9 18h5" />
          <circle cx="16" cy="18" r="2" />
        </svg>
      ),
      tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Web Audio API'],
      features: [
        'Retro Cassette & Nostalgic Radio Player (Playback, Queue, Seek)',
        'Dynamic Ambient Looping Highway Visuals (NH-39 Theme)',
        'Real-time Live Passenger Presence Tracker',
        'Interactive Keyboard Hotkeys (Space: Play, H: Horn, T: Ticket, Q: Queue)'
      ],
      liveDemo: 'https://buswalain.vercel.app/',
      github: 'https://github.com/anmolmishra09/bus_wala'
    },
    {
      id: 2,
      title: 'Veltrix ML Recommendation Platform',
      subtitle: 'Two-Stage Event-Driven Recommendation & Ranking Engine',
      description:
        'Production-grade enterprise ML recommendation system featuring a two-stage candidate generation and learning-to-rank pipeline. Integrates Kafka event streaming, Feast feature store, MLflow registry, Airflow DAG orchestration, and sub-second real-time inference via FastAPI and Redis.',
      category: 'MLOps & Recommendation Systems',
      filterGroup: 'ML & Data Analytics',
      statusBadge: 'Production Ready',
      metric: 'Two-Stage Ranking | Real-Time',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="5" cy="18" r="2.5" />
          <circle cx="19" cy="18" r="2.5" />
          <path d="M10.7 7.1 6.3 15.9" />
          <path d="M13.3 7.1 17.7 15.9" />
          <path d="M7.5 18h9" />
        </svg>
      ),
      tech: [
        'FastAPI',
        'PyTorch',
        'XGBoost',
        'LightGBM',
        'Apache Kafka',
        'Apache Airflow',
        'Apache Spark',
        'Feast',
        'MLflow',
        'PostgreSQL',
        'Redis',
        'Docker'
      ],
      features: [
        'Two-Stage Funnel: Multi-strategy candidate generation paired with XGBoost/LightGBM/Neural rankers',
        'Event-Driven Streaming: High-throughput interaction ingestion via Apache Kafka and Redis caching',
        'Centralized Feature Store: Feast integration for zero-skew online/offline feature serving',
        'Full MLOps Lifecycle: MLflow tracking/registry, Airflow retraining DAGs, and Evidently drift monitoring',
        'Comprehensive Telemetry: End-to-end observability with Prometheus, Grafana, and OpenTelemetry'
      ],
      liveDemo: 'https://github.com/anmolmishra09/veltrix-recommendation-engine#architecture',
      github: 'https://github.com/anmolmishra09/veltrix-recommendation-engine'
    },
    {
      id: 3,
      title: 'Lotus AI',
      subtitle: 'Modern AI-Powered Productivity & Intelligence Platform',
      description:
        'Clean, modern SaaS web application crafted with a responsive glassmorphism aesthetic. Delivers fast client-side routing, prompt-driven AI workflows, contextual interactions, and fluid micro-animations optimized across desktop and mobile viewports.',
      category: 'AI & SaaS Platform',
      filterGroup: 'AI & SaaS',
      statusBadge: 'Live Experience',
      metric: 'Sub-second UX | Cloud Hosted',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c-2.5 3.5-3.5 6.5-3.5 9.5 0 2.5 1.5 4.5 3.5 5.5 2-1 3.5-3 3.5-5.5C15.5 9.5 14.5 6.5 12 3Z" />
          <path d="M8.5 12.5C5.5 11.5 3 12 2 14c1.5 2.5 4.5 4 8 4" />
          <path d="M15.5 12.5c3-1 5.5-.5 6.5 1.5-1.5 2.5-4.5 4-8 4" />
          <path d="M5 20h14" />
        </svg>
      ),
      tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Vercel'],
      features: [
        'Conversational & Prompt Workspace: Intuitive prompt interactions with clean markdown/code streaming displays',
        'Modern Glassmorphic UI: Responsive layouts with refined typography and smooth transitions',
        'Instant Route Navigation: Fast page rendering and asset prefetching powered by Next.js and Vercel edge deployment',
        'Adaptive Mobile-First Design: Tailored touch targets and ergonomic layout shifts for handheld devices'
      ],
      liveDemo: 'https://lotusain.vercel.app/',
      github: 'https://github.com/anmolmishra09/lotus-ai'
    },
    {
      id: 4,
      title: 'WanderMind',
      subtitle: 'Intelligent Trip Planner & Itinerary Generation Engine',
      description:
        'Full-stack AI-driven travel planning platform that synthesizes destination data, user preferences, budget constraints, and duration into personalized multi-day travel itineraries. Features Google OAuth authentication, secure user session management, and automated trip persistence.',
      category: 'Full-Stack & Generative AI',
      filterGroup: 'AI & SaaS',
      statusBadge: 'Live Experience',
      metric: 'Instant AI Itineraries',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
      tech: [
        'React',
        'Vite',
        'Gemini AI API',
        'Firebase',
        'TailwindCSS',
        'Node.js',
        'Express.js',
        'JWT'
      ],
      features: [
        'Generative Travel Engine: Instant multi-day itineraries customized by budget, companion type, and location using Gemini AI',
        'Interactive Trip Dashboard: Save, review, and manage generated travel plans with dedicated route breakdowns',
        'Secure User Management: Authenticated user sessions and protected trip histories via JWT and OAuth integration',
        'Dynamic Destination Discovery: Curated destination cards, visual media integration, and responsive travel layouts'
      ],
      liveDemo: 'https://wandermindaiin.vercel.app/',
      github: 'https://github.com/anmolmishra09/WanderMind'
    },
    {
      id: 5,
      title: 'Inalgo File Vault',
      subtitle: 'Secure & Modern Cloud File Management Platform',
      description:
        'A clean, modern web-based file management platform designed for secure file storage, organization, and instant access. Built with a responsive interface, intuitive interactions, and a streamlined user experience optimized across desktop and mobile devices.',
      category: 'File Management & SaaS',
      filterGroup: 'AI & SaaS',
      statusBadge: 'Live Experience',
      metric: 'Encrypted Workspace | Fast UX',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3" />
          <path d="M12 18v3" />
          <path d="M3 12h3" />
          <path d="M18 12h3" />
        </svg>
      ),
      tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Vercel'],
      features: [
        'Secure File Workspace: Intuitive interface for uploading, organizing, managing, and accessing files',
        'Modern Responsive UI: Clean layouts with polished visual design and smooth interactions',
        'Efficient File Management: Streamlined workflows for browsing and categorizing digital assets',
        'Adaptive Mobile-First Design: Optimized layouts and touch-friendly controls across mobile, tablet, and desktop'
      ],
      liveDemo: 'https://inalgofilevault.vercel.app/',
      github: 'https://github.com/anmolmishra09/Filevault'
    },
    {
      id: 6,
      title: 'Telecom Customer Churn & Retention Modeling',
      subtitle: 'End-to-End Churn Prediction, Risk Scoring & Revenue Exposure Pipeline',
      description:
        'Production-ready customer retention analytics workflow analyzing 7,000 subscriber records for TeleNova Communications. Combines data profiling, statistical hypothesis testing, ML churn classification (ROC-AUC: 0.794), and SQL window aggregations to quantify $134K/month in revenue exposure.',
      category: 'Machine Learning & Analytics',
      filterGroup: 'ML & Data Analytics',
      statusBadge: 'Completed Project',
      metric: '0.794 ROC-AUC | $134K Exposure',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
          <circle cx="19" cy="9" r="1.5" fill="currentColor" />
        </svg>
      ),
      tech: [
        'Python',
        'Pandas',
        'Scikit-learn',
        'PostgreSQL',
        'SciPy',
        'Seaborn',
        'Jupyter'
      ],
      features: [
        "Rigorous Statistical Testing (Chi-Square, Mann-Whitney U, Odds Ratios, Cramér's V)",
        'Dual-Model Churn Classification (Logistic Regression baseline & Random Forest)',
        'Customer Risk Stratification & 4-Quadrant Value-Risk Matrix Mapping',
        'Advanced SQL Analytics with CTEs, Window Functions, and Ranking Partitions',
        'Financial Risk Modeling with $134,370+ Monthly Revenue Exposure Estimation'
      ],
      liveDemo: 'https://github.com/anmolmishra09/telecom-customer-churn-retention/blob/main/reports/executive_summary.md',
      github: 'https://github.com/anmolmishra09/telecom-customer-churn-retention'
    },
    {
      id: 7,
      title: 'NovaCart Commerce Analytics',
      subtitle: 'E-Commerce Sales & Profitability Business Intelligence Suite',
      description:
        'Enterprise-grade end-to-end data analytics system examining $81.3M+ in revenue across 105K+ order line items. Identifies margin leaks, uncovers critical discount break-even thresholds, models customer lifetime value, and delivers interactive 5-page Power BI dashboards.',
      category: 'Data Analytics & BI',
      filterGroup: 'ML & Data Analytics',
      statusBadge: 'Completed Project',
      metric: '$81.4M Analyzed | +$2.7M Profit',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      tech: [
        'Python',
        'PostgreSQL',
        'Power BI',
        'DAX',
        'Pandas',
        'SQLAlchemy',
        'Seaborn'
      ],
      features: [
        'Complete Star Schema Architecture (Customer/Product Dimensions & Order/Return Facts)',
        'Advanced SQL Analytics utilizing Recursive CTEs and Window Aggregations (LAG/LEAD/NTILE)',
        'Interactive 5-Page Power BI Dashboard Suite with 50+ Custom DAX Measures',
        'Discount & Margin Sensitivity Analysis pinpointing negative profit margin thresholds',
        'Automated Data Quality & Pipeline Cleansing handling referential integrity'
      ],
      liveDemo: 'https://github.com/anmolmishra09/novacart-commerce/blob/main/reports/business_insights.md',
      github: 'https://github.com/anmolmishra09/novacart-commerce'
    },
    {
      id: 8,
      title: 'DiwaliGlow Storefront',
      subtitle: 'Luxury D2C E-Commerce & Artisanal Candle Experience',
      description:
        'High-performance, standalone Direct-to-Consumer storefront built with zero external framework dependencies. Delivers sub-millisecond in-browser catalog filtering, a full-lifecycle client-side cart and wishlist engine with persistent storage, and JSON-LD e-commerce structured data.',
      category: 'Vanilla Web Performance',
      filterGroup: 'Web & E-Commerce',
      statusBadge: 'Live Experience',
      metric: 'Zero Frameworks | 100% Client-Side',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2c1.5 2.5 2.5 4.2 2.5 5.8a2.5 2.5 0 0 1-5 0C9.5 6.2 10.5 4.5 12 2Z" />
          <path d="M4 13h16l-1.5 4.5A3.5 3.5 0 0 1 15.18 20H8.82a3.5 3.5 0 0 1-3.32-2.5L4 13Z" />
        </svg>
      ),
      tech: [
        'HTML5 Semantic',
        'CSS3 Variables & Grid',
        'Vanilla JavaScript (ES6+)',
        'LocalStorage API',
        'JSON-LD Schema',
        'Open Graph'
      ],
      features: [
        'Zero-Dependency Architecture: Native JavaScript, modern CSS Grid/Flexbox, and semantic HTML',
        'Instant Client-Side Filtering: Multi-vector real-time catalog search, category selectors, and price sliders',
        'Persistent State Management: Full cart and wishlist lifecycle synchronized via localStorage API',
        'Accessible Micro-Interactions: Modal Quick Views with ESC key focus traps and reduced-motion compliance',
        'Rich E-Commerce SEO: Complete JSON-LD Store and Product schemas with Open Graph metadata'
      ],
      liveDemo: 'https://diwaliglowstore.vercel.app/',
      github: 'https://github.com/anmolmishra09/diwaliglow.store'
    }
  ];

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.filterGroup === activeTab);

  const toggleDetails = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Header Section */}
        <div className="portfolio-header">
          <span className="portfolio-pill">Production Ready Architecture</span>
          <h2 className="section-title">Live Products &amp; Engineering Builds</h2>
          <p className="section-subtitle">
            Explore scalable, production-tested AI systems, machine learning
            pipelines, and full-stack web platforms built for real-world performance.
          </p>

          {/* Interactive Category Tabs */}
          <div className="portfolio-tabs" role="tablist" aria-label="Project Categories">
            {categories.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
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
              <article
                key={project.id}
                className={`portfolio-card ${isExpanded ? 'expanded' : ''}`}
              >
                {/* Card Top / Icon & Badges */}
                <div className="portfolio-card-header">
                  <div className="portfolio-icon-wrapper" aria-hidden="true">
                    {project.icon}
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
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Section (Pinned to bottom for uniform height) */}
                <div className="portfolio-footer">
                  <div className="interactive-details-container">
                    <button
                      type="button"
                      className="details-toggle-btn"
                      aria-expanded={isExpanded}
                      onClick={() => toggleDetails(project.id)}
                    >
                      <span>
                        {isExpanded
                          ? 'Hide Architecture Details'
                          : 'View Key Capabilities'}
                      </span>
                      <svg
                        className={`chevron ${isExpanded ? 'open' : ''}`}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div className="portfolio-features">
                        <h4>Core System Capabilities:</h4>
                        <ul>
                          {project.features.map((feature, idx) => (
                            <li key={idx}>
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#7c3aed"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
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
                      <span>Launch Live Project</span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>

                    <a
                      href={project.github}
                      className="portfolio-btn secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} GitHub Repository`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Call To Action Banner */}
        <div className="portfolio-cta">
          <div className="cta-content">
            <h3>Need a Custom Enterprise Solution?</h3>
            <p>
              We build production-ready microservices, AI pipelines, and SaaS
              platforms tailored to your scale.
            </p>
          </div>
          <a href="/contact" className="cta-btn">
            <span>Schedule Architecture Call</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;