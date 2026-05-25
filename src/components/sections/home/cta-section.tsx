import {
  ArrowRight,
  Blocks,
  CheckCircle2,
  Cpu,
  Handshake,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const syncInputs = [
  {
    label: "Talent",
    description: "The right people for the work that matters.",
    icon: Handshake,
    tone: "blue",
  },
  {
    label: "Systems",
    description: "Cleaner workflows and smarter collaboration.",
    icon: Blocks,
    tone: "blue",
  },
  {
    label: "Technology",
    description: "Practical tools that help teams move faster.",
    icon: Cpu,
    tone: "blue",
  },
];

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-10 sm:px-8 md:py-14 lg:px-[6vw]">
      <div className="relative mx-auto w-full max-w-[1900px] overflow-hidden bg-[#f7fbff]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.045)_1px,transparent_1px)] bg-[size:48px_48px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-white/58"
        />

        <div className="relative grid gap-10 px-6 py-8 sm:px-8 md:py-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:px-12 xl:px-16">
          <div className="relative">
            <div className="grid gap-3">
              {syncInputs.map((item) => {
                const ItemIcon = item.icon;

                return (
                  <div
                    className="grid grid-cols-[auto_1fr] items-center gap-4 border border-[#dfe5ec] bg-white p-4"
                    key={item.label}
                  >
                    <span className="flex size-12 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                      <ItemIcon className="size-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xl font-semibold leading-tight text-[#111217]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#666666]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative mx-auto h-12 w-px bg-[#cbd8e6]">
              <span className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 bg-[#003466]" />
            </div>

            <div className="border border-[#003466] bg-white p-5">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center border border-[#d8e6f5] bg-[#003466] text-white">
                  <CheckCircle2 className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#003466]">
                    Aligned execution
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-7 text-[#111217]">
                    One clearer path from business challenge to confident next
                    move.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center lg:pl-8 xl:pl-14">
            <div className="inline-flex w-fit items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
              <span className="size-2 bg-[#f58220]" aria-hidden="true" />
              Ready to move forward?
            </div>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
              Bring talent, systems, and technology into sync
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
              Tidewrk helps businesses strengthen vendor collaboration, improve
              existing systems with automation and workflow design, and adopt
              emerging technologies with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-14 items-center justify-center gap-2 bg-[#003466] px-8 text-lg font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#00284f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/40"
                href="#contact"
              >
                Start a Conversation
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <a
                className="inline-flex h-14 items-center justify-center border border-[#dfe5ec] bg-white px-8 text-lg font-semibold text-[#003466] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7fbff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/30"
                href="#services"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-[#003466]">
              <span className="flex size-10 items-center justify-center border border-[#d8e6f5] bg-white">
                <Lightbulb className="size-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-medium leading-6 text-[#555555]">
                Start with one conversation, then leave with a practical next
                step.
              </p>
              <Sparkles className="hidden size-5 shrink-0 text-[#003466] sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
