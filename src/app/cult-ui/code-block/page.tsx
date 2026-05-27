"use client"

import { CodeBlock } from "@/components/ui/code-block"
import { BackLink } from "@/components/back-link"

const tsExample = `import { motion } from "motion/react"

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}`

const cssExample = `.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}`

const bashExample = `npx shadcn@latest add @cult-ui/code-block --yes
npm run dev`

export default function CodeBlockPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Code Block
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Syntax-highlighted code blocks with copy-to-clipboard, language
            labels, and dark theme styling.
          </p>
        </div>

        <div className="space-y-16">
          {/* TypeScript */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              TypeScript
            </h2>
            <CodeBlock code={tsExample} language="typescript" />
          </section>

          {/* CSS */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              CSS
            </h2>
            <CodeBlock code={cssExample} language="css" />
          </section>

          {/* Bash */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Shell Commands
            </h2>
            <CodeBlock code={bashExample} language="bash" />
          </section>
        </div>
      </div>
    </div>
  )
}
