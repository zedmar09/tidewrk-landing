import { BarChart3, Gauge, SearchCheck } from "lucide-react";

const overviewPoints = [
  {
    title: "Connect the data",
    description:
      "Bring reports, spreadsheets, and system data into one clearer business view.",
    icon: SearchCheck,
  },
  {
    title: "See what matters",
    description:
      "Turn complex information into dashboards your team can understand quickly.",
    icon: BarChart3,
  },
  {
    title: "Move with confidence",
    description:
      "Track performance, spot patterns, and make decisions backed by real insight.",
    icon: Gauge,
  },
];

export function BusinessIntelligenceOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-[6vw]">
      <div className="mx-auto grid w-full max-w-[1760px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#d8e6f5] bg-[#f5f9fd] px-4 py-2 text-sm font-medium text-[#003466]">
            <span className="size-2 bg-[#f58220]" aria-hidden="true" />
            Data clarity
          </div>
          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-5xl lg:text-[3.45rem]">
            See what your business data is really telling you
          </h2>
        </div>

        <div className="border border-[#dfe5ec] bg-white p-6 sm:p-8 lg:p-10">
          <p className="text-xl font-semibold leading-8 text-[#003466] sm:text-2xl sm:leading-9">
            Business Intelligence gives your team one clear view of performance,
            trends, and opportunities.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#555555] sm:text-xl sm:leading-9">
            Tidewrk turns scattered spreadsheets, reports, and system data into
            practical dashboards leaders can use to make faster decisions with
            confidence.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 grid w-full max-w-[1760px] gap-px border border-[#dfe5ec] bg-[#dfe5ec] md:grid-cols-3 lg:mt-10">
        {overviewPoints.map((point, index) => {
          const PointIcon = point.icon;

          return (
            <article className="bg-white p-6 sm:p-7" key={point.title}>
              <div className="flex items-center justify-between gap-4">
                <span className="flex size-13 items-center justify-center border border-[#d8e6f5] bg-[#f5f9fd] text-[#003466]">
                  <PointIcon className="size-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-[#003466]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-normal text-[#111217]">
                {point.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#666666]">
                {point.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
