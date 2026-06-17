import Link from "next/link";
import type { ComponentType } from "react";
import {
  BarChart3,
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  CloudCog,
  Cpu,
  Database,
  FileText,
  FlaskConical,
  Layers3,
  Laptop,
  Mail,
  MessageSquareText,
  MonitorCog,
  ClipboardList,
  Smartphone,
  UserRound,
  Workflow,
} from "lucide-react";
import { FaAws, FaMicrosoft } from "react-icons/fa6";
import {
  SiAndroid,
  SiAndroidstudio,
  SiApple,
  SiCloudflare,
  SiDotnet,
  SiElectron,
  SiExpress,
  SiFlutter,
  SiGooglecloud,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiCypress,
  SiJest,
  SiPostman,
  SiSelenium,
  SiSwift,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiUnity,
  SiVitest,
  SiDigitalocean,
  SiVercel,
  SiXcode,
} from "react-icons/si";

const solutionRoutes: Record<string, string> = {
  "Full-Stack Development Team": "/full-stack-development-team",
  "Business Intelligence": "/business-intelligence",
  "Data Science": "/data-science",
  "Data Engineering": "/data-engineering",
  "Web / Desktop Application Development": "/web-desktop-application-development",
  "Mobile Application Development": "/mobile-application-development",
  "Machine Learning": "/machine-learning",
  "Cloud Services": "/cloud-services",
  "QA Testing and Engineering": "/qa-testing-and-engineering",
  "Virtual Assistance / Business Administration": "/virtual-assistance-business-administration",
};

