import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Braces,
  CheckCircle2,
  Code2,
  Database,
  PlugZap,
  Server,
  ShieldCheck,
} from "lucide-react";

const capabilityChips = [
  "UX and interface",
  "Front-end and back-end",
  "Data and APIs",
  "Testing",
];

const supportChips = [
  "Less handoff drag",
  "Faster decisions",
  "Cleaner launch path",
  "Scalable systems",
];

export function FullStackDevelopmentTeamOverviewSection() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-18 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1760px]">
        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-[3.4rem]">
            One team to build the product your business needs
          </h2>

          <p className="max-w-3xl text-lg leading-8 text-[#4f5a64] sm:text-xl sm:leading-9">
            Tidewrk brings the right product, design, engineering, data, and
            launch support together so your idea can move forward with less
            coordination drag.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
          <FullStackVisual variant="product" />

          <OverviewCopy
            eyebrow="Complete product build"
            title="One team covers the full product"
            description="Planning, design, development, data, integrations, testing, and launch stay connected from the start."
            chips={capabilityChips}
          />

          <OverviewCopy
            eyebrow="Business-ready delivery"
            title="Fewer gaps from idea to launch"
            description="Move faster with fewer handoff issues and a smoother path from idea to launch."
            chips={supportChips}
          />

          <FullStackVisual variant="delivery" />
        </div>
      </div>
    </section>
  );
}

function OverviewCopy({
  eyebrow,
  title,
  description,
  chips,
}: {
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
}) {
  return (
    <div className="flex min-h-[330px] flex-col justify-center">
      <div className="inline-flex w-fit items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
        <span className="size-2 bg-[#f58220]" aria-hidden="true" />
        {eyebrow}
      </div>

      <h3 className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-4xl">
        {title}
      </h3>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#555555]">
        {description}
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        {chips.map((chip) => (
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
  );
}

function FullStackVisual({ variant }: { variant: "product" | "delivery" }) {
  const isProduct = variant === "product";

  return (
    <div className="relative min-h-[330px] overflow-hidden border border-[#e6edf5] bg-[#fbfcfd] p-7 sm:min-h-[360px] sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,52,102,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,52,102,0.045)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 bg-[#fff4ea]" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 bg-[#f5f9fd]" />

      {isProduct ? <ProductBuildGraphic /> : <DeliveryPathGraphic />}
    </div>
  );
}

function ProductBuildGraphic() {
  return (
    <div className="relative h-full min-h-[280px]">
      <FloatingPanel className="left-3 top-8 w-[250px] sm:left-8 sm:w-[290px]">
        <div className="flex items-center justify-between border-b border-[#e6edf5] px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-[#111217]">
              Product layers
            </p>
            <p className="mt-1 text-xs text-[#78828d]">Built together</p>
          </div>
          <IconBox icon={Code2} filled />
        </div>
        <div className="grid grid-cols-2 gap-3 p-5">
          <LayerTile icon={Braces} label="UX" />
          <LayerTile icon={Code2} label="FE" tone="blue" />
          <LayerTile icon={Server} label="BE" />
          <LayerTile icon={Database} label="DB" tone="orange" />
        </div>
      </FloatingPanel>

      <FloatingPanel className="bottom-6 right-2 w-[250px] sm:right-8 sm:w-[290px]">
        <div className="p-5">
          <div className="flex items-center gap-4">
            <IconBox icon={PlugZap} />
            <div>
              <p className="text-sm font-semibold text-[#111217]">
                Connected systems
              </p>
              <p className="mt-1 text-xs text-[#78828d]">
                APIs, workflows, integrations
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <span className="h-2 flex-1 bg-[#003466]" />
            <span className="h-2 flex-1 bg-[#d8e6f5]" />
            <span className="h-2 flex-1 bg-[#f58220]" />
          </div>
        </div>
      </FloatingPanel>
    </div>
  );
}

function DeliveryPathGraphic() {
  return (
    <div className="relative h-full min-h-[280px]">
      <FloatingPanel className="right-4 top-6 w-[280px] sm:right-10 sm:w-[320px]">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#111217]">
              Delivery path
            </span>
            <span className="border border-[#d8e6f5] bg-white px-3 py-2 text-xs font-semibold text-[#003466]">
              Ready to ship
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <PathRow label="Plan" />
            <PathRow label="Build" accent />
            <PathRow label="Test" />
            <PathRow label="Launch" />
          </div>
        </div>
      </FloatingPanel>

      <FloatingPanel className="bottom-7 left-3 w-[260px] sm:left-8 sm:w-[300px]">
        <div className="p-5">
          <div className="flex items-center gap-4">
            <IconBox icon={ShieldCheck} />
            <div>
              <p className="text-sm font-semibold text-[#111217]">
                Quality checks
              </p>
              <p className="mt-1 text-xs text-[#78828d]">
                Reliable before release
              </p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-4 gap-2">
            <span className="h-12 border border-[#d8e6f5] bg-[#eaf4ff]" />
            <span className="h-12 border border-[#d8e6f5] bg-white" />
            <span className="h-12 border border-[#d8e6f5] bg-[#fff4ea]" />
            <span className="h-12 border border-[#d8e6f5] bg-white" />
          </div>
        </div>
      </FloatingPanel>
    </div>
  );
}

function FloatingPanel({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div
      className={`absolute overflow-hidden border border-[#d8e6f5] bg-white shadow-[0_24px_70px_rgba(0,52,102,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}

function IconBox({
  icon: Icon,
  filled = false,
}: {
  icon: LucideIcon;
  filled?: boolean;
}) {
  return (
    <span
      className={`flex size-12 items-center justify-center border border-[#d8e6f5] ${
        filled ? "bg-[#003466] text-white" : "bg-[#f5f9fd] text-[#003466]"
      }`}
    >
      <Icon className="size-5" aria-hidden="true" />
    </span>
  );
}

function LayerTile({
  icon: Icon,
  label,
  tone = "light",
}: {
  icon: LucideIcon;
  label: string;
  tone?: "light" | "blue" | "orange";
}) {
  const toneClass = {
    light: "bg-white text-[#003466]",
    blue: "bg-[#eaf4ff] text-[#003466]",
    orange: "bg-[#fff4ea] text-[#f58220]",
  }[tone];

  return (
    <div
      className={`flex h-20 flex-col items-center justify-center gap-2 border border-[#d8e6f5] ${toneClass}`}
    >
      <Icon className="size-5" aria-hidden="true" />
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}

function PathRow({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`size-3 ${accent ? "bg-[#f58220]" : "bg-[#003466]"}`}
      />
      <span className="h-px flex-1 bg-[#d8e6f5]" />
      <span className="w-14 text-right text-sm font-semibold text-[#003466]">
        {label}
      </span>
    </div>
  );
}
