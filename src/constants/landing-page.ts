import type {
  HeroContent,
  SectionPlaceholder,
  WhyTidewrkContent,
} from "@/types";

export const heroContent: HeroContent = {
  eyebrow: "Tidewrk",
  headline: "Powering Progress Through Talent and Technology Solutions",
  description:
    "Tidewrk connects businesses with the right talent, technology, and expertise to solve challenges, scale smarter, and move forward with confidence.",
  primaryCta: {
    label: "Why Tidewrk",
    href: "#why-tidewrk",
  },
  secondaryCta: {
    label: "Our Services",
    href: "#services",
  },
};

export const whyTidewrkContent: WhyTidewrkContent = {
  eyebrow: "Why Tidewrk",
  title: "Scale smarter",
  description:
    "Choosing the right partner is more than outsourcing. Tidewrk connects businesses with skilled global talent, technology expertise, and reliable execution to help solve challenges, improve operations, and drive continuous progress.",
  stats: [
    {
      value: 70,
      suffix: "+",
      label: "Years of Combined Experience",
    },
    {
      value: 45,
      suffix: "+",
      label: "Completed Projects",
    },
    {
      value: 5,
      suffix: "+",
      label: "Years of Partnership",
    },
    {
      value: 100,
      suffix: "+",
      label: "Technology & Business Experts",
    },
  ],
};

export const sectionPlaceholders: SectionPlaceholder[] = [
  {
    eyebrow: "Features",
    title: "A sharper operating layer",
    description: "Future feature content will live here.",
  },
  {
    eyebrow: "How it works",
    title: "Launch faster with guided workflows",
    description: "Future process content will live here.",
  },
  {
    eyebrow: "Pricing",
    title: "Simple plans for growing teams",
    description: "Future pricing content will live here.",
  },
];
