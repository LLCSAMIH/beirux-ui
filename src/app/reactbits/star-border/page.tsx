"use client";

export const dynamic = "force-dynamic";

import StarBorder from "@/components/StarBorder";
import { BackLink } from "@/components/back-link";

export default function StarBorderPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Star Border
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Animated star-light border effect. A radial gradient dot orbits the
            element edges, creating a glowing perimeter trace. Renders as any
            HTML element via the polymorphic &ldquo;as&rdquo; prop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Default (white, 6s) */}
          <div className="flex flex-col items-center gap-4">
            <StarBorder>
              Star Border
            </StarBorder>
            <p className="text-xs text-neutral-500 text-center">
              Default (white, 6s, thickness 1)
            </p>
          </div>

          {/* Cyan, faster */}
          <div className="flex flex-col items-center gap-4">
            <StarBorder color="cyan" speed="3s">
              Fast Cyan
            </StarBorder>
            <p className="text-xs text-neutral-500 text-center">
              Cyan, 3s speed
            </p>
          </div>

          {/* Orange, thick, rendered as a div */}
          <div className="flex flex-col items-center gap-4">
            <StarBorder as="div" color="#f97316" speed="8s" thickness={2}>
              Thick Orange Div
            </StarBorder>
            <p className="text-xs text-neutral-500 text-center">
              Orange, 8s, thickness 2, as=&quot;div&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
