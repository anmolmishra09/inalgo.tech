import React from 'react';
import PropTypes from 'prop-types';

const SEO = ({
  title,
  description,
  canonicalUrl,
  openGraph,
  twitter,
  schemaOrg,
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={openGraph?.url || canonicalUrl} />
      <meta property="og:title" content={openGraph?.title || title} />
      <meta property="og:description" content={openGraph?.description || description} />
      <meta property="og:image" content={openGraph?.image || `${process.env.PUBLIC_URL}/logo.png`} />
      <meta property="og:site_name" content="Inalgo" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={twitter?.url || canonicalUrl} />
      <meta property="twitter:title" content={twitter?.title || title} />
      <meta property="twitter:description" content={twitter?.description || description} />
      <meta property="twitter:image" content={twitter?.image || `${process.env.PUBLIC_URL}/logo.png`} />

      {/* Schema.org Structured Data (JSON-LD) */}
      {schemaOrg && (
        <script type="application/ld+json">
          {JSON.stringify(schemaOrg)}
        </script>
      )}

      {/* Default Organization Schema */}
      {!schemaOrg && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Inalgo",
            "url": "https://inalgo.tech/",
            "logo": "https://inalgo.tech/logo.png",
            "description": "Inalgo builds production-ready AI infrastructure that helps enterprises automate complex workflows, deploy intelligent agents, and turn knowledge into measurable business outcomes.",
            "sameAs": [
              "https://linkedin.com/company/inalgo",
              "https://twitter.com/inalgo",
              "https://facebook.com/inalgo"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-INALGO-1",
              "contactType": "Customer Service",
              "url": "https://inalgo.tech/contact"
            }
          })}
        </script>
      )}

      {/* Default WebSite Schema */}
      {!schemaOrg && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://inalgo.tech/",
            "name": "Inalgo",
            "description": "Inalgo builds production-ready AI infrastructure that helps enterprises automate complex workflows, deploy intelligent agents, and turn knowledge into measurable business outcomes.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://inalgo.tech/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      )}
    </>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonicalUrl: PropTypes.string.isRequired,
  openGraph: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
  twitter: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default SEO;