"use client";

export const dynamic = "force-dynamic";

import SplashCursor from "@/components/SplashCursor";
import { BackLink } from "@/components/back-link";

export default function SplashCursorPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <SplashCursor />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Splash Cursor
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>

        <p className="max-w-xl text-center text-lg text-white/40 leading-relaxed">
          Move your mouse around the page. Click anywhere to create bursts of
          color. A WebGL fluid simulation that turns every cursor movement into
          a vibrant, interactive painting.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-white/30">
          <div className="rounded-lg border border-white/10 px-4 py-3">
            <span className="block text-white/60 text-sm mb-1">Engine</span>
            WebGL
          </div>
          <div className="rounded-lg border border-white/10 px-4 py-3">
            <span className="block text-white/60 text-sm mb-1">Mode</span>
            Rainbow
          </div>
          <div className="rounded-lg border border-white/10 px-4 py-3">
            <span className="block text-white/60 text-sm mb-1">Shading</span>
            Enabled
          </div>
          <div className="rounded-lg border border-white/10 px-4 py-3">
            <span className="block text-white/60 text-sm mb-1">Transparent</span>
            Yes
          </div>
        </div>
      </div>
    </div>
  );
}
