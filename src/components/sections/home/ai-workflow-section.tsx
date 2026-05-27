"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { FaMicrosoft } from "react-icons/fa6";
import {
  SiClaude,
  SiGithub,
  SiGooglegemini,
  SiOpenai,
  SiSlack,
} from "react-icons/si";
import { ChevronLeft, ChevronRight, Sparkles, Workflow } from "lucide-react";

const leftTools = [
  { label: "Codex", icon: SiOpenai, position: "left-[2rem] top-[4.8rem]" },
  { label: "Gemini", icon: SiGooglegemini, position: "left-[5.7rem] top-[13.1rem]" },
  { label: "Outlook", icon: FaMicrosoft, position: "left-[2.4rem] top-[21.3rem]" },
];

const rightTools = [
  { label: "Claude", icon: SiClaude, position: "right-[2rem] top-[4.6rem]" },
  { label: "GitHub", icon: SiGithub, position: "right-[5.6rem] top-[11.8rem]" },
  { label: "Slack", icon: SiSlack, position: "right-[5rem] top-[19rem]" },
];

const boardCards = [
  {
    eyebrow: "Signal",
    title: "Know what matters",
    bars: ["w-16", "w-24", "w-20"],
  },
  {
    eyebrow: "Action",
    title: "Move the right work",
    bars: ["w-24", "w-16", "w-20"],
  },
  {
    eyebrow: "Rhythm",
    title: "Keep output steady",
    bars: ["w-20", "w-24", "w-14"],
  },
];

const testimonials = [
  {
    quote:
      "Working with this team was an absolute game-changer for our business. Their attention to detail, innovative ideas, and commitment to deadlines truly and wonderful impressed us.",
    name: "Sandra Sicharan",
    role: "Global Head of Engineering Platform at JP Morgan Chase",
    mark: "S",
  },
  {
    quote:
      "Working with this team was an absolute game-changer for our business. Their attention to detail, innovative ideas, and commitment to deadlines truly and wonderful impressed us.",
    name: "Jeremy Lucien",
    role: "Director of R&D Productivity, International",
    mark: "J",
  },
  {
    quote:
      "Working with this team was an absolute game-changer for our business. Their attention to detail, innovative ideas, and commitment to deadlines truly and wonderful impressed us.",
    name: "Oscar Mullin",
    role: "VP of Data, GenAI & Infrastructure, Mercado Libre",
    mark: "O",
  },
  {
    quote:
      "Working with this team was an absolute game-changer for our business. Their attention to detail, innovative ideas, and commitment to deadlines truly and wonderful impressed us.",
    name: "Jenna Reyes",
    role: "Head of Operations, Northstar Systems",
    mark: "J",
  },
];

