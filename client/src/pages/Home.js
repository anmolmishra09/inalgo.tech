import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./Home.css";
// SEO Component
import SEO from "../components/SEO";

// Existing Inalgo components
import CTASection from "../components/CTASection";
import FAQ from "../components/FAQ";
import Portfolio from "../components/Portfolio";
import TargetClients from "../components/TargetClients";
import HubVisualization from "../components/HubVisualization";
import ImageGallery from "../components/ImageGallery";
import Newsletter from "../components/Newsletter";
import GlassBorderButton from "../components/GlassBorderButton";
import AppPromotion from "../components/AppPromotion";
import TeamIntro from "../components/TeamIntro";
import MarqueeTestimonials from "../components/MarqueeTestimonials";
import LogoMarquee from "../components/LogoMarquee";

// Assets
import heroVideo from "../images/download.mp4";
import heroImage from "../images/ageni.jpg";


const ROTATING_TERMS = [
  "intelligent AI agents",
  "autonomous workflows",
  "enterprise RAG systems",
  "multimodal AI avatars",
  "zero-infra auto-scaling",
];

const NAV_SECTIONS = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "visual-system",
    label: "Platform",
  },
  {
    id: "demo",
    label: "Demo",
  },
  {
    id: "expertise",
    label: "Capabilities",
  },
  {
    id: "clients",
    label: "Clients",
  },
  {
    id: "portfolio",
    label: "Portfolio",
  },
  {
    id: "process",
    label: "Process",
  },
  {
    id: "testimonials",
    label: "Testimonials",
  },
  {
    id: "faq",
    label: "FAQ",
  },
  {
    id: "contact",
    label: "Contact",
  },
];


