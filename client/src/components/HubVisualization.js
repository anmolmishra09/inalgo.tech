import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HubVisualization.css';

const EXPERTISE_NODES = [
  {
    id: 1,
    title: 'Generative AI & LLMs',
    icon: '🧠',
    color: '#8b5cf6',
    angle: 0,
    tagline: 'Custom Model Fine-Tuning',
    description: 'Domain-adapted foundation models, custom LoRA fine-tuning, and private cloud deployments integrated with enterprise data controls.',
    metrics: '99.9% Context Accuracy',
    link: '/services#llm'
  },
  {
    id: 2,
    title: 'Autonomous AI Agents',
    icon: '🤖',
    color: '#ec4899',
    angle: 51.43,
    tagline: 'Multi-Step Execution Chains',
    description: 'Self-correcting agent networks built for complex multi-step workflows, API tool usage, and human-in-the-loop validation.',
    metrics: 'Multi-Tool Execution',
    link: '/services#agents'
  },
  {
    id: 3,
    title: 'Multimodal Avatars',
    icon: '🗣️',
    color: '#06b6d4',
    angle: 102.86,
    tagline: 'Real-Time Voice & Lip-Sync',
    description: 'Ultra-low latency streaming text-to-speech (TTS), real-time digital human rendering, and conversational audio agents.',
    metrics: '< 200ms Streaming Latency',
    link: '/services#avatars'
  },
  {
    id: 4,
    title: 'MLOps Infrastructure',
    icon: '⚡',
    color: '#10b981',
    angle: 154.29,
    tagline: 'Scalable Vector & RAG Pipelines',
    description: 'Production vector indexing, hybrid semantic search, real-time GPU cluster auto-scaling, and telemetry monitoring.',
    metrics: 'Auto-Scaling GPU Clusters',
    link: '/services#mlops'
  },
  {
    id: 5,
    title: 'Computer Vision',
    icon: '👁️',
    color: '#f59e0b',
    angle: 205.71,
    tagline: 'Spatial Video Intelligence',
    description: 'Automated visual inspection, real-time object detection models, generative visual pipelines, and edge device execution.',
    metrics: '60 FPS Edge Processing',
    link: '/services#vision'
  },
  {
    id: 6,
    title: 'Predictive Analytics',
    icon: '📈',
    color: '#ef4444',
    angle: 257.14,
    tagline: 'Neural Decision Systems',
    description: 'Transforming complex enterprise datasets into real-time operational foresight through custom deep learning architectures.',
    metrics: 'Predictive Anomaly Logic',
    link: '/services#analytics'
  },
  {
    id: 7,
    title: 'Cloud & API Integration',
    icon: '☁️',
    color: '#3b82f6',
    angle: 308.57,
    tagline: 'High-Throughput Webhooks',
    description: 'Seamless integration with enterprise single-sign-on (SSO), high-throughput REST/GraphQL webhooks, and secure cloud endpoints.',
    metrics: 'Enterprise SSO & Webhooks',
    link: '/services#cloud'
  }
];

