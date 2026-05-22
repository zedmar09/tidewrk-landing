import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Code2,
  Handshake,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { heroContent } from "@/constants/landing-page";
import { Button } from "@/components/ui/button";
import { TypingHeadline } from "@/components/sections/typing-headline";
import { cn } from "@/lib/utils";

const valuePillars = [
  {
    title: "Talent",
    description: "Skilled people for the work that matters.",
    icon: UsersRound,
    tone: "blue",
  },
  {
    title: "Technology",
    description: "Practical systems that improve how teams move.",
    icon: Code2,
    tone: "orange",
  },
  {
    title: "Expertise",
    description: "Guidance that turns decisions into progress.",
    icon: ShieldCheck,
    tone: "blue",
  },
];

const floatingSignals = [
  {
    label: "Vendor collaboration",
    icon: Handshake,
    className: "left-[4%] top-[34%] hidden lg:flex",
    tone: "blue",
  },
  {
    label: "Workflow design",
    icon: Blocks,
    className: "right-[5%] top-[40%] hidden lg:flex",
    tone: "orange",
  },
  {
    label: "Smarter scaling",
    icon: Sparkles,
    className: "bottom-[34%] left-[10%] hidden xl:flex",
    tone: "orange",
  },
  {
    label: "Execution support",
    icon: ArrowRight,
    className: "bottom-[34%] right-[10%] hidden xl:flex",
    tone: "blue",
  },
];

export function HeroSection() {
  return (
    <section className="relative z-0 flex min-h-[88svh] overflow-hidden bg-white px-5 pb-10 pt-[5.5rem] sm:px-8 sm:pt-24 lg:px-[6vw]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none absolute inset-0 bg-white/72" />

      {floatingSignals.map((signal) => {
        const SignalIcon = signal.icon;
        const isOrange = signal.tone === "orange";

        return (
          <div
            className={cn(
              "absolute z-10 items-center gap-3 border bg-white px-4 py-3",
              isOrange
                ? "border-[#f1d5be] text-[#f07835]"
                : "border-[#d8e6f5] text-[#003466]",
              signal.className,
            )}
            key={signal.label}
          >
            <SignalIcon className="size-5" aria-hidden="true" />
            <span className="text-sm font-medium text-[#333333]">
              {signal.label}
            </span>
          </div>
        );
      })}

      <div className="relative z-10 mx-auto flex w-full max-w-[1900px] flex-col items-center justify-center text-center">
        <div className="mb-6 inline-flex border border-[#f1d5be] bg-[#fff8f2] px-4 py-2.5 text-sm font-medium text-[#f07835] sm:mb-8">
          Talent + Technology + Execution
        </div>

        <TypingHeadline text={heroContent.headline} />

        <p className="mt-6 max-w-5xl text-balance text-center text-lg font-normal leading-8 text-[#555555] sm:mt-7 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
          {heroContent.description}
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
          <Button asChild size="lg" className="w-full shadow-none sm:w-auto">
            <Link href={heroContent.primaryCta.href}>
              <Sparkles className="h-5 w-5" />
              {heroContent.primaryCta.label}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="w-full border-[#dfe5ec] bg-white text-[#003466] shadow-none hover:bg-[#f7fbff] sm:w-auto"
          >
            <Link href={heroContent.secondaryCta.href}>
              {heroContent.secondaryCta.label}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid w-full max-w-[1900px] grid-cols-1 border border-[#dfe5ec] bg-white text-left sm:grid-cols-3">
          {valuePillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            const isOrange = pillar.tone === "orange";

            return (
              <article
                className="border-b border-[#dfe5ec] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:p-6"
                key={pillar.title}
              >
                <div
                  className={cn(
                    "flex size-12 items-center justify-center border",
                    isOrange
                      ? "border-[#f1d5be] bg-[#fff8f2] text-[#f07835]"
                      : "border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]",
                  )}
                >
                  <PillarIcon className="size-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-2xl font-semibold leading-tight text-[#111217]">
                  {pillar.title}
                </p>
                <p className="mt-3 text-base leading-7 text-[#666666]">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
