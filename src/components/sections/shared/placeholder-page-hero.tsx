import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type PlaceholderPageHeroProps = {
  title: string;
  eyebrow?: string;
  description?: string;
};

export function PlaceholderPageHero({
  title,
  eyebrow = "Tidewrk",
  description = "This page is being shaped. For now, use this as a clean placeholder while the full content and design are prepared.",
}: PlaceholderPageHeroProps) {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#02050a] px-5 py-28 text-white sm:px-8 lg:px-[6vw]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,63,114,0.42),transparent_34%),radial-gradient(ellipse_at_15%_70%,rgba(0,63,114,0.2),transparent_28%),linear-gradient(180deg,#02050a_0%,#06111f_52%,#02050a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#02050a] via-[#02050a]/86 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm font-medium text-white/72 backdrop-blur-md">
            <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
              {eyebrow}
            </span>
            Page placeholder
          </div>

          <h1 className="mt-8 text-balance text-[3.5rem] font-semibold leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-[6.4rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/66 sm:text-2xl sm:leading-10">
            {description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/16"
              href="/"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to home
            </Link>
            <Link
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#003f72] transition hover:bg-white/88"
              href="/contact"
            >
              Talk to Tidewrk
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
