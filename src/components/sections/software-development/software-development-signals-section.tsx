import { Code2, GitBranch, ShieldCheck, Sparkles } from "lucide-react";

const deliverySignals = [
  {
    icon: Code2,
    label: "Product clarity",
    value: "Features tied to business goals before build begins.",
    trace: ["Scope", "UX", "Build"],
  },
  {
    icon: Sparkles,
    label: "Smarter delivery",
    value:
      "AI-supported reviews, QA, and implementation where it sharpens the work.",
    trace: ["Review", "Test", "Improve"],
  },
  {
    icon: ShieldCheck,
    label: "Release-ready build",
    value: "Secure systems built to keep moving after launch.",
    trace: ["Secure", "Ship", "Scale"],
  },
];

export function SoftwareDevelopmentSignalsSection() {
  return (
    <section className="relative overflow-hidden bg-[#02050a] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-[6vw]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#02050a] via-[#02050a]/82 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[min(52rem,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003f72]/18 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1900px]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs font-medium text-white/76 shadow-[0_16px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-4 sm:text-sm">
            <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em]">
              Delivery Signals
            </span>
            Built before the first release
          </div>

          <h2 className="mt-6 text-balance text-[clamp(2.25rem,7vw,4.6rem)] font-semibold leading-[1.04] tracking-normal text-white">
            The build signals that keep software{" "}
            <span className="tidewrk-glow-text">moving forward</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-xl leading-9 text-white/66 sm:text-2xl sm:leading-10">
            Every product needs more than code. Tidewrk keeps clarity, delivery,
            and quality connected from the first decision to every release after.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {deliverySignals.map((item, index) => (
            <article
              className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.065] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl transition duration-300 hover:border-[#003f72]/70 hover:bg-white/[0.085] hover:shadow-[0_0_34px_rgba(0,63,114,0.28)] sm:p-6"
              key={item.label}
            >
              <div
                aria-hidden="true"
                className="absolute -right-14 -top-14 size-44 rounded-full bg-[#003f72]/20 blur-3xl transition duration-300 group-hover:bg-[#003f72]/30"
              />

              <div className="relative flex items-start justify-between gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#003f72]/45 bg-[#003f72]/20 text-white shadow-[0_0_30px_rgba(0,63,114,0.5)] sm:size-14">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="tidewrk-glow-text text-sm font-semibold">
                  0{index + 1}
                </span>
              </div>

              <div className="relative mt-8">
                <h3 className="text-2xl font-semibold leading-tight text-white">
                  {item.label}
                </h3>
                <p className="mt-3 text-lg leading-8 text-white/62">
                  {item.value}
                </p>
              </div>

              <div className="relative mt-8 rounded-[1rem] border border-white/8 bg-black/22 p-4">
                <div className="mb-4 flex items-center justify-between text-xs text-white/42">
                  <span className="inline-flex items-center gap-2">
                    <GitBranch className="size-4" aria-hidden="true" />
                    delivery flow
                  </span>
                  <span>active</span>
                </div>
                <div className="relative flex items-center justify-between gap-3">
                  <span
                    aria-hidden="true"
                    className="absolute left-6 right-6 top-1/2 h-px -translate-y-1/2 bg-white shadow-[0_0_18px_rgba(0,63,114,0.85)]"
                  />
                  {item.trace.map((step) => (
                    <span
                      className="relative z-10 rounded-full border border-white/10 bg-[#050b14] px-3 py-2 text-xs font-semibold text-white/70 shadow-[0_0_18px_rgba(0,63,114,0.25)]"
                      key={step}
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
