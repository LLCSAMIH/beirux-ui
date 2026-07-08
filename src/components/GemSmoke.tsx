"use client";

import { GemSmoke, type GemSmokeProps } from "@paper-design/shaders-react";

type GemSmokeBgProps = GemSmokeProps & {
  className?: string;
};

export default function GemSmokeBg({ className, style, ...props }: GemSmokeBgProps) {
  return (
    <GemSmoke
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      colorBack="#0a0a0a"
      colors={["#00e5ff", "#0a4a5a", "#e6faff"]}
      colorInner="#0a0a0a"
      shape="metaballs"
      size={0.7}
      innerGlow={0.6}
      outerGlow={0.4}
      innerDistortion={0.5}
      outerDistortion={0.5}
      angle={90}
      speed={0.5}
      {...props}
    />
  );
}
