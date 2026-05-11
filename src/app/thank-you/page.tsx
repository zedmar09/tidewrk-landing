import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div className="max-w-xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-[#5b5e68]">
          Tidewrk
        </p>
        <h1 className="text-4xl font-semibold text-[#111217] sm:text-5xl">
          Thanks for reaching out.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#62656f]">
          We received your request and will follow up with the next step soon.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
