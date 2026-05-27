"use client";

export const dynamic = "force-dynamic";

import { useRef } from "react";
import BoxCarousel, {
  BoxCarouselRef,
  CarouselItem,
} from "@/components/fancy/carousel/box-carousel";
import { BackLink } from "@/components/back-link";

const horizontalItems: CarouselItem[] = [
  { id: "h1", type: "image", src: "", alt: "Coral" },
  { id: "h2", type: "image", src: "", alt: "Indigo" },
  { id: "h3", type: "image", src: "", alt: "Emerald" },
  { id: "h4", type: "image", src: "", alt: "Amber" },
  { id: "h5", type: "image", src: "", alt: "Violet" },
];

const verticalItems: CarouselItem[] = [
  { id: "v1", type: "image", src: "", alt: "Sky" },
  { id: "v2", type: "image", src: "", alt: "Rose" },
  { id: "v3", type: "image", src: "", alt: "Lime" },
  { id: "v4", type: "image", src: "", alt: "Tangerine" },
];

function ColorFace({ color, label }: { color: string; label: string }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <span className="text-white text-lg font-semibold tracking-wide drop-shadow-md">
        {label}
      </span>
    </div>
  );
}

export default function BoxCarouselPage() {
  const horizontalRef = useRef<BoxCarouselRef>(null);
  const verticalRef = useRef<BoxCarouselRef>(null);

  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="flex flex-col items-center justify-center gap-20 px-6 py-28">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Box Carousel
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
        </div>

        {/* Horizontal (left) rotation */}
        <section className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/40">
            Horizontal rotation (drag or use arrows)
          </p>
          <BoxCarousel
            ref={horizontalRef}
            items={horizontalItems}
            width={400}
            height={280}
            direction="left"
            autoPlay
            autoPlayInterval={4000}
            debug
          />
          <div className="flex gap-3">
            <button
              onClick={() => horizontalRef.current?.prev()}
              className="px-4 py-2 rounded-md bg-white/10 text-white/70 text-sm hover:bg-white/20 transition-colors"
            >
              Prev
            </button>
            <button
              onClick={() => horizontalRef.current?.next()}
              className="px-4 py-2 rounded-md bg-white/10 text-white/70 text-sm hover:bg-white/20 transition-colors"
            >
              Next
            </button>
          </div>
        </section>

        {/* Vertical (top) rotation */}
        <section className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/40">
            Vertical rotation (drag or use up/down arrows)
          </p>
          <BoxCarousel
            ref={verticalRef}
            items={verticalItems}
            width={400}
            height={280}
            direction="top"
            debug
          />
          <div className="flex gap-3">
            <button
              onClick={() => verticalRef.current?.prev()}
              className="px-4 py-2 rounded-md bg-white/10 text-white/70 text-sm hover:bg-white/20 transition-colors"
            >
              Prev
            </button>
            <button
              onClick={() => verticalRef.current?.next()}
              className="px-4 py-2 rounded-md bg-white/10 text-white/70 text-sm hover:bg-white/20 transition-colors"
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
