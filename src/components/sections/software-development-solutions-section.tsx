"use client";

import { useState } from "react";
import {
  ArrowRight,
  Code2,
  Compass,
  GitBranch,
  PenTool,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
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

        <article className="relative flex min-h-full flex-col overflow-hidden border border-[#dfe5ec] bg-[#fbfcfd]">
          <div className="border-b border-[#e3e8ee] bg-white px-6 py-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
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
              <span className="border border-[#dfe5ec] bg-white px-4 py-2 text-sm text-[#003466]">
                {activeSolution.bestFor}
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center px-6 py-8 sm:px-8 lg:py-10">
            <div className="relative min-h-[360px] overflow-hidden border border-[#dfe5ec] bg-white">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.04)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
              <div className="pointer-events-none absolute inset-x-12 top-1/2 h-px bg-gradient-to-r from-transparent via-[#003466]/50 to-transparent" />
              <div className="pointer-events-none absolute left-1/2 top-10 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-transparent via-[#003466]/40 to-transparent" />

              <div className="absolute left-[8%] top-[18%] border border-[#e0e6ee] bg-white px-4 py-3">
                <p className="text-sm font-semibold text-[#111217]">Plan</p>
                <p className="mt-1 text-xs text-[#666666]">Align goals</p>
              </div>
              <div className="absolute right-[8%] top-[22%] border border-[#e0e6ee] bg-white px-4 py-3">
                <p className="text-sm font-semibold text-[#111217]">Build</p>
                <p className="mt-1 text-xs text-[#666666]">Ship value</p>
              </div>
              <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 border border-[#e0e6ee] bg-white px-4 py-3">
                <p className="text-sm font-semibold text-[#111217]">
                  Improve
                </p>
                <p className="mt-1 text-xs text-[#666666]">Keep growing</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex size-32 items-center justify-center border border-[#d7e6f6] bg-white text-[#003466]">
                  <ActiveIcon className="size-14" aria-hidden="true" />
                </div>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-[#333333] sm:text-xl sm:leading-9">
              {activeSolution.description}
            </p>

            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3">
              {activeSolution.outcomes.map((outcome) => (
                <span
                  className="border border-[#dfe5ec] bg-white px-4 py-2 text-sm font-medium text-[#333333]"
                  key={outcome}
                >
                  {outcome}
                </span>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button asChild className="shadow-none" size="lg">
                <a href="#contact">
                  Talk to Tidewrk
                  <ArrowRight className="size-5" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
