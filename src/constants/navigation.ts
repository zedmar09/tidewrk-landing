import type { NavigationItem } from "@/types";

export const navigationItems: NavigationItem[] = [
  {
    label: "Services",
    href: "#services",
    children: [
      {
        label: "Software Development",
        href: "/software-development",
      },
      {
        label: "Staff Augmentation",
        href: "/staff-augmentation",
      },
      {
        label: "Offshoring",
        href: "/offshoring",
      },
      {
        label: "Executive Advisory Consulting",
        href: "/executive-advisory-consulting",
      },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      {
        label: "Full-Stack Development Team",
        href: "/full-stack-development-team",
      },
      {
        label: "Business Intelligence",
        href: "#business-intelligence",
      },
      {
        label: "Data Science",
        href: "#data-science",
      },
      {
        label: "Data Engineering",
        href: "#data-engineering",
      },
      {
        label: "UI/UX Design",
        href: "#ui-ux-design",
      },
      {
        label: "Mobile Development",
        href: "#mobile-development",
      },
      {
        label: "Machine Learning",
        href: "#machine-learning",
      },
      {
        label: "QA Testing & Engineering",
        href: "#qa-testing-engineering",
      },
    ],
  },
  {
    label: "Careers",
    href: "#careers",
  },
  {
    label: "About Us",
    href: "#about-us",
  },
];
