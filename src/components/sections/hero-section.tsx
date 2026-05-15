import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroContent } from "@/constants/landing-page";
import { Badge } from "@/components/ui/badge";
import { BGPattern } from "@/components/ui/bg-pattern";
import { Button } from "@/components/ui/button";
import { TypingHeadline } from "@/components/sections/typing-headline";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-white px-5 pt-24 sm:px-8 sm:pt-28 lg:px-12">
      <BGPattern
        aria-hidden="true"
        className="z-0 opacity-90"
        fill="rgba(0,52,102,0.12)"
        mask="fade-edges"
        size={44}
        variant="grid"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col items-center justify-center pb-16 text-center sm:pb-20">
        <Badge className="mb-7 border-[#dedfe6] bg-white/74 px-4 py-2.5 text-sm font-normal text-[#666666] shadow-[0_10px_36px_rgba(0,52,102,0.06)] sm:mb-9">
          Connecting People
        </Badge>

        <TypingHeadline text={heroContent.headline} />

        <p className="mt-6 max-w-3xl text-balance text-center text-base font-normal leading-8 text-[#666666] sm:mt-7 sm:text-lg">
          {heroContent.description}
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={heroContent.primaryCta.href}>
              <Sparkles className="h-5 w-5" />
              {heroContent.primaryCta.label}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="w-full shadow-[0_12px_30px_rgba(17,18,23,0.05)] sm:w-auto"
          >
            <Link href={heroContent.secondaryCta.href}>
              {heroContent.secondaryCta.label}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
