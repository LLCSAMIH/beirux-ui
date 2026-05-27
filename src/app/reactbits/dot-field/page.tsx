"use client";

import DotField from "@/components/DotField";
import { BackLink } from "@/components/back-link";

export default function DotFieldPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="absolute inset-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          cursorRadius={500}
          cursorForce={0.1}
          sparkle={true}
          gradientFrom="#3B82F6"
          gradientTo="#8B5CF6"
          glowColor="#6366F1"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            DotField
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>
      </div>
    </div>
  );
}
