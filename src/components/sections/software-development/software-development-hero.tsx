"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Code2,
  GitBranch,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const pipelineSteps = ["Plan", "Build", "Test", "Deploy"];
const techStack = [
  { icon: SiReact, label: "React" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiNodedotjs, label: "Node" },
  { icon: SiPython, label: "Python" },
  { icon: SiPostgresql, label: "Postgres" },
  { icon: SiTailwindcss, label: "Tailwind" },
];

const codeRows = [
  { width: "w-4/5", tone: "bg-[#003f72]/70" },
  { width: "w-3/5", tone: "bg-white/14" },
  { width: "w-5/6", tone: "bg-white/10" },
  { width: "w-2/3", tone: "bg-[#003f72]/55" },
];

export function SoftwareDevelopmentHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#02050a] px-5 pb-10 pt-[5rem] text-white sm:px-8 sm:pt-24 lg:px-[6vw]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_22%_18%,rgba(0,63,114,0.68),transparent_34%),radial-gradient(ellipse_at_78%_54%,rgba(0,63,114,0.34),transparent_32%),linear-gradient(180deg,#02050a_0%,#07111f_52%,#02050a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#02050a] via-[#02050a]/86 to-transparent"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[1900px] gap-12 py-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="max-w-4xl lg:max-w-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs font-medium text-white/76 shadow-[0_16px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-4 sm:text-sm">
            <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em]">
              Software Development
            </span>
            Engineering the flow behind digital products
            <ArrowRight className="size-4 text-white/58" aria-hidden="true" />
          </div>

          <h1 className="mt-7 max-w-5xl text-balance text-[clamp(2.65rem,11vw,4rem)] font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-[5rem]">
            The engineering current behind{" "}
            <span className="tidewrk-glow-text">your next product move</span>
          </h1>

          <p className="mt-6 max-w-4xl text-pretty text-xl leading-9 text-white/70 sm:text-2xl sm:leading-10">
            Tidewrk builds secure software around your next move, using smarter
            delivery workflows to reduce friction, strengthen quality, and ship
            with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-semibold text-[#003f72] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:h-14 sm:px-8"
              href="#contact"
            >
              Talk to Tidewrk
              <Sparkles className="size-5" aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/6 px-6 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/12 sm:h-14 sm:px-8"
              href="#services"
            >
              Explore Solutions
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-3xl lg:mx-0 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-10 rounded-full bg-[#003f72]/28 blur-3xl"
          />

          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.085),rgba(255,255,255,0.026))] p-3 shadow-[0_34px_120px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_0%,rgba(0,63,114,0.54),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />

            <div className="relative rounded-[1.35rem] border border-white/8 bg-[#050b14]/82 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-white/72" />
                  <span className="size-2.5 rounded-full bg-[#003f72] shadow-[0_0_18px_rgba(0,63,114,0.9)]" />
                  <span className="size-2.5 rounded-full bg-white/28" />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#003f72]/44 bg-[#003f72]/16 px-3 py-1.5 text-xs font-semibold text-white/74">
                  <Rocket className="size-4" aria-hidden="true" />
                  Release track
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
                <div className="software-console-panel rounded-[1.1rem] border border-white/8 bg-black/24 p-4">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <Code2 className="size-4" aria-hidden="true" />
                      Product console
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/48">
                      <GitBranch className="size-4" aria-hidden="true" />
                      main
                    </div>
                  </div>

                  <div className="space-y-3">
                    {codeRows.map((row, index) => (
                      <div className="flex items-center gap-3" key={index}>
                        <span className="text-xs text-white/28">
                          0{index + 1}
                        </span>
                        <span
                          className={`software-code-row h-2 rounded-full ${row.tone} ${row.width}`}
                          style={{ animationDelay: `${index * -0.42}s` }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <StatusCard
                      icon={ShieldCheck}
                      label="Security"
                      value="Checked"
                    />
                    <StatusCard
                      icon={CheckCircle2}
                      label="QA"
                      value="Ready"
                    />
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.1rem] border border-white/8 bg-white/[0.045] p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-full border border-[#003f72]/42 bg-[#003f72]/18">
                        <Braces className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          API connected
                        </p>
                        <p className="text-xs text-white/48">
                          Systems ready to move data
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.1rem] border border-white/8 bg-white/[0.045] p-4">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Data route
                        </p>
                        <p className="mt-1 text-xs text-white/44">
                          Flow checked before release
                        </p>
                      </div>
                      <span className="size-2 rounded-full bg-[#003f72] shadow-[0_0_18px_rgba(0,63,114,0.95)]" />
                    </div>
                    <div className="relative flex items-center justify-between py-3">
                      <span className="software-data-node" />
                      <span className="software-data-node" />
                      <span className="software-data-node" />
                      <span className="absolute left-4 right-4 top-1/2 h-px -translate-y-1/2 bg-white/12" />
                      <span className="software-data-pulse absolute left-4 top-1/2 h-px -translate-y-1/2 bg-[#003f72] shadow-[0_0_18px_rgba(0,63,114,0.9)]" />
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <span className="software-progress block h-full w-2/3 rounded-full bg-[#003f72] shadow-[0_0_18px_rgba(0,63,114,0.85)]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-4">
                {pipelineSteps.map((step, index) => (
                  <div
                    className="software-pipeline-step rounded-[0.9rem] border border-white/8 bg-white/[0.045] px-3 py-3 text-center"
                    key={step}
                    style={{ animationDelay: `${index * -0.5}s` }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/42">
                      0{index + 1}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-5 grid grid-cols-4 gap-2 sm:grid-cols-7">
            {techStack.map(({ icon: Icon, label }, index) => (
              <div
                className="software-tech-node flex min-h-20 flex-col items-center justify-center rounded-[1.1rem] border border-white/9 bg-white/[0.045] p-3 text-center backdrop-blur-md"
                key={label}
                style={{ animationDelay: `${index * -0.38}s` }}
              >
                <Icon className="size-6 text-white/78" aria-hidden="true" />
                <span className="mt-2 text-[0.64rem] font-semibold text-white/44">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusCard({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[0.9rem] border border-white/8 bg-white/[0.045] p-3">
      <Icon className="mb-3 size-5 text-white/70" aria-hidden="true" />
      <p className="text-xs text-white/42">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
