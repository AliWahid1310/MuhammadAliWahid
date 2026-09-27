import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Muhammad Ali Wahid | Principal Full-Stack & AI/ML Systems Architect",
  description:
    "Executive portfolio of Muhammad Ali Wahid — 30+ Years Architecting Enterprise Distributed Systems, Generative AI Platforms, Neural Workflows, and Cloud Infrastructure.",
  keywords: [
    "Muhammad Ali Wahid",
    "Principal Architect",
    "AI/ML Engineer",
    "Distributed Systems",
    "Full-Stack Architect",
    "Next.js",
    "Machine Learning",
    "Cloud Architecture",
    "30+ Years Experience"
  ],
  authors: [{ name: "Muhammad Ali Wahid" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
