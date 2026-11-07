import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, MapPin, Send } from 'lucide-react'
import { profile } from '../../data/profile'
import { ButtonLink } from '../ui'
import { NeuralCanvas } from '../NeuralCanvas'

export function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="home" aria-label="Introduction" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      {/* background */}
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute top-40 -right-40 -z-10 h-[380px] w-[380px] rounded-full bg-blue-600/15 blur-[110px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div {...fade(0)} className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.role}
          </motion.div>

          <motion.p {...fade(0.08)} className="mt-7 font-display text-xl text-zinc-300 sm:text-2xl">
            Hi, I'm <span className="text-white">{profile.firstName}</span>.
          </motion.p>

          <motion.h1 {...fade(0.16)} className="mt-3 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building <span className="text-gradient">Intelligent Solutions</span> for Real-World Problems.
          </motion.h1>

          <motion.p {...fade(0.24)} className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div {...fade(0.32)} className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={profile.resumeUrl} variant="ghost" download external={false}>
              <Download className="h-4 w-4" /> Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              <Send className="h-4 w-4" /> Contact Me
            </ButtonLink>
          </motion.div>

          <motion.p {...fade(0.4)} className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
            <MapPin className="h-4 w-4" /> {profile.location}
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="glass relative aspect-[5/4] overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10" />
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-[11px] text-zinc-500">model.forward(input)</span>
            </div>
            <div className="absolute inset-x-0 top-10 bottom-10">
              <NeuralCanvas />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex justify-between border-t border-line px-4 py-2.5 font-mono text-[11px] text-zinc-500">
              <span>input</span><span>hidden</span><span>hidden</span><span>output</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
