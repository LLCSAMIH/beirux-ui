"use client";

import {
  DitherImage,
  DitherImageFrame,
  DitherImageOverlay,
  DitherImageContent,
  DitherImageCaption,
  DitherImageReveal,
} from "@/components/ui/dither-image";
import { BackLink } from "@/components/back-link";

export default function DitherImagePage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Dither Image
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* Default */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Default
            </h2>
            <DitherImage>
              <DitherImageFrame size="lg" aspectRatio="video">
                <DitherImageOverlay
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
                  alt="Mountain landscape"
                  width={800}
                  height={450}
                />
                <DitherImageContent
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
                  alt="Mountain landscape"
                  width={800}
                  height={450}
                />
              </DitherImageFrame>
              <DitherImageCaption>A mountain landscape with dithering effect</DitherImageCaption>
            </DitherImage>
          </section>

          {/* With Reveal */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              With Reveal Animation
            </h2>
            <DitherImage>
              <DitherImageFrame size="md" aspectRatio="square">
                <DitherImageReveal>
                  <DitherImageOverlay
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop"
                    alt="Night sky"
                    width={600}
                    height={600}
                  />
                </DitherImageReveal>
                <DitherImageContent
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop"
                  alt="Night sky"
                  width={600}
                  height={600}
                />
              </DitherImageFrame>
              <DitherImageCaption>Hover to reveal the dithered overlay</DitherImageCaption>
            </DitherImage>
          </section>

          {/* Small size */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Small Size
            </h2>
            <DitherImage>
              <DitherImageFrame size="sm" aspectRatio="wide">
                <DitherImageOverlay
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=300&fit=crop"
                  alt="Forest path"
                  width={600}
                  height={300}
                />
                <DitherImageContent
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=300&fit=crop"
                  alt="Forest path"
                  width={600}
                  height={300}
                />
              </DitherImageFrame>
            </DitherImage>
          </section>
        </div>
      </div>
    </div>
  );
}
