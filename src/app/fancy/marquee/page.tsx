"use client";

export const dynamic = "force-dynamic";

import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";
import { BackLink } from "@/components/back-link";

const logos = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Motion", color: "#FF4154" },
  { name: "Vercel", color: "#FFFFFF" },
];

export default function MarqueePage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Simple Marquee
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Infinite scrolling content in any direction. Supports hover
            slowdown, scroll-reactive speed, and drag interaction.
          </p>
        </div>

        <div className="space-y-24">
          {/* Demo 1: Text marquee, default speed, left direction */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Text / left / baseVelocity 3 / hover slowdown
            </p>
            <div className="overflow-hidden rounded-xl border border-white/10 py-6">
              <SimpleMarquee
                direction="left"
                baseVelocity={3}
                slowdownOnHover
                slowDownFactor={0.2}
              >
                <span className="text-2xl md:text-3xl font-semibold text-white/80 whitespace-nowrap px-8">
                  BEIRUX Digital Agency
                </span>
                <span className="text-2xl md:text-3xl font-semibold text-white/30 whitespace-nowrap px-8">
                  ///
                </span>
                <span className="text-2xl md:text-3xl font-semibold text-emerald-400/70 whitespace-nowrap px-8">
                  Craft Meets Code
                </span>
                <span className="text-2xl md:text-3xl font-semibold text-white/30 whitespace-nowrap px-8">
                  ///
                </span>
              </SimpleMarquee>
            </div>
          </section>

          {/* Demo 2: Logo pills, faster, right direction */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Pill badges / right / baseVelocity 8 / fast
            </p>
            <div className="overflow-hidden rounded-xl border border-white/10 py-6">
              <SimpleMarquee direction="right" baseVelocity={8}>
                {logos.map((logo) => (
                  <span
                    key={logo.name}
                    className="inline-flex items-center gap-2 mx-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 whitespace-nowrap"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: logo.color }}
                    />
                    <span className="text-sm font-medium text-white/70">
                      {logo.name}
                    </span>
                  </span>
                ))}
              </SimpleMarquee>
            </div>
          </section>

          {/* Demo 3: Vertical marquee, slow */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Vertical / up / baseVelocity 2 / draggable
            </p>
            <div className="overflow-hidden rounded-xl border border-white/10 h-64">
              <SimpleMarquee
                direction="up"
                baseVelocity={2}
                draggable
                grabCursor
                dragAwareDirection
              >
                {[
                  "Design systems that scale",
                  "Performance-first architecture",
                  "Motion with purpose",
                  "Agent-native workflows",
                  "Invisible infrastructure",
                  "Ship, measure, iterate",
                ].map((line) => (
                  <div
                    key={line}
                    className="py-4 px-6 text-center"
                  >
                    <p className="text-lg font-medium text-white/60">
                      {line}
                    </p>
                    <div className="w-12 h-px bg-white/10 mx-auto mt-4" />
                  </div>
                ))}
              </SimpleMarquee>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
