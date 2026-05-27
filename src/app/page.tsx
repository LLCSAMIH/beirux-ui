import Link from "next/link";

const libraries = [
  { slug: "reactbits", name: "ReactBits", count: "138+", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { slug: "cult-ui", name: "Cult UI", count: "78", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { slug: "fancy", name: "Fancy Components", count: "40+", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  { slug: "kokonutui", name: "KokonutUI", count: "40+", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-cyan-400 mb-4">
          BEIRUX Component Showcase
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
          309+ components.
          <br />
          <span className="text-zinc-500">Four libraries. One registry.</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mb-16">
          Every animated React component available to BEIRUX agents, installed via shadcn CLI, rendered live.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {libraries.map((lib) => (
            <Link
              key={lib.slug}
              href={`/${lib.slug}`}
              className={`border rounded-xl p-6 transition-colors hover:bg-white/[0.02] ${lib.color}`}
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{lib.name}</h2>
                <span className="text-sm opacity-60">{lib.count}</span>
              </div>
              <p className="text-sm opacity-50">View components</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
