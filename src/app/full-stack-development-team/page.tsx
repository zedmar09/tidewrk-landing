import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import {
  FullStackDevelopmentTeamBenefitsBento,
  FullStackDevelopmentTeamBuildShowcase,
  FullStackDevelopmentTeamClosingSection,
  FullStackDevelopmentTeamHero,
  FullStackDevelopmentTeamOverviewSection,
} from "@/components/sections/full-stack-development-team";

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
