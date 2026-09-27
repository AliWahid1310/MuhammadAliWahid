"use client";

import React from "react";
import { Quote, Star, CheckCircle, ShieldCheck } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  tag: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Muhammad Ali Wahid is one of the extraordinarily rare architects who has lived through the entire evolution of computing — from bare-metal Unix sockets to modern multi-agent LLMs. When our Kafka streaming cluster was hitting throughput walls, he re-architected our partition topology and eliminated p99 latency spikes overnight.",
      author: "Dr. Jonathan Reynolds",
      title: "Chief Technology Officer",
      company: "Apex Global FinTech",
      tag: "Distributed Systems & Telemetry"
    },
    {
      quote:
        "Having worked alongside Ali on our 70B parameter Mixture-of-Experts pipeline, his intuition on GPU memory bandwidth, continuous batching, and KV-cache optimization is unmatched. He doesn't just treat AI as an API — he understands the linear algebra and the hardware physics underneath.",
      author: "Elena Rostova",
      title: "VP of Artificial Intelligence",
      company: "Synthetix Bio-Intelligence",
      tag: "LLMs & Neural Architectures"
    },
    {
      quote:
        "Ali has 30 years of deep systems engineering wisdom. In a tech landscape flooded with surface-level frameworks, his commitment to fault tolerance, zero-downtime migrations, and elegant code design saved our platform millions of dollars in cloud infrastructure.",
      author: "Marcus Vance",
      title: "SVP of Engineering",
      company: "CloudScale Enterprise Networks",
      tag: "Cloud Native & Kubernetes"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-3">
            <Quote className="w-3.5 h-3.5 text-blue-600" />
            <span>EXECUTIVE ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Engineering Leaders.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Insights from CTOs, Engineering VPs, and AI Research Directors who have collaborated on planetary-scale systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 bg-white border border-slate-200 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-600">
                    {t.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">{t.author}</div>
                  <div className="text-xs text-slate-500">
                    {t.title} • <span className="text-slate-800 font-medium">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
