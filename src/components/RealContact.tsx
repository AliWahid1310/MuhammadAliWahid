"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  MapPin,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function RealContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack Web / AI Opportunity",
    message: ""
  });

  const email = "aliwahid8@hotmail.com";
  const phone = "0325-5611627";

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
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: "#ffffff" }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="section-tag">
            <Mail style={{ width: "12px", height: "12px" }} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">Get in Touch with Muhammad Ali</h2>
          <p className="section-subtitle" style={{ margin: "10px auto 0 auto" }}>
            Available for full-time opportunities, high-impact freelance projects, and tech collaborations in Full-Stack Web Development and Applied AI.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: "start" }}>
          
          {/* Left Column: Direct Coordinates */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            
            {/* Email Card */}
            <div className="clean-card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                  Primary Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="btn-outline"
                  style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                >
                  {copiedEmail ? <Check style={{ width: "12px", height: "12px", color: "var(--accent-emerald)" }} /> : <Copy style={{ width: "12px", height: "12px" }} />}
                  <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                </button>
              </div>
              <a
                href={`mailto:${email}`}
                style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Mail style={{ width: "18px", height: "18px" }} />
                <span>{email}</span>
              </a>
            </div>

            {/* Phone Card */}
            <div className="clean-card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                  Direct Phone / WhatsApp
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="btn-outline"
                  style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                >
                  {copiedPhone ? <Check style={{ width: "12px", height: "12px", color: "var(--accent-emerald)" }} /> : <Copy style={{ width: "12px", height: "12px" }} />}
                  <span>{copiedPhone ? "Copied!" : "Copy Number"}</span>
                </button>
              </div>
              <a
                href={`tel:${phone}`}
                style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent-emerald)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Phone style={{ width: "18px", height: "18px" }} />
                <span>{phone}</span>
              </a>
            </div>

            {/* Profiles & Location */}
            <div className="clean-card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--text-body)" }}>
                <MapPin style={{ width: "16px", height: "16px", color: "var(--primary)" }} />
                <span>Islamabad, Pakistan • Open for Remote Global Work</span>
              </div>

              <div style={{ display: "flex", gap: "12px", paddingTop: "8px", borderTop: "1px solid var(--border-light)" }}>
                <a
                  href="https://linkedin.com/in/muhammad-ali-wahid-02444736a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1, padding: "10px", fontSize: "0.85rem" }}
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/AliWahid1310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1, padding: "10px", fontSize: "0.85rem" }}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="clean-card" style={{ padding: "28px" }}>
            
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#ecfdf5", color: "var(--accent-emerald)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
                  <Check style={{ width: "24px", height: "24px" }} />
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "8px" }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                  Thank you for reaching out. Muhammad Ali Wahid has received your message and will reply promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "Full-Stack Web / AI Opportunity", message: "" });
                  }}
                  className="btn-outline"
                  style={{ fontSize: "0.85rem" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "4px" }}>
                    Send Direct Message
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    Inquire about job opportunities, freelance projects, or technical consulting.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", marginBottom: "6px" }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", marginBottom: "6px" }}>
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", marginBottom: "6px" }}>
                    PURPOSE / SUBJECT
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="input-field"
                  >
                    <option>Full-Stack Web Development Opportunity</option>
                    <option>AI / Machine Learning Project</option>
                    <option>Freelance E-Commerce / Shopify Development</option>
                    <option>General Tech Collaboration / Networking</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", marginBottom: "6px" }}>
                    MESSAGE DETAILS *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, role specifications, or inquiry..."
                    className="input-field"
                    style={{ resize: "none" }}
                  />
                </div>

                <button type="submit" className="btn-solid" style={{ padding: "12px 24px", width: "100%", justifyContent: "center" }}>
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
