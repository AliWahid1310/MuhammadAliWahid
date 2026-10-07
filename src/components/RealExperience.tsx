"use client";

import React from "react";
import {
  Briefcase,
  CheckCircle2,
  Building,
} from "lucide-react";

export default function RealExperience() {
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
          <h2 className="section-title">Work & Professional Experience</h2>
          <p className="section-subtitle" style={{ margin: "10px auto 0 auto" }}>
            Commercial freelance engineering, client consulting, and high-impact enterprise collaborations.
          </p>
        </div>

        {/* Experience Cards */}
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "24px"
          }}
        >
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="clean-card"
              style={{
                borderLeft: `4px solid ${exp.accent}`,
                position: "relative"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: "12px"
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--text-dark)",
                      letterSpacing: "-0.01em",
                      margin: 0
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: exp.accent,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "4px"
                    }}
                  >
                    <Building style={{ width: "14px", height: "14px" }} />
                    <span>{exp.company}</span>
                    <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>•</span>
                    <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "0.8rem" }}>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    color: exp.accent,
                    background: `${exp.accent}15`,
                    padding: "4px 12px",
                    borderRadius: "var(--radius-full)",
                    border: `1px solid ${exp.accent}30`
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-body)",
                  lineHeight: "1.6",
                  marginBottom: "16px"
                }}
              >
                {exp.summary}
              </p>

              {/* Bullet Highlights */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "18px"
                }}
              >
                {exp.impact.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.85rem",
                      color: "var(--text-body)",
                      lineHeight: "1.5"
                    }}
                  >
                    <CheckCircle2
                      style={{
                        width: "16px",
                        height: "16px",
                        color: "var(--accent-emerald)",
                        flexShrink: 0,
                        marginTop: "2px"
                      }}
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack chips */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  paddingTop: "14px",
                  borderTop: "1px solid var(--border-light)"
                }}
              >
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
    </section>
  );
}

