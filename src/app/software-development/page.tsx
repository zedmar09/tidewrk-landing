import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SoftwareDevelopmentHero } from "@/components/sections/software-development";

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <SoftwareDevelopmentHero />
      </main>
      <Footer />
    </>
  );
}
