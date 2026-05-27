import Link from "next/link";

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="fixed top-6 left-6 z-50 text-sm text-zinc-500 hover:text-cyan-400 transition-colors bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-zinc-800"
    >
      &larr; {label}
    </Link>
  );
}
