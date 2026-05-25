import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import {
  SoftwareDevelopmentBenefitsBento,
  SoftwareDevelopmentCtaSection,
  SoftwareDevelopmentHero,
  SoftwareDevelopmentSolutionsSection,
  SoftwareDevelopmentTeamGrid,
} from "@/components/sections/software-development";

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
