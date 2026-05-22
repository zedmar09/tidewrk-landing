import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  FlaskConical,
  Palette,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const features = [
  {
    title: "Full-Stack Dev Team",
    description:
      "Experts in front-end, back-end, and database technologies, bringing your vision to life.",
    icon: Code2,
    tone: "blue",
    visual: "build",
  },
  {
    title: "Business Intelligence",
    description:
      "Unlocking the power of your data to gain valuable business insights.",
    icon: BarChart3,
    tone: "orange",
    visual: "analytics",
  },
  {
    title: "Data Science",
    description:
      "Leveraging data to solve complex problems and drive innovation.",
    icon: FlaskConical,
    tone: "blue",
    visual: "experiment",
  },
  {
    title: "Data Engineering",
    description:
      "Building robust and scalable data infrastructure for your organization.",
    icon: Database,
    tone: "orange",
    visual: "pipeline",
  },
  {
    title: "UX/UI Design",
    description:
      "Designing intuitive and enjoyable user experiences for your digital products.",
    icon: Palette,
    tone: "blue",
    visual: "design",
  },
  {
    title: "Machine Learning",
    description:
      "Harnessing the power of AI to automate tasks and gain a competitive edge.",
    icon: BrainCircuit,
    tone: "orange",
    visual: "intelligence",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating engaging and user-friendly mobile apps for your business.",
    icon: Smartphone,
    tone: "blue",
    visual: "mobile",
  },
  {
    title: "QA Testing & Engineering",
    description:
      "Ensuring the quality and reliability of your software through expert testing.",
    icon: ShieldCheck,
    tone: "orange",
    visual: "quality",
  },
  {
    title: "Virtual Assistance / Business Administrations",
    description:
      "Enhancing operational efficiency and effectiveness through skilled virtual assistance.",
    icon: BriefcaseBusiness,
    tone: "blue",
    visual: "operations",
  },
];

export function Features() {
  return (
    <section
      className="relative z-0 overflow-hidden bg-white py-10 md:py-16"
      id="services"
    >
      <div className="relative mx-auto max-w-[1900px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center">
          <div className="mb-5 inline-flex border border-[#f1d5be] bg-[#fff8f2] px-4 py-2 text-sm font-medium text-[#f07835]">
            Our Services
          </div>
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            Built to cover your needs
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#666666] sm:text-xl sm:leading-9">
            Tidewrk brings talent, technology, and advisory support together so
            teams can solve problems without adding operational drag.
          </p>
        </div>

        <div className="mx-auto mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="group overflow-hidden border border-[#e6e8ec] bg-white transition duration-500 hover:-translate-y-1 hover:border-[#ccd8e4]"
                key={feature.title}
              >
                <ServiceVisualPanel
                  icon={Icon}
                  tone={feature.tone}
                  variant={feature.visual}
                />

                <div className="px-6 pb-7 pt-4 sm:px-7">
                  <h3 className="text-pretty text-2xl font-semibold leading-tight tracking-normal text-[#111217]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
                    {feature.description}
                  </p>
                  <a
                    className="mt-6 inline-flex text-sm font-semibold text-[#003466] transition-colors duration-300 hover:text-[#00284f]"
                    href="#contact"
                  >
                    Read More
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceVisualPanel({
  icon: Icon,
  tone,
  variant,
}: {
  icon: typeof Code2;
  tone: string;
  variant: string;
}) {
  const isOrange = tone === "orange";

  return (
    <div className="relative mx-3 mt-3 flex h-36 items-center justify-center overflow-hidden bg-[#fbfcfd] sm:h-40">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.04)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#f0a264]/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-[#f0a264]/40 to-transparent" />

      {variant === "build" && <BuildVisual icon={Icon} isOrange={isOrange} />}
      {variant === "analytics" && <AnalyticsVisual icon={Icon} isOrange={isOrange} />}
      {variant === "experiment" && <ExperimentVisual icon={Icon} isOrange={isOrange} />}
      {variant === "pipeline" && <PipelineVisual icon={Icon} isOrange={isOrange} />}
      {variant === "design" && <DesignVisual icon={Icon} isOrange={isOrange} />}
      {variant === "intelligence" && <IntelligenceVisual icon={Icon} isOrange={isOrange} />}
      {variant === "mobile" && <MobileVisual icon={Icon} isOrange={isOrange} />}
      {variant === "quality" && <QualityVisual icon={Icon} isOrange={isOrange} />}
      {variant === "operations" && <OperationsVisual icon={Icon} isOrange={isOrange} />}
    </div>
  );
}

function CenterIcon({
  icon: Icon,
  isOrange,
  size = "large",
}: {
  icon: typeof Code2;
  isOrange: boolean;
  size?: "medium" | "large";
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-2xl border bg-white",
        size === "large" ? "size-16" : "size-14",
        isOrange
          ? "border-[#f0d4bd] text-[#f07835] shadow-[0_20px_70px_rgba(240,120,53,0.14)]"
          : "border-[#d7e6f6] text-[#003466] shadow-[0_20px_70px_rgba(0,52,102,0.12)]",
      )}
    >
      <Icon className={size === "large" ? "size-7" : "size-6"} aria-hidden="true" />
    </div>
  );
}

