import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-tealLight">404</p>
      <h1 className="mt-3 text-4xl font-bold text-white">Page not found</h1>
      <p className="mt-4 max-w-xl text-white/65">The page you are looking for does not exist or has been moved.</p>
      <div className="mt-8"><ButtonLink href="/">Back Home</ButtonLink></div>
    </Section>
  );
}
