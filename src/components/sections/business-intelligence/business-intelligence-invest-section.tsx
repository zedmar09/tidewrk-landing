import {
  ArrowRight,
  BarChart3,
  Database,
  Eye,
  Gauge,
  LineChart,
  Target,
} from "lucide-react";
import type { ComponentType } from "react";

const valuePoints = [
  "See what needs attention",
  "Find the next opportunity",
  "Move with more confidence",
];

export function BusinessIntelligenceInvestSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="mx-auto grid w-full max-w-[1900px] gap-10 border-y border-[#d8e6f5] py-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-14 lg:py-14">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Why invest
          </div>
          <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            Turn everyday data into a business advantage
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            Your business already creates valuable data every day. Tidewrk helps
            turn that information into clearer decisions, sharper priorities,
            and better visibility across performance, customers, and operations.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-3xl">
            {valuePoints.map((point) => (
              <div
                className="flex min-h-24 items-start gap-3 border border-[#dfe5ec] bg-white p-4"
                key={point}
              >
                <span className="mt-1 size-2 shrink-0 bg-[#f58220]" aria-hidden="true" />
                <span className="text-base font-semibold leading-6 text-[#003466]">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        <BusinessIntelligenceInvestGraphic />
      </div>
    </section>
  );
}

function BusinessIntelligenceInvestGraphic() {
  return (
    <div
      className="relative min-h-[390px] overflow-hidden border border-[#dfe5ec] bg-white p-4 sm:p-6 lg:min-h-[470px]"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.035)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="absolute right-6 top-6 size-3 bg-[#f58220]" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 size-2 bg-[#f58220]" aria-hidden="true" />

      <div className="relative grid h-full min-h-[350px] gap-4 sm:grid-cols-[0.86fr_1.14fr] lg:min-h-[420px]">
        <div className="flex flex-col justify-between gap-4">
          <DataSourceCard />
          <InsightCard />
        </div>

        <div className="relative flex min-h-[320px] flex-col justify-center">
          <div className="absolute left-0 top-1/2 hidden h-px w-16 bg-[#003466]/45 sm:block" />
          <div className="absolute left-16 top-1/2 hidden -translate-y-1/2 text-[#003466] sm:block">
            <ArrowRight className="size-5" aria-hidden="true" />
          </div>
          <DashboardCard />
        </div>
      </div>
    </div>
  );
}

function DataSourceCard() {
  return (
    <div className="relative border border-[#dfe5ec] bg-white p-5 shadow-[0_18px_70px_rgba(0,52,102,0.08)]">
      <div className="flex items-center justify-between gap-4">
        <div className="grid flex-1 gap-3">
          <span className="h-2 w-24 bg-[#dfe8f2]" />
          <span className="h-4 w-32 bg-[#003466]" />
          <span className="h-4 w-20 bg-[#e8eef5]" />
        </div>
        <span className="flex size-12 items-center justify-center border border-[#d8e6f5] bg-[#f7fbff] text-[#003466]">
          <Database className="size-6" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-6 grid gap-2">
        {[74, 48, 62, 86].map((width, index) => (
          <span
            className="h-2 bg-[#e8eef5]"
            key={width}
            style={{ width: `${width}%` }}
          >
            <span
              className="block h-full bg-[#003466]"
              style={{ width: `${32 + index * 14}%` }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

function InsightCard() {
  return (
    <div className="relative border border-[#dfe5ec] bg-[#fbfcfd] p-5">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center border border-[#f4d0ad] bg-[#fff8f2] text-[#f58220]">
          <Eye className="size-5" aria-hidden="true" />
        </span>
        <div className="grid flex-1 gap-2">
          <span className="h-2 w-28 bg-[#dfe8f2]" />
          <span className="h-4 w-36 bg-[#003466]" />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2">
        <SignalTile icon={BarChart3} />
        <SignalTile icon={Gauge} />
        <SignalTile icon={Target} />
      </div>
    </div>
  );
}

function DashboardCard() {
  return (
    <div className="relative z-10 ml-0 border border-[#dfe5ec] bg-white p-5 shadow-[0_22px_80px_rgba(0,52,102,0.1)] sm:ml-12 lg:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#e6edf4] pb-5">
        <div className="grid flex-1 gap-3">
          <span className="h-2 w-28 bg-[#dfe8f2]" />
          <span className="h-5 w-48 max-w-full bg-[#003466]" />
          <span className="h-5 w-32 bg-[#e8eef5]" />
        </div>
        <span className="flex size-12 items-center justify-center border border-[#d8e6f5] bg-[#f7fbff] text-[#003466]">
          <Gauge className="size-6" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-[#e4eaf1] bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="h-3 w-24 bg-[#dfe8f2]" />
            <LineChart className="size-5 text-[#f58220]" aria-hidden="true" />
          </div>
          <div className="flex h-32 items-end gap-2">
            {[34, 58, 44, 72, 62, 86, 76].map((height) => (
              <span className="flex-1 bg-[#dce8f4]" key={height}>
                <span
                  className="block w-full bg-[#003466]"
                  style={{ height: `${height}%` }}
                />
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <DecisionSignal icon={Target} />
          <DecisionSignal icon={BarChart3} />
          <DecisionSignal icon={Eye} />
        </div>
      </div>
    </div>
  );
}

function SignalTile({ icon: Icon }: { icon: ComponentType<{ className?: string }> }) {
  return (
    <div className="flex min-h-20 flex-col justify-between border border-[#e4eaf1] bg-white p-3">
      <Icon className="size-5 text-[#003466]" aria-hidden="true" />
      <span className="h-2 w-3/4 bg-[#dfe8f2]" />
      <span className="h-2 w-1/2 bg-[#f4d0ad]" />
    </div>
  );
}

function DecisionSignal({
  icon: Icon,
}: {
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex items-center gap-3 border border-[#e4eaf1] bg-[#fbfcfd] p-3">
      <span className="flex size-10 shrink-0 items-center justify-center border border-[#d8e6f5] bg-white text-[#003466]">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="grid flex-1 gap-2">
        <span className="h-2 w-3/4 bg-[#dfe8f2]" />
        <span className="h-3 w-1/2 bg-[#003466]" />
      </div>
    </div>
  );
}
