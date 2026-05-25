import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import {
  ExecutiveAdvisoryBenefitsSection,
  ExecutiveAdvisoryCtaSection,
  ExecutiveAdvisoryHero,
  ExecutiveAdvisoryOverviewSection,
  ExecutiveAdvisoryWhySection,
} from "@/components/sections/executive-advisory-consulting";

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
