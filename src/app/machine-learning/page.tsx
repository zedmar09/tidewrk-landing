import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PlaceholderPageHero } from "@/components/sections/shared/placeholder-page-hero";

export default function MachineLearningPage() {
  return (
    <>
      <Navbar />
      <main>
        <PlaceholderPageHero title="Machine Learning Page" eyebrow="Solution" />
      </main>
      <Footer />
    </>
  );
}
