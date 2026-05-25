import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Compass,
  ShieldCheck,
} from "lucide-react";

const floatingIcons = [
  {
    icon: Compass,
    className: "-left-8 top-[18%] hidden sm:flex",
  },
  {
    icon: BarChart3,
    className: "-right-8 top-[19%] flex",
  },
  {
    icon: ShieldCheck,
    className: "bottom-[18%] left-[7%] flex",
  },
  {
    icon: BriefcaseBusiness,
    className: "bottom-[17%] right-[7%] hidden sm:flex",
  },
  {
    icon: BadgeCheck,
    className: "left-[23%] top-[9%] hidden xl:flex",
  },
];

const advisorySignals = [
  "Strategic clarity",
  "Executive alignment",
  "Practical next steps",
];

export function ExecutiveAdvisoryHero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-0 pt-[4.75rem] sm:px-8 sm:pt-20 lg:px-[6vw]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none absolute inset-0 bg-white/72" />

      <div className="relative mx-auto flex min-h-[calc(100svh-4.75rem)] w-full max-w-[1900px] flex-col justify-center py-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {floatingIcons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className={`absolute size-14 items-center justify-center border p-3 sm:size-16 md:size-20 md:p-4 ${
                  index === 1
                    ? "border-[#ffd9b8] bg-[#fff8f2] text-[#f58220]"
                    : "border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]"
                } ${item.className}`}
                key={index}
              >
                <Icon className="size-8 md:size-10" aria-hidden="true" />
              </div>
            );
          })}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2.5 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Executive Advisory & Consulting
          </div>

          <h1 className="mx-auto mt-5 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-normal text-[#111217] sm:text-6xl lg:text-7xl xl:text-[4.85rem]">
            Lead with more clarity when decisions matter most
          </h1>

          <p className="mx-auto mt-5 max-w-5xl text-balance text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9 lg:text-[1.35rem] lg:leading-9">
            Tidewrk helps CEOs, founders, executives, and leadership teams turn
            complex business challenges into clear strategy, confident
            decisions, and practical next steps.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              className="inline-flex h-14 w-full items-center justify-center gap-2 bg-[#003466] px-8 text-lg font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a447a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/30 sm:w-auto"
              href="#contact"
            >
              Talk to Tidewrk
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex h-14 w-full items-center justify-center gap-2 border border-[#d8e6f5] bg-white px-8 text-lg font-semibold text-[#003466] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5f9fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/30 sm:w-auto"
              href="/#services"
            >
              Explore Services
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-3">
            {advisorySignals.map((signal, index) => (
              <div
                className="border border-[#dce9f6] bg-white/90 px-5 py-4 text-base font-semibold text-[#003466] backdrop-blur-sm"
                key={signal}
              >
                <span className={index === 1 ? "mr-2 text-[#f58220]" : "mr-2"}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {signal}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
