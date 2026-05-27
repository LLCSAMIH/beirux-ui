"use client";

import InfiniteMenu from "@/components/InfiniteMenu";
import { BackLink } from "@/components/back-link";

const items = [
  {
    image: "https://picsum.photos/seed/alpha/900/900",
    link: "#",
    title: "Alpha",
    description: "First item in the loop",
  },
  {
    image: "https://picsum.photos/seed/bravo/900/900",
    link: "#",
    title: "Bravo",
    description: "Second item in the loop",
  },
  {
    image: "https://picsum.photos/seed/charlie/900/900",
    link: "#",
    title: "Charlie",
    description: "Third item in the loop",
  },
  {
    image: "https://picsum.photos/seed/delta/900/900",
    link: "#",
    title: "Delta",
    description: "Fourth item in the loop",
  },
  {
    image: "https://picsum.photos/seed/echo/900/900",
    link: "#",
    title: "Echo",
    description: "Fifth item in the loop",
  },
  {
    image: "https://picsum.photos/seed/foxtrot/900/900",
    link: "#",
    title: "Foxtrot",
    description: "Sixth item in the loop",
  },
];

export default function InfiniteScrollPage() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="absolute inset-0">
        <InfiniteMenu items={items} />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-8">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/40">
          Drag to explore
        </p>
      </div>
    </div>
  );
}
