import type { LucideIcon } from "lucide-react";

export type CTA = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavigationItem = {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: CTA;
  secondaryCta: CTA;
};

export type WhyTidewrkContent = {
  eyebrow: string;
  title: string;
  description: string;
  stats: Array<{
    value: number;
    suffix: string;
    label: string;
  }>;
};

export type SectionPlaceholder = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: LucideIcon;
};
