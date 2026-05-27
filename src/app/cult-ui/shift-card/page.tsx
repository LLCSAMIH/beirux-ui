"use client";

import { BackLink } from "@/components/back-link";
import { ShiftCard } from "@/components/ui/shift-card";
import { motion } from "motion/react";
import { Sparkles, Layers, Rocket } from "lucide-react";

export default function ShiftCardPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Shift Card
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
          <p className="mt-4 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Cards that reveal hidden content on hover with a smooth shifting
            animation. Middle content fades out while bottom content expands
            upward.
          </p>
        </div>

        <div className="space-y-16">
          {/* Feature card */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              Feature card
            </h2>
            <div className="flex justify-center">
              <ShiftCard
                topContent={
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/15">
                      <Sparkles className="h-4 w-4 text-violet-400" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      AI Copilot
                    </span>
                  </div>
                }
                topAnimateContent={
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="text-xs text-white/40 mt-2"
                  >
                    Your intelligent assistant for every workflow
                  </motion.p>
                }
                middleContent={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-2 pt-4"
                  >
                    <Sparkles className="h-12 w-12 text-violet-400/60" />
                    <p className="text-xs text-white/30">Hover to explore</p>
                  </motion.div>
                }
                bottomContent={
                  <div className="bg-violet-500/10 rounded-xl p-4 space-y-2">
                    <p className="text-sm font-medium text-white">
                      Smart Suggestions
                    </p>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Context-aware recommendations powered by machine learning.
                      Adapts to your coding patterns and project structure.
                    </p>
                    <div className="flex gap-2 pt-1">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300">
                        ML
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300">
                        Context
                      </span>
                    </div>
                  </div>
                }
              />
            </div>
          </section>

          {/* Metric card */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              Metric card
            </h2>
            <div className="flex justify-center">
              <ShiftCard
                topContent={
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
                      <Layers className="h-4 w-4 text-emerald-400" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      Analytics
                    </span>
                  </div>
                }
                topAnimateContent={
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="text-xs text-white/40 mt-2"
                  >
                    Real-time performance overview
                  </motion.p>
                }
                middleContent={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-1 pt-4"
                  >
                    <span className="text-4xl font-bold text-emerald-400">
                      98.7%
                    </span>
                    <span className="text-xs text-white/30">Uptime</span>
                  </motion.div>
                }
                bottomContent={
                  <div className="bg-emerald-500/10 rounded-xl p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] text-white/40 uppercase tracking-wider">
                          Requests
                        </p>
                        <p className="text-sm font-semibold text-white">
                          2.4M
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 uppercase tracking-wider">
                          Latency
                        </p>
                        <p className="text-sm font-semibold text-white">
                          42ms
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 uppercase tracking-wider">
                          Errors
                        </p>
                        <p className="text-sm font-semibold text-emerald-400">
                          0.03%
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 uppercase tracking-wider">
                          Cached
                        </p>
                        <p className="text-sm font-semibold text-white">
                          89%
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </section>

          {/* Action card */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-6 text-center">
              Action card
            </h2>
            <div className="flex justify-center">
              <ShiftCard
                topContent={
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/15">
                      <Rocket className="h-4 w-4 text-amber-400" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      Deploy
                    </span>
                  </div>
                }
                topAnimateContent={
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="text-xs text-white/40 mt-2"
                  >
                    Ship to production in one click
                  </motion.p>
                }
                middleContent={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-2 pt-4"
                  >
                    <Rocket className="h-12 w-12 text-amber-400/60" />
                    <p className="text-xs text-white/30">Ready to launch</p>
                  </motion.div>
                }
                bottomContent={
                  <div className="bg-amber-500/10 rounded-xl p-4 space-y-2">
                    <p className="text-sm font-medium text-white">
                      Production Deploy
                    </p>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Zero-downtime deployment with automatic rollback. Preview
                      changes before they go live.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-emerald-400">
                        All checks passed
                      </span>
                    </div>
                  </div>
                }
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
