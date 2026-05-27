import Link from "next/link";

const components = [
    {
      slug: "action-search-bar",
      name: "Action Search Bar",
    },
    {
      slug: "ai-input-search",
      name: "AI Input Search",
    },
    {
      slug: "ai-loading",
      name: "AI Loading",
    },
    {
      slug: "ai-prompt",
      name: "AI Prompt",
    },
    {
      slug: "ai-text-loading",
      name: "AI Text Loading",
    },
    {
      slug: "ai-voice",
      name: "AI Voice",
    },
    {
      slug: "apple-activity-card",
      name: "Apple Activity Card",
    },
    {
      slug: "attract-button",
      name: "Attract Button",
    },
    {
      slug: "aurora-background",
      name: "Aurora Background",
    },
    {
      slug: "avatar-picker",
      name: "Avatar Picker",
    },
    {
      slug: "background-paths",
      name: "Background Paths",
    },
    {
      slug: "beams-background",
      name: "Beams Background",
    },
    {
      slug: "bento-grid",
      name: "Bento Grid",
    },
    {
      slug: "card-flip",
      name: "Card Flip",
    },
    {
      slug: "card-stack",
      name: "Card Stack",
    },
    {
      slug: "carousel-cards",
      name: "Carousel Cards",
    },
    {
      slug: "command-button",
      name: "Command Button",
    },
    {
      slug: "currency-transfer",
      name: "Currency Transfer",
    },
    {
      slug: "dynamic-text",
      name: "Dynamic Text",
    },
    {
      slug: "file-upload",
      name: "File Upload",
    },
    {
      slug: "flow-field",
      name: "Flow Field",
    },
    {
      slug: "gradient-button",
      name: "Gradient Button",
    },
    {
      slug: "hold-button",
      name: "Hold Button",
    },
    {
      slug: "kokonut-glitch-text",
      name: "Kokonut Glitch Text",
    },
    {
      slug: "kokonut-typewriter",
      name: "Kokonut Typewriter",
    },
    {
      slug: "liquid-glass-card",
      name: "Liquid Glass Card",
    },
    {
      slug: "loader",
      name: "Loader",
    },
    {
      slug: "magnetic-button",
      name: "Magnetic Button",
    },
    {
      slug: "matrix-text",
      name: "Matrix Text",
    },
    {
      slug: "morphic-navbar",
      name: "Morphic Navbar",
    },
    {
      slug: "mouse-effect-card",
      name: "Mouse Effect Card",
    },
    {
      slug: "particle-button",
      name: "Particle Button",
    },
    {
      slug: "profile-dropdown",
      name: "Profile Dropdown",
    },
    {
      slug: "scroll-text",
      name: "Scroll Text",
    },
    {
      slug: "shape-hero",
      name: "Shape Hero",
    },
    {
      slug: "shimmer-text",
      name: "Shimmer Text",
    },
    {
      slug: "sliced-text",
      name: "Sliced Text",
    },
    {
      slug: "slide-text-button",
      name: "Slide Text Button",
    },
    {
      slug: "smooth-drawer",
      name: "Smooth Drawer",
    },
    {
      slug: "smooth-tab",
      name: "Smooth Tab",
    },
    {
      slug: "social-button",
      name: "Social Button",
    },
    {
      slug: "spotlight-cards",
      name: "Spotlight Cards",
    },
    {
      slug: "submit-button",
      name: "Submit Button",
    },
    {
      slug: "switch-button",
      name: "Switch Button",
    },
    {
      slug: "swoosh-text",
      name: "Swoosh Text",
    },
    {
      slug: "team-selector",
      name: "Team Selector",
    },
    {
      slug: "toolbar",
      name: "Toolbar",
    },
    {
      slug: "tweet-card",
      name: "Tweet Card",
    },
    {
      slug: "v0-button",
      name: "v0 Button",
    },
];

export default function KokonutuiIndex() {
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
            49 components
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
              <h2 className="text-lg font-medium text-white group-hover:text-amber-300 transition-colors">
                {c.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
