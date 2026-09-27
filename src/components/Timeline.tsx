"use client";

import React, { useState } from "react";
import {
  Calendar,
  Sparkles,
  Server,
  Cpu,
  Layers,
  Award,
  ChevronRight,
  Code2,
  GitBranch,
  ShieldCheck,
  CheckCircle,
  ExternalLink
} from "lucide-react";

interface Milestone {
  era: string;
  years: string;
  role: string;
  organization: string;
  summary: string;
  keyAchievements: string[];
  techStack: string[];
  icon: any;
  color: string;
  badgeBg: string;
  architecturePillar: string;
  scaleMetric: string;
}

export default function Timeline() {
  const milestones: Milestone[] = [
    {
      era: "Modern Era",
      years: "2020 — 2026",
      role: "Chief AI Architect & Systems Fellow",
      organization: "Autonomous AI & High-Scale Systems Advisory",
      summary:
        "Directing the engineering of multi-cluster Generative AI platforms, production LLM inference engines (vLLM, TensorRT-LLM), agentic autonomous workflows, and hybrid RAG indexing at enterprise scale.",
      keyAchievements: [
        "Architected an enterprise multi-agent LLM orchestration platform processing 120M+ weekly tokens with sub-5ms routing overhead.",
        "Deployed zero-latency distributed caching layers for vector embeddings, slashing LLM API operating expenditure by 64%.",
        "Engineered autonomous code generation and validation pipelines for automated compliance in Fortune 100 environments.",
        "Delivered full-stack modern portals using Next.js 15, React 19, TypeScript, and distributed edge computing."
      ],
      techStack: [
        "PyTorch",
        "TensorRT",
        "Next.js 15",
        "TypeScript",
        "LangChain",
        "Milvus",
        "Kubernetes",
        "CUDA",
        "FastAPI"
      ],
      icon: Cpu,
      color: "text-purple-600",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
      architecturePillar: "Generative AI & Agentic Systems",
      scaleMetric: "120M+ tokens/wk • 4.2ms p99"
    },
    {
      era: "Cloud-Native Era",
      years: "2012 — 2020",
      role: "VP of Cloud & Principal Distributed Architect",
      organization: "Global Cloud Infrastructure & High-Growth Tech",
      summary:
        "Pioneered enterprise transitions to containerized Kubernetes microservices, reactive frontend architectures, and planet-scale event streaming pipelines processing billions of real-time transactions.",
      keyAchievements: [
        "Led migration of 40+ legacy monoliths into resilient, autoscaling Kubernetes clusters across multi-region AWS & GCP environments.",
        "Engineered Apache Kafka event-driven backbone handling 15 Billion events per day with zero message loss and five-nines uptime.",
        "Instituted full-stack engineering standards with TypeScript, React, Node.js, and Go microservices for 120+ software engineers.",
        "Architected multi-region active-active disaster recovery with automated failover in under 3 seconds."
      ],
      techStack: [
        "Kubernetes",
        "Go",
        "React",
        "TypeScript",
        "Apache Kafka",
        "Docker",
        "AWS / GCP",
        "PostgreSQL",
        "Terraform"
      ],
      icon: Server,
      color: "text-blue-600",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      architecturePillar: "Distributed Cloud Mesh",
      scaleMetric: "15 Billion events/day • 99.999% SLA"
    },
    {
      era: "Web Scale Era",
      years: "2004 — 2012",
      role: "Principal Software Architect & Technical Director",
      organization: "Enterprise High-Concurrency Systems",
      summary:
        "Engineered high-concurrency transactional web platforms, distributed database sharding, asynchronous message queues, and high-frequency real-time financial portals.",
      keyAchievements: [
        "Designed high-throughput C++ and Java distributed trading engine executing 80,000 orders/sec with deterministic microsecond latency.",
        "Built distributed database clustering with multi-master MySQL replication, partitioning, and Redis/Memcached cache coherence.",
        "Authored custom HTTP reverse proxies and load balancers pre-dating Nginx mainstream adoption.",
        "Spearheaded SOA (Service-Oriented Architecture) and RESTful API standards across global engineering divisions."
      ],
      techStack: [
        "C++",
        "Java",
        "Python",
        "MySQL Sharding",
        "Memcached",
        "Redis",
        "REST APIs",
        "Linux",
        "Apache"
      ],
      icon: Layers,
      color: "text-indigo-600",
      badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      architecturePillar: "High-Throughput Backends",
      scaleMetric: "80,000 req/sec • Sub-millisecond"
    },
    {
      era: "Foundational Era",
      years: "1994 — 2004",
      role: "Senior Unix Systems & Network Engineer",
      organization: "Telecommunications & Core Operating Systems",
      summary:
        "Constructed bare-metal Unix network daemons, POSIX multithreaded network engines, telecommunication switching software, and custom Linux kernel networking modules.",
      keyAchievements: [
        "Developed custom POSIX Pthreads networking daemons processing packet routing for telecommunication carriers.",
        "Tuned Linux and Solaris kernel networking parameters, implementing zero-copy socket buffers.",
        "Engineered fault-tolerant distributed RPC protocols over raw TCP/IP sockets before standardized frameworks existed.",
        "Mentored two generations of systems programmers in C memory management, concurrency control, and assembly debugging."
      ],
      techStack: [
        "ANSI C",
        "C++",
        "POSIX Threads",
        "Unix (Solaris/BSD/Linux)",
        "TCP/IP Sockets",
        "x86 Assembly",
        "Bash/Perl"
      ],
      icon: ShieldCheck,
      color: "text-emerald-600",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      architecturePillar: "Bare Metal & Kernel Systems",
      scaleMetric: "Direct Hardware & Kernel Sockets"
    }
  ];

  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  return (
    <section id="timeline" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>30-YEAR CONTINUOUS EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Bare-Metal C in 1994 to Planetary AI in 2026.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A comprehensive, unbroken track record across three revolutions in computing: bare-metal systems, cloud microservices, and autonomous generative intelligence.
          </p>
        </div>

        {/* Era Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            const isSelected = selectedMilestone === idx;
            return (
              <button
                key={m.years}
                onClick={() => setSelectedMilestone(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border ${
                  isSelected
                    ? "bg-white border-blue-600 shadow-md ring-2 ring-blue-600/10"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                      isSelected ? "bg-blue-600 text-white border-blue-600" : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    {m.years}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? "text-blue-600" : "text-slate-400"}`} />
                </div>
                <div className="font-bold text-sm text-slate-900 line-clamp-1">{m.role}</div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-1">{m.era}</div>
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Milestone Card */}
        {(() => {
          const item = milestones[selectedMilestone];
          const Icon = item.icon;
          return (
            <div className="glass-card p-6 sm:p-8 lg:p-10 border border-slate-200 bg-white shadow-lg">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${item.badgeBg}`}>
                        {item.years}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {item.architecturePillar}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{item.role}</h3>
                    <p className="text-sm font-medium text-slate-500">{item.organization}</p>
                  </div>
                </div>

                <div className="lg:text-right bg-slate-50 lg:bg-transparent p-3 lg:p-0 rounded-lg border lg:border-none border-slate-200">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Observed Production Scale</div>
                  <div className="text-base font-bold text-slate-900 font-mono mt-0.5">{item.scaleMetric}</div>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-6 text-slate-700 leading-relaxed text-base">
                {item.summary}
              </div>

              {/* Key Achievements Grid */}
              <div className="mt-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4">
                  Key Engineering Milestones & Architectural Feats
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.keyAchievements.map((ach, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3 hover:bg-slate-50 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Leveraged */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-500 mr-2 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5" /> STACK:
                  </span>
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-800 font-semibold shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          );
        })()}

        {/* 30-Year Architectural Wisdom Quote */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shrink-0">
              30y
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm sm:text-base">
                Architectural Tenet: "Frameworks change every 3 years. Fundamental systems physics never does."
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Latency, memory locality, network saturation, cache invalidation, and distributed consensus are timeless.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="btn-secondary text-xs shrink-0 py-2.5 px-4"
            style={{ textDecoration: "none" }}
          >
            <span>Explore Deployed Architectures</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
