"use client";

export const dynamic = "force-dynamic";

import Carousel from "@/components/Carousel";
import { BackLink } from "@/components/back-link";

export default function CarouselPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Carousel
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Draggable card carousel with Motion spring physics. Supports
            autoplay, looping, and rounded pill indicators.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {/* Default */}
          <div className="flex flex-col items-center gap-4 w-full">
            <Carousel />
            <p className="text-xs text-neutral-500 text-center">
              Default items, drag to navigate
            </p>
          </div>

          {/* Autoplay + round indicators */}
          <div className="flex flex-col items-center gap-4 w-full">
            <Carousel
              autoplay
              autoplayDelay={3000}
              pauseOnHover
              loop
              round
            />
            <p className="text-xs text-neutral-500 text-center">
              Autoplay (3s), loop, round indicators
            </p>
          </div>

          {/* Wider cards */}
          <div className="flex flex-col items-center gap-4 w-full">
            <Carousel baseWidth={400} loop />
            <p className="text-xs text-neutral-500 text-center">
              Wider cards (400px base), looping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
