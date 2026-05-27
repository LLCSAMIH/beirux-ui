"use client";

import { BackLink } from "@/components/back-link";
import dynamic from "next/dynamic";

const Masonry = dynamic(() => import("@/components/Masonry"), {
  ssr: false,
});

const sampleItems = Array.from({ length: 16 }, (_, i) => ({
  id: String(i + 1),
  img: `https://picsum.photos/seed/masonry-${i}/400/${280 + (i % 4) * 60}`,
  url: "#",
  height: 280 + (i % 4) * 60,
}));

export default function MasonryPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Masonry
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            GSAP-animated responsive masonry grid with entrance animations,
            hover scale, and blur-to-focus transitions.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Default from bottom */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs text-neutral-500 text-center mb-2">
              Animate from bottom (default), scale on hover, blur to focus
            </p>
            <div className="w-full">
              <Masonry
                items={sampleItems}
                animateFrom="bottom"
                scaleOnHover={true}
                blurToFocus={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
