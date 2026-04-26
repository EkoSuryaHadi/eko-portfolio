"use client";

import { Activity, BarChart3, BrainCircuit, Database, Gauge, ServerCog } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { FadeUp, SlideRight, StaggerContainer, StaggerItem, AnimatedNumber } from "@/components/motion";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/skills";

const metrics = [
  ["8+", "Delivered analytics projects"],
  ["90%", "On-time delivery target"],
  ["72 hrs", "Early-warning target"],
  ["$750K-$1.2M", "Portfolio ROI scenario"],
  ["-20%", "Downtime reduction scenario"]
];

const serviceIcons = [BarChart3, Database, BrainCircuit, Gauge, ServerCog, Activity];

const serviceCopy: Record<string, string> = {
  "Power BI & Dashboard Development":
    "Replace delayed spreadsheets with refreshable KPI views that operators, engineers, and managers can use in the same review rhythm.",
  "Data Engineering & ETL Pipelines":
    "Clean, model, and connect production or project-control data so reporting and AI work from a reliable foundation.",
  "AI & Predictive Machine Learning":
    "Build practical models for delay risk, forecasting, anomalies, and prioritisation with explanations decision makers can trust.",
  "Project Control Analytics":
    "Turn schedule, cost, risk, and progress data into early warnings for PMO and project leadership.",
  "Full-Stack Application Development":
    "Move repeatable workflows out of scattered files and into focused applications with clear states, APIs, and data capture.",
  "Asset Reliability & Predictive Maintenance":
    "Use time-series signals and reliability logic to surface asset issues earlier and support maintenance triage."
};

export default function HomePage() {
  return (
    <>
      <section className="industrial-grid relative overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(47,184,216,0.20),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(244,160,20,0.14),transparent_30%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <FadeUp delay={0.1}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-4 py-2 text-sm text-success">
                <span className="h-2 w-2 rounded-full bg-success pulse-live" /> Available for O&G and EPC analytics projects
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-tealLight">Power BI, AI/ML, and operational analytics</p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Turn field and project data into decisions teams can act on.
              </h1>
            </FadeUp>
            <FadeUp delay={0.45}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                I help Oil & Gas and EPC teams build Power BI dashboards, predictive models, and focused analytics applications for production, project control, and asset reliability decisions.
              </p>
            </FadeUp>
            <FadeUp delay={0.55}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contact">Discuss an Analytics Challenge</ButtonLink>
                <ButtonLink href="/projects" variant="secondary">View Case Studies</ButtonLink>
              </div>
            </FadeUp>
          </div>

          <SlideRight delay={0.5}>
            <div className="animate-float rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl border border-tealLight/20 bg-[#07111F] p-5">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-tealLight/40 shadow-[0_0_15px_rgba(47,184,216,0.2)]">
                      <Image src="/profile.jpg" alt="Eko Suryahadi" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-tealLight">Analytics Consultant</p>
                      <p className="mt-1 text-sm text-white/60">Eko Suryahadi - Power BI, AI, and data apps</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {metrics.slice(1, 4).map(([value, label], i) => (
                    <FadeUp key={label} delay={0.6 + i * 0.12}>
                      <div className="rounded-xl border border-white/10 bg-navy/70 p-4">
                        <div className="flex items-end justify-between gap-4">
                          <span className="stat-glow text-2xl font-bold text-white">{value}</span>
                          <span className="h-2 flex-1 overflow-hidden rounded-full bg-navy2">
                            <span className="block h-full rounded-full bg-gradient-to-r from-teal to-tealLight" style={{ width: `${65 + i * 12}%`, transition: "width 1.2s ease" }} />
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-white/60">{label}</p>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>
          </SlideRight>
        </div>
      </section>

      <Section className="py-10">
        <StaggerContainer stagger={0.08} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map(([value, label]) => (
            <StaggerItem key={label}>
              <div className="glass-card rounded-2xl p-5 text-center transition-colors hover:border-tealLight/30">
                <AnimatedNumber value={value} className="text-2xl font-bold text-tealLight stat-glow" />
                <p className="mt-2 text-sm text-white/60">{label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section>
        <FadeUp>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-tealLight">Services</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Analytics work built around operational decisions.</h2>
            <p className="mt-4 text-white/65">Each engagement starts with the decision you need to improve, then maps the data, model, and interface required to support it.</p>
          </div>
        </FadeUp>
        <StaggerContainer stagger={0.08} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <StaggerItem key={service}>
                <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-tealLight/40 hover:bg-white/[0.07] hover:shadow-glow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 transition-colors group-hover:bg-teal/20">
                    <Icon className="h-6 w-6 text-tealLight" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{service}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{serviceCopy[service]}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <Section>
        <FadeUp>
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-tealLight">Featured Projects</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Case studies with practical business context</h2>
            </div>
            <ButtonLink href="/projects" variant="secondary">View All Projects</ButtonLink>
          </div>
        </FadeUp>
        <StaggerContainer stagger={0.1} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section className="pb-24">
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl border border-tealLight/20 bg-gradient-to-br from-teal/20 to-purpleAi/20 p-8 text-center sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,184,216,0.15),transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Have an O&G or EPC analytics problem to solve?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/70">
                Share the decision you need to improve, the data you already have, and the timeline you are working toward. I will help translate it into a practical analytics solution.
              </p>
              <div className="mt-8"><ButtonLink href="/contact">Start the Conversation</ButtonLink></div>
            </div>
          </div>
        </FadeUp>
      </Section>
    </>
  );
}
