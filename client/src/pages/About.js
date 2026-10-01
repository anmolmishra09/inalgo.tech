import React, { useEffect, useRef, useState } from "react";
import "./About.css";
// SEO Component
import SEO from "../components/SEO";

import CTASection from "../components/CTASection";

import Adarsh from "../images/Adarsh.jpg";
import Anmol from "../images/anmol.jpg";
import inalgoVideo from "../images/login.mp4";

function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  const previewVideoRef = useRef(null);
  const modalVideoRef = useRef(null);

  /*
   * --------------------------------------------------------------------------
   * VIDEO PREVIEW
   * --------------------------------------------------------------------------
   */

  const handleMouseEnter = () => {
    if (!previewVideoRef.current) return;

    previewVideoRef.current.play().catch(() => {
      // Browser may reject autoplay. This is intentionally ignored.
    });
  };

  const handleMouseLeave = () => {
    if (!previewVideoRef.current) return;

    previewVideoRef.current.pause();
    previewVideoRef.current.currentTime = 0;
  };

  /*
   * --------------------------------------------------------------------------
   * VIDEO MODAL
   * --------------------------------------------------------------------------
   */

  const openVideo = () => {
    if (previewVideoRef.current) {
      previewVideoRef.current.pause();
      previewVideoRef.current.currentTime = 0;
    }

    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }

    setIsVideoOpen(false);
  };

  /*
   * Prevent background scrolling while modal is open.
   * Also allow ESC to close the modal.
   */

  useEffect(() => {
    if (!isVideoOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);

  /*
   * --------------------------------------------------------------------------
   * SCROLL REVEAL
   * --------------------------------------------------------------------------
   */

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="About Inalgo | Digital Innovation Studio"
        description="Learn about Inalgo's mission, vision, values, and the expert team behind our autonomous AI solutions. Discover how we help enterprises build intelligent systems that drive real business results."
        canonicalUrl="https://inalgo.tech/about"
        openGraph={{
          url: "https://inalgo.tech/about",
          title: "About Inalgo | Digital Innovation Studio",
          description: "Learn about Inalgo's mission, vision, values, and the expert team behind our autonomous AI solutions. Discover how we help enterprises build intelligent systems that drive real business results.",
          image: "https://inalgo.tech/logo.png"
        }}
        twitter={{
          url: "https://inalgo.tech/about",
          title: "About Inalgo | Digital Innovation Studio",
          description: "Learn about Inalgo's mission, vision, values, and the expert team behind our autonomous AI solutions. Discover how we help enterprises build intelligent systems that drive real business results.",
          image: "https://inalgo.tech/logo.png"
        }}
        schemaOrg={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Inalgo | Digital Innovation Studio",
          "description": "Learn about Inalgo's mission, vision, values, and the expert team behind our autonomous AI solutions. Discover how we help enterprises build intelligent systems that drive real business results.",
          "url": "https://inalgo.tech/about",
          "author": {
            "@type": "Organization",
            "name": "Inalgo"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Inalgo",
            "logo": {
              "@type": "ImageObject",
              "url": "https://inalgo.tech/logo.png"
            }
          }
        }}
      />
      <main className="about">

      {/* ====================================================================
          HERO
          ==================================================================== */}

      <section className="about-hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />

        <div className="container hero-container">

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Digital Innovation Studio
          </div>

          <h1>
            Building Digital
            <span> Experiences That Matter.</span>
          </h1>

          <p className="lead">
            Inalgo combines thoughtful design, modern engineering, and
            intelligent technology to transform ideas into scalable digital
            products.
          </p>

          <div className="hero-actions">
            <a href="/contact" className="hero-primary-btn">
              Start a Project
              <span>↗</span>
            </a>

            <button
              type="button"
              className="hero-secondary-btn"
              onClick={openVideo}
            >
              <span className="hero-play-icon">▶</span>
              Watch our story
            </button>
          </div>

          <div className="hero-scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* ====================================================================
          VIDEO / WHAT WE DO
          ==================================================================== */}

      <section className="video-section">
        <div className="container">
          <div className="video-content-wrapper">

            <div
              className="video-card"
              onClick={openVideo}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openVideo();
                }
              }}
              aria-label="Play Inalgo introduction video"
              data-reveal
            >
              <video
                ref={previewVideoRef}
                className="video-image"
                src={inalgoVideo}
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="video-overlay" />

              <div className="video-card-label">
                <span className="video-status-dot" />
                Inalgo / Introduction
              </div>

              <div className="play-button">
                <span className="play-button-inner">
                  <svg
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1.027 3.371c0-1.374 1.512-2.213 2.678-1.484l9.11 5.693a1.75 1.75 0 0 1 0 2.969l-9.11 5.693c-1.166.729-2.678-.11-2.678-1.484z"
                      fill="#fff"
                    />
                  </svg>
                </span>
              </div>

              <div className="video-bottom-label">
                <span>Play introduction</span>
                <span>01:24</span>
              </div>
            </div>

            <div className="video-text-content" data-reveal>

              <span className="section-eyebrow">
                What we do
              </span>

              <h2 className="section-subtitle">
                Turning complex ideas into
                <span> simple digital experiences.</span>
              </h2>

              <div className="gradient-line" />

              <p className="video-paragraph">
                Inalgo helps businesses build faster by transforming ideas,
                designs, and business requirements into fully functional,
                production-ready digital products.
              </p>

              <p className="video-paragraph">
                From SaaS platforms and landing pages to dashboards and
                automation systems, we combine modern engineering with
                thoughtful user experience.
              </p>

              <p className="video-paragraph">
                Our goal is simple: build technology that feels powerful
                without feeling complicated.
              </p>

              <button
                type="button"
                className={`read-more-btn ${
                  isReadMoreOpen ? "is-open" : ""
                }`}
                onClick={() => setIsReadMoreOpen((prev) => !prev)}
                aria-expanded={isReadMoreOpen}
              >
                <span>
                  {isReadMoreOpen ? "Show less" : "Explore how we help"}
                </span>

                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 1 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <div
                className={`read-more-details ${
                  isReadMoreOpen ? "read-more-details--open" : ""
                }`}
                aria-hidden={!isReadMoreOpen}
              >
                <div className="read-more-details-inner">

                  <h3>How We Help</h3>

                  <p>
                    We combine thoughtful design, modern development
                    practices, and scalable technology to create digital
                    products built for long-term growth.
                  </p>

                  <div className="details-list">

                    <div className="detail-item">
                      <span className="detail-number">01</span>

                      <div>
                        <h4>Modern Web Development</h4>

                        <p>
                          Responsive, high-performance websites and
                          applications designed around your business goals.
                        </p>
                      </div>
                    </div>

                    <div className="detail-item">
                      <span className="detail-number">02</span>

                      <div>
                        <h4>UI & UX Solutions</h4>

                        <p>
                          Clean and intuitive interfaces that create
                          consistent experiences across every device.
                        </p>
                      </div>
                    </div>

                    <div className="detail-item">
                      <span className="detail-number">03</span>

                      <div>
                        <h4>Automation & Scalability</h4>

                        <p>
                          Intelligent technology that reduces repetitive work,
                          improves efficiency, and supports future growth.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          STORY
          ==================================================================== */}

      <section className="about-content story-section-wrapper">
        <div className="container">

          <div className="story-section" data-reveal>

            <div className="story-heading">
              <span className="section-eyebrow">
                Our journey
              </span>

              <h2 className="story-title">
                From ideas to
                <span> digital reality.</span>
              </h2>
            </div>

            <div className="story-content">

              <p>
                Inalgo was born from a simple yet powerful vision: to bridge
                the gap between innovative ideas and digital reality. In an
                era where technology evolves at lightning speed, businesses
                often struggle to keep pace with digital transformation.
              </p>

              <p>
                We recognized that traditional development approaches weren't
                meeting the demands of modern businesses. Companies needed a
                partner who could deliver cutting-edge solutions quickly,
                without compromising quality or scalability.
              </p>

              <p>
                Our name, Inalgo, represents "Innovation in Algorithms" — a
                reflection of our commitment to smart technology, intelligent
                automation, and practical problem solving.
              </p>

              <p>
                Today, we work with startups, growing businesses, and teams
                looking to turn ambitious ideas into reliable digital
                experiences.
              </p>

            </div>

            <div className="story-footer">
              <span>Innovation</span>
              <span>Engineering</span>
              <span>Design</span>
              <span>Growth</span>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          MISSION / VISION / VALUES
          ==================================================================== */}

      <section className="about-content principles-section">
        <div className="container">

          <div className="section-heading-centered" data-reveal>
            <span className="section-eyebrow">
              What drives us
            </span>

            <h2>
              Principles behind
              <span> every project.</span>
            </h2>

            <p>
              We believe great technology should be useful, scalable,
              understandable, and built around real human needs.
            </p>
          </div>

          <div className="content-grid">

            <article className="content-block mission-card" data-reveal>
              <div className="content-icon">✦</div>

              <span className="card-index">01</span>

              <h2>Our Mission</h2>

              <p>
                To empower businesses with innovative digital solutions that
                accelerate growth, improve efficiency, and create measurable
                value.
              </p>

              <div className="card-arrow">↗</div>
            </article>

            <article className="content-block vision-card" data-reveal>
              <div className="content-icon">◉</div>

              <span className="card-index">02</span>

              <h2>Our Vision</h2>

              <p>
                To build future-ready digital experiences that help
                organizations use modern technology to achieve meaningful
                business outcomes.
              </p>

              <div className="card-arrow">↗</div>
            </article>

            <article className="content-block values-card" data-reveal>
              <div className="content-icon">◇</div>

              <span className="card-index">03</span>

              <h2>Core Values</h2>

              <ul>
                <li>Innovation</li>
                <li>Excellence</li>
                <li>Integrity</li>
                <li>Collaboration</li>
                <li>Agility</li>
              </ul>

              <div className="card-arrow">↗</div>
            </article>

          </div>
        </div>
      </section>

      {/* ====================================================================
          TEAM
          ==================================================================== */}

      <section className="team-section">
        <div className="container">

          <div className="section-heading-centered" data-reveal>
            <span className="section-eyebrow">
              The people behind Inalgo
            </span>

            <h2>
              Built by people who
              <span> love technology.</span>
            </h2>

            <p>
              Meet the people responsible for turning ideas into products,
              systems, and experiences.
            </p>
          </div>

          {/* Founder */}

          <div className="founder-content team-card" data-reveal>

            <div className="founder-image-wrapper">
              <div className="founder-avatar">

                <div className="avatar-ring" />

                <img
                  src={Anmol}
                  alt="Anmol Mishra - Founder & CEO"
                  className="founder-img"
                />

              </div>

              <span className="team-status">
                Founder
              </span>
            </div>

            <div className="founder-info">

              <span className="team-role-label">
                Founder & CEO
              </span>

              <h3>Anmol Mishra</h3>

              <p className="founder-short">
                Technology, product, and digital innovation.
              </p>

              <div className="founder-bio">

                <p>
                  Anmol is a technologist and entrepreneur focused on creating
                  digital solutions that make complex technology easier to use.
                </p>

                <p>
                  His work combines full-stack development, product thinking,
                  and modern web technologies to help businesses move from
                  concept to production.
                </p>

              </div>

              <div className="founder-social">

                <a
                  href="https://www.linkedin.com/in/anmolmishra09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  aria-label="Anmol Mishra on LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>

                <a
                  href="https://github.com/anmolmishra09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                  aria-label="Anmol Mishra on GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com/anmolmishra09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  aria-label="Anmol Mishra on Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-2.388-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045z" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* CTO */}

          <div className="founder-content team-card cto-card" data-reveal>

            <div className="founder-image-wrapper">
              <div className="founder-avatar cto-avatar">

                <div className="avatar-ring" />

                <img
                  src={Adarsh}
                  alt="Adarsh Mishra - CTO"
                  className="founder-img"
                />

              </div>

              <span className="team-status">
                Technology
              </span>
            </div>

            <div className="founder-info">

              <span className="team-role-label cto-role">
                Chief Technology Officer
              </span>

              <h3>Adarsh Mishra</h3>

              <p className="founder-short">
                Architecture, scalability, and engineering.
              </p>

              <div className="founder-bio">

                <p>
                  Adarsh specializes in scalable systems, backend architecture,
                  system design, and modern cloud-based solutions.
                </p>

                <p>
                  As CTO, he contributes to the technical direction of Inalgo,
                  focusing on secure, reliable, and high-performance digital
                  products.
                </p>

              </div>

              <div className="founder-social">

                <a
                  href="https://www.linkedin.com/in/adarshmishra09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  aria-label="Adarsh Mishra on LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>

                <a
                  href="https://github.com/adarshmishra09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                  aria-label="Adarsh Mishra on GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ====================================================================
          STATS
          ==================================================================== */}

      <section className="stats-section">
        <div className="container">

          <div className="stats-intro" data-reveal>
            <span className="section-eyebrow">
              In numbers
            </span>

            <h2>
              Small team.
              <span> Big ambitions.</span>
            </h2>
          </div>

          <div className="stats-grid">

            <div className="stat-card" data-reveal>
              <span className="stat-index">01</span>
              <h3>100+</h3>
              <p>Projects Completed</p>
              <div className="stat-line" />
            </div>

            <div className="stat-card" data-reveal>
              <span className="stat-index">02</span>
              <h3>50+</h3>
              <p>Happy Clients</p>
              <div className="stat-line" />
            </div>

            <div className="stat-card" data-reveal>
              <span className="stat-index">03</span>
              <h3>2+</h3>
              <p>Years Experience</p>
              <div className="stat-line" />
            </div>

            <div className="stat-card" data-reveal>
              <span className="stat-index">04</span>
              <h3>24/7</h3>
              <p>Support Available</p>
              <div className="stat-line" />
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          CTA
          ==================================================================== */}

      <CTASection
        badge="Ready to Start?"
        title="Let's Build Something"
        titleGradient="Amazing Together"
        description="Partner with Inalgo to bring your vision to life with thoughtful design, modern engineering, and cutting-edge technology."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* ====================================================================
          VIDEO MODAL
          ==================================================================== */}

      {isVideoOpen && (
        <div
          className="video-modal"
          onClick={closeVideo}
          role="dialog"
          aria-modal="true"
          aria-label="Inalgo introduction video"
        >
          <div
            className="video-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="video-close-btn"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="video-wrapper">

              <video
                ref={modalVideoRef}
                src={inalgoVideo}
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>

            </div>

          </div>
        </div>
      )}

      </main>
    </>
  );
}

export default About;
