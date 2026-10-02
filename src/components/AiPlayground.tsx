"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Cpu,
  Zap,
  Play,
  Activity,
  Layers,
  Sparkles,
  BarChart3,
  Sliders,
  Check,
  RefreshCw,
  Gauge,
  ShieldAlert,
  TrendingUp,
  Camera
} from "lucide-react";

interface ModelPreset {
  id: string;
  name: string;
  type: string;
  parameters: string;
  baseTtft: number; // ms
  baseTps: number; // tokens or frames/sec
  vramBase: number; // GB
  metricLabel: string;
  sampleOutput: string;
}

export default function AiPlayground() {
  const models: ModelPreset[] = [
    {
      id: "deepscam-fast",
      name: "DeepScam Sentinel v2.4 (PitchFest 1st Place)",
      type: "Conversational Fraud & Scam Anomaly Classifier",
      parameters: "Transformer + BiLSTM Acoustic Embedding",
      baseTtft: 14.2,
      baseTps: 185.4,
      vramBase: 6.8,
      metricLabel: "predictions / sec",
      sampleOutput:
        "Analyzing conversational waveform... Ingestion stream verified. PitchFest FAST-NUCES winning heuristics triggered: 99.4% probability of social engineering impersonation detected. Alert dispatched to fraud prevention channel."
    },
    {
      id: "visualboost-yolo",
      name: "VisualBoost YOLOv8 Vision Pipeline",
      type: "Real-Time Object Detection & Spatial Segmentation",
      parameters: "YOLOv8x Deep PyTorch Backbone",
      baseTtft: 22.5,
      baseTps: 78.2,
      vramBase: 12.4,
      metricLabel: "frames / sec",
      sampleOutput:
        "Processing multi-resolution frame buffer... TensorRT FP8 kernel executed across 8 parallel streams. Detected 14 foreground objects (person: 0.98, vehicle: 0.96). Sub-45ms spatial coordinates rasterized into client canvas."
    },
    {
      id: "stockai-ensemble",
      name: "StockAI Pro Time-Series Ensemble",
      type: "Multi-Model Market Volatility & Forecast Regressor",
      parameters: "Ensemble Gradient Boosting + ARIMA",
      baseTtft: 4.8,
      baseTps: 340.0,
      vramBase: 3.2,
      metricLabel: "horizons / sec",
      sampleOutput:
        "Processing market pricing matrix... Rolling 90-day lookback initialized. Calculated Bollinger bandwidth and Exponential Moving Average divergence. Forecast horizon calculated with 94.1% historical confidence bounds."
    }
  ];

  const [selectedModel, setSelectedModel] = useState<ModelPreset>(models[0]);
  const [quantization, setQuantization] = useState<"FP16" | "FP8" | "INT4">("FP8");
  const [batchSize, setBatchSize] = useState<number>(16);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [streamedText, setStreamedText] = useState<string>("");
  const [currentTps, setCurrentTps] = useState<number>(185.4);
  const [currentTtft, setCurrentTtft] = useState<number>(14.2);
  const [currentVram, setCurrentVram] = useState<number>(6.8);

  const computeMetrics = (model: ModelPreset, quant: string, batch: number) => {
    let tpsFactor = 1.0;
    let vramFactor = 1.0;
    let ttftFactor = 1.0;

    if (quant === "INT4") {
      tpsFactor = 1.8;
      vramFactor = 0.38;
      ttftFactor = 0.65;
    } else if (quant === "FP8") {
      tpsFactor = 1.45;
      vramFactor = 0.55;
      ttftFactor = 0.82;
    } else {
      tpsFactor = 1.0;
      vramFactor = 1.0;
      ttftFactor = 1.0;
    }

    const batchScale = Math.log2(batch) * 0.25;
    const finalTps = Number((model.baseTps * tpsFactor * (1 + batchScale * 0.35)).toFixed(1));
    const finalTtft = Number((model.baseTtft * ttftFactor + batch * 0.3).toFixed(1));
    const finalVram = Number((model.vramBase * vramFactor + batch * 0.2).toFixed(1));

    return { finalTps, finalTtft, finalVram };
  };

  const handleRunInference = () => {
    if (isRunning) return;
    setIsRunning(true);
    setStreamedText("");

    const { finalTps, finalTtft, finalVram } = computeMetrics(selectedModel, quantization, batchSize);
    setCurrentTps(finalTps);
    setCurrentTtft(finalTtft);
    setCurrentVram(finalVram);

    const words = selectedModel.sampleOutput.split(" ");
    let i = 0;
    const timer = setInterval(() => {
      if (i < words.length) {
        setStreamedText((prev) => (prev ? prev + " " + words[i] : words[i]));
        i++;
      } else {
        clearInterval(timer);
        setIsRunning(false);
        try {
          confetti({
            particleCount: 35,
            spread: 60,
            origin: { y: 0.75 },
            colors: ["#3b82f6", "#8b5cf6", "#10b981", "#38bdf8"]
          });
        } catch {
          // ignore
        }
      }
    }, 40);
  };

  useEffect(() => {
    const { finalTps, finalTtft, finalVram } = computeMetrics(selectedModel, quantization, batchSize);
    setCurrentTps(finalTps);
    setCurrentTtft(finalTtft);
    setCurrentVram(finalVram);
    setStreamedText(selectedModel.sampleOutput);
  }, [selectedModel, quantization, batchSize]);

  return (
    <section id="ai-lab" className="section-wrapper" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <div className="section-tag">
            <Sparkles style={{ width: "12px", height: "12px" }} />
            <span>Interactive Neural Sandbox</span>
          </div>
          <h2 className="section-title">Applied AI & Machine Learning Lab</h2>
          <p className="section-subtitle" style={{ margin: "10px auto 0 auto" }}>
            Simulate real-time inference latency, throughput acceleration, and memory footprint across models engineered and awarded to Muhammad Ali Wahid.
          </p>
        </div>

        {/* Laboratory Card Console */}
        <div
          className="clean-card"
          style={{
            padding: 0,
            overflow: "hidden",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            boxShadow: "var(--shadow-lg), 0 0 40px rgba(59, 130, 246, 0.15)",
            background: "rgba(10, 15, 26, 0.94)"
          }}
        >
          {/* Top Engine Telemetry Bar */}
          <div
            style={{
              padding: "16px 24px",
              background: "rgba(15, 23, 42, 0.9)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-md)",
                  background: "linear-gradient(135deg, #2563eb, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  boxShadow: "0 0 16px rgba(59, 130, 246, 0.5)"
                }}
              >
                <Cpu style={{ width: "20px", height: "20px" }} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.925rem", fontWeight: 700, color: "#f8fafc" }}>
                  <span>Runtime: PyTorch + FastAPI Async Engine</span>
                  <span style={{ fontSize: "0.65rem", padding: "2px 8px", borderRadius: "9999px", background: "rgba(16, 185, 129, 0.15)", color: "#10b981", border: "1px solid rgba(16, 185, 129, 0.3)", fontWeight: 700 }}>
                    ACTIVE TELEMETRY
                  </span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  Target: Containerized Docker Instance • Accelerated CUDA Kernels
                </div>
              </div>
            </div>

            <button
              onClick={handleRunInference}
              disabled={isRunning}
              className="btn-solid btn-glow"
              style={{ padding: "10px 22px", fontSize: "0.825rem", gap: "8px" }}
            >
              {isRunning ? (
                <>
                  <RefreshCw style={{ width: "14px", height: "14px", animation: "spin 1s linear infinite" }} />
                  <span>Streaming Inference...</span>
                </>
              ) : (
                <>
                  <Play style={{ width: "14px", height: "14px", fill: "currentColor" }} />
                  <span>Execute Real-time Inference</span>
                </>
              )}
            </button>
          </div>

          {/* Body: Left Controls & Right Gauges */}
          <div style={{ padding: "28px", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "28px" }}>
            
            {/* Left Controls */}
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              
              {/* 1. Model Selector */}
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "10px" }}>
                  1. Select Neural Architecture
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {models.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedModel(m)}
                      style={{
                        padding: "12px 14px",
                        borderRadius: "var(--radius-md)",
                        textAlign: "left",
                        border: selectedModel.id === m.id ? "1px solid var(--primary)" : "1px solid var(--border-light)",
                        background: selectedModel.id === m.id ? "rgba(59, 130, 246, 0.12)" : "rgba(255, 255, 255, 0.03)",
                        boxShadow: selectedModel.id === m.id ? "0 0 16px rgba(59, 130, 246, 0.2)" : "none",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#f8fafc" }}>
                        {m.name}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
                        {m.type}
                      </div>
                      <div style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--primary-hover)", marginTop: "4px" }}>
                        {m.parameters}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Quantization Precision */}
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "10px" }}>
                  2. Quantization Precision
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                  {(["FP16", "FP8", "INT4"] as const).map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuantization(q)}
                      style={{
                        padding: "8px",
                        fontSize: "0.78rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        borderRadius: "var(--radius-sm)",
                        border: quantization === q ? "1px solid var(--accent-purple)" : "1px solid var(--border-light)",
                        background: quantization === q ? "var(--accent-purple)" : "rgba(255, 255, 255, 0.04)",
                        color: quantization === q ? "#ffffff" : "var(--text-muted)",
                        boxShadow: quantization === q ? "0 0 12px rgba(139, 92, 246, 0.4)" : "none",
                        cursor: "pointer",
                        transition: "all 0.15s ease"
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Concurrency Batch Slider */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <label style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                    3. Concurrent Invocations
                  </label>
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--primary-hover)", background: "var(--primary-light)", padding: "2px 8px", borderRadius: "var(--radius-sm)" }}>
                    {batchSize} streams
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="64"
                  step="1"
                  value={batchSize}
                  onChange={(e) => setBatchSize(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--primary)", cursor: "pointer" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--text-light)", marginTop: "4px" }}>
                  <span>1 (Single Stream)</span>
                  <span>32 Concurrent</span>
                  <span>64 (Batch Load)</span>
                </div>
              </div>

            </div>

            {/* Right Telemetry & Output */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              
              {/* 3 Metrics Cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
                <div style={{ padding: "14px", borderRadius: "var(--radius-md)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid var(--border-light)" }}>
                  <div style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase" }}>Throughput</div>
                  <div style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--primary-hover)", marginTop: "4px" }}>
                    {currentTps}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{selectedModel.metricLabel}</div>
                </div>

                <div style={{ padding: "14px", borderRadius: "var(--radius-md)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid var(--border-light)" }}>
                  <div style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase" }}>Latency (TTFT)</div>
                  <div style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--accent-emerald)", marginTop: "4px" }}>
                    {currentTtft}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>milliseconds</div>
                </div>

                <div style={{ padding: "14px", borderRadius: "var(--radius-md)", background: "rgba(255, 255, 255, 0.03)", border: "1px solid var(--border-light)" }}>
                  <div style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", textTransform: "uppercase" }}>VRAM Footprint</div>
                  <div style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--accent-purple)", marginTop: "4px" }}>
                    {currentVram}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>GB active memory</div>
                </div>
              </div>

              {/* Streaming Output Box */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(0, 0, 0, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: "16px",
                  fontSize: "0.825rem",
                  fontFamily: "var(--font-mono)",
                  color: "#f8fafc",
                  minHeight: "180px",
                  boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.5)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "10px", marginBottom: "12px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span className="pulse-circle" style={{ width: "6px", height: "6px" }} />
                    <span style={{ color: "#34d399", fontWeight: 700 }}>LIVE INFERENCE STREAM</span>
                  </div>
                  <span>FORMAT: {quantization}</span>
                </div>

                <div style={{ flex: 1, lineHeight: "1.7", whiteSpace: "pre-wrap", color: "#e2e8f0" }}>
                  {streamedText}
                  {isRunning && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "8px",
                        height: "15px",
                        background: "var(--primary)",
                        marginLeft: "6px",
                        animation: "pulseGlow 0.6s infinite",
                        verticalAlign: "middle"
                      }}
                    />
                  )}
                </div>

                <div style={{ paddingTop: "10px", marginTop: "10px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--text-light)" }}>
                  <span>Verified Architecture: Air University CS</span>
                  <span>Confidence Metric: 99.4%</span>
                </div>
              </div>

              {/* Engineering Insight */}
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(59, 130, 246, 0.1)",
                  border: "1px solid rgba(59, 130, 246, 0.25)",
                  fontSize: "0.8rem",
                  color: "#93c5fd",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px"
                }}
              >
                <Gauge style={{ width: "16px", height: "16px", color: "var(--primary-hover)", flexShrink: 0, marginTop: "2px" }} />
                <span>
                  <strong>Engineering Note:</strong> By combining INT4/FP8 quantization with continuous async batching in FastAPI, server memory bandwidth is optimized by up to <strong>2.8x</strong> while retaining detection precision.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
