"use client";

import React from "react";
import { Trophy, Award, CheckCircle2, Star, Sparkles, ExternalLink } from "lucide-react";

export default function RealAwards() {
  const honors = [
    {
      title: "1st Place Winner – PitchFest Competition",
      org: "FAST-NUCES Islamabad (2025)",
      desc: "Won 1st place pitching an AI-Powered Scam Detection Platform, evaluating real-time conversational markers and fraud detection algorithms.",
      icon: Trophy,
      badge: "1st Place Gold",
      accent: "#d97706",
      bg: "#fffbeb"
    },
    {
      title: "Runner-Up – University Round",
      org: "Hult Prize 2026",
      desc: "Recognized as university round runner-up for developing social enterprise solutions targeting sustainable technological innovation.",
      icon: Star,
      badge: "Runner-Up",
      accent: "#2563eb",
      bg: "#eff6ff"
    },
    {
      title: "Campus Director",
      org: "Millennium Fellowship (MCN and UNAI)",
      desc: "Selected as Campus Director representing the United Nations Academic Impact (UNAI) and Millennium Campus Network to lead campus fellowship initiatives.",
      icon: Award,
      badge: "Global Leadership",
      accent: "#7c3aed",
      bg: "#f5f3ff"
    },
    {
      title: "Campus Ambassador",
      org: "Nestlé",
      desc: "Appointed student brand ambassador representing Nestlé corporate programs and campus outreach initiatives.",
      icon: Sparkles,
      badge: "Corporate Leadership",
      accent: "#059669",
      bg: "#ecfdf5"
    }
  ];

  const certifications = [
    { name: "Generative AI Fundamentals", issuer: "Databricks", category: "AI / ML" },
    { name: "Plan & Prepare to Develop AI Solutions on Azure", issuer: "Microsoft", category: "Cloud AI" },
    { name: "Introduction to Microsoft 365 Copilot", issuer: "Microsoft", category: "AI Productivity" },
    { name: "McKinsey.org Forward Program", issuer: "McKinsey & Company", category: "Leadership & Strategy" },
    { name: "Advanced Relational Database and SQL", issuer: "Coursera", category: "Databases" },
    { name: "Business Analysis & Process Management", issuer: "Coursera", category: "Operations" },
    { name: "Mastering Operations & Project Management", issuer: "UniAthena", category: "Management" },
    { name: "HubSpot Social Media Marketing Certification", issuer: "HubSpot Academy", category: "Digital Marketing" },
  ];

  return (
    <section id="awards" className="section-wrapper bg-grid">
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag">
            <Trophy style={{ width: "12px", height: "12px" }} />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="section-title">Awards & Verified Credentials</h2>
          <p className="section-subtitle" style={{ margin: "10px auto 0 auto" }}>
            Recognized in national tech competitions, international fellowships, and certified by industry leaders in AI, Cloud, and Strategy.
          </p>
        </div>

        {/* Top 4 Honors Cards */}
        <div className="grid-2" style={{ marginBottom: "36px" }}>
          {honors.map((h, i) => {
            const Icon = h.icon;
            return (
              <div key={i} className="clean-card" style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-md)", background: h.bg, color: h.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon style={{ width: "24px", height: "24px" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "6px", marginBottom: "4px" }}>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-dark)" }}>
                      {h.title}
                    </h3>
                    <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: h.accent, background: h.bg, padding: "2px 8px", borderRadius: "var(--radius-full)" }}>
                      {h.badge}
                    </span>
                  </div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--primary)", marginBottom: "6px" }}>
                    {h.org}
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: "1.6" }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 8 Professional Certifications Grid */}
        <div className="clean-card" style={{ padding: "28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <Award style={{ width: "22px", height: "22px", color: "var(--primary)" }} />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-dark)" }}>
              Professional Industry Certifications
            </h3>
          </div>

          <div className="grid-4">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                style={{ padding: "12px 14px", borderRadius: "var(--radius-sm)", background: "var(--bg-secondary)", border: "1px solid var(--border-light)" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--primary)" }}>
                    {cert.category}
                  </span>
                  <CheckCircle2 style={{ width: "14px", height: "14px", color: "var(--accent-emerald)" }} />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)", lineHeight: "1.4", marginBottom: "4px" }}>
                  {cert.name}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  {cert.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
