import {
  BadgeCheck,
  Gauge,
  Handshake,
  ShieldCheck,
  TrendingUp,
  UserRoundSearch,
  WalletCards,
} from "lucide-react";

const benefits = [
  {
    title: "Flexible Team Scaling",
    description:
      "Add capacity when demand rises, then adjust when priorities change.",
    icon: TrendingUp,
  },
  {
    title: "Specialized Talent Access",
    description:
      "Bring in the exact skills your project needs without a long hiring cycle.",
    icon: UserRoundSearch,
  },
  {
    title: "Lower Hiring Costs",
    description:
      "Reduce recruiting, onboarding, training, and full-time overhead.",
    icon: WalletCards,
  },
  {
    title: "Faster Delivery",
    description:
      "Strengthen your team quickly so important work does not stall.",
    icon: Gauge,
  },
  {
    title: "Reduced Workforce Risk",
    description:
      "Get project support without unnecessary long-term payroll commitments.",
    icon: ShieldCheck,
  },
  {
    title: "Seamless Team Integration",
    description:
      "Work with professionals who fit your tools, workflow, and team rhythm.",
    icon: Handshake,
  },
];

const valueSignals = [
  {
    label: "Hiring Drag",
    value: "Lower",
  },
  {
    label: "Team Capacity",
    value: "Higher",
  },
  {
    label: "Delivery Pace",
    value: "Faster",
  },
];

export function StaffAugmentationBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 md:py-20 lg:px-[6vw]">
      <div className="mx-auto w-full max-w-[1900px]">
        <div className="grid gap-8 border-b border-[#dfe8f2] pb-8 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:pb-10">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
              <span className="size-2 bg-[#f58220]" aria-hidden="true" />
              Business Benefits
            </div>
            <h2 className="mt-7 text-[4rem] font-semibold leading-[0.9] tracking-normal text-[#003466] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem]">
              Advantage
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-2xl font-semibold leading-tight text-[#111217] sm:text-3xl lg:text-[2.2rem]">
              Build more capacity without carrying the cost, delay, and risk of
              traditional hiring.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#555555]">
              Tidewrk gives your team practical support for changing workloads,
              specialized roles, and faster delivery.
            </p>
          </div>
        </div>

        <div className="bg-[#f5f9fd]">
          <div className="grid border-x border-b border-[#dfe8f2] lg:grid-cols-[0.78fr_1.22fr]">
            <div className="border-b border-[#dfe8f2] bg-white p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="flex size-14 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                <BadgeCheck className="size-7" aria-hidden="true" />
              </div>
              <h3 className="mt-8 max-w-xl text-4xl font-semibold leading-tight text-[#111217] sm:text-5xl">
                More capacity, less hiring drag.
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#666666]">
                Add dependable professionals when the business needs momentum,
                without forcing your team through a slow hiring cycle.
              </p>
            </div>

            <div className="grid sm:grid-cols-3">
              {valueSignals.map((signal, index) => (
                <div
                  className="border-b border-[#dfe8f2] bg-[#f5f9fd] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:p-7"
                  key={signal.label}
                >
                  <span className="block text-sm font-semibold text-[#8a97a4]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-8 block text-4xl font-semibold leading-none text-[#003466] sm:text-5xl">
                    {signal.value}
                  </span>
                  <span className="mt-3 block text-base font-semibold leading-tight text-[#003466]">
                    {signal.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid border-x border-b border-[#dfe8f2] bg-white lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;

              return (
                <article
                  className="group border-b border-[#e6edf5] bg-white p-5 transition duration-300 hover:bg-[#f8fbfe] sm:p-6 lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
                  key={benefit.title}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-14 shrink-0 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466] transition duration-300 group-hover:border-[#003466] group-hover:bg-white">
                      <BenefitIcon className="size-7" aria-hidden="true" />
                    </span>
                    <div className="flex items-center gap-3 pt-4">
                      <span
                        className="h-px w-8 bg-[#003466]"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-semibold text-[#9aa6b2]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold leading-tight text-[#111217]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
