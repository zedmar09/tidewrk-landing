import {
  BriefcaseBusiness,
  Code2,
  PenTool,
  ServerCog,
  ShieldCheck,
  Target,
} from "lucide-react";

import { cn } from "@/lib/utils";

const experts = [
  {
    stage: "Plan",
    title: "Project Manager",
    description: "Keeps timelines, communication, and delivery aligned.",
    outcome: "Delivery alignment",
    icon: BriefcaseBusiness,
    placement: "top",
  },
  {
    stage: "Prioritize",
    title: "Product Owner",
    description: "Connects product priorities with business goals and user needs.",
    outcome: "Sharper decisions",
    icon: Target,
    placement: "bottom",
  },
  {
    stage: "Design",
    title: "UI/UX Designers",
    description: "Create clean, intuitive experiences that users can easily understand.",
    outcome: "Clear user flows",
    icon: PenTool,
    placement: "top",
  },
  {
    stage: "Build",
    title: "Software Developers",
    description: "Build reliable front-end, back-end, and database solutions.",
    outcome: "Secure product build",
    icon: Code2,
    placement: "bottom",
  },
  {
    stage: "Validate",
    title: "QA Testers",
    description: "Validate quality, performance, and reliability before release.",
    outcome: "Launch confidence",
    icon: ShieldCheck,
    placement: "top",
  },
  {
    stage: "Launch",
    title: "DevOps Engineers",
    description: "Support deployment, infrastructure, automation, and continuous delivery.",
    outcome: "Smooth releases",
    icon: ServerCog,
    placement: "bottom",
  },
];

export function SoftwareDevelopmentTeamGrid() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1900px]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="inline-flex border border-[#dfe5ec] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
              Full delivery team
            </div>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
              The Right Experts for Every Stage
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9 lg:ml-auto">
              Every software project needs more than developers. Tidewrk brings
              together the right specialists to guide your product from idea to
              launch.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden border border-[#dfe5ec] bg-[#fbfcfd] md:mt-14">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#dfe5ec] bg-white px-5 py-4 sm:px-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003466]">
                Tidewrk delivery path
              </p>
              <p className="mt-1 text-sm leading-6 text-[#666666]">
                Specialists are assigned where they create the most momentum.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[#f07835]">
              Idea
              <span className="h-px w-10 bg-[#f0a264]" />
              Launch
            </div>
          </div>

          <div className="hidden xl:block">
            <div className="relative grid min-h-[540px] grid-cols-6 overflow-hidden px-6 py-8">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.03)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]" />
              <div className="absolute left-10 right-10 top-1/2 h-px bg-[#cbd6e2]" />

              {experts.map((expert, index) => {
                const ExpertIcon = expert.icon;
                const isTop = expert.placement === "top";

                return (
                  <div
                    className={cn(
                      "relative z-10 flex min-h-[476px] px-2.5",
                      isTop ? "items-start pt-6" : "items-end pb-6",
                    )}
                    key={expert.title}
                  >
                    <div
                      className={cn(
                        "absolute left-1/2 h-14 w-px -translate-x-1/2 bg-[#d8e1ea]",
                        isTop ? "top-[calc(50%-3.5rem)]" : "bottom-[calc(50%-3.5rem)]",
                      )}
                    />

                    <article className="relative w-full border border-[#dfe5ec] bg-white p-4 transition duration-300 hover:border-[#003466]/45 hover:bg-[#fffefe] 2xl:p-5">
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={cn(
                            "text-xs font-semibold uppercase tracking-[0.14em] 2xl:text-sm",
                            isTop ? "text-[#003466]" : "text-[#f07835]",
                          )}
                        >
                          Step {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-medium text-[#7b8490] 2xl:text-sm">
                          {expert.stage}
                        </span>
                      </div>

                      <span
                        className={cn(
                          "mt-5 flex size-12 shrink-0 items-center justify-center border 2xl:size-14",
                          isTop
                            ? "border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]"
                            : "border-[#f1d5be] bg-[#fff8f2] text-[#f07835]",
                        )}
                      >
                        <ExpertIcon
                          className="size-6 2xl:size-7"
                          aria-hidden="true"
                        />
                      </span>

                      <h3 className="mt-5 text-xl font-semibold leading-tight text-[#111217] 2xl:text-2xl">
                        {expert.title}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-[#555555]">
                        {expert.description}
                      </p>
                      <p
                        className={cn(
                          "mt-5 border-t border-[#edf0f3] pt-4 text-sm font-medium leading-5",
                          isTop ? "text-[#003466]" : "text-[#f07835]",
                        )}
                      >
                        {expert.outcome}
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="divide-y divide-[#dfe5ec] xl:hidden">
            {experts.map((expert, index) => {
              const ExpertIcon = expert.icon;
              const isTop = expert.placement === "top";

              return (
                <article className="grid grid-cols-[2.75rem_1fr] gap-4 bg-white p-5" key={expert.title}>
                  <div className="flex flex-col items-center">
                    <span
                      className={cn(
                        "flex size-11 items-center justify-center border",
                        isTop
                          ? "border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]"
                          : "border-[#f1d5be] bg-[#fff8f2] text-[#f07835]",
                      )}
                    >
                      <ExpertIcon className="size-5" aria-hidden="true" />
                    </span>
                    {index < experts.length - 1 && (
                      <span
                        className={cn(
                          "mt-3 h-full min-h-10 w-px",
                          isTop ? "bg-[#dfe5ec]" : "bg-[#f1d5be]",
                      )}
                    />
                  )}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p
                        className={cn(
                          "text-sm font-semibold uppercase tracking-[0.14em]",
                          isTop ? "text-[#003466]" : "text-[#f07835]",
                        )}
                      >
                        Step {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-sm font-medium text-[#7b8490]">
                        {expert.stage}
                      </p>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#111217]">
                      {expert.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#555555]">
                      {expert.description}
                    </p>
                    <p
                      className={cn(
                        "mt-4 border-t border-[#edf0f3] pt-4 text-sm font-medium",
                        isTop ? "text-[#003466]" : "text-[#f07835]",
                      )}
                    >
                      {expert.outcome}
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
