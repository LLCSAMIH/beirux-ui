"use client";

export const dynamic = "force-dynamic";

import CenterUnderline from "@/components/fancy/text/underline-center";
import GoesOutComesInUnderline from "@/components/fancy/text/underline-goes-out-comes-in";
import { BackLink } from "@/components/back-link";

export default function UnderlineAnimationPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Underline Animation
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Two underline animation variants: center-origin expansion
            and side-to-side (goes out, comes back in).
          </p>
        </div>

        <div className="space-y-24">
          {/* Demo 1: Center underline */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Center origin / spring transition / default height
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
              <CenterUnderline className="text-3xl md:text-4xl text-white/90">
                Hover me
              </CenterUnderline>
              <CenterUnderline className="text-3xl md:text-4xl text-emerald-400/80">
                Design
              </CenterUnderline>
              <CenterUnderline className="text-3xl md:text-4xl text-purple-300/80">
                Systems
              </CenterUnderline>
            </div>
          </section>

          {/* Demo 2: Goes out comes in, left direction */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Goes out, comes in / left direction / 0.5s ease-out
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
              <GoesOutComesInUnderline
                direction="left"
                className="text-3xl md:text-4xl text-white/90"
              >
                Left sweep
              </GoesOutComesInUnderline>
              <GoesOutComesInUnderline
                direction="left"
                className="text-3xl md:text-4xl text-amber-300/80"
              >
                Navigation
              </GoesOutComesInUnderline>
            </div>
          </section>

          {/* Demo 3: Goes out comes in, right direction, thicker underline */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Goes out, comes in / right direction / thick underline (0.15 ratio)
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
              <GoesOutComesInUnderline
                direction="right"
                underlineHeightRatio={0.15}
                className="text-3xl md:text-4xl text-rose-400/80"
              >
                Right sweep
              </GoesOutComesInUnderline>
              <GoesOutComesInUnderline
                direction="right"
                underlineHeightRatio={0.15}
                className="text-3xl md:text-4xl text-sky-400/80"
              >
                Bold links
              </GoesOutComesInUnderline>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
