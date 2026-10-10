import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  applicationName: "Eko Suryahadi Industrial Engineering Portfolio",
  title: {
    default: "Eko Suryahadi | Industrial Data & AI Specialist · EPC Tech Lead",
    template: "%s | Eko Suryahadi"
  },
  description:
    "Engineering portfolio bridging heavy industry domain depth (Oil & Gas, EPC, HSE, Cost Control) with modern Big Data Lakehouse (DuckDB out-of-core), AI Agents, and full-stack production systems.",
  metadataBase: new URL("https://ekosuryahadi.com"),
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Industrial Data Engineering",
    "DuckDB Lakehouse Architecture",
    "EPC Project Scheduling",
    "Kurvaup Gantt S-Curve Engine",
    "Oil and Gas Safety Analytics",
    "Earned Value Management SaaS",
    "AI Autonomous Agents"
  ],
  authors: [{ name: "Eko Suryahadi", url: "https://ekosuryahadi.com" }],
  creator: "Eko Suryahadi",
  publisher: "Eko Suryahadi",
  openGraph: {
    title: "Eko Suryahadi | Industrial Data & AI Specialist · EPC Tech Lead",
    description: "Production-grade out-of-core data engines, mathematical project scheduling, and AI agent engineering.",
    url: "https://ekosuryahadi.com",
    siteName: "Eko Suryahadi Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Eko Suryahadi Industrial Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eko Suryahadi | Industrial Data & AI Specialist · EPC Tech Lead",
    description: "Production-grade out-of-core data engines, mathematical project scheduling, and AI agent engineering.",
    images: ["/og.svg"]
  },
  icons: {
    icon: "/icon.svg"
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eko Suryahadi",
  url: "https://ekosuryahadi.com",
  email: "e.suryahadi@gmail.com",
  jobTitle: "Industrial Data & AI Specialist / EPC Tech Lead",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID"
  },
  sameAs: [
    "https://linkedin.com/in/ekosuryahadi",
    "https://github.com/EkoSuryaHadi"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <JsonLd data={personSchema} />
      </head>
      <body className="min-h-screen bg-[#08090A] text-zinc-100 antialiased selection:bg-white selection:text-black font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
