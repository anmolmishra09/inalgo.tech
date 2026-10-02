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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  // Close menu and scroll to top after route changes
  useEffect(() => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  // Escape key
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
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

          {/* Navigation */}
          <div
            id="mobile-navigation"
            className={`nav-wrapper ${
              menuOpen ? "open" : ""
            }`}
          >
            {/* Mobile drawer header */}
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

            {/* Links */}
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

            {/* Mobile Sign In */}
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

          {/* Desktop Sign In */}
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

          {/* Mobile Toggle */}
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
      <div
        className={`menu-overlay ${
          menuOpen ? "visible" : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}

export default Header;
