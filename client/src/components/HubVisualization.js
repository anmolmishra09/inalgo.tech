import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './HubVisualization.css';

// Enterprise Data Model Config
const DEFAULT_NODES = [
  {
    id: 'node-llm',
    title: 'Generative AI & LLMs',
    icon: '🧠',
    color: '#7c3aed',
    tagline: 'Custom Model Fine-Tuning',
    description: 'Domain-adapted foundation models, custom LoRA fine-tuning, and private cloud deployments integrated with enterprise data controls.',
    metrics: '99.9% Context Accuracy',
    tags: ['LoRA Adapters', 'RAG Pipelines', 'Private LLM'],
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
    tags: ['ReAct Reasoning', 'Tool Use', 'Human-in-Loop'],
    link: '/services#agents'
  },
  {
    id: 'node-avatars',
    title: 'Multimodal Avatars',
    icon: '🗣️',
    color: '#0891b2',
    tagline: 'Real-Time Voice & Lip-Sync',
    description: 'Ultra-low latency streaming text-to-speech (TTS), real-time digital human rendering, and conversational audio agents.',
    metrics: '< 200ms Latency',
    tags: ['Viseme Sync', 'Low-Latency TTS', 'WebRTC'],
    link: '/services#avatars'
  },
  {
    id: 'node-mlops',
    title: 'MLOps Infrastructure',
    icon: '⚡',
    color: '#059669',
    tagline: 'Scalable Vector & RAG Pipelines',
    description: 'Production vector indexing, hybrid semantic search, real-time GPU cluster auto-scaling, and telemetry monitoring.',
    metrics: 'Auto-Scaling Clusters',
    tags: ['Vector DB', 'Kubernetes', 'Realtime Telemetry'],
    link: '/services#mlops'
  },
  {
    id: 'node-vision',
    title: 'Computer Vision',
    icon: '👁️',
    color: '#d97706',
    tagline: 'Spatial Video Intelligence',
    description: 'Automated visual inspection, real-time object detection models, generative visual pipelines, and edge device execution.',
    metrics: '60 FPS Edge Inference',
    tags: ['Edge AI', 'Object Detection', 'TensorRT'],
    link: '/services#vision'
  },
  {
    id: 'node-analytics',
    title: 'Predictive Analytics',
    icon: '📈',
    color: '#dc2626',
    tagline: 'Neural Decision Systems',
    description: 'Transforming complex enterprise datasets into real-time operational foresight through custom deep learning architectures.',
    metrics: 'Predictive Anomaly Logic',
    tags: ['Time Series', 'Root-Cause AI', 'Decision Engines'],
    link: '/services#analytics'
  },
  {
    id: 'node-cloud',
    title: 'Cloud & API Integration',
    icon: '☁️',
    color: '#2563eb',
    tagline: 'High-Throughput Webhooks',
    description: 'Seamless integration with enterprise single-sign-on (SSO), high-throughput REST/GraphQL webhooks, and secure cloud endpoints.',
    metrics: 'Enterprise SSO & Webhooks',
    tags: ['Zero-Trust', 'GraphQL Webhooks', 'mTLS'],
    link: '/services#cloud'
  }
];

