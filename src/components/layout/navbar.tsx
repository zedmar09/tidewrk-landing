"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  CloudCog,
  Code2,
  Database,
  FlaskConical,
  Globe2,
  Layers3,
  Lightbulb,
  Mail,
  Menu,
  MonitorCog,
  Rocket,
  Smartphone,
  UserRound,
  UsersRound,
  Workflow,
  X,
} from "lucide-react";
import { navigationItems } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import tidewrkLogo from "@/assets/images/tidewrk-logo.svg";

type MegaMenuKey = "Solutions" | "Careers" | "About Us";

type MegaMenuCard = {
  title: string;
  description: string;
  href: string;
};

type MegaMenuGroup = {
  label: string;
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  cards: MegaMenuCard[];
};

type MegaMenu = {
  eyebrow: string;
  title: string;
  href: string;
  groups: MegaMenuGroup[];
};

const serviceRoutes = {
  softwareDevelopment: "/software-development",
  staffAugmentation: "/staff-augmentation",
  executiveAdvisoryConsulting: "/executive-advisory-consulting",
};

const solutionRoutes: Record<string, string> = {
  "Full-Stack Development Team": "/full-stack-development-team",
  "Business Intelligence": "/business-intelligence",
  "Data Science": "/data-science",
  "Data Engineering": "/data-engineering",
  "Web / Desktop Application Development": "/web-desktop-application-development",
  "Mobile Application Development": "/mobile-application-development",
  "Machine Learning": "/machine-learning",
  "Cloud Services": "/cloud-services",
  "QA Testing and Engineering": "/qa-testing-and-engineering",
  "Virtual Assistants / Business Administration": "/virtual-assistance-business-administration",
};

