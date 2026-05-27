"use client";

export const dynamic = "force-dynamic";

import PixelateSvgFilter from "@/components/fancy/filter/pixelate-svg-filter";
import { BackLink } from "@/components/back-link";

function PixelDemo({
  label,
  size,
  crossLayers,
  filterId,
}: {
  label: string;
  size: number;
  crossLayers: boolean;
  filterId: string;
}) {
  return (
    <section>
      <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
        {label}
      </p>
      <div className="relative h-48 rounded-xl overflow-hidden border border-white/10">
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ filter: `url(#${filterId})` }}
        >
          <div className="text-center">
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              PIXEL
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              <div className="w-12 h-12 rounded-lg bg-blue-500" />
              <div className="w-12 h-12 rounded-lg bg-purple-500" />
              <div className="w-12 h-12 rounded-lg bg-pink-500" />
              <div className="w-12 h-12 rounded-lg bg-emerald-500" />
            </div>
          </div>
        </div>
        <PixelateSvgFilter id={filterId} size={size} crossLayers={crossLayers} />
      </div>
    </section>
  );
}

export default function PixelateSvgFilterPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Pixelate SVG Filter
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Applies a pixelation effect to any content using SVG filters.
            Configurable pixel size and optional cross-layer blending.
          </p>
        </div>

        <div className="space-y-16">
          <PixelDemo
            label="Small pixels (size 8)"
            size={8}
            crossLayers={false}
            filterId="pixelate-small"
          />
          <PixelDemo
            label="Large pixels (size 24)"
            size={24}
            crossLayers={false}
            filterId="pixelate-large"
          />
          <PixelDemo
            label="Cross-layer blending (size 16)"
            size={16}
            crossLayers={true}
            filterId="pixelate-cross"
          />
        </div>
      </div>
    </div>
  );
}
