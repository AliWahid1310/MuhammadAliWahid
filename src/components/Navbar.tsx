"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio_theme", next);
  };

  const navLinks = [
    { label: "Work", count: "08", href: "#projects" },
    { label: "Skills", count: "06", href: "#skills" },
    { label: "AI Lab", count: "03", href: "#ai-lab" },
    { label: "Experience", count: "03+", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="header-nav">
      <div className="container nav-wrapper">
        
        {/* Left: Available Status Pill (as in reference image) */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 18px",
            borderRadius: "var(--radius-full)",
            border: "1px solid var(--border-light)",
            background: "var(--bg-card)",
            fontSize: "0.825rem",
            fontWeight: 600,
            color: "var(--text-dark)",
            boxShadow: "var(--shadow-sm)"
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
              boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.25)"
            }}
          />
          <span>Available for New Project</span>
        </div>

        {/* Center: Clean Minimalist Nav Links with [08] counters */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            listStyle: "none",
            margin: 0,
            padding: 0
          }}
          className="desktop-nav-links"
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                style={{
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--text-dark)",
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: "4px",
                  transition: "opacity 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <span>{item.label}</span>
                {item.count && (
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    [{item.count}]
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Theme switch + Let's Talk CTA button */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          
          <button
            onClick={toggleTheme}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--border-light)",
              background: "transparent",
              color: "var(--text-dark)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color 0.2s ease"
            }}
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon style={{ width: "16px", height: "16px" }} /> : <Sun style={{ width: "16px", height: "16px" }} />}
          </button>

          <a href="#contact" className="pill-btn-black">
            <span>Let's Talk</span>
            <ArrowUpRight style={{ width: "16px", height: "16px" }} />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              width: "38px",
              height: "38px",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--border-light)",
              background: "transparent",
              color: "var(--text-dark)",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center"
            }}
            className="mobile-hamburger-btn"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X style={{ width: "18px", height: "18px" }} /> : <Menu style={{ width: "18px", height: "18px" }} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg-card)",
            borderBottom: "1px solid var(--border-light)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            boxShadow: "var(--shadow-md)"
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--text-dark)",
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0"
              }}
            >
              <span>{item.label}</span>
              {item.count && (
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  [{item.count}]
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
