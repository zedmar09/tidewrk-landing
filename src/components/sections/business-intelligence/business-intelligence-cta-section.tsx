import Link from "next/link";
import { ArrowRight, BarChart3, Database, LineChart } from "lucide-react";

export function BusinessIntelligenceCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-8 sm:px-8 md:py-12 lg:px-[6vw]">
      <div className="relative mx-auto w-full max-w-[1900px] overflow-hidden border border-[#dfe5ec] bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="pointer-events-none absolute inset-0 bg-white/78" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-5xl flex-col items-center justify-center px-6 py-12 text-center sm:px-8 sm:py-16">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Data clarity
          </div>
          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            Ready to make smarter decisions with your data?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            Tidewrk can help you turn business information into clear insights,
            practical dashboards, and better decisions that support long-term
            growth.
          </p>

          <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              className="inline-flex h-14 w-full items-center justify-center gap-2 bg-[#003466] px-8 text-lg font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#00284f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/40 sm:w-auto"
              href="/contact"
            >
              Talk to Tidewrk
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex h-14 w-full items-center justify-center border border-[#dfe5ec] bg-white px-8 text-lg font-semibold text-[#003466] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7fbff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/30 sm:w-auto"
              href="/#services"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-12 grid w-full max-w-3xl gap-3 sm:grid-cols-3" aria-hidden="true">
            <VisualSignal icon={Database} />
            <VisualSignal icon={BarChart3} accent />
            <VisualSignal icon={LineChart} />
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualSignal({
  icon: Icon,
  accent = false,
}: {
  icon: typeof Database;
  accent?: boolean;
}) {
  return (
    <div className="flex min-h-28 items-center gap-4 border border-[#dfe5ec] bg-white p-4">
      <span
        className={
          accent
            ? "flex size-12 shrink-0 items-center justify-center border border-[#f4d0ad] bg-[#fff8f2] text-[#f58220]"
            : "flex size-12 shrink-0 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]"
        }
      >
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <div className="grid flex-1 gap-2">
        <span className="h-2 w-3/4 bg-[#dfe8f2]" />
        <span className="h-3 w-full bg-[#003466]" />
        <span className="h-2 w-1/2 bg-[#e8eef5]" />
      </div>
    </div>
  );
}
