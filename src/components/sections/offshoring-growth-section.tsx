import {
  ArrowUpRight,
  CircleDollarSign,
  Gauge,
  GitBranch,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

const growthAreas = [
  {
    title: "Expand without heavy overhead",
    description: "Build more capacity without large local hiring efforts.",
    icon: CircleDollarSign,
  },
  {
    title: "Support core business functions",
    description: "Delegate repeatable, time-consuming, or specialized tasks.",
    icon: Workflow,
  },
  {
    title: "Improve speed and continuity",
    description: "Create smoother workflows and more reliable daily support.",
    icon: Gauge,
  },
  {
    title: "Stay competitive",
    description: "Use global talent and smarter cost structures to move faster.",
    icon: Target,
  },
  {
    title: "Fit your workflow",
    description: "Align offshore support with your tools and expectations.",
    icon: GitBranch,
  },
  {
    title: "Protect delivery confidence",
    description: "Support quality, consistency, and business continuity.",
    icon: ShieldCheck,
  },
];

export function OffshoringGrowthSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1900px]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Growth momentum
          </div>
          <h2 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            Where offshoring creates momentum
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            The right offshore model gives your business more room to serve,
            adapt, and execute without adding unnecessary operational strain.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden border border-[#dfe5ec] bg-white md:mt-14">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="pointer-events-none absolute inset-0 bg-white/72" />

          <div className="relative grid gap-px bg-[#dfe5ec] lg:grid-cols-3">
            <div className="flex min-h-[320px] flex-col justify-between bg-[#003466] p-6 text-white sm:p-8 lg:col-span-1 lg:row-span-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/62">
                  Operating room
                </p>
                <h3 className="mt-4 max-w-md text-4xl font-semibold leading-tight sm:text-5xl">
                  More capacity where growth needs it.
                </h3>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <span className="flex size-12 items-center justify-center border border-white/20 bg-white text-[#003466]">
                  <ArrowUpRight className="size-6" aria-hidden="true" />
                </span>
                <p className="max-w-sm text-base leading-7 text-white/72">
                  Tidewrk helps match offshore support to the places where work
                  slows down or demand increases.
                </p>
              </div>
            </div>

            {growthAreas.map((area, index) => {
              const AreaIcon = area.icon;

              return (
                <article className="bg-white p-6 sm:p-7" key={area.title}>
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex size-12 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                      <AreaIcon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-[#003466]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-10 text-2xl font-semibold leading-tight text-[#111217]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#666666]">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
