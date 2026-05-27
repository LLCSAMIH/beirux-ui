"use client";

export const dynamic = "force-dynamic";

import CarouselCards from "@/components/kokonutui/carousel-cards";
import { BackLink } from "@/components/back-link";

export default function CarouselCardsPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
            KokonutUI
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Carousel Cards
          </h1>
          <p className="mt-4 text-lg text-neutral-400 max-w-xl">
            Horizontally scrollable card carousels with navigation arrows,
            snap-to-card scrolling, image hover zoom, and inline badges.
            Airbnb-style experience cards with ratings, pricing, and favorites.
          </p>
        </div>

        <CarouselCards />
      </div>
    </div>
  );
}