export default function HubVisualization({
  title = "Explore Our AI Architecture",
  subtitle = "Interactive Capabilities Hub",
  description = "Hover or select any node to inspect how our core AI modules interconnect across the enterprise engine runtime.",
  nodes = DEFAULT_NODES,
  autoRotateInterval = 4200,
  onNodeSelect
}) {
  const [activeNodeId, setActiveNodeId] = useState(() => nodes[0]?.id || '');
  const [isPaused, setIsPaused] = useState(false);
  const [isManualLocked, setIsManualLocked] = useState(false);
  const [radius, setRadius] = useState(250);

  const containerRef = useRef(null);

  // Compute angles offset to start at the top (-90deg / 12 o'clock)
  const processedNodes = useMemo(() => {
    const total = nodes.length;
    const angleStep = 360 / (total || 1);
    return nodes.map((node, index) => ({
      ...node,
      angle: index * angleStep - 90
    }));
  }, [nodes]);

  const activeIndex = useMemo(() => {
    const idx = processedNodes.findIndex((n) => n.id === activeNodeId);
    return idx !== -1 ? idx : 0;
  }, [processedNodes, activeNodeId]);

  const activeNode = processedNodes[activeIndex] || processedNodes[0];

  // Dynamic radius calculated from element width
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        if (width < 450) setRadius(120);
        else if (width < 600) setRadius(155);
        else if (width < 900) setRadius(195);
        else if (width < 1200) setRadius(240);
        else setRadius(265);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % processedNodes.length;
    const target = processedNodes[nextIdx];
    setActiveNodeId(target.id);
    onNodeSelect?.(target);
  }, [activeIndex, processedNodes, onNodeSelect]);

  const handlePrev = useCallback(() => {
    const prevIdx = (activeIndex - 1 + processedNodes.length) % processedNodes.length;
    const target = processedNodes[prevIdx];
    setActiveNodeId(target.id);
    onNodeSelect?.(target);
  }, [activeIndex, processedNodes, onNodeSelect]);

  // Orbit rotation loop
  useEffect(() => {
    if (isPaused || isManualLocked || processedNodes.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoRotateInterval);

    return () => clearInterval(timer);
  }, [isPaused, isManualLocked, autoRotateInterval, handleNext, processedNodes.length]);

  const handleSelect = useCallback(
    (node, manualClick = false) => {
      setActiveNodeId(node.id);
      if (manualClick) {
        setIsManualLocked(true);
      }
      onNodeSelect?.(node);
    },
    [onNodeSelect]
  );

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      handlePrev();
    }
  };

  return (
    <section
      ref={containerRef}
      className="hub-visualization"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => !isManualLocked && setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Interactive AI Architecture Map"
    >
      <div className="container">
        {/* Header Section */}
        <header className="hub-header text-center">
          <span className="hub-tag">⚡ {subtitle}</span>
          <h2 className="hub-title">{title}</h2>
          <p className="hub-subtitle">{description}</p>
        </header>

        {/* Interactive Controls Bar
        <div className="hub-toolbar" role="toolbar" aria-label="Orbit Navigation Controls">
          <div className="hub-controls">
            <button
              type="button"
              className="hub-ctrl-btn"
              onClick={handlePrev}
              aria-label="Previous Module"
              title="Previous Module (ArrowLeft)"
            >
              ‹
            </button>
            <button
              type="button"
              className={`hub-ctrl-btn ${isManualLocked || isPaused ? 'active' : ''}`}
              onClick={() => {
                setIsManualLocked(!isManualLocked);
                setIsPaused(!isPaused);
              }}
              aria-label={isManualLocked ? 'Resume Auto-Orbit' : 'Pause Auto-Orbit'}
            >
              {isManualLocked ? '▶ Resume' : '❚❚ Pause'}
            </button>
            <button
              type="button"
              className="hub-ctrl-btn"
              onClick={handleNext}
              aria-label="Next Module"
              title="Next Module (ArrowRight)"
            >
              ›
            </button>
          </div>
          <span className="hub-counter" aria-live="polite">
            Node {activeIndex + 1} of {processedNodes.length}
          </span>
        </div> */}

        <div className="hub-wrapper">
          {/* Circular Interactive Graph */}
          <div
            className="hub-graph-container"
            role="tablist"
            aria-label="Interconnected Architecture Modules"
          >
            {/* SVG Connecting Ray Lines & Particles */}
            <svg
              className="hub-svg"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                {processedNodes.map((node) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x2 = 400 + Math.cos(rad) * radius;
                  const y2 = 400 + Math.sin(rad) * radius;
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
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.15" />
                      <stop offset="100%" stopColor={node.color} stopOpacity="0.85" />
                    </linearGradient>
                  );
                })}
              </defs>

              {/* Background Orbit Ring */}
              <circle cx="400" cy="400" r={radius} className="hub-orbit-ring" />

              {/* Connecting Rays */}
              {processedNodes.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const x = 400 + Math.cos(rad) * radius;
                const y = 400 + Math.sin(rad) * radius;
                const isActive = activeNode?.id === node.id;

                return (
                  <g key={`connection-${node.id}`}>
                    <line
                      x1="400"
                      y1="400"
                      x2={x}
                      y2={y}
                      stroke={isActive ? node.color : `url(#grad-${node.id})`}
                      strokeWidth={isActive ? '3' : '1.5'}
                      className={`hub-line ${isActive ? 'line-active' : ''}`}
                      style={{ '--active-color': node.color }}
                    />
                    {isActive && (
                      <circle className="hub-pulse-dot" r="5" fill={node.color}>
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

            {/* Central Core Engine */}
            <div className="hub-center-core" aria-label="Inalgo AI Central Hub">
              <div className="core-ring core-ring-1" />
              <div className="core-ring core-ring-2" />
              <div className="core-content">
                <span className="core-logo-icon" aria-hidden="true">⚡</span>
                <span className="core-title">Inalgo AI</span>
                <span className="core-subtext">CORE RUNTIME</span>
              </div>
            </div>

            {/* Orbiting Interactive Node Buttons */}
            {processedNodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isActive = activeNode?.id === node.id;

              return (
                <button
                  key={node.id}
                  id={`tab-${node.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${node.id}`}
                  className={`hub-node-btn ${isActive ? 'node-active' : ''}`}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    '--accent-color': node.color,
                    '--node-color': node.color
                  }}
                  onMouseEnter={() => handleSelect(node, false)}
                  onClick={() => handleSelect(node, true)}
                >
                  <div className="node-icon-wrapper">
                    <span aria-hidden="true">{node.icon}</span>
                  </div>
                  <span className="node-label">{node.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Node Detailed Info Panel */}
          {activeNode && (
            <article
              id={`panel-${activeNode.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeNode.id}`}
              className="hub-info-panel"
              style={{
                '--active-color': activeNode.color,
                '--accent-color': activeNode.color
              }}
            >
              <div className="info-badge-row">
                <span className="info-status-badge">
                  <span
                    className="status-dot"
                    style={{ backgroundColor: activeNode.color }}
                  />
                  Connected Module
                </span>
                <span className="info-metric-tag">{activeNode.metrics}</span>
              </div>

              <div className="info-header">
                <div
                  className="info-icon"
                  style={{
                    backgroundColor: `${activeNode.color}15`,
                    borderColor: activeNode.color,
                    color: activeNode.color
                  }}
                  aria-hidden="true"
                >
                  {activeNode.icon}
                </div>
                <div>
                  <h3 className="info-title">{activeNode.title}</h3>
                  <p className="info-tagline">{activeNode.tagline}</p>
                </div>
              </div>

              <p className="info-description">{activeNode.description}</p>

              {activeNode.tags && (
                <div className="info-tags" aria-label="Key Capabilities">
                  {activeNode.tags.map((tag) => (
                    <span key={tag} className="info-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="info-footer">
                <Link
                  to={activeNode.link}
                  className="info-link"
                  aria-label={`Explore technical specifications for ${activeNode.title}`}
                >
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