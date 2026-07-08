import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  Compass,
  Handshake,
  Workflow,
} from "lucide-react";

const values = [
  {
    title: "Move with purpose",
    description:
      "We help teams focus on the next practical step, not noise, complexity, or work that looks busy but does not move the business.",
    icon: Compass,
  },
  {
    title: "Build around the work",
    description:
      "People, workflows, and technology should support how the business actually operates, not force teams into rigid templates.",
    icon: Workflow,
  },
  {
    title: "Stay accountable",
    description:
      "Clear ownership, steady communication, and reliable follow-through matter as much as the solution itself.",
    icon: CheckCircle2,
  },
];

const capabilities = [
  "Software and product delivery",
  "Staff augmentation and Virtual Assistants",
  "Business intelligence and data support",
  "Remote team capacity",
  "Executive advisory and modernization guidance",
  "Workflow improvement and practical automation",
];

export function AboutUsPage() {
  return (
    <main className="relative overflow-hidden bg-[#02050a] text-white">
      <section className="relative isolate px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-[6vw]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,63,114,0.48),transparent_34%),radial-gradient(ellipse_at_14%_72%,rgba(0,63,114,0.2),transparent_28%),radial-gradient(ellipse_at_88%_58%,rgba(0,63,114,0.18),transparent_30%),linear-gradient(180deg,#02050a_0%,#06111f_52%,#02050a_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#02050a] via-[#02050a]/88 to-transparent"
        />

        <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm font-medium text-white/72 backdrop-blur-md">
              <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                About Tidewrk
              </span>
              Company
            </div>

            <h1 className="mt-8 max-w-5xl text-balance text-[3.5rem] font-semibold leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-[6.2rem]">
              The current behind{" "}
              <span className="tidewrk-glow-text">work that moves</span>
            </h1>
          </div>

          <div className="max-w-3xl lg:pb-3">
            <p className="text-pretty text-xl leading-9 text-white/68 sm:text-2xl sm:leading-10">
              Tidewrk helps businesses add the people, systems, and execution
              support behind their next move. We bring practical talent,
              software, data, operations, and advisory support together so
              teams can move with more confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-semibold text-[#003f72] transition hover:-translate-y-0.5 hover:bg-white/88"
                href="/contact"
              >
                Talk to Tidewrk
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                className="inline-flex h-[3.25rem] items-center justify-center rounded-full border border-white/14 bg-white/8 px-6 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/14"
                href="/#solutions"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-14 sm:px-8 md:py-20 lg:px-[6vw]">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/42">
              What we do
            </p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
              We help teams carry important work forward.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/[0.045] p-4 text-base font-semibold text-white/78"
                key={capability}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#003f72]/50 bg-[#003f72]/20 text-white shadow-[0_0_22px_rgba(0,63,114,0.35)]">
                  <Blocks className="size-4" aria-hidden="true" />
                </span>
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 pb-20 pt-4 sm:px-8 sm:pb-28 lg:px-[6vw]">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-5 lg:grid-cols-3">
            {values.map((value) => {
              const ValueIcon = value.icon;

              return (
                <article
                  className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.035))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-7"
                  key={value.title}
                >
                  <span className="flex size-[3.25rem] items-center justify-center rounded-full border border-[#003f72]/50 bg-[#003f72]/22 text-white shadow-[0_0_18px_rgba(255,255,255,0.12),0_0_34px_rgba(0,63,114,0.45)]">
                    <ValueIcon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold leading-tight text-white">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-white/62">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-5 rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-center">
              <div className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-[#003f72]/50 bg-[#003f72]/22 text-white shadow-[0_0_18px_rgba(255,255,255,0.12),0_0_34px_rgba(0,63,114,0.45)]">
                  <Handshake className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/42">
                    Why Tidewrk
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold leading-tight text-white">
                    A partner for the work between idea and progress.
                  </h2>
                </div>
              </div>
              <p className="text-lg leading-8 text-white/62 sm:text-xl sm:leading-9">
                Businesses do not always need another tool, another vendor, or
                another plan. Often, they need the right current behind the work:
                capable people, practical systems, and steady execution aligned
                around what needs to happen next.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
