import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ContactPage } from "@/components/sections/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact Tidewrk",
  description:
    "Share your project details with Tidewrk and our team will follow up within 1 business day.",
};

export default function ContactRoute() {
  return (
    <>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
}
