import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { AboutClient } from "./client";

export const metadata: Metadata = {
  title: "About",
  description: "About Eko Suryahadi, a Power BI, AI/ML, and analytics consultant for Oil & Gas and EPC decision workflows.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Eko Suryahadi",
    description: "Analytics builder for Oil & Gas and EPC teams that need clearer production, reliability, and project-control decisions.",
    url: "/about",
    type: "profile",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Eko Suryahadi Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Eko Suryahadi",
    description: "Analytics builder for Oil & Gas and EPC teams that need clearer production, reliability, and project-control decisions.",
    images: ["/og.svg"]
  }
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Eko Suryahadi",
    url: "https://ekosuryahadi.com/about",
    image: "https://ekosuryahadi.com/profile.jpg",
    jobTitle: "Power BI, AI/ML, and Analytics Consultant",
    worksFor: {
      "@type": "Organization",
      name: "PPRL"
    },
    knowsAbout: [
      "Power BI",
      "Oil and Gas Production Analytics",
      "EPC Project Control",
      "AI and Machine Learning",
      "Data Engineering",
      "Full-stack Analytics Applications"
    ],
    sameAs: [
      "https://linkedin.com/in/ekosuryahadi",
      "https://github.com/ekosuryahadi"
    ]
  }
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={profileSchema} />
      <AboutClient />
    </>
  );
}
