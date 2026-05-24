import Link from "next/link";
import { ArrowRight, Globe2, MessageCircle, UsersRound } from "lucide-react";

const ctaSignals = [
  {
    label: "Reduce pressure",
    icon: Globe2,
  },
  {
    label: "Add capability",
    icon: UsersRound,
  },
  {
    label: "Move forward",
    icon: MessageCircle,
  },
];

export function OffshoringCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-8 sm:px-8 md:py-12 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1900px] overflow-hidden border border-[#dfe5ec] bg-white">
        <div className="grid gap-px bg-[#dfe5ec] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="bg-white p-6 sm:p-8 lg:p-12 xl:p-16">
            <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
              <span className="size-2 bg-[#f58220]" aria-hidden="true" />
              Ready to move forward?
            </div>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
              Ready to build smarter offshore support?
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
              Tidewrk can help you reduce operational pressure, access skilled
              global talent, and create a dependable team that supports your
              business as it grows.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex h-14 items-center justify-center gap-2 bg-[#003466] px-8 text-lg font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#00284f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/40"
                href="#contact"
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

          <div className="grid bg-[#fbfcfd] sm:grid-cols-3 lg:grid-cols-1">
            {ctaSignals.map((signal, index) => {
              const SignalIcon = signal.icon;

              return (
                <div
                  className="flex items-center gap-4 border-b border-[#dfe5ec] p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b lg:border-r-0 lg:last:border-b-0"
                  key={signal.label}
                >
                  <span className="flex size-14 items-center justify-center border border-[#d8e6f5] bg-white text-[#003466]">
                    <SignalIcon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#f58220]">
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
