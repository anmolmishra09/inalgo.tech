import React, { useState, useMemo } from 'react';
import './ImageGallery.css';

// Client/Enterprise Ready Configuration
const GALLERY_DATA = [
  {
    id: 'proj-01',
    title: 'Enterprise Dashboard',
    category: 'Web App',
    description: 'Real-time resource allocation and analytics portal for executive stakeholders.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&h=800&w=800&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 'proj-02',
    title: 'AI Workflows Platform',
    category: 'Automation',
    description: 'End-to-end task automation engine leveraging custom LLM pipelines.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&h=800&w=800&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 'proj-03',
    title: 'Developer Workstations',
    category: 'Infrastructure',
    description: 'Cloud-native development environment orchestration platform.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&h=800&w=800&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 'proj-04',
    title: 'Security Intelligence',
    category: 'Cybersecurity',
    description: 'Threat detection and compliance monitoring suite for financial institutions.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&h=800&w=800&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 'proj-05',
    title: 'Analytics & Insights',
    category: 'Data Science',
    description: 'Predictive modeling platform processing multi-terabyte data streams.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&h=800&w=800&auto=format&fit=crop',
    link: '#',
  },
  {
    id: 'proj-06',
    title: 'Neural Engine Core',
    category: 'Machine Learning',
    description: 'Edge computing runtime for low-latency computer vision applications.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&h=800&w=800&auto=format&fit=crop',
    link: '#',
  },
];

export default function ImageGallery({
  title = "Enterprise Portfolio",
  subtitle = "Case Studies & Solutions",
  description = "Explore our delivered engineering solutions across cloud infrastructure, AI automation, and enterprise security.",
  items = GALLERY_DATA,
  onProjectSelect,
}) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories dynamically for filtering
  const categories = useMemo(() => {
    return ['All', ...new Set(items.map((item) => item.category))];
  }, [items]);

  // Filter items based on active tab
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  return (
    <section className="image-gallery-section" aria-labelledby="gallery-heading">
      <div className="container">
        {/* Header Section */}
        <header className="gallery-header text-center">
          <span className="gallery-tag">{subtitle}</span>
          <h2 id="gallery-heading" className="gallery-title">{title}</h2>
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
          {filteredItems.map((item) => (
            <article key={item.id} className="gallery-item">
              <div className="image-wrapper">
                <img
                  src={item.image}
                  alt={`Screenshot and preview of ${item.title}`}
                  className="gallery-image"
                  loading="lazy"
                  width="800"
                  height="800"
                />
                {/* Hover Overlay */}
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
                    onClick={() => onProjectSelect?.(item)}
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
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}