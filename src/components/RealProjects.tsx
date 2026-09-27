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
  Palette
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "ai" | "fullstack" | "backend" | "ecommerce" | "design";
  badge: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  icon: any;
  accent: string;
}

export default function RealProjects() {
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "visualboost-ai",
      title: "VisualBoost AI",
      tagline: "Image Intelligence & Object Detection Platform",
      category: "ai",
      badge: "AI / Computer Vision",
      description:
        "High-performance image intelligence platform incorporating real-time object detection and computer vision analysis. Built with FastAPI backend powering YOLOv8 models, containerized with Docker, and served to a responsive Next.js frontend.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "OpenCV", "YOLOv8", "Docker"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Cpu,
      accent: "#7c3aed"
    },
    {
      id: "stockai-pro",
      title: "StockAI Pro",
      tagline: "AI Stock Analysis & Time-Series Forecasting Platform",
      category: "ai",
      badge: "Machine Learning",
      description:
        "Predictive stock analysis application leveraging machine learning ensemble models and time-series forecasting. Processes market indicators and historical pricing to produce visual forecast horizons and risk metrics.",
      techStack: ["Python", "Streamlit", "pandas", "NumPy", "scikit-learn", "Ensemble Learning"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Sparkles,
      accent: "#2563eb"
    },
    {
      id: "global-app",
      title: "Global App",
      tagline: "Campus Community & Academic Collaboration Platform",
      category: "fullstack",
      badge: "Full-Stack Web",
      description:
        "Comprehensive campus community platform designed for student interaction, event announcements, and academic resource sharing. Integrates Supabase with relational PostgreSQL and Cloudinary for media uploads.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Cloudinary"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Users,
      accent: "#059669"
    },
    {
      id: "interior-configurator",
      title: "Interactive Interior Configurator",
      tagline: "Interactive 3D Product Customizer for Shopify",
      category: "ecommerce",
      badge: "E-Commerce / Shopify",
      description:
        "Interactive interior customization tool allowing users to preview finishes, textiles, and configurations in real time. Packaged as a Shopify Theme App Extension for direct merchant checkout integration.",
      techStack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Shopify Theme Extension"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: ShoppingBag,
      accent: "#d97706"
    },
    {
      id: "booknest",
      title: "BookNest",
      tagline: "Library Reservation & Inventory Management System",
      category: "backend",
      badge: "Backend / Full-Stack",
      description:
        "Robust library catalog and reservation engine with role-based JWT authentication, automated loan tracking, and relational data architecture deployed on Neon PostgreSQL.",
      techStack: ["React", "Vite", "NestJS", "Neon PostgreSQL", "JWT Authentication"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: BookOpen,
      accent: "#0284c7"
    },
    {
      id: "fashion-storefront",
      title: "E-Commerce Fashion Storefront",
      tagline: "High-Performance Modern Retail Web Store",
      category: "fullstack",
      badge: "Full-Stack E-Commerce",
      description:
        "End-to-end e-commerce store with product filtering, cart persistence, secure checkout pipeline, and Dockerized NestJS API deployed to Vercel.",
      techStack: ["React", "Vite", "TypeScript", "NestJS", "PostgreSQL", "Docker", "Vercel"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: ShoppingBag,
      accent: "#db2777"
    },
    {
      id: "realtime-chat",
      title: "Real-time Messaging Application",
      tagline: "Multi-threaded Socket Chat Engine with MVVM Architecture",
      category: "backend",
      badge: "C# / .NET Systems",
      description:
        "Desktop messaging client and server built using C# and WPF on .NET 8. Features multi-client socket concurrency via TcpClient / TcpListener, asynchronous message serialization, and clean MVVM design.",
      techStack: ["C#", "WPF", ".NET 8", ".NET Framework 4.7.2", "TcpSockets", "MVVM"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: MessageSquare,
      accent: "#4f46e5"
    },
    {
      id: "corporate-design",
      title: "Corporate Collaborations & Creative Design",
      tagline: "Branding, Event Creatives & UI Collateral",
      category: "design",
      badge: "Creative & Brand",
      description:
        "Official promotional branding materials, technical event posters, and digital creatives for university events in collaboration with Huawei, DPL, Devsinc, and Agile Pakistan.",
      techStack: ["Canva", "UI/UX", "Brand Identity", "Social Marketing"],
      githubUrl: "https://github.com/AliWahid1310",
      icon: Palette,
      accent: "#e11d48"
    }
  ];

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-wrapper bg-grid">
      <div className="container">
        
        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", marginBottom: "36px" }}>
          <div>
            <div className="section-tag">
              <Layers style={{ width: "12px", height: "12px" }} />
              <span>Development Work</span>
            </div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Real-world applications spanning AI computer vision, stock forecasting, campus communities, and high-performance .NET socket systems.
            </p>
          </div>

          {/* Filter tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", background: "var(--bg-secondary)", padding: "5px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)" }}>
            {[
              { id: "all", label: "All Projects" },
              { id: "ai", label: "AI & ML" },
              { id: "fullstack", label: "Full-Stack" },
              { id: "backend", label: "Backend & .NET" },
              { id: "ecommerce", label: "E-Commerce" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: "6px 14px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  borderRadius: "var(--radius-sm)",
                  border: "none",
                  cursor: "pointer",
                  background: filter === tab.id ? "#ffffff" : "transparent",
                  color: filter === tab.id ? "var(--text-dark)" : "var(--text-muted)",
                  boxShadow: filter === tab.id ? "var(--shadow-sm)" : "none",
                  transition: "all 0.15s ease"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid-2">
          {filtered.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.id}
                className="clean-card"
                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <div>
                  {/* Top Bar */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-md)", background: `${proj.accent}15`, display: "flex", alignItems: "center", justifyContent: "center", color: proj.accent }}>
                        <Icon style={{ width: "20px", height: "20px" }} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-dark)" }}>
                          {proj.title}
                        </h3>
                        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                          {proj.tagline}
                        </span>
                      </div>
                    </div>

                    <span style={{ fontSize: "0.72rem", fontWeight: 700, fontFamily: "var(--font-mono)", color: proj.accent, background: `${proj.accent}10`, padding: "4px 10px", borderRadius: "var(--radius-full)" }}>
                      {proj.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: "1.6", marginBottom: "18px" }}>
                    {proj.description}
                  </p>
                </div>

                {/* Tech Stack & Links */}
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid var(--border-light)" }}>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-dark)", textDecoration: "none" }}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Code on GitHub</span>
                    </a>

                    <a
                      href="#contact"
                      style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}
                    >
                      Discuss Project →
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
