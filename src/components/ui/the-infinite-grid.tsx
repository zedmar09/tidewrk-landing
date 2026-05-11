"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  type MotionValue,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

type InfiniteGridProps = {
  className?: string;
};

export function InfiniteGrid({ className }: InfiniteGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);

    const handlePointerMove = (event: PointerEvent) => {
      const currentRect = container.getBoundingClientRect();
      mouseX.set(event.clientX - currentRect.left);
      mouseY.set(event.clientY - currentRect.top);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.22) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.22) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden bg-white",
        className,
      )}
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0 text-[#003466] opacity-[0.09]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      <motion.div
        className="absolute inset-0 z-0 text-[#003466] opacity-55"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_620px_at_18%_18%,rgba(0,52,102,0.18),transparent_68%),radial-gradient(circle_760px_at_88%_12%,rgba(0,52,102,0.16),transparent_70%),radial-gradient(circle_680px_at_18%_90%,rgba(0,52,102,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.96),rgba(255,255,255,0.78)_34%,rgba(255,255,255,0.40)_58%,rgba(255,255,255,0.10)_82%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

const GridPattern = ({
  offsetX,
  offsetY,
}: {
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
}) => {
  return (
    <svg className="h-full w-full">
      <defs>
        <motion.pattern
          height="40"
          id="tidewrk-infinite-grid-pattern"
          patternUnits="userSpaceOnUse"
          width="40"
          x={offsetX}
          y={offsetY}
        >
          <path
            className="text-[#003466]"
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </motion.pattern>
      </defs>
      <rect fill="url(#tidewrk-infinite-grid-pattern)" height="100%" width="100%" />
    </svg>
  );
};

export const Component = InfiniteGrid;

export default InfiniteGrid;
