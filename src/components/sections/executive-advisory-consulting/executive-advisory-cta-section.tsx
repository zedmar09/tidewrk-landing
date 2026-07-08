import Link from "next/link";
import { ArrowRight, MessageCircle, Route, UsersRound } from "lucide-react";

const ctaSignals = [
  {
    label: "Clarify decisions",
    icon: MessageCircle,
  },
  {
    label: "Align leaders",
    icon: UsersRound,
  },
  {
    label: "Move with confidence",
    icon: Route,
  },
];

export function ExecutiveAdvisoryCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-8 sm:px-8 md:py-12 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1900px] overflow-hidden border border-[#dfe5ec] bg-[#f7fbff]">
        <div className="relative grid gap-10 px-6 py-10 sm:px-8 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 xl:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="pointer-events-none absolute inset-0 bg-white/70" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
              <span className="size-2 bg-[#f58220]" aria-hidden="true" />
              Ready to lead with clarity?
            </div>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
              Make smarter decisions with the right guidance behind you
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
              Tidewrk helps leadership teams improve execution, reduce
              uncertainty, and move through complexity with experienced
              strategic support.
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
                View Services
              </Link>
            </div>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {ctaSignals.map((signal, index) => {
              const SignalIcon = signal.icon;

              return (
                <div
                  className="flex items-center gap-4 border border-[#dfe5ec] bg-white p-5"
                  key={signal.label}
                >
                  <span className="flex size-14 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                    <SignalIcon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className={index === 1 ? "text-sm font-semibold text-[#f58220]" : "text-sm font-semibold text-[#003466]"}>
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-xl font-semibold leading-tight text-[#111217]">
                      {signal.label}
                    </p>
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
