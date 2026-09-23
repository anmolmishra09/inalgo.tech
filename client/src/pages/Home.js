import React, { useState, useEffect, useRef } from 'react';
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

// Dynamic headline features array
const ROTATING_FEATURES = [
  "intelligent AI agents",
  "autonomous workflows",
  "enterprise RAG systems",
  "multimodal AI avatars",
  "zero-infra auto-scaling"
];

// Hover-to-Play Video Section Component
const VideoSection = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay deferred by browser policy:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="video-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">
            ⚡ Real-time runtime engine
          </span>
          <h2 className="section-title">
            Watch autonomous agents execute in real time
          </h2>
          <p className="section-subtitle">
            Hover over the viewport to preview multi-step tool calls, logic branching, and dynamic reasoning paths.
          </p>
        </div>

        <div 
          className="video-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            className="hover-video"
            loop
            playsInline
            preload="metadata"
            poster=""
          >
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support interactive video playback.
          </video>
        </div>
      </div>
    </section>
  );
};

// Capabilities Configuration Data
const EXPERTISE_AREAS = [
  {
    id: 'llm-genai',
    title: 'Enterprise LLMs & Fine-Tuning',
    description: 'Custom fine-tuning, domain-adapted models, and private cloud deployments protected by enterprise-grade data boundaries.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M12 12 2.1 12a10 10 0 0 0 17.8 5.9" />
        <path d="M20 2 4 18" />
      </svg>
    ),
  },
  {
    id: 'autonomous-agents',
    title: 'Autonomous Multi-Agent Networks',
    description: 'Self-correcting multi-agent orchestrations built for complex tool utilization, distributed planning, and non-deterministic tasks.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    description: 'Ultra-low latency streaming voice, real-time facial mesh synthesis, and interactive digital human interfaces.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    id: 'mlops-infrastructure',
    title: 'Enterprise MLOps & RAG Infrastructure',
    description: 'High-throughput GPU cluster scaling, managed vector stores, automated telemetry, and resilient API gateways.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Intelligence',
    description: 'Real-time spatial video inspection, sub-second object classification, edge models, and continuous scene telemetry.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Neural Analytics',
    description: 'Converting raw telemetry and enterprise signals into high-confidence projections using deep neural architectures.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

// SaaS Process Steps
const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Opportunity Mapping',
    description: 'Audit internal operations to target manual, repetitive workflows ideal for autonomous agent orchestration.',
  },
  {
    number: '02',
    title: 'Data & Model Architecture',
    description: 'Establish hybrid vector retrieval indexes, select foundational models, and build clean training partitions.',
  },
  {
    number: '03',
    title: 'Agent Orchestration & Tuning',
    description: 'Construct agent execution graphs, configure external tooling interfaces, and stress-test evaluation paths.',
  },
  {
    number: '04',
    title: 'Full-Stack System Integration',
    description: 'Connect low-latency endpoints, event webhooks, real-time UI components, and identity providers (SSO/IAM).',
  },
  {
    number: '05',
    title: 'Safety Guardrails & Alignment',
    description: 'Enforce hallucination mitigation filters, context firewalls, rate limits, and automated red-team suites.',
  },
  {
    number: '06',
    title: 'Production Telemetry & Scale',
    description: 'Deploy across distributed GPU clusters backed by real-time latency monitors, cost caps, and trace logging.',
  },
];

