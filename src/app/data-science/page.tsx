import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PlaceholderPageHero } from "@/components/sections/shared/placeholder-page-hero";

export default function DataSciencePage() {
  return (
    <>
      <Navbar />
      <main>
        <PlaceholderPageHero title="Data Science Page" eyebrow="Solution" />
      </main>
      <Footer />
    </>
  );
}
