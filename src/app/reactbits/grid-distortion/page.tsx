"use client";

import GridDistortion from "@/components/GridDistortion";
import { BackLink } from "@/components/back-link";

export default function GridDistortionPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="absolute inset-0">
        <GridDistortion imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3 drop-shadow-lg">
            Grid Distortion
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
        </div>
      </div>
    </div>
  );
}
