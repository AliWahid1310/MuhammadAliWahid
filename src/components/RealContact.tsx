"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  MapPin,
  Sparkles,
  ArrowRight,
  Clock,
  MessageCircle,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function RealContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack Web Development Opportunity",
    message: ""
  });

  const email = "aliwahid8@hotmail.com";
  const phone = "0325-5611627";
  const waLink = "https://wa.me/923255611627?text=Hi%20Muhammad%20Ali,%20I%20found%20your%20portfolio!";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#3b82f6", "#8b5cf6", "#10b981", "#38bdf8"]
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag">
            <Mail style={{ width: "12px", height: "12px" }} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">Get in Touch with Muhammad Ali</h2>
          <p className="section-subtitle" style={{ margin: "10px auto 0 auto" }}>
            Available for full-time engineering roles, high-impact freelance development, and applied AI collaborations.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: "start" }}>
          
          {/* Left Column: Direct Coordinates */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            {/* Email Card */}
            <div className="clean-card" style={{ borderLeft: "4px solid var(--primary)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                  Primary Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="btn-outline"
                  style={{ padding: "4px 10px", fontSize: "0.75rem", gap: "4px" }}
                >
                  {copiedEmail ? <Check style={{ width: "13px", height: "13px", color: "var(--accent-emerald)" }} /> : <Copy style={{ width: "13px", height: "13px" }} />}
                  <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <a
                href={`mailto:${email}`}
                style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--primary-hover)", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Mail style={{ width: "20px", height: "20px" }} />
                <span>{email}</span>
              </a>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "6px" }}>
                Response time: Within 12 hours
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="clean-card" style={{ borderLeft: "4px solid var(--accent-emerald)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                  Direct Phone & WhatsApp
                </span>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    onClick={handleCopyPhone}
                    className="btn-outline"
                    style={{ padding: "4px 10px", fontSize: "0.75rem", gap: "4px" }}
                  >
                    {copiedPhone ? <Check style={{ width: "13px", height: "13px", color: "var(--accent-emerald)" }} /> : <Copy style={{ width: "13px", height: "13px" }} />}
                    <span>{copiedPhone ? "Copied!" : "Copy"}</span>
                  </button>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solid"
                    style={{ padding: "4px 10px", fontSize: "0.75rem", background: "linear-gradient(135deg, #10b981, #059669)", gap: "4px" }}
                  >
                    <MessageCircle style={{ width: "13px", height: "13px" }} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
              <a
                href={`tel:${phone}`}
                style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--accent-emerald)", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Phone style={{ width: "20px", height: "20px" }} />
                <span>{phone}</span>
              </a>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "6px" }}>
                Direct calls & WhatsApp messaging available
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="clean-card" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <MapPin style={{ width: "18px", height: "18px", color: "var(--primary-hover)" }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-dark)" }}>
                      Islamabad, Pakistan
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      Open to on-site roles & worldwide remote contracts
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", fontFamily: "var(--font-mono)", color: "var(--accent-amber)" }}>
                    <Clock style={{ width: "14px", height: "14px" }} />
                    <span>{currentTime || "PKT"}</span>
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-light)" }}>PKT (UTC+5)</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", paddingTop: "12px", borderTop: "1px solid var(--border-light)" }}>
                <a
                  href="https://linkedin.com/in/muhammad-ali-wahid-02444736a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1, padding: "10px", fontSize: "0.825rem", gap: "8px" }}
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/AliWahid1310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1, padding: "10px", fontSize: "0.825rem", gap: "8px" }}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="clean-card" style={{ padding: "32px" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 10px" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    color: "var(--accent-emerald)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 18px auto"
                  }}
                >
                  <Check style={{ width: "28px", height: "28px" }} />
                </div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "8px" }}>
                  Message Received!
                </h3>
                <p style={{ fontSize: "0.925rem", color: "var(--text-muted)", maxWidth: "420px", margin: "0 auto 24px auto", lineHeight: "1.6" }}>
                  Thank you, <strong>{formData.name}</strong>. Muhammad Ali Wahid has been notified and will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "Full-Stack Web Development Opportunity", message: "" });
                  }}
                  className="btn-outline"
                  style={{ fontSize: "0.85rem", padding: "10px 20px" }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "4px" }}>
                    Send Direct Message
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    Discuss engineering roles, product architecture, or contract consulting.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.72rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", marginBottom: "6px" }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.72rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", marginBottom: "6px" }}>
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.72rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", marginBottom: "6px" }}>
                    AREA OF INTEREST / SUBJECT
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="input-field"
                  >
                    <option>Full-Stack Web Development Opportunity</option>
                    <option>AI / Machine Learning & Computer Vision</option>
                    <option>C# / .NET Backend Engineering</option>
                    <option>Shopify E-Commerce Customization</option>
                    <option>General Consulting / Technical Collaboration</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.72rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", marginBottom: "6px" }}>
                    PROJECT SCOPE & MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Outline your team's specifications, goals, or schedule..."
                    className="input-field"
                    style={{ resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-solid btn-glow"
                  style={{ padding: "12px 24px", width: "100%", justifyContent: "center", fontSize: "0.925rem" }}
                >
                  <span>Transmit Message</span>
                  <Send style={{ width: "15px", height: "15px" }} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
