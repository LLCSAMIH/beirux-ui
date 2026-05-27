"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link";
import ThreeDPhotoCarousel from "@/components/ui/three-d-carousel";

export default function ThreeDCarouselPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            3D Carousel
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            A draggable 3D photo carousel built on CSS perspective transforms
            and Motion. Cards orbit a cylinder that responds to drag velocity
            with spring physics. Click any card to expand it full-screen.
          </p>
        </div>

        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Drag to spin, click to expand
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <ThreeDPhotoCarousel />
          </div>
        </section>
      </div>
    </div>
  );
}
