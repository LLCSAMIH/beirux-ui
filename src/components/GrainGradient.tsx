"use client";

import { GrainGradient, type GrainGradientProps } from "@paper-design/shaders-react";

type GrainGradientBgProps = GrainGradientProps & {
  className?: string;
};

export default function GrainGradientBg({ className, style, ...props }: GrainGradientBgProps) {
  return (
    <GrainGradient
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      colorBack="#0a0a0a"
      colors={["#00e5ff", "#0a4a5a", "#161616"]}
      shape="wave"
      softness={0.6}
      intensity={0.5}
      noise={0.4}
      speed={0.5}
      {...props}
    />
  );
}
