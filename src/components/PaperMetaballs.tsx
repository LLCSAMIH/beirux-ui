"use client";

import { Metaballs, type MetaballsProps } from "@paper-design/shaders-react";

type PaperMetaballsBgProps = MetaballsProps & {
  className?: string;
};

// Paper Shaders Metaballs (WebGL). Named PaperMetaballs to avoid colliding with the
// ReactBits ogl-based Metaballs component in this same directory.
export default function PaperMetaballsBg({ className, style, ...props }: PaperMetaballsBgProps) {
  return (
    <Metaballs
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      colorBack="#0a0a0a"
      colors={["#00e5ff", "#0a4a5a", "#1a8fa0"]}
      count={8}
      size={0.45}
      speed={0.7}
      {...props}
    />
  );
}
