"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ShoppingBag,
  MessageSquare,
  BookOpen,
  Users,
  Palette,
  ArrowUpRight,
  X,
  CheckCircle2,
  Search,
  Server,
  Zap,
  ShieldCheck
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "ai" | "fullstack" | "backend" | "ecommerce" | "design";
  badge: string;
  metrics: string;
  description: string;
  architectureDetails: {
    frontend: string;
    backend: string;
    dataStore: string;
    highlights: string[];
  };
  techStack: string[];
  githubUrl: string;
  icon: any;
  accent: string;
}

export default function RealProjects() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "visualboost-ai",
      title: "VisualBoost AI",
      tagline: "Computer Vision & Real-Time Object Detection Platform",
      category: "ai",
      badge: "AI / Computer Vision",
      metrics: "Sub-45ms Inference • Dockerized",
      description:
        "High-performance image intelligence platform incorporating real-time object detection and computer vision analysis. Built with a FastAPI backend powering YOLOv8 models, containerized with Docker, and served to a responsive Next.js frontend.",
      architectureDetails: {
        frontend: "Next.js 16, TypeScript, Tailwind CSS, Canvas bounding boxes",
        backend: "Python 3.11, FastAPI, OpenCV, YOLOv8 PyTorch runtime",
        dataStore: "In-memory tensor buffers & Docker volume cache",
        highlights: [
          "Optimized bounding box rasterization with sub-45ms latency per frame.",
          "Asynchronous FastAPI endpoints handling simultaneous multi-file image streams.",
          "Production Docker compose packaging with zero system dependency leaks."
        ]
      },
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "OpenCV", "YOLOv8", "Docker"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Cpu,
      accent: "#8b5cf6"
    },
    {
      id: "stockai-pro",
      title: "StockAI Pro",
      tagline: "AI Stock Forecasting & Time-Series Ensemble Platform",
      category: "ai",
      badge: "Machine Learning",
      metrics: "Multi-Model Ensemble • Live Telemetry",
      description:
        "Predictive stock analysis application leveraging machine learning ensemble models and time-series forecasting. Processes market indicators and historical pricing to produce visual forecast horizons and risk metrics.",
      architectureDetails: {
        frontend: "Streamlit UI with dynamic Plotly candlestick visualizations",
        backend: "Python, scikit-learn, Ensemble Regression, ARIMA/Exponential Smoothing",
        dataStore: "pandas DataFrame caching & Yahoo Finance API integration",
        highlights: [
          "Calculates dynamic volatility bands and moving average convergence/divergence.",
          "Ensemble averaging across multiple regressors to smooth noise and reduce outlier distortion.",
          "Interactive forecast parameter sliders (lookback window, prediction horizon)."
        ]
      },
      techStack: ["Python", "Streamlit", "pandas", "NumPy", "scikit-learn", "Ensemble Learning"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Sparkles,
      accent: "#3b82f6"
    },
    {
      id: "global-app",
      title: "Global App",
      tagline: "Campus Community & Academic Collaboration Hub",
      category: "fullstack",
      badge: "Full-Stack Web",
      metrics: "PostgreSQL RLS • Cloudinary CDN",
      description:
        "Comprehensive campus community platform designed for student interaction, event announcements, and academic resource sharing. Integrates Supabase with relational PostgreSQL and Cloudinary for media uploads.",
      architectureDetails: {
        frontend: "Next.js App Router, React 19, TypeScript, Lucide Icons",
        backend: "Supabase BaaS with custom PostgreSQL RPC functions & Auth",
        dataStore: "PostgreSQL with strict Row Level Security (RLS) policies",
        highlights: [
          "Fine-grained student authentication with Air University email validation.",
          "Cloudinary CDN pipelines for compressed, responsive image distribution.",
          "Real-time event feeds and academic notes exchange repositories."
        ]
      },
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Cloudinary"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Users,
      accent: "#10b981"
    },
    {
      id: "interior-configurator",
      title: "Interactive Interior Configurator",
      tagline: "Real-time 3D Product Customizer for Shopify",
      category: "ecommerce",
      badge: "Shopify / 3D App",
      metrics: "Shopify Extension • 60 FPS Canvas",
      description:
        "Interactive interior customization tool allowing users to preview finishes, textiles, and configurations in real time. Packaged as a Shopify Theme App Extension for direct merchant checkout integration.",
      architectureDetails: {
        frontend: "React, Vite, Canvas 2D/3D renderer, Tailwind CSS",
        backend: "Shopify Storefront API & Theme App Extension schema",
        dataStore: "Merchant product catalog & custom variant metadata",
        highlights: [
          "Zero layout-shift injection into existing Shopify liquid themes.",
          "Dynamic price updates matching material and sizing customizations.",
          "Direct-to-cart payload formatting compatible with Shopify checkout pipeline."
        ]
      },
      techStack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Shopify Theme Extension"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: ShoppingBag,
      accent: "#f59e0b"
    },
    {
      id: "booknest",
      title: "BookNest",
      tagline: "Library Reservation & Inventory Management Engine",
      category: "backend",
      badge: "NestJS / Backend",
      metrics: "JWT Auth • Neon Postgres ACID",
      description:
        "Robust library catalog and reservation engine with role-based JWT authentication, automated loan tracking, and relational data architecture deployed on Neon PostgreSQL.",
      architectureDetails: {
        frontend: "React SPA with Vite and responsive dashboard tables",
        backend: "NestJS with TypeScript, class-validator, Passport.js",
        dataStore: "Neon PostgreSQL with TypeORM migrations & relational indices",
        highlights: [
          "Role-based authorization distinguishing student loans from admin catalog controls.",
          "Automated overdue calculation logic and reservation conflict resolution.",
          "Normalized database design adhering to 3NF standards."
        ]
      },
      techStack: ["React", "Vite", "NestJS", "Neon PostgreSQL", "JWT Authentication"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: BookOpen,
      accent: "#06b6d4"
    },
    {
      id: "fashion-storefront",
      title: "E-Commerce Fashion Storefront",
      tagline: "High-Performance Modern Retail Web Store",
      category: "fullstack",
      badge: "Full-Stack Retail",
      metrics: "SSR Accelerated • Cart Persistence",
      description:
        "End-to-end e-commerce store with product filtering, cart persistence, secure checkout pipeline, and Dockerized NestJS API deployed to Vercel.",
      architectureDetails: {
        frontend: "React 19, TypeScript, Vite, responsive product grids",
        backend: "NestJS microservice API with Docker containerization",
        dataStore: "PostgreSQL on cloud database cluster",
        highlights: [
          "Instant client-side multi-parameter filtering (category, price, size).",
          "Local storage cart synchronization with server-side inventory verification.",
          "Clean responsive checkout flow with credit card validation."
        ]
      },
      techStack: ["React", "Vite", "TypeScript", "NestJS", "PostgreSQL", "Docker", "Vercel"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: ShoppingBag,
      accent: "#ec4899"
    },
    {
      id: "realtime-chat",
      title: "Real-time Messaging Application",
      tagline: "Multi-threaded Socket Chat Engine with MVVM Architecture",
      category: "backend",
      badge: "C# / .NET 8 Systems",
      metrics: "TCP Sockets • MVVM Client",
      description:
        "Desktop messaging client and server built using C# and WPF on .NET 8. Features multi-client socket concurrency via TcpClient / TcpListener, asynchronous message serialization, and clean MVVM design.",
      architectureDetails: {
        frontend: "WPF with XAML styling, data binding, and INotifyPropertyChanged",
        backend: "C# .NET 8 multi-threaded TcpListener daemon",
        dataStore: "In-memory socket routing table & message packet buffers",
        highlights: [
          "Asynchronous NetworkStream reads/writes preventing UI thread blocking.",
          "Binary packet headers identifying broadcast messages vs. private peer whispers.",
          "Robust socket disconnection detection and graceful client teardown."
        ]
      },
      techStack: ["C#", "WPF", ".NET 8", ".NET Framework 4.7.2", "TcpSockets", "MVVM"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: MessageSquare,
      accent: "#6366f1"
    },
    {
      id: "corporate-design",
      title: "Corporate Collaborations & Creative Design",
      tagline: "Branding, Event Creatives & UI Collateral",
      category: "design",
      badge: "Creative / Branding",
      metrics: "Huawei • Devsinc • DPL",
      description:
        "Official promotional branding materials, technical event posters, and digital creatives for university events in collaboration with Huawei, DPL, Devsinc, and Agile Pakistan.",
      architectureDetails: {
        frontend: "Visual design systems, high-res vector assets, print collateral",
        backend: "Creative asset workflows & social media campaign coordination",
        dataStore: "Cloud asset repository & distribution channels",
        highlights: [
          "Co-branded marketing collaterals for multinational corporate technology summits.",
          "Consistent typography and color theory applied across print and digital media.",
          "High student engagement driving 1,000+ attendee event registrations."
        ]
      },
      techStack: ["Canva", "UI/UX", "Brand Identity", "Social Marketing"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Palette,
      accent: "#f43f5e"
    }
  ];

  const filtered = projects
    .filter((p) => filter === "all" || p.category === filter)
    .filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <section id="projects" className="section-wrapper bg-grid">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "36px" }}>
          <div>
            <div className="section-tag">
              <Layers style={{ width: "12px", height: "12px" }} />
              <span>Production Portfolio</span>
            </div>
            <h2 className="section-title">Featured Engineering Projects</h2>
            <p className="section-subtitle">
              Mission-critical full-stack applications, real-time computer vision pipelines, and high-concurrency .NET socket architectures.
            </p>
          </div>

          {/* Quick Search */}
          <div style={{ position: "relative", minWidth: "260px" }}>
            <Search style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: "14px", height: "14px", color: "var(--text-muted)" }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by tech..."
              style={{
                width: "100%",
                padding: "8px 14px 8px 34px",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-light)",
                background: "var(--bg-card)",
                color: "var(--text-dark)",
                fontSize: "0.825rem",
                outline: "none"
              }}
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "32px", background: "var(--bg-card)", padding: "6px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)", width: "fit-content" }}>
          {[
            { id: "all", label: "All Projects (8)" },
            { id: "ai", label: "AI & ML" },
            { id: "fullstack", label: "Full-Stack Web" },
            { id: "backend", label: "Backend & .NET" },
            { id: "ecommerce", label: "E-Commerce" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              style={{
                padding: "7px 16px",
                fontSize: "0.825rem",
                fontWeight: 600,
                borderRadius: "var(--radius-sm)",
                border: "none",
                cursor: "pointer",
                background: filter === tab.id ? "var(--primary)" : "transparent",
                color: filter === tab.id ? "#ffffff" : "var(--text-muted)",
                boxShadow: filter === tab.id ? "0 2px 10px rgba(59, 130, 246, 0.4)" : "none",
                transition: "all 0.2s ease"
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-2">
          {filtered.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.id}
                className="clean-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderLeft: `4px solid ${proj.accent}`,
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Background ambient corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-30px",
                    right: "-30px",
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    background: `${proj.accent}12`,
                    filter: "blur(40px)",
                    pointerEvents: "none"
                  }}
                />

                <div>
                  {/* Top Bar */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "var(--radius-md)",
                          background: `${proj.accent}18`,
                          border: `1px solid ${proj.accent}33`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: proj.accent,
                          boxShadow: `0 0 16px ${proj.accent}30`
                        }}
                      >
                        <Icon style={{ width: "22px", height: "22px" }} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-dark)", letterSpacing: "-0.01em" }}>
                          {proj.title}
                        </h3>
                        <span style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                          {proj.tagline}
                        </span>
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-mono)",
                        color: proj.accent,
                        background: `${proj.accent}15`,
                        padding: "3px 10px",
                        borderRadius: "var(--radius-full)",
                        border: `1px solid ${proj.accent}30`,
                        whiteSpace: "nowrap"
                      }}
                    >
                      {proj.badge}
                    </span>
                  </div>

                  {/* Metrics Badge */}
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255, 255, 255, 0.04)", border: "1px solid var(--border-light)", padding: "3px 10px", borderRadius: "var(--radius-full)", fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--text-body)", marginBottom: "14px" }}>
                    <Zap style={{ width: "12px", height: "12px", color: proj.accent }} />
                    <span>{proj.metrics}</span>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: "0.9rem", color: "var(--text-body)", lineHeight: "1.65", marginBottom: "18px" }}>
                    {proj.description}
                  </p>
                </div>

                {/* Tech Stack & Action Links */}
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "14px",
                      borderTop: "1px solid var(--border-light)"
                    }}
                  >
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ padding: "6px 14px", fontSize: "0.8rem", gap: "6px" }}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="btn-solid"
                      style={{
                        padding: "6px 16px",
                        fontSize: "0.8rem",
                        background: `linear-gradient(135deg, ${proj.accent} 0%, var(--primary) 100%)`,
                        gap: "6px"
                      }}
                    >
                      <span>Inspect Specs</span>
                      <ArrowUpRight style={{ width: "13px", height: "13px" }} />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Architecture Deep-Dive Inspection Modal */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(14px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="clean-card"
            style={{
              width: "100%",
              maxWidth: "680px",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "rgba(13, 17, 26, 0.96)",
              border: `1px solid ${selectedProject.accent}55`,
              boxShadow: `0 24px 60px rgba(0, 0, 0, 0.8), 0 0 40px ${selectedProject.accent}33`,
              padding: "32px",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="btn-outline"
              style={{ position: "absolute", top: "18px", right: "18px", width: "34px", height: "34px", padding: 0 }}
            >
              <X style={{ width: "18px", height: "18px" }} />
            </button>

            {/* Modal Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  background: `${selectedProject.accent}20`,
                  color: selectedProject.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px solid ${selectedProject.accent}40`
                }}
              >
                {React.createElement(selectedProject.icon, { style: { width: "24px", height: "24px" } })}
              </div>
              <div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text-dark)" }}>
                  {selectedProject.title}
                </h3>
                <span style={{ fontSize: "0.85rem", color: selectedProject.accent, fontFamily: "var(--font-mono)" }}>
                  {selectedProject.badge} • {selectedProject.metrics}
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.95rem", color: "var(--text-body)", lineHeight: "1.7", marginBottom: "24px" }}>
              {selectedProject.description}
            </p>

            {/* Architectural Stack Breakdown */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px 16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)" }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--primary-hover)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                  Frontend Architecture
                </span>
                <span style={{ fontSize: "0.875rem", color: "#f8fafc" }}>
                  {selectedProject.architectureDetails.frontend}
                </span>
              </div>

              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px 16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)" }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--accent-purple)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                  Backend & Compute Service
                </span>
                <span style={{ fontSize: "0.875rem", color: "#f8fafc" }}>
                  {selectedProject.architectureDetails.backend}
                </span>
              </div>

              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px 16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)" }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--accent-amber)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                  Data Persistence & Memory Buffer
                </span>
                <span style={{ fontSize: "0.875rem", color: "#f8fafc" }}>
                  {selectedProject.architectureDetails.dataStore}
                </span>
              </div>
            </div>

            {/* Key Engineering Deliverables */}
            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "12px" }}>
                Key Technical Highlights:
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {selectedProject.architectureDetails.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "var(--text-body)" }}>
                    <CheckCircle2 style={{ width: "16px", height: "16px", color: selectedProject.accent, flexShrink: 0, marginTop: "2px" }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "18px", borderTop: "1px solid var(--border-light)" }}>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid"
                style={{ padding: "10px 20px" }}
              >
                <GithubIcon className="w-4 h-4" />
                <span>Open GitHub Repository</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="btn-outline"
                style={{ padding: "10px 18px" }}
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

