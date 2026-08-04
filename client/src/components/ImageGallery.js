import React from 'react';
import './ImageGallery.css';

const GALLERY_DATA = [
  {
    id: 1,
    title: "Enterprise Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&h=800&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "AI Workflows Platform",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&h=800&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Developer Workstations",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&h=800&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Security Intelligence",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&h=800&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Analytics & Insights",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&h=800&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Neural Engine Core",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&h=800&w=800&auto=format&fit=crop"
  }
];

function ImageGallery() {
  return (
    <section className="image-gallery-section">
      <div className="container">
        {/* Header Section */}
        <div className="gallery-header text-center">
          <span className="gallery-tag">PORTFOLIO SHOWCASE</span>
          <h2 className="gallery-title">Our Software Solutions</h2>
          <p className="gallery-description">
            Showcasing our latest software projects—innovative solutions built with cutting-edge technology and precision.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="image-gallery">
          {GALLERY_DATA.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="image-wrapper">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="gallery-overlay">
                  <span className="overlay-badge">{item.category}</span>
                  <h3 className="overlay-title">{item.title}</h3>
                  <button className="overlay-btn" aria-label={`View ${item.title}`}>
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;