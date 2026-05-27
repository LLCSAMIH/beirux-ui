"use client";

import { usePathname } from "next/navigation";
import { ComponentNav } from "@/components/component-nav";

export default function KokonutUILayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const isIndex = pathname === "/kokonutui";

  return (
    <>
      {!isIndex && slug && <ComponentNav library="kokonutui" slug={slug} />}
      {children}
    </>
  );
}
