import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-12 items-center justify-center gap-2 rounded-none px-6 text-base font-normal transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003466] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#003466] text-white shadow-[0_12px_30px_rgba(0,52,102,0.18)] hover:bg-[#00294f]",
        secondary:
          "border border-[#d9dde3] bg-[#f8f8fb] text-[#666666] hover:bg-white",
        ghost: "bg-transparent text-[#666666] hover:bg-[#f4f5f8]",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-lg",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const resolvedStyle =
      !variant || variant === "default" ? { color: "#ffffff", ...style } : style;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={resolvedStyle}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