function Home() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const assistantButtonRef = useRef(null);

  const [activeTerm, setActiveTerm] = useState(0);
  const [termVisible, setTermVisible] = useState(true);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const [isVideoMuted, setIsVideoMuted] = useState(true);

  /*
   * ==========================================================================
   * ROTATING HERO TEXT
   * ==========================================================================
   */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTermVisible(false);

      window.setTimeout(() => {
        setActiveTerm((current) => (
          (current + 1) % ROTATING_TERMS.length
        ));

        setTermVisible(true);
      }, 300);
    }, 3200);

    return () => {
      window.clearInterval(interval);
    };
  }, []);


  /*
   * ==========================================================================
   * SCROLL PROGRESS
   *
   * Gives the user a subtle indication of how much of the page they have
   * explored.
   * ==========================================================================
   */

  useEffect(() => {
    const updateScrollProgress = () => {
      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress =
        (window.scrollY / documentHeight) * 100;

      setScrollProgress(
        Math.min(100, Math.max(0, progress))
      );
    };

    updateScrollProgress();

    window.addEventListener(
      "scroll",
      updateScrollProgress,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateScrollProgress
      );
    };
  }, []);


  /*
   * ==========================================================================
   * ACTIVE SECTION TRACKING
   *
   * Highlights the section currently visible to the user.
   * This also makes the page easier to navigate once a sticky navigation
   * component is added later.
   * ==========================================================================
   */

  useEffect(() => {
    const sections = NAV_SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleEntries.length) {
          setActiveSection(
            visibleEntries[0].target.id
          );
        }
      },
      {
        threshold: [
          0.1,
          0.25,
          0.5,
          0.75,
        ],
        rootMargin:
          "-15% 0px -55% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  /*
   * ==========================================================================
   * SCROLL REVEAL
   * ==========================================================================
   */

  useEffect(() => {
    const revealElements =
      document.querySelectorAll(".reveal");

    if (!revealElements.length) {
      return undefined;
    }

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) {
      revealElements.forEach((element) => {
        element.classList.add("revealed");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("revealed");

          observer.unobserve(
            entry.target
          );
        });
      },
      {
        threshold: 0.12,
        rootMargin:
          "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  /*
   * ==========================================================================
   * STAGGERED CARD REVEAL
   * ==========================================================================
   */

  useEffect(() => {
    const groups = [
      ".expertise-card",
      ".process-step",
      ".testimonial-card",
    ];

    groups.forEach((selector) => {
      const cards =
        document.querySelectorAll(selector);

      cards.forEach((card, index) => {
        const delay =
          Math.min(index * 90, 500);

        card.style.setProperty(
          "--card-delay",
          `${delay}ms`
        );
      });
    });
  }, []);


  /*
   * ==========================================================================
   * HERO MOUSE GLOW
   * ==========================================================================
   */

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return undefined;
    }

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      mediaQuery.matches ||
      window.matchMedia(
        "(hover: none)"
      ).matches
    ) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      const rect =
        hero.getBoundingClientRect();

      if (
        !rect.width ||
        !rect.height
      ) {
        return;
      }

      const x =
        ((event.clientX - rect.left) /
          rect.width) *
        100;

      const y =
        ((event.clientY - rect.top) /
          rect.height) *
        100;

      hero.style.setProperty(
        "--mouse-x",
        `${x}%`
      );

      hero.style.setProperty(
        "--mouse-y",
        `${y}%`
      );
    };

    const handleMouseLeave = () => {
      hero.style.setProperty(
        "--mouse-x",
        "50%"
      );

      hero.style.setProperty(
        "--mouse-y",
        "50%"
      );
    };

    hero.addEventListener(
      "mousemove",
      handleMouseMove,
      {
        passive: true,
      }
    );

    hero.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      hero.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      hero.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);


  /*
   * ==========================================================================
   * VIDEO HOVER PLAY
   *
   * Desktop:
   *   mouse enters -> play
   *   mouse leaves -> pause
   *
   * Mobile:
   *   native controls remain available.
   * ==========================================================================
   */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    const isTouchDevice =
      window.matchMedia(
        "(hover: none), (pointer: coarse)"
      ).matches;

    if (isTouchDevice) {
      return undefined;
    }

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Browser restrictions are handled silently.
      }
    };

    const pauseVideo = () => {
      video.pause();
    };

    const container =
      video.closest(".video-container");

    if (!container) {
      return undefined;
    }

    container.addEventListener(
      "mouseenter",
      playVideo
    );

    container.addEventListener(
      "mouseleave",
      pauseVideo
    );

    return () => {
      container.removeEventListener(
        "mouseenter",
        playVideo
      );

      container.removeEventListener(
        "mouseleave",
        pauseVideo
      );
    };
  }, []);


  /*
   * ==========================================================================
   * VIDEO STATE SYNCHRONIZATION
   * ==========================================================================
   */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    const handleVolumeChange = () => {
      setIsVideoMuted(video.muted);
    };

    video.addEventListener(
      "volumechange",
      handleVolumeChange
    );

    return () => {
      video.removeEventListener(
        "volumechange",
        handleVolumeChange
      );
    };
  }, []);


  /*
   * ==========================================================================
   * VIDEO ACCESSIBLE CONTROLS
   * ==========================================================================
   */

  const toggleVideoPlayback = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch {
      // Browser restrictions are handled silently.
    }
  };



  /*
   * ==========================================================================
   * SMOOTH INTERNAL ANCHOR SCROLLING
   * ==========================================================================
   */

  useEffect(() => {
    const handleAnchorClick = (event) => {
      const link =
        event.target.closest(
          'a[href^="#"]'
        );

      if (!link) {
        return;
      }

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      let target = null;

      try {
        target =
          document.querySelector(
            targetId
          );
      } catch {
        return;
      }

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
        block: "start",
      });

      /*
       * Keep browser history useful without causing a full reload.
       */
      if (
        window.history &&
        window.history.replaceState
      ) {
        window.history.replaceState(
          null,
          "",
          targetId
        );
      }
    };

    document.addEventListener(
      "click",
      handleAnchorClick
    );

    return () => {
      document.removeEventListener(
        "click",
        handleAnchorClick
      );
    };
  }, []);


  /*
   * ==========================================================================
   * KEYBOARD SUPPORT
   *
   * Allows keyboard users to quickly focus the AI assistant.
   * ==========================================================================
   */

  useEffect(() => {
    const handleKeyDown = (event) => {
      /*
       * Alt + A opens/focuses the AI assistant trigger.
       */
      if (
        event.altKey &&
        event.key.toLowerCase() === "a"
      ) {
        event.preventDefault();

        assistantButtonRef.current?.focus();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);


  /*
   * ==========================================================================
   * AI ASSISTANT
   *
   * The button is intentionally kept compatible with the existing design.
   *
   * If a real chatbot/modal is connected later, replace the body of this
   * function with the assistant-opening logic.
   * ==========================================================================
   */

  const handleAssistantOpen = () => {
    const assistantEvent =
      new CustomEvent(
        "inalgo:open-assistant"
      );

    window.dispatchEvent(
      assistantEvent
    );
  };


  /*
   * ==========================================================================
   * BACK TO TOP
   * ==========================================================================
   */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth",
    });
  };


  return (
    <>
      <SEO
        title="Inalgo | Autonomous AI Solutions for Enterprise"
        description="Inalgo builds production-ready AI infrastructure that helps enterprises automate complex workflows, deploy intelligent agents, and turn knowledge into measurable business outcomes."
        canonicalUrl="https://inalgo.tech/"
        openGraph={{
          url: "https://inalgo.tech/",
          title: "Inalgo | Autonomous AI Solutions for Enterprise",
          description: "Inalgo builds production-ready AI infrastructure that helps enterprises automate complex workflows, deploy intelligent agents, and turn knowledge into measurable business outcomes.",
          image: "https://inalgo.tech/logo.png"
        }}
        twitter={{
          url: "https://inalgo.tech/",
          title: "Inalgo | Autonomous AI Solutions for Enterprise",
          description: "Inalgo builds production-ready AI infrastructure that helps enterprises automate complex workflows, deploy intelligent agents, and turn knowledge into measurable business outcomes.",
          image: "https://inalgo.tech/logo.png"
        }}
        schemaOrg={{
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
          },
          "founder": {
            "@type": "Person",
            "name": "Inalgo Founding Team"
          },
          "foundingDate": "2023",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 AI Innovation Drive",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94105",
            "addressCountry": "US"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Inalgo Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Custom web development services for enterprise clients"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile Apps",
                  "description": "Custom mobile application development for iOS and Android"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SaaS Solutions",
                  "description": "Scalable software-as-a-service platforms"
                }
              }
            ]
          }
        }}
      />
      <main className="home-page">

      {/* =====================================================================
          SCROLL PROGRESS
      ====================================================================== */}

      <div
        className="page-scroll-progress"
        aria-hidden="true"
      >
        <span
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>


      {/* =====================================================================
          HERO
      ====================================================================== */}

      <section
        ref={heroRef}
        className="hero-section"
        id="home"
      >

        <div
          className="hero-mouse-glow"
          aria-hidden="true"
        />

        <div
          className="hero-grid"
          aria-hidden="true"
        />

        <div
          className="hero-ray-burst"
          aria-hidden="true"
        />

        <div
          className="hero-burst-center"
          aria-hidden="true"
        />

        <div
          className="hero-glow glow-1"
          aria-hidden="true"
        />

        <div
          className="hero-glow glow-2"
          aria-hidden="true"
        />

        <div
          className="hero-orbit orbit-one"
          aria-hidden="true"
        />

        <div
          className="hero-orbit orbit-two"
          aria-hidden="true"
        />

        <div className="container hero-container">

          <div className="hero-content">

  <div
    className="hero-live-status"
    aria-label="AI platform status"
  >
    <span
      className="status-dot"
      aria-hidden="true"
    />

    <span>
      AI SYSTEMS ONLINE
    </span>

    <span
      className="status-divider"
      aria-hidden="true"
    />

    <span>
      FULLY OPERATIONAL
    </span>
  </div>

  <div className="hero-badge">

    <span
      className="sparkle"
      aria-hidden="true"
    >
      ✦
    </span>

    <span>
      Autonomous AI Agents
    </span>

    <span className="badge-version">
      NEXT-GEN
    </span>

  </div>




            <h1 className="hero-title">

              Build the future with{" "}

              <span
                className={`hero-highlight ${
                  termVisible
                    ? "is-visible"
                    : "is-hidden"
                }`}
                aria-live="polite"
              >
                {ROTATING_TERMS[activeTerm]}
              </span>

            </h1>


            <p className="hero-subtitle">
              Inalgo builds production-ready AI
              infrastructure that helps enterprises
              automate complex workflows, deploy
              intelligent agents, and turn knowledge
              into measurable business outcomes.
            </p>


            <div className="hero-buttons">

              <a
                href="https://transcript-ai-8.preview.emergentagent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-primary-link"
              >
                <GlassBorderButton>
                  Start free trial ⚡
                </GlassBorderButton>
              </a>

              <a
                href="#expertise"
                className="btn-secondary"
              >
                Explore capabilities

                <span aria-hidden="true">
                  →
                </span>
              </a>

            </div>


            <div
              className="hero-proof"
              aria-label="Inalgo platform highlights"
            >

              <div className="proof-item">
                <strong>
                  24/7
                </strong>

                <span>
                  Autonomous
                </span>
              </div>

              <div
                className="proof-line"
                aria-hidden="true"
              />

              <div className="proof-item">
                <strong>
                  Enterprise
                </strong>

                <span>
                  Ready
                </span>
              </div>

              <div
                className="proof-line"
                aria-hidden="true"
              />

              <div className="proof-item">
                <strong>
                  AI Native
                </strong>

                <span>
                  Infrastructure
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================================
          LOGO MARQUEE
      ====================================================================== */}

      <section className="reveal">
        <LogoMarquee />
      </section>


      {/* =====================================================================
          VISUAL SYSTEM
      ====================================================================== */}

      <section
        id="visual-system"
        className="visual-system-section reveal"
      >
        <div className="container">

          <div className="section-header text-center">

            <div className="section-tag">
              <span
                className="status-dot"
                aria-hidden="true"
              />
              Real-time runtime engine
            </div>

            <h2 className="section-title">
              AI systems designed
              <br />
              for real-world operations.
            </h2>

            <p className="section-subtitle">
              Connect models, agents, data, tools,
              and enterprise workflows inside one
              intelligent execution layer.
            </p>

          </div>

          <HubVisualization />

        </div>
      </section>


      {/* =====================================================================
          VIDEO
      ====================================================================== */}

     <section
  id="demo"
  className="video-section reveal"
