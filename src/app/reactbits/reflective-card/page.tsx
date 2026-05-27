"use client";

import { BackLink } from "@/components/back-link";
import dynamic from "next/dynamic";

const ReflectiveCard = dynamic(() => import("@/components/ReflectiveCard"), {
  ssr: false,
});

export default function ReflectiveCardPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Reflective Card
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Real-time webcam-powered reflective card with SVG displacement
            filters, metallic sheen, and glass distortion. Requires camera
            permission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Default */}
          <div className="flex flex-col items-center gap-4">
            <ReflectiveCard />
            <p className="text-xs text-neutral-500 text-center">
              Default (white, metalness=1, roughness=0.4)
            </p>
          </div>

          {/* High metalness, low roughness */}
          <div className="flex flex-col items-center gap-4">
            <ReflectiveCard
              color="white"
              metalness={1.5}
              roughness={0.2}
              blurStrength={16}
            />
            <p className="text-xs text-neutral-500 text-center">
              High polish (metalness=1.5, roughness=0.2)
            </p>
          </div>

          {/* Glass distortion */}
          <div className="flex flex-col items-center gap-4">
            <ReflectiveCard
              color="white"
              glassDistortion={15}
              displacementStrength={30}
              blurStrength={8}
            />
            <p className="text-xs text-neutral-500 text-center">
              Glass distortion effect
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
