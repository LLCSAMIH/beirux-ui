"use client";

export const dynamic = "force-dynamic";

import FlowField from "@/components/kokonutui/flow-field";
import { BackLink } from "@/components/back-link";

export default function FlowFieldPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />
      <FlowField theme="aurora" density="medium" />
    </div>
  );
}
