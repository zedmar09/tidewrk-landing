import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PlaceholderPageHero } from "@/components/sections/shared/placeholder-page-hero";

export default function MobileApplicationDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <PlaceholderPageHero title="Mobile Application Development Page" eyebrow="Solution" />
      </main>
      <Footer />
    </>
  );
}
