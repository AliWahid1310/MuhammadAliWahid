"use client";

import React, { useState } from "react";
import {
  Cpu,
  Server,
  Globe2,
  Shield,
  Layers,
  Zap,
  CheckCircle2,
  ArrowRight,
  Database,
  Workflow
} from "lucide-react";

interface Domain {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  icon: any;
  accent: string;
  accentBg: string;
  keyCapabilities: string[];
  productionScale: string;
  architectureHighlight: string;
}

export default function Domains() {
  const domains: Domain[] = [
    {
      id: "ai-ml",
      title: "Generative AI & Autonomous Agent Swarms",
      badge: "Applied Deep Learning",
      tagline: "Custom LLMs, Vector Retrieval & Edge Neural Inference",
      description:
        "Designing enterprise-ready generative pipelines, fine-tuned transformer architectures, low-rank adaptations (LoRA), hybrid RAG retrieval systems, and self-correcting agent swarms that run reliably without hallucination.",
      icon: Cpu,
      accent: "text-purple-600",
      accentBg: "bg-purple-50 border-purple-100",
      keyCapabilities: [
        "vLLM & TensorRT-LLM cluster deployment with continuous batching & PagedAttention",
        "Multi-Agent LangGraph & AutoGen architectures with guardrails & audit trails",
        "Hybrid Vector + BM25 dense-sparse search over billions of high-dimensional embeddings",
        "Quantization (FP8, INT4, AWQ) for high-throughput edge and server inference"
      ],
      productionScale: "100k+ concurrent tokens/sec • 99.8% semantic precision",
      architectureHighlight: "Zero-latency multi-tier semantic cache with automatic fallback"
    },
    {
      id: "distributed-systems",
      title: "Planet-Scale Distributed Systems",
      badge: "High Concurrency",
      tagline: "Event-Driven Meshes, Sharded Backends & Low-Latency Consensus",
      description:
        "Engineering distributed systems that withstand split-brain failures, traffic spikes, and network partitions. Over three decades of tuning distributed consensus (Raft, Paxos), Kafka streaming topologies, and high-frequency messaging.",
      icon: Server,
      accent: "text-blue-600",
      accentBg: "bg-blue-50 border-blue-100",
      keyCapabilities: [
        "Apache Kafka & RabbitMQ event backbones processing 15B+ daily telemetry events",
        "Distributed database partitioning, read/write splitting, and conflict-free replication (CRDTs)",
        "Zero-downtime multi-region active-active cluster failover in under 3 seconds",
        "Kernel-level socket tuning and eBPF network observability for sub-millisecond p99"
      ],
      productionScale: "15 Billion events/day • Sub-3ms internal round-trip",
      architectureHighlight: "Multi-datacenter Raft consensus with zero data loss guarantee"
    },
    {
      id: "cloud-fullstack",
      title: "Modern Full-Stack & Cloud Infrastructure",
      badge: "Enterprise Modern Web",
      tagline: "Next.js 15, TypeScript, Kubernetes & Edge Runtimes",
      description:
        "Combining ultra-modern frontend engineering with rock-solid cloud orchestration. Building high-performance single-page and server-rendered web applications backed by declarative Kubernetes, Terraform, and cloud-native microservices.",
      icon: Globe2,
      accent: "text-indigo-600",
      accentBg: "bg-indigo-50 border-indigo-100",
      keyCapabilities: [
        "Next.js App Router, React 19 Server Components, and TypeScript strict architectures",
        "Kubernetes (EKS/GKE) cluster automation with ArgoCD GitOps and service meshes (Istio/Envoy)",
        "Infrastructure as Code (Terraform, Pulumi) across multi-cloud environments",
        "Edge computing and serverless runtimes for instant sub-50ms global First Contentful Paint"
      ],
      productionScale: "99.999% SLA • Sub-50ms Global TTFB",
      architectureHighlight: "Serverless edge compute with distributed PostgreSQL connection pooling"
    },
    {
      id: "security-governance",
      title: "Zero-Trust Security & AI Governance",
      badge: "Mission Critical",
      tagline: "Cryptographic Integrity, Compliance & Model Alignment",
      description:
        "Safeguarding mission-critical systems against adversarial attacks, prompt injections, and data leakage. Architecting compliance-grade solutions meeting SOC2, ISO27001, HIPAA, and EU AI Act requirements.",
      icon: Shield,
      accent: "text-emerald-600",
      accentBg: "bg-emerald-50 border-emerald-100",
      keyCapabilities: [
        "End-to-end Zero-Trust mTLS service mesh communication with automated key rotation",
        "Adversarial LLM red-teaming, prompt injection firewalls, and PII masking",
        "Differential privacy and federated learning protocols for healthcare & fintech",
        "Continuous automated vulnerability scanning and immutable audit ledgering"
      ],
      productionScale: "Zero data breaches in 30 years of enterprise stewardship",
      architectureHighlight: "Hardware Security Module (HSM) integrated cryptographic tokenization"
    }
  ];

  const [activeDomain, setActiveDomain] = useState<string>("ai-ml");

  return (
    <section id="domains" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL SPECIALIZATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Four Core Pillars of Engineering Mastery.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Decades of applied knowledge synthesized into enterprise-ready architectures that balance extreme speed, ironclad fault-tolerance, and state-of-the-art AI.
          </p>
        </div>

        {/* Interactive Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain) => {
            const Icon = domain.icon;
            const isCurrent = activeDomain === domain.id;
            return (
              <div
                key={domain.id}
                onClick={() => setActiveDomain(domain.id)}
                className={`glass-card p-6 sm:p-8 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  isCurrent ? "border-blue-500 ring-2 ring-blue-500/10 shadow-lg" : "hover:border-slate-300"
                }`}
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${domain.accentBg}`}>
                    <Icon className={`w-6 h-6 ${domain.accent}`} />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {domain.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-slate-900 mb-1">{domain.title}</h3>
                <p className="text-xs font-mono text-blue-600 font-semibold mb-3">{domain.tagline}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{domain.description}</p>

                {/* Capabilities List */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                  {domain.keyCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Architectural Metric */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
                  <span className="font-mono text-slate-500">Observed Scale:</span>
                  <span className="font-mono font-bold text-slate-900">{domain.productionScale}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
