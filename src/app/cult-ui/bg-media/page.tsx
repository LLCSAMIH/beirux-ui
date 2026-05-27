"use client";

export const dynamic = "force-dynamic";

import { BackgroundMedia } from "@/components/ui/bg-media"
import { BackLink } from "@/components/back-link"

export default function BgMediaPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            BG Media
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Full-bleed background media component supporting images and videos
            with overlay controls and responsive sizing.
          </p>
        </div>

        <div className="space-y-16">
          {/* Image with light overlay */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Image with Light Overlay
            </h2>
            <div className="rounded-xl overflow-hidden">
              <BackgroundMedia
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                type="image"
                variant="light"
                alt="Earth from space"
              />
            </div>
          </section>

          {/* Image with dark overlay */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Image with Dark Overlay
            </h2>
            <div className="rounded-xl overflow-hidden">
              <BackgroundMedia
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
                type="image"
                variant="dark"
                alt="Mountain landscape"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
