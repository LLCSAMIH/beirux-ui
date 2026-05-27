import Link from "next/link";

const components = [
    {
      slug: "ai-instructions",
      name: "AI Instructions",
    },
    {
      slug: "animated-number",
      name: "Animated Number",
    },
    {
      slug: "bg-animate-button",
      name: "BG Animate Button",
    },
    {
      slug: "bg-animated-fractal-grid",
      name: "BG Animated Fractal Grid",
    },
    {
      slug: "bg-animated-gradient",
      name: "BG Animated Gradient",
    },
    {
      slug: "bg-image-texture",
      name: "BG Image Texture",
    },
    {
      slug: "bg-media",
      name: "BG Media",
    },
    {
      slug: "border-beam-button",
      name: "Border Beam Button",
    },
    {
      slug: "canvas-fractal-grid",
      name: "Canvas Fractal Grid",
    },
    {
      slug: "choice-poll",
      name: "Choice Poll",
    },
    {
      slug: "code-block",
      name: "Code Block",
    },
    {
      slug: "color-picker",
      name: "Color Picker",
    },
    {
      slug: "cosmic-button",
      name: "Cosmic Button",
    },
    {
      slug: "cult-popover",
      name: "Cult Popover",
    },
    {
      slug: "cutout-card",
      name: "Cutout Card",
    },
    {
      slug: "direction-aware-tabs",
      name: "Direction Aware Tabs",
    },
    {
      slug: "distorted-glass",
      name: "Distorted Glass",
    },
    {
      slug: "dither-image",
      name: "Dither Image",
    },
    {
      slug: "dock",
      name: "Dock",
    },
    {
      slug: "dynamic-island",
      name: "Dynamic Island",
    },
    {
      slug: "edge-blur",
      name: "Edge Blur",
    },
    {
      slug: "expandable",
      name: "Expandable",
    },
    {
      slug: "expandable-screen",
      name: "Expandable Screen",
    },
    {
      slug: "family-button",
      name: "Family Button",
    },
    {
      slug: "family-drawer",
      name: "Family Drawer",
    },
    {
      slug: "feature-carousel",
      name: "Feature Carousel",
    },
    {
      slug: "feature-poll",
      name: "Feature Poll",
    },
    {
      slug: "feature-voting",
      name: "Feature Voting",
    },
    {
      slug: "floating-panel",
      name: "Floating Panel",
    },
    {
      slug: "gradient-button-group",
      name: "Gradient Button Group",
    },
    {
      slug: "gradient-heading",
      name: "Gradient Heading",
    },
    {
      slug: "grid-beam",
      name: "Grid Beam",
    },
    {
      slug: "hero-color-panel",
      name: "Hero Color Panel",
    },
    {
      slug: "hero-dithering",
      name: "Hero Dithering",
    },
    {
      slug: "hero-heatmap",
      name: "Hero Heatmap",
    },
    {
      slug: "hero-liquid-metal",
      name: "Hero Liquid Metal",
    },
    {
      slug: "hero-static-radial-gradient",
      name: "Hero Static Radial Gradient",
    },
    {
      slug: "hover-video-player",
      name: "Hover Video Player",
    },
    {
      slug: "intro-disclosure",
      name: "Intro Disclosure",
    },
    {
      slug: "lightboard",
      name: "Lightboard",
    },
    {
      slug: "loading-carousel",
      name: "Loading Carousel",
    },
    {
      slug: "logo-carousel",
      name: "Logo Carousel",
    },
    {
      slug: "metal-button",
      name: "Metal Button",
    },
    {
      slug: "minimal-card",
      name: "Minimal Card",
    },
    {
      slug: "morph-surface",
      name: "Morph Surface",
    },
    {
      slug: "neumorph-button",
      name: "Neumorph Button",
    },
    {
      slug: "neumorph-eyebrow",
      name: "Neumorph Eyebrow",
    },
    {
      slug: "onboarding",
      name: "Onboarding",
    },
    {
      slug: "pixel-heading-character",
      name: "Pixel Heading Character",
    },
    {
      slug: "pixel-heading-word",
      name: "Pixel Heading Word",
    },
    {
      slug: "pixel-paragraph-words",
      name: "Pixel Paragraph Words",
    },
    {
      slug: "pixel-paragraph-words-inverse",
      name: "Pixel Paragraph Words Inverse",
    },
    {
      slug: "poll-widget",
      name: "Poll Widget",
    },
    {
      slug: "popover-form",
      name: "Popover Form",
    },
    {
      slug: "prompt-library",
      name: "Prompt Library",
    },
    {
      slug: "shader-lens-blur",
      name: "Shader Lens Blur",
    },
    {
      slug: "shift-card",
      name: "Shift Card",
    },
    {
      slug: "side-panel",
      name: "Side Panel",
    },
    {
      slug: "sortable-list",
      name: "Sortable List",
    },
    {
      slug: "squiggle-arrow",
      name: "Squiggle Arrow",
    },
    {
      slug: "stripe-bg-guides",
      name: "Stripe BG Guides",
    },
    {
      slug: "svg-bands",
      name: "SVG Bands",
    },
    {
      slug: "svg-shapes",
      name: "SVG Shapes",
    },
    {
      slug: "svg-shapes-animated",
      name: "SVG Shapes Animated",
    },
    {
      slug: "terminal-animation",
      name: "Terminal Animation",
    },
    {
      slug: "text-animate",
      name: "Text Animate",
    },
    {
      slug: "text-gif",
      name: "Text Gif",
    },
    {
      slug: "texture-button",
      name: "Texture Button",
    },
    {
      slug: "texture-card",
      name: "Texture Card",
    },
    {
      slug: "texture-overlay",
      name: "Texture Overlay",
    },
    {
      slug: "three-d-carousel",
      name: "Three D Carousel",
    },
    {
      slug: "timer",
      name: "Timer",
    },
    {
      slug: "toolbar-expandable",
      name: "Toolbar Expandable",
    },
    {
      slug: "tweet-grid",
      name: "Tweet Grid",
    },
    {
      slug: "typewriter",
      name: "Typewriter",
    },
    {
      slug: "vote-tally",
      name: "Vote Tally",
    },
    {
      slug: "youtube-video-player",
      name: "Youtube Video Player",
    },
];

export default function CultUIIndex() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors mb-8 inline-block">
          &larr; All Libraries
        </Link>

        <div className="mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-blue-400 mb-3">
            Cult UI
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
            77 components
          </h1>
          <p className="text-zinc-400">
            Premium animated components. Canvas, WebGL, and Motion-powered.
          </p>
        </div>

        <div className="grid gap-3">
          {components.map((c) => (
            <Link
              key={c.slug}
              href={`/cult-ui/${c.slug}`}
              className="group border border-blue-500/10 rounded-xl p-5 transition-all hover:bg-blue-500/[0.04] hover:border-blue-500/20"
            >
              <h2 className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors">
                {c.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
