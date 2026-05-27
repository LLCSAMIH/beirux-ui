"use client";

export const dynamic = "force-dynamic";

import { BackLink } from "@/components/back-link";

export default function ModelViewerPage() {
  return (
    <div className="min-h-screen w-screen bg-[#18181b]">
      <BackLink href="/reactbits" label="ReactBits" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            Model Viewer
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            ReactBits
          </p>
          <p className="mt-4 text-neutral-400 max-w-md mx-auto">
            Three.js-powered 3D model viewer supporting GLTF/GLB, FBX, and OBJ
            formats. Features orbit controls, auto-rotation, mouse parallax,
            environment lighting, and screenshot export.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-neutral-400 text-sm text-center">
              Provide a 3D model URL to render. The component supports GLTF/GLB,
              FBX, and OBJ formats.
            </p>
            <div className="mt-6 bg-black/30 rounded-lg p-4">
              <code className="text-xs text-green-400 block whitespace-pre">{`import ModelViewer from "@/components/ModelViewer";

<ModelViewer
  url="/models/my-model.glb"
  width="100%"
  height={500}
  autoRotate
  environmentPreset="studio"
  enableManualRotation
  enableManualZoom
/>`}</code>
            </div>
            <p className="text-neutral-500 text-xs mt-4 text-center">
              Component installed at src/components/ModelViewer.tsx. Requires a
              3D model file to render a live demo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
