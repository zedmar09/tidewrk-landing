"use client";

import {
  SiFigma,
  SiLaravel,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section";

const softwareDevelopmentIcons = [
  {
    id: 1,
    icon: SiPython,
    className: "-left-8 top-[18%] hidden sm:block",
  },
  {
    id: 2,
    icon: SiReact,
    className: "-right-8 top-[18%]",
  },
  {
    id: 3,
    icon: SiLaravel,
    className: "bottom-[18%] left-[7%]",
  },
  {
    id: 4,
    icon: SiNextdotjs,
    className: "bottom-[17%] right-[7%] hidden sm:block",
  },
  {
    id: 5,
    icon: SiTypescript,
    className: "left-[23%] top-[9%] hidden xl:block",
  },
  {
    id: 6,
    icon: SiFigma,
    className: "right-[23%] top-[9%] hidden xl:block",
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
