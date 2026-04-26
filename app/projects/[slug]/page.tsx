import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getProject, projects } from "@/data/projects";
import { ProjectDetailClient } from "./client";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project Not Found" };
  const url = `/projects/${project.slug}`;
  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: `${project.name} Case Study`,
      description: project.summary,
      url,
      type: "article",
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: `${project.name} case study` }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} Case Study`,
      description: project.summary,
      images: ["/og.svg"]
    }
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: `${project.name} case study`,
    description: project.summary,
    url: `https://ekosuryahadi.com/projects/${project.slug}`,
    creator: {
      "@type": "Person",
      name: "Eko Suryahadi",
      url: "https://ekosuryahadi.com"
    },
    about: [project.industry, project.category, ...project.stack],
    keywords: project.stack.join(", "),
    text: [project.challenge, project.solution, project.impact].join(" "),
    isPartOf: {
      "@type": "WebSite",
      name: "Eko Suryahadi Portfolio",
      url: "https://ekosuryahadi.com"
    }
  };

  return (
    <>
      <JsonLd data={projectSchema} />
      <ProjectDetailClient project={project} />
    </>
  );
}
