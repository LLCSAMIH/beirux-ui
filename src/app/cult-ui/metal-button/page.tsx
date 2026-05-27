"use client";

import { BackLink } from "@/components/back-link";
import { MetalButton, MetalIconButton } from "@/components/ui/metal-button";
import { ArrowRight, Star, Plus, Settings } from "lucide-react";

export default function MetalButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Metal Button
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Button wrapped in a liquid metal shader ring (MetalFx). The metal
            edge animates in real-time while the inner button uses shadcn
            variants.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
            Default variant
          </h2>
          <div className="flex flex-wrap gap-4">
            <MetalButton>Default Metal</MetalButton>
            <MetalButton>
              Continue <ArrowRight className="h-4 w-4 ml-1" />
            </MetalButton>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
            Outline variant
          </h2>
          <div className="flex flex-wrap gap-4">
            <MetalButton variant="outline">Outline</MetalButton>
            <MetalButton variant="outline">
              <Star className="h-4 w-4 mr-1" /> Favorite
            </MetalButton>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
            Secondary and Ghost
          </h2>
          <div className="flex flex-wrap gap-4">
            <MetalButton variant="secondary">Secondary</MetalButton>
            <MetalButton variant="ghost">Ghost</MetalButton>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
            Icon buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <MetalIconButton size="icon" variant="outline">
              <Plus className="h-4 w-4" />
            </MetalIconButton>
            <MetalIconButton size="icon" variant="outline">
              <Settings className="h-4 w-4" />
            </MetalIconButton>
            <MetalIconButton size="icon" variant="outline">
              <Star className="h-4 w-4" />
            </MetalIconButton>
          </div>
        </section>
      </div>
    </div>
  );
}
