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
            imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-11.5 -10.232 23 20.463'%3E%3Ccircle r='2.05' fill='%2361dafb'/%3E%3Cg stroke='%2361dafb' fill='none' stroke-width='1'%3E%3Cellipse rx='11' ry='4.2'/%3E%3Cellipse rx='11' ry='4.2' transform='rotate(60)'/%3E%3Cellipse rx='11' ry='4.2' transform='rotate(120)'/%3E%3C/g%3E%3C/svg%3E"
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
            imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' rx='12' fill='%233178c6'/%3E%3Ctext x='22' y='96' font-size='80' font-weight='bold' fill='white' font-family='Arial'%3ETS%3C/text%3E%3C/svg%3E"
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
            imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' rx='12' fill='%23000'/%3E%3Ctext x='18' y='88' font-size='60' font-weight='bold' fill='white' font-family='Arial'%3EN%3C/text%3E%3C/svg%3E"
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
