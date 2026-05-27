"use client";

import { MorphicNavbar } from "@/components/kokonutui/morphic-navbar";
import { BackLink } from "@/components/back-link";

const navItems = {
  "/": { name: "Home" },
  "/products": { name: "Products" },
  "/about": { name: "About" },
  "/contact": { name: "Contact" },
};

export default function MorphicNavbarPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />
      {/* Navbar pinned to top */}
      <div className="sticky top-0 z-50 pt-4 pb-2">
        <MorphicNavbar items={navItems} defaultPath="/" />
      </div>

      {/* Hero section */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          Morphic Navbar
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A dynamic navigation bar with morphing animation between active
          states. Click the nav items above to see the morphing pill effect
          as the active indicator reshapes around each link.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            clsx
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            next/link
          </span>
        </div>
      </div>

      {/* Placeholder page content to give the navbar context */}
      <div className="max-w-4xl mx-auto px-6 pb-32 space-y-20">
        {/* Features section */}
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Morphing Active State",
                desc: "The active pill reshapes with smooth border-radius transitions as you navigate between items.",
              },
              {
                title: "Glass Container",
                desc: "The navbar container uses a frosted glass effect with backdrop blur for depth on dark backgrounds.",
              },
              {
                title: "Dynamic Rounding",
                desc: "Adjacent items to the active one get contextual border radius, creating a seamless morphing feel.",
              },
              {
                title: "Dark Mode Native",
                desc: "In dark mode, the active item inverts to white on black. Light mode uses black on white.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <h3 className="text-base font-medium text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Props reference */}
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Props
          </h2>
          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                  <th className="text-left px-6 py-3 text-neutral-400 font-medium">
                    Prop
                  </th>
                  <th className="text-left px-6 py-3 text-neutral-400 font-medium">
                    Type
                  </th>
                  <th className="text-left px-6 py-3 text-neutral-400 font-medium">
                    Default
                  </th>
                </tr>
              </thead>
              <tbody className="text-neutral-300">
                <tr className="border-b border-white/[0.04]">
                  <td className="px-6 py-3 font-mono text-xs text-white">
                    items
                  </td>
                  <td className="px-6 py-3 font-mono text-xs text-neutral-500">
                    {"Record<string, { name: string }>"}
                  </td>
                  <td className="px-6 py-3 text-neutral-500">
                    home, works, blog, about
                  </td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="px-6 py-3 font-mono text-xs text-white">
                    defaultPath
                  </td>
                  <td className="px-6 py-3 font-mono text-xs text-neutral-500">
                    string
                  </td>
                  <td className="px-6 py-3 text-neutral-500">/</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-mono text-xs text-white">
                    className
                  </td>
                  <td className="px-6 py-3 font-mono text-xs text-neutral-500">
                    string
                  </td>
                  <td className="px-6 py-3 text-neutral-500">undefined</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Placeholder content blocks */}
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Content
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <div className="h-3 w-48 rounded bg-white/[0.06] mb-3" />
                <div className="space-y-2">
                  <div className="h-2 w-full rounded bg-white/[0.04]" />
                  <div className="h-2 w-5/6 rounded bg-white/[0.04]" />
                  <div className="h-2 w-4/6 rounded bg-white/[0.04]" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
