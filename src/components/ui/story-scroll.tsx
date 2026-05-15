"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(" ");
}

export interface FlowSectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  "aria-label"?: string;
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  className,
  style = {},
  children,
  "aria-label": ariaLabel,
}) => (
  <section
    aria-label={ariaLabel}
    className={cx("relative min-h-screen w-full overflow-hidden", className)}
    data-flow-section
  >
    <div
      className={cx(
        "flow-art-container relative flex min-h-screen w-full flex-col justify-between gap-6 px-5 pb-8 pt-24 sm:px-8 sm:pb-[4vw] sm:pt-[clamp(5rem,8vw,7rem)] lg:px-[4vw]",
        "will-change-transform",
      )}
      data-flow-inner
      style={{ transformOrigin: "bottom left", ...style }}
    >
      {children}
    </div>
  </section>
);

export interface FlowArtProps {
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}

const childCount = (children: React.ReactNode) => React.Children.count(children);

const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  "aria-label": ariaLabel = "Story scroll",
}) => {
  const containerRef = React.useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || reducedMotion) {
        return;
      }

      const sections = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>("[data-flow-section]"),
      );

      if (sections.length === 0) {
        return;
      }

      const triggers: ScrollTrigger[] = [];

      sections.forEach((section, index) => {
        gsap.set(section, { zIndex: index + 1 });

        const inner = section.querySelector<HTMLElement>(".flow-art-container");
        if (!inner) {
          return;
        }

        if (index > 0) {
          gsap.set(inner, { rotation: 24, transformOrigin: "bottom left" });
          const tween = gsap.to(inner, {
            ease: "none",
            rotation: 0,
            scrollTrigger: {
              end: "top 25%",
              scrub: true,
              start: "top bottom",
              trigger: section,
            },
          });

          if (tween.scrollTrigger) {
            triggers.push(tween.scrollTrigger);
          }
        }

        if (index < sections.length - 1) {
          triggers.push(
            ScrollTrigger.create({
              end: "bottom top",
              pin: true,
              pinSpacing: false,
              start: "bottom bottom",
              trigger: section,
            }),
          );
        }
      });

      ScrollTrigger.refresh();

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    },
    { dependencies: [childCount(children), reducedMotion], scope: containerRef },
  );

  return (
    <main
      aria-label={ariaLabel}
      className={cx("w-full overflow-x-hidden", className)}
      ref={containerRef}
    >
      {children}
    </main>
  );
};

export default FlowArt;
