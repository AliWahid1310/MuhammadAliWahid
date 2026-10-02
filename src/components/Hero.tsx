"use client";

import React from "react";
import { ArrowUpRight, Mail, Phone, MessageCircle } from "lucide-react";
import FishAnimation from "./FishAnimation";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "120px",
        paddingBottom: "48px",
        overflow: "hidden",
        backgroundColor: "var(--bg-primary)"
      }}
    >
      {/* Background Animated Fishes Swimming Up and Down */}
      <FishAnimation />

      <div className="container" style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        
        {/* Top Spacer */}
        <div style={{ height: "20px" }} />

        {/* Center: Massive Editorial Headline Matching Reference Image */}
        <div style={{ textAlign: "center", margin: "20px 0 30px 0" }}>
          <div
            className="hero-giant-title"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.25em"
            }}
          >
            <span className="text-stroke">MUHAMMAD</span>
            <span style={{ color: "var(--text-dark)" }}>ALI WAHID</span>
          </div>

          {/* Editorial Floating Center Plaque (where headshot was in reference) */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "8px 20px",
                borderRadius: "var(--radius-full)",
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-md)"
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#09090b"
                }}
              />
              <span style={{ fontSize: "0.825rem", fontWeight: 700, fontFamily: "var(--font-mono)", color: "var(--text-dark)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Air University Islamabad • Full-Stack & AI
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Split (Matching Left and Right sections of reference image) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "40px",
            alignItems: "flex-end",
            marginTop: "auto"
          }}
          className="hero-bottom-grid"
        >
          {/* Bottom Left: Role Title, Description, and Let's collaborate button */}
          <div style={{ maxWidth: "520px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "var(--text-dark)",
                marginBottom: "8px",
                letterSpacing: "-0.02em"
              }}
            >
              Full-Stack & AI Engineer
            </h2>
            <p
              style={{
                fontSize: "0.975rem",
                color: "var(--text-muted)",
                lineHeight: "1.65",
                marginBottom: "22px"
              }}
            >
              Designing and building high-performance web systems, distributed .NET socket engines, and applied computer vision platforms that are clear, resilient, and conversion-focused.
            </p>
            <a href="#contact" className="pill-btn-black">
              <span>Let's collaborate</span>
              <ArrowUpRight style={{ width: "16px", height: "16px" }} />
            </a>
          </div>

          {/* Bottom Right: Stacked Editorial Social Pills (Exact match to reference) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "10px"
            }}
            className="hero-social-stack"
          >
            <a
              href="https://github.com/AliWahid1310"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/muhammad-ali-wahid-02444736a"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:aliwahid8@hotmail.com"
              className="social-pill"
            >
              <Mail style={{ width: "16px", height: "16px" }} />
              <span>Email</span>
            </a>

            <a
              href="https://wa.me/923255611627?text=Hi%20Muhammad%20Ali"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <MessageCircle style={{ width: "16px", height: "16px" }} />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
