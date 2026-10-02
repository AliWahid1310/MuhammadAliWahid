"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Menu,
  X,
  Cpu,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Code2,
  FolderGit2,
  Briefcase,
  Trophy,
  Sparkles,
  Home as HomeIcon
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    // Check initial preference
    const savedTheme = localStorage.getItem("portfolio_theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio_theme", nextTheme);
    playBlip(600);
  };

  const playBlip = (freq = 440) => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch {
      // Audio context may require explicit user gesture
    }
  };

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "AI Lab", href: "#ai-lab" },
    { label: "Experience", href: "#experience" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="header-nav">
        <div className="container nav-wrapper">
          {/* Brand */}
          <a
            href="#about"
            className="brand-logo"
            onClick={() => playBlip(520)}
          >
            <div className="brand-badge">
              <span>AW</span>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.05rem", letterSpacing: "-0.02em", color: "var(--text-dark)", display: "flex", alignItems: "center", gap: "8px" }}>
                Muhammad Ali Wahid
                <span style={{ fontSize: "0.65rem", padding: "2px 6px", borderRadius: "9999px", background: "rgba(16, 185, 129, 0.15)", color: "#10b981", border: "1px solid rgba(16, 185, 129, 0.3)", fontWeight: 700 }}>
                  PRO
                </span>
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
                <span className="pulse-circle" style={{ width: "6px", height: "6px" }} />
                <span>Full-Stack & Applied AI Engineer</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.label} className="nav-link-item">
                <a
                  href={l.href}
                  onClick={() => playBlip(480)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            
            {/* Audio Toggle */}
            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) playBlip(800);
              }}
              className="btn-outline"
              style={{ width: "36px", height: "36px", padding: 0 }}
              title={soundEnabled ? "Disable UI Audio" : "Enable UI Audio"}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 style={{ width: "15px", height: "15px", color: "var(--primary)" }} />
              ) : (
                <VolumeX style={{ width: "15px", height: "15px", color: "var(--text-muted)" }} />
              )}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn-outline"
              style={{ width: "36px", height: "36px", padding: 0 }}
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Luxury"}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun style={{ width: "16px", height: "16px", color: "#fbbf24" }} />
              ) : (
                <Moon style={{ width: "16px", height: "16px", color: "#6366f1" }} />
              )}
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/AliWahid1310"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ width: "36px", height: "36px", padding: 0 }}
              title="GitHub Profile"
              onClick={() => playBlip(560)}
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/muhammad-ali-wahid-02444736a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ width: "36px", height: "36px", padding: 0 }}
              title="LinkedIn Profile"
              onClick={() => playBlip(560)}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="btn-solid"
              style={{ padding: "8px 18px", fontSize: "0.8125rem" }}
              onClick={() => playBlip(680)}
            >
              <span>Hire Me</span>
              <ArrowUpRight style={{ width: "14px", height: "14px" }} />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="btn-outline"
              style={{ display: "none", width: "38px", height: "38px", padding: 0 }}
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X style={{ width: "18px", height: "18px" }} /> : <Menu style={{ width: "18px", height: "18px" }} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "var(--bg-card)",
              borderBottom: "1px solid var(--border-light)",
              padding: "16px 24px",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "var(--shadow-lg)"
            }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => {
                  setMobileOpen(false);
                  playBlip(480);
                }}
                style={{
                  padding: "10px 14px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--text-dark)",
                  textDecoration: "none",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(255, 255, 255, 0.03)"
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Floating Action Dock */}
      <div className="floating-dock">
        <a
          href="#about"
          title="Overview"
          onClick={() => playBlip(400)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", color: "var(--text-dark)", background: "rgba(255, 255, 255, 0.08)", textDecoration: "none", transition: "all 0.2s ease" }}
        >
          <HomeIcon style={{ width: "16px", height: "16px" }} />
        </a>

        <a
          href="#skills"
          title="Skills Matrix"
          onClick={() => playBlip(440)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", color: "var(--text-dark)", background: "rgba(255, 255, 255, 0.08)", textDecoration: "none", transition: "all 0.2s ease" }}
        >
          <Code2 style={{ width: "16px", height: "16px" }} />
        </a>

        <a
          href="#projects"
          title="Featured Projects"
          onClick={() => playBlip(480)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", color: "var(--text-dark)", background: "rgba(255, 255, 255, 0.08)", textDecoration: "none", transition: "all 0.2s ease" }}
        >
          <FolderGit2 style={{ width: "16px", height: "16px" }} />
        </a>

        <a
          href="#ai-lab"
          title="AI Neural Playground"
          onClick={() => playBlip(520)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", color: "#38bdf8", background: "rgba(56, 189, 248, 0.15)", textDecoration: "none", transition: "all 0.2s ease", border: "1px solid rgba(56, 189, 248, 0.3)" }}
        >
          <Sparkles style={{ width: "16px", height: "16px" }} />
        </a>

        <a
          href="#experience"
          title="Experience & Education"
          onClick={() => playBlip(560)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", color: "var(--text-dark)", background: "rgba(255, 255, 255, 0.08)", textDecoration: "none", transition: "all 0.2s ease" }}
        >
          <Briefcase style={{ width: "16px", height: "16px" }} />
        </a>

        <a
          href="#awards"
          title="Awards & Certifications"
          onClick={() => playBlip(600)}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", color: "var(--text-dark)", background: "rgba(255, 255, 255, 0.08)", textDecoration: "none", transition: "all 0.2s ease" }}
        >
          <Trophy style={{ width: "16px", height: "16px" }} />
        </a>

        <div style={{ width: "1px", height: "20px", background: "var(--border-light)", margin: "0 2px" }} />

        <a
          href="#contact"
          className="btn-solid"
          onClick={() => playBlip(700)}
          style={{ padding: "6px 14px", fontSize: "0.75rem", borderRadius: "9999px", gap: "5px" }}
        >
          <Mail style={{ width: "13px", height: "13px" }} />
          <span>Contact</span>
        </a>
      </div>
    </>
  );
}

