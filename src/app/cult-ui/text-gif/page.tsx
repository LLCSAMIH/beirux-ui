"use client";

export const dynamic = "force-dynamic";

import { TextGif } from "@/components/ui/text-gif";
import { BackLink } from "@/components/back-link";

export default function TextGifPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Text GIF
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Fire effect
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 flex justify-center">
              <TextGif
                gifUrl="https://media.giphy.com/media/3zvbrvbRe7wxBofOBI/giphy.gif"
                text="BEIRUX"
                size="xxl"
                weight="black"
                fallbackColor="white"
              />
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Ocean waves
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 flex justify-center">
              <TextGif
                gifUrl="https://media.giphy.com/media/fnglNFjBGiyAFtm6ke/giphy.gif"
                text="DIGITAL"
                size="xl"
                weight="bold"
                fallbackColor="white"
              />
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Multiple sizes
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 flex flex-col items-center gap-4">
              <TextGif gifUrl="https://media.giphy.com/media/9Pmfazv34l7aNIKK05/giphy.gif" text="Small" size="sm" fallbackColor="white" />
              <TextGif gifUrl="https://media.giphy.com/media/9Pmfazv34l7aNIKK05/giphy.gif" text="Medium" size="lg" fallbackColor="white" />
              <TextGif gifUrl="https://media.giphy.com/media/9Pmfazv34l7aNIKK05/giphy.gif" text="Large" size="xxl" weight="black" fallbackColor="white" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
