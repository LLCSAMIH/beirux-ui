"use client";

import DecryptedText from "@/components/DecryptedText";
import { BackLink } from "@/components/back-link";

export default function DecryptedTextPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <BackLink href="/reactbits" label="ReactBits" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-6">
            ReactBits
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <DecryptedText
              text="DecryptedText"
              animateOn="view"
              speed={60}
              maxIterations={15}
              sequential={true}
              revealDirection="start"
              className="text-white"
              encryptedClassName="text-neutral-600"
            />
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto mt-8">
            Typewriter-style decrypt animation with scrambled character
            transitions, sequential or random reveal, and multiple trigger
            modes. Powered by Motion.
          </p>
        </div>

        <div className="space-y-24">
          {/* Hover to decrypt (default behavior) */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Hover to decrypt (default)
            </h2>
            <div className="flex items-center justify-center min-h-[280px] rounded-xl border border-white/[0.06] bg-[#18181b] cursor-pointer">
              <span className="text-5xl md:text-6xl font-bold tracking-tight">
                <DecryptedText
                  text="HOVER ME"
                  animateOn="hover"
                  speed={50}
                  maxIterations={10}
                  className="text-white"
                  encryptedClassName="text-neutral-600"
                />
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">animateOn=&quot;hover&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">speed=50</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">maxIterations=10</span>
            </div>
          </section>

          {/* Sequential reveal from start */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Sequential reveal (start to end)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b] cursor-pointer">
              <span className="text-5xl md:text-6xl font-bold tracking-tight">
                <DecryptedText
                  text="SEQUENTIAL"
                  animateOn="hover"
                  speed={80}
                  sequential={true}
                  revealDirection="start"
                  className="text-white"
                  encryptedClassName="text-neutral-600"
                />
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">sequential=true</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">revealDirection=&quot;start&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">speed=80</span>
            </div>
          </section>

          {/* Sequential reveal from center */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Sequential reveal (center out)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b] cursor-pointer">
              <span className="text-5xl md:text-6xl font-bold tracking-tight">
                <DecryptedText
                  text="CENTERED"
                  animateOn="hover"
                  speed={60}
                  sequential={true}
                  revealDirection="center"
                  className="text-white"
                  encryptedClassName="text-emerald-500/60"
                />
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">sequential=true</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">revealDirection=&quot;center&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">encryptedClassName=&quot;text-emerald-500/60&quot;</span>
            </div>
          </section>

          {/* Fast speed, random reveal */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Fast (aggressive scramble)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b] cursor-pointer">
              <span className="text-5xl md:text-6xl font-bold tracking-tight">
                <DecryptedText
                  text="RAPID"
                  animateOn="hover"
                  speed={20}
                  maxIterations={20}
                  className="text-white"
                  encryptedClassName="text-red-500/50"
                />
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">speed=20</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">maxIterations=20</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">encryptedClassName=&quot;text-red-500/50&quot;</span>
            </div>
          </section>

          {/* Custom character set */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Custom characters (numbers only)
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b] cursor-pointer">
              <span className="text-5xl md:text-6xl font-bold tracking-tight font-mono">
                <DecryptedText
                  text="SYSTEM OK"
                  animateOn="hover"
                  speed={40}
                  maxIterations={12}
                  characters="0123456789"
                  className="text-white"
                  encryptedClassName="text-cyan-400/60"
                />
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">characters=&quot;0123456789&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">speed=40</span>
            </div>
          </section>

          {/* Original chars only */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Original characters only
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b] cursor-pointer">
              <span className="text-5xl md:text-6xl font-bold tracking-tight">
                <DecryptedText
                  text="ANAGRAM"
                  animateOn="hover"
                  speed={60}
                  maxIterations={15}
                  useOriginalCharsOnly={true}
                  className="text-white"
                  encryptedClassName="text-amber-400/60"
                />
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">useOriginalCharsOnly=true</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">encryptedClassName=&quot;text-amber-400/60&quot;</span>
            </div>
          </section>

          {/* Animate on view */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Animate on scroll into view
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b]">
              <span className="text-5xl md:text-6xl font-bold tracking-tight">
                <DecryptedText
                  text="IN VIEW"
                  animateOn="view"
                  speed={50}
                  maxIterations={12}
                  sequential={true}
                  revealDirection="start"
                  className="text-white"
                  encryptedClassName="text-neutral-600"
                />
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">animateOn=&quot;view&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">sequential=true</span>
            </div>
          </section>

          {/* Click to decrypt (toggle) */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
              Click to toggle encrypt/decrypt
            </h2>
            <div className="flex items-center justify-center min-h-[200px] rounded-xl border border-white/[0.06] bg-[#18181b] cursor-pointer">
              <span className="text-5xl md:text-6xl font-bold tracking-tight">
                <DecryptedText
                  text="CLICK ME"
                  animateOn="click"
                  clickMode="toggle"
                  speed={50}
                  maxIterations={10}
                  sequential={true}
                  revealDirection="end"
                  className="text-white"
                  encryptedClassName="text-purple-400/60"
                />
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">animateOn=&quot;click&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">clickMode=&quot;toggle&quot;</span>
              <span className="text-xs text-neutral-600 font-mono bg-white/[0.03] px-2 py-1 rounded">revealDirection=&quot;end&quot;</span>
            </div>
          </section>

          {/* Props reference */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Props
            </h2>
            <div className="rounded-xl border border-white/[0.06] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                    <th className="text-left px-4 py-3 text-neutral-400 font-medium">Prop</th>
                    <th className="text-left px-4 py-3 text-neutral-400 font-medium">Type</th>
                    <th className="text-left px-4 py-3 text-neutral-400 font-medium">Default</th>
                    <th className="text-left px-4 py-3 text-neutral-400 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-neutral-300">
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">text</td>
                    <td className="px-4 py-3 text-neutral-500">string</td>
                    <td className="px-4 py-3 text-neutral-600">required</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Text to decrypt/display</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">speed</td>
                    <td className="px-4 py-3 text-neutral-500">number</td>
                    <td className="px-4 py-3 text-neutral-600">50</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Interval in ms between character shuffles (lower = faster)</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">maxIterations</td>
                    <td className="px-4 py-3 text-neutral-500">number</td>
                    <td className="px-4 py-3 text-neutral-600">10</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Number of scramble cycles before revealing final text</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">sequential</td>
                    <td className="px-4 py-3 text-neutral-500">boolean</td>
                    <td className="px-4 py-3 text-neutral-600">false</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Reveal characters one-by-one in order instead of all at once</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">revealDirection</td>
                    <td className="px-4 py-3 text-neutral-500">&quot;start&quot; | &quot;end&quot; | &quot;center&quot;</td>
                    <td className="px-4 py-3 text-neutral-600">&quot;start&quot;</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Direction for sequential reveal</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">characters</td>
                    <td className="px-4 py-3 text-neutral-500">string</td>
                    <td className="px-4 py-3 text-neutral-600">A-Z a-z !@#$%^&*()</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Character pool for scrambled state</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">useOriginalCharsOnly</td>
                    <td className="px-4 py-3 text-neutral-500">boolean</td>
                    <td className="px-4 py-3 text-neutral-600">false</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Only use characters from the original text for scrambling</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">animateOn</td>
                    <td className="px-4 py-3 text-neutral-500">&quot;view&quot; | &quot;hover&quot; | &quot;inViewHover&quot; | &quot;click&quot;</td>
                    <td className="px-4 py-3 text-neutral-600">&quot;hover&quot;</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Trigger mode for the decrypt animation</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">clickMode</td>
                    <td className="px-4 py-3 text-neutral-500">&quot;once&quot; | &quot;toggle&quot;</td>
                    <td className="px-4 py-3 text-neutral-600">&quot;once&quot;</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Click behavior: decrypt once or toggle encrypt/decrypt</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">className</td>
                    <td className="px-4 py-3 text-neutral-500">string</td>
                    <td className="px-4 py-3 text-neutral-600">&quot;&quot;</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Class applied to each revealed character</td>
                  </tr>
                  <tr className="border-b border-white/[0.04]">
                    <td className="px-4 py-3 text-white">encryptedClassName</td>
                    <td className="px-4 py-3 text-neutral-500">string</td>
                    <td className="px-4 py-3 text-neutral-600">&quot;&quot;</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Class applied to each scrambled/encrypted character</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-white">parentClassName</td>
                    <td className="px-4 py-3 text-neutral-500">string</td>
                    <td className="px-4 py-3 text-neutral-600">&quot;&quot;</td>
                    <td className="px-4 py-3 text-neutral-400 font-sans">Class applied to the outer wrapper span</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