const megaMenus: Record<MegaMenuKey, MegaMenu> = {
  Solutions: {
    eyebrow: "Choose the current behind the work",
    title: "Solutions",
    href: "/#solutions",
    groups: [
      {
        label: "Software Development",
        eyebrow: "Build and modernize",
        title: "Software Development",
        description:
          "For digital products, internal systems, data platforms, cloud foundations, and quality engineering that need to move from idea to release.",
        href: serviceRoutes.softwareDevelopment,
        cards: [
          {
            title: "Full-Stack Development Team",
            description:
              "A coordinated, remote-ready team that carries product work from strategy to release.",
            href: solutionRoutes["Full-Stack Development Team"],
          },
          {
            title: "Business Intelligence",
            description:
              "Clearer command views for performance, risk, and opportunity.",
            href: solutionRoutes["Business Intelligence"],
          },
          {
            title: "Data Science",
            description:
              "Turn complex signals into useful patterns, forecasts, and insight.",
            href: solutionRoutes["Data Science"],
          },
          {
            title: "Data Engineering",
            description:
              "Reliable data foundations for reporting, automation, and analytics.",
            href: solutionRoutes["Data Engineering"],
          },
          {
            title: "Web / Desktop Application Development",
            description:
              "Business applications that reduce manual work and fit team workflows.",
            href: solutionRoutes["Web / Desktop Application Development"],
          },
          {
            title: "Mobile Application Development",
            description:
              "Mobile experiences for customers, teams, field work, and connected operations.",
            href: solutionRoutes["Mobile Application Development"],
          },
          {
            title: "Machine Learning",
            description:
              "Adaptive systems for prediction, personalization, and smarter consistency.",
            href: solutionRoutes["Machine Learning"],
          },
          {
            title: "Cloud Services",
            description:
              "Cloud environments that stay flexible, secure, and ready to grow.",
            href: solutionRoutes["Cloud Services"],
          },
          {
            title: "QA Testing and Engineering",
            description:
              "Test strategy and automation that protects quality before launch.",
            href: solutionRoutes["QA Testing and Engineering"],
          },
        ],
      },
      {
        label: "Staff Augmentation",
        eyebrow: "Add capability",
        title: "Staff Augmentation",
        description:
          "For teams that need the right people added quickly, without turning hiring into the thing that slows the work down.",
        href: serviceRoutes.staffAugmentation,
        cards: [
          {
            title: "Virtual Assistants",
            description:
              "A lower-risk way to start: virtual assistants who support admin flow, coordination, documentation, and follow-through.",
            href: solutionRoutes["Virtual Assistants / Business Administration"],
          },
          {
            title: "Remote support",
            description:
              "Philippines-based professionals who can add steady capacity while staying aligned to your tools and priorities.",
            href: serviceRoutes.staffAugmentation,
          },
          {
            title: "Staff Augmentation",
            description:
              "Skilled professionals who integrate with your team and strengthen delivery capacity.",
            href: serviceRoutes.staffAugmentation,
          },
          {
            title: "Business support roles",
            description:
              "Reliable support for recurring work, process upkeep, and team coordination.",
            href: serviceRoutes.staffAugmentation,
          },
          {
            title: "Delivery capacity",
            description:
              "Flexible talent that helps overloaded teams keep important work moving.",
            href: serviceRoutes.staffAugmentation,
          },
        ],
      },
      {
        label: "Executive Advisory Consulting",
        eyebrow: "Navigate the next move",
        title: "Executive Advisory Consulting",
        description:
          "For leaders who need sharper perspective, practical strategy, and trusted guidance before the business makes its next move.",
        href: serviceRoutes.executiveAdvisoryConsulting,
        cards: [
          {
            title: "Executive Advisory Consulting",
            description:
              "Senior guidance for modernization, growth planning, operational change, and strategic decisions.",
            href: serviceRoutes.executiveAdvisoryConsulting,
          },
          {
            title: "Strategic direction",
            description:
              "Clarify priorities across people, systems, technology, and execution.",
            href: serviceRoutes.executiveAdvisoryConsulting,
          },
          {
            title: "Decision support",
            description:
              "Bring outside perspective to complex moves, risks, and transformation moments.",
            href: serviceRoutes.executiveAdvisoryConsulting,
          },
          {
            title: "Operating alignment",
            description:
              "Connect leadership goals with the teams, workflows, and systems needed to act.",
            href: serviceRoutes.executiveAdvisoryConsulting,
          },
        ],
      },
    ],
  },
  Careers: {
    eyebrow: "Build with Tidewrk",
    title: "Careers",
    href: "#careers",
    groups: [
      {
        label: "Open roles",
        title: "Open roles",
        description:
          "Explore future opportunities to build with Tidewrk across technology, data, operations, and delivery.",
        href: "/contact",
        cards: [
          {
            title: "Join our talent network",
            description:
              "Connect with Tidewrk for future project, delivery, and operations opportunities.",
            href: "/contact",
          },
          {
            title: "Software and data roles",
            description:
              "Work on product, engineering, analytics, and intelligent workflow initiatives.",
            href: "/contact",
          },
          {
            title: "Business support roles",
            description:
              "Support clients through coordination, administration, process, and operational delivery.",
            href: "/contact",
          },
          {
            title: "Remote-ready collaboration",
            description:
              "Help teams move work forward with clear communication and dependable execution.",
            href: "/contact",
          },
        ],
      },
    ],
  },
  "About Us": {
    eyebrow: "Who Tidewrk is",
    title: "About Us",
    href: "/about-us",
    groups: [
      {
        label: "Company",
        title: "Company",
        description:
          "Tidewrk is built around forward motion: the people, systems, and execution support behind what businesses need to do next.",
        href: "/about-us",
        cards: [
          {
            title: "Company focus",
            description:
              "Learn what Tidewrk does, what we value, and why we are built around forward motion.",
            href: "/about-us",
          },
          {
            title: "Modern delivery partner",
            description:
              "We support software, data, operations, and advisory work with practical implementation focus.",
            href: "/about-us",
          },
          {
            title: "People and systems together",
            description:
              "Our work connects skilled teams with the workflows and technology needed to move faster.",
            href: "/about-us",
          },
          {
            title: "Start a conversation",
            description:
              "Tell us what you are building, improving, or scaling next.",
            href: "/contact",
          },
        ],
      },
    ],
  },
};

const isMegaMenuKey = (label: string): label is MegaMenuKey =>
  label in megaMenus;

