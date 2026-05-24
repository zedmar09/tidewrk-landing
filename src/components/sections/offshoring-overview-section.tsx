import { Building2, Globe2, Network } from "lucide-react";

import { cn } from "@/lib/utils";

const overviewSteps = [
  {
    stage: "Define",
    title: "Your business",
    description:
      "Clarify the goals, workloads, operating priorities, and functions that need support.",
    outcome: "Clear operating scope",
    icon: Building2,
    placement: "top",
  },
  {
    stage: "Align",
    title: "Tidewrk coordination",
    description:
      "Shape the roles, workflow, onboarding, and communication rhythm around how your team works.",
    outcome: "Connected team setup",
    icon: Network,
    placement: "bottom",
  },
  {
    stage: "Extend",
    title: "Offshore execution",
    description:
      "Add skilled professionals who support daily delivery, reduce pressure, and strengthen continuity.",
    outcome: "Reliable offshore capacity",
    icon: Globe2,
    placement: "top",
  },
];

export function OffshoringOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1900px]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
              <span className="size-2 bg-[#f58220]" aria-hidden="true" />
              Smarter operations
            </div>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
              Not just lower cost. Better operating leverage.
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9 lg:ml-auto">
              Offshoring helps you move selected business functions to skilled
              professionals in another country, giving your company more
              capacity, specialized support, and cost efficiency without
              expanding everything locally.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden border border-[#dfe5ec] bg-[#fbfcfd] md:mt-14">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#dfe5ec] bg-white px-5 py-4 sm:px-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003466]">
                Tidewrk offshoring path
              </p>
              <p className="mt-1 text-sm leading-6 text-[#666666]">
                Offshore support works best when scope, workflow, and execution
                are connected from the start.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[#003466]">
              Scope
              <span className="h-px w-10 bg-[#003466]" />
              Support
            </div>
          </div>

          <div className="hidden xl:block">
            <div className="relative grid min-h-[500px] grid-cols-3 overflow-hidden px-6 py-8">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.03)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]" />
              <div className="absolute left-10 right-10 top-1/2 h-px bg-[#cbd6e2]" />

              {overviewSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isTop = step.placement === "top";

                return (
                  <div
                    className={cn(
                      "relative z-10 flex min-h-[436px] px-3",
                      isTop ? "items-start pt-6" : "items-end pb-6",
                    )}
                    key={step.title}
                  >
                    <div
                      className={cn(
                        "absolute left-1/2 h-14 w-px -translate-x-1/2 bg-[#d8e1ea]",
                        isTop
                          ? "top-[calc(50%-3.5rem)]"
                          : "bottom-[calc(50%-3.5rem)]",
                      )}
                    />

                    <article className="relative w-full border border-[#dfe5ec] bg-white p-5 transition duration-300 hover:border-[#003466]/45 hover:bg-[#fffefe] 2xl:p-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#003466]">
                          Step {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium text-[#7b8490]">
                          {step.stage}
                        </span>
                      </div>

                      <span className="mt-5 flex size-14 shrink-0 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                        <StepIcon className="size-7" aria-hidden="true" />
                      </span>

                      <h3 className="mt-5 text-2xl font-semibold leading-tight text-[#111217]">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-[#555555]">
                        {step.description}
                      </p>
                      <p className="mt-5 border-t border-[#edf0f3] pt-4 text-sm font-medium leading-5 text-[#003466]">
                        {step.outcome}
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="divide-y divide-[#dfe5ec] xl:hidden">
            {overviewSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isTop = step.placement === "top";

              return (
                <article
                  className="grid grid-cols-[2.75rem_1fr] gap-4 bg-white p-5"
                  key={step.title}
                >
                  <div className="flex flex-col items-center">
                    <span className="flex size-11 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                      <StepIcon className="size-5" aria-hidden="true" />
                    </span>
                    {index < overviewSteps.length - 1 && (
                      <span
                        className={cn(
                          "mt-3 h-full min-h-10 w-px",
                          isTop ? "bg-[#dfe5ec]" : "bg-[#d8e6f5]",
                        )}
                      />
                    )}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#003466]">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-sm font-medium text-[#7b8490]">
                        {step.stage}
                      </p>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#111217]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#555555]">
                      {step.description}
                    </p>
                    <p className="mt-4 border-t border-[#edf0f3] pt-4 text-sm font-medium text-[#003466]">
                      {step.outcome}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
