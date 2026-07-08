import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";

import { contactIntro, contactLocations } from "@/constants/contact";
import { ContactForm } from "./contact-form";

export function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#02050a] text-white">
      <section className="relative px-5 pb-14 pt-28 sm:px-8 sm:pb-18 sm:pt-32 lg:px-[6vw]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,63,114,0.48),transparent_34%),radial-gradient(ellipse_at_15%_70%,rgba(0,63,114,0.2),transparent_28%),linear-gradient(180deg,#02050a_0%,#07111f_52%,#02050a_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#02050a] via-[#02050a]/82 to-transparent"
        />

        <div className="relative mx-auto max-w-[1500px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm font-medium text-white/72 backdrop-blur-md">
            <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
              Let&apos;s Collaborate
            </span>
            Lead capture
          </div>

          <h1 className="mx-auto mt-7 max-w-5xl text-balance text-[3.2rem] font-semibold leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-[6rem]">
            Get In <span className="tidewrk-glow-text">Touch</span>
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-pretty text-lg leading-8 text-white/66 sm:text-2xl sm:leading-10">
            {contactIntro}
          </p>
        </div>
      </section>

      <section className="relative px-5 pb-20 sm:px-8 sm:pb-28 lg:px-[6vw]">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-16">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl sm:p-7 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/44">
              Contact information
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              We’d love to hear from you.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/60">
              Use the form to share your project details, or reach Tidewrk
              through the regional contact information below.
            </p>

            <div className="mt-8 space-y-5">
              {contactLocations.map((location) => (
                <article
                  className="rounded-[1.2rem] border border-white/10 bg-[#02050a]/50 p-5"
                  key={location.region}
                >
                  <h3 className="text-2xl font-semibold text-white">
                    {location.region}
                  </h3>
                  <div className="mt-5 space-y-4">
                    <ContactLine icon={Phone}>{location.phone}</ContactLine>
                    <ContactLine icon={Mail}>{location.email}</ContactLine>
                    <ContactLine icon={MapPin}>
                      <span className="space-y-2">
                        {location.addresses.map((address) => (
                          <span className="block" key={address}>
                            {address}
                          </span>
                        ))}
                      </span>
                    </ContactLine>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}

function ContactLine({
  children,
  icon: Icon,
}: {
  children: ReactNode;
  icon: LucideIcon;
}) {
  return (
    <div className="flex gap-3 text-sm leading-6 text-white/64 sm:text-base sm:leading-7">
      <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-[#003f72]/50 bg-[#003f72]/18 text-white">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span>{children}</span>
    </div>
  );
}
