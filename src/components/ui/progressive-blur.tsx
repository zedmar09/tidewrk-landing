"use client";

import { type HTMLMotionProps, motion } from "motion/react";

import { cn } from "@/lib/utils";

export const GRADIENT_ANGLES = {
  bottom: 180,
  left: 270,
  right: 90,
  top: 0,
};

export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES;
  blurLayers?: number;
  className?: string;
  blurIntensity?: number;
} & HTMLMotionProps<"div">;

export function ProgressiveBlur({
  direction = "bottom",
  blurLayers = 8,
  className,
  blurIntensity = 0.25,
  ...props
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2);
  const segmentSize = 1 / (blurLayers + 1);

  return (
    <div className={cn("relative", className)}>
      {Array.from({ length: layers }).map((_, index) => {
        const angle = GRADIENT_ANGLES[direction];
        const gradientStops = [
          index * segmentSize,
          (index + 1) * segmentSize,
          (index + 2) * segmentSize,
          (index + 3) * segmentSize,
        ].map(
          (position, positionIndex) =>
            `rgba(255, 255, 255, ${
              positionIndex === 1 || positionIndex === 2 ? 1 : 0
            }) ${position * 100}%`,
        );

        const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(
          ", ",
        )})`;

        return (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            key={index}
            style={{
              WebkitMaskImage: gradient,
              backdropFilter: `blur(${index * blurIntensity}px)`,
              maskImage: gradient,
            }}
            {...props}
          />
        );
      })}
    </div>
  );
}
