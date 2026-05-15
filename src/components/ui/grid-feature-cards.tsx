import { cn } from "@/lib/utils";
import React from "react";

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
};

type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType;
};

export function FeatureCard({
  feature,
  className,
  ...props
}: FeatureCardProps) {
  const pattern = genPatternFromTitle(feature.title);

  return (
    <div
      className={cn(
        "group relative flex min-h-[220px] flex-col overflow-hidden bg-white/70 p-6 transition-colors duration-300 ease-out hover:bg-[#003466]",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003466]/5 to-[#003466]/[0.01] opacity-100 transition-opacity duration-300 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] group-hover:opacity-35">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={pattern}
            className="absolute inset-0 h-full w-full fill-[#003466]/5 stroke-[#003466]/20 mix-blend-overlay transition-colors duration-300 group-hover:fill-white/12 group-hover:stroke-white/35"
          />
        </div>
      </div>
      <feature.icon
        className="relative z-10 size-6 text-[#003466]/75 transition-colors duration-300 group-hover:text-white"
        strokeWidth={1.3}
        aria-hidden
      />
      <h3 className="relative z-10 mt-10 text-sm font-semibold text-[#111217] transition-colors duration-300 group-hover:text-white md:text-base">
        {feature.title}
      </h3>
      <p className="relative z-10 mt-2 text-xs font-light leading-6 text-[#666666] transition-colors duration-300 group-hover:text-white/82 md:text-sm">
        {feature.description}
      </p>
    </div>
  );
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genPatternFromTitle(title: string, length = 5): number[][] {
  const seed = Array.from(title).reduce(
    (total, char) => total + char.charCodeAt(0),
    0,
  );

  return Array.from({ length }, (_, index) => [
    7 + ((seed + index * 3) % 4),
    1 + ((seed + index * 5) % 6),
  ]);
}
