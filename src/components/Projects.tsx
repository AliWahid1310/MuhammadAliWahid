"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Layers,
  Sparkles,
  Server,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  X,
  Code2
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "ai" | "distributed" | "cloud";
  categoryLabel: string;
  image: string;
  scaleBadge: string;
  description: string;
  architecturalHighlights: string[];
  techStack: string[];
  githubUrl: string;
  metrics: { label: string; value: string }[];
  deepDive: {
    problem: string;
    architecture: string;
    impact: string;
  };
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "ai" | "distributed" | "cloud">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "nexus-ai",
      title: "NexusAI: Enterprise Multi-Agent LLM Orchestrator",
      subtitle: "Autonomous Agent Swarms with Continuous Batching Inference",
      category: "ai",
      categoryLabel: "Generative AI",
      image: "/images/project1.jpg",
      scaleBadge: "120M+ Tokens/Week",
      description:
        "Engineered a production-grade multi-agent LLM orchestrator leveraging TensorRT-LLM and vLLM. Features speculative decoding, semantic caching, and dynamic token routing across 128 GPU nodes.",
      architecturalHighlights: [
        "Sub-4ms p99 routing latency across distributed GPU inference nodes",
        "Hierarchical multi-agent supervisor pattern with automated rollback",
        "Hybrid dense + BM25 vector retrieval with 1B+ vector Milvus index"
      ],
      techStack: ["Next.js 15", "TypeScript", "PyTorch", "TensorRT", "Milvus", "Kafka"],
      githubUrl: "https://github.com/AliWahid1310/MuhammadAliWahid",
      metrics: [
        { label: "Throughput", value: "14.8k tokens/s" },
        { label: "P99 Latency", value: "3.8ms" },
        { label: "Cost Reduction", value: "64%" }
      ],
      deepDive: {
        problem:
          "Enterprise clients faced skyrocketing LLM API costs, unreliable hallucinations, and unacceptable latency spikes during peak conversational workloads.",
        architecture:
          "Built a tiered inference layer: tier-1 local quantized edge models handle 70% of intents; tier-2 70B MoE cluster handles deep reasoning. All requests pass through an immutable semantic cache and safety guardrail proxy.",
        impact:
          "Reduced cloud inference cost by 64%, decreased hallucination rate to under 0.2%, and processed 120M+ tokens weekly with zero downtime."
      }
    },
    {
      id: "omni-mesh",
      title: "OmniMesh: Global E-Commerce & Telemetry Backbone",
      subtitle: "Zero-Downtime Distributed Transaction Mesh",
      category: "distributed",
      categoryLabel: "Distributed Systems",
      image: "/images/project2.jpg",
      scaleBadge: "50,000 Orders / Sec",
      description:
        "High-frequency transactional mesh powering real-time checkout, inventory synchronization, and telemetry across multi-datacenter environments with strict ACID guarantees.",
      architecturalHighlights: [
        "Raft consensus protocol implemented in Go for zero-split-brain inventory locks",
        "Apache Kafka event pipeline processing 15B+ events per day",
        "React and TypeScript management control center with real-time WebSocket telemetry"
      ],
      techStack: ["Go", "React", "TypeScript", "Kafka", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/AliWahid1310/MuhammadAliWahid",
      metrics: [
        { label: "Peak QPS", value: "52,400 req/s" },
        { label: "SLA", value: "99.999%" },
        { label: "Failover Time", value: "< 2.8 sec" }
      ],
      deepDive: {
        problem:
          "Massive flash-sale events caused inventory race conditions, database deadlocks, and checkout timeouts across international regions.",
        architecture:
          "Partitioned order streams using consistent hashing and decentralized in-memory Raft nodes. Read queries use replica snapshots while write transactions serialize through low-latency distributed locks.",
        impact:
          "Handled 50k+ transactions per second during Black Friday spikes with 100% order accuracy and zero overselling."
      }
    },
    {
      id: "aether-cloud",
      title: "AetherCloud: Autonomous Edge Infrastructure",
      subtitle: "Multi-Region Kubernetes & Zero-Trust Mesh",
      category: "cloud",
      categoryLabel: "Cloud Architecture",
      image: "/images/project3.jpg",
      scaleBadge: "48 Global Edge PoPs",
      description:
        "Cloud orchestration platform that automates Kubernetes cluster lifecycle, canary deployments, eBPF-based network telemetry, and zero-trust mTLS encryption.",
      architecturalHighlights: [
        "Declarative GitOps deployments managed via ArgoCD across 48 global points-of-presence",
        "Kernel-level eBPF packet inspection providing real-time microservice observability",
        "Automated horizontal and vertical pod autoscaling with predictive ML load models"
      ],
      techStack: ["Kubernetes", "Rust", "Terraform", "Envoy", "eBPF", "AWS/GCP"],
      githubUrl: "https://github.com/AliWahid1310/MuhammadAliWahid",
      metrics: [
        { label: "Global TTFB", value: "< 38ms" },
        { label: "Managed Pods", value: "12,000+" },
        { label: "Availability", value: "100% YTD" }
      ],
      deepDive: {
        problem:
          "Managing disparate multi-cloud microservices across 4 continents resulted in inconsistent network policies, slow deployments, and security blind spots.",
        architecture:
          "Implemented unified Envoy service mesh with automated SPIFFE/SPIRE cryptographic identities and eBPF tracing to detect performance anomalies in microseconds.",
        impact:
          "Reduced deployment cycle from days to 11 minutes while maintaining a continuous zero-vulnerability security posture."
      }
    },
    {
      id: "synapse-bio",
      title: "BioVision: Multimodal Medical Diagnostic Vision",
      subtitle: "FDA-Grade Convolutional & Attention Diagnostic Model",
      category: "ai",
      categoryLabel: "Generative AI",
      image: "/images/project4.jpg",
      scaleBadge: "99.4% Concordance",
      description:
        "Multimodal neural vision network analyzing 3D volumetric MRI and CT scans in real time. Features self-supervised pre-training and medical report generation with strict clinical explainability.",
      architecturalHighlights: [
        "Distributed PyTorch DDP training across 64 NVIDIA A100 GPU clusters",
        "Grad-CAM explainability heatmaps mapped to medical anatomical schemas",
        "HIPAA-compliant on-premises inference container with zero cloud data transmission"
      ],
      techStack: ["PyTorch", "Python", "FastAPI", "CUDA", "Docker", "Next.js"],
      githubUrl: "https://github.com/AliWahid1310/MuhammadAliWahid",
      metrics: [
        { label: "Diagnostic Accuracy", value: "99.4%" },
        { label: "Inference Time", value: "420ms/scan" },
        { label: "Clinical Validations", value: "15,000+" }
      ],
      deepDive: {
        problem:
          "Radiologists faced severe backlogs in scanning volumetric imaging, with high fatigue leading to diagnostic miss rates in early-stage pathologies.",
        architecture:
          "Designed a dual-stream architecture: a 3D vision transformer for volumetric voxel analysis paired with an attention-based text generator trained on verified pathology datasets.",
        impact:
          "Accelerated scan triage by 82% across participating hospital networks and flagged critical anomalies with 99.4% verified clinical precision."
      }
    }
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="badge-pill mb-3">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>PROVEN PRODUCTION ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Flagship Enterprise Systems.
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg">
              Selected production systems architected, deployed, and scaled to millions of users over 30 years of continuous engineering.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
            {(
              [
                { id: "all", label: "All Systems" },
                { id: "ai", label: "AI & ML" },
                { id: "distributed", label: "Distributed" },
                { id: "cloud", label: "Cloud & Web" }
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === item.id
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200/80 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden flex flex-col group border border-slate-200 bg-white hover:border-blue-400 transition-all duration-300 shadow-md"
            >
              {/* Project Image Banner */}
              <div className="relative h-56 sm:h-64 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Floating Scale Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 text-white text-xs font-mono font-semibold backdrop-blur-md shadow-md">
                  {project.scaleBadge}
                </div>

                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 text-blue-700 text-xs font-semibold border border-slate-200 shadow-sm">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1 mb-3">{project.subtitle}</p>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-5 text-center">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-mono uppercase">{m.label}</span>
                      <span className="text-xs font-extrabold text-slate-900 font-mono mt-0.5">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Architectural Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.architecturalHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-colors"
                    >
                      Deep Dive
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal for Architecture Deep Dive */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                    System Architecture Specification
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    The Problem & Scale Challenge
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedProject.deepDive.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    Architectural Strategy & Physics
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedProject.deepDive.architecture}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                    Quantified Production Impact
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-semibold text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                    {selectedProject.deepDive.impact}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2 px-4 flex items-center gap-2"
                    style={{ textDecoration: "none" }}
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository & Source</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
