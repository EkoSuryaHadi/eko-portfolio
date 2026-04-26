import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  applicationName: "Eko Suryahadi Portfolio",
  title: {
    default: "Eko Suryahadi | O&G and EPC Analytics Consultant",
    template: "%s | Eko Suryahadi"
  },
  description:
    "Power BI, AI/ML, and data application consultant helping Oil & Gas and EPC teams improve production, project-control, and asset reliability decisions.",
  metadataBase: new URL("https://ekosuryahadi.com"),
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Oil and Gas analytics consultant",
    "EPC project control analytics",
    "Power BI consultant Indonesia",
    "predictive maintenance analytics",
    "project delay prediction"
  ],
  authors: [{ name: "Eko Suryahadi", url: "https://ekosuryahadi.com" }],
  creator: "Eko Suryahadi",
  publisher: "Eko Suryahadi",
  openGraph: {
    title: "Eko Suryahadi | O&G and EPC Analytics Consultant",
    description: "Power BI, AI/ML, and data applications for operational and project-control decisions.",
    url: "https://ekosuryahadi.com",
    siteName: "Eko Suryahadi Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Eko Suryahadi Portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eko Suryahadi | O&G and EPC Analytics Consultant",
    description: "Power BI, AI/ML, and data applications for operational and project-control decisions.",
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
  image: "https://ekosuryahadi.com/profile.jpg",
  email: "e.suryahadi@gmail.com",
  jobTitle: "Power BI, AI/ML, and Analytics Consultant",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Balikpapan",
    addressCountry: "ID"
  },
  sameAs: [
    "https://linkedin.com/in/ekosuryahadi",
    "https://github.com/ekosuryahadi"
  ],
  knowsAbout: [
    "Power BI",
    "Oil and Gas Analytics",
    "EPC Project Control",
    "Machine Learning",
    "Data Engineering",
    "Predictive Maintenance"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <JsonLd data={personSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
