import Link from "next/link";
import {
  ArrowUpRight,
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
    href: "/staff-augmentation",
    visual: "staff",
    className: "lg:col-span-3",
  },
  {
    title: "Offshoring",
    description:
      "Shape global capacity with modern collaboration habits, clear ownership, and smarter ways to keep work moving across time zones.",
    href: "/offshoring",
    visual: "offshoring",
    className: "lg:col-span-3",
  },
  {
    title: "Executive Advisory Consulting",
    description:
      "Help leaders make sharper calls on growth, modernization, operational change, and where AI support can create real leverage.",
    href: "/executive-advisory-consulting",
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
          <p className="max-w-3xl text-pretty text-lg leading-8 text-white/62 sm:text-xl sm:leading-9 lg:justify-self-end lg:self-center">
            Tidewrk helps leaders add modern capability at the right moment,
            blending people, implementation discipline, and practical AI
            support where it moves the business forward.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-8">
          {services.map((service) => (
            <article
              className={`group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.035))] p-2 shadow-[0_24px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#003f72]/70 hover:bg-white/[0.065] ${service.className}`}
              key={service.title}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#003f72] to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
              />
              <ServiceVisual variant={service.visual} />

              <div className="px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-pretty text-2xl font-semibold leading-tight tracking-normal text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-white/58">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    aria-label={`Explore ${service.title}`}
                    className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/78 transition group-hover:border-[#003f72]/70 group-hover:bg-[#003f72]/18 group-hover:text-white group-hover:shadow-[0_0_22px_rgba(0,63,114,0.55)]"
                    href={service.href}
                  >
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
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
      <div className="absolute inset-x-8 top-8 grid grid-cols-3 gap-3">
        {["Strategy", "Risk", "Growth"].map((label) => (
          <div
            className="service-decision-chip rounded-full border border-[#003f72]/40 bg-white/8 px-3 py-2 text-center text-xs font-medium text-white/84 backdrop-blur-md"
            key={label}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="service-core-orbit relative flex size-28 items-center justify-center rounded-full border border-[#003f72]/70 bg-[#003f72] text-white shadow-[0_0_0_28px_rgba(0,63,114,0.12),0_30px_90px_rgba(0,0,0,0.3)]">
        <span className="absolute inset-[-24px] rounded-full border border-dashed border-[#003f72]/35" />
        <Compass className="size-12" />
      </div>
      <div className="absolute bottom-7 grid w-[86%] grid-cols-2 gap-3">
        <div className="service-insight-card rounded-[0.85rem] border border-[#003f72]/35 bg-white/8 px-4 py-3 backdrop-blur-md">
          <Network className="mb-2 size-5 text-white" />
          <div className="service-insight-bar h-2 w-4/5 rounded-full bg-[#003f72]/50" />
        </div>
        <div className="service-insight-card service-insight-card-delayed rounded-[0.85rem] border border-[#003f72]/35 bg-white/8 px-4 py-3 backdrop-blur-md">
          <BrainCircuit className="mb-2 size-5 text-white" />
          <div className="service-insight-bar h-2 w-2/3 rounded-full bg-[#003f72]/50" />
        </div>
      </div>
    </div>
  );
}
