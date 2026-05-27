"use client";

import Silk from "@/components/Silk";
import LetterGlitch from "@/components/LetterGlitch";
import SpotlightCards from "@/components/kokonutui/spotlight-cards";
import type { SpotlightItem } from "@/components/kokonutui/spotlight-cards";
import ChromaGrid from "@/components/ChromaGrid";
import type { ChromaItem } from "@/components/ChromaGrid";
import ScrollFloat from "@/components/ScrollFloat";
import ScrambleHover from "@/components/fancy/text/scramble-hover";
import GradientButton from "@/components/kokonutui/gradient-button";
import { BackLink } from "@/components/back-link";
import {
  Palette,
  Code,
  Megaphone,
  Film,
  Gem,
  Rocket,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const services: SpotlightItem[] = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "From logomark to full visual systems. We craft identities that own the room and outlast trends.",
    color: "#f59e0b",
  },
  {
    icon: Code,
    title: "Digital Products",
    description:
      "Interfaces that feel inevitable. We design and build apps, platforms, and sites with obsessive craft.",
    color: "#a78bfa",
  },
  {
    icon: Megaphone,
    title: "Campaigns",
    description:
      "Launch sequences that stop thumbs. Performance creative for paid, organic, and everything between.",
    color: "#f472b6",
  },
  {
    icon: Film,
    title: "Motion & Film",
    description:
      "Brand films, product spots, social content. Cinematic quality at campaign speed.",
    color: "#38bdf8",
  },
  {
    icon: Gem,
    title: "Luxury Strategy",
    description:
      "Positioning for premium markets. We understand the tension between exclusivity and reach.",
    color: "#fbbf24",
  },
  {
    icon: Rocket,
    title: "Launch Partner",
    description:
      "End-to-end from concept to market. Brand, product, site, and campaign in one sprint.",
    color: "#34d399",
  },
];

const team: ChromaItem[] = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    title: "Marcus Cole",
    subtitle: "Creative Director",
    handle: "@marcuscole",
    borderColor: "#f59e0b",
    gradient: "linear-gradient(145deg,#f59e0b,#000)",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    title: "Elena Vasquez",
    subtitle: "Head of Strategy",
    handle: "@elenavasquez",
    borderColor: "#a78bfa",
    gradient: "linear-gradient(210deg,#a78bfa,#000)",
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    title: "James Okafor",
    subtitle: "Lead Developer",
    handle: "@jamesokafor",
    borderColor: "#38bdf8",
    gradient: "linear-gradient(145deg,#38bdf8,#000)",
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    title: "Yuki Tanaka",
    subtitle: "Motion Designer",
    handle: "@yukitanaka",
    borderColor: "#f472b6",
    gradient: "linear-gradient(210deg,#f472b6,#000)",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    title: "Leo Moretti",
    subtitle: "Art Director",
    handle: "@leomoretti",
    borderColor: "#34d399",
    gradient: "linear-gradient(145deg,#34d399,#000)",
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    title: "Ava Chen",
    subtitle: "Brand Strategist",
    handle: "@avachen",
    borderColor: "#fbbf24",
    gradient: "linear-gradient(210deg,#fbbf24,#000)",
  },
];

const testimonials = [
  {
    quote:
      "They understood the assignment before we finished explaining it. The rebrand tripled our inbound in 90 days.",
    name: "Isabelle Fontaine",
    role: "CMO, Maison Noir",
    industry: "Luxury Fashion",
  },
  {
    quote:
      "Our Series A deck was embarrassing until they touched it. Three weeks later we closed the round oversubscribed.",
    name: "Ryan Park",
    role: "Co-founder, Lattice AI",
    industry: "Tech Startup",
  },
  {
    quote:
      "Most agencies show you Dribbble shots. These people showed us revenue. The campaign ROI was 11x.",
    name: "Daria Volkov",
    role: "VP Marketing, Aurum Group",
    industry: "Luxury Retail",
  },
];