>
  <div className="container">

    <div className="section-header text-center">

      <div className="section-tag">
        Product intelligence
      </div>

      <h2 className="section-title">
        See intelligence
        <br />
        in motion.
      </h2>

      <p className="section-subtitle">
        Experience how autonomous agents,
        enterprise knowledge, and AI workflows
        work together.
      </p>

    </div>

    <div className="video-container">
      <video
        ref={videoRef}
        className="hover-video"
        src={heroVideo}
        poster={heroImage}
        autoPlay
        muted={isVideoMuted}
        loop
        playsInline
        preload="auto"
        tabIndex={0}
        aria-label="Inalgo AI infrastructure demonstration. Press Enter or Space to play or pause."
        onClick={toggleVideoPlayback}
        onKeyDown={(event) => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            toggleVideoPlayback();
          }
        }}
      />
    </div>

  </div>
</section>



      {/* =====================================================================
    EXPERTISE
====================================================================== */}

<section id="expertise" className="expertise-section reveal">
  <div className="container">
    <div className="section-header text-center">
      <div className="section-tag">
        <span className="status-dot" aria-hidden="true" />
        Core capabilities
      </div>

      <h2 className="section-title">
        Intelligence at
        <br />
        every layer.
      </h2>

      <p className="section-subtitle">
        From enterprise LLMs to autonomous multi-agent systems, Inalgo provides
        the infrastructure required to move AI from experimentation into
        production.
      </p>
    </div>

    <div className="expertise-grid">
      {/* 01: Enterprise LLMs & Fine-Tuning (Brain / CPU Neural Architecture) */}
      <article className="expertise-card reveal">
        <div className="card-glow" />

        <div className="expertise-card-top">
          <span className="expertise-label">FOUNDATION</span>
          <span className="expertise-number">01</span>
        </div>

        <div className="expertise-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
        </div>

        <h3>Enterprise LLMs &amp; Fine-Tuning</h3>

        <p>
          Build domain-aware language systems optimized for enterprise
          knowledge, workflows, and business requirements.
        </p>

        <div className="card-arrow">
          <span>Explore</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </article>

      {/* 02: Autonomous Multi-Agent Networks (Connected Network Nodes) */}
      <article className="expertise-card reveal">
        <div className="card-glow" />

        <div className="expertise-card-top">
          <span className="expertise-label">ORCHESTRATION</span>
          <span className="expertise-number">02</span>
        </div>

        <div className="expertise-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="5" cy="18" r="2.5" />
            <circle cx="19" cy="18" r="2.5" />
            <path d="M10.7 7.1 6.3 15.9" />
            <path d="M13.3 7.1 17.7 15.9" />
            <path d="M7.5 18h9" />
          </svg>
        </div>

        <h3>Autonomous Multi-Agent Networks</h3>

        <p>
          Coordinate specialized AI agents that reason, collaborate, execute
          tools, and complete complex tasks autonomously.
        </p>

        <div className="card-arrow">
          <span>Explore</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </article>

      {/* 03: Multimodal Avatars & Voice AI (Audio Waveform / Voice) */}
      <article className="expertise-card reveal">
        <div className="card-glow" />

        <div className="expertise-card-top">
          <span className="expertise-label">MULTIMODAL</span>
          <span className="expertise-number">03</span>
        </div>

        <div className="expertise-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 10v3" />
            <path d="M6 6v11" />
            <path d="M10 3v18" />
            <path d="M14 8v7" />
            <path d="M18 5v13" />
            <path d="M22 10v3" />
          </svg>
        </div>

        <h3>Multimodal Avatars &amp; Voice AI</h3>

        <p>
          Create natural interfaces combining voice, vision, conversational AI,
          and real-time digital experiences.
        </p>

        <div className="card-arrow">
          <span>Explore</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </article>

      {/* 04: Enterprise MLOps & RAG Infrastructure (Stacked Data Layers) */}
      <article className="expertise-card reveal">
        <div className="card-glow" />

        <div className="expertise-card-top">
          <span className="expertise-label">INFRASTRUCTURE</span>
          <span className="expertise-number">04</span>
        </div>

        <div className="expertise-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
            <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
            <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
          </svg>
        </div>

        <h3>Enterprise MLOps &amp; RAG Infrastructure</h3>

        <p>
          Connect enterprise data with reliable retrieval, evaluation,
          monitoring, and scalable AI deployment infrastructure.
        </p>

        <div className="card-arrow">
          <span>Explore</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </article>

      {/* 05: Computer Vision Intelligence (Optical Viewfinder / Scan Eye) */}
      <article className="expertise-card reveal">
        <div className="card-glow" />

        <div className="expertise-card-top">
          <span className="expertise-label">VISION</span>
          <span className="expertise-number">05</span>
        </div>

        <div className="expertise-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            <circle cx="12" cy="12" r="3" />
            <path d="M7 12c1.2-2.4 3.1-3.6 5-3.6s3.8 1.2 5 3.6c-1.2 2.4-3.1 3.6-5 3.6s-3.8-1.2-5-3.6Z" />
          </svg>
        </div>

        <h3>Computer Vision Intelligence</h3>

        <p>
          Transform visual data into structured intelligence using
          production-grade computer vision systems.
        </p>

        <div className="card-arrow">
          <span>Explore</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </article>

      {/* 06: Predictive Neural Analytics (Neural Activity / Telemetry Pulse) */}
      <article className="expertise-card reveal">
        <div className="card-glow" />

        <div className="expertise-card-top">
          <span className="expertise-label">ANALYTICS</span>
          <span className="expertise-number">06</span>
        </div>

        <div className="expertise-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
            <circle cx="19" cy="9" r="1.5" fill="currentColor" />
          </svg>
        </div>

        <h3>Predictive Neural Analytics</h3>

        <p>
          Turn operational data into predictive intelligence for forecasting,
          detection, optimization, and decision support.
        </p>

        <div className="card-arrow">
          <span>Explore</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </article>
    </div>
  </div>
