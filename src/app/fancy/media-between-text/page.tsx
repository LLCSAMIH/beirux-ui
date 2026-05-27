"use client";

import { MediaBetweenText } from "@/components/fancy/blocks/media-between-text";
import { BackLink } from "@/components/back-link";

export default function MediaBetweenTextPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Media Between Text
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            Reveals an image or video between two text fragments on hover or
            when scrolled into view.
          </p>
        </div>

        <div className="space-y-20">
          {/* Hover trigger with image */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Hover trigger (image)
            </p>
            <MediaBetweenText
              firstText="Build"
              secondText="products."
              mediaUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop"
              mediaType="image"
              alt="Abstract gradient"
              triggerType="hover"
              as="h2"
              className="items-center justify-center gap-2 cursor-pointer"
              leftTextClassName="text-5xl md:text-7xl font-semibold tracking-tight text-white"
              rightTextClassName="text-5xl md:text-7xl font-semibold tracking-tight text-white"
              mediaContainerClassName="w-[180px] h-[80px] rounded-xl overflow-hidden shrink-0"
            />
          </section>

          {/* Hover trigger, different image */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Hover trigger (second example)
            </p>
            <MediaBetweenText
              firstText="Design"
              secondText="systems."
              mediaUrl="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=200&fit=crop"
              mediaType="image"
              alt="Colorful abstract"
              triggerType="hover"
              as="h2"
              className="items-center justify-center gap-2 cursor-pointer"
              leftTextClassName="text-5xl md:text-7xl font-semibold tracking-tight text-white"
              rightTextClassName="text-5xl md:text-7xl font-semibold tracking-tight text-white"
              mediaContainerClassName="w-[160px] h-[70px] rounded-xl overflow-hidden shrink-0"
            />
          </section>

          {/* In-view trigger */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              In-view trigger (reveals on scroll)
            </p>
            <MediaBetweenText
              firstText="Ship"
              secondText="faster."
              mediaUrl="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=400&h=200&fit=crop"
              mediaType="image"
              alt="Neon light"
              triggerType="inView"
              as="h2"
              className="items-center justify-center gap-2"
              leftTextClassName="text-5xl md:text-7xl font-semibold tracking-tight text-white"
              rightTextClassName="text-5xl md:text-7xl font-semibold tracking-tight text-white"
              mediaContainerClassName="w-[200px] h-[90px] rounded-xl overflow-hidden shrink-0"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
