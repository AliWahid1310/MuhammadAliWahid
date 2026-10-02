"use client";

import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  Building,
  TrendingUp,
  Award,
  ChevronRight
} from "lucide-react";

export default function RealExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences = [
    {
      role: "Freelance Full-Stack Web Developer & Technical Consultant",
      company: "Independent Client Engagements",
      period: "Oct 2023 — Present",
      location: "Islamabad & Remote Global",
      accent: "#3b82f6",
      summary:
        "Architecting and delivering high-performance web applications and e-commerce solutions for commercial clients across North America and Pakistan.",
      impact: [
        "Architected responsive Next.js 16 and Vite web applications with TypeScript, achieving sub-second Largest Contentful Paint (LCP).",
        "Engineered custom Shopify Theme App Extensions with interactive 3D/2D configurators, increasing client conversion rates.",
        "Integrated third-party APIs (Supabase, Cloudinary, Neon PostgreSQL, Stripe, and SendGrid) with zero-downtime deployments.",
        "Executed data-driven social media ad campaigns and brand identity designs for enterprise retail stores."
      ],
      technologies: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Shopify", "Supabase", "FastAPI"]
    },
    {
      role: "Technical Designer & Corporate Brand Collaborator",
      company: "Department of Computer Science, Air University",
      period: "2023 — Present",
      location: "Islamabad, PK",
      accent: "#8b5cf6",
      summary:
        "Led creative direction and technical branding collateral for major tech conferences and hackathons in collaboration with premier software enterprises.",
      impact: [
        "Produced official event creatives and digital collateral for industry partnerships with Huawei, DPL, Devsinc, and Agile Pakistan.",
        "Coordinated multi-channel marketing campaigns reaching 3,000+ university engineers and industry professionals.",
        "Facilitated workshop branding and technical symposium speaker kits."
      ],
      technologies: ["Visual Design", "UI/UX", "Brand Systems", "Event Strategy", "Social Media Analytics"]
    }
  ];

  return (
    <section id="experience" className="section-wrapper" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag">
            <Briefcase style={{ width: "12px", height: "12px" }} />
            <span>Trajectory & Milestones</span>
          </div>
          <h2 className="section-title">Career Experience & Academic Foundation</h2>
          <p className="section-subtitle" style={{ margin: "10px auto 0 auto" }}>
            A rigorous trajectory blending self-directed freelance delivery, enterprise brand collaborations, and top-tier computer science scholarship.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: "start" }}>
          
          {/* Left Column: Professional Career Timeline */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(59, 130, 246, 0.15)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  color: "var(--primary-hover)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Briefcase style={{ width: "20px", height: "20px" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-dark)" }}>
                  Professional Engagements
                </h3>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                  Freelance engineering & client consulting
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="clean-card"
                  style={{
                    borderLeft: `4px solid ${exp.accent}`,
                    position: "relative"
                  }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "8px" }}>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-dark)", letterSpacing: "-0.01em" }}>
                        {exp.role}
                      </h4>
                      <div style={{ fontSize: "0.85rem", color: exp.accent, fontWeight: 600, display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                        <Building style={{ width: "13px", height: "13px" }} />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        color: exp.accent,
                        background: `${exp.accent}15`,
                        padding: "3px 10px",
                        borderRadius: "var(--radius-full)",
                        border: `1px solid ${exp.accent}30`
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: "1.6", marginBottom: "16px" }}>
                    {exp.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                    {exp.impact.map((point, pIdx) => (
                      <div key={pIdx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.84rem", color: "var(--text-body)", lineHeight: "1.5" }}>
                        <CheckCircle2 style={{ width: "15px", height: "15px", color: "var(--accent-emerald)", flexShrink: 0, marginTop: "2px" }} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "12px", borderTop: "1px solid var(--border-light)" }}>
                    {exp.technologies.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Academic Foundation */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(139, 92, 246, 0.15)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  color: "var(--accent-purple)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <GraduationCap style={{ width: "20px", height: "20px" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-dark)" }}>
                  Academic Background
                </h3>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                  Air University & analytical scholarship
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              
              {/* Air University BS CS */}
              <div className="clean-card" style={{ borderLeft: "4px solid var(--accent-purple)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "6px" }}>
                  <div>
                    <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-dark)" }}>
                      Bachelor of Science in Computer Science
                    </h4>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--accent-purple)", marginTop: "2px" }}>
                      Air University – Islamabad, Pakistan
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      color: "var(--accent-purple)",
                      background: "rgba(139, 92, 246, 0.15)",
                      padding: "3px 10px",
                      borderRadius: "var(--radius-full)",
                      border: "1px solid rgba(139, 92, 246, 0.3)"
                    }}
                  >
                    Jul 2023 — Present
                  </span>
                </div>

                <p style={{ fontSize: "0.875rem", color: "var(--text-body)", lineHeight: "1.65", marginBottom: "14px" }}>
                  Pursuing comprehensive computer science scholarship with rigorous theoretical and applied curriculum. Special focus on distributed systems, modern algorithms, operating systems, and computer vision.
                </p>

                <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "12px 14px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-light)", marginBottom: "14px" }}>
                  <div style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "6px" }}>
                    CORE COURSEWORK COMPLETED:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {[
                      "Data Structures & Algorithms",
                      "Object-Oriented Programming (C# / C++)",
                      "Database Systems (SQL & ACID)",
                      "Operating Systems & Sockets",
                      "Software Engineering Architecture",
                      "Artificial Intelligence & ML",
                      "Computer Networks & Protocols"
                    ].map((course) => (
                      <span key={course} className="tech-pill">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  <Award style={{ width: "14px", height: "14px", color: "var(--accent-purple)" }} />
                  <span>Actively representing Air University in national competitions (Fast PitchFest Winner)</span>
                </div>
              </div>

              {/* Punjab College of Science */}
              <div className="clean-card" style={{ borderLeft: "4px solid var(--border-hover)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "6px" }}>
                  <div>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-dark)" }}>
                      Intermediate in Pre-Engineering (FSc)
                    </h4>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "2px" }}>
                      Punjab College of Science – Islamabad
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      background: "rgba(255, 255, 255, 0.05)",
                      padding: "3px 10px",
                      borderRadius: "var(--radius-full)",
                      border: "1px solid var(--border-light)"
                    }}
                  >
                    Jul 2021 — Jun 2023
                  </span>
                </div>

                <p style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: "1.6" }}>
                  Developed strong mathematical, logical, and analytical foundations across Advanced Calculus, Linear Physics, and Analytic Geometry.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

