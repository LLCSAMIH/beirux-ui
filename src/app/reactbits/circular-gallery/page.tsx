"use client";

import CircularGallery from "@/components/CircularGallery";

const galleryItems = [
  {
    image: "https://picsum.photos/seed/arch/800/600",
    text: "Architecture",
  },
  {
    image: "https://picsum.photos/seed/ocean/800/600",
    text: "Ocean",
  },
  {
    image: "https://picsum.photos/seed/mountain/800/600",
    text: "Mountains",
  },
  {
    image: "https://picsum.photos/seed/city-night/800/600",
    text: "City Nights",
  },
  {
    image: "https://picsum.photos/seed/forest/800/600",
    text: "Forest",
  },
  {
    image: "https://picsum.photos/seed/desert/800/600",
    text: "Desert",
  },
  {
    image: "https://picsum.photos/seed/aurora/800/600",
    text: "Aurora",
  },
  {
    image: "https://picsum.photos/seed/canyon/800/600",
    text: "Canyon",
  },
  {
    image: "https://picsum.photos/seed/volcano/800/600",
    text: "Volcano",
  },
  {
    image: "https://picsum.photos/seed/glacier/800/600",
    text: "Glacier",
  },
];

export default function CircularGalleryPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#09090b]">
      <div className="absolute inset-0">
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          font="bold 30px DM Sans"
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-8 flex justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white/90">
            Circular Gallery
          </h1>
          <p className="mt-2 text-sm font-medium tracking-[0.2em] uppercase text-white/40">
            ReactBits
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <p className="text-xs tracking-widest uppercase text-white/30">
          Scroll or drag to explore
        </p>
      </div>
    </div>
  );
}