function HubVisualization() {
  const [activeNodeId, setActiveNodeId] = useState(7);
  const [isPaused, setIsPaused] = useState(false);
  const [radius, setRadius] = useState(260);
  const autoRotateRef = useRef(null);

  const activeNode = EXPERTISE_NODES.find(n => n.id === activeNodeId) || EXPERTISE_NODES[0];

  // Dynamic radius adjustment based on viewport width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setRadius(120);
      } else if (width < 576) {
        setRadius(140);
      } else if (width < 768) {
        setRadius(180);
      } else if (width < 1024) {
        setRadius(210);
      } else {
        setRadius(260);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-cycle through nodes unless paused
  useEffect(() => {
    if (!isPaused) {
      autoRotateRef.current = setInterval(() => {
        setActiveNodeId((prevId) => (prevId % EXPERTISE_NODES.length) + 1);
      }, 4000);
    }
    return () => clearInterval(autoRotateRef.current);
  }, [isPaused]);

  const handleNodeSelect = (id) => {
    setIsPaused(true);
    setActiveNodeId(id);
  };

  return (
    <section 
      className="hub-visualization"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Interactive AI Architecture Map"
    >
      <div className="container">
        {/* Header Section */}
        <div className="hub-header text-center">
          <span className="hub-tag">
            ⚡ INTERACTIVE CAPABILITIES HUB
          </span>
          <h2 className="hub-title">Explore Our AI Architecture</h2>
          <p className="hub-subtitle">
            Hover over or select any node to inspect how our core AI modules interconnect across the Inalgo engine runtime.
          </p>
        </div>

        <div className="hub-wrapper">
          {/* Circular Interactive Graph View */}
          <div className="hub-graph-container">
            
            {/* SVG Dynamic Connection Lines */}
            <svg className="hub-svg" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {EXPERTISE_NODES.map(node => (
                  <linearGradient
                    key={`grad-${node.id}`}
                    id={`grad-${node.id}`}
                    gradientUnits="userSpaceOnUse"
                    x1="400"
                    y1="400"
                    x2={400 + Math.cos((node.angle * Math.PI) / 180) * radius}
                    y2={400 + Math.sin((node.angle * Math.PI) / 180) * radius}
                  >
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor={node.color} stopOpacity="0.95" />
                  </linearGradient>
                ))}
              </defs>

              {/* Background Orbit Ring */}
              <circle cx="400" cy="400" r={radius} className="hub-orbit-ring" />

              {/* Connecting Rays */}
              {EXPERTISE_NODES.map(node => {
                const x = 400 + Math.cos((node.angle * Math.PI) / 180) * radius;
                const y = 400 + Math.sin((node.angle * Math.PI) / 180) * radius;
                const isActive = activeNodeId === node.id;

                return (
                  <g key={`connection-${node.id}`}>
                    <line
                      x1="400"
                      y1="400"
                      x2={x}
                      y2={y}
                      stroke={isActive ? node.color : `url(#grad-${node.id})`}
                      strokeWidth={isActive ? "3.5" : "1.5"}
                      className={`hub-line ${isActive ? 'line-active' : ''}`}
                    />
                    {isActive && (
                      <circle className="hub-pulse-dot" r="6" fill={node.color}>
                        <animateMotion
                          dur="1.2s"
                          repeatCount="indefinite"
                          path={`M 400 400 L ${x} ${y}`}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central Core Hub Logo */}
            <div className="hub-center-core">
              <div className="core-ring core-ring-1"></div>
              <div className="core-ring core-ring-2"></div>
              <div className="core-content">
                <span className="core-logo-icon">⚡</span>
                <span className="core-title">Inalgo AI</span>
                <span className="core-subtext">CORE ENGINE</span>
              </div>
            </div>

            {/* Orbiting Interactive Node Buttons */}
            {EXPERTISE_NODES.map(node => {
              const x = Math.cos((node.angle * Math.PI) / 180) * radius;
              const y = Math.sin((node.angle * Math.PI) / 180) * radius;
              const isActive = activeNodeId === node.id;

              return (
                <button
                  key={node.id}
                  className={`hub-node-btn ${isActive ? 'node-active' : ''}`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    '--accent-color': node.color
                  }}
                  onMouseEnter={() => handleNodeSelect(node.id)}
                  onClick={() => handleNodeSelect(node.id)}
                  aria-label={node.title}
                >
                  <div className="node-icon-wrapper" style={{ borderColor: node.color }}>
                    <span>{node.icon}</span>
                  </div>
                  <span className="node-label">{node.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Node Detailed Info Panel */}
          <div className="hub-info-panel" style={{ '--active-color': activeNode.color }}>
            <div className="info-badge-row">
              <span className="info-status-badge">
                <span className="status-dot" style={{ backgroundColor: activeNode.color }}></span>
                Connected Core Module
              </span>
              <span className="info-metric-tag">{activeNode.metrics}</span>
            </div>

            <div className="info-header">
              <span className="info-icon" style={{ backgroundColor: `${activeNode.color}20`, borderColor: activeNode.color }}>
                {activeNode.icon}
              </span>
              <div>
                <h3 className="info-title">{activeNode.title}</h3>
                <p className="info-tagline">{activeNode.tagline}</p>
              </div>
            </div>

            <p className="info-description">{activeNode.description}</p>

            <div className="info-footer">
              <Link to={activeNode.link} className="info-link">
                <span>Explore Technical Specs</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HubVisualization;