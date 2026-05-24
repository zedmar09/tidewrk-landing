import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FullStackDevelopmentTeamBenefitsBento } from "@/components/sections/full-stack-development-team-benefits-bento";
import { FullStackDevelopmentTeamBuildShowcase } from "@/components/sections/full-stack-development-team-build-showcase";
import { FullStackDevelopmentTeamClosingSection } from "@/components/sections/full-stack-development-team-closing-section";
import { FullStackDevelopmentTeamHero } from "@/components/sections/full-stack-development-team-hero";
import { FullStackDevelopmentTeamOverviewSection } from "@/components/sections/full-stack-development-team-overview-section";

export const metadata: Metadata = {
  title: "Full-Stack Development Team | Tidewrk",
  description:
    "Build better digital products with one aligned full-stack development team for UX, front-end, back-end, databases, APIs, integrations, testing, and launch.",
};

export default function FullStackDevelopmentTeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <FullStackDevelopmentTeamHero />
        <FullStackDevelopmentTeamOverviewSection />
        <FullStackDevelopmentTeamBenefitsBento />
        <FullStackDevelopmentTeamBuildShowcase />
        <FullStackDevelopmentTeamClosingSection />
      </main>
      <Footer />
    </>
  );
}
