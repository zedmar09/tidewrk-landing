"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  imgSrc: string;
  alt: string;
  name: string;
  role: string;
  quote: string;
}

interface AnimatedTestimonialGridProps {
  testimonials: Testimonial[];
  badgeText?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

type ImagePosition = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  className: string;
};

const imagePositions: ImagePosition[] = [
  { top: "5%", left: "15%", className: "hidden lg:block w-24 h-24" },
  { top: "15%", left: "35%", className: "hidden md:block w-20 h-20" },
  { top: "5%", left: "55%", className: "hidden md:block w-16 h-16" },
  { top: "10%", right: "15%", className: "hidden lg:block w-28 h-28" },
  { top: "25%", right: "5%", className: "hidden md:block w-20 h-20" },
  { top: "45%", right: "10%", className: "hidden lg:block w-24 h-24" },
  { top: "50%", left: "5%", className: "hidden md:block w-28 h-28" },
  { bottom: "5%", left: "20%", className: "hidden lg:block w-20 h-20" },
  { bottom: "18%", left: "18%", className: "hidden md:block w-16 h-16" },
  { bottom: "8%", right: "8%", className: "hidden md:block w-24 h-24" },
  { bottom: "2%", right: "15%", className: "hidden lg:block w-20 h-20" },
  { top: "10%", left: "5%", className: "block md:hidden w-16 h-16" },
  { top: "5%", right: "10%", className: "block md:hidden w-20 h-20" },
  { bottom: "5%", left: "10%", className: "block md:hidden w-20 h-20" },
  { bottom: "10%", right: "5%", className: "block md:hidden w-16 h-16" },
];

const imageVariants = {
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      damping: 20,
      delay: (index % 6) * 0.08,
      stiffness: 260,
      type: "spring" as const,
    },
  }),
  initial: { opacity: 0, scale: 0.5 },
};

const floatingAnimation = (index: number) => ({
  transition: {
    duration: 5 + (index % 5) * 0.55,
    ease: "easeInOut" as const,
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
  y: [0, -6 - (index % 4) * 4, 0],
});

const getPopupClassName = (position: ImagePosition) =>
  position.bottom
    ? "bottom-full left-1/2 mb-3 -translate-x-1/2"
    : "left-1/2 top-full mt-3 -translate-x-1/2";

const getPopupArrowClassName = (position: ImagePosition) =>
  position.bottom
    ? "-bottom-1.5 left-1/2 -translate-x-1/2 border-b border-r"
    : "-top-1.5 left-1/2 -translate-x-1/2 border-l border-t";

export const AnimatedTestimonialGrid = ({
  testimonials,
  badgeText = "Testimonials",
  title,
  description,
  ctaText,
  ctaHref,
  className,
}: AnimatedTestimonialGridProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <section
      className={cn(
        "relative mx-auto w-full max-w-7xl px-4 py-24 sm:py-32",
        className,
      )}
    >
      {imagePositions.map((position, index) => {
          const testimonial = testimonials[index % testimonials.length];

          return (
            <motion.div
              className={cn(
                "absolute z-20 rounded-lg outline-none",
                position.className,
              )}
              custom={index}
              initial="initial"
              key={`${testimonial.alt}-${index}`}
              onBlur={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              tabIndex={0}
              style={{
                bottom: position.bottom,
                left: position.left,
                right: position.right,
                top: position.top,
              }}
              variants={imageVariants}
              animate="animate"
              whileHover={{ scale: 1.1, zIndex: 50 }}
            >
              <motion.div
                animate={floatingAnimation(index)}
                className="relative h-full w-full rounded-lg shadow-[0_18px_60px_rgba(0,52,102,0.15)] ring-1 ring-black/5"
              >
                <motion.img
                  alt={testimonial.alt}
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial.imgSrc}
                />
              </motion.div>
              <AnimatePresence>
                {activeIndex === index ? (
                  <motion.div
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className={cn(
                      "pointer-events-none absolute z-50 w-64 rounded-2xl border border-[#e3e7ec] bg-white p-4 text-left shadow-[0_22px_70px_rgba(0,52,102,0.18)]",
                      getPopupClassName(position),
                    )}
                    exit={{ opacity: 0, scale: 0.96, y: -4 }}
                    initial={{ opacity: 0, scale: 0.96, y: -4 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <div
                      className={cn(
                        "absolute size-3 rotate-45 border-[#e3e7ec] bg-white",
                        getPopupArrowClassName(position),
                      )}
                    />
                    <p className="text-sm leading-6 text-[#333942]">
                      {testimonial.quote}
                    </p>
                    <div className="mt-4 border-t border-[#eef0f3] pt-3">
                      <p className="text-sm font-semibold text-[#111217]">
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#666666]">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          );
        })}

      <div className="relative z-10 flex flex-col items-center text-center">
        {badgeText ? (
          <div className="mb-4 inline-block rounded-full border border-[#dedfe6] bg-white/80 px-4 py-2 text-sm font-normal text-[#666666] shadow-[0_10px_36px_rgba(0,52,102,0.06)]">
            {badgeText}
          </div>
        ) : null}
        <h2 className="mb-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] md:text-6xl">
          {title}
        </h2>
        <p className="mb-8 max-w-xl text-lg leading-8 text-[#666666]">
          {description}
        </p>
        <a
          className="inline-flex items-center justify-center rounded-full bg-[#003466] px-6 py-3 text-base font-normal text-white shadow-[0_12px_30px_rgba(0,52,102,0.18)] transition-colors hover:bg-[#00294f] focus:outline-none focus:ring-2 focus:ring-[#003466] focus:ring-offset-2"
          href={ctaHref}
        >
          {ctaText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};
