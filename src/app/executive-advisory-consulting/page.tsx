import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ExecutiveAdvisoryBenefitsSection } from "@/components/sections/executive-advisory-benefits-section";
import { ExecutiveAdvisoryCtaSection } from "@/components/sections/executive-advisory-cta-section";
import { ExecutiveAdvisoryHero } from "@/components/sections/executive-advisory-hero";
import { ExecutiveAdvisoryOverviewSection } from "@/components/sections/executive-advisory-overview-section";
import { ExecutiveAdvisoryWhySection } from "@/components/sections/executive-advisory-why-section";

export default function ExecutiveAdvisoryConsultingPage() {
  return (
    <>
      <Navbar />
      <main>
        <ExecutiveAdvisoryHero />
        <ExecutiveAdvisoryOverviewSection />
        <ExecutiveAdvisoryBenefitsSection />
        <ExecutiveAdvisoryWhySection />
        <ExecutiveAdvisoryCtaSection />
      </main>
      <Footer />
    </>
  );
}
