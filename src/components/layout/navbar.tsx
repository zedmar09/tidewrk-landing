import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Mail } from "lucide-react";
import { navigationItems } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import tidewrkLogo from "@/assets/images/tidewrk-logo.svg";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eef0f3] bg-white">
      <nav className="mx-auto flex h-16 w-full max-w-[1800px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Home">
          <Image
            alt="Tidewrk"
            className="h-8 w-auto"
            priority
            src={tidewrkLogo}
          />
        </Link>

        <div className="hidden items-center gap-10 text-[1.02rem] font-normal text-[#666666] lg:flex">
          {navigationItems.map((item) => (
            <div className="group relative" key={item.label}>
              <Link
                className="inline-flex h-16 items-center gap-1.5 transition hover:text-[#003466]"
                href={item.href}
              >
                {item.label}
                {item.children ? <ChevronDown className="h-4 w-4" /> : null}
              </Link>

              {item.children ? (
                <div className="invisible absolute left-1/2 top-[calc(100%-0.25rem)] min-w-72 -translate-x-1/2 rounded-lg border border-[#e4e7ec] bg-white/96 p-2 opacity-0 shadow-[0_18px_60px_rgba(0,52,102,0.12)] backdrop-blur-md transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      className="block rounded-md px-4 py-3 text-sm leading-5 text-[#666666] transition hover:bg-[#f3f7fb] hover:text-[#003466]"
                      href={child.href}
                      key={child.label}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <Button asChild size="sm" className="hidden pl-5 pr-4 sm:inline-flex">
          <Link href="#contact">
            Contact Us
            <Mail className="h-4 w-4" />
          </Link>
        </Button>
      </nav>
    </header>
  );
}
