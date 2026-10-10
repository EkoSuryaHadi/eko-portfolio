"use client";

import { Cpu, HardHat, Database, Wrench, ShieldAlert, LineChart, Server, GitFork } from "lucide-react";
import { WindowFrame } from "@/components/window-frame";

export function DomainRadar() {
  return (
    <section id="radar" className="border-b border-white/[0.08] bg-[#08090A] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="border-b border-white/[0.06] pb-8">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
            <span>COMPETENCY RADAR // THE DUAL ADVANTAGE</span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Software Architecture Meets Industrial Depth
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Bridging heavy operational domains (EPC Scheduling, Oil & Gas HSE, EVM Cost Control)
            with modern systems engineering (DuckDB out-of-core, Lakehouses, AI Autonomous Agents).
          </p>
        </div>

        {/* Dual Pillar Window Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Pillar 1: Software & Systems Architecture */}
          <WindowFrame
            title="Systems & Data Architecture"
            url="stack://engines/duckdb-lakehouse-ai"
            badge="ENGINEERING CORE"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-cyan-400">
                <Cpu className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">Modern Data & Systems Architecture</h3>
                <p className="font-mono text-xs text-zinc-400">Out-of-Core Engines & Production Web</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 font-sans">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
                  <Database className="h-4 w-4 text-cyan-400" />
                  <span>Out-of-Core & Lakehouse Analytics</span>
                </div>
                <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                  DuckDB native query engine with SSD spillover buffer, MinIO S3 object lakehouse tiering
                  (Bronze/Silver/Gold), Polars/Arrow vectorized memory processing, and Snappy Parquet storage.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
                  <Server className="h-4 w-4 text-cyan-400" />
                  <span>Full-Stack Web & Real-Time Ingestion</span>
                </div>
                <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                  Next.js (App Router), TypeScript, PostgreSQL, Prisma ORM, WebSocket micro-batch streaming buses,
                  and Zustand state synchronization for 60fps virtualized timelines.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
                  <GitFork className="h-4 w-4 text-cyan-400" />
                  <span>AI Agents & Predictive Machine Learning</span>
                </div>
                <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                  Multi-agent autonomous tool coordination (LangChain / Claude API), Model Context Protocol (MCP),
                  XGBoost predictive models for schedule variance, and FastAPI microservices.
                </p>
              </div>
            </div>
          </WindowFrame>

          {/* Pillar 2: Heavy Industry Domain Depth */}
          <WindowFrame
            title="Heavy Industry Domain Expertise"
            url="domain://operations/epc-oilgas-hse"
            badge="FIELD MASTERY"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-amber-400">
                <HardHat className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">Heavy Industry & Field Domain Depth</h3>
                <p className="font-mono text-xs text-zinc-400">EPC, Oil & Gas, HSE & Project Controls</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 font-sans">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
                  <LineChart className="h-4 w-4 text-amber-400" />
                  <span>EPC Scheduling & Critical Path Method (CPM)</span>
                </div>
                <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                  Hierarchical Work Breakdown Structures (WBS), multi-calendar non-working exception logic,
                  complex 4-way dependency graphs (FS, SS, FF, SF + Lag), and S-Curve baseline variance tracking.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
                  <ShieldAlert className="h-4 w-4 text-amber-400" />
                  <span>Oil & Gas HSE & Industrial Compliance</span>
                </div>
                <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                  Quantitative Risk Assessment (QRA), 3x3/5x5 Hazard Severity Matrices, ESDM & OSHA inspection standards,
                  Digital Permit to Work (PTW) workflows, and TRIR/LTIFR safety statistical tracking.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-white">
                  <Wrench className="h-4 w-4 text-amber-400" />
                  <span>Earned Value Management & Project Finance</span>
                </div>
                <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                  Earned Value Analysis calculating PV, EV, AC, Schedule Performance Index (SPI), Cost Performance
                  Index (CPI), CBS-WBS reconciliation, and multi-contractor milestone valuation.
                </p>
              </div>
            </div>
          </WindowFrame>
        </div>
      </div>
    </section>
  );
}
