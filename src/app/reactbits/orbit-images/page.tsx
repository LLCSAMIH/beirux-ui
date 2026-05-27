"use client";

export const dynamic = "force-dynamic";

import OrbitImages from "@/components/OrbitImages";
import { BackLink } from "@/components/back-link";

const placeholderImages = [
  "https://picsum.photos/seed/orbit1/200/200",
  "https://picsum.photos/seed/orbit2/200/200",
  "https://picsum.photos/seed/orbit3/200/200",
  "https://picsum.photos/seed/orbit4/200/200",
  "https://picsum.photos/seed/orbit5/200/200",
  "https://picsum.photos/seed/orbit6/200/200",
  "https://picsum.photos/seed/orbit7/200/200",
  "https://picsum.photos/seed/orbit8/200/200",
];

export default function OrbitImagesPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Orbit Images
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Images orbiting along configurable paths: ellipse, circle, star,
            heart, infinity, and more. Powered by CSS offset-path and Motion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Demo 1: Ellipse orbit */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full aspect-square relative">
              <OrbitImages
                images={placeholderImages.slice(0, 6)}
                shape="ellipse"
                radiusX={250}
                radiusY={80}
                duration={30}
                itemSize={48}
                rotation={-8}
                responsive
                showPath
                pathColor="rgba(255,255,255,0.06)"
                centerContent={
                  <span className="text-white/20 text-sm font-medium">
                    Ellipse
                  </span>
                }
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Ellipse path (6 images, 30s loop)
            </p>
          </div>

          {/* Demo 2: Circle orbit */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full aspect-square relative">
              <OrbitImages
                images={placeholderImages}
                shape="circle"
                radius={200}
                duration={25}
                itemSize={40}
                rotation={0}
                responsive
                showPath
                pathColor="rgba(255,255,255,0.06)"
                centerContent={
                  <span className="text-white/20 text-sm font-medium">
                    Circle
                  </span>
                }
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Circle path (8 images, 25s loop)
            </p>
          </div>

          {/* Demo 3: Star orbit */}
          <div className="flex flex-col items-center gap-4 md:col-span-2">
            <div className="w-full max-w-lg aspect-square relative mx-auto">
              <OrbitImages
                images={placeholderImages.slice(0, 5)}
                shape="star"
                radius={220}
                starPoints={5}
                starInnerRatio={0.4}
                duration={35}
                itemSize={44}
                rotation={0}
                responsive
                showPath
                pathColor="rgba(255,255,255,0.06)"
                centerContent={
                  <span className="text-white/20 text-sm font-medium">
                    Star
                  </span>
                }
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Star path (5 images, 5-point star)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
