import React from 'react';
import './ImageGallery.css';

function ImageGallery() {
  const images = [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&h=800&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&h=800&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="image-gallery-section">
      <div className="container">
        <h2 className="gallery-title">Our Software Solutions</h2>
        <p className="gallery-description">
          Showcasing our latest software projects - innovative solutions built with cutting-edge technology and precision.
        </p>
        <div className="image-gallery">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img 
                src={image}
                alt={`Gallery item ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;
