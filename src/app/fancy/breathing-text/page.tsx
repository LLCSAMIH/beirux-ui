"use client";

export const dynamic = "force-dynamic";

import BreathingText from "@/components/fancy/text/breathing-text";
import { BackLink } from "@/components/back-link";

export default function BreathingTextPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Breathing Text
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Animate variable font weight with a staggered breathing effect.
            Each letter pulses between two font variation settings.
          </p>
        </div>

        <div className="space-y-24">
          {/* Demo 1: Weight breathing, stagger from first */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Weight 100 to 900 / stagger from first / 1.5s
            </p>
            <div className="flex justify-center">
              <BreathingText
                className="text-4xl md:text-6xl text-white/90 font-sans"
                fromFontVariationSettings="'wght' 100"
                toFontVariationSettings="'wght' 900"
                staggerDuration={0.08}
                staggerFrom="first"
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                BEIRUX Digital
              </BreathingText>
            </div>
          </section>

          {/* Demo 2: Stagger from center, slower */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Weight 300 to 700 / stagger from center / 2s
            </p>
            <div className="flex justify-center">
              <BreathingText
                className="text-3xl md:text-5xl text-emerald-400/80 font-sans"
                fromFontVariationSettings="'wght' 300"
                toFontVariationSettings="'wght' 700"
                staggerDuration={0.12}
                staggerFrom="center"
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                Craft Meets Code
              </BreathingText>
            </div>
          </section>

          {/* Demo 3: Stagger from last, fast */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Weight 200 to 800 / stagger from last / 1s fast pulse
            </p>
            <div className="flex justify-center">
              <BreathingText
                className="text-2xl md:text-4xl text-purple-300/70 font-sans tracking-widest uppercase"
                fromFontVariationSettings="'wght' 200"
                toFontVariationSettings="'wght' 800"
                staggerDuration={0.05}
                staggerFrom="last"
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Motion with purpose
              </BreathingText>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
