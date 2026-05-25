import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import {
  ClientListSection,
  CtaSection,
  FeaturesSection,
  HeroSection,
  TestimonialsSection,
  WhyTidewrkSection,
} from "@/components/sections/home";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ClientListSection />
        <WhyTidewrkSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
