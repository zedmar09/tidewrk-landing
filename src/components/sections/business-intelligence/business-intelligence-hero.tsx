import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
} from "lucide-react";

export function BusinessIntelligenceHero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-white px-5 pt-[4.75rem] sm:px-8 sm:pt-20 lg:px-[6vw]"
      id="business-intelligence"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.052)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.96),rgba(255,255,255,0.82)_46%,rgba(255,255,255,0.94)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.75rem)] w-full max-w-[1900px] flex-col justify-between gap-9 py-8 text-center sm:gap-12 sm:py-10">
        <div className="mx-auto w-full min-w-0 max-w-5xl">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2.5 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Business Intelligence
          </div>

          <h1 className="mx-auto mt-5 max-w-5xl text-balance text-4xl font-semibold leading-[1.08] tracking-normal text-[#111217] sm:text-5xl sm:leading-[1.04] lg:text-[4.25rem] lg:leading-[1.02] xl:text-[4.45rem]">
            Turn data into decisions your team can act on
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9 md:text-lg md:leading-8 lg:text-xl lg:leading-9">
            Tidewrk helps businesses bring scattered sales, finance,
            operations, and customer data into clear dashboards and reports so
            leaders can see performance, spot opportunities, and move with
            confidence.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:mt-6 lg:mt-7">
            <Link
              className="inline-flex h-14 w-full items-center justify-center gap-2 bg-[#003466] px-8 text-lg font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0a447a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/30 sm:w-auto"
              href="/contact"
            >
              Talk to Tidewrk
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex h-14 w-full items-center justify-center gap-2 border border-[#d8e6f5] bg-white px-8 text-lg font-semibold text-[#003466] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5f9fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466]/30 sm:w-auto"
              href="/#services"
            >
              Explore Services
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>

        </div>

        <BusinessIntelligenceHeroGraphics />
      </div>
    </section>
  );
}

