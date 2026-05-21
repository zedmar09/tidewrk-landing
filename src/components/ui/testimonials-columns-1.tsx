"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export type ColumnTestimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

type TestimonialsColumnProps = {
  className?: string;
  testimonials: ColumnTestimonial[];
  duration?: number;
};

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 16,
}: TestimonialsColumnProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("min-w-0", className)}>
      <motion.div
        animate={shouldReduceMotion ? undefined : { translateY: "-50%" }}
        className="flex flex-col gap-5 pb-5"
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {Array.from({ length: shouldReduceMotion ? 1 : 2 }).map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            {testimonials.map(({ text, image, name, role }) => (
              <article
                className="w-full max-w-sm rounded-2xl border border-[#dfe5ec] bg-white/88 p-6 text-left shadow-[0_18px_55px_rgba(0,52,102,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#003466]/35 hover:shadow-[0_24px_70px_rgba(0,52,102,0.13)] md:p-7"
                key={`${setIndex}-${name}`}
              >
                <p className="text-sm leading-7 text-[#3f434a]">{text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    aria-label={name}
                    className="size-11 rounded-full border border-[#dfe5ec] bg-cover bg-center shadow-sm"
                    role="img"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                  <div className="min-w-0">
                    <div className="font-semibold leading-5 tracking-tight text-[#111217]">
                      {name}
                    </div>
                    <div className="mt-1 text-sm leading-5 tracking-tight text-[#666666]">
                      {role}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
