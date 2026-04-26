"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const accentClass = {
  teal: "border-l-teal",
  purple: "border-l-purpleAi",
  amber: "border-l-amber"
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "group flex h-full flex-col rounded-2xl border border-white/10 bg-navy2/80 p-6 shadow-lg transition-all duration-300 hover:border-tealLight/50 hover:shadow-glow",
          "border-l-4",
          accentClass[project.accent]
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-tealLight/80">{project.category}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{project.name}</h3>
          </div>
          <span className={cn(
            "shrink-0 rounded-full px-3 py-1 text-[11px] font-bold",
            project.status === "LIVE" ? "bg-success/20 text-success" : "bg-amber/20 text-amber"
          )}>
            {project.status === "LIVE" && <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-success pulse-live" />}
            {project.status}
          </span>
        </div>
        <p className="mt-4 flex-1 text-sm leading-6 text-white/70">{project.summary}</p>
        <p className="mt-3 text-sm font-semibold text-white">{project.impact}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full bg-navy px-3 py-1 text-xs text-tealLight/80">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center text-sm font-semibold text-tealLight">
          View Case Study <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </motion.div>
  );
}
