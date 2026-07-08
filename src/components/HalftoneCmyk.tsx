"use client";

import { HalftoneCmyk, type HalftoneCmykProps } from "@paper-design/shaders-react";

type HalftoneCmykBgProps = HalftoneCmykProps & {
  className?: string;
};

export default function HalftoneCmykBg({ className, style, ...props }: HalftoneCmykBgProps) {
  return (
    <HalftoneCmyk
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      colorBack="#0a0a0a"
      type="dots"
      size={0.4}
      contrast={1}
      softness={0.3}
      {...props}
    />
  );
}
