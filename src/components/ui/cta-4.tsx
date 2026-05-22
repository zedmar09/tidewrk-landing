import { ArrowRight } from "lucide-react";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

export const Cta4 = ({
  title = "Modernize the way your business moves",
  description = "Tidewrk helps businesses improve how teams, vendors, systems, and technology work together so they can move faster with less friction.",
  buttonText = "Contact Us",
  buttonUrl = "#contact",
  secondaryButtonText = "Learn More",
  secondaryButtonUrl = "#services",
}: Cta4Props) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#003466] px-5 py-20 text-white sm:px-8 md:px-12 md:py-28 lg:px-16 xl:px-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.11)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70 [mask-image:radial-gradient(ellipse_at_center,white,transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_620px_at_50%_0%,rgba(255,255,255,0.14),transparent_62%)]"
      />

      <div className="relative mx-auto grid max-w-6xl place-items-center text-center">
        <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mt-6 max-w-4xl text-balance text-base leading-8 text-white/82 sm:text-lg sm:leading-9 lg:text-xl">
          {description}
        </p>

        <div className="mt-9 grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white bg-white px-8 text-lg font-semibold text-[#003466] shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-white/92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#003466]"
            href={buttonUrl}
          >
            {buttonText}
            <ArrowRight className="size-4" />
          </a>
          <a
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 text-lg font-semibold text-white shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#003466]"
            href={secondaryButtonUrl}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
};
