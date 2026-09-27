import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Muhammad Ali Wahid | Full-Stack Web Developer & AI/ML Engineer",
  description:
    "Official portfolio of Muhammad Ali Wahid — Computer Science student at Air University Islamabad, Full-Stack Developer (React, Next.js, TypeScript, C#/.NET, NestJS) and AI/ML Engineer (Python, YOLOv8, OpenCV).",
  keywords: [
    "Muhammad Ali Wahid",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "C# .NET",
    "NestJS",
    "FastAPI",
    "Air University",
    "Islamabad",
    "Python"
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
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
