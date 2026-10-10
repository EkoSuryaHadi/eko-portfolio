"use client";

import { useState, useMemo } from "react";
import { allProjects, CATEGORY_FILTERS, ProjectCategory, ProjectRecord } from "@/data/projects-catalog";
import {
  Search,
  LayoutGrid,
  Table as TableIcon,
  X,
  FolderGit2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { WindowFrame } from "@/components/window-frame";

export function ProjectVault() {
  const [activeCategory, setActiveCategory] = useState<"ALL" | ProjectCategory>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"GRID" | "TABLE">("GRID");
  const [inspectedProject, setInspectedProject] = useState<ProjectRecord | null>(null);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((item) => {
      const matchesCategory = activeCategory === "ALL" || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.stack.some((t) => t.toLowerCase().includes(query)) ||
        item.industry.toLowerCase().includes(query) ||
        item.repoFolder.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="vault" className="border-b border-white/[0.08] bg-[#08090A] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.06] pb-8 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
              <span>EXPLORER // PINTEREST BENTO VAULT</span>
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              The 50+ Repository Archive
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Explore the complete portfolio of verified industrial systems, mathematical engines,
              and AI workflows. Each card represents an engineered repository.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span className="text-zinc-500">INDEX:</span>
            <span className="font-bold text-white">{filteredProjects.length}</span>
            <span className="text-zinc-500">/ {allProjects.length} SYSTEMS</span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-1.5">
            {CATEGORY_FILTERS.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`rounded-full px-4 py-1.5 text-xs transition-all duration-150 ${
                    isActive
                      ? "bg-white font-semibold text-zinc-950 shadow-md"
                      : "border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box & View Mode Toggle */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-72">
              <Search className="absolute left-3.5 top-2.5 h-3.5 w-3.5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search repo, stack, domain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-white/[0.10] bg-white/[0.03] py-1.5 pl-9 pr-3 text-xs text-white placeholder-zinc-500 transition-all focus:border-white/25 focus:bg-white/[0.05] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-zinc-500 hover:text-white"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* View Switcher */}
            <div className="flex rounded-full border border-white/[0.08] bg-white/[0.02] p-0.5">
              <button
                onClick={() => setViewMode("GRID")}
                className={`rounded-full p-1.5 transition-all ${
                  viewMode === "GRID" ? "bg-white text-zinc-950" : "text-zinc-400 hover:text-white"
                }`}
                title="Grid"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setViewMode("TABLE")}
                className={`rounded-full p-1.5 transition-all ${
                  viewMode === "TABLE" ? "bg-white text-zinc-950" : "text-zinc-400 hover:text-white"
                }`}
                title="Table"
              >
                <TableIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* PINTEREST BENTO GRID: Mini App Window Cards */}
        {viewMode === "GRID" && (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setInspectedProject(proj)}
                className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0C0E13] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl hover:shadow-cyan-500/5"
              >
                {/* Mini macOS Window Header */}
                <div className="flex h-8 items-center justify-between border-b border-white/[0.06] bg-[#12151C] px-3.5 font-mono text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                    <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                    <span className="ml-2 text-zinc-500 truncate max-w-[140px]">{proj.slug}</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">{proj.status}</span>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-zinc-400">
                      {proj.categoryLabel}
                    </span>
                    {proj.isFlagship && (
                      <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[9px] font-mono text-amber-300 font-bold">
                        FLAGSHIP
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-base font-bold text-white transition-colors group-hover:text-cyan-300">
                    {proj.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-zinc-400 line-clamp-3">
                    {proj.summary}
                  </p>

                  <div className="mt-4 border-t border-white/[0.06] pt-3">
                    <div className="flex flex-wrap gap-1">
                      {proj.stack.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded border border-white/[0.06] bg-white/[0.02] px-1.5 py-0.5 font-mono text-[9px] text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {proj.stack.length > 4 && (
                        <span className="rounded bg-white/[0.02] px-1 py-0.5 font-mono text-[9px] text-zinc-500">
                          +{proj.stack.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                      <span className="truncate max-w-[180px]">{proj.repoFolder}</span>
                      <span className="inline-flex items-center gap-0.5 text-zinc-300 group-hover:text-cyan-300">
                        <span>Inspect</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Compact Table View */}
        {viewMode === "TABLE" && (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0E1013]">
            <table className="w-full text-left font-mono text-xs">
              <thead className="border-b border-white/[0.06] bg-white/[0.02] text-zinc-400">
                <tr>
                  <th className="py-3 px-4 font-medium">Repository / System</th>
                  <th className="py-3 px-4 font-medium">Domain</th>
                  <th className="py-3 px-4 font-medium">Status</th>
                  <th className="py-3 px-4 font-medium">Tech Stack</th>
                  <th className="py-3 px-4 font-medium text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-zinc-300">
                {filteredProjects.map((proj) => (
                  <tr
                    key={proj.id}
                    onClick={() => setInspectedProject(proj)}
                    className="cursor-pointer transition-colors hover:bg-white/[0.03]"
                  >
                    <td className="py-3 px-4 font-semibold text-white">
                      {proj.name}
                      {proj.isFlagship && (
                        <span className="ml-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[9px] font-mono text-cyan-300">
                          FLAGSHIP
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-zinc-400">{proj.categoryLabel}</td>
                    <td className="py-3 px-4">
                      <span className="text-emerald-400 text-[11px]">{proj.status}</span>
                    </td>
                    <td className="py-3 px-4 text-zinc-400">
                      {proj.stack.slice(0, 3).join(", ")}
                      {proj.stack.length > 3 ? "..." : ""}
                    </td>
                    <td className="py-3 px-4 text-right text-zinc-300 hover:text-white">
                      Inspect →
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal Window */}
        {inspectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
            <div className="relative max-h-[85vh] w-full max-w-2xl">
              <WindowFrame
                title={inspectedProject.name}
                url={`local://repos/${inspectedProject.slug}`}
                badge={inspectedProject.status}
              >
                <div className="relative font-sans">
                  <button
                    onClick={() => setInspectedProject(null)}
                    className="absolute right-0 top-0 rounded-full p-1 text-zinc-400 hover:bg-white/[0.08] hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="font-mono text-xs uppercase text-zinc-400">
                    {inspectedProject.categoryLabel} // SYSTEM RECORD
                  </div>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                    {inspectedProject.name}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-2 font-mono text-xs">
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-emerald-400">
                      {inspectedProject.status}
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-400">{inspectedProject.industry}</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    {inspectedProject.summary}
                  </p>

                  {/* Metrics */}
                  {inspectedProject.metrics.length > 0 && (
                    <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 font-mono text-xs">
                      {inspectedProject.metrics.map((m, idx) => (
                        <div key={idx} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5">
                          <div className="text-[10px] text-zinc-400 uppercase">{m.label}</div>
                          <div className="mt-1 font-bold text-white">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="mt-5">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                      System Architecture & Capabilities
                    </h4>
                    <ul className="mt-2 space-y-2 text-xs text-zinc-300">
                      {inspectedProject.architectureHighlights.map((high, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                          <span>{high}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div className="mt-5">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                      Technologies
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {inspectedProject.stack.map((t, idx) => (
                        <span
                          key={idx}
                          className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Local Repo Folder */}
                  <div className="mt-6 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 font-mono text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="h-4 w-4 text-amber-400" />
                      <span>Local System Path:</span>
                    </div>
                    <div className="mt-1 text-zinc-200 select-all">{inspectedProject.repoFolder}</div>
                  </div>
                </div>
              </WindowFrame>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
