"use client";

export const dynamic = "force-dynamic";

import GlareHover from "@/components/GlareHover";
import { BackLink } from "@/components/back-link";

export default function GlareHoverPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            GlareHover
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            CSS-animated diagonal glare sweep on hover. Customizable color,
            angle, size, and transition speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Default white glare */}
          <div className="flex flex-col items-center gap-4">
            <GlareHover
              width="280px"
              height="200px"
              background="#1a1a2e"
              borderRadius="16px"
              borderColor="rgba(255,255,255,0.1)"
              glareColor="#ffffff"
              glareOpacity={0.5}
              glareAngle={-45}
              glareSize={250}
              transitionDuration={650}
            >
              <p className="text-lg font-medium">Default glare</p>
            </GlareHover>
            <p className="text-xs text-neutral-500">White, -45 deg, 250% size</p>
          </div>

          {/* Purple glare, steep angle */}
          <div className="flex flex-col items-center gap-4">
            <GlareHover
              width="280px"
              height="200px"
              background="#1a0a2e"
              borderRadius="16px"
              borderColor="rgba(160,100,255,0.2)"
              glareColor="#a855f7"
              glareOpacity={0.6}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={500}
            >
              <p className="text-lg font-medium">Purple glare</p>
            </GlareHover>
            <p className="text-xs text-neutral-500">Purple, -30 deg, fast</p>
          </div>

          {/* Play once */}
          <div className="flex flex-col items-center gap-4">
            <GlareHover
              width="280px"
              height="200px"
              background="#0a1a2e"
              borderRadius="16px"
              borderColor="rgba(59,130,246,0.2)"
              glareColor="#3b82f6"
              glareOpacity={0.4}
              glareAngle={-60}
              glareSize={200}
              transitionDuration={800}
              playOnce
            >
              <p className="text-lg font-medium">Play once</p>
            </GlareHover>
            <p className="text-xs text-neutral-500">Blue, play once on hover</p>
          </div>
        </div>
      </div>
    </div>
  );
}
