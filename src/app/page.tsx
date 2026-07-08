import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import {
  AiWorkflowSection,
  FeaturesSection,
  HeroSection,
  SolutionsSection,
  WhereTidewrkFitsSection,
} from "@/components/sections/home";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhereTidewrkFitsSection />
        <SolutionsSection />
        <AiWorkflowSection />
      </main>
      <Footer />
    </>
  );
}
