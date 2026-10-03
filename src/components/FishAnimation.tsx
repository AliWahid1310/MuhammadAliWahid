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
  scalePhase: number;
  // Goldfish color variant: 0=orange, 1=red-white, 2=yellow, 3=deep-orange
  variant: number;
  opacity: number;
}

export default function FishAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctxRaw = canvas.getContext("2d");
    if (!ctxRaw) return;
    // Capture as non-null so TypeScript narrows correctly in nested functions
    const c: CanvasRenderingContext2D = ctxRaw;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Goldfish color palettes [body, belly, accent, fin]
    const variants = [
      // Classic orange goldfish
      { body: "#f97316", belly: "#fed7aa", accent: "#ea580c", fin: "rgba(251,146,60,0.7)" },
      // Red-white fancy goldfish
      { body: "#ef4444", belly: "#fecaca", accent: "#b91c1c", fin: "rgba(252,165,165,0.7)" },
      // Golden yellow goldfish
      { body: "#eab308", belly: "#fef08a", accent: "#ca8a04", fin: "rgba(253,224,71,0.7)" },
      // Deep orange-red goldfish
      { body: "#f97316", belly: "#ffedd5", accent: "#c2410c", fin: "rgba(253,186,116,0.7)" },
      // Calico red-orange
      { body: "#fb923c", belly: "#fff7ed", accent: "#ea580c", fin: "rgba(254,215,170,0.7)" },
    ];

    // 5 goldfish (reduced from 7)
    const fishes: Fish[] = Array.from({ length: 5 }, (_, i) => {
      const isUpward = i % 2 === 0;
      return {
        x: (width / 6) * (i + 1) + (Math.random() * 60 - 30),
        y: isUpward ? height + Math.random() * 120 : -(Math.random() * 120),
        angle: isUpward ? -Math.PI / 2 + (Math.random() * 0.3 - 0.15) : Math.PI / 2 + (Math.random() * 0.3 - 0.15),
        speed: 1.0 + Math.random() * 1.2,
        // Smaller goldfish: length 22-34px
        length: 22 + Math.random() * 12,
        width: 7 + Math.random() * 4,
        tailAngle: 0,
        tailSpeed: 0.09 + Math.random() * 0.04,
        finPhase: Math.random() * Math.PI * 2,
        scalePhase: Math.random() * Math.PI * 2,
        variant: i % variants.length,
        opacity: 0.82 + Math.random() * 0.18,
      };
    });

    let time = 0;

    function drawGoldfish(fish: Fish) {
      const v = variants[fish.variant];
      const L = fish.length;
      const W = fish.width;

      c.save();
      c.translate(fish.x, fish.y);
      c.rotate(fish.angle + Math.PI / 2);
      c.globalAlpha = fish.opacity;

      // Glow / soft shadow
      c.shadowColor = v.body;
      c.shadowBlur = 8;
      c.shadowOffsetY = 0;

      const finAmp = Math.sin(time * 4 + fish.finPhase) * 0.22;

      // --- Pectoral fins (fluttering) ---
      // Left pec fin
      c.save();
      c.translate(-W * 0.5, L * 0.18);
      c.rotate(-0.45 + finAmp);
      const lgLeft = c.createLinearGradient(0, 0, -L * 0.3, L * 0.15);
      lgLeft.addColorStop(0, v.fin);
      lgLeft.addColorStop(1, "rgba(255,255,255,0.05)");
      c.fillStyle = lgLeft;
      c.beginPath();
      c.ellipse(0, 0, L * 0.26, W * 0.3, -Math.PI / 4, 0, Math.PI * 2);
      c.fill();
      c.restore();

      // Right pec fin
      c.save();
      c.translate(W * 0.5, L * 0.18);
      c.rotate(0.45 - finAmp);
      const lgRight = c.createLinearGradient(0, 0, L * 0.3, L * 0.15);
      lgRight.addColorStop(0, v.fin);
      lgRight.addColorStop(1, "rgba(255,255,255,0.05)");
      c.fillStyle = lgRight;
      c.beginPath();
      c.ellipse(0, 0, L * 0.26, W * 0.3, Math.PI / 4, 0, Math.PI * 2);
      c.fill();
      c.restore();

      // --- Dorsal fin ---
      c.save();
      c.translate(0, -L * 0.05);
      const dorsalAnim = Math.sin(time * 4 + fish.finPhase + 1) * 0.1;
      c.rotate(dorsalAnim);
      const lgDorsal = c.createLinearGradient(0, -L * 0.22, 0, 0);
      lgDorsal.addColorStop(0, v.fin);
      lgDorsal.addColorStop(1, v.body);
      c.fillStyle = lgDorsal;
      c.beginPath();
      c.moveTo(-W * 0.35, 0);
      c.quadraticCurveTo(-W * 0.1, -L * 0.22, W * 0.1, -L * 0.18);
      c.quadraticCurveTo(W * 0.35, -L * 0.05, W * 0.3, 0);
      c.closePath();
      c.fill();
      c.restore();

      // --- Main body gradient ---
      const bodyGrad = c.createLinearGradient(-W, 0, W, 0);
      bodyGrad.addColorStop(0, v.accent);
      bodyGrad.addColorStop(0.35, v.body);
      bodyGrad.addColorStop(0.65, v.body);
      bodyGrad.addColorStop(1, v.accent);

      c.fillStyle = bodyGrad;
      c.beginPath();
      c.moveTo(0, -L * 0.5);
      c.bezierCurveTo(W * 0.85, -L * 0.18, W * 0.85, L * 0.28, 0, L * 0.5);
      c.bezierCurveTo(-W * 0.85, L * 0.28, -W * 0.85, -L * 0.18, 0, -L * 0.5);
      c.fill();

      // Belly highlight
      const bellyGrad = c.createLinearGradient(-W * 0.3, L * 0.05, W * 0.3, L * 0.3);
      bellyGrad.addColorStop(0, v.belly);
      bellyGrad.addColorStop(1, "rgba(255,255,255,0)");
      c.fillStyle = bellyGrad;
      c.beginPath();
      c.ellipse(0, L * 0.12, W * 0.4, L * 0.22, 0, 0, Math.PI * 2);
      c.fill();

      // Eye
      c.fillStyle = "#1a1a1a";
      c.beginPath();
      c.arc(W * 0.35, -L * 0.3, W * 0.22, 0, Math.PI * 2);
      c.fill();
      // Eye shine
      c.fillStyle = "rgba(255,255,255,0.7)";
      c.beginPath();
      c.arc(W * 0.35 + W * 0.07, -L * 0.3 - W * 0.06, W * 0.08, 0, Math.PI * 2);
      c.fill();

      // Scale texture (subtle arc lines)
      c.strokeStyle = "rgba(0,0,0,0.07)";
      c.lineWidth = 0.5;
      for (let s = 0; s < 3; s++) {
        const sy = -L * 0.15 + s * L * 0.18;
        const sw = W * (0.5 - s * 0.08);
        c.beginPath();
        c.arc(0, sy, sw, 0.2, Math.PI - 0.2);
        c.stroke();
      }

      // --- Tail / Caudal fin (animated) ---
      c.save();
      c.translate(0, L * 0.5);
      c.rotate(fish.tailAngle);

      // Caudal peduncle
      const pedGrad = c.createLinearGradient(0, 0, 0, 10);
      pedGrad.addColorStop(0, v.body);
      pedGrad.addColorStop(1, v.accent);
      c.fillStyle = pedGrad;
      c.beginPath();
      c.ellipse(0, 5, W * 0.22, 5, 0, 0, Math.PI * 2);
      c.fill();

      // Fan tail – two lobes
      const tailGrad = c.createLinearGradient(0, 6, 0, 26);
      tailGrad.addColorStop(0, v.body);
      tailGrad.addColorStop(1, v.fin);
      c.fillStyle = tailGrad;
      c.beginPath();
      c.moveTo(0, 6);
      c.quadraticCurveTo(-W * 0.65, 16, -W * 0.85, 26);
      c.quadraticCurveTo(0, 20, 0, 14);
      c.quadraticCurveTo(0, 20, W * 0.85, 26);
      c.quadraticCurveTo(W * 0.65, 16, 0, 6);
      c.fill();

      c.restore();
      c.restore();
    }

    const render = () => {
      time += 0.025;
      c.clearRect(0, 0, width, height);

      fishes.forEach((fish) => {
        // Tail oscillation
        fish.tailAngle = Math.sin(time * 5 + fish.finPhase) * 0.32;

        // Move fish
        fish.x += Math.cos(fish.angle) * fish.speed;
        fish.y += Math.sin(fish.angle) * fish.speed;

        // Gentle steering
        fish.angle += Math.sin(time + fish.finPhase) * 0.012;

        // Reset when off screen
        if (fish.y < -140) {
          fish.y = height + 80;
          fish.x = Math.random() * width;
          fish.angle = -Math.PI / 2 + (Math.random() * 0.3 - 0.15);
        } else if (fish.y > height + 140) {
          fish.y = -80;
          fish.x = Math.random() * width;
          fish.angle = Math.PI / 2 + (Math.random() * 0.3 - 0.15);
        }

        drawGoldfish(fish);
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
        zIndex: 1,
      }}
    />
  );
}
