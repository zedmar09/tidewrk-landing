import {
  BriefcaseBusiness,
  Eye,
  LockKeyhole,
  PieChart,
  Settings2,
} from "lucide-react";

const reasons = [
  {
    title: "Experienced perspective when it matters most",
    description: "Get objective support when the right answer is not obvious.",
    icon: Eye,
  },
  {
    title: "Support across strategy and operations",
    description: "Improve planning, efficiency, technology decisions, and transformation.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Customized guidance",
    description: "Shape advisory support around your goals, constraints, and timing.",
    icon: Settings2,
  },
  {
    title: "Practical outcomes",
    description: "Move from discussion to actions that can be measured and improved.",
    icon: PieChart,
  },
  {
    title: "Confidential leadership support",
    description: "Create a trusted space to test ideas and make decisions clearly.",
    icon: LockKeyhole,
  },
];

export function ExecutiveAdvisoryWhySection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="mx-auto grid w-full max-w-[1900px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Why advisory
          </div>
          <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            The right perspective can change the next move
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            A fresh perspective and a trusted strategic partner can help
            leaders improve efficiency, accelerate innovation, and move through
            uncertainty with less noise.
          </p>
        </div>

        <div className="border-y border-[#dfe5ec] bg-white">
          {reasons.map((reason, index) => {
            const ReasonIcon = reason.icon;

            return (
              <article
                className="grid gap-5 border-b border-[#dfe5ec] p-5 last:border-b-0 sm:grid-cols-[auto_1fr] sm:p-6"
                key={reason.title}
              >
                <span className="flex size-14 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                  <ReasonIcon className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <p className={index === 1 ? "text-sm font-semibold text-[#f58220]" : "text-sm font-semibold text-[#003466]"}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-[#111217]">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#666666] sm:text-lg">
                    {reason.description}
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
