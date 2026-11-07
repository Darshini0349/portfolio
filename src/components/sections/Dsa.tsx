import { CheckCircle2, CircleDot, Circle, Terminal } from 'lucide-react'
import { dsa } from '../../data/dsa'
import { profile } from '../../data/profile'
import { ButtonLink, GlassCard, Reveal, Section } from '../ui'
import { LeetcodeIcon } from '../ui/BrandIcons'

const statusMeta = {
  comfortable: { label: 'Comfortable', Icon: CheckCircle2, cls: 'text-emerald-300' },
  practicing: { label: 'Practising', Icon: CircleDot, cls: 'text-violet-300' },
  next: { label: 'Up next', Icon: Circle, cls: 'text-zinc-500' },
} as const

export function Dsa() {
  return (
    <Section id="dsa" eyebrow="04 · DSA & problem solving" title="Thinking in algorithms." intro={dsa.intro}>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <GlassCard className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-white">Topics</h3>
              <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
                {Object.values(statusMeta).map(({ label, Icon, cls }) => (
                  <span key={label} className="flex items-center gap-1.5"><Icon className={`h-3.5 w-3.5 ${cls}`} aria-hidden="true" />{label}</span>
                ))}
              </div>
            </div>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {dsa.topics.map((t) => {
                const { Icon, cls, label } = statusMeta[t.status]
                return (
                  <li key={t.name} className="flex items-center justify-between rounded-xl border border-line bg-white/[0.02] px-4 py-3 transition hover:bg-white/[0.05]">
                    <span className="text-zinc-200">{t.name}</span>
                    <Icon className={`h-4 w-4 ${cls}`} aria-label={label} />
                  </li>
                )
              })}
            </ul>
          </GlassCard>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.08}>
            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Terminal className="h-5 w-5 text-violet-300" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-white">How I approach problems</h3>
              </div>
              <ol className="mt-5 space-y-3">
                {dsa.approach.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-zinc-300">
                    <span className="font-mono text-violet-300/80">{String(i + 1).padStart(2, '0')}</span>{step}
                  </li>
                ))}
              </ol>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.14}>
            <GlassCard className="flex flex-col items-start gap-4 p-6 sm:p-8">
              <p className="text-sm text-zinc-400">Practising in <span className="font-mono text-zinc-200">{dsa.language}</span>. Follow my progress:</p>
              <ButtonLink href={profile.links.leetcode}><LeetcodeIcon /> LeetCode profile</ButtonLink>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
