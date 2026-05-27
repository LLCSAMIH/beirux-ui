"use client";

import dynamic from "next/dynamic";
import { BackLink } from "@/components/back-link";

const BeamsBackground = dynamic(
  () => import("@/components/kokonutui/beams-background"),
  { ssr: false }
);

export default function BeamsBackgroundPage() {
  return (
    <div className="dark relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />
      <div className="absolute inset-0">
        <BeamsBackground intensity="strong" />
      </div>
    </div>
  );
}
