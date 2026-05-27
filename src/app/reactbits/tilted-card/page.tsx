"use client";

import TiltedCard from "@/components/TiltedCard";
import { BackLink } from "@/components/back-link";

export default function TiltedCardPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Tilted Card
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Perspective tilt on hover with spring physics. Tooltip follows the cursor and rotates with mouse velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Default settings */}
          <div className="flex flex-col items-center gap-4">
            <TiltedCard
              imageSrc="https://picsum.photos/seed/arch/400/400"
              altText="Architecture"
              captionText="Architecture"
              containerHeight="320px"
              containerWidth="280px"
              imageHeight="280px"
              imageWidth="280px"
              scaleOnHover={1.1}
              rotateAmplitude={14}
              showTooltip={true}
              showMobileWarning={false}
            />
            <p className="text-xs text-neutral-500 text-center">
              Default (amplitude 14, scale 1.1)
            </p>
          </div>

          {/* Subtle tilt */}
          <div className="flex flex-col items-center gap-4">
            <TiltedCard
              imageSrc="https://picsum.photos/seed/ocean/400/400"
              altText="Ocean"
              captionText="Ocean"
              containerHeight="320px"
              containerWidth="280px"
              imageHeight="280px"
              imageWidth="280px"
              scaleOnHover={1.05}
              rotateAmplitude={8}
              showTooltip={true}
              showMobileWarning={false}
            />
            <p className="text-xs text-neutral-500 text-center">
              Subtle (amplitude 8, scale 1.05)
            </p>
          </div>

          {/* Aggressive tilt with overlay */}
          <div className="flex flex-col items-center gap-4">
            <TiltedCard
              imageSrc="https://picsum.photos/seed/city-night/400/400"
              altText="City Nights"
              captionText="City Nights"
              containerHeight="320px"
              containerWidth="280px"
              imageHeight="280px"
              imageWidth="280px"
              scaleOnHover={1.2}
              rotateAmplitude={24}
              showTooltip={true}
              showMobileWarning={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="flex items-end h-[280px] w-[280px] p-4">
                  <span className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                    Overlay content
                  </span>
                </div>
              }
            />
            <p className="text-xs text-neutral-500 text-center">
              Aggressive (amplitude 24, scale 1.2, overlay)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
