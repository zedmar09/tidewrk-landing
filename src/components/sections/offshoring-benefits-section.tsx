import {
  BadgeDollarSign,
  Clock3,
  Focus,
  Gauge,
  Globe2,
  Layers3,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { cn } from "@/lib/utils";

const benefits = [
  {
    pressure: "High local hiring costs",
    outcome: "Lower operating costs",
    description: "Reduce overhead while keeping work consistent.",
    icon: BadgeDollarSign,
  },
  {
    pressure: "Limited local capacity",
    outcome: "Skilled global talent",
    description: "Add experienced support across key business functions.",
    icon: Globe2,
  },
  {
    pressure: "Internal teams overloaded",
    outcome: "More operational capacity",
    description: "Strengthen delivery without stretching key employees.",
    icon: Layers3,
  },
  {
    pressure: "Slow turnaround times",
    outcome: "Faster delivery",
    description: "Keep work moving with stronger day-to-day support.",
    icon: Clock3,
  },
  {
    pressure: "Changing business demand",
    outcome: "Flexible scaling",
    description: "Adjust team support as workload and priorities shift.",
    icon: Gauge,
  },
  {
    pressure: "Leaders pulled into execution",
    outcome: "Stronger business focus",
    description: "Keep internal teams focused on strategy and growth.",
    icon: Focus,
  },
];

export function OffshoringBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1900px]">
        <div className="grid gap-8 border-b border-[#d8e6f5] pb-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
              <span className="size-2 bg-[#f58220]" aria-hidden="true" />
              Business advantage
            </div>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
              Operate smarter with global support
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9 lg:ml-auto">
            Offshoring gives your business a practical way to reduce pressure,
            add capability, and keep important work moving without building
            every function locally.
          </p>
        </div>

        <div className="mt-8 grid auto-rows-fr gap-6 lg:grid-cols-2 lg:gap-7">
          {benefits.map((benefit) => {
            const BenefitIcon = benefit.icon;

            return (
              <article
                className="group flex h-full flex-col overflow-hidden border border-[#e6e8ec] bg-white transition duration-500 hover:-translate-y-1 hover:border-[#ccd8e4]"
                key={benefit.outcome}
              >
                <BenefitVisualPanel icon={BenefitIcon} pressure={benefit.pressure} />

                <div className="flex flex-1 flex-col px-6 pb-7 pt-4 sm:px-7">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-[1.65rem]">
                      {benefit.outcome}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-[#666666]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BenefitVisualPanel({
  icon: Icon,
  pressure,
}: {
  icon: ComponentType<{ className?: string }>;
  pressure: string;
}) {
  return (
    <div className="relative mx-3 mt-3 flex h-36 items-center justify-center overflow-hidden bg-[#fbfcfd] sm:h-40">
      <div className="absolute left-4 top-4 z-10 max-w-[76%] border border-[#003466] bg-[#003466] px-3.5 py-2 text-sm font-semibold leading-5 text-white shadow-[0_10px_30px_rgba(0,52,102,0.08)]">
        {pressure}
      </div>
      <div className="absolute right-4 top-4 z-10 size-2 bg-[#f58220]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.04)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#003466]/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-[#003466]/40 to-transparent" />

      <BenefitVisualNode className="left-[14%] top-[24%] bg-[#f7fbff]">
        <Gauge className="size-4" aria-hidden="true" />
      </BenefitVisualNode>
      <BenefitVisualNode className="right-[12%] top-[28%] bg-white">
        <Globe2 className="size-4" aria-hidden="true" />
      </BenefitVisualNode>
      <BenefitVisualNode className="bottom-[18%] left-[22%] bg-[#fff8f2] text-[#f58220]">
        <BadgeDollarSign className="size-4" aria-hidden="true" />
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
