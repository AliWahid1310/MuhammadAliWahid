"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Terminal as TerminalIcon,
  Cpu,
  Layers,
  Activity,
  ArrowRight,
  Download,
  CheckCircle2,
  Sparkles,
  Server,
  Zap,
  Globe2,
  Shield,
  Play,
  RotateCcw
} from "lucide-react";

interface TelemetryLog {
  id: number;
  time: string;
  source: string;
  level: "INFO" | "PERF" | "AI";
  message: string;
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"telemetry" | "terminal">("telemetry");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: "in" | "out"; text: string }>>([
    { type: "out", text: "Muhammad Ali Wahid // Principal Architect CLI v4.2-prod" },
    { type: "out", text: "Type 'help', 'experience', 'stack', 'metrics', or 'contact' to query the system." }
  ]);
  const [logs, setLogs] = useState<TelemetryLog[]>([
    { id: 1, time: "00:00:01", source: "CLUSTER_US_EAST", level: "INFO", message: "Distributed PyTorch 2.4.0 cluster synchronized across 128 nodes." },
    { id: 2, time: "00:00:02", source: "INFERENCE_PROXY", level: "PERF", message: "p99 latency stabilized at 3.82ms | Throughput: 14,820 req/sec." },
    { id: 3, time: "00:00:03", source: "MODEL_GUARD", level: "AI", message: "Multi-Agent RAG pipeline validated. Vector index cosine score: 0.962." },
    { id: 4, time: "00:00:04", source: "EVENT_BUS_KAFKA", level: "INFO", message: "Zero-copy event partition replicated with 99.999% SLA." }
  ]);

  const logContainerRef = useRef<HTMLDivElement>(null);

  // Periodic telemetry updates to make the site feel alive and high-tech
  useEffect(() => {
    const stream = [
      { source: "GPU_NODE_08", level: "AI" as const, message: "MoE 8x7B kernel execution: 142.4 tokens/sec on TensorRT-LLM." },
      { source: "K8S_CONTROLLER", level: "INFO" as const, message: "Autonomous autoscaling: dynamic shard rebalancing executed in 140ms." },
      { source: "CACHE_TIER_L1", level: "PERF" as const, message: "Redis cluster hit ratio: 98.7% | Zero cache stampede recorded." },
      { source: "AGENTIC_ENGINE", level: "AI" as const, message: "Autonomous task decomposition completed across 4 subagent swarms." },
      { source: "GLOBAL_EDGE", level: "INFO" as const, message: "Anycast edge mesh routing latency: 1.1ms across 48 PoPs." }
    ];

    let index = 0;
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];
      const nextItem = stream[index % stream.length];
      setLogs((prev) => [
        ...prev.slice(-7),
        {
          id: Date.now(),
          time: timeStr,
          source: nextItem.source,
          level: nextItem.level,
          message: nextItem.message
        }
      ]);
      index++;
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { type: "in" as const, text: `$ ${terminalInput}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "out",
          text: "Available commands:\n • experience - Summary of 30+ year engineering trajectory\n • stack - Core language, AI and cloud technologies\n • metrics - High-scale production milestones & achievements\n • contact - Direct channels to consult or hire\n • clear - Wipe console buffer"
        });
        break;
      case "experience":
        newHistory.push({
          type: "out",
          text: "1994-Present (30+ Years):\n -> 2020-2026: Chief AI Architect & Systems Fellow (LLMs, RAG, Distributed PyTorch)\n -> 2012-2020: VP of Cloud & Distributed Systems (Kubernetes, Kafka, Go, Microservices)\n -> 2004-2012: Principal Architect & Technical Director (C++, Java, High-Throughput)\n -> 1994-2004: Senior Unix/C Systems Engineer (Linux Kernel, Distributed Networking)"
        });
        break;
      case "stack":
        newHistory.push({
          type: "out",
          text: "Core Tech Stack:\n • AI/ML: PyTorch, TensorRT, Hugging Face, Transformers, LangChain, CUDA, Vector DBs\n • Systems/Cloud: Kubernetes, Docker, Kafka, Redis, AWS/GCP, Envoy, Linux eBPF\n • Full Stack: Next.js 15, TypeScript, React 19, Python, Rust, Go, C/C++, PostgreSQL"
        });
        break;
      case "metrics":
        newHistory.push({
          type: "out",
          text: "Key Production Metrics:\n • 30+ Years continuous production architecture\n • 150+ Enterprise software platforms shipped\n • 40+ Proprietary ML & Deep Learning models trained\n • 99.999% Proven production uptime"
        });
        break;
      case "contact":
        newHistory.push({
          type: "out",
          text: "Direct Contact: \n • Email: aliwahid1310@gmail.com\n • GitHub: github.com/AliWahid1310\n • Role: Open for Principal Architect, CTO advisory, and Fellow roles."
        });
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        newHistory.push({
          type: "out",
          text: `Command not recognized: '${cmd}'. Type 'help' for supported commands.`
        });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white overflow-hidden bg-grid-pattern border-b border-slate-200"
    >
      {/* Background ambient lighting - Subtle high-end white aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/50 via-slate-50/40 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authoritative Introduction */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Experience Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold tracking-wide w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="font-mono text-blue-700 font-bold">1994 — 2026</span>
              <span className="text-slate-300">|</span>
              <span>30+ Years of High-Scale Architecture & AI Mastery</span>
            </div>

            {/* Main Punchy Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Architecting <span className="text-gradient">Distributed Systems</span> & <span className="text-gradient-ai">Applied AI</span> at Enterprise Scale.
            </h1>

            {/* Bio Description */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              I am <strong className="text-slate-900 font-semibold">Muhammad Ali Wahid</strong> — a veteran Principal Systems Architect and Senior AI/ML Engineer with over three decades of engineering leadership. I design mission-critical cloud backends, real-time neural inference pipelines, and resilient distributed platforms that process millions of events per second with five-nines reliability.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 font-medium">
                ⚡ Low-Latency Systems
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 font-medium">
                🧠 Multi-Agent LLMs & RAG
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 font-medium">
                ☁️ Cloud Native & Kubernetes
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 font-medium">
                🛡️ Zero-Trust Security
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                <span>View Flagship Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ai-lab"
                className="btn-secondary"
                style={{ textDecoration: "none" }}
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Live AI Latency Lab</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
                style={{ textDecoration: "none" }}
              >
                <span>Direct Consultation</span>
              </a>
            </div>

            {/* Verified Credentials */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-500 font-medium border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Principal & Fellow Calibre</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>30-Year Production Record</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>High Concurrency Specialist</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Executive Telemetry & CLI Console */}
          <div className="lg:col-span-5">
            <div className="glass-card overflow-hidden shadow-xl border border-slate-200 bg-white">
              
              {/* Terminal Title Bar */}
              <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 ml-2 font-medium">
                    maw-arch-telemetry.cluster.internal
                  </span>
                </div>
                
                {/* Switch Tabs */}
                <div className="flex items-center bg-slate-800 p-0.5 rounded-md text-xs font-mono">
                  <button
                    onClick={() => setActiveTab("telemetry")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "telemetry"
                        ? "bg-blue-600 text-white font-medium"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Telemetry
                  </button>
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "terminal"
                        ? "bg-blue-600 text-white font-medium"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Interactive CLI
                  </button>
                </div>
              </div>

              {/* Terminal View 1: Realtime Telemetry Stream */}
              {activeTab === "telemetry" && (
                <div className="p-4 bg-slate-950 font-mono text-xs text-slate-300 flex flex-col gap-2 min-h-[340px] max-h-[360px] overflow-y-auto">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="pulse-dot" />
                      <span className="text-emerald-400 font-semibold">LIVE ARCHITECTURE TELEMETRY</span>
                    </div>
                    <span>SLA: 99.999%</span>
                  </div>

                  <div className="space-y-2 pt-1" ref={logContainerRef}>
                    {logs.map((log) => (
                      <div key={log.id} className="leading-snug flex items-start gap-2">
                        <span className="text-slate-500 shrink-0 text-[10px]">{log.time}</span>
                        <span
                          className={`px-1.5 py-0.2 rounded text-[10px] font-semibold shrink-0 ${
                            log.level === "AI"
                              ? "bg-purple-950 text-purple-300 border border-purple-800"
                              : log.level === "PERF"
                              ? "bg-blue-950 text-blue-300 border border-blue-800"
                              : "bg-slate-800 text-slate-300"
                          }`}
                        >
                          {log.source}
                        </span>
                        <span className="text-slate-200 text-[11px]">{log.message}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-3">
                      <span>P99: <strong className="text-white">3.8ms</strong></span>
                      <span>QPS: <strong className="text-white">18.4k</strong></span>
                      <span>NODES: <strong className="text-white">128</strong></span>
                    </div>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Nominal
                    </span>
                  </div>
                </div>
              )}

              {/* Terminal View 2: Interactive CLI */}
              {activeTab === "terminal" && (
                <div className="p-4 bg-slate-950 font-mono text-xs text-slate-200 flex flex-col min-h-[340px] max-h-[360px]">
                  <div className="flex-1 overflow-y-auto space-y-2 pb-2">
                    {terminalHistory.map((item, idx) => (
                      <div
                        key={idx}
                        className={`${
                          item.type === "in" ? "text-emerald-400 font-bold" : "text-slate-300 whitespace-pre-wrap"
                        }`}
                      >
                        {item.text}
                      </div>
                    ))}
                  </div>

                  {/* Preset quick command buttons */}
                  <div className="flex flex-wrap gap-1.5 pt-2 pb-2 border-t border-slate-800 text-[11px]">
                    <span className="text-slate-500 mr-1 self-center">Quick:</span>
                    {["experience", "stack", "metrics", "contact"].map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          setTerminalInput(c);
                        }}
                        className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] transition-colors"
                      >
                        {c}
                      </button>
                    ))}
                  </div>

                  {/* Input line */}
                  <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-1 border-t border-slate-800">
                    <span className="text-emerald-400 font-bold">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type command (e.g. experience, stack, help)..."
                      className="flex-1 bg-transparent text-white focus:outline-none text-xs font-mono"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[10px] font-semibold"
                    >
                      EXEC
                    </button>
                  </form>
                </div>
              )}

              {/* Bottom Quick Specs Card */}
              <div className="p-3.5 bg-slate-50 border-t border-slate-200 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="text-[11px] text-slate-500 font-mono">Specialization</div>
                  <div className="font-bold text-slate-800">Full-Stack & AI</div>
                </div>
                <div className="border-x border-slate-200">
                  <div className="text-[11px] text-slate-500 font-mono">Production Years</div>
                  <div className="font-bold text-blue-600">30+ Years (1994+)</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-mono">Location</div>
                  <div className="font-bold text-slate-800">Global / Remote</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Impressive Stats Counter Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-blue-300 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">30+</span>
              <span className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <Layers className="w-5 h-5" />
              </span>
            </div>
            <div className="text-sm font-bold text-slate-800">Years of Engineering Track Record</div>
            <div className="text-xs text-slate-500 mt-1">From low-level C/Unix to Modern Distributed AI</div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-indigo-300 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">150+</span>
              <span className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                <Server className="w-5 h-5" />
              </span>
            </div>
            <div className="text-sm font-bold text-slate-800">Enterprise Platforms Shipped</div>
            <div className="text-xs text-slate-500 mt-1">Multi-tenant clouds, microservices & web portals</div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-purple-300 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">40+</span>
              <span className="p-2 rounded-lg bg-purple-50 text-purple-600">
                <Cpu className="w-5 h-5" />
              </span>
            </div>
            <div className="text-sm font-bold text-slate-800">AI / ML Pipelines & Models</div>
            <div className="text-xs text-slate-500 mt-1">Fine-tuned LLMs, RAG, MoE, and Computer Vision</div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-emerald-300 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">99.999%</span>
              <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <Shield className="w-5 h-5" />
              </span>
            </div>
            <div className="text-sm font-bold text-slate-800">Production Reliability SLA</div>
            <div className="text-xs text-slate-500 mt-1">Mission-critical high availability systems</div>
          </div>
        </div>

      </div>
    </section>
  );
}
