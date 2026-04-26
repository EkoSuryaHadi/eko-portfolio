"use client";

import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem } from "@/components/motion";
import { Award, Code2, FileText, Handshake, Rocket, Briefcase } from "lucide-react";
import Image from "next/image";

const strengths = [
  {
    icon: Award,
    title: "Domain-led analytics",
    body: "I translate production, reliability, and project-control context into dashboards, models, and workflows that teams can actually use."
  },
  {
    icon: Code2,
    title: "End-to-end ownership",
    body: "From data model and backend API to dashboard UX and handover notes. One person can connect the technical and business pieces."
  },
  {
    icon: Rocket,
    title: "Fast, documented delivery",
    body: "Clear communication, maintainable code, and practical documentation for long-term use. Built for adoption, not just demos."
  }
];

const timeline = [
  { period: "Current", role: "Freelance Data & AI Consultant", company: "Independent", detail: "Building predictive models, custom dashboards, and analytics applications for O&G and EPC decision workflows." },
  { period: "Recent", role: "Power BI Developer", company: "PPRL", detail: "KINANTI field analytics, production reporting, and expanding analytics capability into AI-assisted operational intelligence." },
  { period: "Portfolio", role: "10+ Projects", company: "Various", detail: "Delivered multiple analytics solutions including production intelligence dashboards, EPC delay prediction, and risk analytics models." }
];

const workingStyle = [
  "Start from the operational or project-control decision, then map backward to data, model, and interface requirements.",
  "Keep project communication practical: concise updates, visible assumptions, and clear handover notes.",
  "Build for adoption, not theater: dashboards and AI outputs need naming, thresholds, and workflows the team can trust."
];

export function AboutClient() {
  return (
    <Section className="pt-20 pb-20">
      {/* Hero section */}
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SlideLeft>
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-2 sm:p-4">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-tealLight/20 bg-navy2">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(47,184,216,0.15),transparent_70%)]" />
              <div className="absolute inset-0 industrial-grid opacity-30" />
              <div className="scanline" />

              {/* Industrial corner brackets */}
              <div className="corner-bracket corner-tl" />
              <div className="corner-bracket corner-tr" />
              <div className="corner-bracket corner-bl" />
              <div className="corner-bracket corner-br" />

              {/* Avatar with gradient border */}
              <div className="relative group">
                <div className="relative h-48 w-48 sm:h-64 sm:w-64 overflow-hidden rounded-full border-4 border-tealLight/20 shadow-[0_0_50px_rgba(47,184,216,0.15)] transition-all duration-500 group-hover:border-tealLight/40 group-hover:shadow-[0_0_60px_rgba(47,184,216,0.25)]">
                  <Image
                    src="/profile.jpg"
                    alt="Eko Suryahadi"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  {/* Subtle overlay grid on photo */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(47,184,216,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(47,184,216,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
                </div>
                
                {/* Techy ring around avatar */}
                <div className="absolute -inset-4 rounded-full border border-tealLight/10 border-dashed animate-[spin_20s_linear_infinite]" />
                
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-success/40 bg-success/10 px-4 py-1.5 text-xs font-bold tracking-wider text-success backdrop-blur-md shadow-[0_0_20px_rgba(26,158,110,0.2)]">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-success pulse-live" />
                  OPEN TO WORK
                </div>
              </div>
            </div>
            
            {/* Metadata labels (Tech aesthetic) */}
            <div className="absolute top-6 left-6 text-[10px] font-mono text-tealLight/40 uppercase tracking-widest hidden sm:block">
              Profile_Scan_01
            </div>
            <div className="absolute bottom-6 right-6 text-[10px] font-mono text-tealLight/40 uppercase tracking-widest hidden sm:block">
              Decisions_Engine_Active
            </div>
          </div>
        </SlideLeft>

        <SlideRight>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-tealLight">About</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Analytics builder for O&G and EPC teams that need clearer decisions.</h1>
            <p className="mt-6 text-lg leading-8 text-white/68">
              I build practical data products for teams that need faster decisions from production, reliability, and project-control data. My work combines Power BI, Python, AI/ML, and full-stack application development with Oil & Gas and EPC domain context.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact">Discuss a Project</ButtonLink>
              <ButtonLink href="/skills" variant="secondary">View Skills</ButtonLink>
              <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white/42">
                <FileText className="h-4 w-4" />
                CV available on request
              </span>
            </div>
          </div>
        </SlideRight>
      </div>

      {/* Story and working style */}
      <StaggerContainer stagger={0.12} className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <StaggerItem>
          <section className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-tealLight">My Story</p>
            <h2 className="mt-3 text-2xl font-bold text-white">From operational reporting to decision support.</h2>
            <div className="mt-5 space-y-4 leading-7 text-white/65">
              <p>
                I work close to the messy middle where field data, project controls, and management decisions meet. That is where a dashboard stops being a report and starts becoming a decision tool.
              </p>
              <p>
                My path combines Power BI delivery, Python analytics, machine-learning experiments, and full-stack product building. The common thread is practical: make the signal easier to see, explain, and act on.
              </p>
            </div>
          </section>
        </StaggerItem>
        <StaggerItem>
          <section className="h-full rounded-3xl border border-tealLight/20 bg-navy2/70 p-7">
            <div className="flex items-center gap-3">
              <Handshake className="h-6 w-6 text-tealLight" />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-tealLight">Working Style</p>
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-white/66">
              {workingStyle.map((item) => (
                <li key={item} className="border-l-2 border-amber/55 pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </StaggerItem>
      </StaggerContainer>

      {/* Strengths */}
      <StaggerContainer stagger={0.1} className="mt-16 grid gap-6 lg:grid-cols-3">
        {strengths.map(({ icon: Icon, title, body }) => (
          <StaggerItem key={title}>
            <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-tealLight/30 hover:bg-white/[0.07]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 transition-colors group-hover:bg-teal/20">
                <Icon className="h-6 w-6 text-tealLight" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-white/63">{body}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Career Timeline */}
      <FadeUp className="mt-16">
        <div className="rounded-3xl border border-white/10 bg-navy2/60 p-8">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-tealLight" />
            <h2 className="text-2xl font-bold text-white">Experience</h2>
          </div>
          <div className="space-y-6">
            {timeline.map(({ period, role, company, detail }, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full border-2 border-tealLight bg-navy2" />
                  {i < timeline.length - 1 && <div className="w-[2px] flex-1 bg-gradient-to-b from-tealLight/40 to-transparent" />}
                </div>
                <div className="pb-6">
                  <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-tealLight">{period}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{role}</h3>
                  <p className="mt-1 text-sm font-medium text-amber">{company}</p>
                  <p className="mt-2 leading-7 text-white/60">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
