"use client"

import { ColorPicker } from "@/components/ui/color-picker"
import { BackLink } from "@/components/back-link"
import { useState } from "react"

export default function ColorPickerPage() {
  const [color1, setColor1] = useState("#6366f1")
  const [color2, setColor2] = useState("#ef4444")

  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Color Picker
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            A rich color picker with HSL saturation/lightness canvas, hue
            slider, hex input, and preset color swatches.
          </p>
        </div>

        <div className="space-y-16">
          {/* Primary picker */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Primary Color
            </h2>
            <div className="flex items-center gap-6">
              <ColorPicker color={color1} onChange={setColor1} />
              <div
                className="h-16 w-16 rounded-xl border border-white/10 shrink-0"
                style={{ backgroundColor: color1 }}
              />
            </div>
          </section>

          {/* Secondary picker */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Secondary Color
            </h2>
            <div className="flex items-center gap-6">
              <ColorPicker color={color2} onChange={setColor2} />
              <div
                className="h-16 w-16 rounded-xl border border-white/10 shrink-0"
                style={{ backgroundColor: color2 }}
              />
            </div>
          </section>

          {/* Gradient preview */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Live Gradient Preview
            </h2>
            <div
              className="h-32 rounded-xl border border-white/10"
              style={{
                background: `linear-gradient(135deg, ${color1}, ${color2})`,
              }}
            />
          </section>
        </div>
      </div>
    </div>
  )
}
