import {
  Activity,
  BadgeDollarSign,
  BarChart3,
  BrainCircuit,
  FileBarChart,
  Gauge,
  Layers3,
  SearchCheck,
  TrendingUp,
  UsersRound,
  Zap,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Make Better Decisions",
    description:
      "Use accurate data to guide business choices without relying on assumptions, delayed reports, or incomplete information.",
    icon: BrainCircuit,
  },
  {
    title: "Improve Efficiency",
    description:
      "Automate reporting and reduce manual data work so your team can spend more time solving problems and moving work forward.",
    icon: Zap,
  },
  {
    title: "Understand Business Performance",
    description:
      "Track KPIs, revenue, operations, customer activity, and team performance in one clear view.",
    icon: Activity,
  },
  {
    title: "Find Growth Opportunities",
    description:
      "Spot sales trends, customer patterns, product demand, and market opportunities that can help your business grow.",
    icon: TrendingUp,
  },
  {
    title: "Reduce Costs And Waste",
    description:
      "Identify bottlenecks, duplicated work, overspending, and areas where resources can be used more effectively.",
    icon: BadgeDollarSign,
  },
  {
    title: "Improve Customer Insight",
    description:
      "Understand behavior, preferences, feedback, and buying patterns so you can deliver better customer experiences.",
    icon: UsersRound,
  },
  {
    title: "Strengthen Reporting",
    description:
      "Turn complex information into dashboards and reports that leaders, teams, and stakeholders can understand quickly.",
    icon: FileBarChart,
  },
  {
    title: "Scale With Confidence",
    description:
      "Build a data foundation that can grow with your systems, customers, teams, and operations.",
    icon: Layers3,
  },
];

export function BusinessIntelligenceBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1900px]">
        <div className="mx-auto max-w-5xl border-b border-[#d8e6f5] pb-8 text-center">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Business benefits
          </div>
          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            Benefits Of Business Intelligence
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            Give leaders the clarity to improve decisions, understand
            performance, and find growth opportunities faster.
          </p>
        </div>

        <div className="mt-8 grid auto-rows-fr gap-6 lg:grid-cols-2 lg:gap-7">
          {benefits.map((benefit) => {
            const BenefitIcon = benefit.icon;

            return (
              <article
                className="group flex h-full flex-col overflow-hidden border border-[#e6e8ec] bg-white transition duration-500 hover:-translate-y-1 hover:border-[#ccd8e4]"
                key={benefit.title}
              >
                <BusinessIntelligenceBenefitVisualPanel
                  icon={BenefitIcon}
                  title={benefit.title}
                />

                <div className="flex flex-1 flex-col px-6 pb-7 pt-4 sm:px-7">
                  <p className="text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
                    {benefit.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BusinessIntelligenceBenefitVisualPanel({
  icon: Icon,
  title,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="relative mx-3 mt-3 flex h-36 items-center justify-center overflow-hidden bg-[#fbfcfd] sm:h-40">
      <h3 className="absolute left-4 top-4 z-10 max-w-[78%] border border-[#003466] bg-[#003466] px-3.5 py-2 text-base font-semibold leading-6 text-white shadow-[0_10px_30px_rgba(0,52,102,0.08)]">
        {title}
      </h3>
      <div className="absolute right-4 top-4 z-10 size-2 bg-[#f58220]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.04)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#003466]/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-[#003466]/40 to-transparent" />

      <BenefitVisualNode className="left-[14%] top-[26%] bg-[#f7fbff]">
        <BarChart3 className="size-4" aria-hidden="true" />
      </BenefitVisualNode>
      <BenefitVisualNode className="right-[12%] top-[30%] bg-white">
        <SearchCheck className="size-4" aria-hidden="true" />
      </BenefitVisualNode>
      <BenefitVisualNode className="bottom-[17%] left-[22%] bg-[#fff8f2] text-[#f58220]">
        <Gauge className="size-4" aria-hidden="true" />
      </BenefitVisualNode>

      <div className="relative flex size-16 items-center justify-center border border-[#e4e9ef] bg-white text-[#003466] shadow-[0_20px_70px_rgba(0,52,102,0.12)]">
        <Icon className="size-7" aria-hidden="true" />
      </div>
    </div>
  );
}

function BenefitVisualNode({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute flex size-10 items-center justify-center border border-[#e0e6ee] bg-white text-[#003466] shadow-[0_14px_40px_rgba(0,52,102,0.1)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
