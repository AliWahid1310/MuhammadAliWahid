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
  Gauge
} from "lucide-react";

interface ModelPreset {
  id: string;
  name: string;
  type: string;
  parameters: string;
  baseTtft: number; // ms
  baseTps: number; // tokens/sec
  vramBase: number; // GB
  sampleOutput: string;
}

export default function AiPlayground() {
  const models: ModelPreset[] = [
    {
      id: "nexus-70b",
      name: "Nexus-LLM 70B (MoE)",
      type: "Mixture-of-Experts Router",
      parameters: "70 Billion (8x7B Active)",
      baseTtft: 18.5,
      baseTps: 124.6,
      vramBase: 42,
      sampleOutput:
        "Analyzing distributed state... Multi-region Raft cluster verified. Consensus established across 5 active leader nodes. Zero-copy IPC buffer allocated via eBPF kernel hook."
    },
    {
      id: "medvision-34b",
      name: "BioVision Multimodal 34B",
      type: "Medical Diagnostic Vision-Language",
      parameters: "34 Billion Multimodal",
      baseTtft: 24.2,
      baseTps: 98.4,
      vramBase: 26,
      sampleOutput:
        "Processing DICOM volumetric tensor. Convolutional encoder detected 99.4% concordance with ground-truth pathology markers. Sub-millimeter lesion boundaries segmented."
    },
    {
      id: "edge-slm-3b",
      name: "EdgeSLM 3.8B Low Latency",
      type: "Edge Quantized Transformer",
      parameters: "3.8 Billion Parameters",
      baseTtft: 3.2,
      baseTps: 280.5,
      vramBase: 4.8,
      sampleOutput:
        "Edge telemetry validated. Sub-5ms anomaly detection filter applied. Real-time sensor stream classified nominal. Zero cloud backhaul required."
    }
  ];

  const [selectedModel, setSelectedModel] = useState<ModelPreset>(models[0]);
  const [quantization, setQuantization] = useState<"FP16" | "FP8" | "INT4">("FP8");
  const [batchSize, setBatchSize] = useState<number>(16);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [streamedText, setStreamedText] = useState<string>("");
  const [currentTps, setCurrentTps] = useState<number>(124.6);
  const [currentTtft, setCurrentTtft] = useState<number>(18.5);
  const [currentVram, setCurrentVram] = useState<number>(42);

  // Compute metrics based on settings
  const computeMetrics = (model: ModelPreset, quant: string, batch: number) => {
    let tpsFactor = 1.0;
    let vramFactor = 1.0;
    let ttftFactor = 1.0;

    if (quant === "INT4") {
      tpsFactor = 1.8;
      vramFactor = 0.35;
      ttftFactor = 0.7;
    } else if (quant === "FP8") {
      tpsFactor = 1.4;
      vramFactor = 0.55;
      ttftFactor = 0.85;
    } else {
      tpsFactor = 1.0;
      vramFactor = 1.0;
      ttftFactor = 1.0;
    }

    const batchScale = Math.log2(batch) * 0.2;
    const finalTps = Number((model.baseTps * tpsFactor * (1 + batchScale * 0.4)).toFixed(1));
    const finalTtft = Number((model.baseTtft * ttftFactor + batch * 0.4).toFixed(1));
    const finalVram = Number((model.vramBase * vramFactor + batch * 0.3).toFixed(1));

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

    // Stream tokens
    const words = selectedModel.sampleOutput.split(" ");
    let i = 0;
    const timer = setInterval(() => {
      if (i < words.length) {
        setStreamedText((prev) => (prev ? prev + " " + words[i] : words[i]));
        i++;
      } else {
        clearInterval(timer);
        setIsRunning(false);
        // Small celebratory confetti trigger
        try {
          confetti({
            particleCount: 25,
            spread: 60,
            origin: { y: 0.8 },
            colors: ["#2563eb", "#7c3aed", "#10b981"]
          });
        } catch (e) {
          // ignore
        }
      }
    }, 45);
  };

  useEffect(() => {
    const { finalTps, finalTtft, finalVram } = computeMetrics(selectedModel, quantization, batchSize);
    setCurrentTps(finalTps);
    setCurrentTtft(finalTtft);
    setCurrentVram(finalVram);
    setStreamedText(selectedModel.sampleOutput);
  }, [selectedModel, quantization, batchSize]);

  return (
    <section id="ai-lab" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="badge-pill mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>INTERACTIVE AI BENCHMARK SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Live AI Inference & Latency Laboratory.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Simulate real-time token throughput, memory bandwidth, and time-to-first-token across production architectures engineered by Muhammad Ali Wahid.
          </p>
        </div>

        {/* The Interactive Lab Panel */}
        <div className="glass-card overflow-hidden border border-slate-200 bg-white shadow-xl max-w-5xl mx-auto">
          
          {/* Top Engine Banner */}
          <div className="bg-slate-900 text-white p-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-sm">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-2">
                  <span>Engine: TensorRT-LLM v0.12 + vLLM PagedAttention</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-semibold">
                    ACTIVE
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Hardware Target: 8x NVIDIA H100 80GB SXM5 • NVLink 900 GB/s
                </div>
              </div>
            </div>

            <button
              onClick={handleRunInference}
              disabled={isRunning}
              className={`px-5 py-2 rounded-lg font-bold text-xs flex items-center gap-2 transition-all ${
                isRunning
                  ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-blue-500/20"
              }`}
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Streaming Tokens...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run Realtime Benchmark</span>
                </>
              )}
            </button>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Controls Column (4 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* 1. Model Selector */}
              <div>
                <label className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider block mb-2">
                  Select Neural Architecture
                </label>
                <div className="space-y-2">
                  {models.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedModel(m)}
                      className={`w-full p-3 rounded-xl text-left border transition-all text-xs ${
                        selectedModel.id === m.id
                          ? "bg-blue-50/70 border-blue-600 ring-1 ring-blue-600/30 text-slate-900"
                          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <div className="font-bold text-sm text-slate-900">{m.name}</div>
                      <div className="text-slate-500 text-[11px] mt-0.5">{m.type}</div>
                      <div className="font-mono text-blue-700 text-[10px] mt-1 font-semibold">{m.parameters}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Quantization Precision */}
              <div>
                <label className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider block mb-2">
                  Quantization Precision
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["FP16", "FP8", "INT4"] as const).map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuantization(q)}
                      className={`py-2 px-3 rounded-lg text-xs font-mono font-bold border transition-colors ${
                        quantization === q
                          ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Concurrency / Batch Size */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">
                    Concurrent Batch Requests
                  </label>
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {batchSize} reqs
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="64"
                  step="1"
                  value={batchSize}
                  onChange={(e) => setBatchSize(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>1 (Single Stream)</span>
                  <span>32</span>
                  <span>64 (High Throughput)</span>
                </div>
              </div>

            </div>

            {/* Right Telemetry & Output Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Telemetry Gauge Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Throughput</div>
                  <div className="text-2xl font-extrabold text-slate-900 font-mono mt-1">
                    {currentTps}
                  </div>
                  <div className="text-[10px] text-blue-600 font-mono mt-0.5">tokens / sec</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-mono text-slate-500 uppercase">TTFT (Latency)</div>
                  <div className="text-2xl font-extrabold text-slate-900 font-mono mt-1">
                    {currentTtft}
                  </div>
                  <div className="text-[10px] text-emerald-600 font-mono mt-0.5">milliseconds</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-mono text-slate-500 uppercase">VRAM Allocation</div>
                  <div className="text-2xl font-extrabold text-slate-900 font-mono mt-1">
                    {currentVram}
                  </div>
                  <div className="text-[10px] text-purple-600 font-mono mt-0.5">GB utilized</div>
                </div>
              </div>

              {/* Live Streaming Token Box */}
              <div className="flex-1 flex flex-col rounded-xl bg-slate-900 border border-slate-800 p-4 text-xs font-mono text-slate-200 shadow-inner min-h-[200px]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-300 font-semibold">STREAMING INFERENCE CONSOLE</span>
                  </div>
                  <span>PRECISION: {quantization}</span>
                </div>

                <div className="flex-1 leading-relaxed text-slate-100 whitespace-pre-wrap">
                  {streamedText}
                  {isRunning && <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse align-middle" />}
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Cosine Semantic Score: 0.992</span>
                  <span>KV Cache: PagedAttention v2 Enabled</span>
                </div>
              </div>

              {/* Architectural insight */}
              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/80 text-xs text-blue-900 flex items-start gap-2.5">
                <Gauge className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Architectural Note:</strong> By coupling FP8 quantization with PagedAttention continuous batching, memory bandwidth bottlenecks are alleviated by up to <strong>3.2x</strong> compared to naive FP16 inference.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
