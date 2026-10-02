"use client";

import React from "react";
import { ArrowUp, Mail, Phone, MapPin, Heart, Sparkles, Terminal, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-light)", padding: "54px 0 36px 0", position: "relative" }}>
      <div className="container">
        
        {/* Top Tier */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px", paddingBottom: "36px", borderBottom: "1px solid var(--border-light)" }}>
          
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <div className="brand-badge">AW</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "1.15rem", color: "var(--text-dark)", letterSpacing: "-0.01em" }}>
                  Muhammad Ali Wahid
                </div>
                <div style={{ fontSize: "0.825rem", color: "var(--text-muted)" }}>
                  BS Computer Science • Air University Islamabad
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "6px" }}>
              <span className="pulse-circle" style={{ width: "6px", height: "6px" }} />
              <span style={{ color: "var(--accent-emerald)", fontWeight: 600 }}>All Systems Nominal</span>
              <span>• Islamabad, PK (UTC+5)</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "0.85rem", fontWeight: 600 }}>
            <a href="#about" style={{ color: "var(--text-muted)", textDecoration: "none" }}>About</a>
            <a href="#skills" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Skills</a>
            <a href="#projects" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Projects</a>
            <a href="#ai-lab" style={{ color: "var(--text-muted)", textDecoration: "none" }}>AI Lab</a>
            <a href="#experience" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Experience</a>
            <a href="#awards" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Honors</a>
            <a href="#contact" style={{ color: "var(--primary-hover)", textDecoration: "none" }}>Contact</a>
          </div>

          {/* Actions & Socials */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              href="https://github.com/AliWahid1310"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ width: "38px", height: "38px", padding: 0 }}
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com/in/muhammad-ali-wahid-02444736a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ width: "38px", height: "38px", padding: 0 }}
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="btn-solid"
              style={{ padding: "8px 16px", fontSize: "0.8125rem", gap: "6px" }}
              title="Return to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp style={{ width: "14px", height: "14px" }} />
            </button>
          </div>

        </div>

        {/* Bottom Tier */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "24px", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>© {new Date().getFullYear()} Muhammad Ali Wahid. Crafted with precision for enterprise impact.</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
            <span>Next.js 16</span>
            <span>•</span>
            <span>React 19</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>FastAPI & YOLOv8</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
