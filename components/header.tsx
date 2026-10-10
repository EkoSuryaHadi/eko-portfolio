"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#flagships", label: "Flagships" },
  { href: "#vault", label: "Vault (50+)" },
  { href: "#radar", label: "Domain Radar" },
  { href: "#contact", label: "Consulting" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/[0.08] bg-[#08090A]/85 backdrop-blur-xl shadow-2xl shadow-black/60"
            : "border-b border-transparent bg-[#08090A]/50 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo / Monogram */}
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-xs font-mono font-bold text-white transition-all duration-200 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 group-hover:text-cyan-300">
              ES
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-zinc-200">
                Eko Suryahadi
              </span>
              <span className="font-mono text-[10px] tracking-wide text-zinc-500">
                Industrial Data & AI
              </span>
            </div>
          </Link>

          {/* Desktop Nav: Linear-style Segmented Pills */}
          <nav className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] p-1 text-xs md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-1.5 text-zinc-400 transition-all duration-150 hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.05] px-3 py-1 font-mono text-[11px] text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span>Available</span>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-zinc-950 shadow-sm transition-all duration-200 hover:bg-zinc-200"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-zinc-300 hover:text-white md:hidden"
            aria-label="Toggle Navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="sticky top-16 z-40 border-b border-white/[0.08] bg-[#08090A]/95 px-5 py-6 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-3 pt-3 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-2.5 text-xs font-semibold text-zinc-950"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
