"use client";

export const dynamic = "force-dynamic";

import ImageTrail, {
  ImageTrailItem,
} from "@/components/fancy/image/image-trail";
import { BackLink } from "@/components/back-link";

const colors = [
  "bg-emerald-500",
  "bg-purple-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-sky-500",
  "bg-pink-500",
];

export default function ImageTrailPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Image Trail
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Elements appear along the mouse trail as you move. Supports
            custom keyframes, intensity, threshold, and z-index ordering.
          </p>
        </div>

        <div className="space-y-24">
          {/* Demo 1: Colored squares trail */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Colored squares / scale in-out / 100px threshold / move mouse inside
            </p>
            <div className="relative w-full h-96 rounded-xl border border-white/10 overflow-hidden cursor-crosshair">
              <ImageTrail
                threshold={100}
                intensity={0.3}
                repeatChildren={3}
                keyframes={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                keyframesOptions={{ duration: 1.2, times: [0, 0.1, 0.8, 1] }}
                className="w-full h-full"
              >
                {colors.map((color, i) => (
                  <ImageTrailItem key={i}>
                    <div
                      className={`w-16 h-16 rounded-lg ${color} opacity-80`}
                    />
                  </ImageTrailItem>
                ))}
              </ImageTrail>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <p className="text-lg text-white/20">
                  Move your mouse here
                </p>
              </div>
            </div>
          </section>

          {/* Demo 2: Text fragments trail */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Text fragments / low threshold (60px) / high intensity (0.6)
            </p>
            <div className="relative w-full h-80 rounded-xl border border-white/10 overflow-hidden cursor-crosshair">
              <ImageTrail
                threshold={60}
                intensity={0.6}
                repeatChildren={4}
                keyframes={{
                  scale: [0, 1.2, 1, 0],
                  opacity: [0, 1, 0.8, 0],
                  rotate: [-10, 0, 5, -5],
                }}
                keyframesOptions={{ duration: 1.5, times: [0, 0.15, 0.7, 1] }}
                className="w-full h-full"
              >
                {["Design", "Code", "Ship"].map((word, i) => (
                  <ImageTrailItem key={i}>
                    <span className="text-xl font-bold text-white/60 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                      {word}
                    </span>
                  </ImageTrailItem>
                ))}
              </ImageTrail>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <p className="text-lg text-white/20">
                  Move your mouse here
                </p>
              </div>
            </div>
          </section>

          {/* Demo 3: Circles trail, old on top */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Circles / old-on-top stacking / slow fade (2s)
            </p>
            <div className="relative w-full h-80 rounded-xl border border-white/10 overflow-hidden cursor-crosshair">
              <ImageTrail
                threshold={80}
                intensity={0.2}
                repeatChildren={5}
                zIndexDirection="old-on-top"
                keyframes={{
                  scale: [0, 1.5, 1, 0],
                  opacity: [0, 0.6, 0.4, 0],
                }}
                keyframesOptions={{ duration: 2, times: [0, 0.1, 0.7, 1] }}
                className="w-full h-full"
              >
                {["bg-emerald-400/60", "bg-purple-400/60", "bg-rose-400/60", "bg-amber-400/60"].map(
                  (cls, i) => (
                    <ImageTrailItem key={i}>
                      <div className={`w-20 h-20 rounded-full ${cls}`} />
                    </ImageTrailItem>
                  )
                )}
              </ImageTrail>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <p className="text-lg text-white/20">
                  Move your mouse here
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
