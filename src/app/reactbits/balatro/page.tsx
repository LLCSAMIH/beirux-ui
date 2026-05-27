"use client";

import Balatro from "@/components/Balatro";
import { BackLink } from "@/components/back-link";

export default function BalatroPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="absolute inset-0">
        <Balatro
          color1="#DE443B"
          color2="#006BB4"
          color3="#162325"
          spinSpeed={7.0}
          contrast={3.5}
          isRotate={false}
          mouseInteraction={true}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Balatro
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>
      </div>
    </div>
  );
}
