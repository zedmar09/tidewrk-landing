import {
  BarChart3,
  Bot,
  FileStack,
  MonitorCog,
  RefreshCcwDot,
  UsersRound,
  Workflow,
} from "lucide-react";

const buildOutcomes = [
  {
    icon: UsersRound,
    title: "Customer Platforms",
    description:
      "Digital experiences that make it easier for customers to engage, buy, request, or manage services.",
    visual: "customers",
  },
  {
    icon: MonitorCog,
    title: "Internal Tools",
    description:
      "Operational systems that replace manual workarounds and help teams move with less friction.",
    visual: "tools",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Applications",
    description:
      "Software that connects business activity with dashboards, workflows, and smarter decisions.",
    visual: "data",
  },
  {
    icon: RefreshCcwDot,
    title: "Modernized Systems",
    description:
      "Updates to legacy workflows, outdated tools, and disconnected processes that slow growth.",
    visual: "modernize",
  },
];

export function SoftwareDevelopmentBuildOutcomesSection() {
  return (
    <section className="relative overflow-hidden bg-[#02050a] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-[6vw]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#02050a_0%,#040913_46%,#02050a_100%)]"
      />
      <div className="relative mx-auto max-w-[1700px]">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <h2 className="max-w-4xl text-balance text-[2.7rem] font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-[4.75rem]">
            What we help you{" "}
            <span className="tidewrk-glow-text">build next</span>
          </h2>
          <p className="max-w-3xl text-pretty text-lg leading-8 text-white/62 sm:text-xl sm:leading-9 lg:justify-self-end lg:self-center">
            We focus on software that changes how work moves: clearer customer
            journeys, faster teams, connected data, and systems ready for what
            comes next.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-[1320px] lg:mt-14">
          <div className="relative z-10 grid gap-4 lg:grid-cols-2 lg:gap-x-28 lg:gap-y-6">
            {buildOutcomes.map((outcome, index) => (
              <OutcomeFeatureCard
                index={index}
                key={outcome.title}
                outcome={outcome}
              />
            ))}
          </div>

          <div
            aria-hidden="true"
            className="software-outcome-hub pointer-events-none absolute left-1/2 top-1/2 z-30 hidden size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/24 bg-[#07111f] shadow-[0_0_18px_rgba(255,255,255,0.46),0_0_48px_rgba(0,63,114,1),0_0_86px_rgba(0,63,114,0.72)] lg:flex"
          >
            <span className="relative flex size-20 items-center justify-center rounded-full border border-[#003f72]/62 bg-[#003f72]/34 text-white shadow-[inset_0_0_34px_rgba(0,63,114,0.5),0_0_32px_rgba(0,63,114,0.62)]">
              <FileStack className="size-10" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomeFeatureCard({
  outcome,
  index,
}: {
  outcome: (typeof buildOutcomes)[number];
  index: number;
}) {
  const Icon = outcome.icon;
  const isBottom = index > 1;
  const cornerClass =
    index === 0
      ? "lg:rounded-br-[6rem]"
      : index === 1
        ? "lg:rounded-bl-[6rem]"
        : index === 2
          ? "lg:rounded-tr-[6rem]"
          : "lg:rounded-tl-[6rem]";

  return (
    <article
      className={`software-outcome-feature-card group relative min-h-[23rem] overflow-hidden rounded-[1.35rem] border border-white/9 bg-[linear-gradient(180deg,rgba(255,255,255,0.072),rgba(255,255,255,0.032))] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#003f72]/70 hover:bg-white/[0.065] sm:p-6 lg:min-h-[25rem] ${cornerClass} ${
        isBottom ? "lg:pt-10" : "lg:pb-10"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#003f72] to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,rgba(0,63,114,0.22),transparent_38%)]"
      />

      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div className="flex size-12 items-center justify-center rounded-full border border-[#003f72]/45 bg-[#003f72]/16 text-white shadow-[0_0_26px_rgba(0,63,114,0.34)]">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/44">
            0{index + 1}
          </span>
        </div>

        {!isBottom && <OutcomeVisual variant={outcome.visual} />}

        <div className={isBottom ? "" : "mt-7"}>
          <h3 className="max-w-xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
            {outcome.title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
            {outcome.description}
          </p>
        </div>

        {isBottom && <OutcomeVisual variant={outcome.visual} />}
      </div>
    </article>
  );
}

function OutcomeVisual({ variant }: { variant: string }) {
  return (
    <div className="relative mt-7 h-48 overflow-hidden rounded-[1rem] border border-white/8 bg-[#030914]/74 p-4 lg:h-52">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(0,63,114,0.36),transparent_42%),linear-gradient(145deg,rgba(255,255,255,0.035),transparent)]" />
      {variant === "customers" && <CustomerPlatformVisual />}
      {variant === "tools" && <InternalToolsVisual />}
      {variant === "data" && <DataApplicationVisual />}
      {variant === "modernize" && <ModernizedSystemsVisual />}
    </div>
  );
}

function CustomerPlatformVisual() {
  return (
    <div className="relative z-10 h-full">
      <div className="absolute left-2 top-4 w-[62%] rounded-[0.95rem] border border-white/10 bg-white/9 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-md">
        <div className="mb-8 flex items-center gap-3">
          <UsersRound className="size-6 text-white/80" />
          <span className="h-2 w-28 rounded-full bg-white/22" />
        </div>
        <div className="space-y-2">
          <span className="block h-2 rounded-full bg-white/24" />
          <span className="block h-2 w-3/4 rounded-full bg-[#003f72]/80" />
        </div>
      </div>
      <div className="software-outcome-mini-card absolute right-3 top-8 flex h-20 w-32 items-center justify-center rounded-[0.9rem] border border-[#003f72]/48 bg-[#003f72]/18 shadow-[0_0_34px_rgba(0,63,114,0.34)]">
        <span className="text-xl font-semibold text-white">24/7</span>
      </div>
      <div className="absolute bottom-4 right-6 grid w-[54%] grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <span
            className="software-outcome-mini-card h-10 rounded-[0.75rem] border border-white/10 bg-white/8"
            key={item}
            style={{ animationDelay: `${item * -0.28}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function InternalToolsVisual() {
  return (
    <div className="relative z-10 h-full">
      <div className="absolute left-1/2 top-1/2 grid w-full max-w-md -translate-x-1/2 -translate-y-1/2 grid-cols-3 gap-3">
        {["Task", "Review", "Done", "Form", "Route", "Sync"].map((item, index) => (
          <div
            className="software-outcome-mini-card rounded-[0.85rem] border border-white/10 bg-white/8 p-3 text-xs font-semibold text-white/58"
            key={item}
            style={{ animationDelay: `${index * -0.24}s` }}
          >
            <Workflow className="mb-3 size-4 text-white/70" />
            {item}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 h-2 w-2/3 -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
        <span className="software-outcome-progress block h-full w-2/3 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.5),0_0_28px_rgba(0,63,114,0.8)]" />
      </div>
    </div>
  );
}

function DataApplicationVisual() {
  return (
    <div className="relative z-10 h-full">
      <div className="absolute inset-x-2 bottom-4 flex h-32 items-end gap-3 rounded-[0.9rem] border border-white/8 bg-black/18 px-4 pb-4">
        {[44, 70, 52, 86, 62, 96, 74].map((height, index) => (
          <span
            className="software-outcome-data-bar flex-1 rounded-t-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.34),0_0_28px_rgba(0,63,114,0.8)]"
            key={height}
            style={{ height: `${height}%`, animationDelay: `${index * -0.28}s` }}
          />
        ))}
      </div>
      <div className="absolute right-7 top-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold text-white/64 backdrop-blur-md">
        Live insight
      </div>
    </div>
  );
}

function ModernizedSystemsVisual() {
  return (
    <div className="relative z-10 flex h-full items-center justify-between gap-4">
      <div className="w-[42%] rounded-[0.95rem] border border-white/10 bg-white/8 p-4 opacity-80">
        <RefreshCcwDot className="mb-5 size-6 text-white/64" />
        <div className="space-y-2 opacity-60">
          <span className="block h-2 rounded-full bg-white/22" />
          <span className="block h-2 w-2/3 rounded-full bg-white/14" />
        </div>
      </div>
      <div className="software-outcome-mini-card flex size-14 items-center justify-center rounded-full border border-white/20 bg-[#07111f] shadow-[0_0_18px_rgba(255,255,255,0.3),0_0_34px_rgba(0,63,114,0.8)]">
        <Bot className="size-5 text-white" />
      </div>
      <div className="w-[42%] rounded-[0.95rem] border border-[#003f72]/48 bg-[#003f72]/16 p-4">
        <MonitorCog className="mb-5 size-6 text-white" />
        <div className="space-y-2">
          <span className="block h-2 rounded-full bg-white/34" />
          <span className="block h-2 w-3/4 rounded-full bg-[#003f72]/86" />
        </div>
      </div>
    </div>
  );
}
