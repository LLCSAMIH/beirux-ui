"use client";

import { LiquidMetal, type LiquidMetalProps } from "@paper-design/shaders-react";

type LiquidMetalBgProps = LiquidMetalProps & {
  className?: string;
};

export default function LiquidMetalBg({ className, style, ...props }: LiquidMetalBgProps) {
  return (
    <LiquidMetal
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      colorBack="#0a0a0a"
      colorTint="#00e5ff"
      shape="metaballs"
      repetition={4}
      softness={0.4}
      shiftRed={0.3}
      shiftBlue={-0.3}
      distortion={0.2}
      contour={0.8}
      angle={90}
      speed={0.5}
      {...props}
    />
  );
}
