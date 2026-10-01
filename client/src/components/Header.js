import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Lock page scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  // Close menu with Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="floating-header">
        <nav
          className="floating-navbar"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div className="navbar-brand">
            <Link
              to="/"
              onClick={closeMenu}
              aria-label="Go to homepage"
            >
              <Logo />
            </Link>
          </div>

          {/* Desktop / Mobile Navigation */}
          <div
            className={`nav-wrapper ${
              menuOpen ? "open" : ""
            }`}
            aria-hidden={!menuOpen}
          >
            {/* Mobile Header */}
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">
                Navigation
              </span>

              <button
                type="button"
                className="nav-close-btn"
                onClick={closeMenu}
                aria-label="Close navigation"
              >
                <span />
                <span />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="nav-menu">
              {navItems.map((item) => {
                const isActive =
                  location.pathname === item.path;

                return (
                  <li
                    className="nav-item"
                    key={item.path}
                  >
                    <Link
                      to={item.path}
                      className={`nav-link ${
                        isActive ? "active" : ""
                      }`}
                      onClick={closeMenu}
                      aria-current={
                        isActive ? "page" : undefined
                      }
                    >
                      <span>{item.label}</span>

                      <svg
                        className="mobile-arrow"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile CTA */}
            <div className="mobile-menu-footer">
              <Link
                to="/signin"
                className="mobile-signin-btn"
                onClick={closeMenu}
              >
                <span>Sign In</span>

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Desktop CTA */}
          <Link
            to="/signin"
            className="signin-btn"
          >
            <span>Sign In</span>

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`menu-toggle ${
              menuOpen ? "active" : ""
            }`}
            onClick={toggleMenu}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <button
        type="button"
        className={`menu-overlay ${
          menuOpen ? "visible" : ""
        }`}
        onClick={closeMenu}
        aria-label="Close navigation menu"
        tabIndex={menuOpen ? 0 : -1}
      />
    </>
  );
}

export default Header;