"use client";

import React from "react";
import { Handshake } from "lucide-react";

interface BrandItem {
  name: string;
  category: string;
  logoSvg: React.ReactNode;
}

const brandList: BrandItem[] = [
  {
    name: "Canva",
    category: "Design & Technology",
    logoSvg: (
      <svg viewBox="0 0 140 40" height="32" fill="currentColor">
        {/* Canva custom typography & dynamic swoop */}
        <text
          x="12"
          y="28"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="24"
          fontStyle="italic"
          letterSpacing="-0.04em"
        >
          Canva
        </text>
        <circle cx="118" cy="20" r="5" fill="currentColor" opacity="0.8" />
        <path
          d="M 10 32 Q 55 37 122 26"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    name: "Nestlé",
    category: "Consumer Goods & Nutrition",
    logoSvg: (
      <svg viewBox="0 0 140 40" height="32" fill="currentColor">
        {/* Nest with bird and chicks emblem */}
        <g transform="translate(6, 6) scale(0.65)">
          {/* Bird perched on nest */}
          <path
            d="M 12 18 C 12 12, 18 8, 24 8 C 28 8, 32 10, 34 14 C 36 12, 38 12, 40 14 C 42 16, 40 20, 36 22 L 32 24 C 28 26, 20 26, 14 22 Z"
            fill="currentColor"
          />
          {/* Beak & eye */}
          <circle cx="21" cy="11" r="1.5" fill="var(--bg-primary, #fff)" />
          {/* Twigs / Nest */}
          <path
            d="M 4 28 Q 24 38 44 28 Q 38 34 24 35 Q 10 34 4 28 Z"
            fill="currentColor"
          />
          <path
            d="M 2 24 C 10 32, 38 32, 46 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </g>
        {/* Nestlé wordmark with extended N bar */}
        <text
          x="44"
          y="26"
          fontFamily="'Georgia', serif"
          fontWeight="bold"
          fontSize="19"
          letterSpacing="0.02em"
        >
          Nestlé
        </text>
        <line
          x1="44"
          y1="11"
          x2="114"
          y2="11"
          stroke="currentColor"
          strokeWidth="2.2"
        />
      </svg>
    ),
  },
  {
    name: "Millennium Campus Network (MCN)",
    category: "Global Youth Leadership",
    logoSvg: (
      <svg viewBox="0 0 170 40" height="32" fill="currentColor">
        {/* Academic / Global crest */}
        <g transform="translate(4, 5) scale(0.75)">
          <polygon
            points="20,2 38,12 38,32 20,42 2,32 2,12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <circle cx="20" cy="22" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <line x1="20" y1="2" x2="20" y2="42" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          <line x1="2" y1="22" x2="38" y2="22" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        </g>
        {/* MCN text */}
        <text
          x="42"
          y="22"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="17"
          letterSpacing="0.08em"
        >
          MCN
        </text>
        <text
          x="42"
          y="32"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="8"
          letterSpacing="0.06em"
          opacity="0.75"
        >
          MILLENNIUM CAMPUS NETWORK
        </text>
      </svg>
    ),
  },
  {
    name: "United Nations Academic Impact (UNAI)",
    category: "Global Academic Initiative",
    logoSvg: (
      <svg viewBox="0 0 160 40" height="32" fill="currentColor">
        {/* Laurel wreath surrounding globe */}
        <g transform="translate(6, 4) scale(0.8)">
          {/* Outer laurel left */}
          <path
            d="M 6 34 C 2 24, 4 14, 12 6 C 14 10, 14 16, 12 24 C 10 30, 8 33, 6 34 Z"
            fill="currentColor"
            opacity="0.7"
          />
          {/* Outer laurel right */}
          <path
            d="M 34 34 C 38 24, 36 14, 28 6 C 26 10, 26 16, 28 24 C 30 30, 32 33, 34 34 Z"
            fill="currentColor"
            opacity="0.7"
          />
          {/* UN Globe */}
          <circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <ellipse cx="20" cy="20" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <line x1="9" y1="20" x2="31" y2="20" stroke="currentColor" strokeWidth="1.2" />
        </g>
        <text
          x="42"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="16"
          letterSpacing="0.06em"
        >
          UNAI
        </text>
        <text
          x="42"
          y="32"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="7.5"
          letterSpacing="0.04em"
          opacity="0.75"
        >
          UNITED NATIONS ACADEMIC IMPACT
        </text>
      </svg>
    ),
  },
  {
    name: "Huawei",
    category: "Telecommunications & Cloud",
    logoSvg: (
      <svg viewBox="0 0 140 40" height="32" fill="currentColor">
        {/* Huawei 8 radiant petals */}
        <g transform="translate(18, 16) scale(0.8)">
          {/* Petal fan */}
          <path d="M 0 -2 C 2 -10, 6 -15, 0 -22 C -6 -15, -2 -10, 0 -2 Z" fill="currentColor" />
          <path d="M 4 -1 C 10 -7, 15 -10, 14 -18 C 8 -13, 4 -7, 4 -1 Z" fill="currentColor" />
          <path d="M -4 -1 C -10 -7, -15 -10, -14 -18 C -8 -13, -4 -7, -4 -1 Z" fill="currentColor" />
          <path d="M 7 1 C 14 -3, 20 -4, 23 -11 C 16 -8, 11 -3, 7 1 Z" fill="currentColor" />
          <path d="M -7 1 C -14 -3, -20 -4, -23 -11 C -16 -8, -11 -3, -7 1 Z" fill="currentColor" />
          <path d="M 9 4 C 16 2, 22 3, 27 -2 C 21 -1, 15 2, 9 4 Z" fill="currentColor" />
          <path d="M -9 4 C -16 2, -22 3, -27 -2 C -21 -1, -15 2, -9 4 Z" fill="currentColor" />
          <path d="M 10 8 C 17 8, 23 10, 27 6 C 22 5, 16 6, 10 8 Z" fill="currentColor" />
          <path d="M -10 8 C -17 8, -23 10, -27 6 C -22 5, -16 6, -10 8 Z" fill="currentColor" />
        </g>
        <text
          x="46"
          y="26"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="18"
          letterSpacing="0.16em"
        >
          HUAWEI
        </text>
      </svg>
    ),
  },
  {
    name: "Shaukat Khanum",
    category: "Healthcare & Cancer Hospital",
    logoSvg: (
      <svg viewBox="0 0 165 40" height="32" fill="currentColor">
        {/* Crescent of Hope & Healing Flower */}
        <g transform="translate(6, 6) scale(0.7)">
          <path
            d="M 18 2 C 8 2, 0 10, 0 20 C 0 30, 8 38, 18 38 C 12 34, 8 28, 8 20 C 8 12, 12 6, 18 2 Z"
            fill="currentColor"
          />
          {/* Flower / ribbon inside crescent */}
          <circle cx="21" cy="14" r="3.5" fill="currentColor" />
          <circle cx="27" cy="19" r="3.5" fill="currentColor" />
          <circle cx="21" cy="24" r="3.5" fill="currentColor" />
          <circle cx="15" cy="19" r="3.5" fill="currentColor" />
          <circle cx="21" cy="19" r="2" fill="var(--bg-primary, #fff)" />
        </g>
        <text
          x="38"
          y="20"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="14.5"
          letterSpacing="0.04em"
        >
          Shaukat Khanum
        </text>
        <text
          x="38"
          y="31"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="500"
          fontSize="7.5"
          letterSpacing="0.05em"
          opacity="0.7"
        >
          MEMORIAL CANCER HOSPITAL
        </text>
      </svg>
    ),
  },
  {
    name: "ASAP Tickets",
    category: "Aviation & Travel Tech",
    logoSvg: (
      <svg viewBox="0 0 155 40" height="32" fill="currentColor">
        {/* Plane & supersonic curve */}
        <g transform="translate(4, 8) scale(0.65)">
          <path
            d="M 2 26 Q 16 10 38 6 L 36 2 L 44 4 L 46 12 L 42 10 Q 24 16 12 32 Z"
            fill="currentColor"
          />
          <polygon points="28,10 38,4 35,14" fill="currentColor" />
          <circle cx="44" cy="4" r="2.5" fill="currentColor" opacity="0.8" />
        </g>
        <text
          x="38"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="16"
          letterSpacing="0.06em"
        >
          ASAP
        </text>
        <text
          x="88"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="400"
          fontSize="15"
          letterSpacing="0.1em"
        >
          TICKETS
        </text>
        <text
          x="38"
          y="31"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="500"
          fontSize="7.5"
          letterSpacing="0.08em"
          opacity="0.65"
        >
          GLOBAL TRAVEL SOLUTIONS
        </text>
      </svg>
    ),
  },
];

export default function BrandMarquee() {
  // Duplicate list multiple times for seamless, non-stop loop
  const duplicatedBrands = [...brandList, ...brandList];

  return (
    <section
      id="collaborations"
      style={{
        padding: "72px 0 64px",
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ marginBottom: "36px" }}>
        <div style={{ textAlign: "center" }}>
          <div
            className="section-tag"
            style={{
              justifyContent: "center",
              margin: "0 auto 12px",
              display: "inline-flex",
            }}
          >
            <Handshake style={{ width: "13px", height: "13px" }} />
            <span>Industry Collaborations</span>
          </div>

          <h2
            className="section-title"
            style={{
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            I&apos;ve Worked With Industry Leaders
          </h2>

          <p
            className="section-subtitle"
            style={{
              textAlign: "center",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Delivering engineering, design, and impact solutions for global
            organizations and leading institutions.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper with soft edge vignettes */}
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          padding: "16px 0",
        }}
      >
        {/* Left Vignette Fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "140px",
            background:
              "linear-gradient(to right, var(--bg-primary) 20%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        {/* Right Vignette Fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "140px",
            background:
              "linear-gradient(to left, var(--bg-primary) 20%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        {/* Animated Marquee Track */}
        <div
          className="marquee-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
            width: "max-content",
          }}
        >
          {duplicatedBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="marquee-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexShrink: 0,
                padding: "16px 28px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-light)",
                background: "var(--bg-card)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "default",
                userSelect: "none",
              }}
            >
              <div
                className="marquee-logo"
                style={{
                  color: "var(--text-secondary)",
                  opacity: 0.85,
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.25s ease, opacity 0.25s ease, transform 0.25s ease",
                }}
              >
                {brand.logoSvg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
