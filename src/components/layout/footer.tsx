import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import tidewrkLogo from "@/assets/images/tidewrk-logo.svg";

const footerLinks = [
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Careers", href: "#careers" },
  { label: "About Us", href: "#about-us" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "Terms of Service", href: "#terms-of-service" },
  { label: "Cookie Settings", href: "#cookie-settings" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "X", href: "#", icon: FaXTwitter },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#02050a] px-5 pb-8 pt-10 text-white sm:px-8 md:pt-14 lg:px-[6vw]"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_34%_58%,rgba(0,63,114,0.46),transparent_38%),radial-gradient(ellipse_at_68%_56%,rgba(0,63,114,0.22),transparent_30%),radial-gradient(ellipse_at_58%_96%,rgba(0,63,114,0.34),transparent_30%),linear-gradient(180deg,#02050a_0%,#02050a_40%,#02050a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#02050a] via-[#02050a]/88 to-transparent"
      />

      <div className="relative mx-auto max-w-[1800px] rounded-[1.1rem] bg-black/16 px-5 py-9 shadow-[0_34px_120px_rgba(0,0,0,0.18)] backdrop-blur-[2px] sm:px-8 sm:py-12 lg:px-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[2rem] font-semibold leading-[1.06] tracking-normal text-white sm:text-5xl lg:text-[3.7rem]">
            Ready for your next move?{" "}
            <span className="text-white/52">
              Let&apos;s build the flow behind it.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-md">
            <Link
              aria-label="Go to Tidewrk home page"
              className="inline-flex"
              href="/"
            >
              <Image
                alt="Tidewrk"
                className="h-auto w-36 brightness-0 invert sm:w-40"
                priority={false}
                src={tidewrkLogo}
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/54">
              The current behind sharper teams, smarter systems, and the work
              your business moves next.
            </p>

            <div className="mt-7 flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    aria-label={link.label}
                    className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.055] text-white/78 transition hover:border-[#003f72]/70 hover:bg-[#003f72]/18 hover:text-white hover:shadow-[0_0_20px_rgba(0,63,114,0.48)]"
                    href={link.href}
                    key={link.label}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 lg:items-end">
            <Link
              aria-label="Back to top"
              className="flex size-11 items-center justify-center rounded-full border border-white/14 bg-white text-[#003f72] transition hover:-translate-y-1 hover:bg-white/88"
              href="#"
            >
              <ArrowUp className="size-5" aria-hidden="true" />
            </Link>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-white/72 lg:justify-end"
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

            <nav
              aria-label="Footer policies"
              className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/46 lg:justify-end"
            >
              {policyLinks.map((link) => (
                <a
                  className="transition hover:text-white/78"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-9 pt-3 text-center text-xs text-white/42">
          <p>© 2026 Tidewrk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
