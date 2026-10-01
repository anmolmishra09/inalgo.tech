import React, { useMemo, useState } from "react";
import SEO from "../components/SEO";
import "./CaseStudies.css";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Growth Platform",
    client: "RetailTech Inc.",
    category: "Web Development",
    industry: "E-Commerce",
    icon: "🛍️",
    featured: true,
    description:
      "A scalable commerce platform designed to improve product discovery, checkout performance, and operational visibility.",
    challenge:
      "The existing commerce platform struggled with increasing traffic, slow checkout experiences, and limited visibility into customer behavior.",
    solution:
      "Inalgo redesigned the application architecture, introduced optimized APIs, caching, real-time inventory services, and a responsive React storefront.",
    outcome:
      "The new platform provided a faster shopping experience while giving the business a more scalable foundation for future growth.",
    metrics: [
      { value: "10K+", label: "Daily Transactions" },
      { value: "50%", label: "Faster Checkout" },
      { value: "99.9%", label: "Platform Availability" }
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "AWS"
    ],
    services: [
      "Product Strategy",
      "Web Development",
      "Cloud Architecture",
      "Performance Optimization"
    ],
    duration: "5 Months",
    status: "Completed"
  },

  {
    id: 2,
    title: "Healthcare Management SaaS",
    client: "MediCare Solutions",
    category: "SaaS Development",
    industry: "Healthcare",
    icon: "🏥",
    description:
      "A secure SaaS platform helping healthcare teams manage patients, appointments, records, and operational workflows.",
    challenge:
      "Healthcare teams were relying on disconnected systems that created duplicated work and made patient information difficult to manage.",
    solution:
      "We created a centralized SaaS platform with role-based access, secure APIs, patient workflows, reporting, and cloud infrastructure.",
    outcome:
      "The platform consolidated multiple workflows into one secure environment and improved operational visibility for healthcare teams.",
    metrics: [
      { value: "5K+", label: "Active Users" },
      { value: "40%", label: "Lower Operating Cost" },
      { value: "24/7", label: "System Availability" }
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ],
    services: [
      "SaaS Development",
      "Cloud Infrastructure",
      "API Development",
      "Security Engineering"
    ],
    duration: "7 Months",
    status: "Completed"
  },

  {
    id: 3,
    title: "QuickBite Delivery Platform",
    client: "QuickBite",
    category: "Mobile App",
    industry: "Food & Delivery",
    icon: "🍔",
    description:
      "A cross-platform food delivery experience connecting customers, restaurants, and delivery teams through a unified application.",
    challenge:
      "The client needed a mobile platform that could support customer ordering, restaurant operations, location tracking, and delivery coordination.",
    solution:
      "We developed cross-platform applications with real-time order tracking, location services, notifications, and Firebase-powered infrastructure.",
    outcome:
      "The resulting platform enabled customers and delivery teams to track orders through a connected mobile experience.",
    metrics: [
      { value: "100K+", label: "App Downloads" },
      { value: "4.8★", label: "App Rating" },
      { value: "30 min", label: "Average Delivery" }
    ],
    technologies: [
      "React Native",
      "Firebase",
      "Google Maps API",
      "Node.js"
    ],
    services: [
      "Mobile Development",
      "UX Engineering",
      "Real-Time Systems",
      "API Integration"
    ],
    duration: "6 Months",
    status: "Completed"
  },

  {
    id: 4,
    title: "Enterprise AI Knowledge Platform",
    client: "EnterpriseWorks",
    category: "AI & ML",
    industry: "Enterprise",
    icon: "🤖",
    description:
      "An AI-powered knowledge platform helping enterprise teams search, understand, and interact with internal information.",
    challenge:
      "Employees were spending significant time searching across documents, knowledge bases, and internal support resources.",
    solution:
      "We designed a retrieval-augmented AI platform combining document ingestion, vector search, LLM orchestration, citations, and enterprise permissions.",
    outcome:
      "Employees gained a conversational interface for accessing organizational knowledge while maintaining source traceability.",
    metrics: [
      { value: "70%", label: "Faster Information Discovery" },
      { value: "50K+", label: "Indexed Documents" },
      { value: "<2s", label: "Typical Response" }
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Vector Search",
      "LLMs"
    ],
    services: [
      "AI Engineering",
      "RAG Architecture",
      "Data Engineering",
      "Cloud Deployment"
    ],
    duration: "6 Months",
    status: "In Progress"
  },

  {
    id: 5,
    title: "FinTech Analytics Dashboard",
    client: "FinanceFlow",
    category: "Data & Analytics",
    industry: "Financial Services",
    icon: "📊",
    description:
      "A real-time analytics environment helping business teams monitor financial KPIs and operational performance.",
    challenge:
      "Business teams were manually combining data from multiple systems to create weekly performance reports.",
    solution:
      "We built automated data pipelines, analytical models, KPI dashboards, and role-specific reporting interfaces.",
    outcome:
      "The organization gained centralized visibility into business performance and reduced manual reporting effort.",
    metrics: [
      { value: "80+", label: "Business KPIs" },
      { value: "65%", label: "Less Manual Reporting" },
      { value: "Daily", label: "Automated Refresh" }
    ],
    technologies: [
      "Python",
      "SQL",
      "Power BI",
      "PostgreSQL",
      "Airflow"
    ],
    services: [
      "Data Analytics",
      "Dashboard Development",
      "Data Engineering",
      "Business Intelligence"
    ],
    duration: "4 Months",
    status: "Completed"
  },

  {
    id: 6,
    title: "Cloud Infrastructure Modernization",
    client: "ScaleGrid",
    category: "Cloud & DevOps",
    industry: "Technology",
    icon: "☁️",
    description:
      "A cloud modernization initiative focused on improving deployment speed, reliability, scalability, and observability.",
    challenge:
      "Legacy infrastructure made deployments slow and increased operational overhead for engineering teams.",
    solution:
      "We introduced containerized workloads, automated CI/CD pipelines, infrastructure-as-code, monitoring, and cloud-native services.",
    outcome:
      "The engineering team gained a more repeatable deployment process and a stronger production infrastructure foundation.",
    metrics: [
      { value: "4×", label: "Faster Deployments" },
      { value: "60%", label: "Lower Infrastructure Effort" },
      { value: "99.95%", label: "Service Availability" }
    ],
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions"
    ],
    services: [
      "Cloud Migration",
      "DevOps",
      "Infrastructure as Code",
      "Observability"
    ],
    duration: "5 Months",
    status: "Completed"
  },

  {
    id: 7,
    title: "Smart Logistics Platform",
    client: "LogiTrack",
    category: "Web Development",
    industry: "Logistics",
    icon: "🚚",
    description:
      "A logistics management platform designed to improve shipment visibility, route coordination, and operational workflows.",
    challenge:
      "Operations teams lacked centralized visibility into shipments and relied on multiple disconnected tracking tools.",
    solution:
      "We developed a centralized logistics platform with shipment management, location tracking, dashboards, and notification workflows.",
    outcome:
      "Operations teams gained a unified view of shipments and delivery activity across their network.",
    metrics: [
      { value: "35%", label: "Faster Operations" },
      { value: "12K+", label: "Monthly Shipments" },
      { value: "98%", label: "Tracking Coverage" }
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Maps API"
    ],
    services: [
      "Web Development",
      "System Integration",
      "Real-Time Tracking",
      "Dashboard Development"
    ],
    duration: "6 Months",
    status: "Completed"
  },

  {
    id: 8,
    title: "Cybersecurity Monitoring Console",
    client: "SecureOps",
    category: "Cybersecurity",
    industry: "Cybersecurity",
    icon: "🔐",
    description:
      "A centralized security monitoring interface for analyzing events, alerts, system health, and operational risk.",
    challenge:
      "Security analysts needed a unified interface for monitoring events from multiple infrastructure sources.",
    solution:
      "We developed a responsive security console with event aggregation, alert workflows, filtering, dashboards, and role-based access.",
    outcome:
      "Security teams gained a centralized operational interface for investigating and monitoring security events.",
    metrics: [
      { value: "1M+", label: "Events / Day" },
      { value: "60%", label: "Faster Investigation" },
      { value: "24/7", label: "Monitoring" }
    ],
    technologies: [
      "React",
      "Python",
      "PostgreSQL",
      "Docker",
      "Elastic"
    ],
    services: [
      "Security Engineering",
      "Dashboard Development",
      "Backend Engineering",
      "Infrastructure"
    ],
    duration: "5 Months",
    status: "Completed"
  },

  {
    id: 9,
    title: "Customer Experience Platform",
    client: "ConnectHub",
    category: "Digital Product",
    industry: "Customer Experience",
    icon: "💬",
    description:
      "A customer experience platform bringing communication, support workflows, analytics, and customer data together.",
    challenge:
      "Customer support teams had limited visibility across communication channels and customer interactions.",
    solution:
      "We created a unified customer platform integrating conversations, customer profiles, analytics, automation, and workflow management.",
    outcome:
      "Support teams gained a centralized workspace for managing customer interactions and service operations.",
    metrics: [
      { value: "45%", label: "Faster Resolution" },
      { value: "30K+", label: "Customer Profiles" },
      { value: "35%", label: "Higher Productivity" }
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis"
    ],
    services: [
      "Product Development",
      "UX Engineering",
      "API Development",
      "Automation"
    ],
    duration: "5 Months",
    status: "Completed"
  }
];

