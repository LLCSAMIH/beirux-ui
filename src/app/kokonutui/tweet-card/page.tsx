"use client";

import TweetCard from "@/components/kokonutui/tweet-card";
import { BackLink } from "@/components/back-link";

export default function TweetCardPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Tweet Card
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A glassmorphic X/Twitter post card with author info, verification
          badges, content lines, timestamp, and an optional reply thread.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            glass
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            social
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            card
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (with Reply)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <TweetCard />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Custom Content (No Reply)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <TweetCard
              authorName="BEIRUX"
              authorHandle="beirux"
              authorImage="https://pbs.twimg.com/profile_images/1992215290936205312/N_EuwLUO_400x400.jpg"
              content={[
                "Just shipped 14 new animated components to our showcase.",
                "All built with Motion and zero runtime deps."
              ]}
              timestamp="May 2026"
              isVerified={false}
              reply={undefined}
            />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Verified Author with Reply
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <TweetCard
              authorName="Vercel"
              authorHandle="vercel"
              authorImage="https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg"
              content={["Next.js 16 is here. Edge-first, React 19 native, and blazing fast."]}
              timestamp="May 26, 2026"
              isVerified={true}
              reply={{
                authorName: "Guillermo Rauch",
                authorHandle: "raaborauch",
                authorImage: "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
                content: "The fastest release yet.",
                isVerified: true,
                timestamp: "May 26",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
