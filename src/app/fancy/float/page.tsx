"use client";

export const dynamic = "force-dynamic";

import Float from "@/components/fancy/blocks/float";
import { BackLink } from "@/components/back-link";

export default function FloatPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Float
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Continuous 3D floating animation with configurable speed, amplitude,
            and rotation. Great for hero elements and feature highlights.
          </p>
        </div>

        <div className="space-y-24">
          {/* Default float */}
          <section className="flex flex-col items-center">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-10">
              Default (speed 0.5, standard amplitude)
            </p>
            <div style={{ perspective: "800px" }}>
              <Float>
                <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-white/10 flex items-center justify-center">
                  <span className="text-white/70 font-medium">Default</span>
                </div>
              </Float>
            </div>
          </section>

          {/* Fast, tight float */}
          <section className="flex flex-col items-center">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-10">
              Fast and subtle (speed 1.5, small amplitude)
            </p>
            <div style={{ perspective: "800px" }}>
              <Float speed={1.5} amplitude={[5, 10, 5]} rotationRange={[5, 5, 3]}>
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/40 to-cyan-500/40 border border-white/10 flex items-center justify-center">
                  <span className="text-white/70 text-sm font-medium">Fast</span>
                </div>
              </Float>
            </div>
          </section>

          {/* Dramatic, slow */}
          <section className="flex flex-col items-center">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-10">
              Dramatic and slow (speed 0.2, large amplitude and rotation)
            </p>
            <div style={{ perspective: "600px" }}>
              <Float speed={0.2} amplitude={[20, 50, 50]} rotationRange={[25, 25, 12]}>
                <div className="w-48 h-32 rounded-xl bg-gradient-to-br from-orange-500/40 to-pink-500/40 border border-white/10 flex items-center justify-center">
                  <span className="text-white/70 font-medium">Dramatic</span>
                </div>
              </Float>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
