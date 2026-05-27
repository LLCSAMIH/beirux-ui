"use client";

export const dynamic = "force-dynamic";

import { useRef } from "react";
import TextCursorProximity from "@/components/fancy/text/text-cursor-proximity";
import { BackLink } from "@/components/back-link";

export default function TextCursorProximityPage() {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Text Cursor Proximity
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Each letter reacts to cursor proximity with customizable
            CSS style changes. Supports different falloff curves
            (linear, exponential, gaussian) and configurable radius.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default: font-size proximity */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Font size scales on proximity (linear falloff, 80px radius)
            </p>
            <div
              ref={containerRef1}
              className="flex justify-center items-center min-h-[200px] relative"
            >
              <TextCursorProximity
                containerRef={containerRef1}
                radius={80}
                falloff="linear"
                styles={{
                  fontSize: { from: 36, to: 64 },
                }}
                className="font-bold text-white cursor-default"
              >
                Move your cursor here
              </TextCursorProximity>
            </div>
          </section>

          {/* Gaussian falloff with opacity */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Opacity + scale (gaussian falloff, 100px radius)
            </p>
            <div
              ref={containerRef2}
              className="flex justify-center items-center min-h-[200px] relative"
            >
              <TextCursorProximity
                containerRef={containerRef2}
                radius={100}
                falloff="gaussian"
                styles={{
                  opacity: { from: 0.3, to: 1 },
                  fontSize: { from: 32, to: 56 },
                }}
                className="font-bold text-emerald-400 cursor-default"
              >
                BEIRUX
              </TextCursorProximity>
            </div>
          </section>

          {/* Exponential falloff with color */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Exponential falloff / large radius (150px)
            </p>
            <div
              ref={containerRef3}
              className="flex justify-center items-center min-h-[200px] relative"
            >
              <TextCursorProximity
                containerRef={containerRef3}
                radius={150}
                falloff="exponential"
                styles={{
                  fontSize: { from: 28, to: 72 },
                  opacity: { from: 0.2, to: 1 },
                }}
                className="font-bold text-amber-400 cursor-default"
              >
                Proximity effect
              </TextCursorProximity>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
