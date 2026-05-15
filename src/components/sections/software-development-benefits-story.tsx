"use client";

import FlowArt, { FlowSection } from "@/components/ui/story-scroll";

type StoryPanel = {
  eyebrow: string;
  title: string;
  description?: string;
  backgroundColor: string;
  color: string;
  divider: string;
  mutedClassName: string;
  titleClassName?: string;
};

const darkDivider = "my-[2vw] border-none border-t border-white/55";
const lightDivider = "my-[2vw] border-none border-t border-[#003466]/28";

const panels: StoryPanel[] = [
  {
    backgroundColor: "#003466",
    color: "#ffffff",
    divider: darkDivider,
    eyebrow: "Benefits",
    mutedClassName: "text-white/82",
    title: "Why Work With a Dedicated Software Development Team",
  },
  {
    backgroundColor: "#ffffff",
    color: "#003466",
    description:
      "A complete team works together across strategy, design, development, and testing so every part of the product supports the same business goal.",
    divider: lightDivider,
    eyebrow: "Better Collaboration",
    mutedClassName: "text-[#666666]",
    title: "Better Collaboration",
  },
  {
    backgroundColor: "#111217",
    color: "#ffffff",
    description:
      "Clear roles, agile workflows, and experienced execution help reduce delays and keep development moving.",
    divider: darkDivider,
    eyebrow: "Faster Delivery",
    mutedClassName: "text-white/78",
    title: "Faster Delivery",
  },
  {
    backgroundColor: "#f7f8fa",
    color: "#111217",
    description:
      "Built-in quality assurance helps ensure your software is tested, stable, secure, and ready for real users.",
    divider: lightDivider,
    eyebrow: "Higher Quality",
    mutedClassName: "text-[#666666]",
    title: "Higher Quality",
    titleClassName: "text-[#003466]",
  },
  {
    backgroundColor: "#003466",
    color: "#ffffff",
    description:
      "We build with future growth in mind, so your software can evolve as your business expands.",
    divider: darkDivider,
    eyebrow: "Scalable Solutions",
    mutedClassName: "text-white/82",
    title: "Scalable Solutions",
  },
  {
    backgroundColor: "#ffffff",
    color: "#003466",
    description:
      "A structured process helps identify issues early, manage priorities, and reduce costly surprises.",
    divider: lightDivider,
    eyebrow: "Lower Project Risk",
    mutedClassName: "text-[#666666]",
    title: "Lower Project Risk",
  },
];

function splitTitle(title: string) {
  const words = title.split(" ");
  const rows: string[] = [];

  for (let index = 0; index < words.length; index += 2) {
    rows.push(words.slice(index, index + 2).join(" "));
  }

  return rows;
}

function StoryContent({ panel }: { panel: StoryPanel }) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-75">
        Software Development
      </p>
      <hr className={panel.divider} />
      <div>
        <h2
          className={`text-balance text-[clamp(2.5rem,7.5vw,7rem)] font-semibold uppercase leading-[0.92] tracking-tight ${
            panel.titleClassName ?? ""
          }`}
        >
          {splitTitle(panel.title).map((row) => (
            <span className="block" key={row}>
              {row}
            </span>
          ))}
        </h2>
      </div>
      <hr className={panel.divider} />
      {panel.description ? (
        <p
          className={`mt-auto max-w-[58ch] text-[clamp(1rem,2.25vw,1.8rem)] font-normal leading-relaxed ${panel.mutedClassName}`}
        >
          {panel.description}
        </p>
      ) : null}
    </>
  );
}

export function SoftwareDevelopmentBenefitsStory() {
  return (
    <FlowArt aria-label="Software development benefits story">
      {panels.map((panel) => (
        <FlowSection
          aria-label={panel.eyebrow}
          key={panel.eyebrow}
          style={{ backgroundColor: panel.backgroundColor, color: panel.color }}
        >
          <StoryContent panel={panel} />
        </FlowSection>
      ))}
    </FlowArt>
  );
}
