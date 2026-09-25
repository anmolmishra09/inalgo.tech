import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

// Component Imports
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import Portfolio from '../components/Portfolio';
import TargetClients from '../components/TargetClients';
import HubVisualization from '../components/HubVisualization';
import ImageGallery from '../components/ImageGallery';
import Newsletter from '../components/Newsletter';
import GlassBorderButton from '../components/GlassBorderButton';
import AppPromotion from '../components/AppPromotion';
import TeamIntro from '../components/TeamIntro';
import MarqueeTestimonials from '../components/MarqueeTestimonials';
import LogoMarquee from '../components/LogoMarquee';

import demoVideo from '../images/download.mp4';
import ageniImg from '../images/ageni.jpg';

/* ==========================================================================
   ROTATING HERO FEATURES
   ========================================================================== */

const ROTATING_FEATURES = [
  'intelligent AI agents',
  'autonomous workflows',
  'enterprise RAG systems',
  'multimodal AI avatars',
  'zero-infra auto-scaling',
];

/* ==========================================================================
   EXPERTISE
   ========================================================================== */

const EXPERTISE_AREAS = [
  {
    id: 'llm-genai',
    title: 'Enterprise LLMs & Fine-Tuning',
    description:
      'Custom fine-tuning, domain-adapted models, and private cloud deployments protected by enterprise-grade data boundaries.',
    metric: '01',
    label: 'MODEL ENGINEERING',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M12 12 2.1 12a10 10 0 0 0 17.8 5.9" />
        <path d="M20 2 4 18" />
      </svg>
    ),
  },
  {
    id: 'autonomous-agents',
    title: 'Autonomous Multi-Agent Networks',
    description:
      'Self-correcting multi-agent orchestrations built for complex tool utilization, distributed planning, and non-deterministic tasks.',
    metric: '02',
    label: 'AGENT SYSTEMS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
  {
    id: 'multimodal-avatars',
    title: 'Multimodal Avatars & Voice AI',
    description:
      'Ultra-low latency streaming voice, real-time facial synthesis, and interactive digital human interfaces.',
    metric: '03',
    label: 'MULTIMODAL AI',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    id: 'mlops-infrastructure',
    title: 'Enterprise MLOps & RAG Infrastructure',
    description:
      'High-throughput GPU scaling, managed vector stores, automated telemetry, and resilient API gateways.',
    metric: '04',
    label: 'AI INFRASTRUCTURE',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Intelligence',
    description:
      'Real-time spatial video inspection, object classification, edge models, and continuous scene telemetry.',
    metric: '05',
    label: 'VISION SYSTEMS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Neural Analytics',
    description:
      'Convert raw telemetry and enterprise signals into high-confidence projections using advanced neural architectures.',
    metric: '06',
    label: 'PREDICTIVE AI',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

/* ==========================================================================
   PROCESS
   ========================================================================== */

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Opportunity Mapping',
    description:
      'Audit internal operations to identify manual and repetitive workflows ideal for autonomous orchestration.',
  },
  {
    number: '02',
    title: 'Data & Model Architecture',
    description:
      'Establish retrieval systems, foundational models, training partitions, and enterprise data boundaries.',
  },
  {
    number: '03',
    title: 'Agent Orchestration & Tuning',
    description:
      'Construct agent execution graphs, configure tools, and stress-test evaluation paths.',
  },
  {
    number: '04',
    title: 'Full-Stack System Integration',
    description:
      'Connect low-latency APIs, event webhooks, realtime interfaces, identity providers, and enterprise systems.',
  },
  {
    number: '05',
    title: 'Safety Guardrails & Alignment',
    description:
      'Enforce hallucination mitigation, context isolation, rate limits, permissions, and automated evaluation.',
  },
  {
    number: '06',
    title: 'Production Telemetry & Scale',
    description:
      'Deploy with realtime latency monitoring, cost controls, observability, tracing, and continuous optimization.',
  },
];

/* ==========================================================================
   VIDEO SECTION
   ========================================================================== */

const VideoSection = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (!videoRef.current) return;

    videoRef.current.play().catch(() => {
      // Autoplay may be blocked by the browser.
    });
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <section className="video-section">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="section-tag">
            <span className="status-dot"></span>
            REAL-TIME RUNTIME ENGINE
          </span>

          <h2 className="section-title">
            Watch autonomous agents
            <span className="gradient-text"> execute in real time</span>
          </h2>

          <p className="section-subtitle">
            Preview multi-step tool calls, branching logic, agent coordination,
            and realtime execution inside a production AI runtime.
          </p>
        </div>

        <div
  className="video-container reveal"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <video
    ref={videoRef}
    className="hover-video"
    loop
    playsInline
    preload="metadata"
  >
    <source src={demoVideo} type="video/mp4" />
    Your browser does not support interactive video playback.
  </video>
</div>
</div>
    </section>
  );
};


/* ==========================================================================
   HOME
   ========================================================================== */