const getMegaMenuIcon = (title: string): LucideIcon => {
  if (title.includes("Software")) return Code2;
  if (title.includes("Staff") || title.includes("Talent")) return UsersRound;
  if (title.includes("Remote")) return Globe2;
  if (title.includes("Executive") || title.includes("Strategic")) return Lightbulb;
  if (title.includes("Full-Stack") || title.includes("Product")) return Layers3;
  if (title.includes("Business Intelligence")) return BarChart3;
  if (title.includes("Data Science") || title.includes("Pattern")) return FlaskConical;
  if (title.includes("Data Engineering") || title.includes("Data")) return Database;
  if (title.includes("Web") || title.includes("Desktop")) return MonitorCog;
  if (title.includes("Mobile")) return Smartphone;
  if (title.includes("Machine Learning") || title.includes("Adaptive")) return BrainCircuit;
  if (title.includes("Cloud")) return CloudCog;
  if (title.includes("QA") || title.includes("Testing") || title.includes("Quality")) return CheckCircle2;
  if (title.includes("Virtual") || title.includes("Business support")) return Workflow;
  if (title.includes("Remote") || title.includes("Join")) return UserRound;
  if (title.includes("Company") || title.includes("Partner")) return BriefcaseBusiness;
  return Rocket;
};

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuKey | null>(null);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    if (!isMenuOpen && !activeMegaMenu) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setActiveMegaMenu(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMegaMenu, isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMegaMenu(null);
  };

  const toggleMegaMenu = (label: MegaMenuKey) => {
    setActiveMegaMenu((current) => (current === label ? null : label));
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    closeMenu();

    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavItemClick = (
    event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string,
    label?: string,
  ) => {
    if (label && isMegaMenuKey(label)) {
      event.preventDefault();
      setIsMenuOpen(false);
      toggleMegaMenu(label);
      return;
    }

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

  const handleMegaLinkClick = () => {
    closeMenu();
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
          {navigationItems.map((item) => {
            const hasMegaMenu = isMegaMenuKey(item.label);

            if (hasMegaMenu) {
              const isActive = activeMegaMenu === item.label;

              return (
                <button
                  aria-expanded={isActive}
                  className={`inline-flex h-16 items-center gap-1.5 transition hover:text-white ${
                    isActive ? "text-white" : ""
                  }`}
                  key={item.label}
                  onClick={(event) =>
                    handleNavItemClick(event, item.href, item.label)
                  }
                  type="button"
                >
                  {item.label}
                  <ChevronDown
                    className={`size-4 transition ${isActive ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              );
            }

            return (
              <Link
                className="inline-flex h-16 items-center transition hover:text-white"
                href={item.href}
                key={item.label}
                onClick={(event) => handleNavItemClick(event, item.href)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Button
          asChild
          variant="secondary"
          size="sm"
          className="hidden rounded-full border border-white/18 bg-white/10 pl-5 pr-4 text-white shadow-none backdrop-blur-md hover:bg-white/16 lg:inline-flex"
        >
          <Link href="/contact">
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
        className={`fixed inset-0 top-16 z-40 hidden bg-black/28 backdrop-blur-[2px] transition-opacity duration-200 lg:block ${
          activeMegaMenu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setActiveMegaMenu(null)}
      />

      <div
        className={`fixed inset-x-0 top-16 z-50 hidden max-h-[calc(100svh-4rem)] overflow-hidden border-y border-white/10 bg-[#02050a]/96 text-white shadow-[0_30px_100px_rgba(0,0,0,0.42)] backdrop-blur-2xl transition duration-300 lg:block ${
          activeMegaMenu
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        {activeMegaMenu && (
          <MegaMenuPanel
            menu={megaMenus[activeMegaMenu]}
            onLinkClick={handleMegaLinkClick}
          />
        )}
      </div>

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
              {isMegaMenuKey(item.label) ? (
                <div>
                  <button
                    aria-expanded={activeMegaMenu === item.label}
                    className="flex w-full items-center justify-between rounded-none px-3 py-3 text-left text-base font-medium text-white transition hover:bg-white/10"
                    onClick={() => toggleMegaMenu(item.label as MegaMenuKey)}
                    type="button"
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 transition ${
                        activeMegaMenu === item.label ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {activeMegaMenu === item.label && (
                    <div className="mt-2 border-l border-white/14 pl-3">
                      {megaMenus[item.label as MegaMenuKey].groups.map((group) => (
                        <div className="py-2" key={group.label}>
                          <Link
                            className="block px-3 py-2 text-sm font-semibold text-white transition hover:text-white/82"
                            href={group.href}
                            onClick={handleMegaLinkClick}
                          >
                            {group.label}
                          </Link>
                          {group.cards.map((megaItem) => (
                            <Link
                              className="block px-5 py-2 text-sm text-white/60 transition hover:text-white"
                              href={megaItem.href}
                              key={megaItem.title}
                              onClick={handleMegaLinkClick}
                            >
                              {megaItem.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  className="block rounded-none px-3 py-3 text-base font-medium text-white transition hover:bg-white/10"
                  href={item.href}
                  onClick={(event) => handleNavItemClick(event, item.href)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-4 w-full rounded-full bg-white text-[#003f72] shadow-none hover:bg-[#f5f9fd]"
          >
            <Link href="/contact" onClick={closeMenu}>
              Contact Us
              <Mail className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function MegaMenuPanel({
  menu,
  onLinkClick,
}: {
  menu: (typeof megaMenus)[MegaMenuKey];
  onLinkClick: () => void;
}) {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const activeGroup = menu.groups[activeGroupIndex] ?? menu.groups[0];

  useEffect(() => {
    setActiveGroupIndex(0);
  }, [menu.title]);

  return (
    <div className="mx-auto grid max-h-[calc(100svh-4rem)] w-full max-w-[1800px] grid-cols-[minmax(20rem,26rem)_1fr] overflow-hidden">
      <aside className="flex max-h-[calc(100svh-4rem)] min-h-0 flex-col border-r border-white/10 bg-white/[0.035]">
        <div className="min-h-0 flex-1 space-y-1 overflow-y-auto p-4">
          {menu.groups.map((group, index) => (
            <button
              className={`block w-full rounded-[0.85rem] px-4 py-3 text-left text-base transition ${
                index === activeGroupIndex
                  ? "bg-white/10 text-white"
                  : "text-white/58 hover:bg-white/[0.06] hover:text-white"
              }`}
              key={group.label}
              onClick={() => setActiveGroupIndex(index)}
              type="button"
            >
              {group.label}
            </button>
          ))}
        </div>

        <Link
          className="mt-auto flex items-center justify-between bg-[#003f72] px-8 py-5 text-base font-semibold text-white transition hover:bg-[#075286]"
          href={menu.href}
          onClick={onLinkClick}
        >
          Explore {menu.title.toLowerCase()}
          <ArrowRight className="size-5" aria-hidden="true" />
        </Link>
      </aside>

      <div className="max-h-[calc(100svh-4rem)] overflow-y-auto px-10 py-8 xl:px-14">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/42">
          {activeGroup.eyebrow ?? menu.eyebrow}
        </p>
        <Link
          className="mt-3 inline-flex items-center gap-3 text-[clamp(2rem,2.7vw,3.1rem)] font-semibold leading-none text-white transition hover:text-white/82"
          href={activeGroup.href}
          onClick={onLinkClick}
        >
          {activeGroup.title}
          <ArrowRight className="size-7 text-[#7bbcff]" aria-hidden="true" />
        </Link>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/60">
          {activeGroup.description}
        </p>

        <div className="mt-8 grid gap-4 xl:grid-cols-2">
          {activeGroup.cards.map((item) => {
            const ItemIcon = getMegaMenuIcon(item.title);

            return (
              <Link
                className="group flex items-start gap-3 rounded-[1rem] border border-white/10 bg-white/[0.045] p-4 transition hover:border-[#003f72]/70 hover:bg-white/[0.07]"
                href={item.href}
                key={item.title}
                onClick={onLinkClick}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[0.8rem] border border-[#003f72]/45 bg-[#003f72]/18 text-white shadow-[0_0_18px_rgba(0,63,114,0.3)] transition group-hover:border-[#7bbcff]/60 group-hover:shadow-[0_0_22px_rgba(0,63,114,0.48)]">
                  <ItemIcon className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-base font-semibold leading-6 text-white transition group-hover:text-[#b8ddff]">
                    {item.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-6 text-white/58">
                    {item.description}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
