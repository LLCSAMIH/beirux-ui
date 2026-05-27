"use client";

export const dynamic = "force-dynamic";

import { GridScan } from "@/components/GridScan";
import { BackLink } from "@/components/back-link";

export default function GridScanPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="absolute inset-0">
        <GridScan
          scanColor="#FF9FFC"
          linesColor="#2F293A"
          scanDuration={2.0}
          scanDelay={2.0}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Grid Scan
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>
      </div>
    </div>
  );
}
