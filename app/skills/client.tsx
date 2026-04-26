"use client";

import { Section } from "@/components/section";
import { skills } from "@/data/skills";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar
} from "recharts";

const radarData = [
  { skill: "BI & Viz", level: 95 },
  { skill: "AI/ML", level: 85 },
  { skill: "Data Eng", level: 88 },
  { skill: "Frontend", level: 78 },
  { skill: "Backend", level: 75 },
  { skill: "DevOps", level: 65 },
  { skill: "Mobile", level: 60 },
  { skill: "Domain", level: 92 }
];

const categoryColors: Record<string, string> = {
  "BI & Visualisation": "from-teal/20 to-tealLight/5",
  "AI & Machine Learning": "from-purpleAi/20 to-purpleAi/5",
  "Data Engineering": "from-teal/15 to-teal/5",
  "Project Control": "from-amber/15 to-amber/5",
  "Frontend Development": "from-tealLight/15 to-tealLight/5",
  "Backend Development": "from-teal/20 to-teal/5",
  "Mobile Development": "from-amber/20 to-amber/5",
  "Infrastructure / DevOps": "from-success/15 to-success/5",
  "Monitoring & Observability": "from-success/20 to-success/5",
  "Domain Knowledge": "from-purpleAi/15 to-purpleAi/5"
};

export function SkillsClient() {
  return (
    <Section className="pt-20 pb-20">
      <FadeUp>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-tealLight">Skills & Stack</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Technical depth tied to field and project-control decisions.</h1>
          <p className="mt-5 text-lg leading-8 text-white/65">A scannable view of the tools I use to build Power BI dashboards, data pipelines, ML workflows, and analytics applications for O&G and EPC teams.</p>
        </div>
      </FadeUp>

      {/* Radar Chart */}
      <FadeUp delay={0.15} className="mt-12">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <h2 className="mb-6 text-xl font-bold text-white">Delivery Capability Overview</h2>
          <div className="mx-auto h-[320px] max-w-lg">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
                <PolarGrid stroke="rgba(255,255,255,0.08)" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 12 }}
                />
                <Radar
                  name="Proficiency"
                  dataKey="level"
                  stroke="#2FB8D8"
                  fill="#1B8CA6"
                  fillOpacity={0.25}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </FadeUp>

      {/* Skill Grid */}
      <StaggerContainer stagger={0.06} className="mt-10 grid gap-5 md:grid-cols-2">
        {skills.map((group) => (
          <StaggerItem key={group.category}>
            <section className={`rounded-2xl border border-white/10 bg-gradient-to-br ${categoryColors[group.category] || "from-white/5 to-white/[0.02]"} p-6 transition-all duration-300 hover:border-tealLight/20`}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">{group.category}</h2>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/50">{group.items.length}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                    className="rounded-full border border-white/5 bg-navy2 px-3 py-1.5 text-sm text-tealLight transition-colors hover:border-tealLight/30 hover:bg-teal/10"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </section>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
