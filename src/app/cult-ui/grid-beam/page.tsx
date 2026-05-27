"use client";

export const dynamic = "force-dynamic";

import { GridBeam } from "@/components/ui/grid-beam";
import { BackLink } from "@/components/back-link";

export default function GridBeamPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Grid Beam
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* Colorful */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Colorful (Default)
            </h2>
            <GridBeam
              className="h-64 rounded-2xl border border-white/10"
              colorVariant="colorful"
              theme="dark"
              rows={3}
              cols={4}
              borderRadius={16}
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-lg font-medium text-white/80">Colorful beams</p>
              </div>
            </GridBeam>
          </section>

          {/* Ocean */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Ocean Palette
            </h2>
            <GridBeam
              className="h-64 rounded-2xl border border-white/10"
              colorVariant="ocean"
              theme="dark"
              rows={4}
              cols={5}
              borderRadius={16}
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-lg font-medium text-white/80">Ocean palette</p>
              </div>
            </GridBeam>
          </section>

          {/* Sunset */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Sunset Palette
            </h2>
            <GridBeam
              className="h-64 rounded-2xl border border-white/10"
              colorVariant="sunset"
              theme="dark"
              rows={3}
              cols={3}
              strength={1.2}
              borderRadius={16}
            >
              <div className="flex items-center justify-center h-full">
                <p className="text-lg font-medium text-white/80">Sunset palette</p>
              </div>
            </GridBeam>
          </section>
        </div>
      </div>
    </div>
  );
}
