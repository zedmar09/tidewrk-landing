"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { navigationItems } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import tidewrkLogo from "@/assets/images/tidewrk-logo.svg";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    closeMenu();

    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavItemClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    closeMenu();

    if (pathname !== "/") {
      return;
    }

    const hash = href.startsWith("/#")
      ? href.slice(2)
      : href.startsWith("#")
        ? href.slice(1)
        : "";

    if (!hash) {
      return;
    }

    const target = document.getElementById(hash);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${hash}`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
        isScrolled
          ? "border-b border-white/12 bg-[#02050a]/32 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1800px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Go to Tidewrk home page"
          onClick={handleLogoClick}
        >
          <Image
            alt="Tidewrk"
            className="h-8 w-auto brightness-0 invert"
            priority
            src={tidewrkLogo}
          />
        </Link>

        <div className="hidden items-center gap-10 text-[1.02rem] font-normal text-white/72 lg:flex">
          {navigationItems.map((item) => (
            <Link
              className="inline-flex h-16 items-center transition hover:text-white"
              href={item.href}
              key={item.label}
              onClick={(event) => handleNavItemClick(event, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          asChild
          variant="secondary"
          size="sm"
          className="hidden rounded-full border border-white/18 bg-white/10 pl-5 pr-4 text-white shadow-none backdrop-blur-md hover:bg-white/16 lg:inline-flex"
        >
          <Link href="#contact">
            Contact Us
            <Mail className="h-4 w-4" />
          </Link>
        </Button>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/16 bg-white/8 text-white shadow-none transition hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-16 z-40 bg-[#003f72]/70 transition-opacity duration-200 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed inset-x-0 top-16 z-50 max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-white/10 bg-[#003f72]/96 px-5 pb-6 pt-4 shadow-[0_22px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-300 sm:px-8 lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
        id="mobile-navigation"
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-2">
          {navigationItems.map((item) => (
            <div className="border-b border-white/10 py-2 last:border-b-0" key={item.label}>
              <Link
                className="block rounded-none px-3 py-3 text-base font-medium text-white transition hover:bg-white/10"
                href={item.href}
                onClick={(event) => handleNavItemClick(event, item.href)}
              >
                {item.label}
              </Link>
            </div>
          ))}

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-4 w-full rounded-full bg-white text-[#003f72] shadow-none hover:bg-[#f5f9fd]"
          >
            <Link href="#contact" onClick={closeMenu}>
              Contact Us
              <Mail className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
