"use client";

import DecayCard from "@/components/DecayCard";
import { BackLink } from "@/components/back-link";

export default function DecayCardPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Decay Card
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            SVG turbulence displacement that reacts to cursor distance.
            Move your mouse near the card to see it distort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {/* Default */}
          <div className="flex flex-col items-center gap-4">
            <DecayCard
              width={280}
              height={360}
              image="https://picsum.photos/seed/decay1/280/360?grayscale"
            />
            <p className="text-xs text-neutral-500 text-center">
              Default settings
            </p>
          </div>

          {/* Heavy distortion */}
          <div className="flex flex-col items-center gap-4">
            <DecayCard
              width={280}
              height={360}
              image="https://picsum.photos/seed/decay2/280/360?grayscale"
              maxDisplacement={600}
              baseFrequency={0.02}
            />
            <p className="text-xs text-neutral-500 text-center">
              Heavy distortion (600 max, freq 0.02)
            </p>
          </div>

          {/* With overlay content */}
          <div className="flex flex-col items-center gap-4">
            <DecayCard
              width={280}
              height={360}
              image="https://picsum.photos/seed/decay3/280/360?grayscale"
              maxDisplacement={300}
            >
              <div className="absolute inset-0 flex items-end p-4 z-10">
                <span className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  Overlay text
                </span>
              </div>
            </DecayCard>
            <p className="text-xs text-neutral-500 text-center">
              With child overlay content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
