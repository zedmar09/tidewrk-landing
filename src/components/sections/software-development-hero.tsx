"use client";

import {
  SiDocker,
  SiFigma,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section";

const softwareDevelopmentIcons = [
  {
    id: 1,
    icon: SiPython,
    className: "left-[7%] top-[18%] hidden sm:block",
  },
  {
    id: 2,
    icon: SiReact,
    className: "right-[8%] top-[18%]",
  },
  {
    id: 3,
    icon: SiLaravel,
    className: "bottom-[17%] left-[8%]",
  },
  {
    id: 4,
    icon: SiNextdotjs,
    className: "bottom-[16%] right-[9%] hidden sm:block",
  },
  {
    id: 5,
    icon: SiTypescript,
    className: "left-[28%] top-[10%] hidden md:block",
  },
  {
    id: 6,
    icon: SiFigma,
    className: "right-[29%] top-[9%] hidden md:block",
  },
  {
    id: 7,
    icon: SiNodedotjs,
    className: "left-[15%] top-[50%] hidden lg:block",
  },
  {
    id: 8,
    icon: SiPostgresql,
    className: "right-[13%] top-[49%] hidden lg:block",
  },
  {
    id: 9,
    icon: SiTailwindcss,
    className: "bottom-[8%] left-[27%] hidden md:block",
  },
  {
    id: 10,
    icon: SiDocker,
    className: "bottom-[9%] right-[29%] hidden md:block",
  },
  {
    id: 11,
    icon: SiGithub,
    className: "left-[45%] top-[5%] hidden lg:block",
  },
  {
    id: 12,
    icon: SiGraphql,
    className: "bottom-[5%] left-[48%] hidden lg:block",
  },
  {
    id: 13,
    icon: SiJavascript,
    className: "left-[4%] top-[62%] sm:hidden",
  },
  {
    id: 14,
    icon: SiPhp,
    className: "right-[5%] top-[62%] sm:hidden",
  },
  {
    id: 15,
    icon: SiMysql,
    className: "left-[42%] bottom-[6%] sm:hidden",
  },
  {
    id: 16,
    icon: SiVercel,
    className: "right-[45%] top-[9%] sm:hidden",
  },
];

export function SoftwareDevelopmentHero() {
  return (
    <FloatingIconsHero
      ctaHref="#contact"
      ctaText="Explore Solutions"
      icons={softwareDevelopmentIcons}
      subtitle="We build practical, secure, and scalable software that helps your team work smarter, serve customers better, and grow with confidence."
      title="Build Software That Works the Way Your Business Does"
    />
  );
}
