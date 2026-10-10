"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const sCurveData = [
  { week: "W1", planned: 4, actual: 3.8 },
  { week: "W2", planned: 9, actual: 9.1 },
  { week: "W3", planned: 16, actual: 15.4 },
  { week: "W4", planned: 26, actual: 24.8 },
  { week: "W5", planned: 39, actual: 38.2 },
  { week: "W6", planned: 54, actual: 52.0 },
  { week: "W7", planned: 69, actual: 68.4 },
  { week: "W8", planned: 81, actual: 82.1 },
  { week: "W9", planned: 90, actual: 91.5 },
  { week: "W10", planned: 96, actual: 96.8 },
  { week: "W11", planned: 99, actual: 99.2 },
  { week: "W12", planned: 100, actual: 100 },
];

export function KurvaupSCurveChart() {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-zinc-200 font-semibold font-sans">
            Kurvaup S-Curve Engine: Planned Baseline (BCWS) vs Actual Earned Value (BCWP)
          </span>
        </div>
        <span className="text-emerald-400 font-semibold font-mono">STATUS: ON-TRACK (SPI: 1.01)</span>
      </div>

      <div className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sCurveData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="planGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#38BDF8" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="actualGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
            <XAxis dataKey="week" stroke="#64748B" fontSize={10} />
            <YAxis stroke="#64748B" fontSize={10} unit="%" domain={[0, 100]} />
            <Tooltip
              contentStyle={{ backgroundColor: "#0C0E14", borderColor: "#334155", borderRadius: "8px", fontSize: "11px" }}
              formatter={(val, name) => [`${val}% Cumulative Progress`, name === "planned" ? "Planned (BCWS)" : "Earned (BCWP)"]}
            />
            <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "6px" }} />
            <Area type="monotone" dataKey="planned" name="Planned Baseline (BCWS)" stroke="#38BDF8" strokeWidth={2} fillOpacity={1} fill="url(#planGrad)" />
            <Area type="monotone" dataKey="actual" name="Actual Earned (BCWP)" stroke="#F59E0B" strokeWidth={2.5} fillOpacity={1} fill="url(#actualGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between rounded-lg border border-white/[0.06] bg-black/40 px-3 py-2 text-[10px] text-zinc-400">
        <span>BASELINE PROGRESS: 100.0%</span>
        <span>ACTUAL EARNED PROGRESS: 100.0%</span>
        <span className="text-emerald-400">SCHEDULE VARIANCE (SV): +0.2%</span>
      </div>
    </div>
  );
}
