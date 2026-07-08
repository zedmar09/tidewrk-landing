"use client";

import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import { heroContent, whyTidewrkContent } from "@/constants/landing-page";

const heroStats = whyTidewrkContent.stats.filter(
  (stat) => stat.label !== "Years of Partnership",
);

const wavePaths = [
  "M-560 720 C-220 610 20 720 170 520 C340 294 512 378 680 500 C842 618 1012 432 1192 318 C1394 190 1596 232 2040 54",
  "M-560 696 C-206 594 42 700 194 502 C364 282 528 366 700 482 C866 594 1034 416 1216 304 C1412 184 1628 214 2040 42",
  "M-560 672 C-192 578 64 680 218 484 C388 270 544 354 720 464 C890 570 1056 400 1240 290 C1430 178 1660 196 2040 30",
  "M-560 648 C-178 562 86 660 242 466 C412 258 560 342 740 446 C914 546 1078 384 1264 276 C1448 172 1692 178 2040 18",
  "M-560 624 C-164 546 108 640 266 448 C436 246 576 330 760 428 C938 522 1100 368 1288 262 C1466 166 1724 160 2040 6",
  "M-560 600 C-150 530 130 620 290 430 C460 234 592 318 780 410 C962 498 1122 352 1312 248 C1484 160 1756 142 2040 -6",
  "M-560 576 C-136 514 152 600 314 412 C484 222 608 306 800 392 C986 474 1144 336 1336 234 C1502 154 1788 124 2040 -18",
  "M-560 552 C-122 498 174 580 338 394 C508 210 624 294 820 374 C1010 450 1166 320 1360 220 C1520 148 1820 106 2040 -30",
  "M-560 528 C-108 482 196 560 362 376 C532 198 640 282 840 356 C1034 426 1188 304 1384 206 C1538 142 1852 88 2040 -42",
  "M-560 504 C-94 466 218 540 386 358 C556 186 656 270 860 338 C1058 402 1210 288 1408 192 C1556 136 1884 70 2040 -54",
  "M-560 480 C-80 450 240 520 410 340 C580 174 672 258 880 320 C1082 378 1232 272 1432 178 C1574 130 1916 52 2040 -66",
  "M-560 456 C-66 434 262 500 434 322 C604 162 688 246 900 302 C1106 354 1254 256 1456 164 C1592 124 1948 34 2040 -78",
];

const heroTaglines = [
  "The Current\nBehind You",
  "The current behind your work",
  "The current behind the work that flows",
  "The current behind your next move",
];

