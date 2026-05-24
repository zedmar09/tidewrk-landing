import {
  ClipboardCheck,
  Gauge,
  Layers3,
  Rocket,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Better Collaboration",
    description:
      "A complete team works across strategy, design, development, and testing, so every part of the product supports the same business goal.",
    icon: UsersRound,
    visual: "network",
  },
  {
    title: "Faster Delivery",
    description:
      "Clear roles, agile workflows, and experienced execution help reduce delays and keep development moving.",
    icon: Rocket,
    visual: "analytics",
  },
  {
    title: "Higher Quality",
    description:
      "Built-in quality assurance helps ensure your software is tested, stable, secure, and ready for real users.",
    icon: ShieldCheck,
    visual: "quality",
  },
  {
    title: "Scalable Solutions",
    description:
      "We build with future growth in mind, so your software can evolve as your business expands.",
    icon: Layers3,
    visual: "integration",
  },
  {
    title: "Lower Project Risk",
    description:
      "A structured process helps identify issues early, manage priorities, and reduce costly surprises.",
    icon: Gauge,
    visual: "performance",
  },
  {
    title: "Clear Accountability",
    description:
      "Dedicated ownership, regular check-ins, and visible progress keep decisions moving and make every next step easier to trust.",
    icon: ClipboardCheck,
    visual: "workflow",
  },
];

