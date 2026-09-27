"use client";

import React, { useState } from "react";
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
  Layers
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Muhammad Ali Wahid // Developer Terminal v2.0",
    "Type 'skills', 'projects', 'education', 'awards', or 'contact' to explore."
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let res = "";
    switch (cmd) {
      case "skills":
        res = "• Backend: C#/.NET, Node.js, NestJS, FastAPI, REST APIs, JWT\n• Frontend: React, Next.js, Vite, TypeScript, Tailwind CSS\n• Databases: PostgreSQL, MongoDB, MS SQL, Supabase\n• AI/ML: Python, OpenCV, YOLOv8, Streamlit, Scikit-learn\n• DevOps: Docker, Vercel, Railway, GitHub Actions";
        break;
      case "projects":
        res = "• VisualBoost AI (YOLOv8, FastAPI, Next.js, Docker)\n• StockAI Pro (Python, Ensemble Learning, Streamlit)\n• Global App (Next.js, TypeScript, Supabase, Cloudinary)\n• Interior Configurator (React, Vite, Shopify App Extension)\n• BookNest (NestJS, PostgreSQL, JWT Auth)\n• Real-Time Chat (C#, .NET 8, TCP Sockets, MVVM)";
        break;
      case "education":
        res = "• BS Computer Science, Air University Islamabad (Jul 2023 - Present)\n• Intermediate Pre-Engineering, Punjab College of Science Islamabad (2021-2023)";
        break;
      case "awards":
        res = "🏆 1st Place - PitchFest FAST-NUCES 2025 (AI Scam Detection Platform)\n🥈 Runner-Up - Hult Prize 2026 University Round\n🌟 Campus Director - Millennium Fellowship (MCN & UNAI)\n💼 Campus Ambassador - Nestlé";
        break;
      case "contact":
        res = "• Email: aliwahid8@hotmail.com\n• Phone: 0325-5611627\n• LinkedIn: linkedin.com/in/muhammad-ali-wahid-02444736a\n• GitHub: github.com/AliWahid1310";
        break;
      case "clear":
        setTerminalLogs([]);
        setTerminalInput("");
        return;
      default:
        res = `Command '${cmd}' not recognized. Try: skills, projects, education, awards, contact, clear`;
    }

    setTerminalLogs((prev) => [...prev, `$ ${terminalInput}`, res]);
    setTerminalInput("");
  };

  return (
    <section id="about" className="section-wrapper bg-grid" style={{ paddingTop: "120px" }}>
      <div className="container">
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
          
          {/* Left Column: Bio & Core Info */}
          <div>
            {/* Status Badge */}
            <div className="status-pill" style={{ marginBottom: "18px" }}>
              <span className="pulse-circle" />
              <span>Available for Full-Stack & AI Roles • Islamabad & Remote</span>
            </div>

            <h1 className="section-title" style={{ fontSize: "2.75rem", marginBottom: "16px" }}>
              Hi, I'm <span className="heading-gradient">Muhammad Ali Wahid</span>
            </h1>

            <p style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--primary)", marginBottom: "14px" }}>
              Full-Stack Web Developer & AI / Machine Learning Engineer
            </p>

            <p style={{ color: "var(--text-body)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "20px" }}>
              Computer Science undergraduate at <strong>Air University Islamabad</strong>. Passionate about building responsive, high-performance web applications with <strong>React, Next.js, and TypeScript</strong>, robust backends in <strong>C#/.NET, NestJS, and FastAPI</strong>, and applied AI systems with <strong>Computer Vision (YOLOv8, OpenCV)</strong> and predictive machine learning.
            </p>

            {/* Quick Contact Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px", fontSize: "0.85rem" }}>
              <a
                href="mailto:aliwahid8@hotmail.com"
                style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-body)", textDecoration: "none", background: "var(--bg-secondary)", padding: "6px 12px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-light)" }}
              >
                <Mail style={{ width: "14px", height: "14px", color: "var(--primary)" }} />
                <span>aliwahid8@hotmail.com</span>
              </a>

              <a
                href="tel:03255611627"
                style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-body)", textDecoration: "none", background: "var(--bg-secondary)", padding: "6px 12px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-light)" }}
              >
                <Phone style={{ width: "14px", height: "14px", color: "var(--accent-emerald)" }} />
                <span>0325-5611627</span>
              </a>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--bg-secondary)", padding: "6px 12px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-light)" }}>
                <MapPin style={{ width: "14px", height: "14px", color: "var(--text-muted)" }} />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "24px" }}>
              <a href="#projects" className="btn-solid">
                <span>View Portfolio Projects</span>
                <ArrowRight style={{ width: "16px", height: "16px" }} />
              </a>

              <a href="#contact" className="btn-outline">
                <span>Contact Me</span>
              </a>

              <a
                href="https://github.com/AliWahid1310"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* Highlights */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 style={{ width: "14px", height: "14px", color: "var(--accent-emerald)" }} />
                <span>1st Place PitchFest 2025</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 style={{ width: "14px", height: "14px", color: "var(--accent-emerald)" }} />
                <span>Hult Prize Runner-Up</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 style={{ width: "14px", height: "14px", color: "var(--accent-emerald)" }} />
                <span>Millennium Fellow UNAI</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Terminal */}
          <div>
            <div className="clean-card" style={{ padding: "0", overflow: "hidden", background: "#0f172a", border: "1px solid #1e293b", boxShadow: "var(--shadow-lg)" }}>
              
              {/* Terminal Titlebar */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "between", padding: "12px 16px", background: "#1e293b", borderBottom: "1px solid #334155" }}>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                  <span style={{ color: "#94a3b8", fontFamily: "var(--font-mono)", fontSize: "0.75rem", marginLeft: "10px" }}>
                    aliwahid@portfolio:~
                  </span>
                </div>
              </div>

              {/* Terminal Body */}
              <div style={{ padding: "16px", minHeight: "260px", maxHeight: "300px", overflowY: "auto", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#f8fafc", lineHeight: "1.6" }}>
                {terminalLogs.map((log, i) => (
                  <div key={i} style={{ color: log.startsWith("$") ? "#38bdf8" : log.includes("🏆") || log.includes("•") ? "#cbd5e1" : "#94a3b8", whiteSpace: "pre-wrap", marginBottom: "6px" }}>
                    {log}
                  </div>
                ))}
              </div>

              {/* Quick command suggestion chips */}
              <div style={{ display: "flex", gap: "6px", padding: "8px 16px", background: "#0c1322", borderTop: "1px solid #1e293b", overflowX: "auto" }}>
                <span style={{ color: "#64748b", fontSize: "0.7rem", fontFamily: "var(--font-mono)", alignSelf: "center" }}>Run:</span>
                {["skills", "projects", "education", "awards", "contact"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setTerminalInput(c)}
                    style={{ background: "#1e293b", color: "#93c5fd", border: "none", borderRadius: "4px", padding: "2px 8px", fontSize: "0.72rem", fontFamily: "var(--font-mono)", cursor: "pointer" }}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Terminal Input Form */}
              <form onSubmit={handleCommand} style={{ display: "flex", alignItems: "center", padding: "10px 16px", background: "#0f172a", borderTop: "1px solid #1e293b" }}>
                <span style={{ color: "#10b981", marginRight: "8px", fontFamily: "var(--font-mono)", fontWeight: 700 }}>$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type skills, projects, awards, contact..."
                  style={{ flex: 1, background: "transparent", border: "none", color: "#ffffff", fontFamily: "var(--font-mono)", fontSize: "0.8rem", outline: "none" }}
                />
                <button
                  type="submit"
                  style={{ background: "#2563eb", color: "#ffffff", border: "none", borderRadius: "4px", padding: "4px 10px", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}
                >
                  EXEC
                </button>
              </form>

            </div>
          </div>

        </div>

        {/* 4 Stat Badges */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginTop: "48px" }}>
          
          <div className="clean-card" style={{ padding: "18px" }}>
            <div style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--primary)" }}>
              8+
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-dark)", marginTop: "2px" }}>
              Full-Stack & AI Projects
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
              Next.js, React, NestJS, FastAPI, .NET
            </div>
          </div>

          <div className="clean-card" style={{ padding: "18px" }}>
            <div style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--accent-emerald)" }}>
              1st
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-dark)", marginTop: "2px" }}>
              PitchFest Winner 2025
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
              FAST-NUCES AI Scam Detection Platform
            </div>
          </div>

          <div className="clean-card" style={{ padding: "18px" }}>
            <div style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--accent-purple)" }}>
              8+
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-dark)", marginTop: "2px" }}>
              Professional Certifications
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
              Databricks, Microsoft Azure, McKinsey
            </div>
          </div>

          <div className="clean-card" style={{ padding: "18px" }}>
            <div style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--text-dark)" }}>
              2023+
            </div>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-dark)", marginTop: "2px" }}>
              BS Computer Science
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
              Air University – Islamabad
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