</section>

      {/* =====================================================================
          TARGET CLIENTS
      ====================================================================== */}

      <section
        id="clients"
        className="reveal"
      >
        <TargetClients />
      </section>


      {/* =====================================================================
          PORTFOLIO
      ====================================================================== */}

      <section
        id="portfolio"
        className="reveal"
      >
        <Portfolio />
      </section>


      {/* =====================================================================
          IMAGE GALLERY
      ====================================================================== */}

      <section className="reveal">
        <ImageGallery />
      </section>

{/* =====================================================================
    PROCESS
====================================================================== */}

<section
  id="process"
  className="process-section reveal"
>
  <div className="container">
    <div className="section-header text-center">
      <div className="section-tag">
        <span
          className="status-dot"
          aria-hidden="true"
        />
        Deployment workflow
      </div>

      <h2 className="section-title">
        From opportunity
        <br />
        to production.
      </h2>

      <p className="section-subtitle">
        A structured path for turning AI ideas
        into reliable systems that operate at
        enterprise scale.
      </p>
    </div>

    <div className="process-timeline">
      {[
        {
          number: "01",
          title: "Discovery & Opportunity Mapping",
          description:
            "Identify high-value business problems, data requirements, automation opportunities, and measurable outcomes.",
          icon: (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
          ),
        },
        {
          number: "02",
          title: "Architecture & AI Strategy",
          description:
            "Design the model, agent, retrieval, data, integration, and infrastructure architecture.",
          icon: (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
              <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
              <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
            </svg>
          ),
        },
        {
          number: "03",
          title: "Prototype & Validation",
          description:
            "Build a focused prototype and validate technical feasibility, user experience, and business value.",
          icon: (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
              <path d="M8.5 2h7" />
              <path d="M7 16h10" />
            </svg>
          ),
        },
        {
          number: "04",
          title: "Production Engineering",
          description:
            "Harden the system with APIs, observability, security, evaluation, testing, and scalable infrastructure.",
          icon: (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          ),
        },
        {
          number: "05",
          title: "Deployment & Integration",
          description:
            "Connect AI capabilities with existing enterprise applications, workflows, and operational systems.",
          icon: (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="5" r="2.5" />
              <circle cx="5" cy="18" r="2.5" />
              <circle cx="19" cy="18" r="2.5" />
              <path d="M10.7 7.1 6.3 15.9" />
              <path d="M13.3 7.1 17.7 15.9" />
              <path d="M7.5 18h9" />
            </svg>
          ),
        },
        {
          number: "06",
          title: "Production Telemetry & Scale",
          description:
            "Monitor performance, usage, quality, cost, and reliability while continuously improving the system.",
          icon: (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
            </svg>
          ),
        },
      ].map(({ number, title, description, icon }, index) => (
        <article
          key={number}
          className="process-step reveal"
          style={{
            "--step-delay": `${Math.min(index * 80, 400)}ms`,
          }}
        >
          <div className="process-number" aria-hidden="true">
            {icon}
            <span className="process-badge">{number}</span>
          </div>

          <div className="process-content">
            <span>PHASE {number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          <div className="process-arrow" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


      {/* =====================================================================
          TEAM
      ====================================================================== */}

      <section className="reveal">
        <TeamIntro />
      </section>


      {/* =====================================================================
          APP PROMOTION
      ====================================================================== */}

      <section className="reveal">
        <AppPromotion />
      </section>


      {/* =====================================================================
          TESTIMONIALS
      ====================================================================== */}

      <section
        id="testimonials"
        className="testimonials-section reveal"
      >

        <div className="container">

          <div className="section-header text-center">

            <div className="section-tag">
              Production feedback
            </div>

            <h2 className="section-title">
              Proven in production
              <br />
              environments.
            </h2>

            <p className="section-subtitle">
              AI systems should create measurable
              operational value, not just impressive
              demos.
            </p>

          </div>

          <MarqueeTestimonials />

        </div>
      </section>


      {/* =====================================================================
          FAQ
      ====================================================================== */}

      <section
        id="faq"
        className="reveal"
      >
        <FAQ />
      </section>


      {/* =====================================================================
          NEWSLETTER
      ====================================================================== */}

      <section
        id="newsletter"
        className="reveal"
      >
        <Newsletter />
      </section>


      {/* =====================================================================
          FINAL CTA
      ====================================================================== */}

      <section
        id="contact"
        className="reveal"
      >
        <CTASection />
      </section>


      {/* =====================================================================
          FLOATING ACTION BUTTONS
      ====================================================================== */}

      <div
        className="floating-widgets"
        aria-label="Quick actions"
      >

        {/* WhatsApp */}

        <a
          href="https://wa.me/"
          className="floating-btn whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Inalgo on WhatsApp"
        >

          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.77 11.77 0 0012.1 0C5.6.0.31 5.29.31 11.8c0 2.08.54 4.11 1.57 5.9L.21 24l6.45-1.64a11.78 11.78 0 005.43 1.31h.01c6.5 0 11.8-5.29 11.8-11.8 0-3.15-1.23-6.11-3.38-8.39zM12.1 21.66h-.01a9.84 9.84 0 01-5.01-1.37l-.36-.21-3.83.98 1.02-3.74-.23-.38a9.82 9.82 0 01-1.5-5.14C2.18 6.37 6.62 1.93 12.1 1.93c2.66 0 5.16 1.04 7.04 2.93a9.89 9.89 0 012.92 7.05c0 5.48-4.45 9.75-9.96 9.75zm5.41-7.34c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>

        </a>


        {/* AI Assistant */}

        <button
          ref={assistantButtonRef}
          type="button"
          className="floating-btn agent-btn"
          aria-label="Open Inalgo AI assistant"
          title="Open AI assistant"
          onClick={handleAssistantOpen}
        >

          <img
            src={heroImage}
            alt=""
            className="agent-img"
          />

          <span
            className="agent-indicator"
            aria-hidden="true"
          />

        </button>


        {/* Back to top */}

        <button
          type="button"
          className={`floating-btn back-to-top ${
            scrollProgress > 12
              ? "is-visible"
              : ""
          }`}
          aria-label="Back to top"
          title="Back to top"
          onClick={scrollToTop}
        >
          ↑
        </button>

      </div>


      {/* =====================================================================
          ACTIVE SECTION STATUS
      ====================================================================== */}

      {/* <span
        className="sr-only"
        aria-live="polite"
      >
        Current section:{" "}
        {
          NAV_SECTIONS.find(
            (section) =>
              section.id === activeSection
          )?.label || "Home"
        }
      </span> */}

    </main>
    </>
  );
}

export default Home;
