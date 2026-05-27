"use client";

import CardNav from "@/components/CardNav";
import { BackLink } from "@/components/back-link";

const navItems = [
  {
    label: "Products",
    bgColor: "#4F46E5",
    textColor: "#ffffff",
    links: [
      { label: "Analytics", href: "#", ariaLabel: "Analytics" },
      { label: "Dashboards", href: "#", ariaLabel: "Dashboards" },
      { label: "Reports", href: "#", ariaLabel: "Reports" },
    ],
  },
  {
    label: "Solutions",
    bgColor: "#10B981",
    textColor: "#ffffff",
    links: [
      { label: "Enterprise", href: "#", ariaLabel: "Enterprise" },
      { label: "Startups", href: "#", ariaLabel: "Startups" },
      { label: "Agencies", href: "#", ariaLabel: "Agencies" },
    ],
  },
  {
    label: "Resources",
    bgColor: "#F59E0B",
    textColor: "#18181b",
    links: [
      { label: "Documentation", href: "#", ariaLabel: "Documentation" },
      { label: "Guides", href: "#", ariaLabel: "Guides" },
      { label: "Blog", href: "#", ariaLabel: "Blog" },
    ],
  },
];

export default function CardNavPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Card Nav
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Expandable navigation with GSAP-animated colored cards. Click the
            hamburger to open.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="w-full max-w-3xl rounded-xl border border-white/10 overflow-hidden bg-[#0a0a0a] p-4">
            <CardNav
              logo="https://picsum.photos/seed/logo/40/40"
              items={navItems}
            />
          </div>
          <p className="text-xs text-neutral-500 text-center">
            3 color-coded nav sections with link cards
          </p>
        </div>
      </div>
    </div>
  );
}
