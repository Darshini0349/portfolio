import { motion, useReducedMotion } from 'framer-motion'
import type { ComponentProps, ReactNode } from 'react'

/* ── Reveal: fades content in once when it scrolls into view ── */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── Section: consistent spacing + eyebrow + heading ── */
export function Section({
  id, eyebrow, title, intro, children,
}: { id: string; eyebrow: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-300/80">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-2xl text-zinc-400">{intro}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

/* ── GlassCard ── */
export function GlassCard({ className = '', children, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={`glass rounded-2xl transition-colors duration-300 hover:border-white/15 ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}

/* ── Badge ── */
export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'violet' | 'green' | 'amber' }) {
  const tones = {
    neutral: 'border-white/10 bg-white/[0.04] text-zinc-300',
    violet: 'border-violet-400/25 bg-violet-500/10 text-violet-200',
    green: 'border-emerald-400/25 bg-emerald-500/10 text-emerald-200',
    amber: 'border-amber-400/25 bg-amber-500/10 text-amber-200',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] ${tones[tone]}`}>
      {children}
    </span>
  )
}

/* ── Button / ButtonLink ── */
const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40'
const variants = {
  primary:
    'bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-[0_0_30px_-8px_rgba(139,92,246,0.7)] hover:shadow-[0_0_40px_-6px_rgba(139,92,246,0.9)] hover:-translate-y-0.5',
  ghost: 'glass text-zinc-100 hover:bg-white/[0.07] hover:-translate-y-0.5',
}
type Variant = keyof typeof variants

export function Button({ variant = 'primary', className = '', ...rest }: ComponentProps<'button'> & { variant?: Variant }) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...rest} />
}

/**
 * ButtonLink: renders a disabled "coming soon" pill if href is empty,
 * so unfinished links never break.
 */
export function ButtonLink({
  href, variant = 'primary', className = '', children, external, ...rest
}: ComponentProps<'a'> & { variant?: Variant; external?: boolean }) {
  if (!href) {
    return (
      <span aria-disabled="true" title="Coming soon" className={`${base} ${variants.ghost} cursor-not-allowed opacity-45 hover:translate-y-0 ${className}`}>
        {children}
        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">soon</span>
      </span>
    )
  }
  const ext = external ?? /^https?:/.test(href)
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
      {ext && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  )
}
