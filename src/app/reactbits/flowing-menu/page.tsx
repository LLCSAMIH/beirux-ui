"use client";

export const dynamic = "force-dynamic";

import FlowingMenu from "@/components/FlowingMenu";
import { BackLink } from "@/components/back-link";

const defaultItems = [
  { link: "#", text: "Home", image: "https://picsum.photos/seed/flow1/600/400" },
  { link: "#", text: "About", image: "https://picsum.photos/seed/flow2/600/400" },
  { link: "#", text: "Work", image: "https://picsum.photos/seed/flow3/600/400" },
  { link: "#", text: "Contact", image: "https://picsum.photos/seed/flow4/600/400" },
];

export default function FlowingMenuPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Flowing Menu
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Full-height menu with a liquid marquee reveal on hover. GSAP
            edge-detection determines the slide direction.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {/* Default */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-full h-[450px] rounded-xl border border-white/10 overflow-hidden">
              <FlowingMenu items={defaultItems} />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Default (dark bg, white marquee)
            </p>
          </div>

          {/* Inverted colors */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-full h-[450px] rounded-xl border border-white/10 overflow-hidden">
              <FlowingMenu
                items={defaultItems}
                bgColor="#fafafa"
                textColor="#18181b"
                marqueeBgColor="#18181b"
                marqueeTextColor="#fafafa"
                borderColor="#e5e5e5"
                speed={10}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Light theme, faster marquee (speed 10)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