const categories = [
  "All",
  "Web Development",
  "SaaS Development",
  "Mobile App",
  "AI & ML",
  "Data & Analytics",
  "Cloud & DevOps",
  "Cybersecurity",
  "Digital Product"
];

function CaseStudies() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [activeStudy, setActiveStudy] = useState(null);

  const filteredStudies = useMemo(() => {
    const query = search.toLowerCase().trim();

    return caseStudies.filter((study) => {
      const matchesCategory =
        category === "All" || study.category === category;

      const searchableText = [
        study.title,
        study.client,
        study.category,
        study.industry,
        study.description,
        ...study.technologies,
        ...study.services
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [search, category]);

  const featuredStudy =
    caseStudies.find((study) => study.featured) || caseStudies[0];

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
  };

  return (
    <>
      <SEO
        title="Case Studies | Inalgo"
        description="Explore Inalgo's case studies showcasing our expertise in web development, mobile apps, AI/ML solutions, cloud infrastructure, and digital products. See how we've helped clients achieve measurable results."
        canonicalUrl="https://inalgo.tech/case-studies"
        openGraph={{
          url: "https://inalgo.tech/case-studies",
          title: "Case Studies | Inalgo",
          description: "Explore Inalgo's case studies showcasing our expertise in web development, mobile apps, AI/ML solutions, cloud infrastructure, and digital products. See how we've helped clients achieve measurable results.",
          image: "https://inalgo.tech/logo.png"
        }}
        twitter={{
          url: "https://inalgo.tech/case-studies",
          title: "Case Studies | Inalgo",
          description: "Explore Inalgo's case studies showcaging our expertise in web development, mobile apps, AI/ML solutions, cloud infrastructure, and digital products. See how we've helped clients achieve measurable results.",
          image: "https://inalgo.tech/logo.png"
        }}
      />
      <div className="case-studies-page">

      {/* ================================================================
          HERO
      ================================================================ */}

      <section className="case-hero">
        <div className="case-hero-grid" />

        <div className="container case-hero-content">
          <span className="hero-eyebrow">
            INALGO CASE STUDIES
          </span>

          <h1>
            Turning complex ideas into
            <span> measurable products.</span>
          </h1>

          <p>
            Explore selected examples of digital products,
            platforms, AI systems, data solutions, and cloud
            infrastructure built with modern engineering practices.
          </p>

          <div className="hero-actions">
            <a href="#case-studies" className="hero-btn primary">
              Explore Projects →
            </a>

            <a href="/contact" className="hero-btn secondary">
              Start a Project
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          METRICS
      ================================================================ */}

      <section className="case-stats">
        <div className="container case-stats-grid">

          <div>
            <strong>09+</strong>
            <span>Featured Projects</span>
          </div>

          <div>
            <strong>08</strong>
            <span>Technology Categories</span>
          </div>

          <div>
            <strong>20+</strong>
            <span>Technology Skills</span>
          </div>

          <div>
            <strong>360°</strong>
            <span>Product Engineering</span>
          </div>

        </div>
      </section>

      {/* ================================================================
          FEATURED PROJECT
      ================================================================ */}

      <section className="featured-case">
        <div className="container">

          <div className="featured-layout">

            <div className="featured-visual">
              <div className="visual-glow" />

              <span className="featured-icon">
                {featuredStudy.icon}
              </span>

              <span className="visual-label">
                FEATURED PROJECT
              </span>

              <div className="visual-metric">
                <strong>{featuredStudy.metrics[0].value}</strong>
                <span>{featuredStudy.metrics[0].label}</span>
              </div>
            </div>

            <div className="featured-content">

              <span className="section-eyebrow">
                {featuredStudy.category}
              </span>

              <h2>{featuredStudy.title}</h2>

              <span className="featured-client">
                {featuredStudy.client} · {featuredStudy.industry}
              </span>

              <p>{featuredStudy.description}</p>

              <div className="featured-metrics">
                {featuredStudy.metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>

              <button
                className="featured-button"
                onClick={() => setActiveStudy(featuredStudy)}
              >
                View Full Case Study →
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* ================================================================
          CASE STUDIES
      ================================================================ */}

      <section
        className="case-studies-content"
        id="case-studies"
      >
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="section-eyebrow">
                SELECTED WORK
              </span>

              <h2>Projects built for impact</h2>
            </div>

            <span className="case-count">
              {filteredStudies.length}{" "}
              {filteredStudies.length === 1
                ? "project"
                : "projects"}
            </span>
          </div>

          {/* SEARCH */}

          <div className="case-controls">

            <div className="case-search">
              <span>⌕</span>

              <input
                type="search"
                value={search}
                placeholder="Search projects, industries, technologies..."
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
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

          {/* FILTER PILLS */}

          <div className="case-pills">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* GRID */}

          {filteredStudies.length > 0 ? (
            <div className="case-grid">

              {filteredStudies.map((study) => (
                <article
                  className="case-card"
                  key={study.id}
                >

                  <div className="case-card-visual">
                    <span>{study.icon}</span>

                    <div>
                      <small>{study.category}</small>
                      <strong>{study.industry}</strong>
                    </div>
                  </div>

                  <div className="case-card-content">

                    <span className="case-client">
                      {study.client}
                    </span>

                    <h3>{study.title}</h3>

                    <p className="case-description">
                      {study.description}
                    </p>

                    {/* Metrics */}

                    <div className="case-metrics">
                      {study.metrics.map((metric) => (
                        <div key={metric.label}>
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}

                    <div className="technology-section">
                      <span>TECHNOLOGY</span>

                      <div className="technology-tags">
                        {study.technologies
                          .slice(0, 4)
                          .map((technology) => (
                            <span key={technology}>
                              {technology}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div className="case-card-footer">

                      <span className="project-status">
                        <i />
                        {study.status}
                      </span>

                      <button
                        onClick={() =>
                          setActiveStudy(study)
                        }
                      >
                        Explore Case Study →
                      </button>

                    </div>

                  </div>

                </article>
              ))}

            </div>
          ) : (
            <div className="case-empty">
              <span>🔎</span>
              <h3>No projects found</h3>

              <p>
                Try a different search term or category.
              </p>

              <button onClick={clearFilters}>
                View All Projects
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ================================================================
          APPROACH
      ================================================================ */}

      <section className="approach-section">
        <div className="container">

          <div className="approach-header">
            <span className="section-eyebrow">
              OUR APPROACH
            </span>

            <h2>
              From challenge
              <span> to outcome.</span>
            </h2>

            <p>
              Every engagement follows a structured process that
              connects business goals with product strategy,
              engineering, and measurable outcomes.
            </p>
          </div>

          <div className="approach-grid">

            <div className="approach-card">
              <span>01</span>
              <h3>Understand</h3>
              <p>
                We understand the business problem, users,
                technical environment, and desired outcomes.
              </p>
            </div>

            <div className="approach-card">
              <span>02</span>
              <h3>Design</h3>
              <p>
                Product architecture and experience are designed
                around real user and business requirements.
              </p>
            </div>

            <div className="approach-card">
              <span>03</span>
              <h3>Build</h3>
              <p>
                Engineering teams build scalable solutions using
                modern technologies and development practices.
              </p>
            </div>

            <div className="approach-card">
              <span>04</span>
              <h3>Measure</h3>
              <p>
                Performance, reliability, adoption, and business
                outcomes are continuously evaluated.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================================
          CTA
      ================================================================ */}

      <section className="case-cta">
        <div className="container">

          <div className="case-cta-inner">

            <div>
              <span className="section-eyebrow">
                HAVE A CHALLENGE?
              </span>

              <h2>
                Let's build your next
                <span> success story.</span>
              </h2>

              <p>
                Tell us what you are trying to build, improve, or
                scale. We will help you identify the right
                technology and delivery approach.
              </p>
            </div>

            <a href="/contact" className="case-cta-button">
              Start a Conversation →
            </a>

          </div>

        </div>
      </section>

      {/* ================================================================
          MODAL
      ================================================================ */}

      {activeStudy && (
        <div
          className="case-modal-overlay"
          onClick={() => setActiveStudy(null)}
        >

          <div
            className="case-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() => setActiveStudy(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="modal-top">

              <div className="modal-icon">
                {activeStudy.icon}
              </div>

              <div>
                <span>{activeStudy.category}</span>
                <h2>{activeStudy.title}</h2>
                <p>
                  {activeStudy.client} ·{" "}
                  {activeStudy.industry}
                </p>
              </div>

            </div>

            <div className="modal-metrics">
              {activeStudy.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="modal-section">
              <span>THE CHALLENGE</span>
              <p>{activeStudy.challenge}</p>
            </div>

            <div className="modal-section">
              <span>OUR SOLUTION</span>
              <p>{activeStudy.solution}</p>
            </div>

            <div className="modal-section">
              <span>OUTCOME</span>
              <p>{activeStudy.outcome}</p>
            </div>

            <div className="modal-project-info">

              <div>
                <span>Project Duration</span>
                <strong>{activeStudy.duration}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{activeStudy.status}</strong>
              </div>

            </div>

            <div className="modal-section">
              <span>TECHNOLOGY STACK</span>

              <div className="modal-tech-tags">
                {activeStudy.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>
            </div>

            <a
              href="/contact"
              className="modal-cta"
            >
              Discuss a Similar Project →
            </a>

          </div>

        </div>
      )}

    </div>
  </>
  );
}

export default CaseStudies;
