"use client";

import { usePathname } from "next/navigation";
import { ComponentNav } from "@/components/component-nav";

export default function FancyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const isIndex = pathname === "/fancy";

  return (
    <>
      {!isIndex && slug && <ComponentNav library="fancy" slug={slug} />}
      {children}
    </>
  );
}
