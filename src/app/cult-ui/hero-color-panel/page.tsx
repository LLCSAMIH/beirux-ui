"use client";

export const dynamic = "force-dynamic";

import {
  HeroColorPanels,
  HeroColorPanelsRoot,
  HeroColorPanelsContainer,
  HeroColorPanelsContent,
  HeroColorPanelsHeading,
  HeroColorPanelsDescription,
  HeroColorPanelsActions,
  HeroColorPanelsBadges,
  HeroColorPanelsVisual,
  HeroColorPanelsMobileVisual,
} from "@/components/ui/hero-color-panel";
import { BackLink } from "@/components/back-link";

export default function HeroColorPanelPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Hero Color Panel
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* Default hero */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Default Composition
            </h2>
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <HeroColorPanels
                title={<span>BEIRUX Studio</span>}
                subtitle="Ship Faster"
                description={
                  <>
                    Full-stack agency patterns for{" "}
                    <span className="font-medium tracking-tight">modern web apps</span>.
                    Built with Next.js 16 and shadcn/ui.
                  </>
                }
                ctaProps={{
                  label: "Get Started",
                  href: "#",
                }}
                techStack={[
                  { name: "Next.js", version: "v16" },
                  { name: "React", version: "v19" },
                  { name: "Tailwind", version: "v4" },
                ]}
              />
            </div>
          </section>

          {/* Composable version */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Composable API
            </h2>
            <div className="rounded-2xl border border-white/10 overflow-hidden">
              <HeroColorPanelsRoot
                title={<span>Custom Layout</span>}
                subtitle="Your Way"
                description="Use the composable API to build custom hero layouts with the ColorPanels shader."
              >
                <HeroColorPanelsContainer>
                  <HeroColorPanelsContent>
                    <HeroColorPanelsHeading />
                    <HeroColorPanelsDescription />
                    <HeroColorPanelsBadges
                      techStack={[
                        { name: "TypeScript" },
                        { name: "Motion" },
                      ]}
                    />
                  </HeroColorPanelsContent>
                  <HeroColorPanelsVisual
                    desktopShaderProps={{
                      colors: ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff"],
                      speed: 3,
                    }}
                  />
                </HeroColorPanelsContainer>
                <HeroColorPanelsMobileVisual
                  mobileShaderProps={{
                    colors: ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff"],
                    speed: 3,
                  }}
                />
              </HeroColorPanelsRoot>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
