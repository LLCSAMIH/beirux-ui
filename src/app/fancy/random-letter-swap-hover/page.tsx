"use client";

import RandomLetterSwapForward from "@/components/fancy/text/random-letter-swap-forward-anim";
import RandomLetterSwapPingPong from "@/components/fancy/text/random-letter-swap-pingpong-anim";
import { BackLink } from "@/components/back-link";

export default function RandomLetterSwapHoverPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Random Letter Swap
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Like Letter Swap, but letters animate in a randomized order
            instead of sequentially. Available in Forward (one-shot)
            and PingPong (reversible) variants.
          </p>
        </div>

        <div className="space-y-16">
          {/* Forward: default */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Forward variant (random order, one-shot)
            </p>
            <div className="flex justify-center">
              <RandomLetterSwapForward
                label="Random swap"
                className="text-5xl md:text-7xl font-bold text-white cursor-pointer"
              />
            </div>
          </section>

          {/* PingPong: default */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              PingPong variant (reverses on mouse leave)
            </p>
            <div className="flex justify-center">
              <RandomLetterSwapPingPong
                label="PingPong"
                className="text-5xl md:text-7xl font-bold text-emerald-400 cursor-pointer"
              />
            </div>
          </section>

          {/* Forward: slow stagger, upward direction */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Forward / slow stagger (0.05s) / upward (reverse off)
            </p>
            <div className="flex justify-center">
              <RandomLetterSwapForward
                label="BEIRUX"
                reverse={false}
                staggerDuration={0.05}
                className="text-5xl md:text-7xl font-bold text-purple-400 cursor-pointer"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
