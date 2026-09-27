"use client";

import React from "react";
import { Cpu, Terminal, ArrowUp, Mail, Shield, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold font-mono text-sm">
              MAW
            </div>
            <div>
              <div className="font-extrabold text-slate-900 tracking-tight text-base">
                Muhammad Ali Wahid
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Principal Full-Stack & AI Systems Architect • 30+ Years Experience
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="pulse-dot" />
              <span>NODES OPERATIONAL</span>
            </div>
            <span>•</span>
            <span>NEXT.js 15 & TS</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-900 hover:text-blue-600 font-bold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 1994 — 2026 Muhammad Ali Wahid. All system architectures, patents, and materials protected.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AliWahid1310"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href="mailto:aliwahid1310@gmail.com"
              className="hover:text-slate-900 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <span>•</span>
            <span className="text-slate-400">SOC2 & ISO27001 Compliant Protocols</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
