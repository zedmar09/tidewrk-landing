"use client";

import {
  ArrowRight,
  CheckCircle2,
  MousePointer2,
  RefreshCw,
  Sparkles,
  TrendingUp,
  UsersRound,
  Workflow,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

const needs = [
  {
    title: "Operations",
    label: "When workflows get too specific",
    description:
      "Replace manual workarounds with software that follows the way your team actually operates.",
    icon: Workflow,
    previewTitle: "Workflow command center",
    previewCopy:
      "Automate approvals, handoffs, visibility, and reporting without forcing your team into a generic process.",
    accent: "from-[#003466] to-[#0a5a9b]",
    bullets: ["Role-based workflows", "Live operational visibility", "Process automation"],
  },
  {
    title: "Customers",
    label: "When the experience needs to feel yours",
    description:
      "Create intuitive portals, apps, and digital journeys built around your customers and brand.",
    icon: UsersRound,
    previewTitle: "Customer experience layer",
    previewCopy:
      "Design self-service, account, booking, or support experiences that feel clear from the first click.",
    accent: "from-[#003466] to-[#2f7fb8]",
    bullets: ["Self-service portals", "Clean UX flows", "Brand-led interfaces"],
  },
  {
    title: "Growth",
    label: "When scale creates new complexity",
    description:
      "Build systems that support more users, more data, and more decisions as your business grows.",
    icon: TrendingUp,
    previewTitle: "Scalable growth system",
    previewCopy:
      "Connect business logic, analytics, integrations, and automation so growth does not create more friction.",
    accent: "from-[#003466] to-[#17466c]",
    bullets: ["System integrations", "Scalable architecture", "Decision dashboards"],
  },
  {
    title: "Longevity",
    label: "When the software has to keep evolving",
    description:
      "Plan for long-term use with maintainable architecture, testing, and delivery built in from day one.",
    icon: RefreshCw,
    previewTitle: "Long-term product foundation",
    previewCopy:
      "Move with confidence using software that is documented, testable, secure, and ready for future releases.",
    accent: "from-[#003466] to-[#0f2740]",
    bullets: ["Maintainable codebase", "Quality checkpoints", "Release-ready delivery"],
  },
];

const deliverySteps = ["Strategy", "Design", "Engineering", "Testing", "Delivery"];

export function SoftwareDevelopmentCustomFitSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeNeed = needs[activeIndex];
  const ActiveIcon = activeNeed.icon;

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-[#f7f8fa]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-[#f7f8fa]" />
      <div className="absolute inset-x-0 bottom-28 top-28 bg-[#f7f8fa]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_700px_at_18%_10%,rgba(0,52,102,0.10),transparent_58%)]" />

      <div className="relative px-[4vw]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
              Custom Fit Software
            </div>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-[#111217] sm:text-4xl md:text-5xl">
              Build What Your Business Actually Needs
            </h2>
          </motion.div>

          <motion.p
            className="max-w-3xl text-base leading-8 text-[#666666] md:text-lg lg:ml-auto lg:max-w-2xl"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
          >
            Off-the-shelf tools can only take you so far. When your operations,
            customers, or growth goals require something more specific, custom
            software gives you the flexibility to build around the way your
            business works.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.18, duration: 0.75, ease: "easeOut" }}
          >
            {needs.map((need, index) => {
              const Icon = need.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  aria-pressed={isActive}
                  className={cn(
                    "group relative overflow-hidden rounded-none border p-5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/28 focus-visible:ring-offset-2",
                    isActive
                      ? "border-[#003466] bg-[#003466] text-white shadow-[0_20px_60px_rgba(0,52,102,0.20)]"
                      : "border-[#dfe5ec] bg-white/82 text-[#111217] shadow-[0_16px_45px_rgba(0,52,102,0.05)] hover:-translate-y-0.5 hover:border-[#003466]/45",
                  )}
                  key={need.title}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  <span className="relative z-10 flex items-start gap-4">
                    <span
                      className={cn(
                        "flex size-11 shrink-0 items-center justify-center rounded-none border transition-colors duration-300",
                        isActive
                          ? "border-white/25 bg-white/12 text-white"
                          : "border-[#003466]/12 bg-[#003466]/6 text-[#003466] group-hover:bg-[#003466]/10",
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-base font-semibold">
                        {need.title}
                      </span>
                      <span
                        className={cn(
                          "mt-1 block text-sm leading-6",
                          isActive ? "text-white/76" : "text-[#666666]",
                        )}
                      >
                        {need.label}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl border border-[#dfe5ec] bg-white shadow-[0_24px_80px_rgba(0,52,102,0.08)]"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.28, duration: 0.75, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.07)_1px,transparent_1px)] bg-[size:42px_42px] opacity-45 [mask-image:radial-gradient(ellipse_at_center,white,transparent_78%)]" />
            <div
              className={cn(
                "absolute inset-x-0 top-0 h-48 bg-gradient-to-br opacity-[0.18]",
                activeNeed.accent,
              )}
            />

            <div className="relative p-5 sm:p-7 lg:p-8">
              <div className="flex flex-col gap-5 rounded-xl border border-[#e0e6ed] bg-white/86 p-4 shadow-[0_18px_60px_rgba(0,52,102,0.08)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#003466] text-white">
                    <ActiveIcon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#666666]">
                      Interactive Blueprint
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#111217]">
                      {activeNeed.previewTitle}
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#003466]/14 bg-[#003466]/6 px-3 py-2 text-sm text-[#003466]">
                  <MousePointer2 className="size-4" />
                  Choose a need
                </div>
              </div>

              <motion.div
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.85fr]"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                key={activeNeed.title}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="rounded-xl border border-[#e0e6ed] bg-white/88 p-5">
                  <p className="text-sm leading-7 text-[#666666]">
                    {activeNeed.previewCopy}
                  </p>
                  <div className="mt-5 space-y-3">
                    {activeNeed.bullets.map((bullet) => (
                      <div className="flex items-center gap-3" key={bullet}>
                        <CheckCircle2 className="size-5 shrink-0 text-[#003466]" />
                        <span className="text-sm font-medium text-[#111217]">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-[#003466] p-5 text-white">
                  <div className="flex items-center gap-2 text-white/72">
                    <Sparkles className="size-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                      Custom over generic
                    </span>
                  </div>
                  <div className="mt-7 space-y-4">
                    <div className="rounded-lg bg-white/10 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                        Generic tool
                      </p>
                      <p className="mt-2 text-sm text-white/82">
                        Your team adapts to the software.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="size-5 text-white/70" />
                    </div>
                    <div className="rounded-lg bg-white p-4 text-[#003466]">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                        Tidewrk build
                      </p>
                      <p className="mt-2 text-sm font-medium">
                        Software adapts to your business.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="mt-6 grid gap-3 sm:grid-cols-5">
                {deliverySteps.map((step, index) => (
                  <div
                    className="rounded-xl border border-[#e0e6ed] bg-white/76 p-4 text-center"
                    key={step}
                  >
                    <p className="text-xs font-semibold text-[#003466]">
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#111217]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.figure
          className="relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-[#dfe5ec] bg-white/86 px-6 py-10 text-center shadow-[0_22px_70px_rgba(0,52,102,0.08)] backdrop-blur md:px-12 md:py-14"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_560px_at_50%_0%,rgba(0,52,102,0.10),transparent_62%)]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#003466]/30 to-transparent" />
          <div className="relative mx-auto flex size-12 items-center justify-center rounded-full border border-[#003466]/15 bg-[#003466]/6 text-4xl font-serif leading-none text-[#003466]">
            “
          </div>
          <blockquote className="relative mx-auto mt-6 max-w-5xl text-balance text-2xl font-semibold leading-snug text-[#111217] sm:text-3xl lg:text-4xl">
            Our teams bring together{" "}
            <span className="text-[#003466]">strategy</span>,{" "}
            <span className="text-[#003466]">design</span>,{" "}
            <span className="text-[#003466]">engineering</span>,{" "}
            <span className="text-[#003466]">testing</span>, and{" "}
            <span className="text-[#003466]">delivery</span> to create
            solutions that are{" "}
            <span className="bg-gradient-to-r from-[#003466] to-[#0a5a9b] bg-clip-text text-transparent">
              practical, intuitive, and built for long-term use.
            </span>
          </blockquote>
          <figcaption className="relative mt-6 text-sm font-medium uppercase tracking-[0.2em] text-[#666666]">
            Tidewrk Software Development
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
