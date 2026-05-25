import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import {
  OffshoringBenefitsSection,
  OffshoringCtaSection,
  OffshoringGrowthSection,
  OffshoringHero,
  OffshoringOverviewSection,
  OffshoringWhyTidewrkSection,
} from "@/components/sections/offshoring";

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
