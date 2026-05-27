"use client";

import { useRef } from "react";
import Screensaver from "@/components/fancy/blocks/screensaver";
import { BackLink } from "@/components/back-link";

export default function ScreensaverPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        <Screensaver
          containerRef={containerRef}
          speed={2}
          startPosition={{ x: 10, y: 20 }}
          startAngle={35}
        >
          <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg shadow-lg shadow-blue-500/20">
            BEIRUX
          </div>
        </Screensaver>

        <Screensaver
          containerRef={containerRef}
          speed={3}
          startPosition={{ x: 60, y: 50 }}
          startAngle={120}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <span className="text-2xl">✦</span>
          </div>
        </Screensaver>

        <Screensaver
          containerRef={containerRef}
          speed={1.5}
          startPosition={{ x: 80, y: 10 }}
          startAngle={210}
        >
          <div className="px-4 py-2 rounded-lg border border-pink-500/30 bg-pink-500/10 text-pink-300 text-sm font-mono">
            DVD mode
          </div>
        </Screensaver>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Screensaver
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50 mb-2">
            Fancy Components
          </p>
          <p className="text-xs text-white/30 max-w-xs mx-auto">
            Elements bounce around the viewport like the classic DVD logo.
            Each has its own speed and start angle.
          </p>
        </div>
      </div>
    </div>
  );
}
