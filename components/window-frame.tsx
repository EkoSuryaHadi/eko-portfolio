"use client";

import React from "react";
import { Terminal, Shield, ExternalLink } from "lucide-react";

interface WindowFrameProps {
  title: string;
  url?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}

export function WindowFrame({ title, url, badge, children, className = "" }: WindowFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0C0E12] shadow-2xl shadow-black/80 transition-all duration-300 hover:border-white/[0.22] ${className}`}
    >
      {/* macOS Window Title Bar */}
      <div className="flex h-10 items-center justify-between border-b border-white/[0.08] bg-[#12151B] px-4 font-mono text-xs">
        {/* Window Traffic Light Controls */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56] transition-opacity hover:opacity-80" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E] transition-opacity hover:opacity-80" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F] transition-opacity hover:opacity-80" />
        </div>

        {/* Center: Window Title or URL Bar */}
        <div className="flex items-center gap-2 rounded-md border border-white/[0.06] bg-black/40 px-3 py-1 text-[11px] text-zinc-400">
          <Terminal className="h-3 w-3 text-cyan-400" />
          <span className="truncate max-w-[240px] sm:max-w-[340px] font-sans text-zinc-300">
            {url || title}
          </span>
        </div>

        {/* Right Badge */}
        <div className="flex items-center gap-2">
          {badge ? (
            <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
              {badge}
            </span>
          ) : (
            <span className="text-[10px] text-zinc-500 font-mono">SYS // READY</span>
          )}
        </div>
      </div>

      {/* Window Canvas Body */}
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}
