"use client";

import UnderlineToBackground from "@/components/fancy/text/underline-to-background";
import { BackLink } from "@/components/back-link";

export default function UnderlineToBackgroundPage() {
  return (
    <div className="min-h-screen w-full bg-[#18181b]">
      <BackLink href="/fancy" label="Fancy" />

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Underline to Background
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Fancy Components
          </p>
          <p className="text-sm text-white/40 mt-4 max-w-md mx-auto">
            A text underline that expands into a full background fill on hover,
            with the text color transitioning simultaneously.
          </p>
        </div>

        <div className="space-y-24">
          {/* Demo 1: White text, dark target color */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              White text / target color #18181b / spring transition
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
              <UnderlineToBackground
                className="text-3xl md:text-4xl text-white/90"
                targetTextColor="#18181b"
              >
                About
              </UnderlineToBackground>
              <UnderlineToBackground
                className="text-3xl md:text-4xl text-white/90"
                targetTextColor="#18181b"
              >
                Services
              </UnderlineToBackground>
              <UnderlineToBackground
                className="text-3xl md:text-4xl text-white/90"
                targetTextColor="#18181b"
              >
                Contact
              </UnderlineToBackground>
            </div>
          </section>

          {/* Demo 2: Colored text with matching target */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Emerald text / target white / thick underline (0.12)
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
              <UnderlineToBackground
                className="text-3xl md:text-4xl text-emerald-400"
                targetTextColor="#18181b"
                underlineHeightRatio={0.12}
              >
                Projects
              </UnderlineToBackground>
              <UnderlineToBackground
                className="text-3xl md:text-4xl text-purple-400"
                targetTextColor="#18181b"
                underlineHeightRatio={0.12}
              >
                Careers
              </UnderlineToBackground>
            </div>
          </section>

          {/* Demo 3: Large display with slow transition */}
          <section>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6">
              Large display / slow spring (damping 20, stiffness 150)
            </p>
            <div className="flex justify-center">
              <UnderlineToBackground
                className="text-5xl md:text-7xl font-semibold text-white/80"
                targetTextColor="#18181b"
                transition={{ type: "spring", damping: 20, stiffness: 150 }}
              >
                BEIRUX
              </UnderlineToBackground>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
