import type { ReactNode } from "react";
import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  FlaskConical,
  Palette,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const features = [
  {
    title: "Full-Stack Dev Team",
    description:
      "Experts in front-end, back-end, and database technologies, bringing your vision to life.",
    icon: Code2,
  },
  {
    title: "Business Intelligence",
    description:
      "Unlocking the power of your data to gain valuable business insights.",
    icon: BarChart3,
  },
  {
    title: "Data Science",
    description:
      "Leveraging data to solve complex problems and drive innovation.",
    icon: FlaskConical,
  },
  {
    title: "Data Engineering",
    description:
      "Building robust and scalable data infrastructure for your organization.",
    icon: Database,
  },
  {
    title: "UX/UI Design",
    description:
      "Designing intuitive and enjoyable user experiences for your digital products.",
    icon: Palette,
  },
  {
    title: "Machine Learning",
    description:
      "Harnessing the power of AI to automate tasks and gain a competitive edge.",
    icon: BrainCircuit,
  },
  {
    title: "Mobile App Development",
    description:
      "Creating engaging and user-friendly mobile apps for your business.",
    icon: Smartphone,
  },
  {
    title: "QA Testing & Engineering",
    description:
      "Ensuring the quality and reliability of your software through expert testing.",
    icon: ShieldCheck,
  },
  {
    title: "Virtual Assistance / Business Administrations",
    description:
      "Enhancing operational efficiency and effectiveness through skilled virtual assistance.",
    icon: BriefcaseBusiness,
  },
];

export function Features() {
  return (
    <section
      className="relative overflow-hidden bg-white py-14 md:py-24"
      id="services"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-[#f7f8fa]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-[#f7f8fa]" />
      <div className="absolute inset-x-0 top-32 bottom-32 bg-[#f7f8fa]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <div className="mb-5 inline-flex rounded-full border border-[#dedfe6] bg-white/74 px-4 py-2 text-sm font-normal text-[#666666] shadow-[0_10px_36px_rgba(0,52,102,0.06)]">
            Our Services
          </div>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-4xl lg:text-5xl">
            Built to cover your needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#666666] sm:text-lg">
            Tidewrk brings talent, technology, and advisory support together so
            teams can solve problems without adding operational drag.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-sm gap-5 sm:max-w-md md:mt-14 md:max-w-full md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                className="group flex h-full flex-col text-center shadow-[0_18px_60px_rgba(0,52,102,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#003466] hover:bg-[#003466] hover:shadow-[0_24px_70px_rgba(0,52,102,0.18)]"
                key={feature.title}
              >
                <CardHeader className="pb-3 px-5 sm:px-6">
                  <CardDecorator>
                    <Icon
                      aria-hidden
                      className="size-6 text-[#003466] transition-colors duration-300 group-hover:text-white"
                    />
                  </CardDecorator>

                  <h3 className="mt-6 text-pretty text-lg font-medium text-[#111217] transition-colors duration-300 group-hover:text-white">
                    {feature.title}
                  </h3>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col items-center px-5 sm:px-6">
                  <p className="text-sm leading-6 text-[#666666] transition-colors duration-300 group-hover:text-white/82">
                    {feature.description}
                  </p>
                  <a
                    className="mt-auto inline-flex pt-6 text-sm font-semibold text-[#003466] transition-colors duration-300 hover:text-[#00284f] group-hover:text-white group-hover:hover:text-white/86"
                    href="#contact"
                  >
                    Read More
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#003466_1px,transparent_1px),linear-gradient(to_bottom,#003466_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 transition-opacity duration-300 group-hover:opacity-25 group-hover:invert" />
    <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t border-[#d6dce3] bg-white transition-colors duration-300 group-hover:border-white/30 group-hover:bg-white/12">
      {children}
    </div>
  </div>
);
