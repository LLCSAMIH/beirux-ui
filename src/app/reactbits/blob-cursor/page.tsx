"use client";

export const dynamic = "force-dynamic";

import BlobCursor from "@/components/BlobCursor";
import { BackLink } from "@/components/back-link";

export default function BlobCursorPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <BlobCursor
        blobType="circle"
        fillColor="#5227FF"
        trailCount={3}
        sizes={[60, 125, 75]}
        zIndex={0}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 px-6 pointer-events-none">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Blob Cursor
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>

        <p className="max-w-xl text-center text-lg text-white/40 leading-relaxed">
          Move your mouse across the page. Soft, blobby shapes follow your
          cursor with staggered easing, merging together through an SVG goo
          filter. GSAP powers the trail physics.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-white/30">
          <div className="rounded-lg border border-white/10 px-4 py-3">
            <span className="block text-white/60 text-sm mb-1">Engine</span>
            GSAP
          </div>
          <div className="rounded-lg border border-white/10 px-4 py-3">
            <span className="block text-white/60 text-sm mb-1">Shape</span>
            Circle
          </div>
          <div className="rounded-lg border border-white/10 px-4 py-3">
            <span className="block text-white/60 text-sm mb-1">Trails</span>
            3
          </div>
          <div className="rounded-lg border border-white/10 px-4 py-3">
            <span className="block text-white/60 text-sm mb-1">Filter</span>
            SVG Goo
          </div>
        </div>
      </div>
    </div>
  );
}
