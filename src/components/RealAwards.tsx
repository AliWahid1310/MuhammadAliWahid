"use client";

import React, { useState } from "react";
import {
  Trophy,
  Award,
  CheckCircle2,
  Star,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Medal,
  Check
} from "lucide-react";

export default function RealAwards() {
  const [certFilter, setCertFilter] = useState<string>("all");

  const honors = [
    {
      title: "1st Place Winner – PitchFest Competition",
      org: "FAST-NUCES Islamabad (2025)",
      desc: "Won 1st place pitching an AI-Powered Scam Detection Platform, evaluating real-time conversational markers and fraud detection algorithms.",
      icon: Trophy,
      badge: "1st Place Gold",
      accent: "#f59e0b"
    },
    {
      title: "Runner-Up – University Round",
      org: "Hult Prize 2026",
      desc: "Recognized as university round runner-up for developing social enterprise solutions targeting sustainable technological innovation.",
      icon: Star,
      badge: "Runner-Up",
      accent: "#3b82f6"
    },
    {
      title: "Campus Director",
      org: "Millennium Fellowship (MCN and UNAI)",
      desc: "Selected as Campus Director representing the United Nations Academic Impact (UNAI) and Millennium Campus Network to lead campus fellowship initiatives.",
      icon: Medal,
      badge: "Global Leadership",
      accent: "#8b5cf6"
    },
    {
      title: "Campus Ambassador",
      org: "Nestlé",
      desc: "Appointed student brand ambassador representing Nestlé corporate programs and campus outreach initiatives.",
      icon: Sparkles,
      badge: "Corporate Leadership",
      accent: "#10b981"
    }
  ];

  const certifications = [
    { name: "Generative AI Fundamentals", issuer: "Databricks", category: "AI / ML", year: "2024" },
    { name: "Plan & Prepare to Develop AI Solutions on Azure", issuer: "Microsoft", category: "Cloud AI", year: "2024" },
    { name: "Introduction to Microsoft 365 Copilot", issuer: "Microsoft", category: "AI Productivity", year: "2024" },
    { name: "McKinsey.org Forward Program", issuer: "McKinsey & Company", category: "Leadership & Strategy", year: "2024" },
    { name: "Advanced Relational Database and SQL", issuer: "Coursera", category: "Databases", year: "2024" },
    { name: "Business Analysis & Process Management", issuer: "Coursera", category: "Operations", year: "2024" },
    { name: "Mastering Operations & Project Management", issuer: "UniAthena", category: "Management", year: "2023" },
    { name: "HubSpot Social Media Marketing Certification", issuer: "HubSpot Academy", category: "Marketing", year: "2023" },
  ];

  const filteredCerts =
    certFilter === "all"
      ? certifications
      : certifications.filter((c) =>
          c.category.toLowerCase().includes(certFilter.toLowerCase())
        );

  return (
    <section id="awards" className="section-wrapper bg-grid">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag">
            <Trophy style={{ width: "12px", height: "12px" }} />
            <span>Honors & Credentials</span>
          </div>
          <h2 className="section-title">Awards & Verified Industry Credentials</h2>
          <p className="section-subtitle" style={{ margin: "10px auto 0 auto" }}>
            Proven excellence in national competitions, international leadership fellowships, and credentials from Databricks, Microsoft, and McKinsey.
          </p>
        </div>

        {/* Top 4 Honors Cards */}
        <div className="grid-2" style={{ marginBottom: "40px" }}>
          {honors.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="clean-card"
                style={{
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                  borderLeft: `4px solid ${h.accent}`,
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Ambient glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: `${h.accent}15`,
                    filter: "blur(30px)",
                    pointerEvents: "none"
                  }}
                />

                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-md)",
                    background: `${h.accent}18`,
                    border: `1px solid ${h.accent}33`,
                    color: h.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: `0 0 16px ${h.accent}25`
                  }}
                >
                  <Icon style={{ width: "24px", height: "24px" }} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "6px", marginBottom: "4px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-dark)", letterSpacing: "-0.01em" }}>
                      {h.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        color: h.accent,
                        background: `${h.accent}18`,
                        padding: "2px 8px",
                        borderRadius: "var(--radius-full)",
                        border: `1px solid ${h.accent}30`
                      }}
                    >
                      {h.badge}
                    </span>
                  </div>

                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--primary-hover)", marginBottom: "6px" }}>
                    {h.org}
                  </div>

                  <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: "1.6" }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 8 Professional Certifications Grid */}
        <div
          className="clean-card"
          style={{
            padding: "32px",
            border: "1px solid var(--border-light)",
            background: "var(--bg-card)"
          }}
        >
          {/* Certifications Header with Filter Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--primary-light)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary-hover)"
                }}
              >
                <Award style={{ width: "20px", height: "20px" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-dark)" }}>
                  Verified Industry Certifications
                </h3>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  Databricks • Microsoft Azure • McKinsey & Company
                </span>
              </div>
            </div>

            {/* Filter buttons */}
            <div style={{ display: "flex", gap: "6px", background: "rgba(255, 255, 255, 0.04)", padding: "4px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)" }}>
              {[
                { id: "all", label: "All (8)" },
                { id: "ai", label: "AI & Cloud" },
                { id: "database", label: "Databases" },
                { id: "management", label: "Leadership" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCertFilter(tab.id)}
                  style={{
                    padding: "5px 12px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    borderRadius: "var(--radius-sm)",
                    border: "none",
                    cursor: "pointer",
                    background: certFilter === tab.id ? "var(--primary)" : "transparent",
                    color: certFilter === tab.id ? "#ffffff" : "var(--text-muted)",
                    transition: "all 0.15s ease"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid-4">
            {filteredCerts.map((cert, cIdx) => (
              <div
                key={cIdx}
                style={{
                  padding: "16px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.2s ease"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--primary-hover)" }}>
                      {cert.category}
                    </span>
                    <CheckCircle2 style={{ width: "15px", height: "15px", color: "var(--accent-emerald)" }} />
                  </div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-dark)", lineHeight: "1.4", marginBottom: "6px" }}>
                    {cert.name}
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "10px", marginTop: "10px", borderTop: "1px solid var(--border-subtle)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  <span>{cert.issuer}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Guarantee */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "24px", paddingTop: "18px", borderTop: "1px solid var(--border-light)", fontSize: "0.8rem", color: "var(--text-muted)" }}>
            <ShieldCheck style={{ width: "16px", height: "16px", color: "var(--accent-emerald)" }} />
            <span>All credentials verified with official certificates on LinkedIn / Credly</span>
          </div>

        </div>

      </div>
    </section>
  );
}

