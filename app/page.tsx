import { HeroTelemetry } from "@/components/hero-telemetry";
import { FlagshipShowcase } from "@/components/flagship-showcase";
import { ProjectVault } from "@/components/project-vault";
import { DomainRadar } from "@/components/domain-radar";
import { ContactHub } from "@/components/contact-hub";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#08090A] text-zinc-100 selection:bg-white selection:text-black">
      <HeroTelemetry />
      <FlagshipShowcase />
      <ProjectVault />
      <DomainRadar />
      <ContactHub />
    </main>
  );
}
