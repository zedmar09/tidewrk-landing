import {
  BadgeCheck,
  Brain,
  Compass,
  Lightbulb,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const benefits = [
  {
    title: "Clearer decision-making",
    description: "Evaluate options, reduce uncertainty, and make confident calls.",
    icon: Brain,
  },
  {
    title: "Stronger strategic planning",
    description: "Align priorities around measurable goals and practical growth plans.",
    icon: Compass,
  },
  {
    title: "Reduced business risk",
    description: "Identify blind spots, gaps, and risks before they become costly.",
    icon: ShieldCheck,
  },
  {
    title: "Better leadership alignment",
    description: "Improve communication, accountability, and decision flow.",
    icon: UsersRound,
  },
  {
    title: "Smoother transformation",
    description: "Navigate expansion, restructuring, technology, or process change.",
    icon: BadgeCheck,
  },
  {
    title: "Fresh perspective",
    description: "Challenge assumptions and uncover new opportunities for progress.",
    icon: Lightbulb,
  },
];

export function ExecutiveAdvisoryBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] px-5 py-12 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1900px]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-white px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Leadership advantage
          </div>
          <h2 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
            Support for decisions that shape the business
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            Advisory support helps leaders think clearly, reduce friction, and
            move from discussion to measurable progress.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const BenefitIcon = benefit.icon;

            return (
              <article
                className="border border-[#dfe5ec] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ccd8e4]"
                key={benefit.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-14 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                    <BenefitIcon className="size-7" aria-hidden="true" />
                  </span>
                  <span className={index === 1 ? "text-sm font-semibold text-[#f58220]" : "text-sm font-semibold text-[#003466]"}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-tight text-[#111217]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#666666]">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
