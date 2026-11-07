import { Brain, Code2, Globe, Wrench } from 'lucide-react'
import { skills } from '../../data/skills'
import { GlassCard, Reveal, Section } from '../ui'

const iconMap = { code: Code2, brain: Brain, globe: Globe, wrench: Wrench }

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 · Technical skills" title="Tools I work with." intro="Only technologies I've actually used. This list grows with every project.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((cat, i) => {
          const Icon = iconMap[cat.icon]
          return (
            <Reveal key={cat.title} delay={i * 0.06}>
              <GlassCard className="group h-full p-6 hover:bg-white/[0.05]">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/25 to-blue-500/25 text-violet-100 transition group-hover:shadow-[0_0_24px_-4px_rgba(139,92,246,0.7)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display font-semibold text-white">{cat.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <li key={s} className="rounded-lg border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300 transition hover:border-violet-400/40 hover:text-white">
                      {s}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
