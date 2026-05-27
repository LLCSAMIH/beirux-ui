"use client";

export const dynamic = "force-dynamic";

import Iridescence from "@/components/Iridescence";
import { BackLink } from "@/components/back-link";

export default function IridescencePage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="absolute inset-0">
        <Iridescence color={[1, 1, 1]} speed={1.2} amplitude={0.1} mouseReact={true} />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3 drop-shadow-lg">
            Iridescence
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>
      </div>
    </div>
  );
}
