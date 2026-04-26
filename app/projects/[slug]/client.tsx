"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem } from "@/components/motion";
import { type Project } from "@/data/projects";

const stackGroups = {
  "BI & Analytics": ["Power BI", "DAX", "Power Query", "Streamlit", "Plotly", "Recharts", "DCA", "SHAP"],
  "Data & ML": ["Python", "XGBoost", "Random Forest", "Isolation Forest", "Scikit-learn", "Pandas", "pandas", "SQL", "LLM"],
  "Application Layer": ["React", "FastAPI", "Flutter", "Dart", "TailwindCSS", "REST API", "WebSocket"],
  "Infrastructure": ["PostgreSQL", "TimescaleDB", "Docker", "Firebase", "Redis", "Vector DB", "Kafka", "MinIO"]
};

function groupStack(stack: string[]) {
  const remaining = new Set(stack);
  const grouped = Object.entries(stackGroups).map(([label, known]) => {
    const items = stack.filter((tech) => known.some((item) => item.toLowerCase() === tech.toLowerCase()));
    items.forEach((item) => remaining.delete(item));
    return { label, items };
  });
  const other = Array.from(remaining);
  return other.length > 0 ? [...grouped, { label: "Specialist Tools", items: other }] : grouped;
}

export function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <Section className="pt-20 pb-20">
      <FadeUp>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-tealLight/70 transition hover:text-tealLight">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </FadeUp>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <SlideLeft>
          <div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-teal/15 px-3 py-1 text-xs font-semibold text-tealLight">{project.category}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">{project.industry}</span>
              <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                {project.status === "LIVE" && <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-success pulse-live" />}
                {project.status}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-bold text-white sm:text-6xl">{project.name}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{project.summary}</p>
            <p className="mt-4 text-xl font-semibold text-tealLight stat-glow">{project.impact}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/5 bg-navy2 px-3 py-1 text-sm text-tealLight">{tech}</span>
              ))}
            </div>
          </div>
        </SlideLeft>

        <SlideRight>
          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-tealLight">Case Study Snapshot</p>
            <dl className="mt-6 space-y-5 text-sm">
              <div><dt className="text-white/45">Industry</dt><dd className="mt-1 font-semibold text-white">{project.industry}</dd></div>
              <div><dt className="text-white/45">Status</dt><dd className="mt-1 font-semibold text-white">{project.status}</dd></div>
              <div><dt className="text-white/45">Primary Stack</dt><dd className="mt-1 font-semibold text-white">{project.stack.slice(0, 3).join(" - ")}</dd></div>
            </dl>
            <div className="mt-8 flex flex-col gap-3">
              {project.demoUrl ? <ButtonLink href={project.demoUrl}>Live Demo <ExternalLink className="ml-2 h-4 w-4" /></ButtonLink> : null}
              {project.githubUrl ? <ButtonLink href={project.githubUrl} variant="secondary">GitHub <Github className="ml-2 h-4 w-4" /></ButtonLink> : null}
              <ButtonLink href="/contact" variant="secondary">Discuss a Similar Problem</ButtonLink>
            </div>
            {!project.demoUrl && !project.githubUrl ? (
              <p className="mt-4 rounded-xl border border-white/10 bg-navy/60 px-4 py-3 text-xs leading-5 text-white/48">
                Demo and repository access are available on request when project context permits.
              </p>
            ) : null}
          </aside>
        </SlideRight>
      </div>

      <StaggerContainer stagger={0.12} className="mt-16 grid gap-6 lg:grid-cols-2">
        <StaggerItem>
          <CaseSection title="The Challenge" body={project.challenge} />
        </StaggerItem>
        <StaggerItem>
          <CaseSection title="The Solution" body={project.solution} />
        </StaggerItem>
      </StaggerContainer>

      <StaggerContainer stagger={0.1} className="mt-8 grid gap-6 lg:grid-cols-3">
        <StaggerItem>
          <ListSection title="Key Features" items={project.features} />
        </StaggerItem>
        <StaggerItem>
          <ListSection title="Business Impact" items={project.businessImpact} />
        </StaggerItem>
        <StaggerItem>
          <ListSection title="Lessons Learned" items={project.lessons} />
        </StaggerItem>
      </StaggerContainer>

      <FadeUp className="mt-8">
        <ProjectProof project={project} />
      </FadeUp>

      <FadeUp className="mt-16">
        <div className="relative overflow-hidden rounded-3xl border border-tealLight/20 bg-teal/10 p-8 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,184,216,0.12),transparent_60%)]" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white">Have a similar challenge?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/65">Share the decision, data, and timeline. I&apos;ll help shape a practical analytics approach.</p>
            <div className="mt-7"><ButtonLink href="/contact">Discuss Your Project</ButtonLink></div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}

function ProjectProof({ project }: { project: Project }) {
  const groupedStack = groupStack(project.stack).filter((group) => group.items.length > 0);
  const workflow = [
    "Frame the operational question",
    "Prepare and validate source data",
    project.features[0] || "Build the core analysis layer",
    project.businessImpact[0] || "Translate outputs into decisions"
  ];

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#07111F]">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="industrial-grid relative min-h-[320px] border-b border-white/10 bg-navy2 p-7 lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(47,184,216,0.16),transparent_45%)]" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-tealLight">Project Proof</p>
            <h2 className="mt-3 text-2xl font-bold text-white">Designed placeholder for architecture and evidence.</h2>
            <p className="mt-4 leading-7 text-white/62">
              Real screenshots can be added later. For now, this proof layer documents the workflow, stack shape, and delivery logic behind the case study without inventing unavailable assets.
            </p>
            <div className="mt-7 rounded-2xl border border-tealLight/20 bg-navy/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Architecture Summary</p>
              <p className="mt-3 text-sm leading-6 text-white/68">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 p-7">
          <div>
            <h3 className="text-lg font-bold text-white">Workflow</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {workflow.map((step, index) => (
                <div key={`${step}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <span className="text-xs font-semibold text-amber">0{index + 1}</span>
                  <p className="mt-2 text-sm leading-6 text-white/66">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Stack Grouping</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {groupedStack.map((group) => (
                <div key={group.label} className="rounded-2xl border border-white/10 bg-navy2/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tealLight">{group.label}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-navy px-2.5 py-1 text-xs text-white/64">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseSection({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-tealLight/20">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-4 leading-7 text-white/65">{body}</p>
    </section>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-navy2/60 p-6 transition-colors hover:border-tealLight/20">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-white/65">
        {items.map((item) => <li key={item} className="border-l-2 border-tealLight/40 pl-3">{item}</li>)}
      </ul>
    </section>
  );
}
