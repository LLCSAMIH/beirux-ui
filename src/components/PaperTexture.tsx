"use client";

import { PaperTexture, type PaperTextureProps } from "@paper-design/shaders-react";

type PaperTextureBgProps = PaperTextureProps & {
  className?: string;
};

export default function PaperTextureBg({ className, style, ...props }: PaperTextureBgProps) {
  return (
    <PaperTexture
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      colorBack="#0a0a0a"
      colorFront="#161616"
      contrast={0.6}
      roughness={0.5}
      fiber={0.4}
      crumples={0.3}
      folds={0.2}
      {...props}
    />
  );
}
