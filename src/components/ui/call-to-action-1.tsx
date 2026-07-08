import { ArrowRight } from "lucide-react";
import {
  SiLaravel,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const techLogos = [
  { icon: SiReact, label: "React" },
  { icon: SiPython, label: "Python" },
  { icon: SiLaravel, label: "Laravel" },
  { icon: SiTypescript, label: "TypeScript" },
];

export function CallToAction1() {
  return (
    <section className="bg-white px-[4vw] py-16 md:py-24">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#003466_0%,#001b35_100%)] px-5 py-16 text-center text-white shadow-[0_30px_90px_rgba(0,52,102,0.18)] sm:px-8 md:py-20 lg:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.22),transparent_38%),radial-gradient(circle_at_12%_85%,rgba(84,155,216,0.28),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35 [mask-image:radial-gradient(ellipse_at_center,white,transparent_72%)]" />

        <div className="relative z-10 flex items-center -space-x-5">
          {techLogos.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                aria-label={tech.label}
                className="flex size-14 items-center justify-center rounded-full border-4 border-white bg-white text-[#003466] shadow-lg sm:size-16"
                key={tech.label}
                role="img"
                style={{ zIndex: index + 1 }}
              >
                <Icon className="size-7 sm:size-8" />
              </div>
            );
          })}
        </div>

        <div className="relative z-10 mt-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur">
          Software Development
        </div>

        <h2 className="relative z-10 mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          Ready to Build Smarter Software?
        </h2>

        <p className="relative z-10 mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
          Whether you need a new platform, a dedicated development team, or
          support improving an existing system, Tidewrk can help you move from
          idea to execution with clarity and confidence.
        </p>

        <a
          href="/contact"
          className="relative z-10 mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#003466] shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/92 sm:w-auto sm:px-12"
        >
          Start a Conversation
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
