import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { cn } from "@/lib/utils";

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];

export function TrustedBySection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-1/2 left-1/2 -z-0 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-b-full",
          "bg-[radial-gradient(ellipse_at_center,rgba(0,52,102,0.08),transparent_50%)]",
          "blur-[30px]",
        )}
      />

      <div className="relative mx-auto max-w-7xl">
        <h2 className="mx-auto mb-5 max-w-3xl text-center text-xl font-medium tracking-normal text-[#666666] md:text-3xl">
          Trusted by experts.
          <br />
          <span className="font-semibold text-[#111217]">
            Used by the leaders.
          </span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-4xl bg-[#d9dde3] [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud className="mx-auto max-w-7xl" logos={logos} />

        <div className="mt-5 h-px bg-[#d9dde3] [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>
    </section>
  );
}
