import Link from "next/link";

const components = [
  {
    slug: "liquid-glass-card",
    name: "Liquid Glass Card",
    category: "Card",
    engine: "SVG Filter",
    description: "Glassmorphism card with liquid distortion via SVG displacement map filter.",
  },
  {
    slug: "ai-input-search",
    name: "AI Input Search",
    category: "AI Pattern",
    engine: "Motion",
    description: "Animated search input with AI-style suggestion chips and expanding interaction.",
  },
  {
    slug: "morphic-navbar",
    name: "Morphic Navbar",
    category: "Navigation",
    engine: "Motion",
    description: "Navbar with morphing pill indicator that animates between active items.",
  },
  {
    slug: "card-flip",
    name: "Card Flip",
    category: "Card",
    engine: "CSS",
    description: "3D perspective card flip on hover with front/back faces and styled-jsx keyframe animation.",
  },
];

export default function KokonutUIIndex() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-8 inline-block">
          &larr; All Libraries
        </Link>

        <div className="mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-amber-400 mb-3">
            KokonutUI
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
            40+ components
          </h1>
          <p className="text-neutral-400">
            AI input patterns, morphing navigation, polished cards. Powered by Motion.
          </p>
        </div>

        <div className="grid gap-3">
          {components.map((c) => (
            <Link
              key={c.slug}
              href={`/kokonutui/${c.slug}`}
              className="group border border-amber-500/10 rounded-xl p-5 transition-all hover:bg-amber-500/[0.04] hover:border-amber-500/20"
            >
              <div className="flex items-center justify-between mb-1.5">
                <h2 className="text-lg font-medium text-white group-hover:text-amber-300 transition-colors">
                  {c.name}
                </h2>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-neutral-500">
                    {c.category}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-neutral-500">
                    {c.engine}
                  </span>
                </div>
              </div>
              <p className="text-sm text-neutral-500">{c.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
