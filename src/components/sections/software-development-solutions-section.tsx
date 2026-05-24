"use client";

import { useEffect, useState, type ComponentType, type ReactNode } from "react";
import {
  ArrowRight,
  Code2,
  Compass,
  GitBranch,
  PenTool,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Product Planning & Strategy",
    description:
      "Clarify the product direction, business priorities, and delivery path before development starts.",
    icon: Compass,
    bestFor: "Founders, operators, and teams shaping a new product",
    outcomes: [
      "Clear scope",
      "Shared priorities",
      "Practical roadmap",
    ],
  },
  {
    title: "UX/UI Design",
    description:
      "Design useful, clean, and easy-to-adopt interfaces that support real customer and team workflows.",
    icon: PenTool,
    bestFor: "Teams improving adoption and user experience",
    outcomes: [
      "Better journeys",
      "Cleaner screens",
      "Ready designs",
    ],
  },
  {
    title: "Custom Software Development",
    description:
      "Build secure, scalable applications around your exact workflows, data, customers, and operating model.",
    icon: Code2,
    bestFor: "Businesses needing purpose-built digital tools",
    outcomes: [
      "Reliable build",
      "Secure code",
      "Useful features",
    ],
  },
  {
    title: "System Integration",
    description:
      "Connect platforms, tools, and data sources so information moves cleanly across the business.",
    icon: GitBranch,
    bestFor: "Teams with disconnected tools or manual handoffs",
    outcomes: [
      "Connected tools",
      "Less manual work",
      "Cleaner data",
    ],
  },
  {
    title: "Testing & Deployment",
    description:
      "Validate product quality and release with confidence through practical QA, deployment, and launch support.",
    icon: ShieldCheck,
    bestFor: "Teams preparing for dependable launches",
    outcomes: [
      "Quality checks",
      "Stable releases",
      "Launch support",
    ],
  },
  {
    title: "Continuous Improvement",
    description:
      "Keep improving the product after launch with support, performance tuning, and iterative enhancements.",
    icon: RefreshCw,
    bestFor: "Growing products that need long-term momentum",
    outcomes: [
      "Product updates",
      "Faster workflows",
      "Long-term support",
    ],
  },
];

export function SoftwareDevelopmentSolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const activeSolution = solutions[activeIndex];
  const ActiveIcon = activeSolution.icon;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % solutions.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [activeIndex]);

  return (
    <section
      className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]"
      id="services"
    >
      <div className="mx-auto grid w-full max-w-[1900px] gap-10 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
        <div className="lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Software Solutions
          </div>
          <h2 className="mt-6 max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            Explore Our Software Development Solutions
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#666666] sm:text-xl sm:leading-9">
            Practical software teams for planning, design, development, launch,
            and continuous improvement.
          </p>

          <div className="mt-8 border-y border-[#e4e7ec] lg:max-w-xl">
            {solutions.map((solution, index) => {
              const SolutionIcon = solution.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  aria-pressed={isActive}
                  className={cn(
                    "group flex w-full items-center gap-3 border-b border-[#e4e7ec] py-3.5 text-left transition last:border-b-0 hover:bg-[#f8fafc]",
                    isActive && "bg-[#f8fafc]",
                  )}
                  key={solution.title}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center border border-[#dfe5ec] bg-white text-[#003466] transition",
                      isActive && "border-[#003466] bg-[#003466] text-white",
                    )}
                  >
                    <SolutionIcon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold leading-6 text-[#111217] sm:text-lg">
                      {solution.title}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className={cn(
                      "hidden size-5 shrink-0 text-[#9aa3ad] transition group-hover:translate-x-1 group-hover:text-[#003466] sm:block",
                      isActive && "translate-x-1 text-[#f58220]",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <article className="relative flex min-h-full flex-col overflow-hidden border border-[#dfe5ec] bg-white">
          <div className="border-b border-[#e3e8ee] bg-white px-6 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center bg-[#003466] text-white">
                <ActiveIcon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm leading-5 text-[#666666]">
                  Selected solution
                </p>
                <h3 className="text-2xl font-semibold leading-tight text-[#111217] sm:text-3xl">
                  {activeSolution.title}
                </h3>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-7 lg:p-8">
            <div className="relative flex min-h-[520px] flex-1 overflow-hidden border border-[#dfe5ec] bg-[#fbfcfd] p-5 sm:p-7">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.04)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
              <div className="pointer-events-none absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#003466]/30 to-transparent" />
              <div className="pointer-events-none absolute left-1/2 top-10 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-transparent via-[#003466]/24 to-transparent" />

              <div className="relative z-10 grid w-full grid-rows-[auto_1fr_auto] gap-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#003466]">
                      What it creates
                    </p>
                    <p className="mt-2 max-w-md text-base leading-7 text-[#555555]">
                      {activeSolution.description}
                    </p>
                  </div>
                  <span className="hidden h-2 w-2 bg-[#f58220] sm:block" aria-hidden="true" />
                </div>

                <div className="grid place-items-center">
                  <SolutionVisualPanel icon={ActiveIcon} />
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {activeSolution.outcomes.map((outcome, index) => (
                    <div
                      className="border border-[#dfe5ec] bg-white p-4"
                      key={outcome}
                    >
                      <span
                        className={cn(
                          "text-sm font-semibold",
                          index === 1 ? "text-[#f58220]" : "text-[#003466]",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-4 text-lg font-semibold leading-tight text-[#111217]">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function SolutionVisualPanel({
  icon: Icon,
}: {
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="relative flex h-64 w-full max-w-xl items-center justify-center overflow-hidden border border-[#dfe5ec] bg-white sm:h-72">
      <div className="absolute right-4 top-4 z-10 size-2 bg-[#f58220]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.04)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#003466]/45 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-[#003466]/36 to-transparent" />

      <SolutionVisualNode className="left-[12%] top-[20%] bg-[#f7fbff]">
        <Compass className="size-4" aria-hidden="true" />
      </SolutionVisualNode>
      <SolutionVisualNode className="right-[12%] top-[24%] bg-white">
        <Code2 className="size-4" aria-hidden="true" />
      </SolutionVisualNode>
      <SolutionVisualNode className="bottom-[18%] left-[18%] bg-[#fff8f2] text-[#f58220]">
        <ArrowRight className="size-4" aria-hidden="true" />
      </SolutionVisualNode>
      <SolutionVisualNode className="bottom-[18%] right-[18%] bg-[#eef7ff]">
        <ShieldCheck className="size-4" aria-hidden="true" />
      </SolutionVisualNode>

      <div className="relative flex size-20 items-center justify-center border border-[#d7e6f6] bg-white text-[#003466] shadow-[0_20px_70px_rgba(0,52,102,0.14)] sm:size-24">
        <Icon className="size-9 sm:size-11" aria-hidden="true" />
      </div>
    </div>
  );
}

function SolutionVisualNode({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute flex size-11 items-center justify-center border border-[#e0e6ee] bg-white text-[#003466] shadow-[0_14px_40px_rgba(0,52,102,0.1)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
