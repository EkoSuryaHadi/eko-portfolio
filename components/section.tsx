import { cn } from "@/lib/utils";

export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={cn("mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10", className)}>{children}</section>;
}
