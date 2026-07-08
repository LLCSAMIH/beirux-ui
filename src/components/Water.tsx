"use client";

import { Water, type WaterProps } from "@paper-design/shaders-react";

type WaterBgProps = WaterProps & {
  className?: string;
};

export default function WaterBg({ className, style, ...props }: WaterBgProps) {
  return (
    <Water
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      colorBack="#0a0a0a"
      colorHighlight="#00e5ff"
      highlights={0.5}
      layering={0.5}
      edges={0.4}
      caustic={0.6}
      waves={0.4}
      size={2}
      speed={0.5}
      {...props}
    />
  );
}
