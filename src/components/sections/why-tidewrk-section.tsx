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
    <span>
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
    <section className="relative overflow-hidden bg-white text-[#111217]">
      <div className="relative grid min-h-[32vh] place-items-center bg-white px-5 pb-4 pt-0 sm:px-8 sm:pb-6 lg:px-12">
        <div
          className={cn(
            "w-full max-w-7xl rounded-none px-2 py-4 opacity-0 transition duration-700 ease-out sm:px-8",
            statsInView
              ? "translate-y-0 opacity-100"
              : "translate-y-10",
          )}
          ref={statsRef}
        >
          <div className="grid gap-10 md:grid-cols-4 md:gap-0">
            {whyTidewrkContent.stats.map((item, index) => (
              <div
                className="relative px-5 text-center md:px-8"
                key={item.label}
              >
                {index > 0 ? (
                  <div className="absolute left-0 top-2 hidden h-32 border-l border-dashed border-[#cfd3da] md:block" />
                ) : null}
                <p className="text-[clamp(4.5rem,8vw,7.2rem)] font-normal leading-none tracking-normal text-black">
                  <AnimatedCounter
                    active={statsInView}
                    suffix={item.suffix}
                    value={item.value}
                  />
                </p>
                <p className="mx-auto mt-6 max-w-48 text-sm leading-6 text-[#333333] sm:text-base">
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