export function HeroSection() {
  return (
    <section className="relative z-0 min-h-[100svh] overflow-hidden bg-[#02050a] px-5 pb-6 pt-[4.75rem] text-white sm:px-8 sm:pt-20 lg:px-[6vw]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,63,114,0.78),transparent_45%),radial-gradient(ellipse_at_50%_20%,rgba(0,63,114,0.32),transparent_32%),linear-gradient(180deg,#02050a_0%,#07111f_46%,#02050a_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#003f72]/46 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#02050a] via-[#02050a]/88 to-transparent" />

      <svg
        aria-hidden="true"
        className="tide-wave-geometry pointer-events-none absolute -bottom-[1%] -left-[88%] h-[42svh] min-h-[290px] w-[280%] opacity-45 sm:-left-[42%] sm:h-[58svh] sm:min-h-[430px] sm:w-[205%] sm:opacity-60 lg:-bottom-[2%] lg:-left-[20%] lg:h-[76svh] lg:min-h-[560px] lg:w-[150%] lg:opacity-82"
        fill="none"
        preserveAspectRatio="none"
        style={{
          WebkitMaskImage:
            "linear-gradient(112deg, transparent 0%, #000 13%, #000 86%, transparent 100%)",
          maskImage:
            "linear-gradient(112deg, transparent 0%, #000 13%, #000 86%, transparent 100%)",
          backfaceVisibility: "hidden",
          contain: "layout paint",
          transform: "translate3d(0,0,0)",
        }}
        viewBox="-360 0 2160 720"
      >
        {wavePaths.map((path, index) => (
          <path
            d={path}
            key={path}
            className={index % 2 === 0 ? "tide-wave-line" : "tide-wave-line tide-wave-line-alt"}
            stroke={
              index % 3 === 0
                ? "rgba(0,63,114,0.58)"
                : index % 3 === 1
                  ? "rgba(255,255,255,0.18)"
                  : "rgba(0,63,114,0.46)"
            }
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={index % 4 === 0 ? 1.6 : 1}
            style={{
              animationDelay: `${index * -0.58}s`,
              animationDuration: `${8.6 + (index % 5) * 0.9}s`,
            }}
          />
        ))}
      </svg>

      <div className="relative mx-auto flex min-h-[calc(100svh-4.75rem)] w-full max-w-[1900px] flex-col items-center justify-start pb-8 pt-[clamp(2rem,7svh,6rem)] text-center sm:min-h-[calc(100svh-5rem)] sm:pb-10 sm:pt-[clamp(2.75rem,9svh,6rem)] lg:pb-12">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-center text-xs font-medium text-white/78 shadow-[0_14px_50px_rgba(0,0,0,0.18)] backdrop-blur-md sm:px-4 sm:text-sm">
            <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
              Tidewrk
            </span>
            {heroContent.eyebrow}
            <ArrowRight className="size-4 text-white/60" aria-hidden="true" />
          </div>

          <h1
            aria-label={heroContent.headline}
            className="mt-7 w-full max-w-6xl text-balance text-[clamp(2.25rem,12vw,3.15rem)] font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl sm:leading-[1.02] lg:text-[4.55rem] xl:text-[5.25rem]"
          >
            <span
              aria-hidden="true"
              className="tidewrk-glow-text hero-typing-slot block min-h-[3.12em] w-full overflow-hidden sm:min-h-[2.08em] lg:min-h-[2.04em]"
            >
              <TypeAnimation
                className="inline-block max-w-full whitespace-pre-line break-words"
                cursor={false}
                deletionSpeed={{ type: "keyStrokeDelayInMs", value: 34 }}
                preRenderFirstString={true}
                repeat={Infinity}
                sequence={[
                  heroTaglines[0],
                  1700,
                  heroTaglines[1],
                  1700,
                  heroTaglines[2],
                  1700,
                  heroTaglines[3],
                  1700,
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 52 }}
                wrapper="span"
              />
            </span>
          </h1>

          <p className="mt-5 max-w-4xl text-pretty text-xl leading-9 text-white/70 sm:mt-6 sm:text-2xl sm:leading-10">
            {heroContent.description}
          </p>

          <div className="mt-7 flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:max-w-none sm:flex-row">
            <Link
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/18 bg-white px-6 text-base font-semibold text-[#003f72] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5f9fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
              href={heroContent.secondaryCta.href}
            >
              <Play className="size-5 fill-[#003f72]/10" aria-hidden="true" />
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative mt-auto grid w-full gap-4 pt-12 sm:gap-5 sm:pt-16 md:grid-cols-[1fr_auto] md:items-center md:pt-20 lg:pt-24">
          <div className="grid w-full max-w-2xl grid-cols-3 items-start gap-3 text-center sm:gap-5 md:justify-self-start">
            {heroStats.map((stat) => (
              <div key={stat.label} className="mx-auto w-full max-w-44">
                <p className="text-3xl font-semibold leading-none text-white/88 sm:text-5xl">
                  {stat.value}
                  <span className="tidewrk-glow-text">
                    {stat.suffix}
                  </span>
                </p>
                <p className="mx-auto mt-2 max-w-32 text-[0.68rem] leading-4 text-white/54 sm:max-w-40 sm:text-sm sm:leading-5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            className="group mx-auto w-full max-w-[30rem] rounded-[1.1rem] border border-white/10 bg-white/[0.07] p-3 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:rounded-[1.4rem] sm:p-4 md:mx-0 md:w-[30rem]"
            href={heroContent.primaryCta.href}
          >
            <div className="flex items-center gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#003f72]/45 bg-[#003f72]/20 text-white shadow-[0_0_26px_rgba(0,63,114,0.45)] transition group-hover:border-white/28 sm:size-11">
                <Sparkles className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white sm:text-base">
                  {heroContent.primaryCta.label}
                </p>
                <p className="mt-1 text-xs leading-5 text-white/56 sm:text-sm">
                  Start the conversation behind your next move.
                </p>
              </div>
              <ArrowRight
                className="size-5 shrink-0 text-white/54 transition group-hover:translate-x-1 group-hover:text-white"
                aria-hidden="true"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
