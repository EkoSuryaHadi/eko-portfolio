import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "#flagships", label: "Flagships" },
  { href: "#vault", label: "Project Vault" },
  { href: "#radar", label: "Competency Radar" },
  { href: "#contact", label: "Consulting" },
];

const socials = [
  { href: "https://www.linkedin.com/in/ekosuryahadi", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/EkoSuryaHadi", icon: Github, label: "GitHub" },
  { href: "mailto:e.suryahadi@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050607] font-mono text-xs">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 text-zinc-500 sm:px-8 md:grid-cols-3 lg:px-10">
        <div>
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded border border-white/10 bg-white/[0.05] text-[10px] text-zinc-200">
              ES
            </span>
            <span>Eko Suryahadi</span>
          </div>
          <p className="mt-2 text-zinc-400 leading-relaxed text-xs">
            Industrial Data & AI Specialist / EPC Tech Lead. Production out-of-core data systems, mathematical project scheduling, and AI agent engineering.
          </p>
        </div>

        <div>
          <div className="font-semibold text-zinc-300 uppercase text-[11px] tracking-wider">Direct Coordinates</div>
          <p className="mt-2 text-zinc-300">e.suryahadi@gmail.com</p>
          <p className="mt-1 text-zinc-500">Indonesia (UTC+7) · Remote & On-Site Heavy Industry Advisory</p>
          <div className="mt-4 flex gap-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-zinc-400 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-semibold text-zinc-300 uppercase text-[11px] tracking-wider">Navigation</div>
          <div className="mt-2 flex flex-col gap-1.5">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="text-zinc-400 transition-colors hover:text-white">
                {label} →
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04] py-4 text-center text-[11px] text-zinc-600">
        &copy; {new Date().getFullYear()} Eko Suryahadi. Designed with Linear Minimalist Precision.
      </div>
    </footer>
  );
}
