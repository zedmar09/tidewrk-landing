import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutUsPage } from "@/components/sections/about-us/about-us-page";

export const metadata: Metadata = {
  title: "About Us | Tidewrk",
  description:
    "Learn how Tidewrk helps businesses add the people, systems, and execution support behind their next move.",
};

export default function AboutUsRoute() {
  return (
    <>
      <Navbar />
      <AboutUsPage />
      <Footer />
    </>
  );
}
