import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SoftwareDevelopmentBenefitsBento } from "@/components/sections/software-development-benefits-bento";
import { SoftwareDevelopmentCtaSection } from "@/components/sections/software-development-cta-section";
import { SoftwareDevelopmentHero } from "@/components/sections/software-development-hero";
import { SoftwareDevelopmentSolutionsSection } from "@/components/sections/software-development-solutions-section";
import { SoftwareDevelopmentTeamGrid } from "@/components/sections/software-development-team-grid";

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <SoftwareDevelopmentHero />
        <SoftwareDevelopmentSolutionsSection />
        <SoftwareDevelopmentBenefitsBento />
        <SoftwareDevelopmentTeamGrid />
        <SoftwareDevelopmentCtaSection />
      </main>
      <Footer />
    </>
  );
}
