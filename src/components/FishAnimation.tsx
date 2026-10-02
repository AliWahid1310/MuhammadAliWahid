"use client";

import React, { useEffect, useRef } from "react";

interface Fish {
  x: number;
  y: number;
  angle: number;
  speed: number;
  length: number;
  width: number;
  tailAngle: number;
  tailSpeed: number;
  finPhase: number;
  targetY: number;
  color: string;
  opacity: number;
}

export default function FishAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Create 7 elegant monochrome fishes (koi-inspired silhouettes)
    const fishes: Fish[] = Array.from({ length: 7 }, (_, i) => {
      const isUpward = i % 2 === 0;
      return {
        x: (width / 8) * (i + 1) + (Math.random() * 40 - 20),
        y: isUpward ? height + Math.random() * 100 : -Math.random() * 100,
        angle: isUpward ? -Math.PI / 2 + (Math.random() * 0.4 - 0.2) : Math.PI / 2 + (Math.random() * 0.4 - 0.2),
        speed: 1.2 + Math.random() * 1.4,
        length: 50 + Math.random() * 30,
        width: 14 + Math.random() * 6,
        tailAngle: 0,
        tailSpeed: 0.08 + Math.random() * 0.04,
        finPhase: Math.random() * Math.PI * 2,
        targetY: isUpward ? -100 : height + 100,
        color: i % 3 === 0 ? "#111111" : i % 3 === 1 ? "#27272a" : "#52525b",
        opacity: 0.75 + Math.random() * 0.25
      };
    });

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      fishes.forEach((fish) => {
        // Body tail oscillation
        fish.tailAngle = Math.sin(time * 5 + fish.finPhase) * 0.35;

        // Move fish along angle
        fish.x += Math.cos(fish.angle) * fish.speed;
        fish.y += Math.sin(fish.angle) * fish.speed;

        // Subtle gentle steering up and down
        fish.angle += Math.sin(time + fish.finPhase) * 0.015;

        // Reset if reached edges
        if (fish.y < -120) {
          fish.y = height + 80;
          fish.x = Math.random() * width;
          fish.angle = -Math.PI / 2 + (Math.random() * 0.4 - 0.2);
        } else if (fish.y > height + 120) {
          fish.y = -80;
          fish.x = Math.random() * width;
          fish.angle = Math.PI / 2 + (Math.random() * 0.4 - 0.2);
        }

        // Draw Fish
        ctx.save();
        ctx.translate(fish.x, fish.y);
        ctx.rotate(fish.angle + Math.PI / 2); // align with swimming direction
        ctx.globalAlpha = fish.opacity;

        // Soft ink shadow
        ctx.shadowColor = "rgba(0, 0, 0, 0.15)";
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 4;

        // 1. Pectoral Fins (Fluttering left and right)
        const finAngle = Math.sin(time * 4 + fish.finPhase) * 0.25;

        // Left Fin
        ctx.save();
        ctx.translate(-fish.width * 0.5, fish.length * 0.2);
        ctx.rotate(-0.5 + finAngle);
        ctx.fillStyle = fish.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, fish.length * 0.28, fish.width * 0.35, -Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Right Fin
        ctx.save();
        ctx.translate(fish.width * 0.5, fish.length * 0.2);
        ctx.rotate(0.5 - finAngle);
        ctx.fillStyle = fish.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, fish.length * 0.28, fish.width * 0.35, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 2. Main Streamlined Body (Koi fish shape)
        ctx.fillStyle = fish.color;
        ctx.beginPath();
        // Nose tip
        ctx.moveTo(0, -fish.length * 0.5);
        // Right flank
        ctx.bezierCurveTo(
          fish.width * 0.8, -fish.length * 0.2,
          fish.width * 0.8, fish.length * 0.3,
          0, fish.length * 0.5
        );
        // Left flank
        ctx.bezierCurveTo(
          -fish.width * 0.8, fish.length * 0.3,
          -fish.width * 0.8, -fish.length * 0.2,
          0, -fish.length * 0.5
        );
        ctx.fill();

        // Ink wash dorsal accent (subtle white highlight or dark ring)
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
        ctx.beginPath();
        ctx.ellipse(0, -fish.length * 0.1, fish.width * 0.3, fish.length * 0.22, 0, 0, Math.PI * 2);
        ctx.fill();

        // 3. Tail Fin (animated wave)
        ctx.save();
        ctx.translate(0, fish.length * 0.5);
        ctx.rotate(fish.tailAngle);

        // Caudal peduncle joint
        ctx.fillStyle = fish.color;
        ctx.beginPath();
        ctx.ellipse(0, 4, fish.width * 0.25, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Tail Fan (Flowing dual koi fin)
        ctx.fillStyle = fish.color;
        ctx.beginPath();
        ctx.moveTo(0, 6);
        ctx.quadraticCurveTo(-fish.width * 0.7, 18, -fish.width * 0.9, 32);
        ctx.quadraticCurveTo(0, 24, 0, 16);
        ctx.quadraticCurveTo(0, 24, fish.width * 0.9, 32);
        ctx.quadraticCurveTo(fish.width * 0.7, 18, 0, 6);
        ctx.fill();

        ctx.restore();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1
      }}
    />
  );
}
