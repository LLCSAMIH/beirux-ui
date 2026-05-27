"use client";

export const dynamic = "force-dynamic";

import {
  FlatSingleAngleBandSvg,
  SymmetricVBandSvg,
  ZigzagSawtoothBandSvg,
  ArrowChevronBandSvg,
  StaircaseBandSvg,
} from "@/components/ui/svg-bands";
import { BackLink } from "@/components/back-link";

export default function SvgBandsPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            SVG Bands
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">Flat Single Angle</h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><FlatSingleAngleBandSvg className="text-white/30" /></div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">Symmetric V</h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><SymmetricVBandSvg className="text-white/30" /></div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">Zigzag Sawtooth (12 teeth)</h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><ZigzagSawtoothBandSvg teeth={12} className="text-white/30" /></div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">Arrow Chevron</h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><ArrowChevronBandSvg className="text-white/30" /></div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">Staircase</h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><StaircaseBandSvg className="text-white/30" /></div>
          </section>
        </div>
      </div>
    </div>
  );
}
