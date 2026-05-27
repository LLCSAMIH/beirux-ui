"use client";

import { EdgeBlur, TopBlur, BottomBlur } from "@/components/ui/edge-blur";
import { BackLink } from "@/components/back-link";

export default function EdgeBlurPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Edge Blur
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* Bottom blur */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Bottom Blur (Default)
            </h2>
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-b from-purple-600 to-blue-600">
              <div className="p-6">
                <p className="text-lg font-medium">Content fades at the bottom edge</p>
                <p className="text-sm text-white/70 mt-2">
                  The blur creates a smooth transition from content to background.
                </p>
              </div>
              <BottomBlur height={100} />
            </div>
          </section>

          {/* Top blur */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Top Blur
            </h2>
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-t from-emerald-600 to-teal-600">
              <TopBlur height={100} />
              <div className="p-6 mt-16">
                <p className="text-lg font-medium">Content fades at the top edge</p>
                <p className="text-sm text-white/70 mt-2">
                  Use TopBlur for scroll containers or header transitions.
                </p>
              </div>
            </div>
          </section>

          {/* Both edges */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Both Edges
            </h2>
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-r from-orange-600 to-rose-600">
              <TopBlur height={75} />
              <div className="p-6 flex items-center justify-center h-full">
                <p className="text-lg font-medium text-center">Blurred on top and bottom</p>
              </div>
              <BottomBlur height={75} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
