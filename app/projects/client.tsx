"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { projects, type ProjectCategory, type ProjectStatus } from "@/data/projects";
import { FadeUp } from "@/components/motion";
import { cn } from "@/lib/utils";

type FilterCategory = "All" | ProjectCategory;
type FilterStatus = "All" | ProjectStatus;

const categories: FilterCategory[] = [
  "All",
  "AI & ML",
  "BI + ML",
  "Analytics Dashboard",
  "Power BI",
  "Web Application",
  "AI Automation",
  "Mobile App"
];

const statuses: FilterStatus[] = ["All", "LIVE", "IN DEVELOPMENT"];

export function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [activeStatus, setActiveStatus] = useState<FilterStatus>("All");
  const filtered = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesStatus = activeStatus === "All" || project.status === activeStatus;
    return matchesCategory && matchesStatus;
  });

  function countProjects(category: FilterCategory, status: FilterStatus) {
    return projects.filter((project) => {
      const matchesCategory = category === "All" || project.category === category;
      const matchesStatus = status === "All" || project.status === status;
      return matchesCategory && matchesStatus;
    }).length;
  }

  return (
    <Section className="pt-20 pb-20">
      <FadeUp>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-tealLight">Projects</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Analytics case studies for operational and project decisions</h1>
          <p className="mt-5 text-lg leading-8 text-white/65">A practical portfolio across O&G production analytics, EPC project controls, predictive modelling, and focused data applications.</p>
        </div>
      </FadeUp>

      {/* Filter tabs */}
      <FadeUp delay={0.15}>
        <div className="mt-10 space-y-5">
          <FilterGroup label="Category">
            {categories.map((category) => (
              <FilterButton
                key={category}
                active={activeCategory === category}
                label={category}
                count={countProjects(category, activeStatus)}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </FilterGroup>
          <FilterGroup label="Status">
            {statuses.map((status) => (
              <FilterButton
                key={status}
                active={activeStatus === status}
                label={status}
                count={countProjects(activeCategory, status)}
                onClick={() => setActiveStatus(status)}
              />
            ))}
          </FilterGroup>
        </div>
      </FadeUp>

      {/* Project grid */}
      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeStatus}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-white/40">
            No case studies match these filters yet.
          </div>
        )}
      </div>
    </Section>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterButton({
  active,
  label,
  count,
  onClick
}: {
  active: boolean;
  label: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
        active
          ? "border-tealLight bg-tealLight/15 text-tealLight shadow-[0_0_12px_rgba(47,184,216,0.15)]"
          : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white/80"
      )}
    >
      {label}
      {active && <span className="ml-2 text-xs opacity-70">({count})</span>}
    </button>
  );
}
