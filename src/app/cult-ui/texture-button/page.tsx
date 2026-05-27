"use client";

import { TextureButton } from "@/components/ui/texture-button";
import { BackLink } from "@/components/back-link";
import { ArrowRight, Trash2, Star, Plus } from "lucide-react";

export default function CultUIPage() {
  return (
    <div className="dark min-h-screen bg-[#09090b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Texture Button
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-12">
          {/* Primary */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Primary
            </h2>
            <div className="flex flex-wrap gap-4">
              <TextureButton variant="primary" size="sm">
                Small
              </TextureButton>
              <TextureButton variant="primary">
                Default size
              </TextureButton>
              <TextureButton variant="primary" size="lg">
                Large button
              </TextureButton>
            </div>
          </section>

          {/* Accent */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Accent
            </h2>
            <div className="flex flex-wrap gap-4">
              <TextureButton variant="accent">
                Continue <ArrowRight className="h-4 w-4" />
              </TextureButton>
              <TextureButton variant="accent" size="sm">
                Save changes
              </TextureButton>
            </div>
          </section>

          {/* Destructive */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Destructive
            </h2>
            <div className="flex flex-wrap gap-4">
              <TextureButton variant="destructive">
                <Trash2 className="h-4 w-4" /> Delete project
              </TextureButton>
              <TextureButton variant="destructive" size="sm">
                Remove
              </TextureButton>
            </div>
          </section>

          {/* Secondary */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Secondary
            </h2>
            <div className="flex flex-wrap gap-4">
              <TextureButton variant="secondary">
                Cancel
              </TextureButton>
              <TextureButton variant="secondary" size="lg">
                Go back
              </TextureButton>
            </div>
          </section>

          {/* Minimal */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Minimal
            </h2>
            <div className="flex flex-wrap gap-4">
              <TextureButton variant="minimal">
                <Star className="h-4 w-4" /> Favorite
              </TextureButton>
              <TextureButton variant="minimal" size="sm">
                Options
              </TextureButton>
            </div>
          </section>

          {/* Icon */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Icon
            </h2>
            <div className="flex flex-wrap gap-4">
              <TextureButton variant="icon" size="icon">
                <Plus className="h-4 w-4" />
              </TextureButton>
              <TextureButton variant="icon" size="icon">
                <Star className="h-4 w-4" />
              </TextureButton>
              <TextureButton variant="icon" size="icon">
                <ArrowRight className="h-4 w-4" />
              </TextureButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
