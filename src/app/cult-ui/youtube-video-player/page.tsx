"use client";

import { YouTubePlayer } from "@/components/ui/youtube-video-player";
import { BackLink } from "@/components/back-link";

export default function YouTubeVideoPlayerPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            YouTube Player
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Default player
            </h2>
            <YouTubePlayer
              videoId="dQw4w9WgXcQ"
              title="Rick Astley - Never Gonna Give You Up"
            />
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Full URL input
            </h2>
            <YouTubePlayer
              videoId="https://www.youtube.com/watch?v=jNQXAC9IVRw"
              title="Me at the zoo"
            />
          </section>

          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-4">
              Compact
            </h2>
            <div className="max-w-sm">
              <YouTubePlayer
                videoId="9bZkp7q19f0"
                title="PSY - Gangnam Style"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
