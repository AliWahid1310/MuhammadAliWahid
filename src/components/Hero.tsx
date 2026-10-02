"use client";

import React, { useState, useEffect } from "react";
import {
  Code,
  Terminal as TerminalIcon,
  Sparkles,
  ArrowRight,
  Download,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Trophy,
  Layers,
  Cpu,
  Server,
  Database,
  ExternalLink,
  Flame,
  Activity,
  Play
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"terminal" | "architecture">("terminal");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Muhammad Ali Wahid // Cyber Console v3.4 [Online]",
    "System: Air University CS Undergraduate & AI Engineer",
    "Type 'skills', 'projects', 'awards', 'cv', or click quick commands below."
  ]);

  // Dynamic typing role cycling
  const roles = [
    "Full-Stack Web Architect",
    "AI & Computer Vision Engineer",
    "FastAPI & NestJS Backend Specialist",
    "C# / .NET High-Concurrency Systems"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 30 : 60;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let res = "";
    switch (cmd) {
      case "skills":
        res = "⚡ Core Stack: React, Next.js, TypeScript, Tailwind CSS\n⚡ Backends: C#/.NET 8, Node.js, NestJS, FastAPI, REST/Sockets\n⚡ AI / CV: Python, OpenCV, YOLOv8, Scikit-learn, Streamlit\n⚡ Storage: PostgreSQL, Neon, MS SQL, Supabase, Cloudinary\n⚡ DevOps: Docker, Vercel, Railway, GitHub Actions";
        break;
      case "projects":
        res = "🚀 1. VisualBoost AI (YOLOv8, FastAPI, Next.js, Docker)\n🚀 2. StockAI Pro (Time-series ML, Streamlit, Scikit-learn)\n🚀 3. Global App (Next.js, TypeScript, Supabase, Cloudinary)\n🚀 4. Interior Configurator (React, Vite, Shopify Extension)\n🚀 5. BookNest (NestJS, PostgreSQL, JWT Auth)\n🚀 6. Real-Time Chat (C#, .NET 8, TCP Sockets, MVVM)";
        break;
      case "awards":
        res = "🏆 1st Place - FAST-NUCES PitchFest 2025 (AI Scam Detection Platform)\n🥈 Runner-Up - Hult Prize 2026 University Round\n🌟 Campus Director - Millennium Fellowship (UNAI & MCN)\n💼 Campus Ambassador - Nestlé";
        break;
      case "education":
        res = "🎓 BS Computer Science - Air University Islamabad (Jul 2023 - Present)\n🎓 Pre-Engineering (FSc) - Punjab College of Science Islamabad (2021-2023)";
        break;
      case "contact":
      case "cv":
        res = "📧 Email: aliwahid8@hotmail.com\n📱 Phone: 0325-5611627\n🌐 GitHub: https://github.com/AliWahid1310\n💼 LinkedIn: https://linkedin.com/in/muhammad-ali-wahid-02444736a";
        break;
      case "clear":
        setTerminalLogs([]);
        setTerminalInput("");
        return;
      default:
        res = `Unknown command: '${cmd}'. Try: skills, projects, awards, education, cv, clear`;
    }

    setTerminalLogs((prev) => [...prev, `$ ${terminalInput}`, res]);
    setTerminalInput("");
  };

  const quickRun = (cmd: string) => {
    setTerminalInput(cmd);
    let res = "";
    if (cmd === "skills") {
      res = "⚡ Core Stack: React, Next.js, TypeScript, C#/.NET 8, NestJS, FastAPI, YOLOv8, PostgreSQL, Docker";
    } else if (cmd === "projects") {
      res = "🚀 8 verified production projects in AI vision, fullstack next.js, and high-concurrency .NET socket apps.";
    } else if (cmd === "awards") {
      res = "🏆 1st Place FAST-NUCES PitchFest 2025 | Hult Prize Runner-Up | UNAI Millennium Fellow";
    } else if (cmd === "contact") {
      res = "📧 aliwahid8@hotmail.com | 📱 0325-5611627 | Islamabad, Pakistan";
    }
    setTerminalLogs((prev) => [...prev, `$ ${cmd}`, res]);
    setTerminalInput("");
  };

  return (
    <section id="about" className="section-wrapper bg-grid" style={{ paddingTop: "130px", overflow: "hidden" }}>
      {/* Ambient Aurora Orbs */}
      <div className="aurora-bg">
        <div
          className="aurora-orb"
          style={{
            top: "-100px",
            left: "15%",
            width: "550px",
            height: "550px",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, rgba(139, 92, 246, 0.08) 70%, transparent 100%)",
          }}
        />
        <div
          className="aurora-orb"
          style={{
            top: "200px",
            right: "5%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.08) 70%, transparent 100%)",
            animationDelay: "-6s"
          }}
        />
        <div
          className="aurora-orb"
          style={{
            bottom: "-50px",
            left: "30%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
            animationDelay: "-12s"
          }}
        />
      </div>

      <div className="container">
        
        {/* Top 2-Column Showcase */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px", alignItems: "center" }}>
          
          {/* Left Column: Personal Narrative & Pitch */}
          <div>
            {/* Live Availability Status Pill */}
            <div className="status-pill" style={{ marginBottom: "22px" }}>
              <span className="pulse-circle" />
              <span>Available for Full-Stack & AI Roles • Islamabad & Remote</span>
            </div>

            {/* Main Super Title */}
            <h1 className="section-title" style={{ fontSize: "3.2rem", marginBottom: "16px", letterSpacing: "-0.03em" }}>
              Hi, I'm <span className="heading-gradient">Muhammad Ali Wahid</span>
            </h1>

            {/* Dynamic Typewriter Subtitle */}
            <div style={{ minHeight: "42px", display: "flex", alignItems: "center", marginBottom: "18px" }}>
              <span style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--primary-hover)" }}>
                {displayText}
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "3px",
                  height: "22px",
                  backgroundColor: "var(--primary)",
                  marginLeft: "6px",
                  animation: "pulseGlow 0.8s infinite"
                }}
              />
            </div>

            {/* Senior Narrative */}
            <p style={{ color: "var(--text-body)", fontSize: "1.025rem", lineHeight: "1.75", marginBottom: "24px" }}>
              Computer Science undergraduate at <strong>Air University Islamabad</strong>. Crafting responsive, scalable web applications with <strong>React, Next.js, and TypeScript</strong>, mission-critical backends in <strong>C#/.NET, NestJS, and FastAPI</strong>, and state-of-the-art AI systems with <strong>Computer Vision (YOLOv8, OpenCV)</strong> and predictive machine learning.
            </p>

            {/* Quick Coordinates & Direct Contact Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px", fontSize: "0.85rem" }}>
              <a
                href="mailto:aliwahid8@hotmail.com"
                className="btn-outline"
                style={{ padding: "6px 14px", fontSize: "0.825rem", gap: "8px" }}
              >
                <Mail style={{ width: "14px", height: "14px", color: "var(--primary)" }} />
                <span>aliwahid8@hotmail.com</span>
              </a>

              <a
                href="tel:03255611627"
                className="btn-outline"
                style={{ padding: "6px 14px", fontSize: "0.825rem", gap: "8px" }}
              >
                <Phone style={{ width: "14px", height: "14px", color: "var(--accent-emerald)" }} />
                <span>0325-5611627</span>
              </a>

              <div
                className="btn-outline"
                style={{ padding: "6px 14px", fontSize: "0.825rem", gap: "8px", cursor: "default" }}
              >
                <MapPin style={{ width: "14px", height: "14px", color: "var(--text-muted)" }} />
                <span>Islamabad, PK</span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "28px" }}>
              <a href="#projects" className="btn-solid" style={{ padding: "12px 24px", fontSize: "0.925rem" }}>
                <span>View Portfolio Projects</span>
                <ArrowRight style={{ width: "16px", height: "16px" }} />
              </a>

              <a href="#ai-lab" className="btn-solid btn-glow" style={{ padding: "12px 24px", fontSize: "0.925rem" }}>
                <Sparkles style={{ width: "16px", height: "16px" }} />
                <span>Try AI Playground</span>
              </a>

              <a
                href="https://github.com/AliWahid1310"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ padding: "12px 20px" }}
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Executive Proof Points */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontSize: "0.825rem", color: "var(--text-muted)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle2 style={{ width: "16px", height: "16px", color: "var(--accent-emerald)" }} />
                <span style={{ color: "var(--text-body)" }}>1st Place PitchFest 2025</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle2 style={{ width: "16px", height: "16px", color: "var(--accent-emerald)" }} />
                <span style={{ color: "var(--text-body)" }}>Hult Prize Runner-Up</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle2 style={{ width: "16px", height: "16px", color: "var(--accent-emerald)" }} />
                <span style={{ color: "var(--text-body)" }}>Millennium Fellow UNAI</span>
              </div>
            </div>

          </div>

          {/* Right Column: Multi-Deck Console */}
          <div>
            <div
              className="clean-card"
              style={{
                padding: "0",
                overflow: "hidden",
                border: "1px solid rgba(59, 130, 246, 0.25)",
                boxShadow: "var(--shadow-lg), 0 0 35px rgba(59, 130, 246, 0.15)",
                background: "rgba(10, 15, 26, 0.92)",
                backdropFilter: "blur(20px)"
              }}
            >
              
              {/* Console Header & Tabs */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 18px",
                  background: "rgba(15, 23, 42, 0.8)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
                }}
              >
                <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                  <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
                  <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
                  <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                  <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", marginLeft: "8px" }}>
                    aliwahid@system-core:~
                  </span>
                </div>

                <div style={{ display: "flex", gap: "4px", background: "rgba(0,0,0,0.3)", padding: "3px", borderRadius: "6px" }}>
                  <button
                    onClick={() => setActiveTab("terminal")}
                    style={{
                      padding: "4px 10px",
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                      background: activeTab === "terminal" ? "#2563eb" : "transparent",
                      color: activeTab === "terminal" ? "#ffffff" : "var(--text-muted)",
                      fontWeight: 600,
                      transition: "all 0.15s ease"
                    }}
                  >
                    CLI
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    style={{
                      padding: "4px 10px",
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                      background: activeTab === "architecture" ? "#8b5cf6" : "transparent",
                      color: activeTab === "architecture" ? "#ffffff" : "var(--text-muted)",
                      fontWeight: 600,
                      transition: "all 0.15s ease"
                    }}
                  >
                    Architecture
                  </button>
                </div>
              </div>

              {/* Tab 1: Terminal CLI */}
              {activeTab === "terminal" && (
                <>
                  <div
                    style={{
                      padding: "18px",
                      minHeight: "270px",
                      maxHeight: "310px",
                      overflowY: "auto",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8125rem",
                      color: "#f8fafc",
                      lineHeight: "1.65"
                    }}
                  >
                    {terminalLogs.map((log, i) => (
                      <div
                        key={i}
                        style={{
                          color: log.startsWith("$")
                            ? "#38bdf8"
                            : log.includes("🏆") || log.includes("⚡") || log.includes("🚀")
                            ? "#e2e8f0"
                            : "#94a3b8",
                          whiteSpace: "pre-wrap",
                          marginBottom: "8px"
                        }}
                      >
                        {log}
                      </div>
                    ))}
                  </div>

                  {/* Suggestion Chips */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 16px",
                      background: "rgba(0, 0, 0, 0.4)",
                      borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                      overflowX: "auto"
                    }}
                  >
                    <span style={{ color: "#64748b", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>Quick:</span>
                    {["skills", "projects", "awards", "contact"].map((c) => (
                      <button
                        key={c}
                        onClick={() => quickRun(c)}
                        style={{
                          background: "rgba(59, 130, 246, 0.12)",
                          color: "#93c5fd",
                          border: "1px solid rgba(59, 130, 246, 0.25)",
                          borderRadius: "4px",
                          padding: "2px 8px",
                          fontSize: "0.72rem",
                          fontFamily: "var(--font-mono)",
                          cursor: "pointer"
                        }}
                      >
                        {c}
                      </button>
                    ))}
                  </div>

                  {/* Terminal Input */}
                  <form
                    onSubmit={handleCommand}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 16px",
                      background: "rgba(15, 23, 42, 0.9)",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)"
                    }}
                  >
                    <span style={{ color: "#10b981", marginRight: "10px", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                      ❯
                    </span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="run skills, projects, awards, or custom..."
                      style={{
                        flex: 1,
                        background: "transparent",
                        border: "none",
                        color: "#ffffff",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.825rem",
                        outline: "none"
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "4px",
                        padding: "4px 12px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        cursor: "pointer"
                      }}
                    >
                      RUN
                    </button>
                  </form>
                </>
              )}

              {/* Tab 2: Visual Architecture Snapshot */}
              {activeTab === "architecture" && (
                <div style={{ padding: "20px", minHeight: "330px", display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center" }}>
                  <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "#94a3b8", textAlign: "center", marginBottom: "4px" }}>
                    FULL-STACK & AI ARCHITECTURE DIAGRAM
                  </div>

                  {/* Client Tier */}
                  <div style={{ background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", borderRadius: "8px", padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Layers style={{ width: "16px", height: "16px", color: "#38bdf8" }} />
                      <span style={{ fontSize: "0.825rem", fontWeight: 700, color: "#f8fafc" }}>Client Layer</span>
                    </div>
                    <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "#93c5fd" }}>Next.js 16 • React 19 • TypeScript • Tailwind</span>
                  </div>

                  <div style={{ textAlign: "center", color: "#64748b", fontSize: "0.8rem" }}>↓ REST APIs / WebSockets (JSON, Binary)</div>

                  {/* Backend & AI Tier */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div style={{ background: "rgba(139, 92, 246, 0.1)", border: "1px solid rgba(139, 92, 246, 0.3)", borderRadius: "8px", padding: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <Server style={{ width: "14px", height: "14px", color: "#c084fc" }} />
                        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#f8fafc" }}>Backend Services</span>
                      </div>
                      <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "#cbd5e1" }}>C#/.NET 8 • NestJS • FastAPI</span>
                    </div>

                    <div style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "8px", padding: "10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <Cpu style={{ width: "14px", height: "14px", color: "#34d399" }} />
                        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#f8fafc" }}>AI & Computer Vision</span>
                      </div>
                      <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "#cbd5e1" }}>YOLOv8 • OpenCV • PyTorch</span>
                    </div>
                  </div>

                  <div style={{ textAlign: "center", color: "#64748b", fontSize: "0.8rem" }}>↓ ACID Relational & Object Storage</div>

                  {/* Storage Tier */}
                  <div style={{ background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)", borderRadius: "8px", padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Database style={{ width: "16px", height: "16px", color: "#fbbf24" }} />
                      <span style={{ fontSize: "0.825rem", fontWeight: 700, color: "#f8fafc" }}>Data Layer</span>
                    </div>
                    <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "#fde68a" }}>PostgreSQL (Neon) • Supabase • Cloudinary</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* 4 Stat Cards with Luminous Border Effects */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "54px" }}>
          
          <a
            href="#projects"
            className="clean-card"
            style={{ padding: "22px", textDecoration: "none", cursor: "pointer", borderTop: "3px solid var(--primary)" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--primary-hover)" }}>
                8+
              </div>
              <Code style={{ width: "20px", height: "20px", color: "var(--primary)" }} />
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-dark)" }}>
              Full-Stack & AI Systems
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "4px" }}>
              Next.js, FastAPI, NestJS, .NET 8, YOLOv8
            </div>
          </a>

          <a
            href="#awards"
            className="clean-card"
            style={{ padding: "22px", textDecoration: "none", cursor: "pointer", borderTop: "3px solid var(--accent-emerald)" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--accent-emerald)" }}>
                1st
              </div>
              <Trophy style={{ width: "20px", height: "20px", color: "var(--accent-emerald)" }} />
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-dark)" }}>
              PitchFest Winner 2025
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "4px" }}>
              FAST-NUCES AI Scam Detection Platform
            </div>
          </a>

          <a
            href="#awards"
            className="clean-card"
            style={{ padding: "22px", textDecoration: "none", cursor: "pointer", borderTop: "3px solid var(--accent-purple)" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--accent-purple)" }}>
                8+
              </div>
              <Sparkles style={{ width: "20px", height: "20px", color: "var(--accent-purple)" }} />
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-dark)" }}>
              Verified Certifications
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "4px" }}>
              Databricks, Microsoft Azure, McKinsey
            </div>
          </a>

          <a
            href="#experience"
            className="clean-card"
            style={{ padding: "22px", textDecoration: "none", cursor: "pointer", borderTop: "3px solid var(--accent-cyan)" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--accent-cyan)" }}>
                2023+
              </div>
              <GraduationCap style={{ width: "20px", height: "20px", color: "var(--accent-cyan)" }} />
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-dark)" }}>
              BS Computer Science
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "4px" }}>
              Air University – Islamabad
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

