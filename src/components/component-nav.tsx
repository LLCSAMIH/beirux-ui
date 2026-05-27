"use client";

import Link from "next/link";
import { componentLists } from "@/lib/component-lists";

export function ComponentNav({
  library,
  slug,
}: {
  library: string;
  slug: string;
}) {
  const list = componentLists[library];
  if (!list) return null;

  const idx = list.indexOf(slug);
  if (idx === -1) return null;

  const prev = idx > 0 ? list[idx - 1] : null;
  const next = idx < list.length - 1 ? list[idx + 1] : null;

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1.5">
      {prev ? (
        <Link
          href={`/${library}/${prev}`}
          className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-zinc-800"
        >
          &larr; Prev
        </Link>
      ) : (
        <span className="text-sm text-zinc-700 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-zinc-800/50 cursor-default">
          &larr; Prev
        </span>
      )}
      <span className="text-xs text-zinc-600 tabular-nums px-1">
        {idx + 1}/{list.length}
      </span>
      {next ? (
        <Link
          href={`/${library}/${next}`}
          className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-zinc-800"
        >
          Next &rarr;
        </Link>
      ) : (
        <span className="text-sm text-zinc-700 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-zinc-800/50 cursor-default">
          Next &rarr;
        </span>
      )}
    </div>
  );
}
