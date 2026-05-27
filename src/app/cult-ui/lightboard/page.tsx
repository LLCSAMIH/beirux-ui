"use client";

import { BackLink } from "@/components/back-link";
import { LightBoard } from "@/components/ui/lightboard";

export default function LightboardPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Lightboard
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            LED-matrix text display with draw-on-hover interaction. Text
            scrolls across a grid of individually addressable lights.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Default
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-black/40 overflow-hidden p-4">
            <LightBoard text="BEIRUX" rows={10} gap={2} lightSize={6} />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Custom colors
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-black/40 overflow-hidden p-4">
            <LightBoard
              text="HELLO WORLD"
              rows={10}
              gap={2}
              lightSize={6}
              colors={{
                drawLine: "rgba(100, 200, 255, 0.7)",
                background: "rgba(10, 20, 40, 0.3)",
                textDim: "rgba(60, 120, 200, 0.5)",
                textBright: "rgba(100, 200, 255, 0.95)",
              }}
            />
          </div>
        </section>

        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Large with 7-segment font
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-black/40 overflow-hidden p-4">
            <LightBoard
              text="2026"
              rows={14}
              gap={3}
              lightSize={8}
              font="7segment"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
