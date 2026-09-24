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
  id: 3,
  title: 'Bus Wala (बस वाला)',
  subtitle: 'Immersive Lofi Highway Bus Journey & Radio Experience',
  description: 'An interactive, nostalgic nocturnal journey along Indian highways (NH-39: Jhansi – Sonbhadra). Features an integrated vintage retro cassette/radio player, ambient highway video feeds, real-time passenger counter, and intuitive hotkey navigation.',
  image: '🚌',
  category: 'Interactive Web Experience',
  statusBadge: 'Live Experience',
  metric: '200+ Live Aboard',
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
    },
    {
  id: 4,
  title: 'Telecom Customer Churn & Retention Modeling',
  subtitle: 'End-to-End Churn Prediction, Risk Scoring & Revenue Exposure Pipeline',
  description: 'Production-ready customer retention analytics workflow analyzing 7,000 subscriber records for TeleNova Communications. Combines data profiling, statistical hypothesis testing, ML churn classification (ROC-AUC: 0.794), and SQL window aggregations to pinpoint churn drivers and quantify $134K/month in revenue exposure.',
  image: '📊',
  category: 'Machine Learning & Analytics',
  statusBadge: 'Completed Project',
  metric: '0.794 ROC-AUC | $134K Exposure',
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
    'Rigorous Statistical Testing (Chi-Square, Mann-Whitney U, Odds Ratios, Cramér\'s V)',
    'Dual-Model Churn Classification (Logistic Regression baseline & Random Forest)',
    'Customer Risk Stratification & 4-Quadrant Value-Risk Matrix Mapping',
    'Advanced SQL Analytics with CTEs, Window Functions, and Ranking Partitions',
    'Financial Risk Modeling with $134,370+ Monthly Revenue Exposure Estimation'
  ],
  liveDemo: 'https://github.com/anmolmishra09/telecom-customer-churn-retention/blob/main/reports/executive_summary.md',
  github: 'https://github.com/anmolmishra09/telecom-customer-churn-retention'
},
{
  id: 5,
  title: 'NovaCart Commerce Analytics',
  subtitle: 'E-Commerce Sales & Profitability Business Intelligence Suite',
  description: 'Enterprise-grade end-to-end data analytics system examining $81.3M+ in revenue across 105K+ order line items. Identifies margin leaks, uncovers critical discount break-even thresholds, models customer lifetime value, and delivers interactive 5-page Power BI dashboards that unlocked $1.96M–$2.74M in quantified annual profit opportunities.',
  image: '📈',
  category: 'Data Analytics & BI',
  statusBadge: 'Completed Project',
  metric: '$81.4M Analyzed | +$2.7M Profit Impact',
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
    'Advanced SQL Analytics utilizing Recursive CTEs, Window Aggregations (LAG/LEAD/NTILE), and Ranking',
    'Interactive 5-Page Power BI Dashboard Suite with 50+ Custom DAX Measures',
    'Discount & Margin Sensitivity Analysis pinpointing negative profit margin thresholds',
    'Automated Data Quality & Pipeline Cleansing handling synthetic edge cases and referential integrity'
  ],
  liveDemo: 'https://github.com/anmolmishra09/novacart-commerce/blob/main/reports/business_insights.md',
  github: 'https://github.com/anmolmishra09/novacart-commerce'
},
{
  id: 6,
  title: 'Veltrix ML Recommendation Platform',
  subtitle: 'Two-Stage Event-Driven Recommendation & Ranking Engine',
  description: 'Production-grade enterprise ML recommendation system featuring a two-stage candidate generation and learning-to-rank pipeline. Integrates Kafka event streaming, Feast feature store, MLflow registry, Airflow DAG orchestration, and sub-second real-time inference via FastAPI and Redis.',
  image: '🤖',
  category: 'MLOps & Recommendation Systems',
  statusBadge: 'Production Ready',
  metric: 'Two-Stage Ranking | Real-Time Inference',
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
    'Two-Stage Funnel: Multi-strategy candidate generation (Collaborative, Content, Popularity, Embeddings) paired with XGBoost/LightGBM/Neural rankers',
    'Event-Driven Streaming: High-throughput interaction ingestion via Apache Kafka and real-time inference caching with Redis',
    'Centralized Feature Store: Feast integration for consistent, zero-skew online/offline feature serving',
    'Full MLOps Lifecycle: MLflow experiment tracking/registry, automated Airflow retraining DAGs, and Evidently data drift monitoring',
    'Comprehensive Telemetry: End-to-end tracing and observability with Prometheus, Grafana, and OpenTelemetry'
  ],
  liveDemo: 'https://github.com/anmolmishra09/veltrix-recommendation-engine#architecture',
  github: 'https://github.com/anmolmishra09/veltrix-recommendation-engine'
},
{
  id: 7,
  title: 'DiwaliGlow Storefront',
  subtitle: 'Luxury D2C E-Commerce & Artisanal Candle Experience',
  description: 'High-performance, standalone Direct-to-Consumer storefront built with zero external framework dependencies. Delivers sub-millisecond in-browser catalog filtering, a full-lifecycle client-side cart and wishlist engine with persistent storage, accessible modal focus-trapping, and comprehensive JSON-LD e-commerce structured data.',
  image: '🪔',
  category: 'Vanilla Web Performance',
  statusBadge: 'Live Experience',
  metric: 'Zero Frameworks | 100% Client-Side',
  tech: [
    'HTML5 Semantic',
    'CSS3 Variables & Grid',
    'Vanilla JavaScript (ES6+)',
    'LocalStorage API',
    'JSON-LD Schema',
    'Open Graph'
  ],
  features: [
    'Zero-Dependency Architecture: Native JavaScript, modern CSS Grid/Flexbox, and semantic HTML without runtime overhead',
    'Instant Client-Side Filtering: Multi-vector real-time catalog search, category selectors, and price range sliders',
    'Persistent State Management: Full cart and wishlist lifecycle synchronized via the localStorage API',
    'Accessible Micro-Interactions: Modal Quick Views with ESC key focus traps, hover image swaps, and reduced-motion compliance',
    'Rich E-Commerce SEO: Complete JSON-LD Store and Product schemas with Open Graph metadata'
  ],
  liveDemo: 'https://diwaliglowstore.vercel.app/',
  github: 'https://github.com/anmolmishra09/diwaliglow.store'
},
{
  id: 8,
  title: 'Lotus AI',
  subtitle: 'Modern AI-Powered Productivity & Intelligence Platform',
  description: 'Clean, modern SaaS web application crafted with a responsive glassmorphism aesthetic. Delivers fast client-side routing, prompt-driven AI workflows, contextual interactions, and fluid micro-animations optimized across desktop and mobile viewports.',
  image: '🪷',
  category: 'AI & SaaS Platform',
  statusBadge: 'Live Experience',
  metric: 'Sub-second UX | Cloud Hosted',
  tech: [
    'Next.js',
    'React',
    'TypeScript',
    'TailwindCSS',
    'Vercel'
  ],
  features: [
    'Conversational & Prompt Workspace: Intuitive prompt interactions with clean markdown/code streaming displays',
    'Modern Glassmorphic UI: Responsive dark/light themed layouts with refined typography and smooth transitions',
    'Instant Route Navigation: Fast page rendering and asset prefetching powered by Next.js and Vercel edge deployment',
    'Adaptive Mobile-First Design: Tailored touch targets and ergonomic layout shifts for handheld devices'
  ],
  liveDemo: 'https://lotusain.vercel.app/',
  github: 'https://github.com/anmolmishra09/lotus-ai' // replace with your exact repo link if different
},
{
  id: 9,
  title: 'WanderMind',
  subtitle: 'Intelligent Trip Planner & Itinerary Generation Engine',
  description: 'Full-stack AI-driven travel planning platform that synthesizes destination data, user preferences, budget constraints, and duration into personalized multi-day travel itineraries. Features Google OAuth authentication, secure user session management, automated trip persistence, and responsive UI components.',
  image: '✈️',
  category: 'Full-Stack & Generative AI',
  statusBadge: 'Live Experience',
  metric: 'Instant AI Itineraries | Full-Stack',
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
    'Dynamic Destination Discovery: Curated destination cards, visual media integration, and responsive travel layout components'
  ],
  liveDemo: 'https://wandermindaiin.vercel.app/',
  github: 'https://github.com/anmolmishra09/WanderMind'
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