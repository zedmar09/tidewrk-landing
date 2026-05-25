import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import {
  BusinessIntelligenceBenefitsSection,
  BusinessIntelligenceCtaSection,
  BusinessIntelligenceHero,
  BusinessIntelligenceInvestSection,
  BusinessIntelligenceOverviewSection,
} from "@/components/sections/business-intelligence";

export const metadata: Metadata = {
  title: "Business Intelligence | Tidewrk",
  description:
    "Turn scattered business data into dashboards, reports, and insights that help teams make smarter decisions with confidence.",
};

export default function BusinessIntelligencePage() {
  return (
    <>
      <Navbar />
      <main>
        <BusinessIntelligenceHero />
        <BusinessIntelligenceOverviewSection />
        <BusinessIntelligenceBenefitsSection />
        <BusinessIntelligenceInvestSection />
        <BusinessIntelligenceCtaSection />
      </main>
      <Footer />
    </>
  );
}
