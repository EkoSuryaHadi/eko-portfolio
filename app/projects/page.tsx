import type { Metadata } from "next";
import { ProjectsClient } from "./client";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies across Power BI, AI/ML, EPC project-control analytics, O&G production dashboards, and focused data applications.",
  alternates: {
    canonical: "/projects"
  },
  openGraph: {
    title: "Projects | Eko Suryahadi",
    description: "Practical analytics and AI case studies for Oil & Gas, EPC, and operational decision teams.",
    url: "/projects",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Eko Suryahadi Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Eko Suryahadi",
    description: "Practical analytics and AI case studies for Oil & Gas, EPC, and operational decision teams.",
    images: ["/og.svg"]
  }
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
