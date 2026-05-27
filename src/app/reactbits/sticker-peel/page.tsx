"use client";

import StickerPeel from "@/components/StickerPeel";
import { BackLink } from "@/components/back-link";

export default function StickerPeelPage() {
  return (
    <div className="relative min-h-screen w-screen bg-[#18181b] overflow-hidden">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Sticker Peel
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            GSAP Draggable stickers with realistic peel-back on hover, SVG
            lighting, and drop shadows. Drag to move, hover to peel. Uses
            clip-path animation for the fold effect.
          </p>
        </div>

        {/* Sticker playground area */}
        <div className="relative w-full h-[60vh] rounded-xl border border-white/10 bg-[#111] overflow-hidden">
          <StickerPeel
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png"
            width={160}
            rotate={15}
            peelBackHoverPct={25}
            peelBackActivePct={35}
            shadowIntensity={0.5}
            lightingIntensity={0.1}
            initialPosition={{ x: 60, y: 40 }}
            className=""
          />

          <StickerPeel
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/200px-Typescript_logo_2020.svg.png"
            width={120}
            rotate={-10}
            peelBackHoverPct={30}
            peelBackActivePct={45}
            shadowIntensity={0.7}
            lightingIntensity={0.15}
            initialPosition={{ x: 300, y: 100 }}
            peelDirection={180}
            className=""
          />

          <StickerPeel
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/200px-Nextjs-logo.svg.png"
            width={140}
            rotate={5}
            peelBackHoverPct={20}
            peelBackActivePct={30}
            shadowIntensity={0.4}
            initialPosition={{ x: 160, y: 220 }}
            className=""
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/20">
            Drag stickers around. Hover to peel.
          </div>
        </div>
      </div>
    </div>
  );
}
