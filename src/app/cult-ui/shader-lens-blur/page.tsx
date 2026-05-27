"use client";

export const dynamic = "force-dynamic";

import { ShaderLensBlur } from "@/components/ui/shader-lens-blur";
import { BackLink } from "@/components/back-link";

export default function ShaderLensBlurPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Shader Lens Blur
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* WebGL shader */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Interactive Shader
            </h2>
            <p className="text-sm text-neutral-400 mb-8">
              Move your cursor over the canvas. The shader reacts to mouse
              position with a lens blur effect built on Three.js.
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: 500 }}>
              <ShaderLensBlur />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
