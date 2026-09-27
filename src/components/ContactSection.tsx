"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Mail,
  Copy,
  Check,
  Send,
  Calendar,
  Globe2,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    engagementType: "Advisory / Fractional CTO",
    budget: "$25k - $50k",
    message: ""
  });

  const emailAddress = "aliwahid1310@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // ignore
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-3">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>INITIATE ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Consult or Retain Muhammad Ali Wahid.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Available for Principal Systems Architecture, AI/ML Platform Advisory, High-Concurrency Scale Audits, and Fractional Leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Coordinates & Status */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="glass-card p-6 sm:p-8 bg-white border border-slate-200 shadow-md">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="pulse-dot" />
                <span className="text-xs font-mono font-bold text-slate-900 uppercase">
                  Advisory Availability: Q4 2026 / 2027
                </span>
              </div>

              <div className="mt-6 space-y-5">
                
                {/* Direct Email with 1-click copy */}
                <div>
                  <label className="text-xs font-mono uppercase text-slate-400 font-bold block mb-1.5">
                    Direct Email
                  </label>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-mono text-sm text-slate-900 font-semibold truncate mr-2">
                      {emailAddress}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors shrink-0 flex items-center gap-1.5 text-xs font-bold"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Location & Timezone */}
                <div>
                  <label className="text-xs font-mono uppercase text-slate-400 font-bold block mb-1.5">
                    Global Deployment & Relocation
                  </label>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Globe2 className="w-4 h-4 text-blue-600" />
                      <span>Remote First • Available for On-Site Global Summits</span>
                    </div>
                    <div className="text-slate-500 font-mono text-[11px]">
                      Timezone Agnostic (US Eastern / UK / Asia Pacific overlap)
                    </div>
                  </div>
                </div>

                {/* Code & Professional Links */}
                <div>
                  <label className="text-xs font-mono uppercase text-slate-400 font-bold block mb-1.5">
                    Verified Digital Footprint
                  </label>
                  <div className="flex gap-2.5">
                    <a
                      href="https://github.com/AliWahid1310"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 text-xs font-bold text-slate-800"
                      style={{ textDecoration: "none" }}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="mailto:aliwahid1310@gmail.com"
                      className="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 text-xs font-bold text-slate-800"
                      style={{ textDecoration: "none" }}
                    >
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>Direct Mail</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Confidentiality & Security guarantee */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 text-xs text-slate-600">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Strict Confidentiality:</strong> All architectural discussions, proprietary data structures, and algorithmic audits are conducted under standard mutual NDA upon request.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 bg-white border border-slate-200 shadow-xl">
              
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Consultation Request Dispatched</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you. Muhammad Ali Wahid receives high-priority direct alerts for executive inquiries and will review your technical specifications within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        engagementType: "Advisory / Fractional CTO",
                        budget: "$25k - $50k",
                        message: ""
                      });
                    }}
                    className="btn-secondary text-xs mt-4"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-3 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900">Executive Engagement Brief</h3>
                    <p className="text-xs text-slate-500">
                      Submit your project scope, scaling challenge, or advisory requirement.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase font-bold text-slate-500 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase font-bold text-slate-500 block mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. s.jenkins@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase font-bold text-slate-500 block mb-1">
                        Nature of Engagement
                      </label>
                      <select
                        value={formData.engagementType}
                        onChange={(e) => setFormData({ ...formData, engagementType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-blue-600"
                      >
                        <option>Principal Architecture & Scale Audit</option>
                        <option>Generative AI & LLM Systems Design</option>
                        <option>Fractional CTO / Systems Fellow</option>
                        <option>Full-Stack Enterprise Overhaul</option>
                        <option>Technical Keynote / Executive Briefing</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase font-bold text-slate-500 block mb-1">
                        Anticipated Scope
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-blue-600"
                      >
                        <option>$10k - $25k (Targeted Audit)</option>
                        <option>$25k - $50k (System Blueprint)</option>
                        <option>$50k - $100k+ (Comprehensive Architecture)</option>
                        <option>Equity / Advisory Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase font-bold text-slate-500 block mb-1">
                      System Requirements & Architectural Challenge *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline current tech stack, traffic scale, throughput goals, or AI integration objectives..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 mt-2"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Telemetry...</span>
                    ) : (
                      <>
                        <span>Submit Executive Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
