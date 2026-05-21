import {
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
    className: "lg:col-span-5",
    visual: "network",
  },
  {
    title: "Faster Delivery",
    description:
      "Clear roles, agile workflows, and experienced execution help reduce delays and keep development moving.",
    icon: Rocket,
    className: "lg:col-span-7",
    visual: "analytics",
  },
  {
    title: "Higher Quality",
    description:
      "Built-in quality assurance helps ensure your software is tested, stable, secure, and ready for real users.",
    icon: ShieldCheck,
    className: "lg:col-span-4",
    visual: "quality",
  },
  {
    title: "Scalable Solutions",
    description:
      "We build with future growth in mind, so your software can evolve as your business expands.",
    icon: Layers3,
    className: "lg:col-span-4",
    visual: "integration",
  },
  {
    title: "Lower Project Risk",
    description:
      "A structured process helps identify issues early, manage priorities, and reduce costly surprises.",
    icon: Gauge,
    className: "lg:col-span-4",
    visual: "performance",
  },
];

export function SoftwareDevelopmentBenefitsBento() {
  return (
    <section className="relative overflow-hidden bg-[#f6f7f8] px-5 py-16 sm:px-8 md:py-24 lg:px-[6vw]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto w-full">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-4xl lg:text-5xl">
            Why Dedicated Teams Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-sm leading-7 text-[#666666] sm:text-base">
            The right people, process, and quality checks to move software from
            idea to launch with less friction.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {benefits.map((benefit) => {
            const BenefitIcon = benefit.icon;

            return (
              <article
                className={cn(
                  "group overflow-hidden rounded-[1.35rem] border border-[#e6e8ec] bg-white shadow-[0_18px_70px_rgba(0,52,102,0.06)] transition duration-500 hover:-translate-y-1 hover:border-[#ccd8e4] hover:shadow-[0_24px_90px_rgba(0,52,102,0.11)]",
                  benefit.className,
                )}
                key={benefit.title}
              >
                <VisualPanel icon={BenefitIcon} variant={benefit.visual} />

                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <h3 className="text-xl font-semibold leading-tight tracking-normal text-[#111217]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#666666]">
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
    <div className="relative mx-4 mt-4 flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-[#fbfcfd] sm:h-64">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.04)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#f0a264]/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-[#f0a264]/40 to-transparent" />

      {variant === "analytics" && <AnalyticsVisual icon={Icon} />}
      {variant === "network" && <NetworkVisual icon={Icon} />}
      {variant === "quality" && <QualityVisual icon={Icon} />}
      {variant === "integration" && <IntegrationVisual icon={Icon} />}
      {variant === "performance" && <PerformanceVisual icon={Icon} />}
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
        "absolute flex size-12 items-center justify-center rounded-2xl border border-[#e0e6ee] bg-white text-[#003466] shadow-[0_14px_40px_rgba(0,52,102,0.1)]",
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
        <Icon className="size-5" />
      </VisualNode>
      <VisualNode className="right-[12%] top-[28%] bg-[#eef7ff]">
        <Rocket className="size-5" />
      </VisualNode>
      <VisualNode className="bottom-[18%] left-[22%] bg-[#f7f8fa]">
        <ShieldCheck className="size-5" />
      </VisualNode>
      <div className="relative flex size-24 items-center justify-center rounded-[2rem] border border-[#e4e9ef] bg-white text-[#003466] shadow-[0_20px_70px_rgba(0,52,102,0.12)]">
        <Icon className="size-9" />
      </div>
    </>
  );
}

function AnalyticsVisual({ icon: Icon }: { icon: typeof UsersRound }) {
  return (
    <>
      <div className="absolute left-[9%] top-[39%] h-20 w-[36%] rounded-2xl border border-[#e4e9ef] bg-white/85 shadow-[0_18px_54px_rgba(0,52,102,0.07)]" />
      <div className="absolute right-[9%] top-[39%] h-20 w-[36%] rounded-2xl border border-[#e4e9ef] bg-white/85 shadow-[0_18px_54px_rgba(0,52,102,0.07)]" />
      <div className="absolute left-[13%] top-[53%] h-px w-[26%] bg-[#e7edf4]" />
      <div className="absolute right-[13%] top-[53%] h-px w-[26%] bg-[#e7edf4]" />
      <div className="absolute left-[13%] top-[61%] h-px w-[20%] bg-[#edf1f5]" />
      <div className="absolute right-[13%] top-[61%] h-px w-[20%] bg-[#edf1f5]" />
      <div className="relative flex size-20 items-center justify-center rounded-[1.7rem] border border-[#f0d4bd] bg-white text-[#f07835] shadow-[0_20px_70px_rgba(240,120,53,0.16)]">
        <Icon className="size-8" />
      </div>
    </>
  );
}

function QualityVisual({ icon: Icon }: { icon: typeof UsersRound }) {
  return (
    <>
      <div className="absolute bottom-8 left-1/2 h-20 w-[72%] -translate-x-1/2 rounded-2xl border border-[#e4e9ef] bg-white/90 shadow-[0_18px_54px_rgba(0,52,102,0.08)]" />
      <div className="absolute bottom-16 left-1/2 h-20 w-[58%] -translate-x-1/2 rounded-2xl border border-[#e4e9ef] bg-white/80" />
      <div className="relative flex size-20 items-center justify-center rounded-[1.7rem] border border-[#d7e6f6] bg-white text-[#003466] shadow-[0_20px_70px_rgba(0,52,102,0.13)]">
        <Icon className="size-8" />
      </div>
    </>
  );
}

function IntegrationVisual({ icon: Icon }: { icon: typeof UsersRound }) {
  return (
    <>
      <VisualNode className="left-[12%] top-[32%] rotate-[-10deg] bg-[#f7fbff]">
        <Rocket className="size-5" />
      </VisualNode>
      <VisualNode className="right-[12%] top-[32%] rotate-[10deg]">
        <ShieldCheck className="size-5" />
      </VisualNode>
      <VisualNode className="bottom-[18%] left-[20%] bg-[#f8f8f9]">
        <Gauge className="size-5" />
      </VisualNode>
      <VisualNode className="bottom-[18%] right-[20%] bg-[#eef7ff]">
        <Layers3 className="size-5" />
      </VisualNode>
      <div className="relative flex size-24 items-center justify-center rounded-[2rem] border border-[#f0d4bd] bg-white text-[#f07835] shadow-[0_20px_70px_rgba(240,120,53,0.14)]">
        <Icon className="size-9" />
      </div>
    </>
  );
}

function PerformanceVisual({ icon: Icon }: { icon: typeof UsersRound }) {
  return (
    <>
      <div className="absolute right-8 top-8 rounded-2xl border border-[#e4e9ef] bg-white px-5 py-3 shadow-[0_18px_54px_rgba(0,52,102,0.08)]">
        <div className="h-2 w-24 rounded-full bg-[#e8edf3]" />
        <div className="mt-2 h-2 w-16 rounded-full bg-[#f0a264]/60" />
      </div>
      <div className="absolute bottom-8 left-8 rounded-2xl border border-[#e4e9ef] bg-white px-5 py-4 shadow-[0_18px_54px_rgba(0,52,102,0.08)]">
        <div className="text-3xl font-semibold text-[#111217]">4.12%</div>
        <div className="mt-1 h-2 w-28 rounded-full bg-[#e8edf3]" />
      </div>
      <div className="relative flex size-20 items-center justify-center rounded-[1.7rem] border border-[#d7e6f6] bg-white text-[#003466] shadow-[0_20px_70px_rgba(0,52,102,0.13)]">
        <Icon className="size-8" />
      </div>
    </>
  );
}
