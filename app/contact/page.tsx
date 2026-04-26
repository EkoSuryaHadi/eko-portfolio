import type { Metadata } from "next";
import { ContactClient } from "./client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Eko Suryahadi to discuss Power BI, AI/ML, project-control analytics, production dashboards, or data applications for O&G and EPC teams.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact Eko Suryahadi",
    description: "Start a conversation about a real O&G or EPC analytics problem and the decision you need to improve.",
    url: "/contact",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Eko Suryahadi Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Eko Suryahadi",
    description: "Start a conversation about a real O&G or EPC analytics problem and the decision you need to improve.",
    images: ["/og.svg"]
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
