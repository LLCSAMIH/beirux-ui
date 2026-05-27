"use client";

export const dynamic = "force-dynamic";

import BounceCards from "@/components/BounceCards";
import { BackLink } from "@/components/back-link";

const images = [
  "https://picsum.photos/seed/bounce1/400/400",
  "https://picsum.photos/seed/bounce2/400/400",
  "https://picsum.photos/seed/bounce3/400/400",
  "https://picsum.photos/seed/bounce4/400/400",
  "https://picsum.photos/seed/bounce5/400/400",
];

export default function BounceCardsPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Bounce Cards
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Cards spring into view with elastic animation. Each card fans out
            with configurable rotation and offset.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {/* Default fan */}
          <div className="flex flex-col items-center gap-4">
            <BounceCards
              images={images}
              containerWidth={500}
              containerHeight={350}
              animationDelay={0.3}
              animationStagger={0.06}
              easeType="elastic.out(1, 0.8)"
              transformStyles={[
                "rotate(10deg) translate(-170px)",
                "rotate(5deg) translate(-85px)",
                "rotate(-3deg)",
                "rotate(-10deg) translate(85px)",
                "rotate(2deg) translate(170px)",
              ]}
            />
            <p className="text-xs text-neutral-500 text-center mt-4">
              Default fan layout (elastic ease)
            </p>
          </div>

          {/* Hover enabled, tighter stack */}
          <div className="flex flex-col items-center gap-4">
            <BounceCards
              images={images.slice(0, 3)}
              containerWidth={400}
              containerHeight={350}
              animationDelay={0.6}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={[
                "rotate(-5deg) translate(-60px)",
                "rotate(0deg)",
                "rotate(5deg) translate(60px)",
              ]}
              enableHover
            />
            <p className="text-xs text-neutral-500 text-center mt-4">
              3 cards, hover to straighten
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
