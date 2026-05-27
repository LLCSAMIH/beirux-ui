"use client"

import { BackgroundImageTexture } from "@/components/ui/bg-image-texture"
import { BackLink } from "@/components/back-link"

export default function BgImageTexturePage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            BG Image Texture
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Adds subtle pattern texture overlays to backgrounds using SVG
            patterns. Multiple variants like fabric-of-squares, dots, and more.
          </p>
        </div>

        <div className="space-y-16">
          {/* Fabric of squares */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Fabric of Squares
            </h2>
            <BackgroundImageTexture variant="fabric-of-squares" opacity={0.5}>
              <div className="h-48 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet-600 to-indigo-800">
                <p className="text-lg font-semibold text-white">
                  Fabric Texture Overlay
                </p>
              </div>
            </BackgroundImageTexture>
          </section>

          {/* On solid bg */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              On Solid Background
            </h2>
            <BackgroundImageTexture variant="fabric-of-squares" opacity={0.3}>
              <div className="h-48 rounded-xl flex items-center justify-center bg-emerald-700">
                <p className="text-lg font-semibold text-white">
                  Adds depth to flat colors
                </p>
              </div>
            </BackgroundImageTexture>
          </section>

          {/* Card with texture */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Textured Card
            </h2>
            <BackgroundImageTexture variant="fabric-of-squares" opacity={0.4}>
              <div className="rounded-xl border border-white/10 bg-neutral-800 p-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  Premium Feel
                </h3>
                <p className="text-sm text-white/60">
                  A subtle pattern texture makes flat UI surfaces feel tactile
                  and high-end, like printed paper or woven fabric.
                </p>
              </div>
            </BackgroundImageTexture>
          </section>
        </div>
      </div>
    </div>
  )
}
