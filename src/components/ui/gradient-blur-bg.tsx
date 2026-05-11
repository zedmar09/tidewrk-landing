"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type GradientBlurBgProps = {
  className?: string;
};

export function GradientBlurBg({ className }: GradientBlurBgProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 82, y: 28 });

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      const container = containerRef.current;
      if (!container) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      if (x < 0 || x > 100 || y < 0 || y > 100) {
        return;
      }

      setPosition({ x, y });
    };

    window.addEventListener("pointermove", onPointerMove);

    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 min-h-screen w-full bg-white",
        className,
      )}
      ref={containerRef}
    >
      <div
        className="absolute inset-0 z-0 transition-[background-image] duration-300 ease-out"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,52,102,0.075) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,52,102,0.075) 1px, transparent 1px),
            radial-gradient(circle 520px at ${position.x}% ${position.y}%, rgba(0,52,102,0.22), transparent 68%),
            radial-gradient(circle 760px at 86% 18%, rgba(0,52,102,0.12), transparent 68%)
          `,
          backgroundSize: "64px 64px, 64px 64px, 100% 100%, 100% 100%",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.90),rgba(255,255,255,0.58)_38%,rgba(255,255,255,0.18)_72%,rgba(255,255,255,0)_100%)]" />
    </div>
  );
}

export const Component = GradientBlurBg;

export default GradientBlurBg;
