import Link from "next/link";
import {
  BrainCircuit,
  Code2,
  Compass,
  Globe2,
  Network,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

const services = [
  {
    title: "Software Development",
    description:
      "Modern product implementation for teams that need secure platforms, clean user experiences, and AI-aware delivery choices.",
    href: "/software-development",
    visual: "software",
    className: "lg:col-span-5",
  },
  {
    title: "Staff Augmentation",
    description:
      "Add skilled people who can plug into today’s tools, support faster output, and strengthen the team already in motion.",
    href: "#contact",
    visual: "staff",
    className: "lg:col-span-3",
  },
  {
    title: "Offshoring",
    description:
      "Shape global capacity with modern collaboration habits, clear ownership, and smarter ways to keep work moving across time zones.",
    href: "#contact",
    visual: "offshoring",
    className: "lg:col-span-3",
  },
  {
    title: "Executive Advisory Consulting",
    description:
      "Help leaders make sharper calls on growth, modernization, operational change, and where AI support can create real leverage.",
    href: "#contact",
    visual: "advisory",
    className: "lg:col-span-5",
  },
];

export function Features() {
  return (
    <section
      className="relative z-0 scroll-mt-20 overflow-hidden bg-[#02050a] px-5 py-14 text-white sm:px-8 md:py-20 lg:px-[6vw]"
      id="services"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#02050a] via-[#02050a]/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent"
      />

      <div className="relative mx-auto max-w-[1800px]">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <h2 className="max-w-4xl text-balance text-[2.7rem] font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-[4.75rem]">
            Services built for{" "}
            <span className="tidewrk-glow-text">forward motion</span>
          </h2>
          <p className="max-w-3xl text-pretty text-xl leading-9 text-white/66 sm:text-2xl sm:leading-10 lg:justify-self-end lg:self-center">
            Tidewrk helps leaders add modern capability at the right moment,
            blending people, implementation discipline, and practical AI
            support where it moves the business forward.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-8">
          {services.map((service) => (
            <Link
              aria-label={`Explore ${service.title}`}
              className={`group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.035))] p-2 shadow-[0_24px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#003f72]/70 hover:bg-white/[0.065] ${service.className}`}
              href={service.href}
              key={service.title}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#003f72] to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
              />
              <ServiceVisual variant={service.visual} />

              <div className="px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
                <h3 className="text-pretty text-2xl font-semibold leading-tight tracking-normal text-white">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl sm:leading-9">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceVisual({ variant }: { variant: string }) {
  return (
    <div className="service-visual relative flex h-56 overflow-hidden rounded-[1.1rem] border border-white/8 bg-[#04101d] text-white sm:h-64">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,63,114,0.42),transparent_34%),radial-gradient(circle_at_18%_18%,rgba(0,63,114,0.78),transparent_36%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.06),transparent_24%),linear-gradient(145deg,#03070d_0%,#07182b_50%,#02050a_100%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-7 top-7 h-px bg-gradient-to-r from-transparent via-[#003f72]/70 to-transparent"
      />

      {variant === "software" && <SoftwareVisual />}
      {variant === "staff" && <StaffVisual />}
      {variant === "offshoring" && <OffshoringVisual />}
      {variant === "advisory" && <AdvisoryVisual />}
    </div>
  );
}

function SoftwareVisual() {
  return (
    <div className="relative z-10 flex w-full items-center justify-center px-6">
      <div className="service-build-chip absolute left-7 top-7 flex items-center gap-2 rounded-full border border-[#003f72]/45 bg-white/8 px-3 py-2 text-xs font-medium text-white/84 backdrop-blur-md">
        <Code2 className="size-4" />
        Product build
      </div>
      <div className="service-security-pulse absolute right-7 top-8 rounded-full border border-[#003f72]/45 bg-white/8 p-3 text-white shadow-[0_0_22px_rgba(0,63,114,0.35)] backdrop-blur-md">
        <ShieldCheck className="size-5" />
      </div>
      <div className="relative w-full max-w-lg overflow-hidden rounded-[1.15rem] border border-[#003f72]/35 bg-[#02050a]/64 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#003f72] to-transparent" />
        <div className="service-terminal-scan pointer-events-none absolute inset-x-0 top-1/2 h-10 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#003f72]/20 to-transparent" />
        <div className="mb-4 flex items-center gap-2 text-white">
          <span className="size-2 rounded-full bg-[#003f72] shadow-[0_0_16px_rgba(0,63,114,0.9)]" />
          <span className="size-2 rounded-full bg-white/36" />
          <span className="size-2 rounded-full bg-[#003f72]/70" />
        </div>
        <div className="service-code-flow space-y-3">
          <div className="h-3 w-4/5 rounded-full bg-[#003f72]/50" />
          <div className="h-3 w-2/3 rounded-full bg-white/10" />
          <div className="flex items-center gap-3">
            <div className="h-3 flex-1 rounded-full bg-[#003f72]/80" />
            <div className="rounded-full bg-[#003f72] px-3 py-1 text-xs font-semibold text-white shadow-[0_0_18px_rgba(0,63,114,0.75)]">
              AI assist
            </div>
          </div>
          <div className="h-3 w-3/4 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function StaffVisual() {
  const people = [
    { top: "16%", left: "16%" },
    { top: "34%", left: "34%" },
    { top: "18%", right: "17%" },
    { bottom: "17%", left: "24%" },
    { bottom: "18%", right: "24%" },
  ];

  return (
    <div className="relative z-10 flex w-full items-center justify-center">
      <svg
        aria-hidden="true"
        className="service-match-lines absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)]"
        fill="none"
        viewBox="0 0 260 160"
      >
        <path d="M130 80 L46 34" stroke="rgba(255,255,255,0.22)" />
        <path d="M130 80 L202 32" stroke="rgba(255,255,255,0.22)" />
        <path d="M130 80 L62 130" stroke="rgba(255,255,255,0.22)" />
        <path d="M130 80 L204 128" stroke="rgba(255,255,255,0.22)" />
      </svg>
      <div className="absolute inset-0">
        {people.map((style, index) => (
          <span
            className="service-match-node absolute flex size-12 items-center justify-center rounded-full border border-[#003f72]/45 bg-white/8 text-white shadow-[0_0_34px_rgba(0,63,114,0.2)] backdrop-blur-md"
            key={index}
            style={{ ...style, animationDelay: `${index * -0.55}s` }}
          >
            <UsersRound className="size-5" />
          </span>
        ))}
      </div>
      <div className="service-core-orbit relative rounded-full border border-[#003f72]/70 bg-[#003f72] p-5 text-white shadow-[0_0_0_18px_rgba(0,63,114,0.16),0_28px_70px_rgba(0,0,0,0.28)]">
        <span className="absolute inset-[-18px] rounded-full border border-dashed border-[#003f72]/42" />
        <BrainCircuit className="size-9" />
      </div>
      <div className="service-match-chip absolute bottom-6 rounded-full border border-[#003f72]/45 bg-white/9 px-4 py-2 text-xs font-semibold text-white/84 backdrop-blur-md">
        Skills matched to workflow
      </div>
    </div>
  );
}

function OffshoringVisual() {
  const routePath = "M8 66 C78 12 140 92 214 44 C288 -2 334 68 412 22";

  return (
    <div className="relative z-10 flex w-full items-center justify-center px-7">
      <div className="service-route-start absolute left-8 top-8 flex size-12 items-center justify-center rounded-full border border-[#003f72]/45 bg-white/8 text-white backdrop-blur-md">
        <Globe2 className="size-6" />
      </div>
      <div className="service-route-end absolute right-8 bottom-8 flex size-12 items-center justify-center rounded-full border border-[#003f72]/45 bg-white/8 text-white backdrop-blur-md">
        <Workflow className="size-6" />
      </div>
      <svg
        aria-hidden="true"
        className="absolute inset-x-5 top-1/2 h-24 -translate-y-1/2"
        fill="none"
        viewBox="0 0 420 120"
      >
        <path
          d="M8 82 C80 20 138 104 212 55 C290 4 332 80 412 33"
          stroke="rgba(0,63,114,0.34)"
          strokeWidth="2"
        />
        <path d={routePath} stroke="rgba(0,63,114,0.78)" strokeWidth="4" />
        <circle r="5" fill="#ffffff">
          <animateMotion dur="4.8s" path={routePath} repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#003f72">
          <animateMotion
            begin="1.6s"
            dur="4.8s"
            path={routePath}
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <div className="rounded-[1rem] border border-[#003f72]/35 bg-[#02050a]/64 px-5 py-4 text-center shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur">
        <p className="text-sm font-semibold text-white">Global flow</p>
        <p className="mt-1 text-xs text-white/54">
          Aligned teams, clearer handoffs
        </p>
      </div>
    </div>
  );
}

function AdvisoryVisual() {
  return (
    <div className="relative z-10 flex w-full items-center justify-center px-6">
      <svg
        aria-hidden="true"
        className="absolute inset-x-8 top-1/2 h-28 -translate-y-1/2"
        fill="none"
        viewBox="0 0 420 150"
      >
        <path
          d="M56 36 H152 C176 36 184 76 210 76 C236 76 244 36 268 36 H364"
          stroke="rgba(255,255,255,0.24)"
          strokeLinecap="round"
          strokeWidth="1.4"
        />
        <path
          d="M64 116 H156 C178 116 188 82 210 82 C232 82 242 116 264 116 H356"
          stroke="rgba(255,255,255,0.18)"
          strokeLinecap="round"
          strokeWidth="1.4"
        />
      </svg>

      <div className="absolute left-8 top-8 rounded-[0.95rem] border border-white/10 bg-[#07111f] px-4 py-3 shadow-[0_14px_44px_rgba(0,0,0,0.26),0_0_18px_rgba(0,63,114,0.18)]">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
          Market
        </p>
        <div className="mt-3 flex items-end gap-1.5">
          {[24, 38, 30, 48].map((height) => (
            <span
              className="w-3 rounded-t-full bg-white/64 shadow-[0_0_10px_rgba(255,255,255,0.18)]"
              key={height}
              style={{ height }}
            />
          ))}
        </div>
      </div>

      <div className="absolute right-8 top-7 rounded-[0.95rem] border border-white/10 bg-[#07111f] px-4 py-3 shadow-[0_14px_44px_rgba(0,0,0,0.26),0_0_18px_rgba(0,63,114,0.18)]">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
          Risk
        </p>
        <div className="mt-3 space-y-2">
          <span className="block h-2 w-20 rounded-full bg-white/24" />
          <span className="block h-2 w-14 rounded-full bg-[#003f72]/80" />
        </div>
      </div>

      <div className="relative flex w-full max-w-[19rem] items-center gap-4 rounded-[1.15rem] border border-white/14 bg-[#06111f] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.34),0_0_18px_rgba(255,255,255,0.1),0_0_42px_rgba(0,63,114,0.3)]">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-[1rem] border border-white/12 bg-[#003f72] shadow-[0_0_22px_rgba(0,63,114,0.62)]">
          <Compass className="size-8 text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">
            Executive decision map
          </p>
          <div className="mt-3 space-y-2">
            <span className="block h-2 w-full rounded-full bg-white/28" />
            <span className="block h-2 w-4/5 rounded-full bg-white/18" />
            <span className="block h-2 w-2/3 rounded-full bg-[#003f72]/80 shadow-[0_0_14px_rgba(0,63,114,0.55)]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#07111f] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/58 shadow-[0_14px_40px_rgba(0,0,0,0.24)]">
        <Network className="size-4 text-white/72" />
        Clearer next move
      </div>
    </div>
  );
}
