"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link";
import { MorphSurface } from "@/components/ui/morph-surface";

export default function MorphSurfacePage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Morph Surface
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            A morphing container that expands from a trigger into a feedback
            form with spring animations. Collapse, expand, and success states.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Default
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 flex items-center justify-center min-h-[200px]">
            <MorphSurface
              onSubmit={(data) => {
                console.log("Submitted:", Object.fromEntries(data));
              }}
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Custom label and placeholder
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 flex items-center justify-center min-h-[200px]">
            <MorphSurface
              triggerLabel="Report Bug"
              placeholder="Describe the issue..."
              submitLabel="Send Report"
              onSubmit={(data) => {
                console.log("Bug report:", Object.fromEntries(data));
              }}
            />
          </div>
        </section>

        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Custom dimensions
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-12 flex items-center justify-center min-h-[200px]">
            <MorphSurface
              triggerLabel="Quick Note"
              placeholder="Type a quick note..."
              collapsedWidth={280}
              expandedWidth={420}
              expandedHeight={240}
              onSubmit={(data) => {
                console.log("Note:", Object.fromEntries(data));
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
