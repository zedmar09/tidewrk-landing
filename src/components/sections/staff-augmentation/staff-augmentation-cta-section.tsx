import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StaffAugmentationCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-8 sm:px-8 md:py-12 lg:px-[6vw]">
      <div className="relative mx-auto min-h-[560px] w-full max-w-[1900px] overflow-hidden border border-[#dfe5ec] bg-[#f7fbff] px-6 py-12 sm:px-8 sm:py-16 lg:flex lg:items-center lg:justify-center lg:px-12 xl:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.04)_1px,transparent_1px)] bg-[size:52px_52px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-white/64"
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Team Capacity
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            Need the right people to move work forward?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            Tidewrk helps you expand your team with skilled professionals who
            bring capability, flexibility, and reliable execution when your
            business needs it most.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              className="inline-flex h-14 w-full items-center justify-center gap-2 bg-[#003466] px-8 text-lg font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#00284f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/40 sm:w-auto"
              href="#contact"
            >
              Talk to Tidewrk
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex h-14 w-full items-center justify-center border border-[#dfe5ec] bg-white px-8 text-lg font-semibold text-[#003466] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7fbff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/30 sm:w-auto"
              href="/#services"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
