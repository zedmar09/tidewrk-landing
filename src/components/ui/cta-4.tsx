import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

const defaultItems = [
  "Vendor collaboration",
  "Workflow automation",
  "System modernization",
  "Emerging technology adoption",
  "Scalable delivery support",
];

export const Cta4 = ({
  title = "Modernize the way your business moves",
  description = "Tidewrk helps businesses improve how teams, vendors, systems, and technology work together so they can move faster with less friction.",
  buttonText = "Contact Us",
  buttonUrl = "#contact",
  items = defaultItems,
}: Cta4Props) => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-[#f7f8fa]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-[#f7f8fa]" />
      <div className="absolute inset-x-0 top-32 bottom-32 bg-[#f7f8fa]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="flex flex-col items-center justify-between gap-8 rounded-lg border border-[#e2e6eb] bg-white px-6 py-10 shadow-[0_24px_80px_rgba(0,52,102,0.08)] md:flex-row lg:px-16 lg:py-14">
              <div className="md:w-1/2">
                <h2 className="mb-3 text-balance text-3xl font-semibold leading-tight text-[#111217] md:text-4xl">
                  {title}
                </h2>
                <p className="text-base leading-8 text-[#666666]">
                  {description}
                </p>
                <div className="mt-7 flex justify-start">
                  <Button asChild>
                    <a href={buttonUrl}>
                      {buttonText}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex md:w-1/3 md:justify-center">
                <ul className="flex flex-col space-y-3 text-sm font-medium text-[#333333]">
                  {items.map((item) => (
                    <li className="flex items-center" key={item}>
                      <span className="mr-4 flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-[#003466]/10 text-[#003466]">
                        <Check className="size-4" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
