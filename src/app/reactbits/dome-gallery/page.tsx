"use client";

import DomeGallery from "@/components/DomeGallery";
import { BackLink } from "@/components/back-link";

export default function DomeGalleryPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Dome Gallery
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Curved 3D image gallery rendered on a canvas dome. Drag to
            rotate, click an image to enlarge it.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {/* Default */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-full h-[500px] rounded-xl border border-white/10 overflow-hidden">
              <DomeGallery />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Default images, drag to rotate
            </p>
          </div>

          {/* Custom images, grayscale */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="w-full h-[500px] rounded-xl border border-white/10 overflow-hidden">
              <DomeGallery
                images={[
                  "https://picsum.photos/seed/dome1/600/400",
                  "https://picsum.photos/seed/dome2/600/400",
                  "https://picsum.photos/seed/dome3/600/400",
                  "https://picsum.photos/seed/dome4/600/400",
                  "https://picsum.photos/seed/dome5/600/400",
                  "https://picsum.photos/seed/dome6/600/400",
                ]}
                grayscale
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Custom images with grayscale filter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
