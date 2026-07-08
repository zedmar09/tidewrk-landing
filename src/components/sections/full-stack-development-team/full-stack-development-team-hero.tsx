import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Braces,
  Code2,
  Database,
  GitBranch,
  LayoutDashboard,
  PlugZap,
  Server,
  ShieldCheck,
} from "lucide-react";

export function FullStackDevelopmentTeamHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-white px-5 pt-[4.75rem] sm:px-8 sm:pt-20 lg:px-[6vw]"
      id="full-stack-development-team"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.055)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none absolute inset-0 bg-white/76" />
      <HeroSideGraphics />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.75rem)] w-full max-w-[1900px] items-center justify-center py-12 text-center sm:py-16">
        <div className="mx-auto w-full min-w-0 max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2.5 text-sm font-medium text-[#003466] shadow-[0_14px_40px_rgba(0,52,102,0.06)]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Full-Stack Development Team
          </div>

          <h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-normal text-[#111217] sm:text-6xl sm:leading-[1.02] lg:text-7xl xl:text-[5rem]">
            <span className="block sm:inline">Build software</span>{" "}
            <span className="block sm:inline">that scales</span>{" "}
            <span className="block sm:inline">and saves time</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            Tidewrk gives you one aligned team for product planning, UX,
            front-end, back-end, databases, integrations, testing, and launch,
            so your product moves faster with fewer handoffs.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="inline-flex h-14 w-full items-center justify-center gap-2 bg-[#003466] px-8 text-lg font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a447a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/30 sm:w-auto"
              href="/contact"
            >
              Talk to Tidewrk
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex h-14 w-full items-center justify-center gap-2 border border-[#d8e6f5] bg-white px-8 text-lg font-semibold text-[#003466] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5f9fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/30 sm:w-auto"
              href="/software-development"
            >
              Explore Software Development
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSideGraphics() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
      <div className="absolute -left-72 bottom-[9%] top-[9%] flex w-[430px] flex-col justify-between gap-10 opacity-80 2xl:-left-32">
        <div className="-rotate-6">
          <SidePanel>
            <div className="flex items-center justify-between border-b border-[#d8e6f5] px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-[#003466]">
                  Product plan
                </p>
                <p className="mt-1 text-xs text-[#78828d]">
                  UX to launch scope
                </p>
              </div>
              <span className="flex size-11 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                <LayoutDashboard className="size-5" />
              </span>
            </div>
            <div className="space-y-4 p-5">
              <div className="h-24 border border-[#d8e6f5] bg-[#eef4fb]" />
              <div className="grid grid-cols-3 gap-3">
                <StackTile icon={Braces} label="UX" />
                <StackTile icon={Code2} label="FE" tone="blue" />
                <StackTile icon={Database} label="DB" tone="orange" />
              </div>
            </div>
          </SidePanel>
        </div>

        <div className="ml-14 w-[300px] -rotate-3 border border-[#d8e6f5] bg-white p-4 shadow-[14px_18px_50px_rgba(0,52,102,0.08)]">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
              <GitBranch className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#111217]">
                Sprint ready
              </p>
              <p className="mt-1 text-xs text-[#78828d]">
                One team, fewer handoffs
              </p>
            </div>
          </div>
        </div>

        <div className="ml-2 w-[360px] rotate-3">
          <SidePanel>
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between">
                <span className="border border-[#d8e6f5] bg-white px-3 py-2 text-xs font-semibold text-[#003466]">
                  Backend services
                </span>
                <span className="flex size-11 items-center justify-center border border-[#d8e6f5] bg-[#003466] text-white">
                  <Server className="size-5" />
                </span>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <StackTile icon={Code2} label="API" tone="blue" />
                <span className="h-px w-10 bg-[#d8e6f5]" />
                <StackTile icon={PlugZap} label="Sync" />
              </div>
            </div>
          </SidePanel>
        </div>
      </div>

      <div className="absolute -right-72 bottom-[9%] top-[9%] flex w-[410px] flex-col justify-between gap-10 opacity-80 2xl:-right-28">
        <div className="rotate-6">
          <SidePanel>
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center border border-[#d8e6f5] bg-[#003466] text-white">
                  <Server className="size-5" />
                </span>
                <span className="border border-[#d8e6f5] bg-white px-3 py-2 text-xs font-semibold text-[#003466]">
                  Launch ready
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111217]">
                  Build pipeline
                </p>
                <div className="mt-3 space-y-2">
                  <span className="block h-3 w-44 bg-[#eaf1f8]" />
                  <span className="block h-3 w-56 bg-[#eaf1f8]" />
                  <span className="block h-3 w-32 bg-[#f8d8bd]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <MiniCard icon={PlugZap} label="Integrations" />
                <MiniCard icon={ShieldCheck} label="QA checks" />
              </div>
            </div>
          </SidePanel>
        </div>

        <div className="mr-12 rotate-3 border border-[#d8e6f5] bg-white p-5 shadow-[14px_18px_50px_rgba(0,52,102,0.08)]">
          <div className="flex items-center gap-4">
            <span className="flex size-12 items-center justify-center border border-[#d8e6f5] bg-[#fff4ea] text-[#f58220]">
              <Database className="size-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#111217]">
                Scalable systems
              </p>
              <div className="mt-3 h-2 w-full bg-[#eaf1f8]">
                <span className="block h-full w-2/3 bg-[#003466]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mr-2 w-[360px] -rotate-3">
          <SidePanel>
            <div className="space-y-4 p-5">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                  <ShieldCheck className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#111217]">
                    Quality release
                  </p>
                  <p className="mt-1 text-xs text-[#78828d]">
                    Test, deploy, improve
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <span className="h-14 border border-[#d8e6f5] bg-[#eaf4ff]" />
                <span className="h-14 border border-[#d8e6f5] bg-white" />
                <span className="h-14 border border-[#d8e6f5] bg-[#fff4ea]" />
                <span className="h-14 border border-[#d8e6f5] bg-white" />
              </div>
            </div>
          </SidePanel>
        </div>
      </div>
    </div>
  );
}

function SidePanel({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden border border-[#d8e6f5] bg-white shadow-[18px_24px_70px_rgba(0,52,102,0.08)]">
      {children}
    </div>
  );
}

function StackTile({
  icon: Icon,
  label,
  tone = "light",
}: {
  icon: typeof Braces;
  label: string;
  tone?: "light" | "blue" | "orange";
}) {
  const toneClass = {
    light: "bg-white text-[#111217]",
    blue: "bg-[#eaf4ff] text-[#003466]",
    orange: "bg-[#fff4ea] text-[#f58220]",
  }[tone];

  return (
    <div
      className={`flex h-20 flex-col items-center justify-center gap-2 border border-[#d8e6f5] ${toneClass}`}
    >
      <Icon className="size-5" />
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}

function MiniCard({
  icon: Icon,
  label,
}: {
  icon: typeof PlugZap;
  label: string;
}) {
  return (
    <div className="border border-[#d8e6f5] bg-[#fbfcfd] p-4">
      <Icon className="size-5 text-[#003466]" />
      <p className="mt-3 text-xs font-semibold text-[#111217]">{label}</p>
    </div>
  );
}
