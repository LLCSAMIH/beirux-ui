import Link from "next/link";

const components = [
  {
    slug: "gravity",
    name: "Gravity",
    category: "Physics",
    engine: "Matter.js",
    description: "Physics simulation with configurable gravity, friction, and restitution. Drop anything.",
  },
  {
    slug: "variable-font",
    name: "Variable Font Cursor Proximity",
    category: "Text",
    engine: "Motion",
    description: "Variable font weight shifts based on cursor distance. Three falloff modes: linear, gaussian, exponential.",
  },
  {
    slug: "elastic-line",
    name: "Elastic Line",
    category: "Interactive",
    engine: "Motion",
    description: "SVG line that grabs and stretches toward the cursor, snapping back with spring physics.",
  },
];

export default function FancyIndex() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-8 inline-block">
          &larr; All Libraries
        </Link>

        <div className="mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-emerald-400 mb-3">
            Fancy Components
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
            40+ components
          </h1>
          <p className="text-neutral-400">
            Physics interactions, SVG path animations, variable fonts. 100% free.
          </p>
        </div>

        <div className="grid gap-3">
          {components.map((c) => (
            <Link
              key={c.slug}
              href={`/fancy/${c.slug}`}
              className="group border border-emerald-500/10 rounded-xl p-5 transition-all hover:bg-emerald-500/[0.04] hover:border-emerald-500/20"
            >
              <div className="flex items-center justify-between mb-1.5">
                <h2 className="text-lg font-medium text-white group-hover:text-emerald-300 transition-colors">
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
