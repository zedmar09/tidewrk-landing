"use client";

import Link from "next/link";
import * as React from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BrainCircuit,
  Code2,
  Handshake,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { heroContent } from "@/constants/landing-page";
import { cn } from "@/lib/utils";

const floatingHeroIcons = [
  {
    id: 1,
    label: "Talent solutions",
    icon: UsersRound,
    className: "-left-8 top-[18%] hidden sm:block",
  },
  {
    id: 2,
    label: "Technology systems",
    icon: Code2,
    className: "-right-8 top-[18%]",
  },
  {
    id: 3,
    label: "Workflow design",
    icon: Blocks,
    className: "bottom-[18%] left-[7%]",
  },
  {
    id: 4,
    label: "Vendor collaboration",
    icon: Handshake,
    className: "bottom-[17%] right-[7%] hidden sm:block",
  },
  {
    id: 5,
    label: "Strategic expertise",
    icon: BrainCircuit,
    className: "left-[23%] top-[9%] hidden xl:block",
  },
  {
    id: 6,
    label: "Smarter scaling",
    icon: Sparkles,
    className: "right-[23%] top-[9%] hidden xl:block",
  },
  {
    id: 7,
    label: "Reliable execution",
    icon: BadgeCheck,
    className: "bottom-[8%] left-[30%] hidden 2xl:block",
  },
];

export function HeroSection() {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <section
      className="relative z-0 overflow-hidden bg-white px-5 pb-0 pt-[4.75rem] sm:px-8 sm:pt-20 lg:px-[6vw]"
      onMouseMove={handleMouseMove}
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-4.75rem)] w-full max-w-[1900px] flex-col justify-center py-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {floatingHeroIcons.map((iconData, index) => (
            <FloatingHeroIcon
              iconData={iconData}
              index={index}
              key={iconData.id}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2.5 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Talent + Technology + Execution
          </div>

          <h1 className="mx-auto mt-5 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-normal text-[#111217] sm:text-6xl lg:text-7xl xl:text-[4.85rem]">
            {heroContent.headline}
          </h1>

          <p className="mx-auto mt-5 max-w-5xl text-balance text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9 lg:text-[1.35rem] lg:leading-9">
            {heroContent.description}
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              className="inline-flex h-14 w-full items-center justify-center gap-2 bg-[#003466] px-8 text-lg font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a447a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/30 sm:w-auto"
              href={heroContent.primaryCta.href}
            >
              <Sparkles className="size-5" aria-hidden="true" />
              {heroContent.primaryCta.label}
            </Link>
            <Link
              className="inline-flex h-14 w-full items-center justify-center gap-2 border border-[#d8e6f5] bg-white px-8 text-lg font-semibold text-[#003466] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5f9fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/30 sm:w-auto"
              href={heroContent.secondaryCta.href}
            >
              {heroContent.secondaryCta.label}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingHeroIcon({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: (typeof floatingHeroIcons)[number];
  index: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 22, stiffness: 260 });
  const springY = useSpring(y, { damping: 22, stiffness: 260 });
  const HeroIcon = iconData.icon;

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
            : index % 3 === 2
            ? "border-[#d8e6f5] bg-white text-[#003466]"
            : "border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]",
        )}
        transition={{
          duration: 5 + (index % 5) * 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <HeroIcon className="size-8 md:size-10" aria-hidden="true" />
      </motion.div>
    </motion.div>
  );
}
