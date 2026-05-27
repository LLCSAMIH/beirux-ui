"use client";

import {
  TriangleShapeSvg,
  CircleShapeSvg,
  EllipseShapeSvg,
  KiteShapeSvg,
  PennantShapeSvg,
  GothicArchPanelSvg,
  VesicaPiscisSvg,
  SeedOfLifeSvg,
} from "@/components/ui/svg-shapes";
import { BackLink } from "@/components/back-link";

export default function SvgShapesPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            SVG Shapes
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">Fundamental</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><TriangleShapeSvg className="text-white/40" /></div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><CircleShapeSvg className="text-white/40" /></div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><EllipseShapeSvg className="text-white/40" /></div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><KiteShapeSvg className="text-white/40" /></div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">Compound</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><PennantShapeSvg className="text-white/40" /></div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><GothicArchPanelSvg className="text-white/40" /></div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">Sacred Geometry</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><VesicaPiscisSvg className="text-white/40" /></div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><SeedOfLifeSvg className="text-white/40" /></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
