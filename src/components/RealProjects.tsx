"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Cpu,
  Layers,
  Sparkles,
  ShoppingBag,
  MessageSquare,
  BookOpen,
  Users,
  Palette,
  ArrowUpRight,
  Search,
  Zap,
  ImageIcon,
  X,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectDeepDive {
  summary: string;
  sections: {
    title: string;
    items: { name: string; desc: string }[];
  }[];
  apiEndpoints?: { method: string; path: string; desc: string }[];
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "ai" | "fullstack" | "backend" | "ecommerce" | "design";
  badge: string;
  snapshot: string; // path to screenshot image — empty string = fallback to live URL or placeholder
  liveUrl?: string; // live deployed URL
  techStack: string[];
  githubUrl: string;
  icon: React.ElementType;
  accent: string;
  architectureDetails?: ProjectDeepDive;
}

export default function RealProjects() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDeepDive, setSelectedDeepDive] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "meterflow",
      title: "MeterFlow",
      tagline: "Production-grade LLM usage metering, quota enforcement & Stripe billing engine",
      category: "backend",
      badge: "Infrastructure",
      snapshot: "/images/MeterFlow.png",
      liveUrl: undefined,
      techStack: ["Next.js", "Express", "SQLite", "Stripe", "TypeScript"],
      githubUrl: "https://github.com/AliWahid1310/llm-meter",
      icon: Zap,
      accent: "#eab308",
      architectureDetails: {
        summary:
          "Production-grade API usage metering, quota enforcement, and Stripe billing engine designed for LLM platform providers. Delivers sub-millisecond pre-action quota validation, integer micro-dollar arithmetic, and resilient idempotency.",
        sections: [
          {
            title: "Core Infrastructure",
            items: [
              { name: "Deterministic Math", desc: "Integer arithmetic (micro-dollars) preventing floating-point rounding errors in high-volume token accounting." },
              { name: "Quota Integrity", desc: "Boundary checks with HTTP 429 quota exhaustion guardrails and atomic transactional deduction." },
              { name: "Idempotency & Deduplication", desc: "SHA-256 idempotency key deduplication cache preventing duplicate billing on retry storms." },
            ],
          },
          {
            title: "Tech Stack & Integration",
            items: [
              { name: "Backend Engine", desc: "Express.js + TypeScript service layer with SQLite WAL persistence and automated Stripe customer synchronization." },
              { name: "Frontend Console", desc: "Next.js dashboard with interactive API request simulator, tier breakdown, and real-time usage metrics." },
            ],
          },
        ],
        apiEndpoints: [
          { method: "POST", path: "/api/generate", desc: "Simulates LLM inference call with token metering and balance validation" },
          { method: "GET", path: "/api/usage", desc: "Fetches aggregated token consumption and micro-dollar spend" },
          { method: "POST", path: "/api/checkout", desc: "Creates Stripe customer portal and balance replenishment session" },
        ],
      },
    },
    {
      id: "circl",
      title: "Circl",
      tagline: "Campus community hub for student societies, events & real-time connections",
      category: "fullstack",
      badge: "Live App",
      snapshot: "/images/C.jpg",
      liveUrl: "https://global-app-gamma.vercel.app/",
      techStack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Users,
      accent: "#10b981",
    },
    {
      id: "gallery-wall-planner",
      title: "Gallery Wall Planner",
      tagline: "Interactive 3D wall art configurator & room visualizer for Laboo Studio",
      category: "ecommerce",
      badge: "Live App",
      snapshot: "/images/GWP.jpg",
      liveUrl: "https://gallery-wall-planner.vercel.app/",
      techStack: ["React", "Vite", "Canvas API", "Tailwind CSS"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: ShoppingBag,
      accent: "#f59e0b",
    },
    {
      id: "visualboost-ai",
      title: "VisualBoost AI",
      tagline:
        "Full-stack computer vision & DIP platform with Next.js 15, FastAPI, OpenCV (CLAHE, GrabCut) & YOLOv8 for real-time quality scoring, enhancement pipelines & smart framing",
      category: "ai",
      badge: "Vision & DIP Platform",
      snapshot: "/images/VB_AI.png",
      techStack: [
        "Next.js 15",
        "FastAPI",
        "OpenCV",
        "YOLOv8",
        "Python",
        "Tailwind CSS",
        "Framer Motion",
      ],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Cpu,
      accent: "#8b5cf6",
      architectureDetails: {
        summary:
          "VisualBoost AI is a full-stack, portfolio-grade computer vision platform designed for digital creators, e-commerce sellers, and Digital Image Processing (DIP) workflows. It combines a Next.js 15 App Router frontend with a FastAPI + OpenCV + YOLOv8 backend to deliver real-time image quality evaluation, AI suggestions, enhancement pipelines, platform-specific presets, and object detection.",
        sections: [
          {
            title: "Frontend Architecture",
            items: [
              {
                name: "Framework",
                desc: "Next.js 15 (App Router) with React 19, TypeScript, and server/client component optimization.",
              },
              {
                name: "Styling & UI",
                desc: "Tailwind CSS with custom glassmorphism, glow accents, Lucide React icons, and next-themes reactive dark/light UI.",
              },
              {
                name: "Animations & Interaction",
                desc: "Framer Motion micro-interactions, split-view before/after comparison slider, and interactive SVG quality score gauges.",
              },
            ],
          },
          {
            title: "Backend & Vision Engine",
            items: [
              {
                name: "FastAPI & Uvicorn",
                desc: "Asynchronous Python REST API service with Pydantic v2 schemas and multipart/form-data upload pipelines.",
              },
              {
                name: "OpenCV DIP Pipeline",
                desc: "CLAHE (L-channel in LAB space), Laplacian operator focus variance, Gaussian blur, Fast Non-Local Means (NLM) color denoising, and GrabCut segmentation.",
              },
              {
                name: "Ultralytics YOLOv8",
                desc: "Real-time multi-class object detection using YOLOv8 nano (yolov8n.pt) for subject bounding boxes and smart center-weighted framing suggestions.",
              },
              {
                name: "Scientific Quality Validation",
                desc: "PSNR (Peak Signal-to-Noise Ratio) & SSIM (Structural Similarity Index) calculations to scientifically verify enhancement fidelity.",
              },
            ],
          },
          {
            title: "Core DIP & E-Commerce Features",
            items: [
              {
                name: "Quality Scoring",
                desc: "Weighted composite score of Brightness (22%), Sharpness via Laplacian variance (30%), Contrast (26%), and Noise residual variance (22%).",
              },
              {
                name: "Multi-Stage Auto Enhance",
                desc: "NLM color denoising + CLAHE + unsharp masking + detail enhancement + gamma LUT shadow recovery.",
              },
              {
                name: "Platform Optimizers",
                desc: "Automated crop and aspect ratio adaptation for Instagram Post (1:1), Instagram Story (9:16), Shopify Product (1:1), Daraz (1:1), and Amazon (1:1).",
              },
              {
                name: "Background Segmentation",
                desc: "OpenCV GrabCut with Gaussian Mixture Models (GMMs) for transparent RGBA or clean white studio composite export.",
              },
            ],
          },
        ],
        apiEndpoints: [
          { method: "GET", path: "/health", desc: "Returns service health and model status" },
          { method: "GET", path: "/", desc: "Root status and interactive OpenAPI documentation link" },
          { method: "POST", path: "/analyze", desc: "Computes quality metrics, severity-tagged suggestions, and YOLOv8 detections" },
          { method: "POST", path: "/enhance", desc: "Applies enhancement filters: auto, brightness, contrast, sharpen, denoise" },
          { method: "POST", path: "/optimize", desc: "Optimizes, resizes, and crops for targeted e-commerce platforms" },
        ],
      },
    },
    {
      id: "stockai-pro",
      title: "StockAI Pro",
      tagline: "ML ensemble stock forecasting with live Plotly charts",
      category: "ai",
      badge: "Machine Learning",
      snapshot: "/images/StockAI%20Pro.png",
      techStack: ["Python", "Streamlit", "scikit-learn", "pandas"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Sparkles,
      accent: "#3b82f6",
    },
    {
      id: "booknest",
      title: "BookNest",
      tagline: "Library reservation engine with JWT auth & NestJS",
      category: "backend",
      badge: "NestJS",
      snapshot: "",
      techStack: ["NestJS", "PostgreSQL", "JWT", "React"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: BookOpen,
      accent: "#06b6d4",
    },
    {
      id: "fashion-storefront",
      title: "Fashion Storefront",
      tagline: "E-commerce store with cart persistence & Dockerized API",
      category: "fullstack",
      badge: "Full-Stack",
      snapshot: "",
      techStack: ["React", "NestJS", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: ShoppingBag,
      accent: "#ec4899",
    },
    {
      id: "realtime-chat",
      title: "Real-time Chat Engine",
      tagline: "Multi-threaded TCP socket messaging with WPF & MVVM",
      category: "backend",
      badge: "C# / .NET 8",
      snapshot: "",
      techStack: ["C#", "WPF", ".NET 8", "TCP Sockets"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: MessageSquare,
      accent: "#6366f1",
    },
    {
      id: "corporate-design",
      title: "Corporate Creatives",
      tagline: "Branding & event collateral for Huawei, Devsinc & DPL",
      category: "design",
      badge: "Branding",
      snapshot: "",
      techStack: ["Canva", "UI/UX", "Brand Identity"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Palette,
      accent: "#f43f5e",
    },
  ];

  const getPreviewSource = (proj: Project) => {
    return proj.snapshot || "";
  };

  const filtered = projects
    .filter((p) => filter === "all" || p.category === filter)
    .filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

  return (
    <section id="projects" className="section-wrapper bg-grid">
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "36px",
          }}
        >
          <div>
            <div className="section-tag">
              <Layers style={{ width: "12px", height: "12px" }} />
              <span>Portfolio</span>
            </div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Full-stack apps, AI pipelines, and interactive web configurators.
            </p>
          </div>

          {/* Search */}
          <div style={{ position: "relative", minWidth: "240px" }}>
            <Search
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "14px",
                height: "14px",
                color: "var(--text-muted)",
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              style={{
                width: "100%",
                padding: "8px 14px 8px 34px",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-light)",
                background: "var(--bg-card)",
                color: "var(--text-dark)",
                fontSize: "0.825rem",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "32px",
            background: "var(--bg-card)",
            padding: "6px",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-light)",
            width: "fit-content",
          }}
        >
          {[
            { id: "all", label: `All (${projects.length})` },
            { id: "fullstack", label: "Full-Stack" },
            { id: "ecommerce", label: "E-Commerce / 3D" },
            { id: "ai", label: "AI & ML" },
            { id: "backend", label: "Backend" },
            { id: "design", label: "Design" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              style={{
                padding: "7px 14px",
                fontSize: "0.8rem",
                fontWeight: 600,
                borderRadius: "var(--radius-sm)",
                border: "none",
                cursor: "pointer",
                background:
                  filter === tab.id ? "var(--text-dark)" : "transparent",
                color:
                  filter === tab.id ? "var(--bg-primary)" : "var(--text-muted)",
                transition: "all 0.2s ease",
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
            const previewSrc = getPreviewSource(proj);

            return (
              <div
                key={proj.id}
                className="clean-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 0,
                  overflow: "hidden",
                  borderLeft: `3px solid ${proj.accent}`,
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    `0 12px 40px ${proj.accent}18`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "none";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Snapshot Image Area */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    background: `linear-gradient(135deg, ${proj.accent}10 0%, ${proj.accent}05 100%)`,
                    borderBottom: "1px solid var(--border-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {previewSrc ? (
                    <a
                      href={proj.liveUrl || proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      title={proj.liveUrl ? `Open ${proj.title} live preview` : proj.title}
                    >
                      <img
                        src={previewSrc}
                        alt={`${proj.title} screenshot`}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "top center",
                          transition: "transform 0.4s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                        }}
                      />
                    </a>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        color: "var(--text-muted)",
                        opacity: 0.5,
                      }}
                    >
                      <ImageIcon
                        style={{ width: "32px", height: "32px" }}
                      />
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontFamily: "var(--font-mono)",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        Snapshot Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Live status indicator */}
                  {proj.liveUrl && (
                    <span
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-mono)",
                        color: "#059669",
                        background: "rgba(255,255,255,0.95)",
                        backdropFilter: "blur(6px)",
                        padding: "3px 8px",
                        borderRadius: "var(--radius-full)",
                        border: "1px solid rgba(16,185,129,0.3)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        pointerEvents: "none",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#10b981",
                          boxShadow: "0 0 6px #10b981",
                        }}
                      />
                      LIVE DEMO
                    </span>
                  )}

                  {/* Badge overlay */}
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-mono)",
                      color: proj.accent,
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(6px)",
                      padding: "3px 10px",
                      borderRadius: "var(--radius-full)",
                      border: `1px solid ${proj.accent}40`,
                      pointerEvents: "none",
                    }}
                  >
                    {proj.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: 1,
                  }}
                >
                  {/* Title Row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "var(--radius-sm)",
                        background: `${proj.accent}15`,
                        border: `1px solid ${proj.accent}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: proj.accent,
                        flexShrink: 0,
                      }}
                    >
                      <Icon style={{ width: "18px", height: "18px" }} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--text-dark)",
                        letterSpacing: "-0.01em",
                        margin: 0,
                      }}
                    >
                      {proj.title}
                    </h3>
                  </div>

                  {/* One-line tagline */}
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-body)",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    {proj.tagline}
                  </p>

                  {/* Tech Stack */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "5px",
                    }}
                  >
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "12px",
                      borderTop: "1px solid var(--border-light)",
                      marginTop: "auto",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        style={{
                          padding: "5px 12px",
                          fontSize: "0.78rem",
                          gap: "6px",
                        }}
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source</span>
                      </a>

                      {proj.architectureDetails && (
                        <button
                          type="button"
                          onClick={() => setSelectedDeepDive(proj)}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            padding: "5px 11px",
                            fontSize: "0.78rem",
                            fontWeight: 600,
                            borderRadius: "var(--radius-sm)",
                            border: `1px solid ${proj.accent}40`,
                            background: `${proj.accent}12`,
                            color: proj.accent,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = `${proj.accent}22`;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = `${proj.accent}12`;
                          }}
                          title="View system architecture & specification"
                        >
                          <Layers style={{ width: "13px", height: "13px" }} />
                          <span>Specs</span>
                        </button>
                      )}
                    </div>

                    {proj.liveUrl ? (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "#fff",
                          backgroundColor: proj.accent,
                          padding: "6px 12px",
                          borderRadius: "var(--radius-sm)",
                          textDecoration: "none",
                          transition: "opacity 0.2s ease, transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9";
                          (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                          (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                        }}
                      >
                        <span>Live Demo</span>
                        <ExternalLink style={{ width: "13px", height: "13px" }} />
                      </a>
                    ) : (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          color: proj.accent,
                          textDecoration: "none",
                          transition: "gap 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.gap =
                            "8px";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.gap =
                            "4px";
                        }}
                      >
                        <span>View Project</span>
                        <ArrowUpRight
                          style={{ width: "14px", height: "14px" }}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Deep Dive Modal */}
        {selectedDeepDive && selectedDeepDive.architectureDetails && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(8px)",
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedDeepDive(null);
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "780px",
                maxHeight: "88vh",
                overflowY: "auto",
                backgroundColor: "var(--bg-card)",
                borderRadius: "var(--radius-lg, 16px)",
                border: "1px solid var(--border-light)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
                padding: "28px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "16px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid var(--border-light)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "var(--radius-sm)",
                      background: `${selectedDeepDive.accent}18`,
                      border: `1px solid ${selectedDeepDive.accent}35`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: selectedDeepDive.accent,
                    }}
                  >
                    {React.createElement(selectedDeepDive.icon, { style: { width: "22px", height: "22px" } })}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "var(--text-dark)",
                        }}
                      >
                        {selectedDeepDive.title}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 700,
                          color: selectedDeepDive.accent,
                          background: `${selectedDeepDive.accent}15`,
                          padding: "2px 8px",
                          borderRadius: "var(--radius-full)",
                          border: `1px solid ${selectedDeepDive.accent}30`,
                        }}
                      >
                        {selectedDeepDive.badge}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-muted)",
                      }}
                    >
                      System Architecture & Technical Specifications
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedDeepDive(null)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "6px",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "color 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-dark)";
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-secondary, rgba(0,0,0,0.05))";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                  aria-label="Close modal"
                >
                  <X style={{ width: "20px", height: "20px" }} />
                </button>
              </div>

              {/* Overview Summary */}
              <div
                style={{
                  background: `linear-gradient(135deg, ${selectedDeepDive.accent}0a 0%, var(--bg-card) 100%)`,
                  padding: "16px",
                  borderRadius: "var(--radius-md)",
                  border: `1px solid ${selectedDeepDive.accent}20`,
                }}
              >
                <h4
                  style={{
                    margin: "0 0 6px 0",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: selectedDeepDive.accent,
                    fontWeight: 700,
                  }}
                >
                  Platform Overview
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.88rem",
                    lineHeight: "1.6",
                    color: "var(--text-body)",
                  }}
                >
                  {selectedDeepDive.architectureDetails.summary}
                </p>
              </div>

              {/* Architecture Sections */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {selectedDeepDive.architectureDetails.sections.map((sec, sIdx) => (
                  <div key={sIdx}>
                    <h4
                      style={{
                        margin: "0 0 10px 0",
                        fontSize: "0.8rem",
                        fontFamily: "var(--font-mono)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--text-dark)",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <CheckCircle2 style={{ width: "14px", height: "14px", color: selectedDeepDive.accent }} />
                      <span>{sec.title}</span>
                    </h4>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "8px",
                      }}
                    >
                      {sec.items.map((it, iIdx) => (
                        <div
                          key={iIdx}
                          style={{
                            padding: "10px 12px",
                            borderRadius: "var(--radius-sm)",
                            background: "var(--bg-secondary, rgba(0,0,0,0.03))",
                            border: "1px solid var(--border-light)",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: 700,
                              color: "var(--text-dark)",
                              marginBottom: "3px",
                            }}
                          >
                            {it.name}
                          </div>
                          <div
                            style={{
                              fontSize: "0.78rem",
                              lineHeight: "1.45",
                              color: "var(--text-muted)",
                            }}
                          >
                            {it.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* API Endpoints Reference */}
              {selectedDeepDive.architectureDetails.apiEndpoints && (
                <div>
                  <h4
                    style={{
                      margin: "0 0 10px 0",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-mono)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--text-dark)",
                      fontWeight: 700,
                    }}
                  >
                    API Endpoints Reference
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      background: "var(--bg-secondary, rgba(0,0,0,0.03))",
                      padding: "10px",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    {selectedDeepDive.architectureDetails.apiEndpoints.map((ep, eIdx) => (
                      <div
                        key={eIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: "8px",
                          padding: "6px 8px",
                          borderRadius: "var(--radius-sm)",
                          background: "var(--bg-card)",
                          border: "1px solid var(--border-light)",
                          fontSize: "0.78rem",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontWeight: 700,
                              fontSize: "0.7rem",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              backgroundColor: ep.method === "GET" ? "rgba(16,185,129,0.15)" : "rgba(59,130,246,0.15)",
                              color: ep.method === "GET" ? "#059669" : "#2563eb",
                            }}
                          >
                            {ep.method}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontWeight: 600,
                              color: "var(--text-dark)",
                            }}
                          >
                            {ep.path}
                          </span>
                        </div>
                        <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
                          {ep.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border-light)",
                  marginTop: "auto",
                }}
              >
                <a
                  href={selectedDeepDive.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    fontSize: "0.8rem",
                  }}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedDeepDive(null)}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "var(--radius-sm)",
                    background: selectedDeepDive.accent,
                    color: "#fff",
                    border: "none",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    cursor: "pointer",
                  }}
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
