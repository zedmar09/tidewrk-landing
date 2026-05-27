import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  FlaskConical,
  Laptop,
  Layers3,
  LineChart,
  MonitorCog,
  Network,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { FaAws, FaMicrosoft } from "react-icons/fa6";
import { SiCloudflare, SiDigitalocean, SiGooglecloud } from "react-icons/si";

const solutions = [
  {
    title: "Full-Stack Development Team",
    label: "End-to-end build",
    description:
      "A modern implementation team that carries product work from strategy to release without splitting ownership.",
    advantage:
      "AI-supported research, code review, and testing practices help the team move with sharper technical judgment.",
    href: "/full-stack-development-team",
    icon: Layers3,
    signal: "Product delivery",
    visual: "full-stack",
  },
  {
    title: "Business Intelligence",
    label: "Clearer decisions",
    description:
      "Give leaders a clearer command view of performance, risk, and opportunity without chasing stale reports.",
    advantage:
      "AI-assisted discovery can surface early movement in the numbers before it becomes obvious.",
    href: "/business-intelligence",
    icon: BarChart3,
    signal: "Decision clarity",
    visual: "intelligence",
  },
  {
    title: "Data Science",
    label: "Smarter patterns",
    description:
      "Turn complex business signals into patterns your team can use for planning, forecasting, and growth.",
    advantage:
      "Modern modeling is strongest when it points to practical decisions, not abstract dashboards.",
    href: "#contact",
    icon: FlaskConical,
    signal: "Pattern discovery",
    visual: "science",
  },
  {
    title: "Data Engineering",
    label: "Reliable data flow",
    description:
      "Build the data plumbing behind reliable reporting, automation, analytics, and intelligent products.",
    advantage:
      "Well-designed pipelines make AI-supported workflows possible because the source information is dependable.",
    href: "#contact",
    icon: Database,
    signal: "Data foundation",
    visual: "engineering",
  },
  {
    title: "Web / Desktop Application Development",
    label: "Operational tools",
    description:
      "Create business applications that feel current, reduce manual work, and fit the way teams actually operate.",
    advantage:
      "Selective AI features can handle routine steps while people stay focused on service, judgment, and outcomes.",
    href: "#contact",
    icon: MonitorCog,
    signal: "Workflow tools",
    visual: "desktop",
  },
  {
    title: "Mobile Application Development",
    label: "Work anywhere",
    description:
      "Design mobile experiences that keep customers, teams, and field operations connected to the work that matters.",
    advantage:
      "Modern integrations keep mobile experiences timely, useful, and connected to the systems behind them.",
    href: "#contact",
    icon: Smartphone,
    signal: "Connected work",
    visual: "mobile",
  },
  {
    title: "Machine Learning",
    label: "Adaptive systems",
    description:
      "Apply intelligent automation where prediction, personalization, or consistency can improve the business rhythm.",
    advantage:
      "We keep machine learning grounded in measurable value, responsible use, and workflows people can trust.",
    href: "#contact",
    icon: BrainCircuit,
    signal: "Adaptive logic",
    visual: "learning",
  },
  {
    title: "Cloud Services",
    label: "Scalable infrastructure",
    description:
      "Plan, migrate, and manage cloud environments across AWS, Azure, Google Cloud, Cloudflare, DigitalOcean, and modern platforms so systems stay flexible, secure, and ready to grow.",
    advantage:
      "Cloud strategy works best when infrastructure, data, automation, and delivery teams move from the same operating plan.",
    href: "#contact",
    icon: CloudCog,
    signal: "Cloud foundation",
    visual: "cloud",
  },
  {
    title: "QA Testing and Engineering",
    label: "Launch confidence",
    description:
      "Protect modern releases with thoughtful test strategy, automation, and quality checks built into delivery.",
    advantage:
      "AI-supported coverage helps teams find weak spots earlier without making quality feel heavy.",
    href: "#contact",
    icon: CheckCircle2,
    signal: "Quality guardrails",
    visual: "testing",
  },
  {
    title: "Virtual Assistance / Business Administration",
    label: "Operational support",
    description:
      "Support coordination, documentation, scheduling, follow-through, and the business details that keep work moving.",
    advantage:
      "Modern admin support can use smarter tools to organize information and give specialists more room to focus.",
    href: "#contact",
    icon: Workflow,
    signal: "Admin rhythm",
    visual: "administration",
  },
];

