"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone, Menu, X, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Awards & Certs", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="header-nav">
      <div className="container nav-wrapper">
        {/* Brand */}
        <a href="#about" className="brand-logo">
          <div className="brand-badge">MAW</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.01em" }}>
              Muhammad Ali Wahid
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Cpu style={{ width: "12px", height: "12px", color: "var(--primary)" }} />
              Full Stack & AI/ML Engineer
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.label} className="nav-link-item">
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Action / Socials */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href="https://github.com/AliWahid1310"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ padding: "8px 12px" }}
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-ali-wahid-02444736a"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ padding: "8px 12px" }}
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="btn-solid"
            style={{ padding: "8px 16px", fontSize: "0.8125rem" }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight style={{ width: "14px", height: "14px" }} />
          </a>
        </div>
      </div>
    </header>
  );
}