function BusinessIntelligenceHeroGraphics() {
  return (
    <div className="relative mx-auto mt-5 w-full max-w-[1640px] sm:mt-7 lg:mt-12">
      <div className="pointer-events-none absolute inset-x-[-10vw] bottom-0 z-30 h-24 bg-gradient-to-t from-white via-white/70 to-transparent md:h-32" />

      <div className="relative mx-auto hidden h-[230px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)] md:block xl:hidden">
        <div className="absolute left-1/2 top-0 flex w-[1160px] -translate-x-1/2 items-start gap-4">
          <DashboardCard className="w-[210px] shrink-0 p-4">
            <CardHeading icon={BarChart3} compact />
            <MiniBars compact />
          </DashboardCard>

          <DashboardCard className="w-[260px] shrink-0 p-4">
            <CardHeading icon={LineChart} compact />
            <CandleChart compact />
          </DashboardCard>

          <DashboardCard className="w-[360px] shrink-0 border-[#c8dff4] p-4">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#003466]">
                Reports view
              </p>
              <div className="grid w-28 grid-cols-2 gap-2">
                <VisualMetric compact />
                <VisualMetric compact tone="orange" />
              </div>
            </div>
            <AreaChart compact />
          </DashboardCard>

          <DashboardCard className="w-[230px] shrink-0 p-4">
            <CardHeading icon={PieChart} compact />
            <SegmentChart compact />
          </DashboardCard>

          <DashboardCard className="w-[230px] shrink-0 p-4">
            <CardHeading icon={TrendingUp} compact />
            <MiniLine compact />
          </DashboardCard>
        </div>
      </div>

      <div className="relative mx-auto hidden h-[270px] w-[calc(100%+240px)] -translate-x-[120px] items-end justify-center [mask-image:linear-gradient(to_bottom,black_0%,black_72%,rgba(0,0,0,0.76)_88%,transparent_100%)] xl:flex xl:h-[300px]">
        <DashboardCard className="absolute bottom-2 left-0 w-[280px] opacity-80 lg:w-[330px]">
          <CardHeading icon={BarChart3} />
          <MiniBars />
          <VisualMetric />
        </DashboardCard>

        <DashboardCard className="absolute bottom-10 left-[16%] w-[300px] opacity-90 lg:w-[360px]">
          <CardHeading icon={LineChart} />
          <CandleChart />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <VisualMetric />
            <VisualMetric tone="orange" />
            <VisualMetric />
          </div>
        </DashboardCard>

        <DashboardCard className="relative z-10 mb-0 w-[560px] border-[#c8dff4] p-6 lg:w-[690px]">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#003466]">
                Reports view
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <VisualMetric />
              <VisualMetric tone="orange" />
            </div>
          </div>

          <AreaChart />

          <div className="mt-5 grid grid-cols-3 gap-3">
            <ProgressLine value="82%" />
            <ProgressLine value="74%" tone="orange" />
            <ProgressLine value="91%" />
          </div>
        </DashboardCard>

        <DashboardCard className="absolute bottom-12 right-[15%] w-[310px] opacity-90 lg:w-[370px]">
          <CardHeading icon={PieChart} />
          <SegmentChart />
          <div className="mt-4 grid grid-cols-2 gap-3">
            <VisualMetric />
            <VisualMetric tone="orange" />
          </div>
        </DashboardCard>

        <DashboardCard className="absolute bottom-2 right-0 w-[280px] opacity-80 lg:w-[330px]">
          <CardHeading icon={TrendingUp} />
          <MiniLine />
          <VisualMetric tone="orange" />
        </DashboardCard>
      </div>

      <div className="relative h-[220px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)] md:hidden">
        <div className="absolute left-1/2 top-0 flex w-[760px] -translate-x-[42%] items-start gap-3">
          <DashboardCard className="w-[145px] shrink-0 p-3">
            <CardHeading icon={BarChart3} compact />
            <MiniBars compact />
          </DashboardCard>

          <DashboardCard className="w-[185px] shrink-0 border-[#c8dff4] p-3">
            <CardHeading icon={LineChart} label="Reports view" />
            <AreaChart compact />
          </DashboardCard>

          <DashboardCard className="w-[145px] shrink-0 p-3">
            <CardHeading icon={PieChart} compact />
            <SegmentChart compact />
          </DashboardCard>

          <DashboardCard className="w-[145px] shrink-0 p-3">
            <CardHeading icon={TrendingUp} compact />
            <MiniLine compact />
          </DashboardCard>

          <DashboardCard className="w-[145px] shrink-0 p-3">
            <CardHeading icon={LineChart} compact />
            <CandleChart compact />
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border border-[#d8e6f5] bg-white p-5 ${className}`}>
      {children}
    </div>
  );
}

function CardHeading({
  compact = false,
  icon: Icon,
  label,
}: {
  compact?: boolean;
  icon: typeof BarChart3;
  label?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      {label ? <p className="text-sm font-semibold text-[#111217]">{label}</p> : <span />}
      <span
        className={`flex items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466] ${
          compact ? "size-9" : "size-11"
        }`}
      >
        <Icon className={compact ? "size-4" : "size-5"} aria-hidden="true" />
      </span>
    </div>
  );
}

function VisualMetric({
  compact = false,
  tone = "blue",
}: {
  compact?: boolean;
  tone?: "blue" | "orange";
}) {
  return (
    <div className={`border border-[#d8e6f5] bg-[#fbfcfd] ${compact ? "p-2" : "p-3"}`}>
      <span
        className={
          tone === "orange"
            ? `${compact ? "h-2 w-7" : "h-3 w-10"} block bg-[#f58220]`
            : `${compact ? "h-2 w-8" : "h-3 w-12"} block bg-[#003466]`
        }
      />
      <span className={`${compact ? "mt-1 h-1.5" : "mt-2 h-2"} block w-full bg-[#eaf1f8]`} />
    </div>
  );
}

function MiniBars({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex items-end border border-[#e6edf5] bg-[#fbfcfd] ${
        compact ? "mt-3 h-24 gap-2 p-3" : "mt-5 h-28 gap-3 p-4"
      }`}
    >
      {[42, 58, 38, 74, 62, 86, 54].map((height, index) => (
        <span
          className={index === 4 ? "w-full bg-[#f58220]" : "w-full bg-[#003466]"}
          key={`${height}-${index}`}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function CandleChart({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`grid grid-cols-6 items-end border border-[#e6edf5] bg-[#fbfcfd] ${
        compact ? "mt-3 h-24 gap-2 p-3" : "mt-5 h-28 gap-4 p-4"
      }`}
    >
      {[74, 48, 82, 56, 68, 44].map((height, index) => (
        <span
          className="relative mx-auto block h-full w-px bg-[#d8e6f5]"
          key={`${height}-${index}`}
        >
          <span
            className={index % 2 === 0 ? "absolute left-1/2 w-2 -translate-x-1/2 bg-[#003466]" : "absolute left-1/2 w-2 -translate-x-1/2 bg-[#f58220]"}
            style={{ bottom: `${100 - height}%`, height: `${height / 2}%` }}
          />
        </span>
      ))}
    </div>
  );
}

function AreaChart({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={compact ? "mt-5 h-40 w-full" : "mt-6 h-32 w-full"}
      fill="none"
      viewBox="0 0 620 180"
    >
      <path d="M0 148H620" stroke="#d8e6f5" />
      <path d="M0 104H620" stroke="#edf3f8" />
      <path d="M0 60H620" stroke="#edf3f8" />
      <path
        d="M0 138C52 114 76 120 118 88C162 55 196 82 232 70C284 52 306 20 360 48C420 79 440 132 492 92C548 48 574 62 620 28V180H0V138Z"
        fill="url(#biAreaGradient)"
      />
      <path
        d="M0 138C52 114 76 120 118 88C162 55 196 82 232 70C284 52 306 20 360 48C420 79 440 132 492 92C548 48 574 62 620 28"
        stroke="#003466"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <circle cx="360" cy="48" fill="#f58220" r="8" />
      <defs>
        <linearGradient id="biAreaGradient" x1="310" x2="310" y1="28" y2="180">
          <stop stopColor="#d7ebff" />
          <stop offset="1" stopColor="#f4fbff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SegmentChart({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`grid grid-cols-[0.8fr_1.2fr] ${
        compact ? "mt-3 gap-3" : "mt-5 gap-4"
      }`}
    >
      <div className="relative aspect-square border border-[#d8e6f5] bg-[#f5f9fd]">
        <span className={compact ? "absolute inset-3 bg-[#003466]" : "absolute inset-5 bg-[#003466]"} />
        <span className={compact ? "absolute bottom-3 right-3 size-8 bg-[#f58220]" : "absolute bottom-5 right-5 size-12 bg-[#f58220]"} />
      </div>
      <div className={compact ? "space-y-2" : "space-y-3"}>
        <ProgressLine value="68%" />
        <ProgressLine value="52%" tone="orange" />
        <ProgressLine value="76%" />
      </div>
    </div>
  );
}

function MiniLine({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`w-full border border-[#e6edf5] bg-[#fbfcfd] ${
        compact ? "mt-3 h-20" : "mt-5 h-28"
      }`}
      fill="none"
      viewBox="0 0 260 120"
    >
      <path d="M20 86C46 40 74 78 102 54C134 26 150 68 178 48C210 24 224 38 240 20" stroke="#003466" strokeLinecap="round" strokeWidth="6" />
      <path d="M20 98H240" stroke="#d8e6f5" />
      <circle cx="178" cy="48" fill="#f58220" r="7" />
    </svg>
  );
}

function ProgressLine({
  tone = "blue",
  value,
}: {
  tone?: "blue" | "orange";
  value: string;
}) {
  return (
    <div>
      <div className="h-2 bg-[#eaf1f8]">
        <span
          className={tone === "orange" ? "block h-full bg-[#f58220]" : "block h-full bg-[#003466]"}
          style={{ width: value }}
        />
      </div>
    </div>
  );
}