function Home() {
  const [featureIndex, setFeatureIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let timeoutId;
    const intervalId = setInterval(() => {
      setFade(false);

      timeoutId = setTimeout(() => {
        setFeatureIndex((prevIndex) => (prevIndex + 1) % ROTATING_FEATURES.length);
        setFade(true);
      }, 350);
    }, 3200);

    return () => {
      clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-ray-burst"></div>
        <div className="hero-burst-center"></div>

        <div className="hero-glow glow-1"></div>
        <div className="hero-glow glow-2"></div>

        <div className="container">
          <div className="hero-content text-center">
            <span className="hero-badge">
              ✨ Autonomous AI Workforce • Release 2.0
            </span>

            <h1 className="hero-title">
  Automate complex operations using{" "}
  <span
    className={`hero-highlight ${fade ? "is-visible" : ""}`}
    key={featureIndex}
  >
    {ROTATING_FEATURES[featureIndex]}
  </span>
</h1>


            <p className="hero-subtitle">
              Convert manual workflows into high-speed, reliable autonomous
              pipelines. Build, validate, and launch production-grade agent
              networks with zero infrastructure friction.
            </p>

            <div className="hero-buttons">
              <GlassBorderButton variant="purple">
                <a
                  href="https://transcript-ai-8.preview.emergentagent.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  Start free trial ⚡
                </a>
              </GlassBorderButton>

              <a
                href="#expertise"
                className="btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 22px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "#ffffff",
                  border: "1px solid rgba(139, 92, 246, 0.6)",
                  boxShadow: "0 8px 30px rgba(99, 102, 241, 0.3)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <span>Book interactive demo</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Visualizations */}
      <HubVisualization />
      <ImageGallery />

      {/* Hover-to-Play Video Section */}
      <VideoSection />

      {/* Core Capabilities */}
      <section id="expertise" className="expertise-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Core capabilities</span>
            <h2 className="section-title">Engineered for mission-critical enterprise scale</h2>
            <p className="section-subtitle">
              From sub-second voice avatars to multi-tier agent chains, every layer is tuned for enterprise reliability.
            </p>
          </div>

          <div className="expertise-grid">
            {EXPERTISE_AREAS.map((item) => (
              <div className="expertise-card" key={item.id}>
                <div className="expertise-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <div id="portfolio">
        <Portfolio />
      </div>

      {/* Target Clients */}
      <TargetClients />

      {/* Integration Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Deployment roadmap</h2>
            <p className="section-subtitle">From system discovery to autonomous production workloads</p>
          </div>

          <div className="process-timeline">
            {PROCESS_STEPS.map((step) => (
              <div className="process-step" key={step.number}>
                <div className="process-number">{step.number}</div>
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title text-center">Proven in production environments</h2>
          <p className="section-subtitle text-center">How leading engineering teams drive measurable impact with Inalgo</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Inalgo launched our real-time multi-agent execution pipeline in weeks. Their low-latency architecture and robust decision logic raised the bar for our entire ML team."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Dr. Sarah Mitchell</h4>
                  <p>AI Research Director, MIT AI Lab</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "The multimodal avatar integration surpassed expectations. Streaming lip-sync responsiveness is imperceptible from real-time video, even under heavy concurrency."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>James Rodriguez</h4>
                  <p>Head of Product, Innovation Labs</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Replacing standard API wrappers with Inalgo's optimized RAG pipeline halved our retrieval latency while eliminating common contextual hallucinations."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Emily Chen</h4>
                  <p>VP of Engineering, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Newsletter */}
      <FAQ />
      <Newsletter />

      {/* App Promotion */}
      <AppPromotion 
        title="Monitor your agent fleets on the go"
        description="Track live agent workflows, response latency, token consumption, and trace logs directly via mobile telemetry."
        buttonText="Request early access"
        buttonLink="/contact"
        googlePlayUrl="#"
        appStoreUrl="#"
      />

      {/* Team Intro */}
      <TeamIntro 
        title="Built by engineers, backed by researchers"
        description="Our team unites distributed systems specialists, ML researchers, and interface designers committed to reliable AI engineering."
        buttonText="Explore open roles"
        buttonLink="/contact"
      />

      {/* Marquees */}
      <MarqueeTestimonials />
      <LogoMarquee />

      {/* Final Call To Action */}
      <CTASection 
        badge="Enterprise AI Infrastructure"
        title="Ready to automate core business logic?"
        titleGradient="Deploy autonomous architectures designed to scale"
        description="Book a technical strategy session with our AI architects and launch custom agent networks without infrastructure headaches."
        buttonText="Schedule technical consultation"
        buttonLink="/contact"
      />

      {/* Floating Action Buttons Container */}
      <div className="floating-widgets">
        <a 
          href="https://wa.me/+918787222966" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-btn whatsapp-btn"
          aria-label="Contact support on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>

        <button 
          className="floating-btn agent-btn"
          aria-label="Open AI assistant interface"
          onClick={() => window.location.href = "/agent"}
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