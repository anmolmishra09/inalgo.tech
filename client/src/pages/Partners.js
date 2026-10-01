import React, { useMemo, useState } from "react";
import SEO from "../components/SEO";
import "./Partners.css";

const partners = [
  {
    id: 1,
    name: "TechCorp Global",
    category: "Technology",
    type: "Technology Partner",
    description:
      "Technology and cloud infrastructure collaboration focused on scalable enterprise applications and modern digital platforms.",
    logo: "🌐",
    color: "blue",
    services: [
      "Cloud Services",
      "Enterprise Software",
      "AI Solutions",
      "API Integration"
    ],
    projects: "Enterprise Platforms",
    status: "Strategic"
  },
  {
    id: 2,
    name: "DesignHub Studio",
    category: "Design",
    type: "Creative Partner",
    description:
      "Design collaboration focused on user experience, product interfaces, digital branding, and high-quality interactive experiences.",
    logo: "🎨",
    color: "purple",
    services: [
      "UI/UX Design",
      "Branding",
      "Prototyping",
      "Design Systems"
    ],
    projects: "Digital Experiences",
    status: "Active"
  },
  {
    id: 3,
    name: "DataFlow Analytics",
    category: "Data & AI",
    type: "Data Partner",
    description:
      "Data and analytics collaboration helping organizations transform operational data into useful business intelligence.",
    logo: "📊",
    color: "cyan",
    services: [
      "Data Analytics",
      "Business Intelligence",
      "Machine Learning",
      "Data Engineering"
    ],
    projects: "Data Intelligence",
    status: "Strategic"
  },
  {
    id: 4,
    name: "SecureNet Systems",
    category: "Security",
    type: "Security Partner",
    description:
      "Security collaboration focused on application security, compliance, identity, risk management, and security assessments.",
    logo: "🔒",
    color: "red",
    services: [
      "Cybersecurity",
      "Compliance",
      "Security Audits",
      "Identity Management"
    ],
    projects: "Secure Infrastructure",
    status: "Active"
  },
  {
    id: 5,
    name: "CloudScale Infrastructure",
    category: "Cloud",
    type: "Infrastructure Partner",
    description:
      "Cloud and DevOps collaboration designed to help businesses modernize infrastructure and operate reliable production systems.",
    logo: "☁️",
    color: "sky",
    services: [
      "Cloud Migration",
      "DevOps",
      "Infrastructure Management",
      "Cloud Optimization"
    ],
    projects: "Cloud Operations",
    status: "Strategic"
  },
  {
    id: 6,
    name: "MobileFirst Labs",
    category: "Mobile",
    type: "Mobile Partner",
    description:
      "Mobile development collaboration for modern cross-platform applications and connected digital experiences.",
    logo: "📱",
    color: "green",
    services: [
      "iOS Development",
      "Android Development",
      "React Native",
      "Mobile UX"
    ],
    projects: "Mobile Applications",
    status: "Active"
  },
  {
    id: 7,
    name: "AI Nexus Labs",
    category: "Data & AI",
    type: "AI Partner",
    description:
      "AI-focused collaboration covering intelligent automation, machine learning systems, enterprise AI, and knowledge solutions.",
    logo: "🤖",
    color: "indigo",
    services: [
      "Generative AI",
      "Machine Learning",
      "RAG Systems",
      "AI Automation"
    ],
    projects: "AI Applications",
    status: "Strategic"
  },
  {
    id: 8,
    name: "DevOpsWorks",
    category: "Cloud",
    type: "Engineering Partner",
    description:
      "Engineering partnership focused on continuous delivery, infrastructure automation, observability, and production reliability.",
    logo: "⚙️",
    color: "orange",
    services: [
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Observability"
    ],
    projects: "Production Engineering",
    status: "Active"
  },
  {
    id: 9,
    name: "Digital Commerce Group",
    category: "Technology",
    type: "Commerce Partner",
    description:
      "Digital commerce collaboration supporting e-commerce platforms, integrations, customer experiences, and business automation.",
    logo: "🛒",
    color: "pink",
    services: [
      "E-Commerce",
      "Payment Integration",
      "CRM Integration",
      "Automation"
    ],
    projects: "Commerce Platforms",
    status: "Active"
  }
];

const categories = [
  "All",
  "Technology",
  "Design",
  "Data & AI",
  "Security",
  "Cloud",
  "Mobile"
];

const partnershipBenefits = [
  {
    icon: "🚀",
    title: "Faster Delivery",
    text:
      "Combine specialist expertise with Inalgo engineering capabilities to accelerate project delivery."
  },
  {
    icon: "🧠",
    title: "Specialist Expertise",
    text:
      "Access focused knowledge across AI, cloud, security, design, data, and application development."
  },
  {
    icon: "🔗",
    title: "Integrated Solutions",
    text:
      "Bring complementary technologies and services together to solve complex client requirements."
  },
  {
    icon: "📈",
    title: "Business Growth",
    text:
      "Create new opportunities through collaborative solutions, capabilities, and technology expertise."
  }
];

