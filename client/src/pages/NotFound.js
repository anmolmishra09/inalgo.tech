import React from 'react';
import './NotFound.css';
// SEO Component
import SEO from '../components/SEO';

function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Inalgo"
        description="Sorry, the page you're looking for doesn't exist. Please check the URL or return to the homepage."
        canonicalUrl="https://inalgo.tech/404"
        openGraph={{
          url: "https://inalgo.tech/404",
          title: "404 - Page Not Found | Inalgo",
          description: "Sorry, the page you're looking for doesn't exist. Please check the URL or return to the homepage.",
          image: "https://inalgo.tech/logo.png"
        }}
        twitter={{
          url: "https://inalgo.tech/404",
          title: "404 - Page Not Found | Inalgo",
          description: "Sorry, the page you're looking for doesn't exist. Please check the URL or return to the homepage.",
          image: "https://inalgo.tech/logo.png"
        }}
        schemaOrg={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "404 - Page Not Found | Inalgo",
          "description": "Sorry, the page you're looking for doesn't exist. Please check the URL or return to the homepage.",
          "url": "https://inalgo.tech/404",
          "isAccessibleForFree": true
        }}
      />
      <div className="not-found-page">
        <div className="container">
          <div className="not-found-content">
            <div className="not-found-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12h8"/>
                <path d="M12 8v8"/>
              </svg>
            </div>
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-heading">Page Not Found</h2>
            <p className="not-found-description">
              Sorry, the page you're looking for doesn't exist. Please check the URL or return to the homepage.
            </p>
            <div className="not-found-actions">
              <a href="/" className="btn-primary">Return to Homepage</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;