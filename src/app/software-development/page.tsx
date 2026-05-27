import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import {
  SoftwareDevelopmentBuildFlowSection,
  SoftwareDevelopmentBuildOutcomesSection,
  SoftwareDevelopmentHero,
} from "@/components/sections/software-development";

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <SoftwareDevelopmentHero />
        <SoftwareDevelopmentBuildFlowSection />
        <SoftwareDevelopmentBuildOutcomesSection />
      </main>
      <Footer />
    </>
  );
}
