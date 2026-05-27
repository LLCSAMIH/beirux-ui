"use client";

import ImageTrail from "@/components/ImageTrail";
import { BackLink } from "@/components/back-link";

const IMAGES = [
  "https://picsum.photos/seed/trail1/190/210",
  "https://picsum.photos/seed/trail2/190/210",
  "https://picsum.photos/seed/trail3/190/210",
  "https://picsum.photos/seed/trail4/190/210",
  "https://picsum.photos/seed/trail5/190/210",
  "https://picsum.photos/seed/trail6/190/210",
  "https://picsum.photos/seed/trail7/190/210",
  "https://picsum.photos/seed/trail8/190/210",
  "https://picsum.photos/seed/trail9/190/210",
  "https://picsum.photos/seed/trail10/190/210",
];

export default function ImageTrailPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            ImageTrail
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Mouse-following image trail with 8 animation variants. Images
            appear and fade as you move the cursor. GSAP powered.
          </p>
        </div>

        <div className="space-y-16">
          {/* Variant 1: Classic trail */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Variant 1 (classic fade)
            </h2>
            <div className="h-[500px] rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              <ImageTrail items={IMAGES} variant={1} />
            </div>
          </section>

          {/* Variant 3: Float up */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Variant 3 (float up)
            </h2>
            <div className="h-[500px] rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              <ImageTrail items={IMAGES} variant={3} />
            </div>
          </section>

          {/* Variant 7: Stack/gallery */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Variant 7 (stack gallery)
            </h2>
            <div className="h-[500px] rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              <ImageTrail items={IMAGES} variant={7} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
