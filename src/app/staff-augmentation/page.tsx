import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { StaffAugmentationBenefitsSection } from "@/components/sections/staff-augmentation-benefits-section";
import { StaffAugmentationCtaSection } from "@/components/sections/staff-augmentation-cta-section";
import { StaffAugmentationGrowthSection } from "@/components/sections/staff-augmentation-growth-section";
import { StaffAugmentationHero } from "@/components/sections/staff-augmentation-hero";
import { StaffAugmentationScaleSection } from "@/components/sections/staff-augmentation-scale-section";

export default function StaffAugmentationPage() {
  return (
    <>
      <Navbar />
      <main>
        <StaffAugmentationHero />
        <StaffAugmentationScaleSection />
        <StaffAugmentationBenefitsSection />
        <StaffAugmentationGrowthSection />
        <StaffAugmentationCtaSection />
      </main>
      <Footer />
    </>
  );
}
