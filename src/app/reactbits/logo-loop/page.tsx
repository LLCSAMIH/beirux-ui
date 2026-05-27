"use client";

import { LogoLoop } from "@/components/LogoLoop";
import { BackLink } from "@/components/back-link";

const LOGOS = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", alt: "Firebase" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", alt: "Docker" },
];

export default function LogoLoopPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            LogoLoop
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Infinite scrolling logo carousel with smooth velocity easing.
            Supports pause on hover, fade edges, vertical scrolling, and
            custom render items.
          </p>
        </div>

        <div className="space-y-16">
          {/* Default horizontal */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Default (left, pause on hover)
            </h2>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] py-8">
              <LogoLoop
                logos={LOGOS}
                speed={120}
                direction="left"
                logoHeight={36}
                gap={48}
                pauseOnHover
                fadeOut
                fadeOutColor="#18181b"
              />
            </div>
          </section>

          {/* Right, faster */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Right direction (fast, scale on hover)
            </h2>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] py-8">
              <LogoLoop
                logos={LOGOS}
                speed={200}
                direction="right"
                logoHeight={28}
                gap={40}
                scaleOnHover
                fadeOut
                fadeOutColor="#18181b"
              />
            </div>
          </section>

          {/* Text nodes instead of images */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Custom node items (text)
            </h2>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] py-8">
              <LogoLoop
                logos={[
                  { node: <span className="text-white/70 text-lg font-medium">React</span> },
                  { node: <span className="text-white/70 text-lg font-medium">Next.js</span> },
                  { node: <span className="text-white/70 text-lg font-medium">TypeScript</span> },
                  { node: <span className="text-white/70 text-lg font-medium">Tailwind</span> },
                  { node: <span className="text-white/70 text-lg font-medium">Node.js</span> },
                  { node: <span className="text-white/70 text-lg font-medium">PostgreSQL</span> },
                ]}
                speed={80}
                direction="left"
                logoHeight={24}
                gap={56}
                pauseOnHover
                fadeOut
                fadeOutColor="#18181b"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
