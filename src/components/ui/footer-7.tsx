import type React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
  className?: string;
}

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaXTwitter className="size-5" />, href: "#", label: "X" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#terms" },
  { name: "Privacy Policy", href: "#privacy" },
];

const contactOffices = [
  {
    country: "United States",
    phone: "(843) 654 - 1425",
    phoneHref: "tel:+18436541425",
    email: "info@tidewrk.com",
    addresses: [
      "3003 Dunes West Blvd., Suite 7, Mt. Pleasant, SC 29466",
      "80 Orville Drive, Suite 100, Bohemia New York, 11716",
    ],
  },
  {
    country: "Philippines",
    phone: "+63 (2) 8687 7519",
    phoneHref: "tel:+63286877519",
    email: "info@tidewrk.com",
    addresses: [
      "5F PHINMA Plaza, 39 Plaza Drive, 8 Rockwell, Rockwell Center Makati City, Manila",
    ],
  },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/_next/static/media/tidewrk-logo.svg",
    alt: "Tidewrk logo",
    title: "Tidewrk",
  },
  description = "Tidewrk helps businesses innovate, collaborate, and grow through smarter workflows, automation, and emerging technology solutions.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2026 tidewirk.com All rights reserved.",
  legalLinks = defaultLegalLinks,
  className,
}: Footer7Props) => {
  return (
    <section className={cn("bg-white py-16 md:py-28", className)} id="contact">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-3 lg:justify-start">
              <a href={logo.url}>
                <Image
                  alt={logo.alt}
                  className="h-9 w-auto grayscale"
                  height={36}
                  src={logo.src}
                  title={logo.title}
                  width={150}
                />
              </a>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#666666] lg:max-w-[70%]">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-[#666666]">
              {socialLinks.map((social) => (
                <li
                  className="font-medium transition hover:text-[#003466]"
                  key={social.label}
                >
                  <a aria-label={social.label} href={social.href}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
            <form className="w-full max-w-md">
              <label
                className="text-sm font-semibold text-[#111217]"
                htmlFor="footer-newsletter-email"
              >
                Subscribe to Our Newsletter
              </label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  className="min-h-11 flex-1 rounded-full border border-[#d8dee6] bg-white px-4 text-sm text-[#111217] outline-none transition placeholder:text-[#8b9098] focus:border-[#003466] focus:ring-2 focus:ring-[#003466]/15"
                  id="footer-newsletter-email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="min-h-11 rounded-full bg-[#003466] px-6 text-sm font-semibold text-white transition hover:bg-[#00284f]"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="w-full max-w-md overflow-hidden rounded-xl border border-[#e3e7ec] bg-[#f7f8fa] shadow-sm">
              <iframe
                allowFullScreen
                className="h-36 w-full md:h-40"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.614601747316!2d121.03471887477862!3d14.56401827797189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c855cb0e3073%3A0x8eb6159dc4f6c920!2sPHINMA%20Plaza!5e0!3m2!1sen!2sph!4v1778482269786!5m2!1sen!2sph"
                title="Tidewrk Philippines office map"
              />
            </div>
          </div>

          <div className="w-full break-words">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#003466]">
              Lets Collaborate
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#111217] md:text-3xl">
              Get In Touch
            </h3>

            <div className="mt-7 grid gap-7">
              {contactOffices.map((office) => (
                <div
                  className="border-b border-[#e3e7ec] pb-7 last:border-b-0 last:pb-0"
                  key={office.country}
                >
                  <h4 className="font-semibold text-[#111217]">
                    {office.country}
                  </h4>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-[#666666]">
                    <a
                      className="flex gap-3 transition hover:text-[#003466]"
                      href={office.phoneHref}
                    >
                      <Phone className="mt-1 size-4 shrink-0 text-[#003466]" />
                      <span>{office.phone}</span>
                    </a>
                    {office.addresses.map((address) => (
                      <div className="flex gap-3" key={address}>
                        <MapPin className="mt-1 size-4 shrink-0 text-[#003466]" />
                        <p>{address}</p>
                      </div>
                    ))}
                    <a
                      className="flex gap-3 transition hover:text-[#003466]"
                      href={`mailto:${office.email}`}
                    >
                      <Mail className="mt-1 size-4 shrink-0 text-[#003466]" />
                      <span>{office.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#e3e7ec] py-8 text-xs font-medium text-[#666666] md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link) => (
              <li className="transition hover:text-[#003466]" key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
