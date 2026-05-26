import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import tidewrkLogo from "@/assets/images/tidewrk-logo.svg";

const footerLinks = [
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Careers", href: "#careers" },
  { label: "About Us", href: "#about-us" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#02050a] px-5 pb-7 pt-12 text-white sm:px-8 md:pt-16 lg:px-[6vw]"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_34%_58%,rgba(0,63,114,0.46),transparent_38%),radial-gradient(ellipse_at_68%_56%,rgba(0,63,114,0.22),transparent_30%),radial-gradient(ellipse_at_58%_64%,rgba(0,63,114,0.32),transparent_32%),radial-gradient(ellipse_at_51%_102%,rgba(245,130,32,0.2),transparent_24%),linear-gradient(180deg,#090812_0%,#02050a_38%,#02050a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#02050a] via-[#02050a]/94 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_center,rgba(0,52,102,0.42),transparent_62%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-[1800px]">
        <div className="min-h-[340px]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm font-medium text-white/78 shadow-[0_14px_50px_rgba(0,0,0,0.18)] backdrop-blur-md sm:px-4">
              <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                Contact Us
              </span>
              Talk to Tidewrk
              <Sparkles className="size-4 text-white/60" aria-hidden="true" />
            </div>

            <h2 className="mt-4 max-w-5xl text-balance text-[2.35rem] font-semibold leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-[4rem]">
              Ready for your next move?{" "}
              <span className="text-white/48">
                Let&apos;s build the flow behind it.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-[1fr_auto] md:items-end">
            <div className="w-full max-w-md">
              <p className="text-sm text-white/50">Reach us at:</p>
              <a
                className="mt-2 inline-flex items-center gap-2 text-xl font-semibold text-white transition hover:text-white hover:[text-shadow:0_0_18px_rgba(0,63,114,0.9)]"
                href="mailto:info@tidewrk.com"
              >
                info@tidewrk.com
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </a>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex max-w-2xl flex-wrap gap-x-9 gap-y-5 text-base font-medium text-white/76 md:justify-end"
            >
              {footerLinks.map((link) => (
                <Link
                  className="transition hover:text-white hover:[text-shadow:0_0_18px_rgba(0,63,114,0.9)]"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mx-auto mt-24 w-full md:mt-32">
          <Link href="/" aria-label="Go to Tidewrk home page">
            <Image
              alt="Tidewrk"
              className="mx-auto h-auto w-full brightness-0 invert"
              priority={false}
              src={tidewrkLogo}
            />
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-5 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Tidewrk. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {socialLinks.map((link) => (
              <a
                className="transition hover:text-white hover:[text-shadow:0_0_18px_rgba(0,63,114,0.9)]"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