export function Solutions() {
  return (
    <section
      className="relative z-0 scroll-mt-20 overflow-hidden bg-[#02050a] px-5 py-16 text-white sm:px-8 md:py-24 lg:px-[6vw]"
      id="solutions"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,63,114,0.34),transparent_34%),radial-gradient(ellipse_at_12%_32%,rgba(0,63,114,0.2),transparent_26%),radial-gradient(ellipse_at_88%_74%,rgba(0,63,114,0.18),transparent_28%),linear-gradient(180deg,#02050a_0%,#040b13_46%,#02050a_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#02050a] via-[#02050a]/86 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#02050a] via-[#02050a]/86 to-transparent"
      />

      <div className="relative mx-auto max-w-[1800px]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm font-medium text-white/78 shadow-[0_14px_50px_rgba(0,0,0,0.18)] backdrop-blur-md sm:px-4">
            <span className="tidewrk-glow-badge rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
              Solutions
            </span>
            Capability for what comes next
          </div>
          <h2 className="mt-6 text-balance text-[2.7rem] font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-[4.8rem]">
            Modern implementation for{" "}
            <span className="tidewrk-glow-text">real momentum</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-lg leading-8 text-white/62 sm:text-xl sm:leading-9">
            From software and data to automation and support, Tidewrk helps
            businesses build the operating layer behind their next move, with
            AI used where it sharpens execution.
          </p>
        </div>

        <div className="mt-14 space-y-6 md:mt-20 md:space-y-8">
          {solutions.map((solution, index) => (
            <SolutionRow
              index={index}
              key={solution.title}
              solution={solution}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionRow({
  solution,
  index,
}: {
  solution: (typeof solutions)[number];
  index: number;
}) {
  const SolutionIcon = solution.icon;
  const isReversed = index % 2 === 1;

  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.082),rgba(255,255,255,0.028))] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#003f72]/72 hover:bg-white/[0.07] md:p-5 lg:p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#003f72] to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
      />
      <div
        className={`grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${
          isReversed ? "lg:grid-flow-dense" : ""
        }`}
      >
        <div className={isReversed ? "lg:col-start-2" : ""}>
            <SolutionVisual
              index={index}
              signal={solution.signal}
              title={solution.title}
              variant={solution.visual}
            />
        </div>

        <div
          className={`px-1 py-2 sm:px-3 lg:px-8 ${
            isReversed ? "lg:col-start-1 lg:row-start-1" : ""
          }`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-full border border-[#003f72]/45 bg-[#003f72]/18 text-white shadow-[0_0_26px_rgba(0,63,114,0.34)]">
              <SolutionIcon className="size-5" aria-hidden="true" />
            </span>
            <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/68">
              {solution.label}
            </span>
          </div>

          <h3 className="mt-6 max-w-3xl text-pretty text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl lg:text-[2.85rem]">
            {solution.title}
          </h3>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/64">
            {solution.description}
          </p>

          <div className="mt-6 flex max-w-3xl items-start gap-3 border-l border-[#003f72]/55 pl-4 text-base leading-7 text-white/58">
            <Sparkles className="mt-1 size-5 shrink-0 text-white" aria-hidden="true" />
            <p>{solution.advantage}</p>
          </div>

          <Link
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-5 py-3 text-sm font-semibold text-white/86 transition hover:border-[#003f72]/70 hover:bg-[#003f72]/18 hover:text-white hover:shadow-[0_0_24px_rgba(0,63,114,0.48)]"
            href={solution.href}
          >
            Explore solution
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function SolutionVisual({
  signal,
  variant,
  title,
  index,
}: {
  signal: string;
  variant: string;
  title: string;
  index: number;
}) {
  return (
    <div className="solution-visual relative min-h-[22rem] overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#030914] p-5 text-white sm:min-h-[25rem]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(0,63,114,0.48),transparent_30%),radial-gradient(circle_at_18%_18%,rgba(0,63,114,0.44),transparent_28%),radial-gradient(circle_at_86%_84%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(145deg,#02050a_0%,#07182b_52%,#02050a_100%)]" />
      <div
        aria-hidden="true"
        className="solution-scanline pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-transparent via-[#003f72]/14 to-transparent"
      />
      <div className="relative z-10 flex h-full min-h-[19.5rem] flex-col justify-between sm:min-h-[22.5rem]">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-[#003f72]/45 bg-white/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white/70 backdrop-blur-md">
            0{index + 1}
          </span>
          <span className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs text-white/58 backdrop-blur-md">
            {signal}
          </span>
        </div>

        <div className="relative mx-auto flex w-full max-w-xl flex-1 items-center justify-center">
          {variant === "full-stack" && <FullStackGraphic />}
          {variant === "intelligence" && <IntelligenceGraphic />}
          {variant === "science" && <ScienceGraphic />}
          {variant === "engineering" && <EngineeringGraphic />}
          {variant === "desktop" && <DesktopGraphic />}
          {variant === "mobile" && <MobileGraphic />}
          {variant === "learning" && <LearningGraphic />}
          {variant === "cloud" && <CloudGraphic />}
          {variant === "testing" && <TestingGraphic />}
          {variant === "administration" && <AdministrationGraphic />}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
          <p className="max-w-[16rem] text-sm font-medium text-white/74">
            {title}
          </p>
          <span className="solution-pulse-dot size-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.8)]" />
        </div>
      </div>
    </div>
  );
}

function FullStackGraphic() {
  return (
    <div className="relative h-52 w-full max-w-md">
      <div className="solution-stack-card solution-stack-card-a absolute left-2 top-8 h-28 w-36 rounded-[1rem] border border-[#003f72]/40 bg-white/10 p-4 backdrop-blur-md">
        <Code2 className="mb-8 size-6" />
        <div className="h-2 w-20 rounded-full bg-white/30" />
      </div>
      <div className="solution-stack-card solution-stack-card-b absolute left-1/2 top-2 h-36 w-44 -translate-x-1/2 rounded-[1rem] border border-[#003f72]/55 bg-[#003f72]/28 p-4 shadow-[0_0_45px_rgba(0,63,114,0.4)] backdrop-blur-md">
        <Workflow className="mb-10 size-7" />
        <div className="space-y-2">
          <div className="h-2 w-24 rounded-full bg-white/42" />
          <div className="h-2 w-16 rounded-full bg-white/22" />
        </div>
      </div>
      <div className="solution-stack-card solution-stack-card-c absolute bottom-7 right-2 h-28 w-36 rounded-[1rem] border border-white/12 bg-white/8 p-4 backdrop-blur-md">
        <Network className="mb-8 size-6" />
        <div className="h-2 w-20 rounded-full bg-white/28" />
      </div>
    </div>
  );
}

function IntelligenceGraphic() {
  return (
    <div className="relative h-52 w-full max-w-md rounded-[1.2rem] border border-[#003f72]/36 bg-[#02050a]/42 p-5 backdrop-blur-md">
      <div className="mb-8 flex items-center justify-between">
        <LineChart className="size-7" />
        <BarChart3 className="size-6 text-white/68" />
      </div>
      <div className="flex h-28 items-end gap-4">
        {[44, 72, 52, 88, 64, 96].map((height, index) => (
          <span
            className="solution-data-bar flex-1 rounded-t-full bg-[#003f72]/75 shadow-[0_0_22px_rgba(0,63,114,0.34)]"
            key={height}
            style={{ height: `${height}%`, animationDelay: `${index * -0.35}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function ScienceGraphic() {
  return (
    <div className="relative flex h-56 w-full max-w-md items-center justify-center">
      <div className="solution-orbit-ring absolute size-52 rounded-full border border-dashed border-[#003f72]/45" />
      <div className="solution-orbit-ring solution-orbit-ring-alt absolute size-36 rounded-full border border-dashed border-white/16" />
      <div className="rounded-full border border-[#003f72]/60 bg-[#003f72]/28 p-7 shadow-[0_0_54px_rgba(0,63,114,0.48)] backdrop-blur-md">
        <FlaskConical className="size-12" />
      </div>
      {["top-3 left-16", "right-12 top-10", "bottom-7 left-11", "bottom-12 right-16"].map((position) => (
        <span
          className={`solution-pulse-dot absolute ${position} size-3 rounded-full bg-white`}
          key={position}
        />
      ))}
    </div>
  );
}

function EngineeringGraphic() {
  const path = "M8 72 C86 12 124 132 196 72 C264 16 306 126 392 56";

  return (
    <svg
      aria-hidden="true"
      className="h-56 w-full max-w-md overflow-visible"
      fill="none"
      viewBox="0 0 400 150"
    >
      <path d={path} stroke="rgba(255,255,255,0.12)" strokeWidth="12" />
      <path className="solution-flow-path" d={path} stroke="rgba(0,63,114,0.92)" strokeWidth="4" />
      <circle r="8" fill="#ffffff">
        <animateMotion dur="5.4s" path={path} repeatCount="indefinite" />
      </circle>
      <circle cx="28" cy="70" r="20" fill="rgba(255,255,255,0.08)" stroke="rgba(0,63,114,0.55)" />
      <circle cx="372" cy="58" r="20" fill="rgba(255,255,255,0.08)" stroke="rgba(0,63,114,0.55)" />
    </svg>
  );
}

function DesktopGraphic() {
  return (
    <div className="relative w-full max-w-md">
      <div className="mx-auto h-44 w-[82%] rounded-[1.1rem] border border-[#003f72]/45 bg-[#02050a]/72 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.26)]">
        <div className="mb-5 flex gap-2">
          <span className="size-2 rounded-full bg-white/44" />
          <span className="size-2 rounded-full bg-[#003f72]" />
          <span className="size-2 rounded-full bg-white/22" />
        </div>
        <div className="grid grid-cols-[0.7fr_1fr] gap-4">
          <div className="space-y-3">
            <div className="h-4 rounded-full bg-[#003f72]/60" />
            <div className="h-4 rounded-full bg-white/12" />
            <div className="h-4 rounded-full bg-white/12" />
          </div>
          <div className="solution-panel-glow rounded-[0.8rem] border border-[#003f72]/34 bg-white/8" />
        </div>
      </div>
      <Laptop className="absolute bottom-1 left-1/2 size-16 -translate-x-1/2 text-white/58" />
    </div>
  );
}

function MobileGraphic() {
  return (
    <div className="relative flex h-56 w-full max-w-md items-center justify-center">
      <div className="solution-phone absolute left-[18%] h-44 w-24 rotate-[-8deg] rounded-[1.4rem] border border-white/14 bg-white/8 p-3 backdrop-blur-md">
        <div className="mx-auto mb-4 h-1.5 w-8 rounded-full bg-white/24" />
        <div className="solution-panel-glow h-24 rounded-[1rem] border border-[#003f72]/40 bg-[#003f72]/18" />
      </div>
      <div className="solution-phone solution-phone-delayed absolute right-[18%] h-52 w-28 rotate-[8deg] rounded-[1.5rem] border border-[#003f72]/46 bg-[#02050a]/68 p-3 shadow-[0_0_54px_rgba(0,63,114,0.34)] backdrop-blur-md">
        <div className="mx-auto mb-4 h-1.5 w-8 rounded-full bg-white/24" />
        <div className="space-y-3">
          <div className="h-14 rounded-[0.9rem] bg-[#003f72]/38" />
          <div className="h-3 rounded-full bg-white/18" />
          <div className="h-3 w-2/3 rounded-full bg-white/12" />
        </div>
      </div>
    </div>
  );
}

function LearningGraphic() {
  return (
    <div className="relative flex h-56 w-full max-w-md items-center justify-center">
      <div className="solution-neural-grid absolute inset-6" />
      <div className="relative rounded-full border border-[#003f72]/62 bg-[#003f72]/26 p-8 shadow-[0_0_64px_rgba(0,63,114,0.5)] backdrop-blur-md">
        <BrainCircuit className="size-14" />
      </div>
      {Array.from({ length: 7 }).map((_, index) => (
        <span
          className="solution-neural-node absolute size-3 rounded-full bg-white"
          key={index}
          style={{
            left: `${18 + ((index * 23) % 64)}%`,
            top: `${20 + ((index * 31) % 58)}%`,
            animationDelay: `${index * -0.45}s`,
          }}
        />
      ))}
    </div>
  );
}

function CloudGraphic() {
  const cloudProviders = [
    { icon: FaAws, label: "AWS", position: "left-4 top-7" },
    { icon: FaMicrosoft, label: "Azure", position: "right-2 top-5" },
    { icon: SiGooglecloud, label: "Google Cloud", position: "left-1/2 top-1 -translate-x-1/2" },
    { icon: SiCloudflare, label: "Cloudflare", position: "bottom-7 left-5" },
    { icon: SiDigitalocean, label: "DigitalOcean", position: "bottom-8 right-5" },
  ];

  return (
    <div className="relative flex h-56 w-full max-w-md items-center justify-center">
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full overflow-visible"
        fill="none"
        viewBox="0 0 420 220"
      >
        <path
          className="solution-flow-path"
          d="M210 108 C154 78 98 76 58 54"
          stroke="rgba(255,255,255,0.22)"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          className="solution-flow-path"
          d="M210 108 C158 134 104 146 62 174"
          stroke="rgba(0,63,114,0.92)"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          className="solution-flow-path"
          d="M210 108 C270 76 322 72 366 48"
          stroke="rgba(255,255,255,0.22)"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          className="solution-flow-path"
          d="M210 108 C270 136 324 146 366 174"
          stroke="rgba(0,63,114,0.92)"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          className="solution-flow-path"
          d="M210 108 C210 76 210 42 210 22"
          stroke="rgba(255,255,255,0.22)"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>

      <div className="relative z-10 flex size-36 items-center justify-center rounded-[2rem] border border-[#003f72]/58 bg-[#003f72]/24 shadow-[0_0_64px_rgba(0,63,114,0.5)] backdrop-blur-md">
        <CloudCog className="size-16" aria-hidden="true" />
      </div>

      {cloudProviders.map(({ icon: Icon, label, position }, index) => (
        <div
          className={`solution-stack-card absolute ${position} flex items-center gap-2 rounded-full border border-white/10 bg-white/9 px-4 py-2 text-xs font-semibold text-white/68 backdrop-blur-md`}
          key={label}
          style={{ animationDelay: `${index * -0.35}s` }}
        >
          <Icon className="size-4 text-white" aria-hidden="true" />
          {label}
        </div>
      ))}
    </div>
  );
}

function TestingGraphic() {
  return (
    <div className="relative w-full max-w-md rounded-[1.2rem] border border-[#003f72]/36 bg-[#02050a]/48 p-5 backdrop-blur-md">
      <div className="mb-6 flex items-center justify-between">
        <CheckCircle2 className="size-7" />
        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/56">
          Release ready
        </span>
      </div>
      <div className="space-y-4">
        {[84, 68, 94, 76].map((width, index) => (
          <div className="flex items-center gap-3" key={width}>
            <span className="solution-check-dot flex size-7 items-center justify-center rounded-full border border-[#003f72]/48 bg-[#003f72]/18">
              <CheckCircle2 className="size-4" />
            </span>
            <span
              className="solution-quality-line h-3 rounded-full bg-white/14"
              style={{ width: `${width}%`, animationDelay: `${index * -0.5}s` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function AdministrationGraphic() {
  return (
    <div className="relative h-56 w-full max-w-md">
      <div className="solution-stack-card solution-stack-card-a absolute left-4 top-6 w-44 rounded-[1rem] border border-[#003f72]/42 bg-white/10 p-4 backdrop-blur-md">
        <div className="mb-5 flex items-center gap-3">
          <Workflow className="size-6" />
          <span className="h-2 w-20 rounded-full bg-white/28" />
        </div>
        <div className="space-y-3">
          <div className="h-3 rounded-full bg-[#003f72]/58" />
          <div className="h-3 w-4/5 rounded-full bg-white/14" />
          <div className="h-3 w-2/3 rounded-full bg-white/14" />
        </div>
      </div>
      <div className="solution-stack-card solution-stack-card-b absolute left-1/2 top-16 w-48 -translate-x-1/2 rounded-[1rem] border border-[#003f72]/55 bg-[#003f72]/24 p-4 shadow-[0_0_45px_rgba(0,63,114,0.4)] backdrop-blur-md">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-white/76">
            Admin flow
          </span>
          <Sparkles className="size-4" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <span
              className="solution-check-dot h-9 rounded-[0.7rem] border border-white/10 bg-white/9"
              key={item}
              style={{ animationDelay: `${item * -0.3}s` }}
            />
          ))}
        </div>
      </div>
      <div className="solution-stack-card solution-stack-card-c absolute bottom-5 right-4 w-40 rounded-[1rem] border border-white/12 bg-white/8 p-4 backdrop-blur-md">
        <CheckCircle2 className="mb-5 size-6" />
        <div className="h-2 w-24 rounded-full bg-white/28" />
      </div>
    </div>
  );
}
