"use client";

import { HalftoneDots, type HalftoneDotsProps } from "@paper-design/shaders-react";

type HalftoneDotsBgProps = HalftoneDotsProps & {
  className?: string;
};

export default function HalftoneDotsBg({ className, style, ...props }: HalftoneDotsBgProps) {
  return (
    <HalftoneDots
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      colorBack="#0a0a0a"
      colorFront="#00e5ff"
      grid="hex"
      type="classic"
      size={0.5}
      radius={1}
      contrast={0.5}
      {...props}
    />
  );
}
