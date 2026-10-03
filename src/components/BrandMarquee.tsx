"use client";

import React from "react";
import { Handshake } from "lucide-react";

interface BrandItem {
  name: string;
  category: string;
  src: string;
  height: number;
  width?: number;
}

const brandList: BrandItem[] = [
  {
    name: "Canva",
    category: "Design Platform",
    src: "/logos/canva.svg",
    height: 38,
    width: 110,
  },
  {
    name: "Nestlé",
    category: "Nutrition & Food",
    src: "/logos/nestle.svg",
    height: 38,
    width: 140,
  },
  {
    name: "Millennium Campus Network",
    category: "Global Leadership",
    src: "/logos/mcn.png",
    height: 52,
    width: 200,
  },
  {
    name: "United Nations Academic Impact",
    category: "UN Initiative",
    src: "/logos/unai.svg",
    height: 54,
    width: 220,
  },
  {
    name: "Huawei",
    category: "Technology & Cloud",
    src: "/logos/huawei.svg",
    height: 34,
    width: 185,
  },
  {
    name: "Shaukat Khanum",
    category: "Memorial Cancer Hospital",
    src: "/logos/shaukat-khanum.png",
    height: 42,
    width: 190,
  },
  {
    name: "ASAP Tickets",
    category: "Travel & Aviation",
    src: "/logos/asap-tickets.svg",
    height: 36,
    width: 175,
  },
];

export default function BrandMarquee() {
  // Duplicate list twice for seamless, non-stop horizontal marquee
  const marqueeItems = [...brandList, ...brandList, ...brandList];

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
            <span>Collaborations &amp; Impact</span>
          </div>

          <h2
            className="section-title"
            style={{
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            Companies &amp; Organizations I&apos;ve Worked With
          </h2>

          <p
            className="section-subtitle"
            style={{
              textAlign: "center",
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            Proud to have collaborated with leading global enterprises,
            organizations, and institutions.
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
              "linear-gradient(to right, var(--bg-primary) 30%, transparent 100%)",
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
              "linear-gradient(to left, var(--bg-primary) 30%, transparent 100%)",
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
            gap: "28px",
            width: "max-content",
          }}
        >
          {marqueeItems.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="marquee-item"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                height: "80px",
                padding: "0 28px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-light)",
                background: "var(--bg-card)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
                userSelect: "none",
              }}
              title={brand.name}
            >
              <img
                src={brand.src}
                alt={`${brand.name} official logo`}
                className="brand-actual-logo"
                style={{
                  height: `${brand.height}px`,
                  width: brand.width ? `${brand.width}px` : "auto",
                  maxWidth: "230px",
                  maxHeight: "56px",
                  objectFit: "contain",
                  display: "block",
                  transition: "transform 0.25s ease, filter 0.25s ease, opacity 0.25s ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
