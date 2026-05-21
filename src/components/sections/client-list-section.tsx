"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const clients = [
  {
    className: "h-7 w-auto",
    description: "Figma",
    id: "figma",
    image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
  },
  {
    className: "h-7 w-auto",
    description: "Next.js",
    id: "nextjs",
    image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
  },
  {
    className: "h-7 w-auto",
    description: "Supabase",
    id: "supabase",
    image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
  },
  {
    className: "h-7 w-auto",
    description: "Vercel",
    id: "vercel",
    image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
  },
];

export function ClientListSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-white px-[4vw] py-0">
      <div className="relative mx-auto h-[58px] w-full max-w-7xl overflow-hidden">
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={30}
          gap={48}
        >
          {clients.map((client) => (
            <div
              className="flex w-36 items-center justify-center opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              key={client.id}
            >
              <div
                aria-label={client.description}
                className={client.className}
                role="img"
                style={{
                  WebkitMaskImage: `url(${client.image})`,
                  WebkitMaskPosition: "center",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  backgroundColor: "#003466",
                  maskImage: `url(${client.image})`,
                  maskPosition: "center",
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                }}
              />
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-40"
          blurIntensity={1}
          direction="left"
        />
        <ProgressiveBlur
          className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-40"
          blurIntensity={1}
          direction="right"
        />
      </div>
    </section>
  );
}
