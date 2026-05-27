import Link from "next/link";

const components = [
    {
      slug: "animated-content",
      name: "Animated Content",
    },
    {
      slug: "animated-list",
      name: "Animated List",
    },
    {
      slug: "antigravity",
      name: "Antigravity",
    },
    {
      slug: "ascii-text",
      name: "ASCII Text",
    },
    {
      slug: "aurora",
      name: "Aurora",
    },
    {
      slug: "balatro",
      name: "Balatro",
    },
    {
      slug: "ballpit",
      name: "Ballpit",
    },
    {
      slug: "beams",
      name: "Beams",
    },
    {
      slug: "blob-cursor",
      name: "Blob Cursor",
    },
    {
      slug: "blur-text",
      name: "Blur Text",
    },
    {
      slug: "border-glow",
      name: "Border Glow",
    },
    {
      slug: "bounce-cards",
      name: "Bounce Cards",
    },
    {
      slug: "bubble-menu",
      name: "Bubble Menu",
    },
    {
      slug: "card-nav",
      name: "Card Nav",
    },
    {
      slug: "card-swap",
      name: "Card Swap",
    },
    {
      slug: "chroma-grid",
      name: "Chroma Grid",
    },
    {
      slug: "circular-gallery",
      name: "Circular Gallery",
    },
    {
      slug: "click-spark",
      name: "Click Spark",
    },
    {
      slug: "color-bends",
      name: "Color Bends",
    },
    {
      slug: "count-up",
      name: "Count Up",
    },
    {
      slug: "counter",
      name: "Counter",
    },
    {
      slug: "crosshair",
      name: "Crosshair",
    },
    {
      slug: "cubes",
      name: "Cubes",
    },
    {
      slug: "curved-loop",
      name: "Curved Loop",
    },
    {
      slug: "dark-veil",
      name: "Dark Veil",
    },
    {
      slug: "decay-card",
      name: "Decay Card",
    },
    {
      slug: "decrypted-text",
      name: "Decrypted Text",
    },
    {
      slug: "dither",
      name: "Dither",
    },
    {
      slug: "dome-gallery",
      name: "Dome Gallery",
    },
    {
      slug: "dot-field",
      name: "Dot Field",
    },
    {
      slug: "dot-grid",
      name: "Dot Grid",
    },
    {
      slug: "elastic-slider",
      name: "Elastic Slider",
    },
    {
      slug: "electric-border",
      name: "Electric Border",
    },
    {
      slug: "evil-eye",
      name: "Evil Eye",
    },
    {
      slug: "fade-content",
      name: "Fade Content",
    },
    {
      slug: "falling-text",
      name: "Falling Text",
    },
    {
      slug: "faulty-terminal",
      name: "Faulty Terminal",
    },
    {
      slug: "floating-lines",
      name: "Floating Lines",
    },
    {
      slug: "flowing-menu",
      name: "Flowing Menu",
    },
    {
      slug: "fluid-glass",
      name: "Fluid Glass",
    },
    {
      slug: "flying-posters",
      name: "Flying Posters",
    },
    {
      slug: "folder",
      name: "Folder",
    },
    {
      slug: "fuzzy-text",
      name: "Fuzzy Text",
    },
    {
      slug: "galaxy",
      name: "Galaxy",
    },
    {
      slug: "ghost-cursor",
      name: "Ghost Cursor",
    },
    {
      slug: "glare-hover",
      name: "Glare Hover",
    },
    {
      slug: "glass-icons",
      name: "Glass Icons",
    },
    {
      slug: "glass-surface",
      name: "Glass Surface",
    },
    {
      slug: "glitch-text",
      name: "Glitch Text",
    },
    {
      slug: "gooey-nav",
      name: "Gooey Nav",
    },
    {
      slug: "gradient-blinds",
      name: "Gradient Blinds",
    },
    {
      slug: "gradient-text",
      name: "Gradient Text",
    },
    {
      slug: "gradual-blur",
      name: "Gradual Blur",
    },
    {
      slug: "grainient",
      name: "Grainient",
    },
    {
      slug: "grid-distortion",
      name: "Grid Distortion",
    },
    {
      slug: "grid-motion",
      name: "Grid Motion",
    },
    {
      slug: "grid-scan",
      name: "Grid Scan",
    },
    {
      slug: "hyperspeed",
      name: "Hyperspeed",
    },
    {
      slug: "image-trail",
      name: "Image Trail",
    },
    {
      slug: "infinite-scroll",
      name: "Infinite Scroll",
    },
    {
      slug: "iridescence",
      name: "Iridescence",
    },
    {
      slug: "lanyard",
      name: "Lanyard",
    },
    {
      slug: "laser-flow",
      name: "Laser Flow",
    },
    {
      slug: "letter-glitch",
      name: "Letter Glitch",
    },
    {
      slug: "light-pillar",
      name: "Light Pillar",
    },
    {
      slug: "light-rays",
      name: "Light Rays",
    },
    {
      slug: "lightning",
      name: "Lightning",
    },
    {
      slug: "line-waves",
      name: "Line Waves",
    },
    {
      slug: "liquid-chrome",
      name: "Liquid Chrome",
    },
    {
      slug: "liquid-ether",
      name: "Liquid Ether",
    },
    {
      slug: "logo-loop",
      name: "Logo Loop",
    },
    {
      slug: "magic-bento",
      name: "Magic Bento",
    },
    {
      slug: "magic-rings",
      name: "Magic Rings",
    },
    {
      slug: "magnet",
      name: "Magnet",
    },
    {
      slug: "magnet-lines",
      name: "Magnet Lines",
    },
    {
      slug: "masonry",
      name: "Masonry",
    },
    {
      slug: "meta-balls",
      name: "Meta Balls",
    },
    {
      slug: "metallic-paint",
      name: "Metallic Paint",
    },
    {
      slug: "model-viewer",
      name: "Model Viewer",
    },
    {
      slug: "noise",
      name: "Noise",
    },
    {
      slug: "orb",
      name: "Orb",
    },
    {
      slug: "orbit-images",
      name: "Orbit Images",
    },
    {
      slug: "particles",
      name: "Particles",
    },
    {
      slug: "pill-nav",
      name: "Pill Nav",
    },
    {
      slug: "pixel-blast",
      name: "Pixel Blast",
    },
    {
      slug: "pixel-card",
      name: "Pixel Card",
    },
    {
      slug: "pixel-snow",
      name: "Pixel Snow",
    },
    {
      slug: "pixel-transition",
      name: "Pixel Transition",
    },
    {
      slug: "plasma",
      name: "Plasma",
    },
    {
      slug: "plasma-wave",
      name: "Plasma Wave",
    },
    {
      slug: "prism",
      name: "Prism",
    },
    {
      slug: "prismatic-burst",
      name: "Prismatic Burst",
    },
    {
      slug: "profile-card",
      name: "Profile Card",
    },
    {
      slug: "radar",
      name: "Radar",
    },
    {
      slug: "rb-carousel",
      name: "RB Carousel",
    },
    {
      slug: "rb-dock",
      name: "RB Dock",
    },
    {
      slug: "rb-pixel-trail",
      name: "RB Pixel Trail",
    },
    {
      slug: "reflective-card",
      name: "Reflective Card",
    },
    {
      slug: "ribbons",
      name: "Ribbons",
    },
    {
      slug: "ripple-grid",
      name: "Ripple Grid",
    },
    {
      slug: "rotating-text",
      name: "Rotating Text",
    },
    {
      slug: "scrambled-text",
      name: "Scrambled Text",
    },
    {
      slug: "scroll-float",
      name: "Scroll Float",
    },
    {
      slug: "scroll-reveal",
      name: "Scroll Reveal",
    },
    {
      slug: "scroll-stack",
      name: "Scroll Stack",
    },
    {
      slug: "scroll-velocity",
      name: "Scroll Velocity",
    },
    {
      slug: "shape-blur",
      name: "Shape Blur",
    },
    {
      slug: "shape-grid",
      name: "Shape Grid",
    },
    {
      slug: "shiny-text",
      name: "Shiny Text",
    },
    {
      slug: "shuffle",
      name: "Shuffle",
    },
    {
      slug: "silk",
      name: "Silk",
    },
    {
      slug: "soft-aurora",
      name: "Soft Aurora",
    },
    {
      slug: "splash-cursor",
      name: "Splash Cursor",
    },
    {
      slug: "split-text",
      name: "Split Text",
    },
    {
      slug: "spotlight-card",
      name: "Spotlight Card",
    },
    {
      slug: "stack",
      name: "Stack",
    },
    {
      slug: "staggered-menu",
      name: "Staggered Menu",
    },
    {
      slug: "star-border",
      name: "Star Border",
    },
    {
      slug: "stepper",
      name: "Stepper",
    },
    {
      slug: "sticker-peel",
      name: "Sticker Peel",
    },
    {
      slug: "target-cursor",
      name: "Target Cursor",
    },
    {
      slug: "text-cursor",
      name: "Text Cursor",
    },
    {
      slug: "text-pressure",
      name: "Text Pressure",
    },
    {
      slug: "text-type",
      name: "Text Type",
    },
    {
      slug: "threads",
      name: "Threads",
    },
    {
      slug: "tilted-card",
      name: "Tilted Card",
    },
    {
      slug: "true-focus",
      name: "True Focus",
    },
    {
      slug: "variable-proximity",
      name: "Variable Proximity",
    },
    {
      slug: "waves",
      name: "Waves",
    },
];

export default function ReactbitsIndex() {
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
            129 components
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
              <h2 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">
                {c.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
