"use client";

import { ImageDithering, type ImageDitheringProps } from "@paper-design/shaders-react";

type ImageDitheringBgProps = ImageDitheringProps & {
  className?: string;
};

export default function ImageDitheringBg({ className, style, ...props }: ImageDitheringBgProps) {
  return (
    <ImageDithering
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      colorBack="#0a0a0a"
      colorFront="#00e5ff"
      colorHighlight="#ffffff"
      type="4x4"
      size={2}
      colorSteps={2}
      {...props}
    />
  );
}
