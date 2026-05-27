"use client";

import { usePathname } from "next/navigation";
import { ComponentNav } from "@/components/component-nav";

export default function ReactBitsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const isIndex = pathname === "/reactbits";

  return (
    <>
      {!isIndex && slug && <ComponentNav library="reactbits" slug={slug} />}
      {children}
    </>
  );
}
