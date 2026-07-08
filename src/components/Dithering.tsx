"use client";

import { Dithering, type DitheringProps } from "@paper-design/shaders-react";

type DitheringBgProps = DitheringProps & {
  className?: string;
};

export default function DitheringBg({ className, style, ...props }: DitheringBgProps) {
  return (
    <Dithering
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      colorBack="#0a0a0a"
      colorFront="#00e5ff"
      shape="warp"
      type="8x8"
      size={2}
      scale={1}
      speed={0.6}
      {...props}
    />
  );
}
