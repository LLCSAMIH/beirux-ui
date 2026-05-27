"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link"
import { LogoCarousel } from "@/components/ui/logo-carousel"

export default function LogoCarouselPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Logo Carousel
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Animated logo grid with staggered column cycling. Logos shuffle,
            distribute across columns, and rotate with spring-based blur
            transitions.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default: 2 columns */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              2 columns (default)
            </h2>
            <div className="flex justify-center">
              <LogoCarousel />
            </div>
          </section>

          {/* 3 columns */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              3 columns
            </h2>
            <div className="flex justify-center">
              <LogoCarousel columnCount={3} />
            </div>
          </section>

          {/* 5 columns */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              5 columns
            </h2>
            <div className="flex justify-center">
              <LogoCarousel columnCount={5} />
            </div>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              Usage
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="rounded-lg bg-black/40 p-4 font-mono text-xs leading-relaxed text-white/70">
                <pre>{`import { LogoCarousel }
  from "@/components/ui/logo-carousel"

{/* Default 2 columns */}
<LogoCarousel />

{/* Custom column count */}
<LogoCarousel columnCount={5} />`}</pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
