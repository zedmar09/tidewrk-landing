import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import {
  SoftwareDevelopmentBuildFlowSection,
  SoftwareDevelopmentBuildOutcomesSection,
  SoftwareDevelopmentHero,
  SoftwareDevelopmentSignalsSection,
} from "@/components/sections/software-development";

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <SoftwareDevelopmentHero />
        <SoftwareDevelopmentSignalsSection />
        <SoftwareDevelopmentBuildFlowSection />
        <SoftwareDevelopmentBuildOutcomesSection />
      </main>
      <Footer />
    </>
  );
}
