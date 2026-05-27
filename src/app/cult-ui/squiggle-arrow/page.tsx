"use client";

import SquigglyArrow from "@/components/ui/squiggle-arrow";
import { BackLink } from "@/components/back-link";

export default function SquiggleArrowPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Squiggle Arrow
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Variants
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 flex flex-col gap-6 items-center">
              <SquigglyArrow variant="wavy" className="text-white" />
              <SquigglyArrow variant="bouncy" className="text-white" />
              <SquigglyArrow variant="smooth" className="text-white" />
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Directions
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 flex flex-wrap gap-8 items-center justify-center">
              <SquigglyArrow direction="right" className="text-white" />
              <SquigglyArrow direction="left" className="text-white" />
              <SquigglyArrow direction="up" className="text-white" width={100} height={200} />
              <SquigglyArrow direction="down" className="text-white" width={100} height={200} />
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Sizes
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 flex flex-col gap-6 items-center">
              <SquigglyArrow width={100} height={50} className="text-white/40" />
              <SquigglyArrow width={200} height={100} className="text-white/60" />
              <SquigglyArrow width={300} height={150} strokeWidth={3.5} className="text-white" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
