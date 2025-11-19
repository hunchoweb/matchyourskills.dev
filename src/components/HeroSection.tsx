"use client";

import Image from "next/image";
import * as React from "react";

import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: {
    regular: string;
    gradient: string;
  };
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaTarget?: "_self" | "_blank";
  bottomImage?: {
    light: string;
    dark: string;
  };
  gridOptions?: {
    angle?: number;
    cellSize?: number;
    opacity?: number;
    lightLineColor?: string;
    darkLineColor?: string;
  };
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}: NonNullable<HeroSectionProps["gridOptions"]>) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [perspective:200px]",
        "opacity-[var(--opacity)]",
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
};

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Build products for everyone",
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      ctaText = "Browse courses",
      ctaHref = "#",
      ctaTarget = "_self",
      bottomImage = {
        light: "https://farmui.vercel.app/dashboard-light.png",
        dark: "https://farmui.vercel.app/dashboard.png",
      },
      gridOptions,
      ...props
    },
    ref,
  ) => (
    <div
      className={cn("relative overflow-hidden rounded-[40px]", className)}
      ref={ref}
      {...props}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(15,23,42,0))]" />
      <section className="relative">
        <RetroGrid
          angle={gridOptions?.angle}
          cellSize={gridOptions?.cellSize}
          opacity={gridOptions?.opacity}
          lightLineColor={gridOptions?.lightLineColor}
          darkLineColor={gridOptions?.darkLineColor}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="inline-flex items-center justify-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
              {title}
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </h1>
            <h2 className="text-balance text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
              {subtitle?.regular}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-sky-300">
                {subtitle?.gradient}
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-slate-200 sm:text-lg">
              {description}
            </p>
            <div className="flex flex-col items-center justify-center">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950/50 text-sm font-semibold text-white backdrop-blur-xl">
                  <a
                    href={ctaHref}
                    target={ctaTarget}
                    rel={ctaTarget === "_blank" ? "noreferrer" : undefined}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-gradient-to-tr from-white/10 via-white/5 to-transparent px-8 py-4 text-center text-sm font-semibold text-white transition hover:from-white/20 hover:via-white/10"
                  >
                    {ctaText}
                  </a>
                </div>
              </span>
            </div>
          </div>
          {bottomImage && (
            <div className="relative mt-16 rounded-[32px] border border-white/10 bg-gradient-to-br from-primary-500/10 via-sky-500/5 to-transparent p-4 shadow-2xl">
              <Image
                src={bottomImage.light}
                alt="Dashboard preview light"
                width={1440}
                height={900}
                className="hidden w-full rounded-3xl border border-white/10 object-cover dark:block"
                priority
              />
              <Image
                src={bottomImage.dark}
                alt="Dashboard preview"
                width={1440}
                height={900}
                className="w-full rounded-3xl border border-white/10 object-cover dark:hidden"
                priority
              />
            </div>
          )}
        </div>
      </section>
    </div>
  ),
);

HeroSection.displayName = "HeroSection";

export { HeroSection };