const solutions = [
  {
    title: "Full-Stack Development Team",
    label: "End-to-end build",
    description:
      "A modern implementation team that carries product work from strategy to release without splitting ownership.",
    href: solutionRoutes["Full-Stack Development Team"],
    icon: Layers3,
    signal: "Product delivery",
    visual: "full-stack",
  },
  {
    title: "Business Intelligence",
    label: "Clearer decisions",
    description:
      "Give leaders a clearer command view of performance, risk, and opportunity without chasing stale reports.",
    href: solutionRoutes["Business Intelligence"],
    icon: BarChart3,
    signal: "Decision clarity",
    visual: "intelligence",
  },
  {
    title: "Data Science",
    label: "Smarter patterns",
    description:
      "Turn complex business signals into patterns your team can use for planning, forecasting, and growth.",
    href: solutionRoutes["Data Science"],
    icon: FlaskConical,
    signal: "Pattern discovery",
    visual: "science",
  },
  {
    title: "Data Engineering",
    label: "Reliable data flow",
    description:
      "Build the data plumbing behind reliable reporting, automation, analytics, and intelligent products.",
    href: solutionRoutes["Data Engineering"],
    icon: Database,
    signal: "Data foundation",
    visual: "engineering",
  },
  {
    title: "Web / Desktop Application Development",
    label: "Operational tools",
    description:
      "Create business applications that feel current, reduce manual work, and fit the way teams actually operate.",
    href: solutionRoutes["Web / Desktop Application Development"],
    icon: MonitorCog,
    signal: "Workflow tools",
    visual: "desktop",
  },
  {
    title: "Mobile Application Development",
    label: "Work anywhere",
    description:
      "Design mobile experiences that keep customers, teams, and field operations connected to the work that matters.",
    href: solutionRoutes["Mobile Application Development"],
    icon: Smartphone,
    signal: "Connected work",
    visual: "mobile",
  },
  {
    title: "Machine Learning",
    label: "Adaptive systems",
    description:
      "Apply intelligent automation where prediction, personalization, or consistency can improve the business rhythm.",
    href: solutionRoutes["Machine Learning"],
    icon: BrainCircuit,
    signal: "Adaptive logic",
    visual: "learning",
  },
  {
    title: "Cloud Services",
    label: "Scalable infrastructure",
    description:
      "Plan, migrate, and manage cloud environments across AWS, Azure, Google Cloud, Cloudflare, DigitalOcean, and modern platforms so systems stay flexible, secure, and ready to grow.",
    href: solutionRoutes["Cloud Services"],
    icon: CloudCog,
    signal: "Cloud foundation",
    visual: "cloud",
  },
  {
    title: "QA Testing and Engineering",
    label: "Launch confidence",
    description:
      "Protect modern releases with thoughtful test strategy, automation, and quality checks built into delivery.",
    href: solutionRoutes["QA Testing and Engineering"],
    icon: CheckCircle2,
    signal: "Quality guardrails",
    visual: "testing",
  },
  {
    title: "Virtual Assistance / Business Administration",
    label: "Operational support",
    description:
      "Support coordination, documentation, scheduling, follow-through, and the business details that keep work moving.",
    href: solutionRoutes["Virtual Assistance / Business Administration"],
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
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-xl leading-9 text-white/66 sm:text-2xl sm:leading-10">
            From software and data to automation and support, Tidewrk helps
            businesses build the operating layer behind their next move, with
            AI used where it sharpens execution.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 xl:gap-6">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.title}
              solution={solution}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  solution,
}: {
  solution: (typeof solutions)[number];
}) {
  const SolutionIcon = solution.icon;

  return (
    <Link
      aria-label={`Explore ${solution.title}`}
      className="group relative flex min-h-[28rem] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.078),rgba(255,255,255,0.032))] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#003f72]/72 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:p-5"
      href={solution.href}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#003f72] to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(0,63,114,0.22),transparent_36%),radial-gradient(circle_at_82%_96%,rgba(0,63,114,0.16),transparent_34%)]"
      />

      <div className="relative z-10 flex min-h-[12.75rem] flex-col px-1 pt-2 sm:px-2">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full border border-[#003f72]/45 bg-[#003f72]/18 text-white shadow-[0_0_26px_rgba(0,63,114,0.34)]">
              <SolutionIcon className="size-5" aria-hidden="true" />
            </span>
            <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/68">
              {solution.label}
            </span>
          </div>
        </div>

        <div className="mt-5 flex-1">
          <h3 className="max-w-2xl text-pretty text-2xl font-semibold leading-tight tracking-normal text-white sm:text-3xl">
            {solution.title}
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/66 sm:text-xl sm:leading-9">
            {solution.description}
          </p>
        </div>

        <div className="mt-4 h-2" />
      </div>

      <div className="relative z-10 mt-auto">
        <SolutionVisual
          icon={SolutionIcon}
          variant={solution.visual}
        />
      </div>
    </Link>
  );
}

function SolutionVisual({
  icon: Icon,
  variant,
}: {
  icon: ComponentType<{ className?: string }>;
  variant: string;
}) {
  return (
    <div className="solution-visual relative min-h-[13.75rem] overflow-visible p-5 text-white">
      <div className="relative z-10 flex min-h-[11rem] items-center justify-center">
        <CompactSolutionGraphic Icon={Icon} variant={variant} />
      </div>
    </div>
  );
}

function CompactSolutionGraphic({
  Icon,
  variant,
}: {
  Icon: ComponentType<{ className?: string }>;
  variant: string;
}) {
  const isChart = variant === "testing";
  const isCloud = variant === "cloud";
  const isLearning = variant === "learning";
  const isAdministration = variant === "administration";

  return (
    <div className="relative h-40 w-full max-w-lg">
      {variant === "full-stack" ? (
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 z-20 w-52 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-[1rem] border border-white/16 bg-[#06111f] p-3 shadow-[0_18px_58px_rgba(0,0,0,0.34),0_0_18px_rgba(255,255,255,0.12),0_0_42px_rgba(0,63,114,0.36)]">
              <div className="mb-3 flex items-center justify-between">
                <span className="flex gap-1.5">
                  <span className="size-1.5 rounded-full bg-white/34" />
                  <span className="size-1.5 rounded-full bg-white/20" />
                  <span className="size-1.5 rounded-full bg-[#003f72]" />
                </span>
                <Laptop className="size-4 text-white/64" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <span className="block h-2 w-28 rounded-full bg-white/28" />
                <span className="block h-2 w-36 rounded-full bg-white/82 shadow-[0_0_8px_rgba(255,255,255,0.42),0_0_18px_rgba(0,63,114,0.58)]" />
                <span className="block h-2 w-24 rounded-full bg-white/16" />
              </div>
            </div>
            <div className="mx-auto h-2 w-40 rounded-b-[0.9rem] bg-white/18" />
            <div className="mx-auto mt-1 h-1 w-28 rounded-full bg-[#003f72]/70" />
          </div>

          <div className="absolute inset-0 z-30">
            {[
              { label: "Front-End", role: "UI", position: "left-2 top-1" },
              { label: "Back-End", role: "Logic", position: "right-3 top-3" },
              { label: "DevOps", role: "Release", position: "bottom-6 left-3" },
              { label: "Business Analyst", role: "Scope", position: "bottom-5 right-2" },
              { label: "QA", role: "Quality", position: "left-1/2 top-0 -translate-x-1/2" },
              { label: "Project Manager", role: "Delivery", position: "left-1/2 bottom-0 -translate-x-1/2" },
            ].map(({ label, position, role }) => (
              <div
                className={`absolute ${position} flex items-center gap-2 rounded-full border border-white/14 bg-[#07111f] px-2.5 py-2 text-xs font-semibold text-white/76 shadow-[0_14px_44px_rgba(0,0,0,0.24),0_0_16px_rgba(255,255,255,0.08),0_0_22px_rgba(0,63,114,0.22)]`}
                key={label}
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-white/12 shadow-[0_0_10px_rgba(255,255,255,0.2),0_0_18px_rgba(0,63,114,0.58)]">
                  <UserRound className="size-4 text-white" aria-hidden="true" />
                </span>
                <span className="leading-none">
                  <span className="block text-white/92">{label}</span>
                  <span className="block text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/42">
                    {role}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : variant === "intelligence" ? (
        <div className="absolute inset-0">
          <div className="absolute inset-x-10 top-1/2 z-30 -translate-y-1/2 rounded-[1.05rem] border border-white/16 bg-[#06111f] p-2.5 shadow-[0_16px_46px_rgba(0,0,0,0.32),0_0_14px_rgba(255,255,255,0.1),0_0_34px_rgba(0,63,114,0.3)]">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/48">
                <span className="size-2 rounded-full bg-[#003f72] shadow-[0_0_16px_rgba(0,63,114,0.85)]" />
                Command view
              </span>
              <span className="rounded-full border border-white/10 bg-[#0a1424] px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.12em] text-white/42">
                Live signal
              </span>
            </div>

            <div className="grid grid-cols-[1.35fr_0.65fr] items-center gap-2.5">
              <div className="relative flex h-16 items-center rounded-[0.8rem] border border-white/8 bg-[#02050a] p-3">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-5 rounded-full bg-white/10 blur-xl"
                />
                <svg
                  aria-hidden="true"
                  className="absolute inset-x-4 top-1/2 h-[3.55rem] -translate-y-1/2 overflow-visible"
                  fill="none"
                  viewBox="-10 -10 170 116"
                >
                  <path
                    d="M12 68 C32 56 42 72 62 49 C78 31 96 46 112 28 C124 17 134 22 142 14"
                    stroke="rgba(255,255,255,0.86)"
                    strokeLinecap="round"
                    strokeWidth="3"
                    style={{
                      filter:
                        "drop-shadow(0 0 6px rgba(255,255,255,0.45)) drop-shadow(0 0 14px rgba(0,63,114,0.55))",
                    }}
                  />
                  <path
                    d="M12 68 C32 56 42 72 62 49 C78 31 96 46 112 28 C124 17 134 22 142 14"
                    stroke="rgba(0,63,114,0.9)"
                    strokeLinecap="round"
                    strokeWidth="7"
                    opacity="0.24"
                  />
                  {[
                    [12, 68],
                    [62, 49],
                    [112, 28],
                    [142, 14],
                  ].map(([cx, cy]) => (
                    <circle
                      cx={cx}
                      cy={cy}
                      fill="#ffffff"
                      key={`${cx}-${cy}`}
                      r="3.5"
                      style={{
                        filter:
                          "drop-shadow(0 0 5px rgba(255,255,255,0.62)) drop-shadow(0 0 10px rgba(0,63,114,0.7))",
                      }}
                    />
                  ))}
                </svg>
                <div className="absolute bottom-3 left-3 right-3 flex items-end gap-1.5 opacity-38">
                  {[34, 54, 42, 72, 50].map((height) => (
                    <span
                      className="flex-1 rounded-t-full bg-white/70"
                      key={height}
                      style={{ height }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-1.5">
                {["Revenue", "Demand", "Cost"].map((label, index) => (
                  <div
                    className="rounded-[0.7rem] border border-white/8 bg-[#0a1424] px-2.5 py-1.5"
                    key={label}
                  >
                    <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/38">
                      {label}
                    </span>
                    <span
                      className="mt-1.5 block h-1.5 rounded-full bg-white/24"
                      style={{ width: `${82 - index * 14}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : variant === "science" ? (
        <div className="absolute inset-0">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 z-20 h-36 -translate-y-1/2 overflow-visible"
            fill="none"
            viewBox="0 0 460 150"
          >
            {[40, 70, 100, 130].map((y) => (
              <path
                d={`M8 ${y} H452`}
                key={y}
                stroke="rgba(255,255,255,0.07)"
                strokeLinecap="round"
                strokeWidth="1"
              />
            ))}
            <path
              d="M8 118 L54 88 L102 66 L148 104 L194 86 L238 56 L292 42 L342 62 L392 36 L452 28"
              stroke="rgba(255,255,255,0.84)"
              strokeLinecap="round"
              strokeWidth="3"
              style={{
                filter:
                  "drop-shadow(0 0 6px rgba(255,255,255,0.42)) drop-shadow(0 0 14px rgba(0,63,114,0.55))",
              }}
            />
            <path
              d="M8 118 L54 88 L102 66 L148 104 L194 86 L238 56 L292 42 L342 62 L392 36 L452 28"
              stroke="rgba(0,63,114,0.9)"
              strokeLinecap="round"
              strokeWidth="12"
              opacity="0.18"
            />
            {[
              { cx: 8, cy: 118, fill: "rgba(255,255,255,0.58)", label: "Raw", labelX: 10, labelY: 138, r: 4 },
              { cx: 54, cy: 88, fill: "rgba(0,63,114,0.92)", r: 5 },
              { cx: 102, cy: 66, fill: "rgba(255,255,255,0.74)", label: "Pattern", labelX: 82, labelY: 48, r: 4 },
              { cx: 148, cy: 104, fill: "rgba(255,255,255,0.52)", r: 3 },
              { cx: 194, cy: 86, fill: "rgba(0,63,114,0.78)", r: 4 },
              { cx: 238, cy: 56, fill: "#ffffff", label: "Model", labelX: 220, labelY: 38, r: 6 },
              { cx: 292, cy: 42, fill: "rgba(255,255,255,0.7)", r: 4 },
              { cx: 342, cy: 62, fill: "rgba(0,63,114,0.86)", r: 5 },
              { cx: 392, cy: 36, fill: "rgba(255,255,255,0.55)", r: 3 },
              { cx: 452, cy: 28, fill: "rgba(255,255,255,0.72)", label: "Forecast", labelX: 394, labelY: 18, r: 4 },
            ].map(({ cx, cy, fill, r }) => (
              <circle
                cx={cx}
                cy={cy}
                fill={fill}
                key={`${cx}-${cy}`}
                r={r}
                style={{
                  filter:
                    "drop-shadow(0 0 5px rgba(255,255,255,0.55)) drop-shadow(0 0 10px rgba(0,63,114,0.66))",
                  }}
              />
            ))}
            {[
              { label: "Raw", x: 10, y: 138 },
              { label: "Pattern", x: 82, y: 48 },
              { label: "Model", x: 220, y: 38 },
              { label: "Forecast", x: 394, y: 18 },
            ].map(({ label, x, y }) => (
              <text
                fill="rgba(255,255,255,0.52)"
                fontSize="11"
                fontWeight="700"
                key={label}
                letterSpacing="0.8"
                x={x}
                y={y}
              >
                {label}
              </text>
            ))}
          </svg>
          <div className="absolute left-9 top-8 h-10 w-20 rounded-[0.85rem] border border-white/10 bg-[#07111f] p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
            <span className="block h-1.5 w-12 rounded-full bg-white/24" />
            <span className="mt-2 block h-1.5 w-16 rounded-full bg-[#003f72]/70" />
          </div>
          <div className="absolute bottom-8 right-9 h-10 w-24 rounded-[0.85rem] border border-white/10 bg-[#07111f] p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
            <span className="block h-1.5 w-16 rounded-full bg-white/24" />
            <span className="mt-2 block h-1.5 w-12 rounded-full bg-[#003f72]/70" />
          </div>
        </div>
      ) : variant === "engineering" ? (
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 z-20 h-px w-[20rem] -translate-x-1/2 -translate-y-1/2 bg-white/42 shadow-[0_0_10px_rgba(255,255,255,0.24),0_0_18px_rgba(0,63,114,0.48)]" />
          <div className="absolute left-1/2 top-1/2 z-20 h-10 w-px -translate-x-1/2 -translate-y-1/2 bg-white/18" />

          {[
            { label: "Source", className: "left-6 top-1/2 -translate-y-1/2" },
            { label: "Transform", className: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" },
            { label: "Ready", className: "right-6 top-1/2 -translate-y-1/2" },
          ].map((item, index) => (
            <div
              className={`absolute z-30 ${item.className} flex flex-col items-center`}
              key={item.label}
            >
              <div className="relative">
                <span
                  className="block h-4 w-12 rounded-[50%] border border-white/20 bg-white/26"
                  style={{
                    boxShadow:
                      index === 1
                        ? "0 0 12px rgba(255,255,255,0.24), 0 0 18px rgba(0,63,114,0.46)"
                        : undefined,
                  }}
                />
                <span className="block h-7 w-12 border-x border-white/14 bg-[#07111f]" />
                <span className="block h-4 w-12 rounded-[50%] border border-white/20 bg-[#003f72]/72" />
              </div>
              <span className="mt-3 rounded-full border border-white/10 bg-[#07111f] px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-white/42">
                {item.label}
              </span>
            </div>
          ))}

          {["left-[6.9rem]", "right-[6.9rem]"].map((position) => (
            <span
              className={`absolute top-1/2 z-40 size-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.56),0_0_14px_rgba(0,63,114,0.7)] ${position}`}
              key={position}
            />
          ))}
        </div>
      ) : variant === "desktop" ? (
        <div className="absolute inset-0">
          <div className="absolute left-8 top-8 z-20 h-20 w-32 rounded-[0.95rem] border border-white/10 bg-[#07111f] p-3 shadow-[0_16px_42px_rgba(0,0,0,0.26),0_0_18px_rgba(0,63,114,0.18)]">
            <span className="block h-2 w-16 rounded-full bg-white/24" />
            <span className="mt-3 block h-2 w-24 rounded-full bg-[#003f72]/70 shadow-[0_0_12px_rgba(0,63,114,0.46)]" />
            <span className="mt-3 block h-2 w-12 rounded-full bg-white/16" />
          </div>
          <div className="absolute inset-x-8 top-1/2 z-30 -translate-y-1/2 rounded-[1.05rem] border border-white/18 bg-[#06111f] p-3 shadow-[0_18px_56px_rgba(0,0,0,0.34),0_0_18px_rgba(255,255,255,0.12),0_0_42px_rgba(0,63,114,0.34)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex gap-1.5">
                <span className="size-1.5 rounded-full bg-white/34" />
                <span className="size-1.5 rounded-full bg-white/20" />
                <span className="size-1.5 rounded-full bg-[#003f72]" />
              </span>
              <MonitorCog className="size-4 text-white/58" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-[0.42fr_0.58fr] gap-3">
              <div className="rounded-[0.8rem] border border-white/8 bg-[#02050a] p-3">
                <div className="mb-2 flex items-center gap-2">
                  <SiNextdotjs className="size-4 text-white" aria-hidden="true" />
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/46">
                    App shell
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Next.js", icon: SiNextdotjs },
                    { label: "React", icon: SiReact },
                    { label: "TypeScript", icon: SiTypescript },
                  ].map(({ icon: StackIcon, label }) => (
                    <div
                      className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.055] px-2.5 py-1.5 text-[0.62rem] font-semibold text-white/72"
                      key={label}
                    >
                      <StackIcon className="size-3.5 text-white" aria-hidden="true" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-20 overflow-hidden rounded-[0.8rem] border border-white/8 bg-[#02050a] p-2.5">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-8 rounded-full bg-white/10 blur-xl"
                />
                <div className="relative z-10 grid grid-cols-2 gap-1.5">
                  {[
                    { label: "Laravel", icon: SiLaravel },
                    { label: "Python", icon: SiPython },
                    { label: "Express", icon: SiExpress },
                    { label: "MongoDB", icon: SiMongodb },
                    { label: "MySQL", icon: SiMysql },
                    { label: "PostgreSQL", icon: SiPostgresql },
                    { label: "Tailwind", icon: SiTailwindcss },
                    { label: "Electron", icon: SiElectron },
                    { label: "VB.NET", icon: SiDotnet },
                    { label: "Java", icon: SiOpenjdk },
                  ].map(({ icon: StackIcon, label }, index) => (
                    <div
                      className={`flex items-center gap-1.5 rounded-[0.5rem] border px-2 py-1 text-[0.52rem] font-semibold ${
                        index === 0
                          ? "border-white/16 bg-white/14 text-white shadow-[0_0_12px_rgba(255,255,255,0.16),0_0_18px_rgba(0,63,114,0.34)]"
                          : "border-white/8 bg-white/[0.055] text-white/66"
                      }`}
                      key={label}
                    >
                      <StackIcon className="size-3 text-white" aria-hidden="true" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-7 left-1/2 z-20 h-2 w-44 -translate-x-1/2 rounded-b-full bg-white/16" />
        </div>
      ) : variant === "mobile" ? (
        <div className="absolute inset-0">
          <div className="absolute inset-x-8 top-1/2 z-10 h-32 -translate-y-1/2 rounded-[1.25rem] bg-[#003f72]/10 blur-2xl" />

          <div className="absolute inset-0 z-40">
            {[
              {
                tool: "Xcode",
                role: "IDE",
                icon: SiXcode,
                position: "left-2 top-1",
              },
              {
                tool: "iOS",
                role: "OS",
                icon: SiApple,
                position: "left-1/2 top-0 -translate-x-1/2",
              },
              {
                tool: "Android Studio",
                role: "IDE",
                icon: SiAndroidstudio,
                position: "right-2 top-2",
              },
              {
                tool: "Swift",
                role: "Native",
                icon: SiSwift,
                position: "bottom-6 left-3",
              },
              {
                tool: "Flutter",
                role: "Cross",
                icon: SiFlutter,
                position: "bottom-5 right-2",
              },
              {
                tool: "Unity",
                role: "3D",
                icon: SiUnity,
                position: "bottom-0 left-24",
              },
              {
                tool: "Android",
                role: "OS",
                icon: SiAndroid,
                position: "bottom-0 right-[5.5rem]",
              },
            ].map(({ icon: MobileIcon, position, role, tool }) => (
              <div
                className={`absolute ${position} flex items-center gap-2 rounded-full border border-white/14 bg-[#07111f] px-2.5 py-2 text-xs font-semibold text-white/76 shadow-[0_14px_44px_rgba(0,0,0,0.24),0_0_16px_rgba(255,255,255,0.08),0_0_22px_rgba(0,63,114,0.22)]`}
                key={tool}
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-white/12 shadow-[0_0_10px_rgba(255,255,255,0.2),0_0_18px_rgba(0,63,114,0.58)]">
                  <MobileIcon className="size-4 text-white" aria-hidden="true" />
                </span>
                <span className="leading-none">
                  <span className="block text-white/92">{tool}</span>
                  <span className="block text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white/42">
                    {role}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 top-1/2 z-30 h-[8.5rem] w-[11.5rem] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute left-0 top-9 h-[5.1rem] w-[6.9rem] -rotate-3 rounded-[1rem] border border-white/16 bg-[#06111f] p-2 shadow-[0_18px_50px_rgba(0,0,0,0.32),0_0_12px_rgba(255,255,255,0.1),0_0_26px_rgba(0,63,114,0.34)]">
              <div className="h-full rounded-[0.75rem] bg-[#02050a] p-2 shadow-[inset_0_0_18px_rgba(0,63,114,0.16)]">
                <span className="block h-7 rounded-[0.55rem] bg-white/78 shadow-[0_0_8px_rgba(255,255,255,0.28),0_0_16px_rgba(0,63,114,0.44)]" />
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {[0, 1, 2, 3, 4, 5].map((item) => (
                    <span
                      className={`h-4 rounded-[0.3rem] ${item === 2 ? "bg-[#003f72]/50" : "bg-white/10"}`}
                      key={item}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-0 h-32 w-[4.75rem] rounded-[1rem] border border-white/16 bg-[#06111f] p-2 shadow-[0_20px_54px_rgba(0,0,0,0.34),0_0_14px_rgba(255,255,255,0.12),0_0_30px_rgba(0,63,114,0.4)]">
              <span className="mx-auto mb-2 block h-1 w-7 rounded-full bg-white/24" />
              <div className="space-y-2 rounded-[0.7rem] bg-[#02050a] p-2 shadow-[inset_0_0_18px_rgba(0,63,114,0.16)]">
                <span className="block h-8 rounded-[0.55rem] bg-white/78 shadow-[0_0_8px_rgba(255,255,255,0.28),0_0_16px_rgba(0,63,114,0.44)]" />
                <span className="block h-2 w-10 rounded-full bg-white/24" />
                <span className="block h-2 w-12 rounded-full bg-white/14" />
                <span className="block h-6 rounded-[0.45rem] bg-[#003f72]/42" />
              </div>
            </div>
          </div>
        </div>
      ) : isLearning ? (
        <div className="absolute inset-0">
          <div className="absolute inset-x-7 top-1/2 h-32 -translate-y-1/2 rounded-full bg-[#003f72]/12 blur-2xl" />
          <svg
            aria-hidden="true"
            className="absolute inset-0 z-10 size-full overflow-visible"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            {[
              [50, 12, 13, 60],
              [50, 12, 30, 39],
              [50, 12, 30, 86],
              [50, 12, 70, 86],
              [50, 12, 70, 39],
              [50, 12, 87, 60],
              [13, 60, 30, 39],
              [13, 60, 30, 86],
              [13, 60, 70, 39],
              [13, 60, 70, 86],
              [30, 39, 70, 39],
              [30, 39, 87, 60],
              [30, 86, 70, 86],
              [30, 86, 87, 60],
              [30, 39, 70, 86],
              [30, 86, 70, 39],
              [70, 39, 87, 60],
              [70, 86, 87, 60],
            ].map(([x1, y1, x2, y2]) => (
              <line
                key={`${x1}-${y1}-${x2}-${y2}`}
                stroke="rgba(30,41,59,0.9)"
                strokeLinecap="round"
                strokeWidth="0.38"
                x1={x1}
                x2={x2}
                y1={y1}
                y2={y2}
              />
            ))}
          </svg>

          {[
            {
              x: 13,
              y: 60,
              icon: UserRound,
              label: "Users",
            },
            {
              x: 30,
              y: 39,
              icon: Mail,
              label: "Email",
            },
            {
              x: 50,
              y: 12,
              icon: BrainCircuit,
              label: "Model",
              primary: true,
            },
            {
              x: 70,
              y: 39,
              icon: Cpu,
              label: "Machine",
            },
            {
              x: 30,
              y: 86,
              icon: FileText,
              label: "Docs",
            },
            {
              x: 70,
              y: 86,
              icon: BarChart3,
              label: "Graph",
            },
            {
              x: 87,
              y: 60,
              icon: Workflow,
              label: "Flow",
            },
          ].map(({ icon: NodeIcon, label, primary, x, y }) => (
            <div
              className="solution-stack-card absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
              key={label}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                className={`flex items-center justify-center rounded-full border ${
                  primary
                    ? "size-16 border-white/24 bg-[#07111f] shadow-[0_10px_22px_rgba(0,0,0,0.3),0_0_14px_rgba(255,255,255,0.2),0_0_28px_rgba(0,63,114,0.55)]"
                    : "size-12 border-white/14 bg-[#07111f] shadow-[0_8px_18px_rgba(0,0,0,0.24),0_0_8px_rgba(0,63,114,0.22)]"
                }`}
              >
                <NodeIcon
                  className={`${primary ? "size-7" : "size-5"} text-white`}
                  aria-hidden="true"
                />
              </span>
              <span className="rounded-full border border-white/8 bg-[#07111f]/88 px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-white/46">
                {label}
              </span>
            </div>
          ))}
        </div>
      ) : isChart ? (
        <div className="absolute inset-0">
          <div className="absolute inset-x-8 top-1/2 h-[7.5rem] -translate-y-1/2 rounded-[1.2rem] bg-[#003f72]/8 blur-2xl" />
          <div className="absolute left-8 top-7 z-20 w-40 rounded-[1rem] border border-white/14 bg-[#06111f] p-3 shadow-[0_14px_36px_rgba(0,0,0,0.28),0_0_18px_rgba(0,63,114,0.22)]">
            <div className="mb-3 flex items-center gap-2">
              <SiCypress className="size-4 text-white" aria-hidden="true" />
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/48">
                Test runner
              </span>
            </div>
            <div className="space-y-2 rounded-[0.75rem] border border-white/8 bg-[#02050a] p-2.5">
              {["npm run test:e2e", "api contract passed", "visual diff clean"].map(
                (line, index) => (
                  <div className="flex items-center gap-2" key={line}>
                    <span
                      className={`size-1.5 rounded-full ${
                        index === 0 ? "bg-white" : "bg-[#003f72]"
                      }`}
                    />
                    <span className="text-[0.55rem] font-medium text-white/48">
                      {line}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="absolute right-8 top-1/2 z-30 w-[10.5rem] -translate-y-1/2 rounded-[1rem] border border-white/16 bg-[#06111f] p-3 shadow-[0_16px_42px_rgba(0,0,0,0.3),0_0_18px_rgba(255,255,255,0.08),0_0_24px_rgba(0,63,114,0.28)]">
            <div className="mb-2 flex items-center justify-between">
              <span className="flex gap-1.5">
                <span className="size-1.5 rounded-full bg-white/34" />
                <span className="size-1.5 rounded-full bg-white/20" />
                <span className="size-1.5 rounded-full bg-[#003f72]" />
              </span>
              <span className="rounded-full border border-white/10 bg-[#02050a] px-2 py-1 text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-white/42">
                passed
              </span>
            </div>
            <div className="relative h-20 rounded-[0.75rem] border border-white/8 bg-[#02050a] p-2">
              <div className="absolute left-3 top-3 h-8 w-12 rounded-[0.5rem] border border-white/10 bg-white/[0.06]" />
              <div className="absolute right-3 top-3 h-8 w-12 rounded-[0.5rem] border border-white/10 bg-[#003f72]/30 shadow-[0_0_14px_rgba(0,63,114,0.24)]" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                <CheckCircle2 className="size-4 text-white" aria-hidden="true" />
                <span className="h-2 flex-1 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/12 bg-[#07111f]/92 px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.22),0_0_12px_rgba(0,63,114,0.24)]">
            {[
              SiSelenium,
              SiCypress,
              SiJest,
              SiVitest,
              SiTestinglibrary,
              SiPostman,
            ].map((ToolIcon, index) => (
              <span
                className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.055]"
                key={index}
              >
                <ToolIcon className="size-3.5 text-white" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      ) : isCloud ? (
        <div className="absolute inset-0">
          <div className="absolute inset-4 rounded-[1.4rem] bg-[radial-gradient(circle_at_50%_42%,rgba(0,63,114,0.2),transparent_54%),radial-gradient(circle_at_22%_24%,rgba(255,255,255,0.045),transparent_34%)] blur-sm" />
          <svg
            aria-hidden="true"
            className="absolute inset-0 z-10 size-full overflow-visible"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            {[
              "M16 18 H39 Q44 18 44 26 V31",
              "M84 20 H63 Q58 20 58 28 V34",
              "M16 50 H31 Q36 50 36 56 V62",
              "M84 50 H69 Q64 50 64 56 V62",
              "M20 82 H43 Q48 82 48 73 V68",
              "M80 82 H57 Q52 82 52 73 V68",
            ].map((path) => (
              <path
                d={path}
                key={path}
                stroke="rgba(148,163,184,0.24)"
                strokeDasharray="3 4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.72"
              />
            ))}
            {[
              [18, 18],
              [82, 20],
              [16, 50],
              [84, 50],
              [20, 82],
              [80, 82],
              [50, 68],
            ].map(([cx, cy]) => (
              <circle
                cx={cx}
                cy={cy}
                fill="rgba(255,255,255,0.72)"
                key={`${cx}-${cy}`}
                r="0.8"
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 z-30 flex h-22 w-38 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="absolute bottom-3 left-1/2 h-14 w-[7.5rem] -translate-x-1/2 rounded-[999px] border border-white/14 bg-[#003f72]/88 shadow-[0_0_10px_rgba(255,255,255,0.06),0_0_18px_rgba(0,63,114,0.32)]" />
            <div className="absolute left-3 top-7 size-15 rounded-full border-l border-t border-white/16 bg-[#003f72]/88 shadow-[0_0_13px_rgba(0,63,114,0.28)]" />
            <div className="absolute left-11 top-2 size-19 rounded-full border-t border-white/16 bg-[#003f72]/92 shadow-[0_0_16px_rgba(0,63,114,0.32)]" />
            <div className="absolute right-4 top-9 size-13 rounded-full border-r border-t border-white/16 bg-[#003f72]/88 shadow-[0_0_13px_rgba(0,63,114,0.28)]" />
          </div>

          {[
            { icon: FaAws, label: "AWS", className: "left-4 top-2" },
            { icon: FaMicrosoft, label: "Azure", className: "right-4 top-2" },
            {
              icon: SiVercel,
              label: "Vercel",
              className: "left-4 top-[4.25rem]",
            },
            {
              icon: SiDigitalocean,
              label: "DigitalOcean",
              className: "right-4 top-[4.25rem]",
            },
            {
              icon: SiGooglecloud,
              label: "Google",
              className: "left-4 bottom-2",
            },
            {
              icon: SiCloudflare,
              label: "Cloudflare",
              className: "right-4 bottom-2",
            },
          ].map(({ icon: CloudIcon, label, className }, itemIndex) => (
            <div
              className={`solution-stack-card absolute z-40 ${className} flex items-center gap-2 rounded-full border border-white/14 bg-[#07111f]/92 px-3 py-2 text-xs font-semibold text-white/76 shadow-[0_8px_18px_rgba(0,0,0,0.22),0_0_8px_rgba(255,255,255,0.06),0_0_10px_rgba(0,63,114,0.24)] backdrop-blur-md`}
              key={label}
              style={{ animationDelay: `${itemIndex * -0.3}s` }}
            >
              <CloudIcon
                className="size-4 text-white drop-shadow-[0_0_7px_rgba(255,255,255,0.34)]"
                aria-hidden="true"
              />
              {label}
            </div>
          ))}
        </div>
      ) : isAdministration ? (
        <div className="absolute inset-0">
          <div className="absolute inset-x-8 top-1/2 h-30 -translate-y-1/2 rounded-[1.2rem] bg-[#003f72]/9 blur-2xl" />
          <div className="absolute left-1/2 top-1/2 z-30 w-50 -translate-x-1/2 -translate-y-1/2 rounded-[1rem] border border-white/16 bg-[#06111f] p-3 shadow-[0_16px_44px_rgba(0,0,0,0.3),0_0_18px_rgba(255,255,255,0.08),0_0_28px_rgba(0,63,114,0.26)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex gap-1.5">
                <span className="size-1.5 rounded-full bg-white/34" />
                <span className="size-1.5 rounded-full bg-white/20" />
                <span className="size-1.5 rounded-full bg-[#003f72]" />
              </span>
              <span className="text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-white/44">
                Daily flow
              </span>
            </div>
            <div className="grid grid-cols-[0.8fr_1.2fr] gap-3">
              <div className="space-y-2">
                {[
                  { icon: CalendarClock, label: "Schedule" },
                  { icon: MessageSquareText, label: "Follow-up" },
                  { icon: FileText, label: "Docs" },
                ].map(({ icon: AdminIcon, label }) => (
                  <div
                    className="flex items-center gap-2 rounded-[0.65rem] border border-white/8 bg-white/[0.055] px-2.5 py-2"
                    key={label}
                  >
                    <AdminIcon className="size-3.5 text-white" aria-hidden="true" />
                    <span className="text-[0.55rem] font-semibold text-white/60">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="rounded-[0.8rem] border border-white/8 bg-[#02050a] p-3">
                <div className="mb-3 flex items-center gap-2">
                  <ClipboardList className="size-4 text-white" aria-hidden="true" />
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/48">
                    Task board
                  </span>
                </div>
                <div className="space-y-2">
                  {[78, 58, 86, 48].map((width, index) => (
                    <div className="flex items-center gap-2" key={width}>
                      <span
                        className={`size-3 rounded-full border ${
                          index < 2
                            ? "border-white/24 bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                            : "border-[#003f72]/70 bg-[#003f72]/50"
                        }`}
                      />
                      <span
                        className="h-2 rounded-full bg-white/16"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {[
            {
              icon: Mail,
              label: "Inbox",
              className: "left-5 top-4",
            },
            {
              icon: CalendarClock,
              label: "Calendar",
              className: "right-5 top-6",
            },
            {
              icon: CheckCircle2,
              label: "Done",
              className: "left-6 bottom-5",
            },
            {
              icon: UserRound,
              label: "Support",
              className: "right-6 bottom-4",
            },
          ].map(({ className, icon: AdminIcon, label }, index) => (
            <div
              className={`solution-stack-card absolute z-40 ${className} flex items-center gap-2 rounded-full border border-white/12 bg-[#07111f]/92 px-3 py-2 text-xs font-semibold text-white/70 shadow-[0_10px_24px_rgba(0,0,0,0.22),0_0_10px_rgba(0,63,114,0.24)] backdrop-blur-md`}
              key={label}
              style={{ animationDelay: `${index * -0.25}s` }}
            >
              <AdminIcon className="size-4 text-white" aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>
      ) : (
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 z-20 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.4rem] border border-white/14 bg-[#07111f]/92 shadow-[0_0_18px_rgba(255,255,255,0.28),0_0_46px_rgba(0,63,114,0.86)]">
            <Icon className="size-9 text-white" aria-hidden="true" />
          </div>
          <div className="solution-stack-card absolute left-5 top-4 h-16 w-36 rounded-[1rem] bg-white/[0.075] p-3 shadow-[0_14px_44px_rgba(0,0,0,0.22)] backdrop-blur-md">
            <span className="mb-3 block h-2 w-20 rounded-full bg-white/24" />
            <span className="block h-2 w-28 rounded-full bg-[#003f72]/72" />
          </div>
          <div className="solution-stack-card solution-stack-card-b absolute right-6 top-7 h-16 w-32 rounded-[1rem] bg-white/[0.075] p-3 shadow-[0_14px_44px_rgba(0,0,0,0.22)] backdrop-blur-md">
            <span className="mb-3 block h-2 w-16 rounded-full bg-white/22" />
            <span className="block h-2 w-24 rounded-full bg-white/14" />
          </div>
          <div className="solution-stack-card solution-stack-card-c absolute bottom-5 left-1/2 h-14 w-44 -translate-x-1/2 rounded-full bg-white/[0.08] px-5 py-4 shadow-[0_14px_44px_rgba(0,0,0,0.22)] backdrop-blur-md">
            <span className="block h-2 rounded-full bg-white/24" />
          </div>
        </div>
      )}
    </div>
  );
}
