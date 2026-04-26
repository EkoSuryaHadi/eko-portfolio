import type { Metadata } from "next";
import { SkillsClient } from "./client";

export const metadata: Metadata = {
  title: "Skills & Stack",
  description: "Technical stack for Power BI dashboards, AI/ML workflows, data engineering, project-control analytics, and focused analytics applications.",
  alternates: {
    canonical: "/skills"
  },
  openGraph: {
    title: "Skills & Stack | Eko Suryahadi",
    description: "Technical capabilities for BI, AI/ML, data engineering, application development, and O&G/EPC domain analytics.",
    url: "/skills",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Eko Suryahadi Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills & Stack | Eko Suryahadi",
    description: "Technical capabilities for BI, AI/ML, data engineering, application development, and O&G/EPC domain analytics.",
    images: ["/og.svg"]
  }
};

export default function SkillsPage() {
  return <SkillsClient />;
}
