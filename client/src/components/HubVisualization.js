import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HubVisualization.css';

const EXPERTISE_NODES = [
  {
    id: 1,
    title: 'Generative AI & LLMs',
    icon: '🧠',
    color: '#8b5cf6',
    angle: 0,
    description: 'Custom fine-tuning, prompt engineering, and cloud deployment of enterprise large language models.',
    link: '/services'
  },
  {
    id: 2,
    title: 'Autonomous AI Agents',
    icon: '🤖',
    color: '#ec4899',
    angle: 51.43,
    description: 'Multi-agent orchestration systems built for multi-step complex workflows and tool usage.',
    link: '/services'
  },
  {
    id: 3,
    title: 'Multimodal Avatars',
    icon: '🗣️',
    color: '#06b6d4',
    angle: 102.86,
    description: 'Digital human avatars featuring real-time lip-syncing and low-latency speech synthesis.',
    link: '/services'
  },
  {
    id: 4,
    title: 'MLOps Infrastructure',
    icon: '⚡',
    color: '#10b981',
    angle: 154.29,
    description: 'Scalable model monitoring, vector databases for RAG, and low-latency inference servers.',
    link: '/services'
  },
  {
    id: 5,
    title: 'Computer Vision',
    icon: '👁️',
    color: '#f59e0b',
    angle: 205.71,
    description: 'Real-time video processing, visual inspection pipelines, and custom object detection.',
    link: '/services'
  },
  {
    id: 6,
    title: 'Predictive Analytics',
    icon: '📈',
    color: '#ef4444',
    angle: 257.14,
    description: 'Transforming enterprise data into actionable insights through custom deep learning architectures.',
    link: '/services'
  },
  {
    id: 7,
    title: 'Cloud & API Integration',
    icon: '☁️',
    color: '#3b82f6',
    angle: 308.57,
    description: 'Seamless deployment to high-performance GPU clusters and secure web REST APIs.',
    link: '/services'
  }
];

function HubVisualization() {
  const [activeNodeId, setActiveNodeId] = useState(1);
  const activeNode = EXPERTISE_NODES.find(n => n.id === activeNodeId) || EXPERTISE_NODES[0];

  return (
    <section className="hub-visualization">
      <div className="container">
        <div className="hub-header text-center">
          <span className="hub-tag">INTERACTIVE CAPABILITIES HUB</span>
          <h2 className="hub-title">Explore Our AI Architecture</h2>
          <p className="hub-subtitle">
            Hover over or select any node to inspect how our core AI technologies interconnect.
          </p>
        </div>

        <div className="hub-wrapper">
          {/* Circular Interactive Graph View (Desktop/Tablet) */}
          <div className="hub-graph-container">
            {/* Background SVG Connections */}
            <svg className="hub-svg" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {EXPERTISE_NODES.map(node => (
                  <linearGradient
                    key={`grad-${node.id}`}
                    id={`grad-${node.id}`}
                    gradientUnits="userSpaceOnUse"
                    x1="400"
                    y1="400"
                    x2={400 + Math.cos((node.angle * Math.PI) / 180) * 260}
                    y2={400 + Math.sin((node.angle * Math.PI) / 180) * 260}
                  >
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor={node.color} stopOpacity="0.9" />
                  </linearGradient>
                ))}
              </defs>

              {EXPERTISE_NODES.map(node => {
                const x = 400 + Math.cos((node.angle * Math.PI) / 180) * 260;
                const y = 400 + Math.sin((node.angle * Math.PI) / 180) * 260;
                const isActive = activeNodeId === node.id;

                return (
                  <g key={`connection-${node.id}`}>
                    <line
                      x1="400"
                      y1="400"
                      x2={x}
                      y2={y}
                      stroke={`url(#grad-${node.id})`}
                      strokeWidth={isActive ? "4" : "2"}
                      className={`hub-line ${isActive ? 'line-active' : ''}`}
                    />
                    {isActive && (
                      <circle className="hub-pulse-dot" r="5" fill={node.color}>
                        <animateMotion
                          dur="1.5s"
                          repeatCount="indefinite"
                          path={`M 400 400 L ${x} ${y}`}
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central Core Hub */}
            <div className="hub-center-core">
              <div className="core-ring core-ring-1"></div>
              <div className="core-ring core-ring-2"></div>
              <div className="core-content">
                <span className="core-logo-icon">⚡</span>
                <span className="core-title">Inalgo AI</span>
              </div>
            </div>

            {/* Orbiting Interactive Nodes */}
            {EXPERTISE_NODES.map(node => {
              const radius = 260;
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
                  onMouseEnter={() => setActiveNodeId(node.id)}
                  onClick={() => setActiveNodeId(node.id)}
                  aria-label={node.title}
                >
                  <div className="node-icon-wrapper" style={{ backgroundColor: node.color }}>
                    <span>{node.icon}</span>
                  </div>
                  <span className="node-label">{node.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Node Info Panel */}
          <div className="hub-info-panel" style={{ '--active-color': activeNode.color }}>
            <div className="info-header">
              <span className="info-icon" style={{ backgroundColor: activeNode.color }}>
                {activeNode.icon}
              </span>
              <div>
                <h3 className="info-title">{activeNode.title}</h3>
                <span className="info-status">Connected Core Module</span>
              </div>
            </div>
            <p className="info-description">{activeNode.description}</p>
            <Link to={activeNode.link} className="info-link">
              <span>Learn More</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HubVisualization;