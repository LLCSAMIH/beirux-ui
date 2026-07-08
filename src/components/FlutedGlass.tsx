"use client";

import { FlutedGlass, type FlutedGlassProps } from "@paper-design/shaders-react";

type FlutedGlassBgProps = FlutedGlassProps & {
  className?: string;
};

// Image filter: pass an `image` URL prop to distort a real image. Without an image
// it renders the ribbed glass shape over the background colors.
export default function FlutedGlassBg({ className, style, ...props }: FlutedGlassBgProps) {
  return (
    <FlutedGlass
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      colorBack="#0a0a0a"
      colorShadow="#0a4a5a"
      colorHighlight="#00e5ff"
      shape="lines"
      distortionShape="prism"
      size={0.5}
      angle={90}
      distortion={0.5}
      shift={0}
      blur={0.2}
      edges={0.3}
      shadows={0.4}
      highlights={0.4}
      speed={0.4}
      {...props}
    />
  );
}
