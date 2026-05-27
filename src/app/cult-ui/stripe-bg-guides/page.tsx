"use client";

export const dynamic = "force-dynamic";

import { StripeBgGuides } from "@/components/ui/stripe-bg-guides";
import { BackLink } from "@/components/back-link";

export default function StripeBgGuidesPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Stripe BG Guides
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Default (4 columns, dark mode)
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-0 overflow-hidden relative h-80">
              <StripeBgGuides
                columnCount={4}
                darkMode={true}
                contained={true}
                glowColor="#a78bfa"
                animationDuration={8}
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <p className="text-white/60 text-sm">Content sits above the guides</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              6 Columns with solid lines
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-0 overflow-hidden relative h-80">
              <StripeBgGuides
                columnCount={6}
                solidLines={[1, 6]}
                darkMode={true}
                contained={true}
                glowColor="#34d399"
                animationDuration={12}
                direction="top-to-bottom"
              />
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Randomized activation
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-0 overflow-hidden relative h-80">
              <StripeBgGuides
                columnCount={8}
                darkMode={true}
                contained={true}
                glowColor="#f472b6"
                randomize={true}
                randomInterval={3000}
                maxActiveColumns={3}
                animationDuration={6}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
