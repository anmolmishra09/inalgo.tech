import React, { useRef } from 'react';
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
            ⚡ Real-Time Runtime Engine
          </span>
          <h2 className="section-title">
            See Autonomous Agents Execute in Action
          </h2>
          <p className="section-subtitle">
            Hover over the execution viewport below to preview real-time multi-step tool calls and agent reasoning chains.
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
    description: 'Custom fine-tuning, domain-adapted models, and private cloud deployment with strict enterprise data privacy controls.',
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
    description: 'Self-correcting multi-agent orchestrations built for complex workflows, tool utilization, and autonomous decisions.',
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
    description: 'Ultra-low latency streaming voice, real-time lip-sync rendering engines, and interactive digital human personas.',
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
    title: 'Enterprise MLOps & RAG Engine',
    description: 'Low-latency GPU cluster scaling, vector indexing pipelines, model monitoring, and secure enterprise webhooks.',
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
    description: 'Real-time spatial video inspection, object detection, edge deployment models, and automated visual analytics.',
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
    description: 'Transforming operational enterprise data into actionable foresight with custom deep learning neural architectures.',
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
    title: 'AI Discovery & Strategy',
    description: 'Analyzing operational workflows to isolate high-value targets for autonomous agent integration.',
  },
  {
    number: '02',
    title: 'Data & Model Architecture',
    description: 'Configuring secure RAG vector indexes, choosing model backbones, and cleaning fine-tuning datasets.',
  },
  {
    number: '03',
    title: 'Agent Building & Training',
    description: 'Developing custom multi-agent chains, defining tool execution rules, and evaluating logic flows.',
  },
  {
    number: '04',
    title: 'Full-Stack Integration',
    description: 'Connecting low-latency APIs, webhooks, streaming UI interfaces, and enterprise single-sign-on controls.',
  },
  {
    number: '05',
    title: 'Safety Guardrails & Alignment',
    description: 'Performing adversarial red-teaming, latency optimization, and automated hallucination suppression.',
  },
  {
    number: '06',
    title: 'Production MLOps Scaling',
    description: 'Deploying across GPU clusters with continuous telemetry, performance tracking, and automated updates.',
  },
];

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow glow-1"></div>
        <div className="hero-glow glow-2"></div>

        <div className="container">
          <div className="hero-content text-center">
            <span className="hero-badge">
              ✨ Autonomous AI Workforce • V2.0 Engine
            </span>

            <h1 className="hero-title">
              Automate Complex Workflows with <span className="hero-highlight">Intelligent AI Agents</span>
            </h1>

            <p className="hero-subtitle">
              Transform manual enterprise tasks into high-speed autonomous operations. Build, test, and deploy production-ready AI agents in record time with zero infra setup.
            </p>

            <div className="hero-buttons">
              <GlassBorderButton variant="purple">
                <a 
                  href="https://transcript-ai-8.preview.emergentagent.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Start Free Trial ⚡
                </a>
              </GlassBorderButton>

              <a href="#expertise" className="btn-secondary">
                <span>Book Interactive Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
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
            <span className="section-tag">OUR CORE CAPABILITIES</span>
            <h2 className="section-title">Engineered for Enterprise Performance</h2>
            <p className="section-subtitle">
              From low-latency agent orchestrations to multimodal voice avatars, we build high-performance AI systems.
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
            <h2 className="section-title">Our AI Integration Process</h2>
            <p className="section-subtitle">From Conceptual Blueprint to Production Autonomous Execution</p>
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
          <h2 className="section-title text-center">Trusted by Leading AI Engineers</h2>
          <p className="section-subtitle text-center">See how tech leaders deliver measurable ROI using Inalgo AI</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Inalgo built our real-time multi-agent execution pipeline in weeks. Their expertise in low-latency hosting and agent logic set a new benchmark for us."
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
                "The multimodal digital avatar integration exceeded our expectations. The streaming lip-sync and audio responsiveness are seamless and highly scalable."
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
                "Transitioning from basic OpenAI API wrappers to Inalgo's enterprise RAG infrastructure cut our retrieval latency in half while boosting accuracy."
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
        title="Deploy & Track AI Fleet Anywhere"
        description="Monitor multi-agent runs, model latency metrics, and real-time execution logs directly from your mobile telemetry interface."
        buttonText="Get Early Access"
        buttonLink="/contact"
        googlePlayUrl="#"
        appStoreUrl="#"
      />

      {/* Team Intro */}
      <TeamIntro 
        title="Meet the AI Engineers Shaping Tomorrow"
        description="Our team brings together machine learning researchers, systems engineers, and product designers dedicated to responsible AI development."
        buttonText="Join Our Team"
        buttonLink="/contact"
      />

      {/* Marquees */}
      <MarqueeTestimonials />
      <LogoMarquee />

      {/* Final Call To Action */}
      <CTASection 
        badge="Next-Gen AI Systems"
        title="Ready to Automate Core Operations?"
        titleGradient="Transform Your Business with Inalgo AI Architecture"
        description="Schedule a technical deep-dive with our AI architects today and launch custom agent networks in record time."
        buttonText="Schedule Technical Consultation"
        buttonLink="/contact"
      />

      {/* Floating Action Buttons Container */}
      <div className="floating-widgets">
        {/* WhatsApp Icon */}
        <a 
          href="https://wa.me/8787222966" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-btn whatsapp-btn"
          aria-label="Contact on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>

        {/* AI Agent / Support Icon */}
<button 
  className="floating-btn agent-btn"
  aria-label="Open AI Assistant"
  onClick={() => alert("AI Agent Clicked!")}
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
