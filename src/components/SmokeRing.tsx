"use client";

import { SmokeRing, type SmokeRingProps } from "@paper-design/shaders-react";

type SmokeRingBgProps = SmokeRingProps & {
  className?: string;
};

export default function SmokeRingBg({ className, style, ...props }: SmokeRingBgProps) {
  return (
    <SmokeRing
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      colorBack="#0a0a0a"
      colors={["#00e5ff", "#0a4a5a", "#e6faff"]}
      thickness={0.4}
      radius={0.5}
      innerShape={1}
      noiseScale={1.4}
      noiseIterations={6}
      speed={0.6}
      {...props}
    />
  );
}
