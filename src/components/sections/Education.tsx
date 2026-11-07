import { GraduationCap } from 'lucide-react'
import { education } from '../../data/profile'
import { Badge, GlassCard, Reveal, Section } from '../ui'

export function Education() {
  return (
    <Section id="education" eyebrow="05 · Education" title="Where I'm learning.">
      <div className="grid gap-5">
        {education.map((e, i) => (
          <Reveal key={e.institution + e.degree} delay={i * 0.08}>
            <GlassCard className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-blue-500/25 text-violet-100">
                <GraduationCap className="h-7 w-7" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-white">{e.degree}</h3>
                  {e.current && <Badge tone="green">Current</Badge>}
                </div>
                <p className="mt-1 text-zinc-300">{e.institution}</p>
                {e.details && <p className="mt-3 text-sm text-zinc-400">{e.details}</p>}
              </div>
              {e.period && <p className="font-mono text-sm text-zinc-500">{e.period}</p>}
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
