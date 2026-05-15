"use client";

import {
  Braces,
  ClipboardCheck,
  Layers3,
  Palette,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type React from "react";

import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { cn } from "@/lib/utils";

const experts = [
  {
    title: "Project Manager",
    icon: ClipboardCheck,
    description: "Keeps timelines, communication, and delivery aligned.",
  },
  {
    title: "Product Owner",
    icon: Layers3,
    description: "Connects product priorities with business goals and user needs.",
  },
  {
    title: "Software Developers",
    icon: Braces,
    description: "Build reliable front-end, back-end, and database solutions.",
  },
  {
    title: "UI/UX Designers",
    icon: Palette,
    description: "Create clean, intuitive experiences users can easily understand.",
  },
  {
    title: "QA Testers",
    icon: ShieldCheck,
    description: "Validate quality, performance, and reliability before release.",
  },
  {
    title: "DevOps Engineers",
    icon: Rocket,
    description: "Support deployment, infrastructure, automation, and delivery.",
  },
];

export function SoftwareDevelopmentTeamGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-[#f7f8fa]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-[#f7f8fa]" />
      <div className="absolute inset-x-0 bottom-32 top-32 bg-[#f7f8fa]" />

      <div className="relative w-full space-y-8 px-[4vw]">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#003466]">
            Delivery Team
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[#111217] md:text-4xl">
            The Right Experts for Every Stage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#666666] md:text-base">
            Every software project needs more than code. Tidewrk brings
            together the right mix of specialists to guide your product from
            idea to launch.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.25}
          className="grid w-full grid-cols-1 divide-y divide-dashed divide-[#003466]/20 border border-dashed border-[#003466]/20 bg-white/80 shadow-[0_18px_60px_rgba(0,52,102,0.06)] backdrop-blur-sm sm:grid-cols-2 sm:divide-x lg:grid-cols-3"
        >
          {experts.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}

type AnimatedContainerProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", opacity: 0, y: -8 }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
