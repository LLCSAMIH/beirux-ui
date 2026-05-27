"use client";

import dynamic from "next/dynamic";
import { BackLink } from "@/components/back-link";

const BackgroundPaths = dynamic(
  () => import("@/components/kokonutui/background-paths"),
  { ssr: false }
);

export default function BackgroundPathsPage() {
  return (
    <div className="dark relative h-screen w-screen overflow-hidden bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />
      <div className="absolute inset-0">
        <BackgroundPaths title="Background Paths" />
      </div>
    </div>
  );
}
