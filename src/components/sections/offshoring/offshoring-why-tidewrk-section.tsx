import {
  BadgeCheck,
  ClipboardCheck,
  MessageSquareText,
  PlugZap,
  UserCheck,
} from "lucide-react";

const trustPoints = [
  {
    title: "Role alignment",
    description: "We help define the work, skills, and expectations before the team is placed.",
    icon: UserCheck,
  },
  {
    title: "Smooth onboarding",
    description: "Offshore professionals are aligned to your tools, cadence, and ways of working.",
    icon: ClipboardCheck,
  },
  {
    title: "Clear communication",
    description: "Teams work with practical routines that support visibility, feedback, and accountability.",
    icon: MessageSquareText,
  },
  {
    title: "Workflow fit",
    description: "Support is shaped around your existing processes instead of forcing rigid templates.",
    icon: PlugZap,
  },
  {
    title: "Long-term reliability",
    description: "Tidewrk focuses on offshore support that can grow with your business priorities.",
    icon: BadgeCheck,
  },
];

export function OffshoringWhyTidewrkSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbfcfd] px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="mx-auto grid w-full max-w-[1900px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Why Tidewrk
          </div>
          <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            Offshore teams that feel connected, not separate
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            Offshoring works best when the team understands your priorities,
            communicates clearly, and fits the way your business already moves.
          </p>

          <div className="mt-8 border border-[#dfe5ec] bg-white p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003466]">
              Tidewrk focus
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {["Talent", "Workflow", "Continuity"].map((item, index) => (
                <div className="border border-[#edf0f3] p-4" key={item}>
                  <span className="text-sm font-semibold text-[#f58220]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 text-lg font-semibold text-[#111217]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-y border-[#dfe5ec] bg-white">
          {trustPoints.map((point, index) => {
            const PointIcon = point.icon;

            return (
              <article
                className="grid gap-5 border-b border-[#dfe5ec] p-5 last:border-b-0 sm:grid-cols-[auto_1fr] sm:p-6"
                key={point.title}
              >
                <span className="flex size-14 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                  <PointIcon className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#003466]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-[#111217]">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#666666] sm:text-lg">
                    {point.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
