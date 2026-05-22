"use client";

import * as React from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IconProps {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  className: string;
}

export interface FloatingIconsHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  icons: IconProps[];
}

const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 22, stiffness: 260 });
  const springY = useSpring(y, { damping: 22, stiffness: 260 });
  const TechIcon = iconData.icon;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const handleMouseMove = () => {
      if (!ref.current) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const iconCenterX = rect.left + rect.width / 2;
      const iconCenterY = rect.top + rect.height / 2;
      const distance = Math.hypot(
        mouseX.current - iconCenterX,
        mouseY.current - iconCenterY,
      );

      if (distance < 150) {
        const angle = Math.atan2(
          mouseY.current - iconCenterY,
          mouseX.current - iconCenterX,
        );
        const force = (1 - distance / 150) * 44;
        x.set(-Math.cos(angle) * force);
        y.set(-Math.sin(angle) * force);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion, x, y]);

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className={cn("absolute", iconData.className)}
      initial={{ opacity: 0, scale: 0.72 }}
      ref={ref}
      style={{ x: springX, y: springY }}
      transition={{
        delay: index * 0.06,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                rotate: [0, 4, 0, -4, 0],
                x: [0, 5, 0, -5, 0],
                y: [0, -7, 0, 7, 0],
              }
        }
        className={cn(
          "flex size-14 items-center justify-center border p-3 sm:size-16 md:size-20 md:p-4",
          index === 1
            ? "border-[#ffd9b8] bg-[#fff8f2] text-[#f58220]"
            : "border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]",
        )}
        transition={{
          duration: 5 + (index % 5) * 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <TechIcon className="size-8 md:size-10" />
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsHero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingIconsHeroProps
>(({ className, title, subtitle, ctaText, ctaHref, icons, ...props }, ref) => {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <section
      className={cn(
        "relative flex min-h-[88svh] w-full items-center justify-center overflow-hidden bg-white px-5 pb-12 pt-24 sm:px-8 lg:px-12",
        className,
      )}
      onMouseMove={handleMouseMove}
      ref={ref}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none absolute inset-0 bg-white/70" />
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        {icons.map((iconData, index) => (
          <Icon
            iconData={iconData}
            index={index}
            key={iconData.id}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2.5 text-sm font-medium text-[#003466]">
          <span className="size-2 bg-[#f58220]" aria-hidden="true" />
          Software Development
        </div>
        <h1 className="text-balance text-[clamp(2.5rem,8vw,5.7rem)] font-semibold leading-[1.04] tracking-normal text-[#111217]">
          {title}
        </h1>
        <p className="mx-auto mt-7 max-w-5xl text-balance text-lg leading-8 text-[#666666] sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
          {subtitle}
        </p>
        <div className="mt-9">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={ctaHref}>
              {ctaText}
              <ArrowRight className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
});

FloatingIconsHero.displayName = "FloatingIconsHero";

export { FloatingIconsHero };
