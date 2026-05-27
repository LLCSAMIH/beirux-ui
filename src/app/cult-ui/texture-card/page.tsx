"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link";
import {
  TextureCard,
  TextureCardContent,
  TextureCardDescription,
  TextureCardFooter,
  TextureCardHeader,
  TextureCardStyled,
  TextureCardTitle,
  TextureSeparator,
} from "@/components/ui/texture-card";
import { TextureButton } from "@/components/ui/texture-button";
import { ArrowRight, Sparkles, Layers, Zap } from "lucide-react";

export default function TextureCardPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Texture Card
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Cards with layered borders that create a subtle textured depth
            effect. Two variants: theme-aware (TextureCard) and styled
            (TextureCardStyled).
          </p>
        </div>

        <div className="space-y-16">
          {/* Theme-aware TextureCard with full anatomy */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              Full anatomy
            </h2>
            <TextureCard>
              <TextureCardHeader className="px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/15">
                    <Sparkles className="h-4 w-4 text-violet-400" />
                  </div>
                  <div>
                    <TextureCardTitle>Project Aurora</TextureCardTitle>
                    <TextureCardDescription>
                      Next-generation design system
                    </TextureCardDescription>
                  </div>
                </div>
              </TextureCardHeader>
              <TextureSeparator />
              <TextureCardContent>
                <p className="text-sm leading-relaxed text-white/50">
                  A complete design system built on layered textures and
                  graduated borders. Every surface communicates depth through
                  subtle material cues rather than drop shadows.
                </p>
              </TextureCardContent>
              <TextureSeparator />
              <TextureCardFooter>
                <span className="text-xs text-white/30">Updated 2 days ago</span>
                <TextureButton variant="accent" size="sm" className="w-fit">
                  Open <ArrowRight className="h-3.5 w-3.5" />
                </TextureButton>
              </TextureCardFooter>
            </TextureCard>
          </section>

          {/* TextureCardStyled variant */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              Styled variant (fixed radii)
            </h2>
            <TextureCardStyled>
              <div className="px-6 py-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15">
                    <Zap className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Performance Metrics
                    </h3>
                    <p className="text-sm text-white/40">
                      Core Web Vitals dashboard
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "LCP", value: "1.2s", color: "text-emerald-400" },
                    { label: "FID", value: "8ms", color: "text-emerald-400" },
                    { label: "CLS", value: "0.04", color: "text-amber-400" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-3 text-center"
                    >
                      <p className="text-xs text-white/40 mb-1">
                        {metric.label}
                      </p>
                      <p className={`text-xl font-semibold ${metric.color}`}>
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TextureCardStyled>
          </section>

          {/* Minimal content card */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              Minimal content
            </h2>
            <TextureCard>
              <TextureCardContent>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/15">
                    <Layers className="h-5 w-5 text-amber-400" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-white">
                      Layered Borders
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">
                      Five nested border layers with graduated opacity create
                      the signature texture effect. The outermost border anchors
                      the card, while inner borders fade toward the content,
                      producing a sense of physical depth without any shadow.
                    </p>
                  </div>
                </div>
              </TextureCardContent>
            </TextureCard>
          </section>
        </div>
      </div>
    </div>
  );
}