function MiniNode({
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

function BuildVisual({ icon: Icon, isOrange }: { icon: typeof Code2; isOrange: boolean }) {
  return (
    <>
      <MiniNode className="left-[14%] top-[28%] bg-[#f7fbff]">
        <Database className="size-4" />
      </MiniNode>
      <MiniNode className="right-[13%] top-[30%]">
        <ShieldCheck className="size-4" />
      </MiniNode>
      <MiniNode className="bottom-[18%] left-[22%] bg-[#fff8f2] text-[#f07835]">
        <Code2 className="size-4" />
      </MiniNode>
      <CenterIcon icon={Icon} isOrange={isOrange} />
    </>
  );
}

function AnalyticsVisual({ icon: Icon, isOrange }: { icon: typeof Code2; isOrange: boolean }) {
  return (
    <>
      <div className="absolute bottom-7 left-7 right-7 h-16 rounded-xl border border-[#e4e9ef] bg-white px-4 py-3 shadow-[0_18px_54px_rgba(0,52,102,0.08)]">
        <div className="flex h-full items-end gap-2">
          <span className="h-5 flex-1 rounded-t bg-[#dfe7ef]" />
          <span className="h-8 flex-1 rounded-t bg-[#f0a264]/70" />
          <span className="h-6 flex-1 rounded-t bg-[#dfe7ef]" />
          <span className="h-11 flex-1 rounded-t bg-[#003466]/80" />
        </div>
      </div>
      <CenterIcon icon={Icon} isOrange={isOrange} size="medium" />
    </>
  );
}

function ExperimentVisual({ icon: Icon, isOrange }: { icon: typeof Code2; isOrange: boolean }) {
  return (
    <>
      <div className="absolute left-[12%] top-[36%] h-3 w-[28%] rounded-full bg-[#dfe7ef]" />
      <div className="absolute right-[12%] top-[36%] h-3 w-[22%] rounded-full bg-[#f0a264]/60" />
      <div className="absolute bottom-[25%] left-[18%] h-3 w-[46%] rounded-full bg-[#e8edf3]" />
      <CenterIcon icon={Icon} isOrange={isOrange} size="medium" />
    </>
  );
}

function PipelineVisual({ icon: Icon, isOrange }: { icon: typeof Code2; isOrange: boolean }) {
  return (
    <>
      <MiniNode className="left-[12%] top-[35%] bg-[#fff8f2] text-[#f07835]">
        <Database className="size-4" />
      </MiniNode>
      <MiniNode className="right-[12%] top-[35%] bg-[#f7fbff]">
        <BarChart3 className="size-4" />
      </MiniNode>
      <div className="absolute left-[24%] right-[24%] top-1/2 h-[3px] -translate-y-1/2 bg-[#f0a264]/55" />
      <CenterIcon icon={Icon} isOrange={isOrange} />
    </>
  );
}

function DesignVisual({ icon: Icon, isOrange }: { icon: typeof Code2; isOrange: boolean }) {
  return (
    <>
      <div className="absolute left-[10%] top-[28%] h-16 w-[35%] rounded-xl border border-[#e4e9ef] bg-white/85 shadow-[0_18px_54px_rgba(0,52,102,0.07)]" />
      <div className="absolute right-[10%] bottom-[22%] h-16 w-[35%] rounded-xl border border-[#f0d4bd] bg-[#fff8f2]" />
      <CenterIcon icon={Icon} isOrange={isOrange} />
    </>
  );
}

function IntelligenceVisual({ icon: Icon, isOrange }: { icon: typeof Code2; isOrange: boolean }) {
  return (
    <>
      <MiniNode className="left-[15%] top-[24%]">
        <BrainCircuit className="size-4" />
      </MiniNode>
      <MiniNode className="right-[15%] top-[24%] bg-[#fff8f2] text-[#f07835]">
        <SparkDot />
      </MiniNode>
      <MiniNode className="bottom-[20%] left-[22%] bg-[#f7fbff]">
        <Code2 className="size-4" />
      </MiniNode>
      <CenterIcon icon={Icon} isOrange={isOrange} />
    </>
  );
}

function MobileVisual({ icon: Icon, isOrange }: { icon: typeof Code2; isOrange: boolean }) {
  return (
    <>
      <div className="absolute left-[16%] top-[20%] h-24 w-14 rounded-2xl border border-[#e4e9ef] bg-white shadow-[0_18px_54px_rgba(0,52,102,0.08)]" />
      <div className="absolute right-[16%] top-[28%] h-20 w-12 rounded-2xl border border-[#f0d4bd] bg-[#fff8f2]" />
      <CenterIcon icon={Icon} isOrange={isOrange} size="medium" />
    </>
  );
}

function QualityVisual({ icon: Icon, isOrange }: { icon: typeof Code2; isOrange: boolean }) {
  return (
    <>
      <div className="absolute bottom-6 left-1/2 h-14 w-[72%] -translate-x-1/2 rounded-xl border border-[#e4e9ef] bg-white/90 shadow-[0_18px_54px_rgba(0,52,102,0.08)]" />
      <div className="absolute bottom-12 left-1/2 h-14 w-[58%] -translate-x-1/2 rounded-xl border border-[#f0d4bd] bg-[#fff8f2]" />
      <CenterIcon icon={Icon} isOrange={isOrange} size="medium" />
    </>
  );
}

function OperationsVisual({ icon: Icon, isOrange }: { icon: typeof Code2; isOrange: boolean }) {
  return (
    <>
      <div className="absolute left-[13%] top-[30%] h-3 w-[32%] rounded-full bg-[#dfe7ef]" />
      <div className="absolute right-[13%] top-[30%] h-3 w-[26%] rounded-full bg-[#f0a264]/55" />
      <div className="absolute bottom-[28%] left-[13%] h-3 w-[42%] rounded-full bg-[#e8edf3]" />
      <div className="absolute bottom-[28%] right-[13%] h-3 w-[18%] rounded-full bg-[#dfe7ef]" />
      <CenterIcon icon={Icon} isOrange={isOrange} />
    </>
  );
}

function SparkDot() {
  return (
    <span className="relative flex size-4">
      <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-current" />
      <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current" />
    </span>
  );
}
