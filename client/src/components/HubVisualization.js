import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './HubVisualization.css';

// Enterprise Data Model Config
const DEFAULT_NODES = [
  {
    id: 'node-llm',
    title: 'Generative AI & LLMs',
    icon: '🧠',
    color: '#8b5cf6',
    tagline: 'Custom Model Fine-Tuning',
    description: 'Domain-adapted foundation models, custom LoRA fine-tuning, and private cloud deployments integrated with enterprise data controls.',
    metrics: '99.9% Context Accuracy',
    link: '/services#llm'
  },
  {
    id: 'node-agents',
    title: 'Autonomous AI Agents',
    icon: '🤖',
    color: '#ec4899',
    tagline: 'Multi-Step Execution Chains',
    description: 'Self-correcting agent networks built for complex multi-step workflows, API tool usage, and human-in-the-loop validation.',
    metrics: 'Multi-Tool Execution',
    link: '/services#agents'
  },
  {
    id: 'node-avatars',
    title: 'Multimodal Avatars',
    icon: '🗣️',
    color: '#06b6d4',
    tagline: 'Real-Time Voice & Lip-Sync',
    description: 'Ultra-low latency streaming text-to-speech (TTS), real-time digital human rendering, and conversational audio agents.',
    metrics: '< 200ms Streaming Latency',
    link: '/services#avatars'
  },
  {
    id: 'node-mlops',
    title: 'MLOps Infrastructure',
    icon: '⚡',
    color: '#10b981',
    tagline: 'Scalable Vector & RAG Pipelines',
    description: 'Production vector indexing, hybrid semantic search, real-time GPU cluster auto-scaling, and telemetry monitoring.',
    metrics: 'Auto-Scaling GPU Clusters',
    link: '/services#mlops'
  },
  {
    id: 'node-vision',
    title: 'Computer Vision',
    icon: '👁️',
    color: '#f59e0b',
    tagline: 'Spatial Video Intelligence',
    description: 'Automated visual inspection, real-time object detection models, generative visual pipelines, and edge device execution.',
    metrics: '60 FPS Edge Processing',
    link: '/services#vision'
  },
  {
    id: 'node-analytics',
    title: 'Predictive Analytics',
    icon: '📈',
    color: '#ef4444',
    tagline: 'Neural Decision Systems',
    description: 'Transforming complex enterprise datasets into real-time operational foresight through custom deep learning architectures.',
    metrics: 'Predictive Anomaly Logic',
    link: '/services#analytics'
  },
  {
    id: 'node-cloud',
    title: 'Cloud & API Integration',
    icon: '☁️',
    color: '#3b82f6',
    tagline: 'High-Throughput Webhooks',
    description: 'Seamless integration with enterprise single-sign-on (SSO), high-throughput REST/GraphQL webhooks, and secure cloud endpoints.',
    metrics: 'Enterprise SSO & Webhooks',
    link: '/services#cloud'
  }
];

