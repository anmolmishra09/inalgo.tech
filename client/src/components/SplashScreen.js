
import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

// Import IGA logo directly
import igaLogo from "../images/iga.jpg";

const SplashScreen = ({
  duration = 2800,
  onComplete,
  brandName = "INALGO",
  logoSrc = igaLogo,
}) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrame;
    let fadeTimer;
    let completeTimer;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min(
        (elapsed / duration) * 100,
        100
      );

      setProgress(percentage);

      if (percentage < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        fadeTimer = setTimeout(() => {
          setIsFadingOut(true);
        }, 150);

        completeTimer = setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 750);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`inalgo-splash ${
        isFadingOut ? "fade-out" : ""
      }`}
    >
      {/* Background */}
      <div className="splash-background">
        <div className="splash-gradient" />
        <div className="splash-grid" />

        <div className="splash-glow splash-glow-one" />
        <div className="splash-glow splash-glow-two" />

        {/* Floating Particles */}
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="splash-particle"
            style={{
              "--particle-index": index,
              "--particle-x": `${(index * 37) % 100}%`,
              "--particle-y": `${(index * 53) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="splash-content">

        {/* Logo */}
        <div className="splash-logo-wrapper">
          <div className="splash-logo-ring" />

          <div className="splash-logo">
            <img
              src={logoSrc}
              alt={`${brandName} Logo`}
              className="splash-logo-img"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                console.error("IGA logo image failed to load:", logoSrc);
              }}
            />
          </div>
        </div>

        {/* Brand Name */}
        <div className="splash-brand">
          <h1>{brandName}</h1>

          <p className="splash-tagline">
            Smart Innovation.
            <span> Seamless Experience.</span>
          </p>
        </div>

        {/* Progress Bar */}
        <div className="splash-loader">

          <div className="splash-loader-track">
            <div
              className="splash-loader-progress"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="splash-loader-info">
            <span>
              {progress < 100
                ? "Preparing your workspace..."
                : "Welcome"}
            </span>

            <span className="splash-percentage">
              {Math.round(progress)}%
            </span>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="splash-footer">
        <span>INTELLIGENT SOLUTIONS</span>
        <span className="splash-footer-dot" />
        <span>BUILT FOR GROWTH</span>
      </footer>
    </div>
  );
};

export default SplashScreen;
