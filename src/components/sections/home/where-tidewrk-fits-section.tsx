import Link from "next/link";
import { ArrowRight, Code2, UserRound, Workflow } from "lucide-react";

const fitCards = [
  {
    title: "Founders & Lean Teams",
    description:
      "When the next move is clear but capacity is thin, Tidewrk adds steady execution without adding unnecessary overhead.",
    href: "/contact",
    icon: UserRound,
    signal: "Start with focused support",
  },
  {
    title: "Operations Under Pressure",
    description:
      "Virtual Assistants, admin support, and remote team capacity help keep daily work moving while leaders stay focused.",
    href: "/virtual-assistance-business-administration",
    icon: Workflow,
    signal: "Create room to breathe",
  },
  {
    title: "Software & Data Momentum",
    description:
      "Product, automation, dashboards, QA, and data support help teams turn scattered work into systems that carry progress.",
    href: "/#solutions",
    icon: Code2,
    signal: "Build the operating layer",
  },
];

export function WhereTidewrkFitsSection() {
  return (
    <section className="relative z-0 overflow-hidden bg-[#02050a] px-5 py-14 text-white sm:px-8 md:py-20 lg:px-[6vw]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_28%,rgba(0,63,114,0.24),transparent_32%),radial-gradient(ellipse_at_78%_68%,rgba(0,63,114,0.22),transparent_34%),linear-gradient(180deg,#02050a_0%,#050b13_48%,#02050a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#02050a] via-[#02050a]/88 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#02050a] via-[#02050a]/88 to-transparent"
      />

      <div className="relative mx-auto max-w-[1800px]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm font-medium text-white/78 shadow-[0_14px_50px_rgba(0,0,0,0.18)] backdrop-blur-md sm:px-4">
            <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
              Where Tidewrk fits
            </span>
            Built for the work behind growth
          </div>

          <h2 className="mt-6 text-balance text-[2.6rem] font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-[4.7rem]">
            Support for the moments when work needs{" "}
            <span className="tidewrk-glow-text">more current</span>
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-pretty text-xl leading-9 text-white/66 sm:text-2xl sm:leading-10">
            Tidewrk helps teams add the right support when growth, delivery,
            operations, or customer demand starts moving faster than internal
            capacity.
          </p>
        </div>

        <div className="relative mt-12 grid gap-5 md:mt-16 lg:grid-cols-3">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[82%] -translate-x-1/2 bg-white/10 shadow-[0_0_18px_rgba(255,255,255,0.18),0_0_30px_rgba(0,63,114,0.45)] lg:block"
          />

          {fitCards.map((card, index) => {
            const CardIcon = card.icon;

            return (
              <Link
                aria-label={`Explore ${card.title}`}
                className="group relative min-h-[22rem] overflow-hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.035))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#003f72]/70 hover:bg-white/[0.065] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:p-7"
                href={card.href}
                key={card.title}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#003f72] to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(0,63,114,0.22),transparent_34%)]"
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex size-14 items-center justify-center rounded-full border border-[#003f72]/50 bg-[#003f72]/22 text-white shadow-[0_0_18px_rgba(255,255,255,0.12),0_0_34px_rgba(0,63,114,0.45)]">
                      <CardIcon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.14em] text-white/34">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-9">
                    <p className="text-sm font-semibold uppercase tracking-[0.13em] text-white/42">
                      {card.signal}
                    </p>
                    <h3 className="mt-3 text-balance text-3xl font-semibold leading-tight text-white">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-lg leading-8 text-white/64">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <span className="inline-flex items-center gap-2 text-base font-semibold text-white/86 transition group-hover:text-white">
                      See the fit
                      <ArrowRight
                        className="size-4 transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
