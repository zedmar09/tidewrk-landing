import { ArrowRight, ClipboardCheck, Compass, Target } from "lucide-react";

const advisorySteps = [
  {
    title: "Clarify the challenge",
    description: "Define what needs to change.",
    icon: Compass,
  },
  {
    title: "Evaluate the path",
    description: "Compare options and risks.",
    icon: Target,
  },
  {
    title: "Move into action",
    description: "Turn insight into next steps.",
    icon: ClipboardCheck,
  },
];

export function ExecutiveAdvisoryOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="mx-auto grid w-full max-w-[1900px] gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Executive clarity
          </div>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            Objective guidance for high-stakes decisions
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            Tidewrk gives leaders experienced outside perspective for complex
            decisions, growth priorities, operational challenges, and change.
          </p>
        </div>

        <div className="relative border border-[#dfe5ec] bg-white p-4 sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="pointer-events-none absolute inset-0 bg-white/72" />

          <div className="relative grid gap-4">
            {advisorySteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <article
                  className="grid gap-4 border border-[#dfe5ec] bg-white p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                  key={step.title}
                >
                  <span className="flex size-14 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                    <StepIcon className="size-7" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#003466]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold leading-tight text-[#111217]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-[#666666]">
                      {step.description}
                    </p>
                  </div>
                  {index < advisorySteps.length - 1 ? (
                    <ArrowRight className="hidden size-6 text-[#003466] sm:block" aria-hidden="true" />
                  ) : (
                    <span className="hidden h-2 w-2 bg-[#f58220] sm:block" aria-hidden="true" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
