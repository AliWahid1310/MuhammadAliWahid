"use client";

import React, { useState } from "react";
import {
  Server,
  Monitor,
  Database,
  Cpu,
  Cloud,
  ShoppingBag,
  CheckCircle2,
  Code2,
  Search,
  Sparkles,
  Zap,
  Layers,
  ShieldCheck
} from "lucide-react";

export default function RealSkills() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const skillCategories = [
    {
      id: "backend",
      category: "Backend & Systems",
      icon: Server,
      accent: "#3b82f6",
      skills: [
        { name: "C# / .NET", level: "Advanced", pct: 92, desc: ".NET 8, .NET Core, WPF, TCP Multi-threaded Sockets" },
        { name: "Node.js & NestJS", level: "Advanced", pct: 90, desc: "Modular architecture, TypeScript, Microservices, Dependency Injection" },
        { name: "FastAPI & Python", level: "Advanced", pct: 94, desc: "High-throughput async AI endpoints, Pydantic, Swagger" },
        { name: "REST APIs Architecture", level: "Expert", pct: 95, desc: "Scalable API contract design, rate-limiting, error handling" },
        { name: "Authentication & Security", level: "Advanced", pct: 88, desc: "JWT, role-based access control, password hashing, OAuth" },
      ]
    },
    {
      id: "frontend",
      category: "Frontend & Web Architecture",
      icon: Monitor,
      accent: "#8b5cf6",
      skills: [
        { name: "React & Next.js", level: "Expert", pct: 96, desc: "Next.js App Router, React 19, Server Components, SSR & Hydration" },
        { name: "TypeScript", level: "Advanced", pct: 93, desc: "Strict typing, generics, utility types, compile-time safety" },
        { name: "Vite & Modern Tooling", level: "Advanced", pct: 90, desc: "Rapid modern bundling, HMR, lightweight SPA development" },
        { name: "Tailwind CSS & Styling", level: "Expert", pct: 95, desc: "Fluid responsive grids, custom CSS variables, dark luxury themes" },
        { name: "HTML5 & Modern Web APIs", level: "Expert", pct: 96, desc: "Semantic HTML, Accessibility (a11y), WebSockets, Web Storage" },
      ]
    },
    {
      id: "ai",
      category: "AI & Computer Vision",
      icon: Cpu,
      accent: "#10b981",
      skills: [
        { name: "Python for Data Science", level: "Advanced", pct: 92, desc: "pandas, NumPy, scikit-learn, Matplotlib, Jupyter" },
        { name: "Computer Vision & YOLOv8", level: "Advanced", pct: 90, desc: "Real-time object detection, bounding box logic, OpenCV pipelines" },
        { name: "Ensemble & Time-Series", level: "Advanced", pct: 86, desc: "Stock prediction, multi-model ensemble regressions, trend horizons" },
        { name: "Streamlit", level: "Advanced", pct: 92, desc: "Rapid AI web demos, interactive metric visualizers" },
        { name: "Generative AI & Copilot", level: "Certified", pct: 90, desc: "Databricks GenAI Certified, Microsoft Azure AI Solutions" },
      ]
    },
    {
      id: "database",
      category: "Databases & Cloud Storage",
      icon: Database,
      accent: "#f59e0b",
      skills: [
        { name: "PostgreSQL & Neon", level: "Advanced", pct: 90, desc: "Relational schema design, indexes, ACID transactions, serverless Postgres" },
        { name: "MongoDB", level: "Intermediate", pct: 82, desc: "Document collections, BSON, indexing & aggregation queries" },
        { name: "MS SQL Server", level: "Intermediate", pct: 84, desc: "Enterprise relational database queries, stored procedures, T-SQL" },
        { name: "Supabase", level: "Advanced", pct: 88, desc: "Auth integration, Row-Level Security (RLS), realtime subscriptions" },
      ]
    },
    {
      id: "devops",
      category: "DevOps & Cloud Deployments",
      icon: Cloud,
      accent: "#06b6d4",
      skills: [
        { name: "Docker", level: "Intermediate", pct: 85, desc: "Multi-stage builds, container isolation, environment parity" },
        { name: "Vercel, Railway, Render", level: "Advanced", pct: 92, desc: "Continuous deployment pipelines, environment variables, edge CDNs" },
        { name: "Cloudinary Media", level: "Advanced", pct: 90, desc: "Automated media transformation, CDN caching, image optimization" },
        { name: "Git, GitHub & CI/CD", level: "Advanced", pct: 94, desc: "Git workflows, branch protection, automated tests via GitHub Actions" },
      ]
    },
    {
      id: "creative",
      category: "E-Commerce & Digital Strategy",
      icon: ShoppingBag,
      accent: "#ec4899",
      skills: [
        { name: "Shopify Theme Extensions", level: "Intermediate", pct: 86, desc: "Theme app extensions, product configurators, checkout hooks" },
        { name: "Digital Branding & Canva", level: "Advanced", pct: 90, desc: "Posters & technical event marketing for Huawei, Devsinc, DPL" },
        { name: "Agile & Scrum Practices", level: "Certified", pct: 88, desc: "Sprint cycles, user stories, Jira project tracking" },
      ]
    }
  ];

  // Filtering logic
  const filteredCategories = skillCategories
    .filter((cat) => activeTab === "all" || cat.id === activeTab)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="section-wrapper" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-tag">
            <Code2 style={{ width: "12px", height: "12px" }} />
            <span>Mastery Matrix & Tools</span>
          </div>
          <h2 className="section-title">Technical Skills & Engineering Stack</h2>
          <p className="section-subtitle" style={{ margin: "10px auto 0 auto" }}>
            Production-tested engineering competencies across full-stack TypeScript, high-concurrency .NET systems, and applied computer vision.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            marginBottom: "36px",
            background: "var(--bg-card)",
            padding: "12px 18px",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-light)",
            backdropFilter: "blur(16px)"
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {[
              { id: "all", label: "All Stack" },
              { id: "backend", label: "Backend & Systems" },
              { id: "frontend", label: "Frontend" },
              { id: "ai", label: "AI & Vision" },
              { id: "database", label: "Databases" },
              { id: "devops", label: "DevOps & Cloud" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "6px 14px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  borderRadius: "var(--radius-full)",
                  border: "none",
                  cursor: "pointer",
                  background: activeTab === tab.id ? "var(--primary)" : "rgba(255, 255, 255, 0.05)",
                  color: activeTab === tab.id ? "#ffffff" : "var(--text-muted)",
                  boxShadow: activeTab === tab.id ? "0 2px 10px rgba(59, 130, 246, 0.4)" : "none",
                  transition: "all 0.2s ease"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div style={{ position: "relative", minWidth: "240px" }}>
            <Search style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: "14px", height: "14px", color: "var(--text-muted)" }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech (e.g. YOLO, C#, Next)..."
              style={{
                width: "100%",
                padding: "8px 14px 8px 34px",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-light)",
                background: "rgba(0, 0, 0, 0.25)",
                color: "var(--text-dark)",
                fontSize: "0.8rem",
                outline: "none"
              }}
            />
          </div>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid-3">
          {filteredCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="clean-card"
                style={{
                  borderTop: `3px solid ${cat.accent}`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  {/* Category Title Bar */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      paddingBottom: "16px",
                      marginBottom: "16px",
                      borderBottom: "1px solid var(--border-light)"
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "var(--radius-md)",
                        background: `${cat.accent}18`,
                        border: `1px solid ${cat.accent}33`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: cat.accent
                      }}
                    >
                      <Icon style={{ width: "20px", height: "20px" }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-dark)" }}>
                        {cat.category}
                      </h3>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                        {cat.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills List with Proficiency Bars */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        style={{
                          padding: "10px 14px",
                          borderRadius: "var(--radius-md)",
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid var(--border-light)",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                          <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-dark)" }}>
                            {skill.name}
                          </span>
                          <span
                            style={{
                              fontSize: "0.7rem",
                              fontFamily: "var(--font-mono)",
                              fontWeight: 700,
                              color: cat.accent,
                              background: `${cat.accent}15`,
                              padding: "2px 8px",
                              borderRadius: "var(--radius-full)",
                              border: `1px solid ${cat.accent}30`
                            }}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {/* Animated Gradient Progress Bar */}
                        <div
                          style={{
                            width: "100%",
                            height: "5px",
                            borderRadius: "9999px",
                            background: "rgba(255, 255, 255, 0.08)",
                            overflow: "hidden",
                            marginBottom: "6px"
                          }}
                        >
                          <div
                            style={{
                              width: `${skill.pct}%`,
                              height: "100%",
                              borderRadius: "9999px",
                              background: `linear-gradient(90deg, ${cat.accent} 0%, #38bdf8 100%)`,
                              boxShadow: `0 0 10px ${cat.accent}66`
                            }}
                          />
                        </div>

                        <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", lineHeight: "1.4" }}>
                          {skill.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div style={{ paddingTop: "14px", marginTop: "14px", borderTop: "1px solid var(--border-light)", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                  <ShieldCheck style={{ width: "14px", height: "14px", color: cat.accent }} />
                  <span>Verified in Production & Academic Implementations</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

