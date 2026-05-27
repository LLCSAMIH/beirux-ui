"use client";

import { BackLink } from "@/components/back-link";
import HoverVideoPlayer from "@/components/ui/hover-video-player";

export default function HoverVideoPlayerPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Hover Video Player
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Video player that auto-plays on hover with lazy loading, PiP
            support, thumbnail overlays, and playback controls.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            Basic (sample video)
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <HoverVideoPlayer
              videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              className="w-full aspect-video"
              muted
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            With controls enabled
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <HoverVideoPlayer
              videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              className="w-full aspect-video"
              enableControls
              muted
            />
          </div>
        </section>

        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
            With paused overlay
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <HoverVideoPlayer
              videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              className="w-full aspect-video"
              muted
              pausedOverlay={
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="text-white text-lg font-medium">
                    Hover to play
                  </span>
                </div>
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
}
