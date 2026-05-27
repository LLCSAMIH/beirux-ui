"use client";

export const dynamic = "force-dynamic";

import { TextAnimate } from "@/components/ui/text-animate";
import { BackLink } from "@/components/back-link";

export default function TextAnimatePage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Text Animate
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* fadeInUp: letters fade in from below */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Fade In Up (letter-by-letter from below)
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 overflow-hidden">
              <TextAnimate
                text="Elegant entrances"
                type="fadeInUp"
                className="!mt-0 !py-0 !pb-0 !px-0 !text-2xl md:!text-3xl !text-white"
              />
            </div>
          </section>

          {/* popIn: letters scale up from zero */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Pop In (scale from zero with spring)
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 overflow-hidden">
              <TextAnimate
                text="Bold and bouncy"
                type="popIn"
                className="!mt-0 !py-0 !pb-0 !px-0 !text-2xl md:!text-3xl !text-white"
              />
            </div>
          </section>

          {/* whipInUp: fast vertical whip with overshoot */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Whip In Up (vertical whip with overshoot)
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 overflow-hidden">
              <TextAnimate
                text="Kinetic energy"
                type="whipInUp"
                className="!mt-0 !py-0 !pb-0 !px-0 !text-2xl md:!text-3xl !text-white"
              />
            </div>
          </section>

          {/* rollIn: word-by-word with per-character stagger */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Roll In (word-by-word, per-character stagger)
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 overflow-hidden [&>h2]:!mt-0 [&>h2]:!py-0 [&>h2]:!pb-0 [&>h2]:!px-0 [&>h2]:!text-2xl [&>h2]:md:!text-3xl [&>h2]:!text-white">
              <TextAnimate
                text="Smooth and dramatic"
                type="rollIn"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
