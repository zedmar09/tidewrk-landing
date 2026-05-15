"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, X } from "lucide-react";
import { navigationItems } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import tidewrkLogo from "@/assets/images/tidewrk-logo.svg";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(
    navigationItems.find((item) => item.children)?.label ?? null,
  );

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eef0f3] bg-white">
      <nav className="mx-auto flex h-16 w-full max-w-[1800px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Home"
          onClick={closeMenu}
        >
          <Image
            alt="Tidewrk"
            className="h-8 w-auto"
            priority
            src={tidewrkLogo}
          />
        </Link>

        <div className="hidden items-center gap-10 text-[1.02rem] font-normal text-[#666666] lg:flex">
          {navigationItems.map((item) => (
            <div className="group relative" key={item.label}>
              <Link
                className="inline-flex h-16 items-center gap-1.5 transition hover:text-[#003466]"
                href={item.href}
              >
                {item.label}
                {item.children ? <ChevronDown className="h-4 w-4" /> : null}
              </Link>

              {item.children ? (
                <div className="invisible absolute left-1/2 top-[calc(100%-0.25rem)] min-w-72 -translate-x-1/2 rounded-lg border border-[#e4e7ec] bg-white/96 p-2 opacity-0 shadow-[0_18px_60px_rgba(0,52,102,0.12)] backdrop-blur-md transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      className="block rounded-md px-4 py-3 text-sm leading-5 text-[#666666] transition hover:bg-[#f3f7fb] hover:text-[#003466]"
                      href={child.href}
                      key={child.label}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <Button asChild size="sm" className="hidden pl-5 pr-4 lg:inline-flex">
          <Link href="#contact">
            Contact Us
            <Mail className="h-4 w-4" />
          </Link>
        </Button>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex size-10 items-center justify-center rounded-full border border-[#e4e7ec] bg-white text-[#003466] shadow-[0_10px_28px_rgba(0,52,102,0.08)] transition hover:bg-[#f3f7fb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466] focus-visible:ring-offset-2 lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 top-16 z-40 bg-[#111217]/24 transition-opacity duration-200 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed inset-x-0 top-16 z-50 max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-[#e4e7ec] bg-white px-5 pb-6 pt-4 shadow-[0_22px_70px_rgba(0,52,102,0.14)] transition duration-300 sm:px-8 lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
        id="mobile-navigation"
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-2">
          {navigationItems.map((item) => (
            <div className="border-b border-[#eef0f3] py-2 last:border-b-0" key={item.label}>
              {item.children ? (
                <>
                  <button
                    aria-expanded={openSection === item.label}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-[#111217] transition hover:bg-[#f3f7fb]"
                    onClick={() =>
                      setOpenSection((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                    type="button"
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 text-[#666666] transition-transform ${
                        openSection === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      openSection === item.label
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="grid gap-1 px-3 pb-3">
                        {item.children.map((child) => (
                          <Link
                            className="rounded-md px-3 py-2 text-sm leading-6 text-[#666666] transition hover:bg-[#f3f7fb] hover:text-[#003466]"
                            href={child.href}
                            key={child.label}
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  className="block rounded-lg px-3 py-3 text-base font-medium text-[#111217] transition hover:bg-[#f3f7fb] hover:text-[#003466]"
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <Button asChild size="lg" className="mt-4 w-full">
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
