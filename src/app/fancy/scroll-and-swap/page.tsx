"use client";

import { useRef } from "react";
import ScrollAndSwapText from "@/components/fancy/text/scroll-and-swap-text";
import { BackLink } from "@/components/back-link";

export default function ScrollAndSwapPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Scroll and Swap
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Text swaps vertically as the user scrolls. The original
            text slides out while a duplicate slides in, driven by
            scroll progress within a container.
          </p>
        </div>
      </div>

      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="h-[60vh] overflow-y-auto mx-auto max-w-4xl px-6 border border-white/10 rounded-xl"
      >
        <div className="h-[50vh]" />

        {/* Demo 1: default */}
        <div className="py-12 text-center">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
            Default (spring stiffness 200, damping 30)
          </p>
          <ScrollAndSwapText
            containerRef={containerRef}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Scroll to swap
          </ScrollAndSwapText>
        </div>

        <div className="h-[30vh]" />

        {/* Demo 2: different text */}
        <div className="py-12 text-center">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
            Soft spring (stiffness 100, damping 20)
          </p>
          <ScrollAndSwapText
            containerRef={containerRef}
            springConfig={{ stiffness: 100, damping: 20 }}
            className="text-5xl md:text-7xl font-bold text-emerald-400"
          >
            BEIRUX
          </ScrollAndSwapText>
        </div>

        <div className="h-[30vh]" />

        {/* Demo 3: snappy spring */}
        <div className="py-12 text-center">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
            Snappy spring (stiffness 400, damping 40)
          </p>
          <ScrollAndSwapText
            containerRef={containerRef}
            springConfig={{ stiffness: 400, damping: 40 }}
            className="text-5xl md:text-7xl font-bold text-amber-400"
          >
            Keep scrolling
          </ScrollAndSwapText>
        </div>

        <div className="h-[50vh]" />
      </div>

      <div className="h-12" />
    </div>
  );
}
