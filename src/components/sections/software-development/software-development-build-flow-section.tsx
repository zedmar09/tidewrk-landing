import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Database,
  Figma,
  Layers3,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const buildLanes = [
  {
    icon: Layers3,
    label: "Product shape",
    title: "Clear scope",
    body: "Turn the idea into a buildable path.",
  },
  {
    icon: Code2,
    label: "Engineering",
    title: "Clean build",
    body: "Design, code, data, and APIs moving together.",
  },
  {
    icon: BrainCircuit,
    label: "AI assist",
    title: "Sharper review",
    body: "Use modern tools to strengthen quality and speed.",
  },
  {
    icon: Rocket,
    label: "Launch",
    title: "Ready to move",
    body: "Ship software your team can use and improve.",
  },
];

const architectureNodes = [
  { icon: Layers3, label: "Product", x: 17, y: 25 },
  { icon: Figma, label: "UX", x: 50, y: 13 },
  { icon: Database, label: "Data", x: 83, y: 25 },
  { icon: ShieldCheck, label: "Quality", x: 19, y: 78 },
  { icon: Rocket, label: "Launch", x: 81, y: 78 },
];

const architecturePaths = [
  "M95 140 C148 178 212 226 280 292",
  "M280 73 C280 142 280 210 280 292",
  "M465 140 C412 178 348 226 280 292",
  "M106 437 C166 386 226 336 280 292",
  "M454 437 C394 386 334 336 280 292",
];

export function SoftwareDevelopmentBuildFlowSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#02050a] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-[6vw]"
      id="services"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#02050a_0%,#03070d_52%,#02050a_100%)]"
      />
      <div className="relative mx-auto max-w-[1700px]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-md">
            <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.12em]">
              Build Flow
            </span>
            Software shaped for forward motion
          </div>

          <h2 className="mt-7 text-balance text-[clamp(2.5rem,7vw,5.6rem)] font-semibold leading-[0.98] tracking-normal">
            Software that{" "}
            <span className="tidewrk-glow-text">carries the work</span>{" "}
            forward
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-7 text-white/62 sm:text-xl sm:leading-8">
            One build current: product direction, engineering, data, quality,
            and AI-assisted review moving in sync.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="solution-visual relative min-h-[520px] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#030914] p-5 text-white sm:min-h-[560px] sm:p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(0,63,114,0.44),transparent_30%),radial-gradient(circle_at_18%_18%,rgba(0,63,114,0.36),transparent_28%),radial-gradient(circle_at_86%_84%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(145deg,#02050a_0%,#07182b_52%,#02050a_100%)]"
            />
            <div className="relative z-10 flex h-full min-h-[480px] flex-col justify-between sm:min-h-[520px]">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-[#003f72]/45 bg-white/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white/70 backdrop-blur-md">
                  Architecture
                </span>
                <span className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs text-white/58 backdrop-blur-md">
                  Connected build layers
                </span>
              </div>

              <div className="relative min-h-[390px] flex-1 sm:min-h-[430px]">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full"
                fill="none"
                viewBox="0 0 560 560"
              >
                <g className="software-architecture-glow-lines">
                  {architecturePaths.map((path) => (
                    <path d={path} key={path} />
                  ))}
                </g>
                {architecturePaths.map((path) => (
                  <path
                    className="software-architecture-line"
                    d={path}
                    key={path}
                    strokeLinecap="round"
                    strokeWidth="2.8"
                  />
                ))}
              </svg>

              <div className="absolute left-1/2 top-[52.15%] flex size-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.2rem] border border-[#003f72]/62 bg-[#07111f] shadow-[0_0_70px_rgba(0,63,114,0.42)]">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full border border-white/12 bg-black/32">
                    <BrainCircuit className="size-7 text-white" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/36">
                    Build Core
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    One current
                  </h3>
                </div>
              </div>

              <div className="absolute inset-0">
                {architectureNodes.map(({ icon: Icon, label, x, y }, index) => (
                  <div
                    className="software-architecture-node absolute flex min-w-28 -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md"
                    key={label}
                    style={{
                      animationDelay: `${index * -0.5}s`,
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  >
                    <Icon className="size-5 text-white/74" aria-hidden="true" />
                    <span className="text-sm font-semibold text-white/70">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {["Shape", "Build", "Improve"].map((item) => (
                  <div
                    className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-center text-xs font-semibold text-white/52 backdrop-blur-md"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {buildLanes.map(({ icon: Icon, label, title, body }, index) => (
              <article
                className="software-flow-card group relative overflow-hidden rounded-[1.35rem] border border-white/9 bg-white/[0.04] p-6 backdrop-blur-md transition duration-300 hover:border-[#003f72]/70 hover:bg-white/[0.06] sm:p-7"
                key={title}
                style={{ animationDelay: `${index * -0.42}s` }}
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 size-32 rounded-full bg-[#003f72]/18 blur-2xl transition duration-300 group-hover:bg-[#003f72]/30"
                />
                <div className="relative">
                  <div className="mb-9 flex items-center justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-black/24 text-white shadow-[0_0_28px_rgba(0,63,114,0.18)]">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/36">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/36">
                    {label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/54">
                    {body}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm font-semibold text-white/50">
                    <span>Move forward</span>
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
