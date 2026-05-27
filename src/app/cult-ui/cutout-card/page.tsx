"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link";
import {
  CutoutCard,
  CutoutCardMedia,
  CutoutCardImage,
  CutoutCardOverlay,
  CutoutCardContent,
  CutoutCardFooter,
  CutoutCardInsetLabel,
  CutoutCardPin,
  CutoutCorner,
  CutoutCardAction,
  cutoutCardSurfaceClassName,
  useCutoutContentStaggerVariants,
} from "@/components/ui/cutout-card";
import { motion } from "motion/react";
import { ArrowUpRight, Star, Clock, MapPin } from "lucide-react";

// ---------------------------------------------------------------------------
// Demo 1: Classic image card with inset label + hover action
// ---------------------------------------------------------------------------
function ImageCardDemo() {
  return (
    <CutoutCard className={cutoutCardSurfaceClassName}>
      <CutoutCardMedia className="relative h-72">
        <CutoutCardImage
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
          alt="Mountain landscape"
          sizes="(max-width: 768px) 100vw, 28rem"
        />
        <CutoutCardOverlay />

        {/* Bottom-left inset label with cutout corners */}
        <CutoutCardInsetLabel className="bottom-0 left-0 flex items-end">
          <div className="bg-card px-4 py-2 text-xs font-medium tracking-wider uppercase text-card-foreground">
            Featured
          </div>
          <CutoutCorner className="text-card -scale-x-100 self-end" size={20} />
        </CutoutCardInsetLabel>

        {/* Top-right pin badge */}
        <CutoutCardPin className="top-0 right-0 flex items-start">
          <CutoutCorner className="text-card rotate-180" size={20} />
          <div className="bg-card px-3 py-1.5 text-xs font-semibold text-amber-500 flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-500" /> 4.9
          </div>
        </CutoutCardPin>

        {/* Hover-reveal action button */}
        <CutoutCardAction className="bottom-4 right-4">
          <button className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-lg transition-colors hover:bg-white/90">
            View <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </CutoutCardAction>
      </CutoutCardMedia>

      <CutoutCardContent>
        <h3 className="text-lg font-semibold text-card-foreground">
          Alpine Summit Trail
        </h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          A breathtaking ridge hike with panoramic views. The cutout corners
          create a die-cut label effect that feels physical.
        </p>
      </CutoutCardContent>
      <CutoutCardFooter className="px-6 pb-6">
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" /> Swiss Alps
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" /> 6h round trip
        </span>
      </CutoutCardFooter>
    </CutoutCard>
  );
}

// ---------------------------------------------------------------------------
// Demo 2: Staggered text entrance with no image
// ---------------------------------------------------------------------------
function StaggeredTextDemo() {
  const { container, item } = useCutoutContentStaggerVariants();

  return (
    <CutoutCard className={cutoutCardSurfaceClassName} defaultHovered={true}>
      <CutoutCardContent className="p-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          <motion.p
            variants={item}
            className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground"
          >
            Announcement
          </motion.p>
          <motion.h3
            variants={item}
            className="text-2xl font-semibold text-card-foreground"
          >
            We just shipped v2.0
          </motion.h3>
          <motion.p
            variants={item}
            className="text-sm text-muted-foreground leading-relaxed max-w-md"
          >
            Controllable hover state, reduced-motion support, staggered content
            entrance, and composable cutout geometry. All copy-paste, zero
            runtime lock-in.
          </motion.p>
          <motion.div variants={item}>
            <button className="mt-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition-colors hover:bg-white/90">
              Read changelog
            </button>
          </motion.div>
        </motion.div>
      </CutoutCardContent>
    </CutoutCard>
  );
}

// ---------------------------------------------------------------------------
// Demo 3: Controlled hover across a grid
// ---------------------------------------------------------------------------
function GridDemo() {
  const cards = [
    {
      title: "Design",
      desc: "Figma-first workflow with token sync",
      color: "bg-violet-500/15 text-violet-400",
    },
    {
      title: "Develop",
      desc: "Copy-paste components, own the code",
      color: "bg-cyan-500/15 text-cyan-400",
    },
    {
      title: "Ship",
      desc: "Zero runtime dependency in production",
      color: "bg-emerald-500/15 text-emerald-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card) => (
        <CutoutCard key={card.title} className={cutoutCardSurfaceClassName}>
          <CutoutCardContent className="p-6 flex flex-col gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.color}`}
            >
              <span className="text-sm font-bold">{card.title[0]}</span>
            </div>
            <h3 className="text-base font-semibold text-card-foreground">
              {card.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {card.desc}
            </p>
          </CutoutCardContent>
        </CutoutCard>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function CutoutCardPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Cutout Card
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Cards with SVG corner cutouts that create a die-cut label effect.
            Composable pieces: media, overlay, inset labels, pin badges, and
            hover-reveal actions.
          </p>
        </div>

        <div className="space-y-16">
          {/* Demo 1: Full image card */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              Image card with cutout labels
            </h2>
            <ImageCardDemo />
          </section>

          {/* Demo 2: Text-only with stagger entrance */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              Staggered text entrance
            </h2>
            <StaggeredTextDemo />
          </section>

          {/* Demo 3: Compact grid */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              Compact grid
            </h2>
            <GridDemo />
          </section>
        </div>
      </div>
    </div>
  );
}
