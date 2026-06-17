import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PlaceholderPageHero } from "@/components/sections/shared/placeholder-page-hero";

export default function BusinessIntelligencePage() {
  return (
    <>
      <Navbar />
      <main>
        <PlaceholderPageHero title="Business Intelligence Page" eyebrow="Solution" />
      </main>
      <Footer />
    </>
  );
}
