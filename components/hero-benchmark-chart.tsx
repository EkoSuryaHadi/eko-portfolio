"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const benchmarkData = [
  { scale: "1M Rows", duckdbTime: 0.62, nodeHeap: 9.4, throughput: 1.6 },
  { scale: "2M Rows", duckdbTime: 1.25, nodeHeap: 9.5, throughput: 1.6 },
  { scale: "3M Rows", duckdbTime: 1.82, nodeHeap: 9.5, throughput: 1.65 },
  { scale: "4M Rows", duckdbTime: 2.41, nodeHeap: 9.6, throughput: 1.66 },
  { scale: "5M Rows", duckdbTime: 3.01, nodeHeap: 9.64, throughput: 1.66 },
];

export function HeroBenchmarkChart() {
  const [activeMetric, setActiveMetric] = useState<"TIME" | "HEAP" | "THROUGHPUT">("TIME");

  return (
    <div className="space-y-4">
      {/* Chart Control Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-zinc-300 font-semibold">
            GaungNusa DuckDB Out-of-Core Execution Telemetry (5,000,000 Rows)
          </span>
        </div>

        {/* Metric Selector Pills */}
        <div className="flex gap-1 rounded-full border border-white/[0.08] bg-black/40 p-1 font-mono text-[11px]">
          <button
            onClick={() => setActiveMetric("TIME")}
            className={`rounded-full px-3 py-1 transition-all ${
              activeMetric === "TIME" ? "bg-cyan-500 text-black font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            Latency (Seconds)
          </button>
          <button
            onClick={() => setActiveMetric("HEAP")}
            className={`rounded-full px-3 py-1 transition-all ${
              activeMetric === "HEAP" ? "bg-amber-400 text-black font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            Node.js Heap (MB)
          </button>
          <button
            onClick={() => setActiveMetric("THROUGHPUT")}
            className={`rounded-full px-3 py-1 transition-all ${
              activeMetric === "THROUGHPUT" ? "bg-emerald-400 text-black font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            Rate (M Rows/s)
          </button>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {activeMetric === "TIME" ? (
            <AreaChart data={benchmarkData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#222733" />
              <XAxis dataKey="scale" stroke="#64748B" fontSize={11} fontFamily="monospace" />
              <YAxis stroke="#64748B" fontSize={11} fontFamily="monospace" unit="s" />
              <Tooltip
                contentStyle={{ backgroundColor: "#0C0E14", borderColor: "#334155", borderRadius: "8px", fontSize: "12px", fontFamily: "monospace" }}
                formatter={(val) => [`${val}s Execution Time`, "DuckDB Latency"]}
              />
              <Area type="monotone" dataKey="duckdbTime" stroke="#06B6D4" strokeWidth={2.5} fillOpacity={1} fill="url(#cyanGradient)" />
            </AreaChart>
          ) : activeMetric === "HEAP" ? (
            <AreaChart data={benchmarkData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="amberGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#222733" />
              <XAxis dataKey="scale" stroke="#64748B" fontSize={11} fontFamily="monospace" />
              <YAxis stroke="#64748B" fontSize={11} fontFamily="monospace" unit="MB" domain={[8, 11]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#0C0E14", borderColor: "#334155", borderRadius: "8px", fontSize: "12px", fontFamily: "monospace" }}
                formatter={(val) => [`${val} MB (Delta: +0.12 MB)`, "Node.js Heap"]}
              />
              <Area type="monotone" dataKey="nodeHeap" stroke="#F59E0B" strokeWidth={2.5} fillOpacity={1} fill="url(#amberGradient)" />
            </AreaChart>
          ) : (
            <BarChart data={benchmarkData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#222733" />
              <XAxis dataKey="scale" stroke="#64748B" fontSize={11} fontFamily="monospace" />
              <YAxis stroke="#64748B" fontSize={11} fontFamily="monospace" unit="M" />
              <Tooltip
                contentStyle={{ backgroundColor: "#0C0E14", borderColor: "#334155", borderRadius: "8px", fontSize: "12px", fontFamily: "monospace" }}
                formatter={(val) => [`${val}M rows/sec`, "Ingestion Speed"]}
              />
              <Bar dataKey="throughput" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Chart Footer Readout */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 rounded-xl border border-white/[0.06] bg-black/40 p-3 font-mono text-[11px] text-zinc-400">
        <div>
          <span className="text-zinc-500">MAX ROWS:</span> <span className="font-bold text-white">5,000,000</span>
        </div>
        <div>
          <span className="text-zinc-500">EXEC TIME:</span> <span className="font-bold text-cyan-400">3.01s</span>
        </div>
        <div>
          <span className="text-zinc-500">MEM DELTA:</span> <span className="font-bold text-amber-400">+0.12 MB</span>
        </div>
        <div>
          <span className="text-zinc-500">DISK SPILL:</span> <span className="font-bold text-emerald-400">ONLINE</span>
        </div>
      </div>
    </div>
  );
}