function Home() {
  const [featureIndex, setFeatureIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const heroRef = useRef(null);

  /* Rotating headline */
  useEffect(() => {
    let timeoutId;

    const intervalId = setInterval(() => {
      setFade(false);

      timeoutId = setTimeout(() => {
        setFeatureIndex(
          (previous) => (previous + 1) % ROTATING_FEATURES.length
        );

        setFade(true);
      }, 300);
    }, 3200);

    return () => {
      clearInterval(intervalId);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  /* Scroll reveal */
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /* Interactive hero mouse lighting */
  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handlePointerMove = (event) => {
      const rect = hero.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      hero.style.setProperty('--mouse-x', `${x}px`);
      hero.style.setProperty('--mouse-y', `${y}px`);
    };

    hero.addEventListener('pointermove', handlePointerMove);

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className="home-page">

      {/* ================================================================
          HERO
      ================================================================ */}

      <section
        className="hero-section"
        ref={heroRef}
      >
        <div className="hero-grid"></div>
        <div className="hero-mouse-glow"></div>

        <div className="hero-ray-burst"></div>
        <div className="hero-burst-center"></div>

        <div className="hero-glow glow-1"></div>
        <div className="hero-glow glow-2"></div>

        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        <div className="container hero-container">
          <div className="hero-content">

            <div className="hero-live-status">
              <span className="live-dot"></span>
              <span>AI INFRASTRUCTURE ONLINE</span>
              <span className="status-divider"></span>
              <span>99.99% SYSTEM AVAILABILITY</span>
            </div>

            <span className="hero-badge">
              <span className="sparkle">✦</span>
              Autonomous AI Workforce
              <span className="badge-version">2.0</span>
            </span>

            <h1 className="hero-title">
              Automate complex operations using{' '}
              <span
                className={`hero-highlight ${
                  fade ? 'is-visible' : 'is-hidden'
                }`}
              >
                {ROTATING_FEATURES[featureIndex]}
              </span>
            </h1>

            <p className="hero-subtitle">
              Transform manual operations into intelligent autonomous
              pipelines. Build, orchestrate, validate, and scale production
              AI systems without infrastructure friction.
            </p>

            <div className="hero-buttons">

              <GlassBorderButton variant="purple">
                <a
                  href="https://transcript-ai-8.preview.emergentagent.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-primary-link"
                >
                  Start free trial
                  <span>⚡</span>
                </a>
              </GlassBorderButton>

              <a
                href="#expertise"
                className="btn-secondary"
              >
                <span>Explore capabilities</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

            </div>
{/* 
            <div className="hero-proof">

              <div className="proof-item">
                <strong>50+</strong>
                <span>AI workflows</span>
              </div>

              <div className="proof-line"></div>

              <div className="proof-item">
                <strong>&lt;100ms</strong>
                <span>runtime latency</span>
              </div>

              <div className="proof-line"></div>

              <div className="proof-item">
                <strong>24/7</strong>
                <span>autonomous execution</span>
              </div>

            </div> */}

          </div>
        </div>

        <div className="hero-bottom-fade"></div>
      </section>

      {/* ================================================================
          VISUAL SYSTEM
      ================================================================ */}

      <section className="visual-system-section">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="section-tag">AI SYSTEM ARCHITECTURE</span>

            <h2 className="section-title">
              Intelligence that moves
              <span className="gradient-text"> through your entire stack.</span>
            </h2>

            <p className="section-subtitle">
              Connect models, data, tools, agents, applications, and
              infrastructure into one intelligent execution layer.
            </p>
          </div>

          <div className="visual-system">
            <HubVisualization />
          </div>
        </div>
      </section>

      <ImageGallery />

      {/* ================================================================
          VIDEO
      ================================================================ */}

      <VideoSection />

      {/* ================================================================
          CAPABILITIES
      ================================================================ */}

      <section id="expertise" className="expertise-section">
        <div className="container">

          <div className="section-header text-center reveal">
            <span className="section-tag">CORE CAPABILITIES</span>

            <h2 className="section-title">
              Engineered for
              <span className="gradient-text"> mission-critical AI</span>
            </h2>

            <p className="section-subtitle">
              From enterprise RAG systems to autonomous multi-agent
              infrastructure, every layer is designed for reliability,
              observability, and scale.
            </p>
          </div>

          <div className="expertise-grid">

            {EXPERTISE_AREAS.map((item, index) => (
              <div
                className="expertise-card reveal"
                key={item.id}
                style={{
                  '--card-delay': `${index * 70}ms`,
                }}
              >

                <div className="card-glow"></div>

                <div className="expertise-card-top">
                  <span className="expertise-label">
                    {item.label}
                  </span>

                  <span className="expertise-number">
                    {item.metric}
                  </span>
                </div>

                <div className="expertise-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="card-arrow">
                  <span>Explore capability</span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================================================================
          PORTFOLIO
      ================================================================ */}

      <section className="portfolio-wrapper" id="portfolio">
        <Portfolio />
      </section>

      {/* ================================================================
          TARGET CLIENTS
      ================================================================ */}

      <TargetClients />

      {/* ================================================================
          PROCESS
      ================================================================ */}

      <section className="process-section">
        <div className="container">

          <div className="section-header text-center reveal">
            <span className="section-tag">DEPLOYMENT FRAMEWORK</span>

            <h2 className="section-title">
              From idea to
              <span className="gradient-text"> autonomous production</span>
            </h2>

            <p className="section-subtitle">
              A structured engineering process for taking AI systems from
              discovery through production scale.
            </p>
          </div>

          <div className="process-timeline">

            {PROCESS_STEPS.map((step, index) => (
              <div
                className="process-step reveal"
                key={step.number}
                style={{
                  '--step-delay': `${index * 80}ms`,
                }}
              >

                <div className="process-number">
                  {step.number}
                </div>

                <div className="process-connector"></div>

                <div className="process-content">
                  <span>PHASE {step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                <div className="process-arrow">
                  →
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================================================================
          TESTIMONIALS
      ================================================================ */}

      <section className="testimonials-section">
        <div className="container">

          <div className="section-header text-center reveal">
            <span className="section-tag">ENGINEERING OUTCOMES</span>

            <h2 className="section-title">
              Built for teams
              <span className="gradient-text"> shipping AI</span>
            </h2>

            <p className="section-subtitle">
              Technical teams use Inalgo to turn complex AI architecture into
              production-ready systems.
            </p>
          </div>

          <div className="testimonials-grid">

            <div className="testimonial-card reveal">
              <div className="testimonial-top">
                <div className="testimonial-stars">★★★★★</div>
                <span>01</span>
              </div>

              <p className="testimonial-text">
                "Inalgo launched our real-time multi-agent execution pipeline
                in weeks. Their low-latency architecture and robust decision
                logic raised the bar for our entire ML team."
              </p>

              <div className="author-info">
                <h4>Dr. Sarah Mitchell</h4>
                <p>AI Research Director, MIT AI Lab</p>
              </div>
            </div>

            <div className="testimonial-card reveal">
              <div className="testimonial-top">
                <div className="testimonial-stars">★★★★★</div>
                <span>02</span>
              </div>

              <p className="testimonial-text">
                "The multimodal avatar integration surpassed expectations.
                Streaming lip-sync responsiveness remained highly responsive
                even under heavy concurrency."
              </p>

              <div className="author-info">
                <h4>James Rodriguez</h4>
                <p>Head of Product, Innovation Labs</p>
              </div>
            </div>

            <div className="testimonial-card reveal">
              <div className="testimonial-top">
                <div className="testimonial-stars">★★★★★</div>
                <span>03</span>
              </div>

              <p className="testimonial-text">
                "Replacing standard API wrappers with Inalgo's optimized RAG
                pipeline significantly reduced retrieval latency while
                improving contextual accuracy."
              </p>

              <div className="author-info">
                <h4>Emily Chen</h4>
                <p>VP of Engineering, TechCorp</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ
      ================================================================ */}

      <FAQ />

      <Newsletter />

      {/* ================================================================
          APP PROMOTION
      ================================================================ */}

      <AppPromotion
        title="Monitor your agent fleets on the go"
        description="Track live workflows, response latency, token consumption, and trace logs directly from mobile telemetry."
        buttonText="Request early access"
        buttonLink="/contact"
        googlePlayUrl="#"
        appStoreUrl="#"
      />

      {/* ================================================================
          TEAM
      ================================================================ */}

      <TeamIntro
        title="Built by engineers, backed by researchers"
        description="Our team unites distributed systems specialists, ML researchers, and interface designers committed to reliable AI engineering."
        buttonText="Explore open roles"
        buttonLink="/contact"
      />

      <MarqueeTestimonials />
      <LogoMarquee />

      {/* ================================================================
          FINAL CTA
      ================================================================ */}

      <CTASection
        badge="Enterprise AI Infrastructure"
        title="Ready to automate core business logic?"
        titleGradient="Deploy autonomous architectures designed to scale"
        description="Book a technical strategy session with our AI architects and launch custom agent networks without infrastructure headaches."
        buttonText="Schedule technical consultation"
        buttonLink="/contact"
      />

      {/* ================================================================
          FLOATING ACTIONS
      ================================================================ */}

      <div className="floating-widgets">

        <a
  href="https://wa.me/918787222966"
  target="_blank"
  rel="noopener noreferrer"
  className="floating-btn whatsapp-btn"
  aria-label="Contact support on WhatsApp"
>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.86 11.86 0 0 0 5.73 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.85 9.85 0 0 1-1.51-5.28C2.19 6.47 6.62 2.04 12.07 2.04c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.87-9.87 9.87Zm5.41-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
  </svg>
</a>

        <button
          className="floating-btn agent-btn"
          aria-label="Open AI assistant interface"
          onClick={() => {
            window.location.href = '/agent';
          }}
        >
          <img
            src={ageniImg}
            alt="AI Assistant"
            className="agent-img"
          />

          <span className="agent-indicator"></span>
        </button>

      </div>

    </div>
  );
}

export default Home;