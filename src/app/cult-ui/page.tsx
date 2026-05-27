import Link from "next/link";

const components = [
  {
    slug: "texture-button",
    name: "Texture Button",
    category: "Button",
    engine: "CSS",
    description: "Multi-variant button with layered gradient textures. Primary, accent, destructive, secondary, minimal, icon.",
  },
  {
    slug: "dynamic-island",
    name: "Dynamic Island",
    category: "Interactive",
    engine: "Motion",
    description: "Apple-inspired animated island with 14 size presets and 8 state transitions.",
  },
  {
    slug: "direction-aware-tabs",
    name: "Direction Aware Tabs",
    category: "Navigation",
    engine: "Motion",
    description: "Tabs with direction-aware animated indicator and auto-height content transitions.",
  },
];

export default function CultUIIndex() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-8 inline-block">
          &larr; All Libraries
        </Link>

        <div className="mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-blue-400 mb-3">
            Cult UI
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
            78 components
          </h1>
          <p className="text-neutral-400">
            Marketing blocks, hero sections, AI/agent patterns. Powered by Motion.
          </p>
        </div>

        <div className="grid gap-3">
          {components.map((c) => (
            <Link
              key={c.slug}
              href={`/cult-ui/${c.slug}`}
              className="group border border-blue-500/10 rounded-xl p-5 transition-all hover:bg-blue-500/[0.04] hover:border-blue-500/20"
            >
              <div className="flex items-center justify-between mb-1.5">
                <h2 className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors">
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
