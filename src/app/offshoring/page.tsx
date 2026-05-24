import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { OffshoringBenefitsSection } from "@/components/sections/offshoring-benefits-section";
import { OffshoringCtaSection } from "@/components/sections/offshoring-cta-section";
import { OffshoringGrowthSection } from "@/components/sections/offshoring-growth-section";
import { OffshoringHero } from "@/components/sections/offshoring-hero";
import { OffshoringOverviewSection } from "@/components/sections/offshoring-overview-section";
import { OffshoringWhyTidewrkSection } from "@/components/sections/offshoring-why-tidewrk-section";

export default function OffshoringPage() {
  return (
    <>
      <Navbar />
      <main>
        <OffshoringHero />
        <OffshoringOverviewSection />
        <OffshoringBenefitsSection />
        <OffshoringGrowthSection />
        <OffshoringWhyTidewrkSection />
        <OffshoringCtaSection />
      </main>
      <Footer />
    </>
  );
}
