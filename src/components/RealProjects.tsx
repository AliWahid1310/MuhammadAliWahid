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
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "ai" | "fullstack" | "backend" | "ecommerce" | "design";
  badge: string;
  snapshot: string; // path to screenshot image — empty string = placeholder
  techStack: string[];
  githubUrl: string;
  icon: React.ElementType;
  accent: string;
}

export default function RealProjects() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const projects: Project[] = [
    {
      id: "visualboost-ai",
      title: "VisualBoost AI",
      tagline: "Real-time object detection with YOLOv8, FastAPI & Docker",
      category: "ai",
      badge: "AI / Vision",
      snapshot: "",
      techStack: ["Next.js", "FastAPI", "YOLOv8", "Docker"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Cpu,
      accent: "#8b5cf6",
    },
    {
      id: "stockai-pro",
      title: "StockAI Pro",
      tagline: "ML ensemble stock forecasting with live Plotly charts",
      category: "ai",
      badge: "Machine Learning",
      snapshot: "",
      techStack: ["Python", "Streamlit", "scikit-learn", "pandas"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Sparkles,
      accent: "#3b82f6",
    },
    {
      id: "global-app",
      title: "Global App",
      tagline: "Campus community hub with Supabase auth & Cloudinary CDN",
      category: "fullstack",
      badge: "Full-Stack",
      snapshot: "",
      techStack: ["Next.js", "Supabase", "PostgreSQL", "Cloudinary"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Users,
      accent: "#10b981",
    },
    {
      id: "interior-configurator",
      title: "Interior Configurator",
      tagline: "3D product customizer as a Shopify theme extension",
      category: "ecommerce",
      badge: "Shopify 3D",
      snapshot: "",
      techStack: ["React", "Vite", "Shopify API", "Canvas"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: ShoppingBag,
      accent: "#f59e0b",
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
              Full-stack apps, AI pipelines, and real-time systems.
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
            { id: "all", label: "All (8)" },
            { id: "ai", label: "AI & ML" },
            { id: "fullstack", label: "Full-Stack" },
            { id: "backend", label: "Backend" },
            { id: "ecommerce", label: "E-Commerce" },
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
                  {proj.snapshot ? (
                    <img
                      src={proj.snapshot}
                      alt={`${proj.title} screenshot`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
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
                      background: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(6px)",
                      padding: "3px 10px",
                      borderRadius: "var(--radius-full)",
                      border: `1px solid ${proj.accent}40`,
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
                    }}
                  >
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
