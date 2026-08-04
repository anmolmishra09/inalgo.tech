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
            poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
          >
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support interactive video playback.
          </video>

          {/* <div className="video-overlay">
            <span className="play-badge">
              ⚡ Hover to Preview Real-Time Demo
            </span>
          </div> */}
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
    </div>
  );
}

export default Home;