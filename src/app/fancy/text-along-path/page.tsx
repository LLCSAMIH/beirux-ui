"use client";

import AnimatedPathText from "@/components/fancy/text/text-along-path";
import { BackLink } from "@/components/back-link";

export default function TextAlongPathPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Text Along Path
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Animate text flowing along any SVG path. Supports auto-looping and
            scroll-driven animation modes.
          </p>
        </div>

        <div className="space-y-24">
          {/* Arc / wave path */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Wave path / auto loop / 8s duration
            </p>
            <div className="w-full text-white/80">
              <AnimatedPathText
                path="M 10,80 Q 30,10 50,50 T 90,20"
                text="Design is not just what it looks like. Design is how it works. "
                pathId="wave-path"
                viewBox="0 0 100 100"
                textClassName="text-[5px] fill-white/80"
                svgClassName="w-full h-auto"
                animationType="auto"
                duration={8}
                repeatCount="indefinite"
              />
            </div>
          </section>

          {/* Circular path */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Circular path / auto loop / 12s duration
            </p>
            <div className="w-full flex justify-center text-emerald-400/70">
              <AnimatedPathText
                path="M 50,10 A 40,40 0 1,1 49.99,10"
                text="BEIRUX DIGITAL AGENCY  ///  CRAFT MEETS CODE  ///  "
                pathId="circle-path"
                viewBox="0 0 100 100"
                textClassName="text-[6px] fill-emerald-400/70 tracking-[0.3em] uppercase"
                svgClassName="w-80 h-80"
                animationType="auto"
                duration={12}
                repeatCount="indefinite"
              />
            </div>
          </section>

          {/* S-curve path */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              S-curve / auto loop / 6s duration / visible path
            </p>
            <div className="w-full text-white/60">
              <AnimatedPathText
                path="M 5,90 C 25,90 25,10 50,10 S 75,90 95,90"
                text="Typography is the craft of endowing human language with a durable visual form. "
                pathId="scurve-path"
                viewBox="0 0 100 100"
                textClassName="text-[4px] fill-white/60"
                pathClassName="stroke-white/10"
                svgClassName="w-full h-auto"
                showPath
                animationType="auto"
                duration={6}
                repeatCount="indefinite"
              />
            </div>
          </section>

          {/* Gentle hill path, slow */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Gentle hill / auto loop / 16s slow drift
            </p>
            <div className="w-full text-purple-300/60">
              <AnimatedPathText
                path="M 0,70 Q 25,20 50,50 Q 75,80 100,30"
                text="Slow and deliberate, the letters trace the contour of the landscape. "
                pathId="hill-path"
                viewBox="0 0 100 100"
                textClassName="text-[4.5px] fill-purple-300/60"
                svgClassName="w-full h-auto"
                animationType="auto"
                duration={16}
                repeatCount="indefinite"
              />
            </div>
          </section>

          {/* Infinity / figure-8 path */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Figure-eight / auto loop / 10s / visible path
            </p>
            <div className="w-full flex justify-center text-amber-300/60">
              <AnimatedPathText
                path="M 50,50 C 80,10 100,10 100,50 C 100,90 80,90 50,50 C 20,10 0,10 0,50 C 0,90 20,90 50,50"
                text="Infinite motion, looping back on itself, a rhythm that never resolves. "
                pathId="figure8-path"
                viewBox="-5 0 110 100"
                textClassName="text-[4px] fill-amber-300/60"
                pathClassName="stroke-amber-300/10"
                svgClassName="w-full max-w-2xl h-auto"
                showPath
                animationType="auto"
                duration={10}
                repeatCount="indefinite"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
