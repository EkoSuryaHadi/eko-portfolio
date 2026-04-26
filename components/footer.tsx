import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" }
];

const socials = [
  { href: "https://linkedin.com/in/ekosuryahadi", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/ekosuryahadi", icon: Github, label: "GitHub" },
  { href: "mailto:e.suryahadi@gmail.com", icon: Mail, label: "Email" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#081321]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 text-sm text-white/65 sm:px-8 md:grid-cols-3 lg:px-10">
        <div>
          <p className="text-lg font-semibold text-white">
            Eko<span className="text-tealLight">Suryahadi</span>
          </p>
          <p className="mt-3 leading-6">Power BI, AI/ML, and analytics applications for Oil & Gas and EPC decision workflows.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-3">e.suryahadi@gmail.com</p>
          <p className="mt-1">Balikpapan, Indonesia - Remote worldwide</p>
          <div className="mt-4 flex gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all hover:border-tealLight/50 hover:bg-tealLight/10 hover:text-tealLight"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Navigation</p>
          <div className="mt-3 flex flex-col gap-2">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="transition hover:text-tealLight">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-4 text-center text-xs text-white/30">
        &copy; {new Date().getFullYear()} Eko Suryahadi. All rights reserved.
      </div>
    </footer>
  );
}
