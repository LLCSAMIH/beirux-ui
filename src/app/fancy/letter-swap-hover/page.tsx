"use client";

import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import LetterSwapPingPong from "@/components/fancy/text/letter-swap-pingpong-anim";
import { BackLink } from "@/components/back-link";

export default function LetterSwapHoverPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Letter Swap Hover
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Two hover variants: Forward (one-shot swap) and PingPong
            (swap out on hover, swap back on leave). Both support
            configurable stagger, direction, and spring physics.
          </p>
        </div>

        <div className="space-y-16">
          {/* Forward variant: default */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Forward variant (default spring, reverse)
            </p>
            <div className="flex justify-center">
              <LetterSwapForward
                label="Hover me"
                className="text-5xl md:text-7xl font-bold text-white cursor-pointer"
              />
            </div>
          </section>

          {/* PingPong variant: default */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              PingPong variant (swaps back on mouse leave)
            </p>
            <div className="flex justify-center">
              <LetterSwapPingPong
                label="PingPong"
                className="text-5xl md:text-7xl font-bold text-emerald-400 cursor-pointer"
              />
            </div>
          </section>

          {/* Forward: stagger from center */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Forward / stagger from center / slow (0.06s)
            </p>
            <div className="flex justify-center">
              <LetterSwapForward
                label="BEIRUX"
                staggerFrom="center"
                staggerDuration={0.06}
                className="text-5xl md:text-7xl font-bold text-purple-400 cursor-pointer"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
