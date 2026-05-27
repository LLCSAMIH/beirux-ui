"use client";

import { TextureOverlay, type TextureType } from "@/components/ui/texture-overlay";
import { BackLink } from "@/components/back-link";

const textures: TextureType[] = [
  "dots", "grid", "noise", "crosshatch", "diagonal",
  "scatteredDots", "halftone", "chevron", "paperGrain",
  "horizontalLines", "verticalLines",
];

export default function TextureOverlayPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Texture Overlay
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              All textures
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {textures.map((texture) => (
                <div key={texture} className="relative rounded-xl border border-white/10 bg-indigo-600 h-32 overflow-hidden">
                  <TextureOverlay texture={texture} opacity={0.6} />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-xs font-mono text-white/90 bg-black/40 px-2 py-1 rounded">{texture}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              On different backgrounds
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative rounded-xl bg-rose-600 h-40 overflow-hidden">
                <TextureOverlay texture="dots" opacity={0.5} />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="text-white font-semibold">Rose + dots</span>
                </div>
              </div>
              <div className="relative rounded-xl bg-emerald-600 h-40 overflow-hidden">
                <TextureOverlay texture="grid" opacity={0.4} />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="text-white font-semibold">Emerald + grid</span>
                </div>
              </div>
              <div className="relative rounded-xl bg-amber-600 h-40 overflow-hidden">
                <TextureOverlay texture="crosshatch" opacity={0.3} />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="text-white font-semibold">Amber + crosshatch</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
