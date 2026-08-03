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
import demoVideo from "../images/download.mp4";

// Hover-to-Play Video Component
const VideoSection = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        // Autoplay policy fallback
        console.log("Video play prevented: ", err);
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
          <span className="section-tag font-mono">INTERACTIVE DEMO</span>
          <h2 className="section-title">See Our Autonomous Agents in Action</h2>
          <p className="section-subtitle">
            Hover over the video preview below to launch real-time agent execution.
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
  Your browser does not support the video tag.
</video>
          <div className="video-overlay">
            <span className="play-badge">Hover to Preview Demo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// AI Startup Data Configurations
const EXPERTISE_AREAS = [
  {
    id: 'llm-genai',
    title: 'Generative AI & LLMs',
    description: 'Custom fine-tuning, prompt engineering, and local/cloud deployment of large language models tailored to proprietary business data.',
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
    title: 'Autonomous AI Agents',
    description: 'Multi-agent orchestration systems capable of executing multi-step complex workflows, decision-making, and tool utilization.',
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
    title: 'Multimodal & Real-Time Avatars',
    description: 'Integrating lip-sync engines, real-time speech synthesis (TTS/STT), and digital human avatars into interactive web applications.',
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
    title: 'MLOps & Scalable AI Pipelines',
    description: 'Production-ready model monitoring, low-latency inference servers, vector databases (RAG), and secure enterprise integration.',
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
    title: 'Computer Vision & Visual Intelligence',
    description: 'Real-time video processing, automated visual inspection, image generation, and object detection systems.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive & Neural Analytics',
    description: 'Transforming raw enterprise data into actionable predictive insights with custom deep learning architectures.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'AI Discovery & Strategy',
    description: 'We analyze your business workflows to identify high-ROI opportunities for artificial intelligence and automation.',
  },
  {
    number: '02',
    title: 'Data & Model Architecture',
    description: 'Designing RAG architectures, selecting foundational models, and preparing clean training or fine-tuning datasets.',
  },
  {
    number: '03',
    title: 'Prototype & Agent Training',
    description: 'Building custom AI agents, fine-tuning neural networks, and creating rapid proof-of-concept prototypes.',
  },
  {
    number: '04',
    title: 'Full-Stack Integration',
    description: 'Seamlessly embedding AI models, APIs, real-time webhooks, and intuitive frontend UI components.',
  },
  {
    number: '05',
    title: 'Testing & Safety Alignment',
    description: 'Rigorous safety evaluations, latency optimization, hallucination reduction, and edge-case testing.',
  },
  {
    number: '06',
    title: 'Deployment & MLOps Scaling',
    description: 'Deploying to high-performance GPU clusters with continuous monitoring, telemetry, and automated model updates.',
  },
];

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">AI-Powered Enterprise Solutions</span>
            <h1 className="hero-title">
              Think It. Type It. <span className="hero-highlight-orange">Launch It.</span>
            </h1>

            <p className="hero-subtitle">
              Empower your enterprise with autonomous AI agents, fine-tuned models, and intelligent workflows to <span className="hero-highlight-underline">stay ahead</span> in the next-generation economy.
            </p>

            <div className="hero-buttons">
              <GlassBorderButton variant="purple">
                <a 
                  href="https://transcript-ai-8.preview.emergentagent.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Try AI Demo
                </a>
              </GlassBorderButton>

              <a href="#expertise" className="btn-secondary">
                <span>Explore Tech Stack</span>
                <svg className="btn-arrow" width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.25.5 4.75 4l-3.5 3.5" stroke="currentColor" strokeOpacity=".4" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Our Expertise Section */}
      <section id="expertise" className="expertise-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag font-mono">OUR CORE CAPABILITIES</span>
            <h2 className="section-title">Artificial Intelligence Expertise</h2>
            <p className="section-subtitle">
              From LLM fine-tuning to real-time multimodal digital avatars, we build production-grade AI systems designed to transform business models.
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

      {/* Portfolio / AI Showcase */}
      <div id="portfolio">
        <Portfolio />
      </div>

      {/* Target Clients Section */}
      <TargetClients />

      {/* AI Development Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our AI Integration Process</h2>
            <p className="section-subtitle">How We Transform Raw Ideas Into Autonomous Intelligence</p>
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

      {/* Social Proof & Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title text-center">Trusted by AI Pioneers & Leaders</h2>
          <p className="section-subtitle text-center">Hear how Inalgo’s AI platforms deliver measurable ROI</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Inalgo built our real-time AI agent pipeline in weeks. Their expertise in low-latency model hosting and custom agent logic set a new standard for our platform."
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
                "The multimodal digital avatar integration exceeded our expectations. The lip-sync and audio responsiveness are seamless and highly scalable."
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
                "Inalgo helped us transition from generic OpenAI wrappers to full enterprise RAG infrastructure. Highly competent AI engineering team!"
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

      {/* FAQ & Subscriptions */}
      <FAQ />
      <Newsletter />

      {/* Mobile App Promotion */}
      <AppPromotion 
        title="Deploy AI Agents Anywhere"
        description="Monitor agent workflows, model inference metrics, and real-time execution logs straight from your mobile app."
        buttonText="Get Early Access"
        buttonLink="/contact"
        googlePlayUrl="#"
        appStoreUrl="#"
      />

      {/* Team Introduction */}
      <TeamIntro 
        title="Meet the AI Engineers Shaping Tomorrow"
        description="Our team brings together computer vision experts, machine learning researchers, and full-stack developers dedicated to building responsible AI."
        buttonText="Join Our AI Team"
        buttonLink="/contact"
      />

      {/* Continuous Marquees */}
      <MarqueeTestimonials />
      <LogoMarquee />

      {/* Final Call to Action */}
      <CTASection 
        badge="Next-Gen AI Systems"
        title="Ready to Scale Your Startup with AI?"
        titleGradient="Transform Your Business with Inalgo AI"
        description="Schedule a technical consultation with our AI architects today and launch custom AI models in record time."
        buttonText="Schedule AI Consultation"
        buttonLink="/contact"
      />
    </div>
  );
}

export default Home;