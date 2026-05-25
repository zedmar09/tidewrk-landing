"use client";

import * as React from "react";
import {
  ChartNoAxesColumnIncreasing,
  Compass,
  Focus,
  Gauge,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const growthOutcomes = [
  {
    title: "Scale Without Slowing Down",
    description:
      "Take on new projects, serve more customers, and grow capacity without overloading your internal team.",
    icon: ChartNoAxesColumnIncreasing,
    signal: "Capacity",
  },
  {
    title: "Keep Your Core Team Focused",
    description:
      "Let your key people stay close to strategy and leadership while added talent supports execution.",
    icon: Focus,
    signal: "Focus",
  },
  {
    title: "Improve Project Outcomes",
    description:
      "Strengthen delivery with experienced professionals who bring practical expertise and reliable execution.",
    icon: Compass,
    signal: "Quality",
  },
  {
    title: "Adapt To Changing Demand",
    description:
      "Respond faster to shifting workloads, customer needs, technology changes, and new opportunities.",
    icon: Gauge,
    signal: "Speed",
  },
  {
    title: "Build With More Confidence",
    description:
      "Move forward with the right people in place to support quality, continuity, and business momentum.",
    icon: ShieldCheck,
    signal: "Confidence",
  },
  {
    title: "Support Sustainable Growth",
    description:
      "Grow with added capacity that fits your team, timeline, and business priorities without unnecessary strain.",
    icon: UsersRound,
    signal: "Momentum",
  },
];

export function StaffAugmentationGrowthSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const dragState = React.useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  React.useEffect(() => {
    const section = sectionRef.current;
    const carousel = carouselRef.current;

    if (!section || !carousel) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isSectionInReadingZone =
        sectionRect.top < viewportHeight * 0.72 &&
        sectionRect.bottom > viewportHeight * 0.28;
      const deltaMultiplier =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? 16
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? viewportHeight
          : 1;
      const normalizedDeltaY = event.deltaY * deltaMultiplier;

      if (
        !isSectionInReadingZone ||
        maxScrollLeft <= 0 ||
        Math.abs(normalizedDeltaY) <= Math.abs(event.deltaX)
      ) {
        return;
      }

      const isScrollingForward = normalizedDeltaY > 0;
      const isAtStart = carousel.scrollLeft <= 0;
      const isAtEnd = carousel.scrollLeft >= maxScrollLeft - 1;
      const shouldMoveCarousel =
        (isScrollingForward && !isAtEnd) || (!isScrollingForward && !isAtStart);

      if (!shouldMoveCarousel) {
        return;
      }

      event.preventDefault();
      carousel.scrollLeft = Math.max(
        0,
        Math.min(maxScrollLeft, carousel.scrollLeft + normalizedDeltaY * 1.35),
      );
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: carousel.scrollLeft,
    };
    setIsDragging(true);
    carousel.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;

    if (!carousel || !dragState.current.isDragging) {
      return;
    }

    const distance = event.clientX - dragState.current.startX;
    carousel.scrollLeft = dragState.current.scrollLeft - distance;
  };

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;

    dragState.current.isDragging = false;
    setIsDragging(false);

    if (carousel?.hasPointerCapture(event.pointerId)) {
      carousel.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[6vw]"
      ref={sectionRef}
    >
      <div className="mx-auto w-full max-w-[1900px]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Growth Support
          </div>
          <h2 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            How Staff Augmentation Supports Business Growth
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            Add the right talent at the right time so your business can move
            faster, protect internal focus, and keep important work progressing.
          </p>
        </div>

        <div
          className="-mx-5 mt-10 cursor-grab touch-pan-y overflow-x-auto overscroll-x-contain px-5 pb-3 active:cursor-grabbing [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:-mx-[6vw] lg:mt-14 lg:px-[6vw] [&::-webkit-scrollbar]:hidden"
          onPointerCancel={stopDragging}
          onPointerDown={handlePointerDown}
          onPointerLeave={stopDragging}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          ref={carouselRef}
        >
          <div
            aria-label="Growth support carousel"
            className={`flex snap-x snap-mandatory gap-4 scroll-smooth ${
              isDragging ? "select-none" : ""
            }`}
          >
            {growthOutcomes.map((outcome, index) => {
              const OutcomeIcon = outcome.icon;

              return (
                <article
                  className="group relative flex h-[420px] w-full shrink-0 snap-start flex-col overflow-hidden bg-[#003466] p-6 text-white sm:h-[500px] md:w-[calc(50%_-_0.5rem)] lg:w-[calc(33.333333%_-_0.666667rem)]"
                  key={outcome.title}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-1/2 w-px bg-white/10"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-1/2 h-px bg-white/10"
                  />

                  <div className="relative z-10 flex items-start justify-between gap-6">
                    <div>
                      <span className="text-sm font-semibold text-white/65">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                        {outcome.signal}
                      </span>
                    </div>
                    <div className="flex size-16 items-center justify-center border border-white/25 bg-white text-[#003466] transition duration-300 group-hover:-translate-y-1">
                      <OutcomeIcon className="size-8" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">
                      {outcome.title}
                    </h3>
                    <p className="mt-5 max-w-sm text-base leading-7 text-white/76">
                      {outcome.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