export function SoftwareDevelopmentBenefitsBento() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="relative mx-auto w-full">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 h-1 w-14 bg-[#f58220]" aria-hidden="true" />
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            Why Dedicated Teams Work
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-balance text-lg leading-8 text-[#666666] sm:text-xl sm:leading-9">
            The right people, process, and quality checks to move software from
            idea to launch with less friction.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const BenefitIcon = benefit.icon;

            return (
              <article
                className="group overflow-hidden border border-[#e6e8ec] bg-white transition duration-500 hover:-translate-y-1 hover:border-[#ccd8e4]"
                key={benefit.title}
              >
                <VisualPanel icon={BenefitIcon} variant={benefit.visual} />

                <div className="px-6 pb-7 pt-3 sm:px-7 sm:pt-4">
                  <h3 className="text-2xl font-semibold leading-tight tracking-normal text-[#111217]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
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

function VisualPanel({
  icon: Icon,
  variant,
}: {
  icon: typeof UsersRound;
  variant: string;
}) {
  return (
    <div className="relative mx-3 mt-3 flex h-36 items-center justify-center overflow-hidden bg-[#fbfcfd] sm:h-40">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.04)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#003466]/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-[#003466]/40 to-transparent" />

      {variant === "analytics" && <AnalyticsVisual icon={Icon} />}
      {variant === "network" && <NetworkVisual icon={Icon} />}
      {variant === "quality" && <QualityVisual icon={Icon} />}
      {variant === "integration" && <IntegrationVisual icon={Icon} />}
      {variant === "performance" && <PerformanceVisual icon={Icon} />}
      {variant === "workflow" && <WorkflowVisual icon={Icon} />}
    </div>
  );
}

function VisualNode({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute flex size-10 items-center justify-center rounded-xl border border-[#e0e6ee] bg-white text-[#003466] shadow-[0_14px_40px_rgba(0,52,102,0.1)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function NetworkVisual({ icon: Icon }: { icon: typeof UsersRound }) {
  return (
    <>
      <VisualNode className="left-[14%] top-[24%]">
        <Icon className="size-4" />
      </VisualNode>
      <VisualNode className="right-[12%] top-[28%] bg-[#eef7ff]">
        <Rocket className="size-4" />
      </VisualNode>
      <VisualNode className="bottom-[18%] left-[22%] border-[#ffd9b8] bg-[#fff8f2] text-[#f58220]">
        <ShieldCheck className="size-4" />
      </VisualNode>
      <div className="relative flex size-16 items-center justify-center rounded-2xl border border-[#e4e9ef] bg-white text-[#003466] shadow-[0_20px_70px_rgba(0,52,102,0.12)]">
        <Icon className="size-7" />
      </div>
    </>
  );
}

function AnalyticsVisual({ icon: Icon }: { icon: typeof UsersRound }) {
  return (
    <>
      <div className="absolute left-[9%] top-[39%] h-14 w-[36%] rounded-xl border border-[#e4e9ef] bg-white/85 shadow-[0_18px_54px_rgba(0,52,102,0.07)]" />
      <div className="absolute right-[9%] top-[39%] h-14 w-[36%] rounded-xl border border-[#e4e9ef] bg-white/85 shadow-[0_18px_54px_rgba(0,52,102,0.07)]" />
      <div className="absolute left-[13%] top-[53%] h-px w-[26%] bg-[#e7edf4]" />
      <div className="absolute right-[13%] top-[53%] h-px w-[26%] bg-[#e7edf4]" />
      <div className="absolute left-[13%] top-[61%] h-px w-[20%] bg-[#f58220]/45" />
      <div className="absolute right-[13%] top-[61%] h-px w-[20%] bg-[#edf1f5]" />
      <div className="relative flex size-14 items-center justify-center rounded-2xl border border-[#d7e6f6] bg-white text-[#003466] shadow-[0_20px_70px_rgba(0,52,102,0.16)]">
        <Icon className="size-6" />
      </div>
    </>
  );
}

function QualityVisual({ icon: Icon }: { icon: typeof UsersRound }) {
  return (
    <>
      <div className="absolute bottom-6 left-1/2 h-14 w-[72%] -translate-x-1/2 rounded-xl border border-[#e4e9ef] bg-white/90 shadow-[0_18px_54px_rgba(0,52,102,0.08)]" />
      <div className="absolute bottom-12 left-1/2 h-14 w-[58%] -translate-x-1/2 rounded-xl border border-[#ffd9b8] bg-[#fff8f2]/80" />
      <div className="relative flex size-14 items-center justify-center rounded-2xl border border-[#d7e6f6] bg-white text-[#003466] shadow-[0_20px_70px_rgba(0,52,102,0.13)]">
        <Icon className="size-6" />
      </div>
    </>
  );
}

function IntegrationVisual({ icon: Icon }: { icon: typeof UsersRound }) {
  return (
    <>
      <VisualNode className="left-[12%] top-[32%] rotate-[-10deg] bg-[#f7fbff]">
        <Rocket className="size-4" />
      </VisualNode>
      <VisualNode className="right-[12%] top-[32%] rotate-[10deg]">
        <ShieldCheck className="size-4" />
      </VisualNode>
      <VisualNode className="bottom-[18%] left-[20%] border-[#ffd9b8] bg-[#fff8f2] text-[#f58220]">
        <Gauge className="size-4" />
      </VisualNode>
      <VisualNode className="bottom-[18%] right-[20%] bg-[#eef7ff]">
        <Layers3 className="size-4" />
      </VisualNode>
      <div className="relative flex size-16 items-center justify-center rounded-2xl border border-[#d7e6f6] bg-white text-[#003466] shadow-[0_20px_70px_rgba(0,52,102,0.14)]">
        <Icon className="size-7" />
      </div>
    </>
  );
}

function PerformanceVisual({ icon: Icon }: { icon: typeof UsersRound }) {
  return (
    <>
      <div className="absolute right-6 top-6 rounded-xl border border-[#e4e9ef] bg-white px-4 py-3 shadow-[0_18px_54px_rgba(0,52,102,0.08)]">
        <div className="h-2 w-20 rounded-full bg-[#e8edf3]" />
        <div className="mt-2 h-2 w-12 rounded-full bg-[#003466]/60" />
      </div>
      <div className="absolute bottom-6 left-6 right-6 h-16 rounded-xl border border-[#e4e9ef] bg-white px-4 py-3 shadow-[0_18px_54px_rgba(0,52,102,0.08)]">
        <div className="flex h-full items-end gap-2">
          <div className="h-5 flex-1 rounded-t bg-[#dfe7ef]" />
          <div className="h-8 flex-1 rounded-t bg-[#cbd9e8]" />
          <div className="h-6 flex-1 rounded-t bg-[#dfe7ef]" />
          <div className="h-10 flex-1 rounded-t bg-[#003466]/70" />
          <div className="h-7 flex-1 rounded-t bg-[#f58220]/55" />
          <div className="h-11 flex-1 rounded-t bg-[#003466]/80" />
        </div>
        <svg
          aria-hidden
          className="absolute inset-x-5 top-4 h-8 text-[#003466]"
          fill="none"
          viewBox="0 0 140 32"
        >
          <path
            d="M2 24C20 14 29 18 43 12C58 6 72 16 87 10C103 3 116 9 138 4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="relative flex size-14 items-center justify-center rounded-2xl border border-[#d7e6f6] bg-white text-[#003466] shadow-[0_20px_70px_rgba(0,52,102,0.13)]">
        <Icon className="size-6" />
      </div>
    </>
  );
}

function WorkflowVisual({ icon: Icon }: { icon: typeof UsersRound }) {
  return (
    <>
      <div className="absolute left-[14%] top-[30%] h-3 w-[28%] rounded-full bg-[#dfe7ef]" />
      <div className="absolute right-[14%] top-[30%] h-3 w-[28%] rounded-full bg-[#003466]/55" />
      <div className="absolute bottom-[28%] left-[14%] h-3 w-[38%] rounded-full bg-[#e8edf3]" />
      <div className="absolute bottom-[28%] right-[14%] h-3 w-[20%] rounded-full bg-[#f58220]/55" />
      <div className="relative flex size-14 items-center justify-center rounded-2xl border border-[#d7e6f6] bg-white text-[#003466] shadow-[0_20px_70px_rgba(0,52,102,0.13)]">
        <Icon className="size-6" />
      </div>
    </>
  );
}
