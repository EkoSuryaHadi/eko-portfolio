import Link from "next/link";
import { cn } from "@/lib/utils";

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition hover:scale-[1.02]",
        variant === "primary"
          ? "bg-teal text-white shadow-glow hover:bg-tealLight"
          : "border border-tealLight/70 text-tealLight hover:bg-tealLight/10"
      )}
    >
      {children}
    </Link>
  );
}
