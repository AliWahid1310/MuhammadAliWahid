"use client";

import React from "react";
import { ArrowUp, Mail, Phone, MapPin, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-light)", padding: "48px 0 32px 0" }}>
      <div className="container">
        
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px", paddingBottom: "32px", borderBottom: "1px solid var(--border-light)" }}>
          
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div className="brand-badge">MAW</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--text-dark)" }}>
                  Muhammad Ali Wahid
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  BS Computer Science • Air University Islamabad
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="https://github.com/AliWahid1310"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "8px 14px", fontSize: "0.8rem" }}
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/muhammad-ali-wahid-02444736a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "8px 14px", fontSize: "0.8rem" }}
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              className="btn-solid"
              style={{ padding: "8px 14px", fontSize: "0.8rem" }}
            >
              <span>Back to Top</span>
              <ArrowUp style={{ width: "14px", height: "14px" }} />
            </button>
          </div>

        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", paddingTop: "24px", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          <div>
            © {new Date().getFullYear()} Muhammad Ali Wahid. All rights reserved.
          </div>
          <div>
            Built with Next.js, TypeScript, and clean modern architecture.
          </div>
        </div>

      </div>
    </footer>
  );
}