export default function HubVisualization({
  title = "Explore Our AI Architecture",
  subtitle = "Interactive Capabilities Hub",
  description = "Hover over or select any node to inspect how our core AI modules interconnect across the enterprise engine runtime.",
  nodes = DEFAULT_NODES,
  autoRotateInterval = 4000,
  onNodeSelect
}) {
  const [activeNodeId, setActiveNodeId] = useState(() => nodes[0]?.id || '');
  const [isPaused, setIsPaused] = useState(false);
  const [radius, setRadius] = useState(260);

  // Dynamically compute angles based on total nodes provided
  const processedNodes = useMemo(() => {
    const total = nodes.length;
    const angleStep = 360 / (total || 1);
    return nodes.map((node, index) => ({
      ...node,
      angle: index * angleStep
    }));
  }, [nodes]);

  // Derived current active node object
  const activeNode = useMemo(() => {
    return processedNodes.find((n) => n.id === activeNodeId) || processedNodes[0];
  }, [processedNodes, activeNodeId]);

  // Responsive radius computation via ResizeObserver
  const containerRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 400) setRadius(120);
      else if (width < 576) setRadius(140);
      else if (width < 768) setRadius(180);
      else if (width < 1024) setRadius(210);
      else setRadius(260);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotation handling
  useEffect(() => {
    if (isPaused || processedNodes.length === 0) return;

    const timer = setInterval(() => {
      setActiveNodeId((currentId) => {
        const currentIndex = processedNodes.findIndex((n) => n.id === currentId);
        const nextIndex = (currentIndex + 1) % processedNodes.length;
        return processedNodes[nextIndex].id;
      });
    }, autoRotateInterval);

    return () => clearInterval(timer);
  }, [isPaused, processedNodes, autoRotateInterval]);

  const handleNodeSelect = useCallback((node) => {
    setIsPaused(true);
    setActiveNodeId(node.id);
    onNodeSelect?.(node);
  }, [onNodeSelect]);

  return (
    <section
      ref={containerRef}
      className="hub-visualization"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Interactive AI Architecture Map"
    >
      <div className="container">
        {/* Header Section */}
        <header className="hub-header text-center">
          <span className="hub-tag">⚡ {subtitle}</span>
          <h2 className="hub-title">{title}</h2>
          <p className="hub-subtitle">{description}</p>
        </header>

        <div className="hub-wrapper">
          {/* Circular Interactive Graph View */}
          <div className="hub-graph-container" role="region" aria-label="Interactive Node Graph">
            {/* SVG Dynamic Connection Lines */}
            <svg className="hub-svg" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                {processedNodes.map((node) => {
                  const x2 = 400 + Math.cos((node.angle * Math.PI) / 180) * radius;
                  const y2 = 400 + Math.sin((node.angle * Math.PI) / 180) * radius;
                  return (
                    <linearGradient
                      key={`grad-${node.id}`}
                      id={`grad-${node.id}`}
                      gradientUnits="userSpaceOnUse"
                      x1="400"
                      y1="400"
                      x2={x2}
                      y2={y2}
                    >
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor={node.color} stopOpacity="0.95" />
                    </linearGradient>
                  );
                })}
              </defs>

              {/* Background Orbit Ring */}
              <circle cx="400" cy="400" r={radius} className="hub-orbit-ring" />

              {/* Connecting Rays */}
              {processedNodes.map((node) => {
                const x = 400 + Math.cos((node.angle * Math.PI) / 180) * radius;
                const y = 400 + Math.sin((node.angle * Math.PI) / 180) * radius;
                const isActive = activeNode?.id === node.id;

                return (
                  <g key={`connection-${node.id}`}>
                    <line
                      x1="400"
                      y1="400"
                      x2={x}
                      y2={y}
                      stroke={isActive ? node.color : `url(#grad-${node.id})`}
                      strokeWidth={isActive ? '3.5' : '1.5'}
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
                <span className="core-logo-icon" aria-hidden="true">⚡</span>
                <span className="core-title">Inalgo AI</span>
                <span className="core-subtext">CORE ENGINE</span>
              </div>
            </div>

            {/* Orbiting Interactive Node Buttons */}
            {processedNodes.map((node) => {
              const x = Math.cos((node.angle * Math.PI) / 180) * radius;
              const y = Math.sin((node.angle * Math.PI) / 180) * radius;
              const isActive = activeNode?.id === node.id;

              return (
                <button
                  key={node.id}
                  type="button"
                  className={`hub-node-btn ${isActive ? 'node-active' : ''}`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    '--accent-color': node.color
                  }}
                  onMouseEnter={() => handleNodeSelect(node)}
                  onClick={() => handleNodeSelect(node)}
                  aria-pressed={isActive}
                  aria-label={`${node.title} module`}
                >
                  <div className="node-icon-wrapper" style={{ borderColor: node.color }}>
                    <span aria-hidden="true">{node.icon}</span>
                  </div>
                  <span className="node-label">{node.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Node Detailed Info Panel */}
          {activeNode && (
            <article className="hub-info-panel" style={{ '--active-color': activeNode.color }}>
              <div className="info-badge-row">
                <span className="info-status-badge">
                  <span className="status-dot" style={{ backgroundColor: activeNode.color }}></span>
                  Connected Core Module
                </span>
                <span className="info-metric-tag">{activeNode.metrics}</span>
              </div>

              <div className="info-header">
                <span
                  className="info-icon"
                  style={{ backgroundColor: `${activeNode.color}20`, borderColor: activeNode.color }}
                  aria-hidden="true"
                >
                  {activeNode.icon}
                </span>
                <div>
                  <h3 className="info-title">{activeNode.title}</h3>
                  <p className="info-tagline">{activeNode.tagline}</p>
                </div>
              </div>

              <p className="info-description">{activeNode.description}</p>

              <div className="info-footer">
                <Link to={activeNode.link} className="info-link" aria-label={`Explore technical specs for ${activeNode.title}`}>
                  <span>Explore Technical Specs</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}