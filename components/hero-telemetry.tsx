"use client";

import { ArrowRight, Database, GitBranch, ShieldCheck, Cpu, Terminal, ArrowUpRight, Sparkles } from "lucide-react";
import { WindowFrame } from "@/components/window-frame";
import { HeroBenchmarkChart } from "@/components/hero-benchmark-chart";

interface BentoMetric {
  value: string;
  label: string;
  description: string;
  badge: string;
  icon: typeof Database;
}

const metrics: BentoMetric[] = [
  {
    value: "3.01s",
    label: "DuckDB Out-of-Core Aggregation",
    description: "5,000,000 synthetic rows aggregated out-of-core with just +0.12 MB Node.js heap delta.",
    badge: "BENCHMARK PASS",
    icon: Database,
  },
  {
    value: "50+",
    label: "Engineered Repositories",
    description: "Multi-discipline systems across EPC scheduling, data lakehouse, AI agents, and HSE.",
    badge: "PRODUCTION ARCHIVE",
    icon: GitBranch,
  },
  {
    value: "100%",
    label: "Zero Data Loss Streaming",
    description: "1,000 EPS burst micro-batching with QueryGuard SQL AST injection prevention.",
    badge: "ZERO LOSS BUFFER",
    icon: ShieldCheck,
  },
  {
    value: "FS·SS·FF·SF",
    label: "WBS Dependency Engine",
    description: "Recursive critical path method with custom non-working calendar exceptions and lag.",
    badge: "TOPOLOGY CORE",
    icon: Cpu,
  },
];

export function HeroTelemetry() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#08090A] py-16 sm:py-24">
      {/* Pinterest-Style Ambient Lighting & Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.12)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 h-96 w-[54rem] rounded-full bg-cyan-500/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Eyebrow Status Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-4 py-1 text-xs text-zinc-300 shadow-xl backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] text-zinc-400">SYS // ONLINE</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-200 font-medium">Oil & Gas · EPC Scheduling · Big Data Lakehouse · AI</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="mx-auto mt-6 max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Heavy Industry Domain Depth.{" "}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-amber-300 bg-clip-text text-transparent">
              Modern Data & AI Engineering.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Engineering high-throughput out-of-core data engines (DuckDB), mathematical project scheduling
            graphs (Kurvaup), autonomous AI agents, and industrial safety compliance systems built on verified production benchmarks.
          </p>

          {/* Action CTAs */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#flagships"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold text-zinc-950 shadow-lg shadow-white/10 transition-all duration-200 hover:bg-zinc-200 hover:scale-[1.02]"
            >
              <span>Explore The 4 Flagships</span>
              <ArrowRight className="h-3.5 w-3.5 text-zinc-600 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <a
              href="#vault"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-6 py-3 text-xs font-medium text-zinc-200 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
            >
              <Database className="h-3.5 w-3.5 text-cyan-400" />
              <span>Browse 50+ Project Vault</span>
            </a>
          </div>
        </div>

        {/* PINTEREST SHOWCASE: Realistic macOS Window Frame with Live Interactive Chart */}
        <div className="mx-auto mt-14 max-w-5xl">
          <WindowFrame
            title="GaungNusa Lakehouse Engine Telemetry"
            url="engine.gaungnusa.io/lakehouse/duckdb-out-of-core-v16"
            badge="ACTIVE TELEMETRY"
          >
            <HeroBenchmarkChart />
          </WindowFrame>
        </div>

        {/* Bento Telemetry Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0E1013]/90 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-[#121419]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-colors group-hover:border-cyan-400/50 group-hover:text-cyan-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                    {item.badge}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-2xl font-extrabold tracking-tight text-white font-mono sm:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-zinc-200">
                    {item.label}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