export function AiWorkflowSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const scrollToTestimonial = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>("[data-testimonial-card]");
    if (!card) return;

    carousel.scrollTo({
      left: index * (card.offsetWidth + 20),
      behavior: "smooth",
    });
    setActiveTestimonial(index);
  };

  const scrollTestimonials = (direction: "previous" | "next") => {
    const nextIndex =
      direction === "next"
        ? (activeTestimonial + 1) % testimonials.length
        : (activeTestimonial - 1 + testimonials.length) % testimonials.length;

    scrollToTestimonial(nextIndex);
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTestimonial((current) => {
        const nextIndex = (current + 1) % testimonials.length;
        const carousel = carouselRef.current;
        const card = carousel?.querySelector<HTMLElement>(
          "[data-testimonial-card]",
        );

        if (carousel && card) {
          carousel.scrollTo({
            left: nextIndex * (card.offsetWidth + 20),
            behavior: "smooth",
          });
        }

        return nextIndex;
      });
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      scrollToTestimonial(activeTestimonial);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTestimonial]);

  return (
    <section className="relative overflow-hidden bg-[#02050a] px-5 pb-8 pt-16 text-white sm:px-8 md:pb-12 md:pt-24 lg:px-[6vw]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,63,114,0.72),transparent_36%),radial-gradient(ellipse_at_18%_48%,rgba(0,63,114,0.2),transparent_28%),radial-gradient(ellipse_at_78%_52%,rgba(0,63,114,0.22),transparent_28%),linear-gradient(180deg,#02050a_0%,#07111f_42%,#02050a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#02050a] via-[#02050a]/78 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#02050a] via-[#02050a]/82 to-transparent"
      />

      <div className="relative mx-auto max-w-[1800px]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs font-medium text-white/76 shadow-[0_16px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-4 sm:text-sm">
            <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em]">
              Connected Support
            </span>
            AI-supported tools, human-led execution
          </div>

          <h2 className="mx-auto mt-6 max-w-5xl text-balance text-[2.45rem] font-semibold leading-[1.05] tracking-normal text-white sm:text-6xl lg:text-[4.35rem]">
            The quiet operating layer behind{" "}
            <span className="tidewrk-glow-text">your next move</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-7 text-white/62 sm:text-xl sm:leading-8">
            We connect the platforms teams already use with modern workflows,
            focused automation, and the human judgment needed to turn activity
            into progress.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-7xl sm:mt-16 lg:min-h-[34rem]">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[3.5rem] hidden h-[31rem] w-full text-white/42 drop-shadow-[0_0_18px_rgba(0,63,114,0.42)] lg:block"
            fill="none"
            viewBox="0 0 1200 500"
          >
            <path
              className="workflow-connector workflow-connector-main"
              d="M216 250 H418"
            />
            <path
              className="workflow-connector workflow-connector-main"
              d="M782 250 H984"
            />
            <path
              className="workflow-connector workflow-connector-left"
              d="M58 48 H190 C216 48 216 84 216 118 V250"
            />
            <path
              className="workflow-connector workflow-connector-left"
              d="M120 181 H216 V250"
            />
            <path
              className="workflow-connector workflow-connector-left"
              d="M66 314 H190 C216 314 216 288 216 250"
            />
            <path
              className="workflow-connector workflow-connector-right"
              d="M1140 46 H1012 C984 46 984 82 984 118 V250"
            />
            <path
              className="workflow-connector workflow-connector-right"
              d="M1080 159 H984 V250"
            />
            <path
              className="workflow-connector workflow-connector-right"
              d="M1072 275 H984 V250"
            />
          </svg>

          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
            {[...leftTools, ...rightTools].map((tool, index) => (
              <ToolNode key={tool.label} tool={tool} index={index} />
            ))}
          </div>

          <ToolCloud tools={leftTools} />
          <ToolCloud tools={rightTools} />

          <div className="relative z-10 mx-auto w-full max-w-[45rem] pt-8 lg:pt-20">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-3 shadow-[0_34px_120px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,63,114,0.42),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))]" />
              <div className="relative rounded-[1.25rem] border border-white/8 bg-[#050b14]/76 p-4 sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-white/70" />
                    <span className="size-2.5 rounded-full bg-[#003f72] shadow-[0_0_18px_rgba(0,63,114,0.9)]" />
                    <span className="size-2.5 rounded-full bg-white/28" />
                  </div>
                  <span className="rounded-full border border-[#003f72]/42 bg-[#003f72]/14 px-3 py-1 text-xs font-medium text-white/70">
                    Work orchestration
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {boardCards.map((card, index) => (
                    <div
                      className="workflow-board-card rounded-[1rem] border border-white/8 bg-white/[0.065] p-4"
                      key={card.title}
                      style={{ animationDelay: `${index * -0.85}s` }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/42">
                        {card.eyebrow}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold leading-tight text-white">
                        {card.title}
                      </h3>
                      <div className="mt-5 space-y-3">
                        {card.bars.map((width, barIndex) => (
                          <div
                            className="flex items-center gap-2"
                            key={`${card.title}-${width}-${barIndex}`}
                          >
                            <span className="size-2 rounded-full bg-[#003f72] shadow-[0_0_16px_rgba(0,63,114,0.86)]" />
                            <span
                              className={`h-2 rounded-full bg-white/12 ${width}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div className="rounded-[1rem] border border-white/8 bg-white/[0.045] p-4">
                    <div className="flex items-center gap-3">
                      <Workflow className="size-5 text-white/68" />
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                        <span className="workflow-progress block h-full w-2/3 rounded-full bg-[#003f72] shadow-[0_0_18px_rgba(0,63,114,0.88)]" />
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-white/78">
                    <Sparkles className="size-4" />
                    Modern flow, less noise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-7xl sm:mt-12">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
            <h3 className="max-w-sm text-balance text-[1.9rem] font-semibold leading-[1.03] tracking-normal text-white sm:text-[2.45rem]">
              Hear From Our{" "}
              <span className="block italic text-white/78">
                Satisfied Clients
              </span>
            </h3>

            <div className="flex shrink-0 items-center gap-3">
              <button
                aria-label="Show previous testimonial"
                className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.075] text-white/70 transition hover:border-[#003f72]/60 hover:bg-[#003f72]/18 hover:text-white"
                onClick={() => scrollTestimonials("previous")}
                type="button"
              >
                <ChevronLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                aria-label="Show next testimonial"
                className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.075] text-white/70 transition hover:border-[#003f72]/60 hover:bg-[#003f72]/18 hover:text-white"
                onClick={() => scrollTestimonials("next")}
                type="button"
              >
                <ChevronRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            className="testimonial-carousel mt-7 flex snap-x gap-5 overflow-x-auto pb-4 sm:mt-9"
            ref={carouselRef}
            onScroll={(event) => {
              const cardWidth =
                event.currentTarget.querySelector<HTMLElement>(
                  "[data-testimonial-card]",
                )?.offsetWidth ?? 340;
              const nextActive = Math.round(
                event.currentTarget.scrollLeft / (cardWidth + 20),
              );
              setActiveTestimonial(
                Math.min(Math.max(nextActive, 0), testimonials.length - 1),
              );
            }}
          >
            {testimonials.map((testimonial, index) => (
              <article
                className="relative min-h-48 w-[calc(100vw-2.5rem)] max-w-[22rem] shrink-0 snap-start rounded-[0.7rem] border border-[#003f72]/48 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-5 shadow-[0_22px_80px_rgba(0,0,0,0.28)] sm:w-[24rem] sm:max-w-none sm:p-6"
                data-testimonial-card
                key={testimonial.name}
              >
                <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#003f72] to-transparent" />
                <p className="text-sm leading-6 text-white/72">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex size-11 items-center justify-center rounded-[0.35rem] border border-[#003f72]/48 bg-[#003f72]/20 text-sm font-bold text-white shadow-[0_0_20px_rgba(0,63,114,0.32)]">
                    {testimonial.mark}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 max-w-56 text-xs leading-5 text-white/56">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {index === activeTestimonial && (
                  <span className="absolute inset-x-14 -bottom-px h-0.5 rounded-full bg-[#003f72] shadow-[0_0_16px_rgba(0,63,114,0.9)]" />
                )}
              </article>
            ))}
          </div>

          <div className="mt-1 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-1.5 rounded-full transition ${
                  index === activeTestimonial
                    ? "w-10 bg-[#003f72] shadow-[0_0_14px_rgba(0,63,114,0.9)]"
                    : "w-4 bg-white/16 hover:bg-white/28"
                }`}
                key={testimonial.name}
                onClick={() => {
                  scrollToTestimonial(index);
                }}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolCloud({
  tools,
}: {
  tools: Array<{ label: string; icon: IconType; position: string }>;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
      {tools.map((tool, index) => (
        <div className={`absolute ${tool.position}`} key={tool.label}>
          <ToolNode index={index} tool={tool} />
        </div>
      ))}
    </div>
  );
}

function ToolNode({
  index,
  tool,
}: {
  index: number;
  tool: { label: string; icon: IconType };
}) {
  const Icon = tool.icon;

  return (
    <div
      className="workflow-tool-node pointer-events-auto flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.075] px-3 py-2 text-sm font-semibold text-white/80 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
      style={{ animationDelay: `${index * -0.55}s` }}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#003f72]/48 bg-[#003f72]/18 text-white shadow-[0_0_22px_rgba(0,63,114,0.32)]">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      {tool.label}
    </div>
  );
}
