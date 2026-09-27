"use client";

import React, { useState, useEffect } from "react";
import { Terminal, ShieldCheck, Mail, Menu, X, ArrowUpRight, Cpu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Live clock
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "30Y Timeline", href: "#timeline" },
    { label: "Domains", href: "#domains" },
    { label: "AI Latency Lab", href: "#ai-lab" },
    { label: "Architecture", href: "#projects" },
    { label: "Mastery Matrix", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-header py-3 shadow-sm"
          : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#hero"
            className="flex items-center gap-3 group text-decoration-none"
            style={{ textDecoration: "none" }}
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold font-mono text-base shadow-md group-hover:bg-blue-600 transition-colors">
              MAW
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 tracking-tight text-base group-hover:text-blue-600 transition-colors">
                Muhammad Ali Wahid
              </span>
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-blue-600" />
                Principal AI & Systems Architect
              </span>
            </div>
          </a>

          {/* Center Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all duration-150"
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Status & Action */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Clock / Status */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-mono text-slate-600">
              <div className="pulse-dot" />
              <span>SYSTEM ACTIVE</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-700 font-semibold">{time || "23:59:00"} UTC</span>
            </div>

            <a
              href="#contact"
              className="btn-primary py-2 px-4 text-xs font-semibold rounded-lg flex items-center gap-2"
              style={{ textDecoration: "none" }}
            >
              <span>Consult / Engage</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-mono mb-2">
              <span className="pulse-dot" />
              <span>30+ Years Experience • Open for Advisory</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary mt-3 text-center py-2.5 text-sm"
              style={{ textDecoration: "none" }}
            >
              Consult / Hire
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
