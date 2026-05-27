"use client";

import { usePathname } from "next/navigation";
import { ComponentNav } from "@/components/component-nav";

export default function CultUILayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const isIndex = pathname === "/cult-ui";

  return (
    <>
      {!isIndex && slug && <ComponentNav library="cult-ui" slug={slug} />}
      {children}
    </>
  );
}
