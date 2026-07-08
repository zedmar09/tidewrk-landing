import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  Layers3,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const choicePoints = [
  {
    title: "Business-first product thinking",
    description:
      "Plan features around the people, workflows, and outcomes your product needs to support.",
    icon: Blocks,
  },
  {
    title: "One team from plan to launch",
    description:
      "Move through UX, engineering, data, integrations, testing, and release with fewer handoffs.",
    icon: Layers3,
  },
  {
    title: "Built to keep scaling",
    description:
      "Create a product foundation that can support more users, more data, and future improvements.",
    icon: ShieldCheck,
  },
];

const deliverySignals = [
  "Practical planning",
  "Clean user experience",
  "Reliable engineering",
  "Long-term maintainability",
];

export function FullStackDevelopmentTeamClosingSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-[6vw]">
        <div className="mx-auto grid w-full max-w-[1760px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
              <span className="size-2 bg-[#f58220]" aria-hidden="true" />
              Why Choose Tidewrk
            </div>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-[3.6rem]">
              A full-stack team built around your business goals
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
              Tidewrk helps businesses turn ideas into practical, scalable, and
              user-friendly digital products with the technical depth and
              execution speed needed to move forward with confidence.
            </p>
          </div>

          <div className="grid gap-px border border-[#dfe5ec] bg-[#dfe5ec] md:grid-cols-3 lg:grid-cols-1 2xl:grid-cols-3">
            {choicePoints.map((point, index) => {
              const PointIcon = point.icon;

              return (
                <article className="bg-white p-6 sm:p-7" key={point.title}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-13 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                      <PointIcon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-[#003466]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold leading-tight tracking-normal text-[#111217]">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#666666]">
                    {point.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 pb-14 sm:px-8 sm:pb-20 lg:px-[6vw]">
        <div className="mx-auto w-full max-w-[1760px] overflow-hidden border border-[#dfe5ec] bg-white">
          <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-12 xl:p-16">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="pointer-events-none absolute inset-0 bg-white/78" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
                <span className="size-2 bg-[#f58220]" aria-hidden="true" />
                Final CTA
              </div>
              <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
                Ready to build a smarter digital product?
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
                Let our full-stack development team help you plan, build,
                launch, and scale a solution that supports your business goals.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex h-14 items-center justify-center gap-2 bg-[#003466] px-8 text-lg font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#00284f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/40"
                  href="/contact"
                >
                  Talk to Tidewrk
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
                <Link
                  className="inline-flex h-14 items-center justify-center border border-[#dfe5ec] bg-white px-8 text-lg font-semibold text-[#003466] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7fbff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/30"
                  href="/#services"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative border border-[#dfe5ec] bg-white p-5 sm:p-6">
              <div className="flex items-center gap-4 border-b border-[#edf0f3] pb-5">
                <span className="flex size-14 items-center justify-center bg-[#003466] text-white">
                  <Rocket className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#003466]">
                    Move from idea to launch
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#666666]">
                    One team, one product direction, clearer delivery.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {deliverySignals.map((signal) => (
                  <div
                    className="flex items-center gap-3 border border-[#e4e9ef] bg-[#fbfcfd] p-4"
                    key={signal}
                  >
                    <CheckCircle2
                      className="size-5 shrink-0 text-[#003466]"
                      aria-hidden="true"
                    />
                    <p className="text-base font-semibold leading-tight text-[#111217]">
                      {signal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
