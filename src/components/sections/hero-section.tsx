import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroContent } from "@/constants/landing-page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";
import { TypingHeadline } from "@/components/sections/typing-headline";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen overflow-hidden bg-white px-5 pt-28 sm:px-8 lg:px-12">
      <InfiniteGrid />

      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col items-center justify-center pb-20 text-center">
        <Badge className="mb-9 border-[#dedfe6] bg-white/74 px-4 py-2.5 text-sm font-normal text-[#666666] shadow-[0_10px_36px_rgba(0,52,102,0.06)]">
          Connecting People
        </Badge>

        <TypingHeadline text={heroContent.headline} />

        <p className="mt-7 max-w-3xl text-balance text-center text-base font-normal leading-8 text-[#666666] sm:text-lg">
          {heroContent.description}
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
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