const clientLogos = [
  "Maison Noir",
  "Lattice AI",
  "Aurum Group",
  "Voss Studio",
  "Helix Ventures",
  "Onyx Capital",
  "Lumiere Paris",
  "Axiom Labs",
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ShowcasePage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b] text-white">
      <BackLink href="/" label="Home" />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Silk background */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={3}
            scale={1.2}
            color="#6B46C1"
            noiseIntensity={1.8}
            rotation={0.2}
          />
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 z-[1] bg-black/40" />

        {/* LetterGlitch accent strip */}
        <div className="absolute top-0 left-0 right-0 h-24 z-[2] opacity-30">
          <LetterGlitch
            glitchColors={["#6B46C1", "#a78bfa", "#f59e0b"]}
            glitchSpeed={70}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-[3] flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="text-sm font-medium tracking-[0.35em] uppercase text-white/50 mb-6">
            Creative Agency for the Uncompromising
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] max-w-5xl">
            We build brands
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              that refuse
            </span>
            <br />
            to blend in.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Strategy, design, and technology for luxury brands, tech startups,
            and fashion labels who want to own their category.
          </p>
          <div className="mt-12 flex gap-4 flex-wrap justify-center">
            <GradientButton label="Start a Project" variant="purple" />
            <GradientButton label="View Work" variant="emerald" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.25em] uppercase text-white/30">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── Client logos marquee ──────────────────────────────────────────── */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-white/30 mb-10">
            Trusted by category leaders
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {clientLogos.map((name) => (
              <span
                key={name}
                className="text-lg md:text-xl font-semibold text-white/20 hover:text-white/60 transition-colors duration-500 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <ScrollFloat
              textClassName="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              What We Do
            </ScrollFloat>
          </div>
          <p className="text-center text-white/50 max-w-xl mx-auto mb-16 text-lg">
            Six disciplines. One studio. Every engagement is bespoke, because
            templates are for people with nothing to say.
          </p>
          <SpotlightCards
            items={services}
            eyebrow="Services"
            heading=""
            className="bg-transparent dark:bg-transparent"
          />
        </div>
      </section>

      {/* ── Work / Numbers ───────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#111113]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <ScrollFloat
              textClassName="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              By the Numbers
            </ScrollFloat>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "147", label: "Brands Launched" },
              { value: "11x", label: "Avg. Campaign ROI" },
              { value: "23", label: "Countries Reached" },
              { value: "98%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent mb-3 transition-transform duration-500 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-sm tracking-[0.2em] uppercase text-white/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <ScrollFloat
              textClassName="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              The People
            </ScrollFloat>
          </div>
          <p className="text-center text-white/50 max-w-xl mx-auto mb-16 text-lg">
            Six disciplines, zero egos. We hired for taste, kept for grit.
          </p>
          <div className="w-full">
            <ChromaGrid
              items={team}
              radius={350}
              damping={0.4}
              fadeOut={0.5}
              ease="power3.out"
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-[#111113]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <ScrollFloat
              textClassName="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Kind Words
            </ScrollFloat>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm hover:border-white/10 transition-all duration-500 hover:bg-white/[0.04]"
              >
                {/* Quote mark */}
                <div className="text-5xl font-serif text-white/10 leading-none mb-4">
                  &ldquo;
                </div>
                <blockquote className="text-white/70 text-base leading-relaxed mb-8">
                  {t.quote}
                </blockquote>
                <div className="border-t border-white/5 pt-6">
                  <div className="font-semibold text-white mb-1">
                    <ScrambleHover
                      text={t.name}
                      scrambleSpeed={40}
                      maxIterations={8}
                      sequential={true}
                      revealDirection="start"
                      className="cursor-default"
                    />
                  </div>
                  <div className="text-sm text-white/40">
                    {t.role}
                  </div>
                  <div className="text-xs text-amber-400/60 mt-1 tracking-wide">
                    {t.industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative py-36 px-6 overflow-hidden">
        {/* Silk background for CTA */}
        <div className="absolute inset-0 z-0 opacity-60">
          <Silk
            speed={2}
            scale={0.8}
            color="#f59e0b"
            noiseIntensity={2}
            rotation={-0.3}
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-black/60" />

        <div className="relative z-[2] max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.35em] uppercase text-white/40 mb-6">
            Ready to stand out?
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-8">
            Let&apos;s make
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              something bold.
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            We take on 4 new partners per quarter. If you are building something
            that matters, we want to hear about it.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <GradientButton label="Book a Call" variant="purple" />
            <GradientButton label="See Our Work" variant="orange" />
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xl font-bold tracking-tight">
              <ScrambleHover
                text="NOIR STUDIO"
                scrambleSpeed={35}
                maxIterations={12}
                sequential={true}
                revealDirection="start"
                className="cursor-default"
              />
            </div>
            <p className="text-xs text-white/30 mt-1">
              Creative agency for luxury, tech, and fashion.
            </p>
          </div>
          <div className="flex gap-8 text-sm text-white/40">
            {["Work", "Services", "Team", "Contact"].map((link) => (
              <span
                key={link}
                className="hover:text-white/80 transition-colors duration-300 cursor-pointer"
              >
                {link}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/20">
            &copy; 2026 Noir Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
