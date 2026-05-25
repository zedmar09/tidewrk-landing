import {
  BadgeCheck,
  BadgeDollarSign,
  CheckCircle2,
  Layers3,
  MessagesSquare,
  Network,
  Repeat2,
  Route,
  SearchCheck,
  Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fullStackDevelopmentTeamContent } from "@/constants/full-stack-development-team";

const shortDescriptions = [
  "Plan, design, build, test, and improve through one clear delivery path.",
  "Reduce handoffs so your product can launch sooner.",
  "Get broad technical capability without managing separate teams.",
  "Adapt when priorities, features, workflows, or integrations change.",
  "Keep design, development, and functionality aligned.",
  "Build for more users, data, locations, and workflows.",
  "Solve issues faster with full application context.",
  "Keep the product consistent, reliable, and easier to maintain.",
];

const benefitIcons: LucideIcon[] = [
  Route,
  Timer,
  BadgeDollarSign,
  Repeat2,
  MessagesSquare,
  Network,
  SearchCheck,
  BadgeCheck,
];

const benefitPairs = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
];

export function FullStackDevelopmentTeamBenefitsBento() {
  const benefits = fullStackDevelopmentTeamContent.businessReasons;

  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1760px]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Why businesses choose this model
          </div>
          <h2 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-[3.5rem]">
            Full-stack teams help products move faster with fewer gaps
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            One team gives your business the coverage to plan, build, launch,
            and improve without slowing delivery down.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden border border-[#e6edf5] bg-[#fbfcfd] px-4 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.04)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_84%)]" />
          <div className="pointer-events-none absolute -left-10 top-10 h-32 w-32 bg-[#f5f9fd]" />
          <div className="pointer-events-none absolute -right-10 bottom-10 h-32 w-32 bg-[#fff4ea]" />

          <div className="relative mx-auto max-w-[1320px]">
            <div className="mx-auto mb-8 flex w-fit items-center gap-3 border border-[#d8e6f5] bg-white px-5 py-4 shadow-[0_20px_70px_rgba(0,52,102,0.08)]">
              <span className="flex size-12 items-center justify-center bg-[#003466] text-white">
                <Layers3 className="size-6" aria-hidden="true" />
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-[#111217]">
                  One full-stack team
                </p>
                <p className="mt-1 text-xs text-[#666666]">
                  Product, build, data, launch
                </p>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 top-20 hidden w-px -translate-x-1/2 bg-[#d8e6f5] lg:block">
              <span className="absolute left-1/2 top-1/2 h-28 w-px -translate-x-1/2 -translate-y-1/2 bg-[#f58220]" />
            </div>

            <div className="space-y-6">
              {benefitPairs.map(([leftIndex, rightIndex], rowIndex) => (
                <div
                  className="relative grid gap-5 lg:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] lg:items-center"
                  key={`${leftIndex}-${rightIndex}`}
                >
                  <BenefitPathCard
                    description={shortDescriptions[leftIndex]}
                    icon={benefitIcons[leftIndex]}
                    index={leftIndex}
                    title={benefits[leftIndex].title}
                  />

                  <div className="relative z-10 hidden justify-center lg:flex">
                    <div className="flex size-14 items-center justify-center border border-[#d8e6f5] bg-white text-sm font-semibold text-[#003466] shadow-[0_18px_54px_rgba(0,52,102,0.08)]">
                      {rowIndex + 1}
                    </div>
                  </div>

                  <BenefitPathCard
                    description={shortDescriptions[rightIndex]}
                    icon={benefitIcons[rightIndex]}
                    index={rightIndex}
                    title={benefits[rightIndex].title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitPathCard({
  description,
  icon: Icon,
  index,
  title,
}: {
  description: string;
  icon: LucideIcon;
  index: number;
  title: string;
}) {
  return (
    <article className="group relative overflow-hidden border border-[#e6e8ec] bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-[#ccd8e4] sm:p-7">
      <div className="absolute right-5 top-5 text-xs font-semibold text-[#9aa5b1]">
        0{index + 1}
      </div>
      <div className="flex items-start gap-5">
        <div className="relative flex size-16 shrink-0 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
          <Icon className="size-7" aria-hidden="true" />
          <span className="absolute -right-1.5 -top-1.5 size-3 bg-[#f58220]" />
        </div>

        <div className="min-w-0">
          <h3 className="text-pretty text-2xl font-semibold leading-tight tracking-normal text-[#111217]">
            {title}
          </h3>
          <p className="mt-3 text-base leading-7 text-[#666666]">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2" aria-hidden="true">
        <span className="h-2 w-12 bg-[#003466]" />
        <span className="h-2 flex-1 bg-[#eaf1f8]" />
        <span className="flex size-8 items-center justify-center border border-[#d8e6f5] bg-white text-[#003466]">
          <CheckCircle2 className="size-4" />
        </span>
      </div>
    </article>
  );
}
