"use client";

import React, { useState } from "react";
import {
  Code2,
  Cpu,
  Server,
  Database,
  Layers,
  ShieldCheck,
  Zap,
  Terminal,
  Award
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: {
    name: string;
    years: string;
    level: "Master" | "Principal" | "Expert";
    note: string;
  }[];
}

export default function SkillsMatrix() {
  const categories: SkillCategory[] = [
    {
      title: "Core Languages & Runtimes",
      icon: Code2,
      skills: [
        { name: "TypeScript / JavaScript", years: "14y", level: "Principal", note: "Strict typing, AST transformations, high-performance web applications" },
        { name: "Python 3.x", years: "20y", level: "Master", note: "PyTorch, CUDA extensions, CPython internals, async IO, FastAPI" },
        { name: "Go (Golang)", years: "12y", level: "Master", note: "Concurrent channels, Raft consensus, microsecond network daemons" },
        { name: "Rust", years: "8y", level: "Expert", note: "Zero-cost abstractions, memory-safe kernels, eBPF filters, WebAssembly" },
        { name: "C / C++", years: "30y", level: "Master", note: "Bare-metal POSIX, kernel networking, memory layout, low-latency SIMD" },
        { name: "SQL & Query Languages", years: "28y", level: "Master", note: "Query planning, B-Tree tuning, partitioning, distributed joins" }
      ]
    },
    {
      title: "AI, Machine Learning & Neural Systems",
      icon: Cpu,
      skills: [
        { name: "PyTorch & TensorRT-LLM", years: "8y", level: "Principal", note: "Distributed data parallel (DDP), pipeline parallel, continuous batching" },
        { name: "Generative AI & LLM Fine-Tuning", years: "6y", level: "Principal", note: "LoRA, QLoRA, speculative decoding, alignment, safety guardrails" },
        { name: "Agentic Systems (LangGraph/AutoGen)", years: "4y", level: "Principal", note: "Multi-agent autonomous swarms, tool dispatch, stateful reflection" },
        { name: "Vector Databases & Dense Retrieval", years: "5y", level: "Master", note: "Milvus, Pinecone, pgvector, HNSW indexing, hybrid BM25 search" },
        { name: "Computer Vision & Transformers", years: "10y", level: "Master", note: "ViT, 3D medical volumetric segmentation, multimodal fusion" },
        { name: "CUDA & GPU Acceleration", years: "9y", level: "Expert", note: "Kernel fusion, memory bandwidth optimization, FP8 matrix operations" }
      ]
    },
    {
      title: "Distributed Infrastructure & Cloud",
      icon: Server,
      skills: [
        { name: "Kubernetes & Service Mesh", years: "12y", level: "Master", note: "Istio, Envoy, multi-cluster federation, custom operators, GitOps" },
        { name: "Apache Kafka & Event Streaming", years: "14y", level: "Master", note: "Partitioning topologies, zero-copy socket transfers, 15B+ events/day" },
        { name: "Redis & In-Memory Shards", years: "16y", level: "Master", note: "Cluster sharding, cache stampede prevention, distributed mutexes" },
        { name: "AWS, GCP & Cloud Native", years: "18y", level: "Principal", note: "Multi-region active-active architectures, VPC peering, IAM zero-trust" },
        { name: "Terraform & IaC", years: "10y", level: "Master", note: "Declarative infrastructure automation, immutable state management" },
        { name: "Linux Kernel & eBPF", years: "26y", level: "Master", note: "Network socket tuning, zero-copy sendfile, observability probes" }
      ]
    },
    {
      title: "Architectural Paradigms",
      icon: Layers,
      skills: [
        { name: "High-Concurrency Low-Latency", years: "30y", level: "Master", note: "Non-blocking I/O, ring buffers, lock-free data structures" },
        { name: "Distributed Consensus & Raft", years: "16y", level: "Master", note: "Quorum replication, leader election, split-brain resolution" },
        { name: "Event-Driven & CQRS", years: "18y", level: "Master", note: "Command Query Responsibility Segregation, transactional outbox" },
        { name: "Zero-Trust Security & mTLS", years: "15y", level: "Principal", note: "Cryptographic identities, SPIFFE/SPIRE, key rotation, SOC2" },
        { name: "Modern Web (Next.js / React)", years: "12y", level: "Principal", note: "Server components, streaming SSR, edge middleware, responsive UI" },
        { name: "System Physics & Observability", years: "30y", level: "Master", note: "Distributed tracing (OpenTelemetry), p99 latency profiling" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-3">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>DEEP TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technical Mastery Matrix.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A comprehensive overview of competencies refined across three decades of production engineering and mission-critical system design.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 bg-white border border-slate-200 shadow-md flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                    <span className="text-xs font-mono text-slate-500">Battle-tested in enterprise production</span>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3.5 flex-1">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-50/70 hover:bg-slate-50 border border-slate-200/80 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-slate-900">{skill.name}</span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                              skill.level === "Master"
                                ? "bg-slate-900 text-white"
                                : skill.level === "Principal"
                                ? "bg-blue-600 text-white"
                                : "bg-purple-600 text-white"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          {skill.years}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{skill.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
