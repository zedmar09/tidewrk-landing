import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  TrendingUp,
  UserPlus,
} from "lucide-react";

const flowSteps = [
  {
    title: "Need arises",
    description: "Projects, deadlines, or skill gaps create pressure.",
    icon: CalendarClock,
  },
  {
    title: "Tidewrk matches talent",
    description: "We align skilled professionals to the role and timeline.",
    icon: UserPlus,
  },
  {
    title: "Work keeps moving",
    description: "Your team gains capacity without slowing delivery.",
    icon: TrendingUp,
  },
];

const supportLabels = [
  "Project support",
  "Deadline coverage",
  "Growth capacity",
];

export function StaffAugmentationScaleSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="relative mx-auto grid w-full max-w-[1900px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Team Capacity
          </div>
          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            Scale Your Team Without Slowing Down
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            Get the right talent when projects, deadlines, or growth demand
            more capacity. Tidewrk helps you add skilled professionals who fit
            your team and keep work moving.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {supportLabels.map((label) => (
              <span
                className="border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-semibold text-[#003466]"
                key={label}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative grid auto-rows-fr gap-4 lg:grid-cols-3">
            {flowSteps.map((step, index) => {
              const StepIcon = step.icon;
              const isMiddle = index === 1;

              return (
                <div className="relative flex" key={step.title}>
                  {index < flowSteps.length - 1 ? (
                    <div
                      aria-hidden="true"
                      className="absolute left-9 top-[2.25rem] hidden h-px w-[calc(100%-1rem)] bg-[#003466] lg:block"
                    />
                  ) : null}

                  <div className="relative z-10 flex h-full w-full gap-4 border border-[#e2e8f0] bg-white p-4 lg:min-h-[260px] lg:flex-col lg:justify-between lg:p-5">
                    <span
                      className={
                        isMiddle
                          ? "flex size-14 shrink-0 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466] sm:size-16"
                          : "flex size-14 shrink-0 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466] sm:size-16"
                      }
                    >
                      <StepIcon className="size-7" aria-hidden="true" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#003466]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold leading-tight text-[#111217]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-[#666666]">
                        {step.description}
                      </p>
                    </div>

                    {index < flowSteps.length - 1 ? (
                      <ArrowRight
                        aria-hidden="true"
                        className="ml-auto hidden size-5 text-[#003466] lg:block"
                      />
                    ) : (
                      <BriefcaseBusiness
                        aria-hidden="true"
                        className="ml-auto hidden size-5 text-[#003466] lg:block"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
