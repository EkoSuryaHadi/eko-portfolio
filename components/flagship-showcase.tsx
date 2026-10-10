"use client";

import { useState } from "react";
import { flagshipProjects } from "@/data/projects-catalog";
import {
  CheckCircle2,
  Terminal,
  ArrowRight,
  Database,
  Layers,
  Cpu,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { WindowFrame } from "@/components/window-frame";
import { KurvaupSCurveChart } from "@/components/kurvaup-scurve-chart";

export function FlagshipShowcase() {
  const [selectedFlagship, setSelectedFlagship] = useState<string>("kurvaup");

  // State for Interactive Widgets
  const [lakehouseTier, setLakehouseTier] = useState<"DUCKDB" | "BRONZE" | "SILVER" | "GOLD">("DUCKDB");
  const [depType, setDepType] = useState<"FS" | "SS" | "FF" | "SF">("FS");
  const [prob, setProb] = useState<number>(2);
  const [impact, setImpact] = useState<number>(3);
  const [pv, setPv] = useState<number>(100);
  const [ev, setEv] = useState<number>(90);
  const [ac, setAc] = useState<number>(95);

  const activeProject = flagshipProjects.find((p) => p.id === selectedFlagship) || flagshipProjects[0];

  const spi = (ev / (pv || 1)).toFixed(2);
  const cpi = (ev / (ac || 1)).toFixed(2);
  const riskScore = prob * impact;

  const getWindowUrl = () => {
    switch (activeProject.id) {
      case "kurvaup":
        return "app.kurvaup.io/scheduling/gantt-wbs-engine";
      case "gaungnusa":
        return "lakehouse.gaungnusa.io/engine/duckdb-out-of-core";
      case "safety-analytics-pro":
        return "safety.oilgas-audit.io/matrix/hazard-risk-assessment";
      default:
        return "epc.cost-delay.io/analytics/earned-value-management";
    }
  };

  return (
    <section id="flagships" className="border-b border-white/[0.08] bg-[#08090A] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.03] px-3.5 py-1 font-mono text-[11px] text-zinc-300">
            <span>CORE SYSTEMS // ARCHITECTURE BREAKDOWN</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            The 4 Flagship Production Systems
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
            In-depth architecture, live performance curves, and interactive system simulators for our primary
            enterprise engineering platforms.
          </p>

          {/* Segmented Pill Selector (Pinterest / Raycast Style) */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] p-1.5 backdrop-blur-md">
            {flagshipProjects.map((proj) => {
              const isSelected = proj.id === selectedFlagship;
              return (
                <button
                  key={proj.id}
                  onClick={() => setSelectedFlagship(proj.id)}
                  className={`rounded-full px-5 py-2 text-xs font-medium transition-all duration-200 ${
                    isSelected
                      ? "bg-white text-zinc-950 shadow-lg font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {proj.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* PINTEREST SHOWCASE: Realistic macOS Window Container */}
        <div className="mt-12">
          <WindowFrame
            title={activeProject.name}
            url={getWindowUrl()}
            badge={activeProject.status}
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left Column: System Narrative & Benchmarks */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400 font-semibold">
                      {activeProject.status}
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs text-zinc-400 font-medium">{activeProject.industry}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {activeProject.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    {activeProject.summary}
                  </p>

                  {/* Metrics Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    {activeProject.metrics.map((m, idx) => (
                      <div key={idx} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">{m.label}</div>
                        <div className="mt-1 font-mono text-sm font-bold text-white">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Architectural Highlights */}
                  <div className="mt-6">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                      Architectural Highlights & Guardrails
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {activeProject.architectureHighlights.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 border-t border-white/[0.08] pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Interactive Visual Widget */}
              <div className="flex flex-col justify-center rounded-xl border border-white/[0.08] bg-[#0A0B0E] p-5">
                {/* 1. Kurvaup Showcase: Live S-Curve Recharts + WBS Topology */}
                {activeProject.id === "kurvaup" && (
                  <div className="space-y-4">
                    <KurvaupSCurveChart />

                    {/* Interactive Topology Selector */}
                    <div className="pt-2 border-t border-white/[0.08] font-mono text-xs">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-zinc-400">Dependency Mode:</span>
                        <div className="flex gap-1 rounded-md border border-white/[0.08] bg-black/40 p-0.5">
                          {(["FS", "SS", "FF", "SF"] as const).map((mode) => (
                            <button
                              key={mode}
                              onClick={() => setDepType(mode)}
                              className={`rounded px-2.5 py-1 ${
                                depType === mode
                                  ? "bg-amber-400 text-black font-bold"
                                  : "text-zinc-400 hover:text-white"
                              }`}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg border border-white/[0.06] bg-black/40 p-2.5 text-[11px] text-zinc-300">
                        {depType === "FS" && "Finish-to-Start (FS): Task B begins only after Task A finishes."}
                        {depType === "SS" && "Start-to-Start (SS): Task B starts in parallel with Task A."}
                        {depType === "FF" && "Finish-to-Finish (FF): Task B finishes synchronously with Task A."}
                        {depType === "SF" && "Start-to-Finish (SF): Task B cannot finish until Task A starts."}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. GaungNusa Showcase: Storage Tiers & Execution Guard */}
                {activeProject.id === "gaungnusa" && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="grid grid-cols-4 gap-1 rounded-lg border border-white/[0.08] bg-black/40 p-1">
                      {(["DUCKDB", "BRONZE", "SILVER", "GOLD"] as const).map((tier) => (
                        <button
                          key={tier}
                          onClick={() => setLakehouseTier(tier)}
                          className={`rounded-md py-1.5 text-center transition-all ${
                            lakehouseTier === tier
                              ? "bg-cyan-500 text-black font-bold"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>

                    <div className="rounded-xl border border-white/[0.08] bg-[#0E1014] p-4 text-zinc-300">
                      {lakehouseTier === "DUCKDB" && (
                        <div className="space-y-2">
                          <div className="text-cyan-400 font-bold">DuckDB Out-of-Core Execution:</div>
                          <div>• Memory Ceiling: 4.0 GB max_memory (Strict limit)</div>
                          <div>• SSD Temp Spill Dir: ./data/duckdb_temp (Verified Active)</div>
                          <div>• Agregasi 5,000,000 Baris Data: Selesai dalam 3.01 detik</div>
                          <div>• Node.js Heap Delta: Hanya +0.12 MB (Zero RAM leak)</div>
                          <div className="text-emerald-400 mt-2 font-semibold">✓ STATUS: Out-of-Core Ready</div>
                        </div>
                      )}

                      {lakehouseTier === "BRONZE" && (
                        <div className="space-y-2">
                          <div className="text-amber-400 font-bold">Bronze Storage Layer (MinIO S3):</div>
                          <div>• Format: Raw immutable JSON / Avro / Event streams</div>
                          <div>• Throughput: 1,000 events/sec micro-batch buffer</div>
                          <div>• Query Access: Append-only partition scheme</div>
                          <div>• Cold Archive: 90-day retention replication</div>
                        </div>
                      )}

                      {lakehouseTier === "SILVER" && (
                        <div className="space-y-2">
                          <div className="text-zinc-200 font-bold">Silver Cleaned Layer (MinIO S3):</div>
                          <div>• Columnar Parquet with Snappy compression</div>
                          <div>• Schema validation & automated deduplication</div>
                          <div>• DuckDB / Polars vectorized transformation</div>
                          <div>• ~18ms latency per 100k partition scan</div>
                        </div>
                      )}

                      {lakehouseTier === "GOLD" && (
                        <div className="space-y-2">
                          <div className="text-indigo-400 font-bold">Gold Analytical Mart (PostgreSQL / DuckDB):</div>
                          <div>• Dimensional reporting tables</div>
                          <div>• Next.js Server Components & WebSocket bus</div>
                          <div>• QueryGuard SQL AST-level injection defense</div>
                          <div>• Multi-tenant tenant_id isolation</div>
                        </div>
                      )}
                    </div>

                    <div className="rounded-lg border border-white/[0.06] bg-black/40 p-3 text-[11px] text-zinc-400">
                      QueryGuard: Proactively intercepts DDL (`DROP`, `ALTER`), DML (`DELETE`, `TRUNCATE`), and chained SQL queries.
                    </div>
                  </div>
                )}

                {/* 3. Safety Analytics Pro Showcase: Interactive Risk Matrix */}
                {activeProject.id === "safety-analytics-pro" && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="text-zinc-300 font-semibold">
                      Interactive 3×3 Industrial Hazard Severity Matrix (Click cells):
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[3, 2, 1].map((pVal) =>
                        [1, 2, 3].map((iVal) => {
                          const isSelected = prob === pVal && impact === iVal;
                          const score = pVal * iVal;
                          const cellColor =
                            score >= 6 ? "bg-red-500/10 border-red-500/50 text-red-300" :
                            score >= 3 ? "bg-amber-500/10 border-amber-500/50 text-amber-300" :
                            "bg-emerald-500/10 border-emerald-500/50 text-emerald-300";

                          return (
                            <button
                              key={`${pVal}-${iVal}`}
                              onClick={() => {
                                setProb(pVal);
                                setImpact(iVal);
                              }}
                              className={`rounded-xl border p-3 text-center transition-all ${cellColor} ${
                                isSelected ? "ring-2 ring-white font-bold scale-105 shadow-lg" : "hover:opacity-100 opacity-70"
                              }`}
                            >
                              <div>P{pVal} × I{iVal}</div>
                              <div className="text-[10px] mt-0.5">Score: {score}</div>
                            </button>
                          );
                        })
                      )}
                    </div>

                    <div className="rounded-xl border border-white/[0.08] bg-[#0E1014] p-3.5 text-zinc-300">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400">Evaluated Severity Metric:</span>
                        <span className="font-bold text-white text-sm">{riskScore} / 9</span>
                      </div>
                      <div className="mt-2 text-[11px] leading-relaxed">
                        {riskScore >= 6 ? (
                          <span className="text-red-400">CRITICAL RISK: Mandatory JSA overhaul & Plant PTW signoff.</span>
                        ) : riskScore >= 3 ? (
                          <span className="text-amber-400">MODERATE RISK: Standard engineering controls & supervisor monitoring.</span>
                        ) : (
                          <span className="text-emerald-400">LOW RISK: Routine toolbox meeting & standard PPE compliance.</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. EPC Delay Predictor Showcase: EVM Sliders */}
                {activeProject.id === "epc-delay-cost" && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="text-zinc-300 font-semibold">
                      Earned Value Management (EVM) Parameter Simulator:
                    </div>

                    <div className="space-y-3 rounded-xl border border-white/[0.08] bg-[#0E1014] p-4">
                      <div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-zinc-400">Planned Value (PV):</span>
                          <span className="text-white">${pv}K</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="200"
                          value={pv}
                          onChange={(e) => setPv(Number(e.target.value))}
                          className="w-full accent-white mt-1"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-zinc-400">Earned Value (EV):</span>
                          <span className="text-cyan-400">${ev}K</span>
                        </div>
                        <input
                          type="range"
                          min="30"
                          max="200"
                          value={ev}
                          onChange={(e) => setEv(Number(e.target.value))}
                          className="w-full accent-cyan-400 mt-1"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-zinc-400">Actual Cost (AC):</span>
                          <span className="text-emerald-400">${ac}K</span>
                        </div>
                        <input
                          type="range"
                          min="40"
                          max="200"
                          value={ac}
                          onChange={(e) => setAc(Number(e.target.value))}
                          className="w-full accent-emerald-400 mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="rounded-xl border border-white/[0.08] bg-[#0E1014] p-3 text-center">
                        <div className="text-[10px] text-zinc-400">SPI (Schedule Index)</div>
                        <div className={`text-base font-bold ${Number(spi) >= 1 ? "text-emerald-400" : "text-red-400"}`}>
                          {spi}
                        </div>
                        <div className="text-[9px] text-zinc-500">{Number(spi) >= 1 ? "Ahead" : "Slippage"}</div>
                      </div>

                      <div className="rounded-xl border border-white/[0.08] bg-[#0E1014] p-3 text-center">
                        <div className="text-[10px] text-zinc-400">CPI (Cost Index)</div>
                        <div className={`text-base font-bold ${Number(cpi) >= 1 ? "text-emerald-400" : "text-red-400"}`}>
                          {cpi}
                        </div>
                        <div className="text-[9px] text-zinc-500">{Number(cpi) >= 1 ? "Under Budget" : "Overrun"}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </WindowFrame>
        </div>
      </div>
    </section>
  );
}
