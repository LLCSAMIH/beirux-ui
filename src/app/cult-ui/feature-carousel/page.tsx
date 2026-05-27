"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link";

export default function FeatureCarouselPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Feature Carousel
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Note
            </h2>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-neutral-300">
                The Feature Carousel component requires custom images (StaticImageData) to be
                provided for each step. It also depends on{" "}
                <code className="text-sm bg-white/10 px-1.5 py-0.5 rounded">react-wrap-balancer</code>.
                To see it in action, provide your own images via the{" "}
                <code className="text-sm bg-white/10 px-1.5 py-0.5 rounded">image</code> prop.
              </p>
              <pre className="mt-4 text-xs text-neutral-500 overflow-x-auto">
{`import { FeatureCarousel } from "@/components/ui/feature-carousel";

<FeatureCarousel
  title="My Feature"
  description="Feature description"
  image={{
    step1light1: "/step1-1.png",
    step1light2: "/step1-2.png",
    step2light1: "/step2-1.png",
    step2light2: "/step2-2.png",
    step3light: "/step3.png",
    step4light: "/step4.png",
    alt: "Feature carousel images",
  }}
/>`}
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              CSS Required
            </h2>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-neutral-300 mb-3">
                Add this to your globals.css for the gradient hover effect:
              </p>
              <pre className="text-xs text-neutral-500 overflow-x-auto">
{`.animated-cards::before {
  @apply pointer-events-none absolute select-none
         rounded-3xl opacity-0 transition-opacity
         duration-300 hover:opacity-100;
  background: radial-gradient(
    1000px circle at var(--x) var(--y),
    #c9ee80 0, #eebbe2 10%, #adc0ec 25%,
    #c9ee80 35%, transparent 50%
  );
  z-index: -1;
  content: "";
  inset: -1px;
}`}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
