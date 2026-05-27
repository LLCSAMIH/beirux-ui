import Link from "next/link";

const components = [
    {
      slug: "animated-gradient-with-svg",
      name: "Animated Gradient With Svg",
    },
    {
      slug: "basic-number-ticker",
      name: "Basic Number Ticker",
    },
    {
      slug: "box-carousel",
      name: "Box Carousel",
    },
    {
      slug: "breathing-text",
      name: "Breathing Text",
    },
    {
      slug: "circling-elements",
      name: "Circling Elements",
    },
    {
      slug: "circular-text",
      name: "Circular Text",
    },
    {
      slug: "css-box",
      name: "CSS Box",
    },
    {
      slug: "cursor-attractor",
      name: "Cursor Attractor",
    },
    {
      slug: "drag-elements",
      name: "Drag Elements",
    },
    {
      slug: "elastic-line",
      name: "Elastic Line",
    },
    {
      slug: "fancy-typewriter",
      name: "Fancy Typewriter",
    },
    {
      slug: "float",
      name: "Float",
    },
    {
      slug: "gooey-svg-filter",
      name: "Gooey SVG Filter",
    },
    {
      slug: "gravity",
      name: "Gravity",
    },
    {
      slug: "image-trail",
      name: "Image Trail",
    },
    {
      slug: "letter-3d-swap",
      name: "Letter 3D Swap",
    },
    {
      slug: "letter-swap",
      name: "Letter Swap",
    },
    {
      slug: "letter-swap-hover",
      name: "Letter Swap Hover",
    },
    {
      slug: "marquee",
      name: "Marquee",
    },
    {
      slug: "marquee-along-svg-path",
      name: "Marquee Along SVG Path",
    },
    {
      slug: "media-between-text",
      name: "Media Between Text",
    },
    {
      slug: "parallax-floating",
      name: "Parallax Floating",
    },
    {
      slug: "pixel-trail",
      name: "Pixel Trail",
    },
    {
      slug: "pixelate-svg-filter",
      name: "Pixelate SVG Filter",
    },
    {
      slug: "random-letter-swap-hover",
      name: "Random Letter Swap Hover",
    },
    {
      slug: "scramble-hover",
      name: "Scramble Hover",
    },
    {
      slug: "scramble-in",
      name: "Scramble In",
    },
    {
      slug: "screensaver",
      name: "Screensaver",
    },
    {
      slug: "scroll-and-swap",
      name: "Scroll And Swap",
    },
    {
      slug: "stacking-cards",
      name: "Stacking Cards",
    },
    {
      slug: "text-along-path",
      name: "Text Along Path",
    },
    {
      slug: "text-cursor-proximity",
      name: "Text Cursor Proximity",
    },
    {
      slug: "text-highlighter",
      name: "Text Highlighter",
    },
    {
      slug: "text-rotate",
      name: "Text Rotate",
    },
    {
      slug: "underline-animation",
      name: "Underline Animation",
    },
    {
      slug: "underline-to-background",
      name: "Underline To Background",
    },
    {
      slug: "variable-font",
      name: "Variable Font",
    },
    {
      slug: "variable-font-and-cursor",
      name: "Variable Font And Cursor",
    },
    {
      slug: "variable-font-hover-by-letter",
      name: "Variable Font Hover By Letter",
    },
    {
      slug: "variable-font-hover-by-random-letter",
      name: "Variable Font Hover By Random Letter",
    },
    {
      slug: "vertical-cut-reveal",
      name: "Vertical Cut Reveal",
    },
];

export default function FancyIndex() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors mb-8 inline-block">
          &larr; All Libraries
        </Link>

        <div className="mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-emerald-400 mb-3">
            Fancy Components
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
            41 components
          </h1>
          <p className="text-zinc-400">
            Variable fonts, SVG animations, scroll-driven effects. Lightweight and composable.
          </p>
        </div>

        <div className="grid gap-3">
          {components.map((c) => (
            <Link
              key={c.slug}
              href={`/fancy/${c.slug}`}
              className="group border border-emerald-500/10 rounded-xl p-5 transition-all hover:bg-emerald-500/[0.04] hover:border-emerald-500/20"
            >
              <h2 className="text-lg font-medium text-white group-hover:text-emerald-300 transition-colors">
                {c.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
