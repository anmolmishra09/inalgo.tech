import React, { useState, useMemo, useEffect } from 'react';
import './ImageGallery.css';

const PROJECT_ICONS = {
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M10.7 7.1 6.3 15.9" />
      <path d="M13.3 7.1 17.7 15.9" />
      <path d="M7.5 18h9" />
    </svg>
  ),
  infrastructure: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
      <circle cx="19" cy="9" r="1.5" fill="currentColor" />
    </svg>
  ),
  vision: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M7 12c1.2-2.4 3.1-3.6 5-3.6s3.8 1.2 5 3.6c-1.2 2.4-3.1 3.6-5 3.6s-3.8-1.2-5-3.6Z" />
    </svg>
  )
};

// Enterprise & Client-Ready Configuration
const GALLERY_DATA = [
  {
    id: 'proj-01',
    title: 'Cognara Multi-Tenant RAG Core',
    category: 'AI & Automation',
    metric: '99.4% Retrieval Accuracy',
    iconKey: 'automation',
    description:
      'Enterprise knowledge engine and autonomous support platform built with hybrid vector search, semantic chunking, and real-time citation tracing.',
    highlights: [
      'Sub-180ms pgvector & Redis semantic retrieval pipeline',
      'Tenant-isolated document ingestion with role-based guardrails',
      'Automated hallucination scoring and live telemetry logs'
    ],
    tech: ['Python', 'FastAPI', 'pgvector', 'Redis', 'Celery'],
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&h=800&w=800&auto=format&fit=crop',
    link: 'https://inalgotechnologies.vercel.app'
  },
  {
    id: 'proj-02',
    title: 'Veltrix Real-Time Ranking Engine',
    category: 'Machine Learning',
    metric: '12ms P99 Inference',
    iconKey: 'analytics',
    description:
      'Two-stage event-driven recommendation and ranking architecture processing high-throughput user interaction streams at scale.',
    highlights: [
      'Apache Kafka & Spark real-time feature aggregation',
      'XGBoost & neural learning-to-rank scoring stage',
      'Automated drift detection and MLflow model registry'
    ],
    tech: ['PyTorch', 'Kafka', 'Spark', 'FastAPI', 'Docker'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&h=800&w=800&auto=format&fit=crop',
    link: 'https://github.com/anmolmishra09/veltrix-recommendation-engine'
  },
  {
    id: 'proj-03',
    title: 'Enterprise Command & Telemetry',
    category: 'Web App',
    metric: '99.99% Uptime SLA',
    iconKey: 'dashboard',
    description:
      'Executive analytics and resource allocation portal delivering live operational visibility, custom KPI widgets, and automated anomaly alerts.',
    highlights: [
      'WebSocket-driven live metric streaming with zero-lag charts',
      'Granular RBAC permissions and multi-workspace switching',
      'Exportable board-ready compliance and audit reports'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&h=800&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 'proj-04',
    title: 'Cloud Developer Workstations',
    category: 'Infrastructure',
    metric: '45s Provisioning',
    iconKey: 'infrastructure',
    description:
      'Cloud-native development environment orchestration platform enabling instant, reproducible containerized workspaces for engineering teams.',
    highlights: [
      'Pre-warmed Docker & Kubernetes workspace snapshots',
      'Zero-trust SSH tunneling and automated secret injection',
      'Auto-hibernation policies cutting cloud compute spend by 62%'
    ],
    tech: ['Docker', 'Kubernetes', 'Go', 'Linux', 'Terraform'],
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&h=800&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 'proj-05',
    title: 'Zero-Trust Security Intelligence',
    category: 'Cybersecurity',
    metric: '24/7 Threat Telemetry',
    iconKey: 'security',
    description:
      'Real-time threat detection, API gateway hardening, and automated compliance monitoring suite tailored for financial and SaaS workloads.',
    highlights: [
      'Behavioral anomaly scoring across authentication logs',
      'Automated SOC2 & ISO-27001 evidence collection',
      'Instant webhook quarantine for suspicious session tokens'
    ],
    tech: ['Python', 'PostgreSQL', 'Redis', 'OpenTelemetry', 'JWT'],
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&h=800&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 'proj-06',
    title: 'Edge Vision Inspection Core',
    category: 'Computer Vision',
    metric: '60 FPS Edge Runtime',
    iconKey: 'vision',
    description:
      'Low-latency visual detection and landmark tracking runtime engineered for industrial quality inspection and spatial gesture interfaces.',
    highlights: [
      'Quantized ONNX & OpenCV pipeline optimized for edge CPUs',
      'Real-time bounding box, landmark, and defect classification',
      'Local-first processing with encrypted event sync'
    ],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'ONNX', 'FastAPI'],
    image:
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&h=800&w=800&auto=format&fit=crop',
    link: '#'
  }
];

export default function ImageGallery({
  title = 'Enterprise Portfolio',
  subtitle = 'Case Studies & Solutions',
  description = 'Explore our delivered engineering solutions across cloud infrastructure, AI automation, and enterprise security.',
  items = GALLERY_DATA,
  onProjectSelect
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = useMemo(() => {
    return ['All', ...new Set(items.map((item) => item.category))];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const handleOpenProject = (item) => {
    if (onProjectSelect) {
      onProjectSelect(item);
    } else {
      setSelectedProject(item);
    }
  };

  return (
    <section
      id="case-studies"
      className="image-gallery-section"
      aria-labelledby="gallery-heading"
    >
      <div className="container">
        {/* Header Section */}
        <header className="gallery-header text-center">
          <span className="gallery-tag">{subtitle}</span>
          <h2 id="gallery-heading" className="gallery-title">
            {title}
          </h2>
          <p className="gallery-description">{description}</p>
        </header>

        {/* Category Filter Navigation */}
        <nav className="gallery-filter-nav" aria-label="Portfolio categories">
          <ul className="filter-list" role="tablist">
            {categories.map((category) => (
              <li key={category} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Gallery Grid */}
        <div className="image-gallery" role="region" aria-live="polite">
          {filteredItems.map((item) => {
            const iconNode =
              item.icon ||
              PROJECT_ICONS[item.iconKey] ||
              PROJECT_ICONS.dashboard;

            return (
              <article
                key={item.id}
                className="gallery-item"
                onClick={() => handleOpenProject(item)}
              >
                <div className="image-wrapper">
                  <img
                    src={item.image}
                    alt={`Preview of ${item.title}`}
                    className="gallery-image"
                    loading="lazy"
                    width="800"
                    height="600"
                  />

                  {/* Top Floating Project Icon & Metric Pill */}
                  <div className="gallery-top-bar">
                    <div className="gallery-project-icon" aria-hidden="true">
                      {iconNode}
                    </div>
                    {item.metric && (
                      <span className="gallery-metric-pill">{item.metric}</span>
                    )}
                  </div>

                  {/* Hover & Bottom Content Overlay */}
                  <div className="gallery-overlay">
                    <span className="overlay-badge">{item.category}</span>
                    <h3 className="overlay-title">{item.title}</h3>
                    {item.description && (
                      <p className="overlay-description">{item.description}</p>
                    )}
                    <button
                      type="button"
                      className="overlay-btn"
                      aria-label={`View details for ${item.title}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenProject(item);
                      }}
                    >
                      <span>View Case Study</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Built-in Interactive Case Study Modal */}
      {selectedProject && (
        <div
          className="gallery-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="gallery-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-modal-close"
              aria-label="Close case study"
              onClick={() => setSelectedProject(null)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <div className="gallery-modal-media">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
              />
              <div className="gallery-modal-media-badges">
                <span className="overlay-badge">{selectedProject.category}</span>
                {selectedProject.metric && (
                  <span className="gallery-metric-pill">
                    {selectedProject.metric}
                  </span>
                )}
              </div>
            </div>

            <div className="gallery-modal-body">
              <div className="gallery-modal-title-row">
                <div className="gallery-modal-icon" aria-hidden="true">
                  {selectedProject.icon ||
                    PROJECT_ICONS[selectedProject.iconKey] ||
                    PROJECT_ICONS.dashboard}
                </div>
                <h3 id="modal-project-title">{selectedProject.title}</h3>
              </div>

              <p className="gallery-modal-desc">
                {selectedProject.description}
              </p>

              {selectedProject.highlights && (
                <div className="gallery-modal-highlights">
                  <h4>Architecture &amp; Impact Highlights</h4>
                  <ul>
                    {selectedProject.highlights.map((point, idx) => (
                      <li key={idx}>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#7c3aed"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.tech && (
                <div className="gallery-modal-tech">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="modal-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="gallery-modal-actions">
                {selectedProject.link && selectedProject.link !== '#' && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-primary-btn"
                  >
                    <span>Explore Solution</span>
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
                )}
                <button
                  type="button"
                  className="modal-secondary-btn"
                  onClick={() => setSelectedProject(null)}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}