function Partners() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState(null);
  const [activePartner, setActivePartner] = useState(null);

  const filteredPartners = useMemo(() => {
    const query = search.trim().toLowerCase();

    return partners.filter((partner) => {
      const matchesCategory =
        category === "All" || partner.category === category;

      const searchableContent = [
        partner.name,
        partner.category,
        partner.type,
        partner.description,
        partner.projects,
        ...partner.services
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableContent.includes(query);
    });
  }, [search, category]);

  const toggleExpanded = (id) => {
    setExpanded((previous) => (previous === id ? null : id));
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
  };

  return (
    <>
      <SEO
        title="Partners | Inalgo"
        description="Inalgo's partner network includes technology, design, cloud, security, data, and engineering specialists. We collaborate to deliver complete digital solutions for ambitious businesses."
        canonicalUrl="https://inalgo.tech/partners"
        openGraph={{
          url: "https://inalgo.tech/partners",
          title: "Partners | Inalgo",
          description: "Inalgo's partner network includes technology, design, cloud, security, data, and engineering specialists. We collaborate to deliver complete digital solutions for ambitious businesses.",
          image: "https://inalgo.tech/logo.png"
        }}
        twitter={{
          url: "https://inalgo.tech/partners",
          title: "Partners | Inalgo",
          description: "Inalgo's partner network includes technology, design, cloud, security, data, and engineering specialists. We collaborate to deliver complete digital solutions for ambitious businesses.",
          image: "https://inalgo.tech/logo.png"
        }}
      />
      <div className="partners-page">

      {/* ================================================================
          HERO
      ================================================================ */}

      <section className="partners-hero">
        <div className="hero-grid" />

        <div className="container partners-hero-content">
          <span className="hero-eyebrow">
            THE INALGO PARTNER NETWORK
          </span>

          <h1>
            Better technology,
            <span> built together.</span>
          </h1>

          <p>
            We collaborate with technology, design, cloud, security,
            data, and engineering specialists to deliver complete
            digital solutions for ambitious businesses.
          </p>

          <div className="hero-actions">
            <a href="#partners" className="hero-button primary">
              Explore Partners →
            </a>

            <a href="/contact" className="hero-button secondary">
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          STATS
      ================================================================ */}

      <section className="partner-stats">
        <div className="container stats-grid">
          <div className="stat-item">
            <strong>09+</strong>
            <span>Partner Profiles</span>
          </div>

          <div className="stat-item">
            <strong>06</strong>
            <span>Technology Areas</span>
          </div>

          <div className="stat-item">
            <strong>20+</strong>
            <span>Service Capabilities</span>
          </div>

          <div className="stat-item">
            <strong>01</strong>
            <span>Connected Ecosystem</span>
          </div>
        </div>
      </section>

      {/* ================================================================
          INTRO
      ================================================================ */}

      <section className="partners-intro-section">
        <div className="container intro-grid">
          <div className="intro-label">
            <span>01</span>
            <p>OUR ECOSYSTEM</p>
          </div>

          <div className="intro-content">
            <span className="section-eyebrow">
              Strategic collaboration
            </span>

            <h2>
              Strong products are built through
              <span> strong collaboration.</span>
            </h2>

            <p>
              No single team has every capability required to solve
              today's most complex technology challenges. Our partner
              ecosystem brings complementary expertise together so
              clients can access broader capabilities through one
              connected delivery experience.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          FILTERS + PARTNERS
      ================================================================ */}

      <section className="partners-content" id="partners">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                Partner directory
              </span>

              <h2>Explore our capabilities</h2>
            </div>

            <span className="partner-count">
              {filteredPartners.length}{" "}
              {filteredPartners.length === 1
                ? "partner"
                : "partners"}
            </span>
          </div>

          <div className="partner-controls">

            <div className="partner-search">
              <span>⌕</span>

              <input
                type="search"
                placeholder="Search partners, services..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />

              {search && (
                <button
                  className="clear-button"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}
            </div>

            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="partner-pills">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item ? "active" : ""
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {filteredPartners.length > 0 ? (
            <div className="partners-grid">

              {filteredPartners.map((partner) => {
                const isExpanded = expanded === partner.id;

                return (
                  <article
                    key={partner.id}
                    className={`partner-card ${partner.color}`}
                  >

                    <div className="partner-card-top">

                      <div className="partner-logo">
                        {partner.logo}
                      </div>

                      <span className="partner-status">
                        <i />
                        {partner.status}
                      </span>

                    </div>

                    <span className="partner-type">
                      {partner.type}
                    </span>

                    <h3>{partner.name}</h3>

                    <p className="partner-description">
                      {partner.description}
                    </p>

                    <div className="partner-project">
                      <span>Focus</span>
                      <strong>{partner.projects}</strong>
                    </div>

                    <div className="partner-services">
                      <span className="services-label">
                        CAPABILITIES
                      </span>

                      <div className="service-tags">
                        {partner.services.map((service) => (
                          <span key={service}>
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="partner-details">
                        <div>
                          <span>Partnership type</span>
                          <strong>{partner.type}</strong>
                        </div>

                        <div>
                          <span>Primary category</span>
                          <strong>{partner.category}</strong>
                        </div>

                        <div>
                          <span>Delivery focus</span>
                          <strong>{partner.projects}</strong>
                        </div>
                      </div>
                    )}

                    <div className="partner-card-footer">

                      <button
                        className="details-button"
                        onClick={() =>
                          toggleExpanded(partner.id)
                        }
                      >
                        {isExpanded
                          ? "Hide Details ↑"
                          : "View Details →"}
                      </button>

                      <button
                        className="connect-button"
                        onClick={() =>
                          setActivePartner(partner)
                        }
                      >
                        Discuss
                      </button>

                    </div>

                  </article>
                );
              })}

            </div>
          ) : (
            <div className="partner-empty">
              <div>🔎</div>
              <h3>No partners found</h3>
              <p>
                Try another search term or select a different
                category.
              </p>

              <button onClick={clearFilters}>
                View All Partners
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================================================================
          BENEFITS
      ================================================================ */}

      <section className="benefits-section">
        <div className="container">

          <div className="section-heading centered">
            <span className="section-eyebrow">
              Why partnerships matter
            </span>

            <h2>Built for better outcomes</h2>

            <p>
              Our partnership model is designed to combine
              capabilities without creating unnecessary complexity
              for clients.
            </p>
          </div>

          <div className="benefits-grid">
            {partnershipBenefits.map((benefit) => (
              <div className="benefit-card" key={benefit.title}>
                <div className="benefit-icon">
                  {benefit.icon}
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================================
          PARTNERSHIP PROCESS
      ================================================================ */}

      <section className="process-section">
        <div className="container">

          <div className="process-layout">

            <div className="process-heading">
              <span className="section-eyebrow">
                PARTNERSHIP PROCESS
              </span>

              <h2>
                From conversation
                <span> to collaboration.</span>
              </h2>

              <p>
                We keep the partnership process straightforward,
                transparent, and focused on creating measurable
                value.
              </p>
            </div>

            <div className="process-list">

              <div className="process-item">
                <span>01</span>
                <div>
                  <h3>Connect</h3>
                  <p>
                    Tell us about your capabilities and the type
                    of collaboration you are looking for.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>02</span>
                <div>
                  <h3>Align</h3>
                  <p>
                    We identify complementary capabilities,
                    markets, services, and opportunities.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>03</span>
                <div>
                  <h3>Collaborate</h3>
                  <p>
                    Teams work together on suitable client
                    projects and technology opportunities.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <span>04</span>
                <div>
                  <h3>Grow</h3>
                  <p>
                    Successful collaboration can develop into
                    long-term strategic relationships.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          CTA
      ================================================================ */}

      <section className="partner-cta">
        <div className="container">

          <div className="cta-inner">

            <div>
              <span className="section-eyebrow">
                JOIN THE NETWORK
              </span>

              <h2>
                Have a capability
                <span> worth sharing?</span>
              </h2>

              <p>
                If your company brings valuable technology,
                expertise, or services to the table, let's explore
                how we can work together.
              </p>
            </div>

            <div className="cta-actions">
              <a href="/contact" className="cta-primary">
                Start a Conversation →
              </a>

              <a href="mailto:inaialgo@gmail.com" className="cta-secondary">
                inaialgo@gmail.com
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================================
          PARTNER MODAL
      ================================================================ */}

      {activePartner && (
        <div
          className="partner-modal-overlay"
          onClick={() => setActivePartner(null)}
        >
          <div
            className="partner-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() => setActivePartner(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="modal-logo">
              {activePartner.logo}
            </div>

            <span className="partner-type">
              {activePartner.type}
            </span>

            <h2>{activePartner.name}</h2>

            <p>
              {activePartner.description}
            </p>

            <div className="modal-services">
              {activePartner.services.map((service) => (
                <span key={service}>
                  {service}
                </span>
              ))}
            </div>

            <a
              href="/contact"
              className="modal-contact"
            >
              Discuss a Collaboration →
            </a>

          </div>
        </div>
      )}

    </div>
    </>
    );
}

export default Partners;
