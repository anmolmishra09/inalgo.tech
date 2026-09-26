import React, { useState } from "react";
import "./TeamIntro.css";
// Path check kar lein: Agar component src/components/ me hai to `../images/phonepe-qr.png` sahi hai.
// Agar dono src/ ke andar hi hain to `./images/phonepe-qr.png` karein.
import defaultQrImage from "../images/phonepe-qr.png";

// Engineering team ka sample data (Aap ise apne hisaab se update ya props me pass kar sakte hain)
const DEFAULT_ENGINEERING_MEMBERS = [
  {
    id: 1,
    name: "Sarah Lin",
    role: "VP of AI & Systems",
    bio: "Distributed neural models and high-throughput inference engines.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    accentColor: "#6366f1", // Indigo
    github: "#",
    linkedin: "#",
  },
  {
    id: 2,
    name: "David K.",
    role: "Principal Cloud Architect",
    bio: "Multi-region Kubernetes clusters and bare-metal edge nodes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    accentColor: "#06b6d4", // Cyan
    github: "#",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Lead ML Engineer",
    bio: "Agentic workflows, model quantization, and real-time streaming.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    accentColor: "#10b981", // Emerald
    github: "#",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Marcus Chen",
    role: "Staff Infrastructure Dev",
    bio: "Zero-trust security mesh, sub-millisecond query pipelines.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    accentColor: "#a855f7", // Purple
    github: "#",
    linkedin: "#",
  },
];

function TeamIntro({
  badgeText = "Inalgo Innovations",
  title = "Powering Next-Gen AI & Tech Solutions",
  description = "Hum inalgo.tech par cutting-edge artificial intelligence aur scalable digital products build kar rahe hain. Aapka support humare open-source tools aur innovation labs ko aage badhane me madad karta hai.",
  buttonText = "Join Our Team",
  buttonLink = "/contact",
  payeeName = "Inalgo Tech Innovations",
  upiId = "inalgo@ybl",
  imageUrl = defaultQrImage,
  teamMembers = DEFAULT_ENGINEERING_MEMBERS,
}) {
  const [showQR, setShowQR] = useState(false);

  // Seamless infinite loop ke liye list ko double kar dete hain
  const duplicatedTeam = [...teamMembers, ...teamMembers];

  return (
    <>
      <section className="team-intro-section">
        <div className="team-intro-container">
          <div className="team-intro-card">

            {/* ================= CONTENT ================= */}
            <div className="team-intro-content">
              <span className="team-intro-badge">
                <span className="badge-dot"></span>
                {badgeText}
              </span>

              <h1 className="team-intro-title">
                {title}
              </h1>

              <p className="team-intro-description">
                {description}
              </p>

              <div className="team-intro-actions">
                <a
                  href={buttonLink}
                  className="team-intro-button"
                >
                  {buttonText}
                  <span className="button-arrow">→</span>
                </a>

                <button
                  type="button"
                  className="scan-button"
                  onClick={() => setShowQR(true)}
                >
                  Scan & Support
                  <span>↗</span>
                </button>
              </div>
            </div>

            {/* ================= QR PAYMENT CARD ================= */}
            <div className="team-intro-image">
              <div
                className="qr-payment-card"
                onClick={() => setShowQR(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setShowQR(true);
                  }
                }}
              >
                {/* Floating particles */}
                <span className="qr-particle particle-one"></span>
                <span className="qr-particle particle-two"></span>
                <span className="qr-particle particle-three"></span>
                <span className="qr-particle particle-four"></span>

                {/* PhonePe Header */}
                <div className="phonepe-header">
                  <div className="phonepe-logo">
                    <span>पे</span>
                  </div>

                  <span className="phonepe-name">
                    PhonePe / UPI
                  </span>
                </div>

                <div className="phonepe-accepted">
                  ACCEPTED HERE
                </div>

                <p className="scan-text">
                  Scan & Pay Using Any UPI App
                </p>

                {/* QR Wrapper */}
                <div className="qr-wrapper">
                  <div className="qr-glow"></div>

                  <div className="qr-image-container">
                    <img
                      src={imageUrl}
                      alt={`${payeeName} Payment QR`}
                      className="qr-image"
                    />

                    {/* Animated scanning line */}
                    <div className="qr-scanner-line"></div>

                    {/* QR center glow */}
                    <div className="qr-center-glow"></div>
                  </div>

                  {/* Corner decorations */}
                  <span className="qr-corner qr-corner-tl"></span>
                  <span className="qr-corner qr-corner-tr"></span>
                  <span className="qr-corner qr-corner-bl"></span>
                  <span className="qr-corner qr-corner-br"></span>
                </div>

                <div className="qr-owner">
                  {payeeName}
                </div>

                <div className="qr-interaction">
                  <span className="interaction-icon">⌁</span>
                  Click QR to enlarge
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= MEET THE ENGINEERING TEAM (ANIMATED SLIDER) ================= */}
        <div className="eng-team-wrapper">
          <div className="eng-team-header">
            <span className="eng-team-pill">Core Engineering</span>
            <h2 className="eng-team-title">MEET THE ENGINEERING TEAM</h2>
            <p className="eng-team-subtitle">
              The people building Inalgo's AI, cloud, and software infrastructure.
            </p>
          </div>

          {/* Sliding Marquee Track */}
          <div className="eng-marquee-container">
            <div className="eng-marquee-track">
              {duplicatedTeam.map((member, idx) => (
                <div
                  key={`${member.id}-${idx}`}
                  className="eng-card"
                  style={{ "--card-accent": member.accentColor || "#6366f1" }}
                >
                  <div className="eng-card-avatar-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="eng-card-avatar"
                      loading="lazy"
                    />
                    <div className="eng-card-ring"></div>
                  </div>

                  <div className="eng-card-info">
                    <h4 className="eng-card-name">{member.name}</h4>
                    <span className="eng-card-role">{member.role}</span>
                    <p className="eng-card-bio">{member.bio}</p>
                  </div>

                  {/* Social Action Hover Icons */}
                  <div className="eng-card-actions">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        className="eng-social-btn"
                        aria-label="GitHub"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="eng-social-btn"
                        aria-label="LinkedIn"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= QR MODAL ================= */}
      {showQR && (
        <div
          className="qr-modal-overlay"
          onClick={() => setShowQR(false)}
        >
          <div
            className="qr-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="qr-modal-close"
              onClick={() => setShowQR(false)}
              aria-label="Close QR code"
            >
              ×
            </button>

            <div className="qr-modal-header">
              <div className="phonepe-logo modal-logo">
                <span>पे</span>
              </div>

              <div>
                <h3>UPI Instant Pay</h3>
                <p>PhonePe • GPay • Paytm</p>
              </div>
            </div>

            <div className="qr-modal-image-wrapper">
              <img
                src={imageUrl}
                alt={`${payeeName} payment QR code`}
                className="qr-modal-image"
              />
            </div>

            <h4>{payeeName}</h4>
            <p className="qr-upi-id" style={{ fontSize: "0.85rem", opacity: 0.8, margin: "2px 0 10px" }}>
              UPI ID: {upiId}
            </p>

            <p className="qr-modal-description">
              Scan this QR code using PhonePe, Google Pay, Paytm ya kisi bhi UPI app se direct support send karne ke liye.
            </p>

            <button
              type="button"
              className="qr-modal-done"
              onClick={() => setShowQR(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TeamIntro;