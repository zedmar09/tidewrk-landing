"use client";

import { useEffect, useRef, useState } from "react";
import { whyTidewrkContent } from "@/constants/landing-page";
import { cn } from "@/lib/utils";

function useInView<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

function AnimatedCounter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      const timeout = window.setTimeout(() => setCount(value), 0);
      return () => window.clearTimeout(timeout);
    }

    const duration = 1400;
    const startTime = performance.now();
    let frame = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span className="inline-block overflow-visible py-1">
      {count}
      <sup className="ml-1 align-super text-[0.35em] font-normal leading-none">
        {suffix}
      </sup>
    </span>
  );
}

export function WhyTidewrkSection() {
  const { ref: statsRef, isInView: statsInView } =
    useInView<HTMLDivElement>(0.25);

  return (
    <section className="relative z-[60] -mt-4 isolate overflow-visible bg-white text-[#111217] sm:-mt-5 md:-mt-6 lg:-mt-8">
      <div
        className="relative z-[60] grid min-h-[20vh] scroll-mt-24 place-items-center bg-white px-4 pb-8 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:px-6 xl:px-6"
        id="why-tidewrk"
      >
        <div
          className={cn(
            "relative z-[70] w-full max-w-[1900px] overflow-visible rounded-none px-0 py-3 opacity-0 transition duration-700 ease-out sm:px-2",
            statsInView
              ? "translate-y-0 opacity-100"
              : "translate-y-10",
          )}
          ref={statsRef}
        >
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-0">
            {whyTidewrkContent.stats.map((item, index) => (
              <div
                className="relative px-3 text-center sm:px-5 md:px-12 lg:px-16"
                key={item.label}
              >
                {index > 0 ? (
                  <div className="absolute left-0 top-4 hidden h-28 w-[3px] bg-[#d8e3ee] md:block">
                    <span className="absolute left-0 top-0 h-4 w-full bg-[#f58220]" />
                    <span className="absolute left-0 top-1/2 h-12 w-full -translate-y-1/2 bg-[#003466]" />
                  </div>
                ) : null}
                <p className="overflow-visible text-[clamp(3.25rem,14vw,5rem)] font-normal leading-[1.08] tracking-normal text-[#111217] md:text-[clamp(4.5rem,8vw,7.2rem)]">
                  <AnimatedCounter
                    active={statsInView}
                    suffix={item.suffix}
                    value={item.value}
                  />
                </p>
                <p className="mx-auto mt-4 max-w-56 text-sm leading-6 text-[#555555] sm:mt-6 sm:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
