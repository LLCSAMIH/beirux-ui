"use client";

import { BackLink } from "@/components/back-link";
import dynamic from "next/dynamic";

const StaggeredMenu = dynamic(() => import("@/components/StaggeredMenu"), {
  ssr: false,
});

export default function StaggeredMenuPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Staggered Menu
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            GSAP-animated full-page overlay menu with staggered color layers,
            item entrance animations, and social links section.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Right-aligned demo */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
              <StaggeredMenu
                isFixed={false}
                position="right"
                colors={["#B497CF", "#5227FF"]}
                accentColor="#5227FF"
                items={[
                  { label: "Home", ariaLabel: "Go to Home", link: "#" },
                  { label: "About", ariaLabel: "Go to About", link: "#" },
                  { label: "Work", ariaLabel: "Go to Work", link: "#" },
                  { label: "Contact", ariaLabel: "Go to Contact", link: "#" },
                ]}
                socialItems={[
                  { label: "Twitter", link: "#" },
                  { label: "GitHub", link: "#" },
                  { label: "LinkedIn", link: "#" },
                ]}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Right-aligned, purple accent (click Menu button in top-right)
            </p>
          </div>

          {/* Left-aligned demo */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
              <StaggeredMenu
                isFixed={false}
                position="left"
                colors={["#1e3a5f", "#0ea5e9"]}
                accentColor="#0ea5e9"
                items={[
                  { label: "Dashboard", ariaLabel: "Go to Dashboard", link: "#" },
                  { label: "Projects", ariaLabel: "Go to Projects", link: "#" },
                  { label: "Settings", ariaLabel: "Go to Settings", link: "#" },
                ]}
                socialItems={[
                  { label: "Dribbble", link: "#" },
                  { label: "Behance", link: "#" },
                ]}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Left-aligned, cyan accent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
