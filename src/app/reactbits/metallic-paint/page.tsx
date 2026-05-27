"use client";

import MetallicPaint from "@/components/MetallicPaint";
import { BackLink } from "@/components/back-link";

export default function MetallicPaintPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Metallic Paint
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            WebGL2 shader that transforms any image into a liquid metallic
            surface with chromatic aberration, depth mapping, and interactive
            mouse control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Demo 1: Default with pink tint */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/10">
              <MetallicPaint
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Camponotus_flavomarginatus_ant.jpg/320px-Camponotus_flavomarginatus_ant.jpg"
                scale={4}
                liquid={0.75}
                speed={0.3}
                brightness={2}
                contrast={0.5}
                tintColor="#feb3ff"
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Default settings (pink tint, auto animation)
            </p>
          </div>

          {/* Demo 2: Mouse-driven with blue tint */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/10">
              <MetallicPaint
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/280px-PNG_transparency_demonstration_1.png"
                scale={6}
                liquid={1}
                mouseAnimation
                brightness={1.8}
                contrast={0.6}
                tintColor="#b3d4ff"
                chromaticSpread={3}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Mouse-driven animation (blue tint, higher chromatic spread)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
