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
  Code2
} from "lucide-react";

export default function RealSkills() {
  const skillCategories = [
    {
      category: "Backend & Systems",
      icon: Server,
      accent: "#2563eb",
      skills: [
        { name: "C# / .NET", level: "Advanced", desc: ".NET 8, .NET Core, WPF, TCP Sockets" },
        { name: "Node.js & NestJS", level: "Advanced", desc: "Modular architecture, TypeScript, Microservices" },
        { name: "FastAPI & Python", level: "Advanced", desc: "High-performance async AI & REST endpoints" },
        { name: "REST APIs Development", level: "Expert", desc: "Scalable API design, Swagger/OpenAPI" },
        { name: "Authentication & Security", level: "Advanced", desc: "JWT, Passport.js, bcrypt, role-based access" },
      ]
    },
    {
      category: "Frontend & Client",
      icon: Monitor,
      accent: "#7c3aed",
      skills: [
        { name: "React & Next.js", level: "Advanced", desc: "App Router, Server Components, SSR & SSG" },
        { name: "TypeScript & JavaScript", level: "Advanced", desc: "Strict typing, ESNext, modern patterns" },
        { name: "Vite", level: "Advanced", desc: "Rapid modern frontend development & bundling" },
        { name: "Tailwind CSS", level: "Advanced", desc: "Responsive layouts, sleek modern UI/UX design" },
        { name: "HTML5, CSS3 & Bootstrap", level: "Expert", desc: "Semantic markup, responsive grid structures" },
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Cpu,
      accent: "#059669",
      skills: [
        { name: "Python", level: "Advanced", desc: "pandas, NumPy, scikit-learn, Matplotlib" },
        { name: "Computer Vision & YOLOv8", level: "Advanced", desc: "Object detection, OpenCV image pipelines" },
        { name: "Ensemble & Time-Series", level: "Advanced", desc: "Stock forecasting, regression, classification" },
        { name: "Streamlit", level: "Advanced", desc: "Rapid AI dashboard and interactive ML demos" },
        { name: "Generative AI & Copilot", level: "Certified", desc: "Databricks & Microsoft Certified" },
      ]
    },
    {
      category: "Databases & Storage",
      icon: Database,
      accent: "#d97706",
      skills: [
        { name: "PostgreSQL & Neon", level: "Advanced", desc: "Relational modeling, indexing, ACID transactions" },
        { name: "MongoDB", level: "Intermediate", desc: "NoSQL document store, aggregation pipelines" },
        { name: "MS SQL Server", level: "Intermediate", desc: "Enterprise relational database design & T-SQL" },
        { name: "Supabase", level: "Advanced", desc: "Postgres backend-as-a-service, Auth & Storage" },
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: Cloud,
      accent: "#0284c7",
      skills: [
        { name: "Docker", level: "Intermediate", desc: "Containerization, Dockerfile, multi-stage builds" },
        { name: "Vercel, Railway, Render", level: "Advanced", desc: "Continuous deployment & cloud hosting" },
        { name: "Cloudinary", level: "Advanced", desc: "Cloud image/media transformations & CDN" },
        { name: "Git, GitHub & CI/CD", level: "Advanced", desc: "Version control, branching, GitHub Actions" },
      ]
    },
    {
      category: "E-Commerce & Creative",
      icon: ShoppingBag,
      accent: "#db2777",
      skills: [
        { name: "Shopify", level: "Intermediate", desc: "Theme App Extensions, storefront customization" },
        { name: "Canva & Graphic Design", level: "Advanced", desc: "Brand creatives for university & corporations" },
        { name: "Agile & Scrum", level: "Certified", desc: "Sprint planning, user stories, Jira/Trello" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-wrapper" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag">
            <Code2 style={{ width: "12px", height: "12px" }} />
            <span>Core Competencies & Tools</span>
          </div>
          <h2 className="section-title">Technical Skills & Expertise</h2>
          <p className="section-subtitle" style={{ margin: "10px auto 0 auto" }}>
            Comprehensive toolkit spanning full-stack web development, backend engineering, applied computer vision, databases, and cloud deployment.
          </p>
        </div>

        <div className="grid-3">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="clean-card">
                
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingBottom: "14px", marginBottom: "14px", borderBottom: "1px solid var(--border-light)" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-md)", background: `${cat.accent}15`, display: "flex", alignItems: "center", justifyContent: "center", color: cat.accent }}>
                    <Icon style={{ width: "20px", height: "20px" }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-dark)" }}>
                      {cat.category}
                    </h3>
                  </div>
                </div>

                {/* Skills list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{ padding: "8px 12px", borderRadius: "var(--radius-sm)", background: "var(--bg-secondary)", border: "1px solid var(--border-light)" }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--text-dark)" }}>
                          {skill.name}
                        </span>
                        <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", fontWeight: 600, color: cat.accent, background: "#ffffff", padding: "2px 6px", borderRadius: "4px", border: "1px solid var(--border-light)" }}>
                          {skill.level}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
                        {skill.desc}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
