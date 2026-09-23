import React, { useState } from "react";
import "./TeamIntro.css";
// Path check kar lein: Agar component src/components/ me hai to `../images/phonepe-qr.png` sahi hai.
// Agar dono src/ ke andar hi hain to `./images/phonepe-qr.png` karein.
import defaultQrImage from "../images/phonepe-qr.png";

function TeamIntro({
  badgeText = "Inalgo Innovations",
  title = "Powering Next-Gen AI & Tech Solutions",
  description = "Hum inalgo.tech par cutting-edge artificial intelligence aur scalable digital products build kar rahe hain. Aapka support humare open-source tools aur innovation labs ko aage badhane me madad karta hai.",
  buttonText = "Join Our Team",
  buttonLink = "/contact",
  payeeName = "Inalgo Tech Innovations",
  upiId = "inalgo@ybl",
  imageUrl = defaultQrImage,
}) {
  const [showQR, setShowQR] = useState(false);

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