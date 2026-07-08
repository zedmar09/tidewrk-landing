import { ArrowRight, Lightbulb, MessageCircle, Rocket, UsersRound } from "lucide-react";

import { Button } from "@/components/ui/button";

const ctaSteps = [
  {
    label: "Idea",
    icon: Lightbulb,
  },
  {
    label: "Team",
    icon: UsersRound,
  },
  {
    label: "Execution",
    icon: Rocket,
  },
];

export function SoftwareDevelopmentCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1900px] overflow-hidden border border-[#dfe5ec] bg-white">
        <div className="relative grid gap-10 px-6 py-8 sm:px-8 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 xl:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="pointer-events-none absolute inset-0 bg-white/72" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
              <span className="size-2 bg-[#f58220]" aria-hidden="true" />
              Ready to move forward?
            </div>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
              Ready to build smarter software?
            </h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
              Tidewrk can help you move from idea to execution with the right
              team, process, and technology behind you.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="shadow-none" size="lg">
                <a href="/contact">
                  Start a Conversation
                  <ArrowRight className="size-5" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                className="border-[#dfe5ec] bg-white text-[#003466] shadow-none hover:bg-[#f7fbff]"
                size="lg"
                variant="secondary"
              >
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="border border-[#dfe5ec] bg-white p-5 sm:p-6">
              <div className="flex items-center gap-3 border-b border-[#edf0f3] pb-5">
                <span className="flex size-12 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                  <MessageCircle className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#003466]">
                    Start simple
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#666666]">
                    Tell us what you are trying to build or improve.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {ctaSteps.map((step) => {
                  const StepIcon = step.icon;

                  return (
                    <div
                      className="border border-[#e4e9ef] bg-white p-4"
                      key={step.label}
                    >
                      <span className="flex size-11 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                        <StepIcon className="size-5" aria-hidden="true" />
                      </span>
                      <p className="mt-4 text-lg font-semibold text-[#111217]">
                        {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
