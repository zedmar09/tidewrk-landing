import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SoftwareDevelopmentBenefitsBento } from "@/components/sections/software-development-benefits-bento";
import { SoftwareDevelopmentHero } from "@/components/sections/software-development-hero";

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <SoftwareDevelopmentHero />
        <SoftwareDevelopmentBenefitsBento />
      </main>
      <Footer />
    </>
  );
}
