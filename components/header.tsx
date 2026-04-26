"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonLink } from "@/components/button-link";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-white/10 bg-navy/90 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-navy/60 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="group flex items-center gap-1 font-semibold tracking-tight text-white">
            <span className="relative">
              Eko
              <span className="text-tealLight">Suryahadi</span>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-tealLight to-amber transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 text-sm md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-lg px-4 py-2 transition-colors duration-200",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-tealLight"
                    : "text-white/65 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.label}
                {(pathname === item.href || pathname.startsWith(item.href + "/")) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-2 -bottom-[1px] h-[2px] rounded-full bg-tealLight"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <ButtonLink href="/contact">Let&apos;s Work Together</ButtonLink>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80 transition hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-white/10 bg-navy/95 backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-base font-medium transition",
                      pathname === item.href || pathname.startsWith(item.href + "/")
                        ? "bg-tealLight/10 text-tealLight"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: nav.length * 0.05, duration: 0.2 }}
                className="mt-2"
              >
                <ButtonLink href="/contact">Let&apos;s Work Together</ButtonLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
