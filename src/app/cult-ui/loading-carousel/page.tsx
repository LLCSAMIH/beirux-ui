"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link";
import LoadingCarousel from "@/components/ui/loading-carousel";

const customTips = [
  {
    text: "Tip 1: Components install with a single command via the shadcn registry.",
    image: "https://placehold.co/800x400/1a1a2e/e0e0ff?text=Tip+1",
  },
  {
    text: "Tip 2: Every component is copy-paste. You own the code, no runtime dependency.",
    image: "https://placehold.co/800x400/1a1a2e/e0e0ff?text=Tip+2",
  },
  {
    text: "Tip 3: Combine multiple libraries freely. Motion, GSAP, and CSS coexist.",
    image: "https://placehold.co/800x400/1a1a2e/e0e0ff?text=Tip+3",
  },
];

export default function LoadingCarouselPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Loading Carousel
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Auto-playing carousel for loading states, onboarding tips, or
            marketing highlights. Built on Embla with motion transitions.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Default (built-in tips)
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <LoadingCarousel />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Custom tips with navigation
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <LoadingCarousel
              tips={customTips}
              showNavigation
              showIndicators
              showProgress
            />
          </div>
        </section>

        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Square aspect ratio, text on top
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <LoadingCarousel
              tips={customTips}
              aspectRatio="square"
              textPosition="top"
              showIndicators
            />
          </div>
        </section>
      </div>
    </div>
  );
}
