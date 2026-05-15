import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SoftwareDevelopmentBenefitsStory } from "@/components/sections/software-development-benefits-story";
import { SoftwareDevelopmentCustomFitSection } from "@/components/sections/software-development-custom-fit-section";
import { SoftwareDevelopmentHero } from "@/components/sections/software-development-hero";
import { SoftwareDevelopmentTeamGrid } from "@/components/sections/software-development-team-grid";
import { CallToAction1 } from "@/components/ui/call-to-action-1";

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <SoftwareDevelopmentHero />
        <SoftwareDevelopmentCustomFitSection />
        <SoftwareDevelopmentBenefitsStory />
        <SoftwareDevelopmentTeamGrid />
        <CallToAction1 />
      </main>
      <Footer />
    </>
  );
}
