import Link from "next/link";

const components = [
  {
    slug: "silk",
    name: "Silk",
    category: "Background",
    engine: "Three.js",
    description: "Flowing organic noise background with customizable color, speed, and scale.",
  },
  {
    slug: "glitch-text",
    name: "Glitch Text",
    category: "Text Animation",
    engine: "CSS",
    description: "Chromatic aberration glitch effect on text with randomized clip-path slicing.",
  },
  {
    slug: "splash-cursor",
    name: "Splash Cursor",
    category: "Cursor",
    engine: "WebGL (OGL)",
    description: "Fluid simulation cursor trail with configurable density and pressure.",
  },
  {
    slug: "circular-gallery",
    name: "Circular Gallery",
    category: "Carousel",
    engine: "WebGL (OGL)",
    description: "3D circular image gallery with drag interaction and curved layout.",
  },
  {
    slug: "aurora",
    name: "Aurora",
    category: "Background",
    engine: "WebGL (OGL)",
    description: "Animated gradient aurora with configurable color stops, amplitude, and speed.",
  },
  {
    slug: "hyperspeed",
    name: "Hyperspeed",
    category: "Background",
    engine: "Three.js",
    description: "WebGL hyperspace travel simulation with 6 distortion presets. Click and hold to speed up.",
  },
  {
    slug: "decrypted-text",
    name: "Decrypted Text",
    category: "Text Animation",
    engine: "Motion",
    description: "Scramble-to-reveal text effect with sequential/random modes, multiple triggers (hover, click, scroll), and customizable character sets.",
  },
  {
    slug: "tilted-card",
    name: "Tilted Card",
    category: "Card",
    engine: "Motion",
    description: "Perspective tilt on hover with spring physics, cursor tooltip, and optional overlay content.",
  },
  {
    slug: "pixel-card",
    name: "Pixel Card",
    category: "Card",
    engine: "Canvas",
    description: "Shimmer pixel grid background with 4 color presets. Focus/hover triggers animation.",
  },
  {
    slug: "scroll-velocity",
    name: "Scroll Velocity",
    category: "Text Animation",
    engine: "Motion",
    description: "Horizontal text marquee that accelerates with scroll speed. Alternating row directions.",
  },
  {
    slug: "blob-cursor",
    name: "Blob Cursor",
    category: "Cursor",
    engine: "GSAP",
    description: "Gooey blob cursor trail with SVG filter. Configurable shape, color, and physics.",
  },
];

export default function ReactBitsIndex() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-8 inline-block">
          &larr; All Libraries
        </Link>

        <div className="mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-purple-400 mb-3">
            ReactBits
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
            138+ components
          </h1>
          <p className="text-neutral-400">
            CSS default, GSAP/Three.js/Matter.js per component. Zero-dep where possible.
          </p>
        </div>

        <div className="grid gap-3">
          {components.map((c) => (
            <Link
              key={c.slug}
              href={`/reactbits/${c.slug}`}
              className="group border border-purple-500/10 rounded-xl p-5 transition-all hover:bg-purple-500/[0.04] hover:border-purple-500/20"
            >
              <div className="flex items-center justify-between mb-1.5">
                <h2 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">
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
