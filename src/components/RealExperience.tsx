"use client";

import React from "react";
import { Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin } from "lucide-react";

export default function RealExperience() {
  return (
    <section id="experience" className="section-wrapper" style={{ background: "#ffffff" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag">
            <Briefcase style={{ width: "12px", height: "12px" }} />
            <span>Career & Academic Journey</span>
          </div>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle" style={{ margin: "10px auto 0 auto" }}>
            Proven record of self-directed engineering, freelance client delivery, and computer science scholarship.
          </p>
        </div>

        <div className="grid-2">
          
          {/* Left Column: Professional Experience */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-md)", background: "#eff6ff", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Briefcase style={{ width: "20px", height: "20px" }} />
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-dark)" }}>
                Professional Experience
              </h3>
            </div>

            <div className="clean-card" style={{ borderLeft: "4px solid var(--primary)", marginBottom: "20px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-dark)" }}>
                  Freelance Web Developer & Digital Marketer
                </h4>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--primary)", background: "var(--primary-light)", padding: "2px 8px", borderRadius: "var(--radius-full)" }}>
                  Oct 2023 — Present
                </span>
              </div>

              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "16px", fontWeight: 500 }}>
                Self-Employed • Remote & Client Consultations
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "Working in a fast-paced, self-directed environment delivering end-to-end web solutions.",
                  "Developing responsive web apps using React, Vite, Next.js, and Tailwind CSS with integrated third-party services.",
                  "Building scalable, performance-focused frontend architectures with strong UX and modern design patterns.",
                  "Integrating Shopify storefronts and e-commerce solutions for retail clients with custom extensions.",
                  "Managing social media content and running targeted ad campaigns for commercial clients."
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "var(--text-body)" }}>
                    <CheckCircle2 style={{ width: "16px", height: "16px", color: "var(--accent-emerald)", flexShrink: 0, marginTop: "2px" }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Creative Collaborations */}
            <div className="clean-card">
              <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "6px" }}>
                CS Department & Corporate Collaborations
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: "1.6" }}>
                Designed posters, digital branding, and event collateral in collaboration with corporate tech leaders including <strong>Huawei</strong>, <strong>DPL</strong>, <strong>Devsinc</strong>, and <strong>Agile Pakistan</strong>.
              </p>
            </div>

          </div>

          {/* Right Column: Education */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-md)", background: "#f5f3ff", color: "var(--accent-purple)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GraduationCap style={{ width: "20px", height: "20px" }} />
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-dark)" }}>
                Academic Background
              </h3>
            </div>

            {/* University */}
            <div className="clean-card" style={{ borderLeft: "4px solid var(--accent-purple)", marginBottom: "20px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-dark)" }}>
                  Bachelor of Science in Computer Science
                </h4>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--accent-purple)", background: "var(--accent-purple-light)", padding: "2px 8px", borderRadius: "var(--radius-full)" }}>
                  Jul 2023 — Present
                </span>
              </div>

              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-dark)", marginBottom: "4px" }}>
                Air University – Islamabad
              </div>

              <p style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: "1.6" }}>
                Pursuing rigorous Computer Science degree with core coursework in Object-Oriented Programming (OOP), Data Structures & Algorithms, Database Systems (SQL), Operating Systems, Software Engineering, and Artificial Intelligence.
              </p>
            </div>

            {/* College */}
            <div className="clean-card" style={{ borderLeft: "4px solid var(--border-hover)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-dark)" }}>
                  Intermediate in Pre-Engineering
                </h4>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", background: "var(--bg-muted)", padding: "2px 8px", borderRadius: "var(--radius-full)" }}>
                  Jul 2021 — Jun 2023
                </span>
              </div>

              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "6px" }}>
                Punjab College of Science – Islamabad
              </div>

              <p style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: "1.6" }}>
                Solid analytical foundation in Advanced Mathematics, Physics, and analytical logic solving.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
