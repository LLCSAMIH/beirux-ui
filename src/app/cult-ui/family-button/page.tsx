"use client";

import { FamilyButton } from "@/components/ui/family-button";
import { BackLink } from "@/components/back-link";
import { Star, Heart, Bookmark } from "lucide-react";

export default function FamilyButtonPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Family Button
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-12">
          {/* With icons */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              With Icon Actions
            </h2>
            <div className="flex justify-center">
              <FamilyButton>
                <div className="flex gap-4">
                  <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <Star className="h-5 w-5 text-yellow-400" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <Heart className="h-5 w-5 text-red-400" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <Bookmark className="h-5 w-5 text-blue-400" />
                  </button>
                </div>
              </FamilyButton>
            </div>
          </section>

          {/* With text content */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              With Text Actions
            </h2>
            <div className="flex justify-center">
              <FamilyButton>
                <div className="flex flex-col gap-2 px-2">
                  <button className="text-sm text-white/80 hover:text-white transition-colors text-left">
                    Share
                  </button>
                  <button className="text-sm text-white/80 hover:text-white transition-colors text-left">
                    Copy Link
                  </button>
                  <button className="text-sm text-white/80 hover:text-white transition-colors text-left">
                    Embed
                  </button>
                </div>
              </FamilyButton>
            </div>
          </section>

          {/* Simple */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Simple Content
            </h2>
            <div className="flex justify-center">
              <FamilyButton>
                <p className="text-sm text-white/70 px-2">Quick actions panel</p>
              </FamilyButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
