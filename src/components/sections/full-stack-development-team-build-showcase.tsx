import {
  AppWindow,
  Blocks,
  Bot,
  CheckCircle2,
  Database,
  LayoutDashboard,
  Link2,
  LockKeyhole,
  RefreshCw,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type VisualKind =
  | "web"
  | "mobile"
  | "saas"
  | "tools"
  | "portal"
  | "dashboard"
  | "api"
  | "data"
  | "workflow"
  | "modernize";

const buildItems: Array<{
  title: string;
  benefit: string;
  description: string;
  icon: LucideIcon;
  visual: VisualKind;
  chips: string[];
}> = [
  {
    title: "Custom web applications",
    benefit: "Run your business on software built around your workflow.",
    description:
      "Create secure browser-based tools for operations, customers, reporting, and day-to-day execution.",
    icon: AppWindow,
    visual: "web",
    chips: ["Secure access", "Custom workflows", "Business logic"],
  },
  {
    title: "Mobile-ready platforms",
    benefit: "Give users a clean experience on every screen.",
    description:
      "Build responsive platforms that work smoothly for teams, customers, and field users.",
    icon: Smartphone,
    visual: "mobile",
    chips: ["Responsive UX", "Fast access", "Cross-device"],
  },
  {
    title: "SaaS products",
    benefit: "Turn your product idea into a scalable platform.",
    description:
      "Design the foundation for accounts, subscriptions, permissions, usage, and product growth.",
    icon: Blocks,
    visual: "saas",
    chips: ["User accounts", "Plans", "Scalable core"],
  },
  {
    title: "Internal business tools",
    benefit: "Replace manual work with tools your team actually uses.",
    description:
      "Create focused systems for approvals, tracking, operations, and repeatable internal processes.",
    icon: Workflow,
    visual: "tools",
    chips: ["Approvals", "Tracking", "Operations"],
  },
  {
    title: "Customer portals",
    benefit: "Make it easier for customers to get what they need.",
    description:
      "Build self-service spaces for accounts, requests, documents, orders, support, and updates.",
    icon: LockKeyhole,
    visual: "portal",
    chips: ["Self-service", "Requests", "Account access"],
  },
  {
    title: "Admin dashboards",
    benefit: "Give leaders and teams a clear control center.",
    description:
      "Create dashboards for managing users, content, workflows, reports, settings, and decisions.",
    icon: LayoutDashboard,
    visual: "dashboard",
    chips: ["Controls", "Reports", "Visibility"],
  },
  {
    title: "API integrations",
    benefit: "Connect the systems your business depends on.",
    description:
      "Sync data between platforms, automate handoffs, and reduce duplicate work across tools.",
    icon: Link2,
    visual: "api",
    chips: ["Sync data", "Automate handoffs", "Connect tools"],
  },
  {
    title: "Database-driven applications",
    benefit: "Turn complex data into reliable product experiences.",
    description:
      "Build applications with structured data, search, permissions, records, and reporting at the core.",
    icon: Database,
    visual: "data",
    chips: ["Records", "Search", "Reporting"],
  },
  {
    title: "Workflow automation systems",
    benefit: "Move work forward without constant manual follow-up.",
    description:
      "Automate approvals, notifications, assignments, routing, and status updates across your team.",
    icon: Bot,
    visual: "workflow",
    chips: ["Automation", "Routing", "Notifications"],
  },
  {
    title: "Legacy system modernization",
    benefit: "Upgrade outdated systems without losing what works.",
    description:
      "Improve performance, usability, integrations, and maintainability while protecting business continuity.",
    icon: RefreshCw,
    visual: "modernize",
    chips: ["Modern UX", "Better performance", "Continuity"],
  },
];

export function FullStackDevelopmentTeamBuildShowcase() {
  return (
    <section
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-[6vw]"
      id="build"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />
      <div className="pointer-events-none absolute inset-0 bg-white/82" />

      <div className="relative mx-auto w-full max-w-[1760px]">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
              <span className="size-2 bg-[#f58220]" aria-hidden="true" />
              What We Can Help You Build
            </div>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-[3.6rem]">
              Software built for real work
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9 lg:ml-auto">
            From new platforms to system upgrades, Tidewrk helps turn business
            needs into secure, scalable, and easy-to-use digital products.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:hidden">
          {buildItems.map((item, index) => (
            <BuildMobileCard index={index} item={item} key={item.title} />
          ))}
        </div>

        <div className="relative mt-14 hidden space-y-10 lg:mt-18 lg:block lg:space-y-14">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#d8e6f5] lg:block">
            <span className="absolute left-1/2 top-20 h-32 w-px -translate-x-1/2 bg-[#f58220]" />
          </div>

          {buildItems.map((item, index) => (
            <BuildShowcaseRow
              index={index}
              item={item}
              key={item.title}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildMobileCard({
  index,
  item,
}: {
  index: number;
  item: (typeof buildItems)[number];
}) {
  const Icon = item.icon;

  return (
    <article className="border border-[#e6e8ec] bg-white">
      <BuildGraphic compact visual={item.visual} />

      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="flex size-11 items-center justify-center bg-[#003466] text-white">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold text-[#003466]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-5 text-balance text-2xl font-semibold leading-tight tracking-normal text-[#111217]">
          {item.title}
        </h3>
        <p className="mt-3 text-lg font-semibold leading-7 text-[#003466]">
          {item.benefit}
        </p>
        <p className="mt-3 text-base leading-7 text-[#666666]">
          {item.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {item.chips.slice(0, 2).map((chip) => (
            <span
              className="inline-flex items-center gap-2 border border-[#e6edf5] bg-[#fbfcfd] px-3 py-1.5 text-sm font-medium text-[#4f5a64]"
              key={chip}
            >
              <CheckCircle2
                className="size-4 text-[#003466]"
                aria-hidden="true"
              />
              {chip}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function BuildShowcaseRow({
  index,
  item,
  reverse,
}: {
  index: number;
  item: (typeof buildItems)[number];
  reverse: boolean;
}) {
  const Icon = item.icon;

  return (
    <article
      className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_112px_minmax(0,1fr)] lg:items-center"
      data-build-row
    >
      <div className={reverse ? "lg:col-start-3" : undefined} data-build-visual>
        <BuildGraphic visual={item.visual} />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
        <div className="flex size-16 items-center justify-center border border-[#d8e6f5] bg-white text-sm font-semibold text-[#003466] shadow-[0_18px_54px_rgba(0,52,102,0.08)]">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div
        className={`relative ${
          reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-3"
        }`}
        data-build-content
      >
        <span
          className={`absolute top-1/2 hidden h-px w-14 bg-[#d8e6f5] lg:block ${
            reverse ? "-right-20" : "-left-20"
          }`}
          data-build-line
        />
        <div className="border border-[#e6e8ec] bg-white p-6 shadow-[0_22px_80px_rgba(0,52,102,0.06)] sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center bg-[#003466] text-white">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-[#003466]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-normal text-[#111217]">
            {item.title}
          </h3>
          <p className="mt-4 text-xl font-semibold leading-8 text-[#003466]">
            {item.benefit}
          </p>
          <p className="mt-3 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
            {item.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {item.chips.map((chip) => (
              <span
                className="inline-flex items-center gap-2 border border-[#e6edf5] bg-[#fbfcfd] px-3.5 py-2 text-sm font-medium text-[#4f5a64]"
                key={chip}
              >
                <CheckCircle2
                  className="size-4 text-[#003466]"
                  aria-hidden="true"
                />
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function BuildGraphic({
  compact = false,
  visual,
}: {
  compact?: boolean;
  visual: VisualKind;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-[#e6edf5] bg-[#fbfcfd] shadow-[0_24px_90px_rgba(0,52,102,0.06)] ${
        compact ? "min-h-[230px] sm:min-h-[260px]" : "min-h-[360px] sm:min-h-[420px]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.052)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.045)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_82%)]" />
      <BuildIllustration compact={compact} visual={visual} />
    </div>
  );
}

function BuildIllustration({
  compact = false,
  visual,
}: {
  compact?: boolean;
  visual: VisualKind;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full ${compact ? "scale-105" : ""}`}
      fill="none"
      viewBox="0 0 620 440"
    >
      <rect height="440" width="620" fill="#fbfcfd" />
      <rect height="190" width="190" x="405" y="28" fill="#fff4ea" />
      <rect height="210" width="210" x="22" y="206" fill="#f5f9fd" />

      {visual === "web" && <WebIllustration />}
      {visual === "mobile" && <MobileIllustration />}
      {visual === "saas" && <SaasIllustration />}
      {visual === "tools" && <ToolsIllustration />}
      {visual === "portal" && <PortalIllustration />}
      {visual === "dashboard" && <DashboardIllustration />}
      {visual === "api" && <ApiIllustration />}
      {visual === "data" && <DataIllustration />}
      {visual === "workflow" && <WorkflowIllustration />}
      {visual === "modernize" && <ModernizeIllustration />}
    </svg>
  );
}

function WebIllustration() {
  return (
    <>
      <rect height="210" width="340" x="140" y="110" fill="white" stroke="#003466" strokeWidth="3" />
      <rect height="36" width="340" x="140" y="110" fill="#eaf4ff" stroke="#003466" strokeWidth="3" />
      <circle cx="166" cy="128" r="6" fill="#f58220" />
      <circle cx="188" cy="128" r="6" fill="#003466" />
      <rect height="78" width="116" x="174" y="178" fill="#fff4ea" stroke="#f58220" strokeWidth="2" />
      <rect height="78" width="138" x="314" y="178" fill="#f5f9fd" stroke="#d8e6f5" strokeWidth="2" />
      <path d="M210 292H414" stroke="#003466" strokeWidth="10" />
      <path d="M210 292H310" stroke="#f58220" strokeWidth="10" />
      <path d="M94 348L128 314L138 338L168 350L134 384L124 358L94 348Z" fill="white" stroke="#111217" strokeWidth="3" />
    </>
  );
}

function MobileIllustration() {
  return (
    <>
      <rect height="274" width="130" x="244" y="78" fill="white" stroke="#003466" strokeWidth="3" />
      <rect height="188" width="92" x="263" y="116" fill="#eaf4ff" />
      <circle cx="309" cy="326" r="10" fill="#003466" />
      <rect height="216" width="92" x="128" y="136" fill="white" stroke="#d8e6f5" strokeWidth="3" />
      <rect height="216" width="92" x="400" y="136" fill="#fff4ea" stroke="#f58220" strokeWidth="3" />
      <path d="M176 246H444" stroke="#003466" strokeWidth="3" strokeDasharray="12 12" />
      <circle cx="176" cy="246" r="16" fill="#f58220" />
      <circle cx="444" cy="246" r="16" fill="#003466" />
    </>
  );
}

function SaasIllustration() {
  return (
    <>
      <path d="M194 236C154 236 126 211 126 177C126 145 149 122 181 117C196 83 229 62 270 62C323 62 363 93 377 140C412 144 440 172 440 208C440 248 407 278 365 278H194V236Z" fill="white" stroke="#003466" strokeWidth="3" />
      <circle cx="246" cy="170" r="34" fill="#eaf4ff" stroke="#d8e6f5" strokeWidth="2" />
      <circle cx="318" cy="170" r="34" fill="#fff4ea" stroke="#f58220" strokeWidth="2" />
      <path d="M282 134V100M282 240V284M222 204L188 238M342 204L376 238" stroke="#003466" strokeWidth="4" />
      <rect height="56" width="92" x="236" y="284" fill="#003466" />
      <rect height="42" width="64" x="366" y="314" fill="white" stroke="#d8e6f5" strokeWidth="2" />
    </>
  );
}

function ToolsIllustration() {
  return (
    <>
      <rect height="230" width="370" x="126" y="94" fill="white" stroke="#003466" strokeWidth="3" />
      <rect height="230" width="92" x="126" y="94" fill="#eaf4ff" stroke="#003466" strokeWidth="3" />
      <rect height="56" width="72" x="238" y="136" fill="#fff4ea" stroke="#f58220" strokeWidth="2" />
      <rect height="56" width="72" x="330" y="178" fill="#f5f9fd" stroke="#d8e6f5" strokeWidth="2" />
      <rect height="56" width="72" x="238" y="242" fill="white" stroke="#d8e6f5" strokeWidth="2" />
      <path d="M158 152L174 168L196 138M158 224L174 240L196 210" stroke="#003466" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="444" cy="262" r="34" fill="#003466" />
      <path d="M444 238V286M420 262H468" stroke="white" strokeWidth="6" />
    </>
  );
}

function PortalIllustration() {
  return (
    <>
      <rect height="248" width="360" x="130" y="92" fill="white" stroke="#003466" strokeWidth="3" />
      <circle cx="228" cy="180" r="42" fill="#eaf4ff" stroke="#d8e6f5" strokeWidth="2" />
      <path d="M176 292C188 250 268 250 280 292" fill="#fff4ea" stroke="#f58220" strokeWidth="3" />
      <rect height="118" width="124" x="324" y="154" fill="#f5f9fd" stroke="#d8e6f5" strokeWidth="2" />
      <path d="M386 174V158C386 140 398 128 416 128C434 128 446 140 446 158V174" stroke="#003466" strokeWidth="5" />
      <rect height="72" width="102" x="365" y="174" fill="#003466" />
      <circle cx="416" cy="210" r="8" fill="white" />
      <path d="M416 218V238" stroke="white" strokeWidth="5" strokeLinecap="round" />
    </>
  );
}

function DashboardIllustration() {
  return (
    <>
      <rect height="250" width="380" x="120" y="86" fill="white" stroke="#003466" strokeWidth="3" />
      <rect height="68" width="108" x="150" y="124" fill="#eaf4ff" stroke="#d8e6f5" strokeWidth="2" />
      <rect height="68" width="108" x="282" y="124" fill="#fff4ea" stroke="#f58220" strokeWidth="2" />
      <circle cx="430" cy="158" r="34" fill="#003466" />
      <path d="M430 124V158H464" stroke="white" strokeWidth="6" />
      <rect height="94" width="36" x="160" y="222" fill="#d8e6f5" />
      <rect height="132" width="36" x="218" y="184" fill="#003466" />
      <rect height="72" width="36" x="276" y="244" fill="#f58220" />
      <path d="M348 294C380 250 402 270 438 226" stroke="#003466" strokeWidth="5" strokeLinecap="round" />
    </>
  );
}

function ApiIllustration() {
  return (
    <>
      <circle cx="160" cy="220" r="58" fill="white" stroke="#003466" strokeWidth="3" />
      <circle cx="460" cy="220" r="58" fill="#fff4ea" stroke="#f58220" strokeWidth="3" />
      <rect height="92" width="92" x="264" y="174" fill="#003466" />
      <path d="M218 220H264M356 220H402" stroke="#003466" strokeWidth="6" />
      <path d="M300 202L284 220L300 238M320 202L336 220L320 238" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="310" cy="102" r="26" fill="#eaf4ff" stroke="#d8e6f5" strokeWidth="2" />
      <path d="M310 128V174" stroke="#003466" strokeWidth="4" />
      <circle cx="310" cy="338" r="26" fill="#f5f9fd" stroke="#d8e6f5" strokeWidth="2" />
      <path d="M310 266V312" stroke="#003466" strokeWidth="4" />
    </>
  );
}

function DataIllustration() {
  return (
    <>
      <ellipse cx="216" cy="128" rx="86" ry="32" fill="#eaf4ff" stroke="#003466" strokeWidth="3" />
      <path d="M130 128V270C130 288 168 304 216 304C264 304 302 288 302 270V128" fill="#f5f9fd" stroke="#003466" strokeWidth="3" />
      <ellipse cx="216" cy="270" rx="86" ry="32" fill="white" stroke="#003466" strokeWidth="3" />
      <rect height="136" width="168" x="348" y="158" fill="white" stroke="#d8e6f5" strokeWidth="3" />
      <path d="M376 258L408 226L438 244L486 190" stroke="#f58220" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="492" cy="134" r="44" fill="#003466" />
      <path d="M512 154L542 184" stroke="#003466" strokeWidth="10" strokeLinecap="round" />
      <circle cx="492" cy="134" r="22" fill="white" />
    </>
  );
}

function WorkflowIllustration() {
  return (
    <>
      <rect height="72" width="112" x="112" y="108" fill="#eaf4ff" stroke="#003466" strokeWidth="3" />
      <rect height="72" width="112" x="254" y="184" fill="white" stroke="#003466" strokeWidth="3" />
      <rect height="72" width="112" x="396" y="260" fill="#fff4ea" stroke="#f58220" strokeWidth="3" />
      <path d="M224 144H310V184M366 220H452V260" stroke="#003466" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="310" cy="220" r="36" fill="#003466" />
      <path d="M310 194V246M284 220H336" stroke="white" strokeWidth="6" />
      <circle cx="160" cy="304" r="34" fill="#f5f9fd" stroke="#d8e6f5" strokeWidth="3" />
      <path d="M144 304L156 316L180 288" stroke="#003466" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function ModernizeIllustration() {
  return (
    <>
      <rect height="170" width="170" x="98" y="154" fill="#f5f9fd" stroke="#d8e6f5" strokeWidth="3" />
      <path d="M122 178H244M122 214H210M122 250H230" stroke="#9fb2c6" strokeWidth="8" strokeLinecap="round" />
      <path d="M280 238H346M346 238L322 214M346 238L322 262" stroke="#f58220" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <rect height="204" width="194" x="366" y="118" fill="white" stroke="#003466" strokeWidth="3" />
      <rect height="132" width="146" x="390" y="148" fill="#eaf4ff" />
      <path d="M414 238L444 208L468 226L512 178" stroke="#003466" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="474" cy="330" r="34" fill="#003466" />
      <path d="M458 330L470 342L492 316" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}
