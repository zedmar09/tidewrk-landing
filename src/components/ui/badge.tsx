import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[#e5e6ec] bg-white/80 px-3.5 py-2 text-sm font-medium text-[#23252d] shadow-[0_8px_30px_rgba(17,18,23,0.05)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
