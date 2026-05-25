import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import {
  StaffAugmentationBenefitsSection,
  StaffAugmentationCtaSection,
  StaffAugmentationGrowthSection,
  StaffAugmentationHero,
  StaffAugmentationScaleSection,
} from "@/components/sections/staff-augmentation";

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
