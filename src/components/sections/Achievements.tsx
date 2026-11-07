import { ArrowUpRight, Award, Briefcase, Plus, Sparkles, Trophy } from 'lucide-react'
import { achievements } from '../../data/achievements'
import { GlassCard, Reveal, Section } from '../ui'

const icons = { award: Award, trophy: Trophy, briefcase: Briefcase, sparkles: Sparkles }

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="06 · Achievements & learning" title="Milestones along the way." intro="Certifications, hackathons, internships and technical milestones, added as they happen.">
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((cat, i) => {
          const Icon = icons[cat.icon]
          return (
            <Reveal key={cat.title} delay={i * 0.06} className="h-full">
              <GlassCard className="h-full p-6">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-violet-300" aria-hidden="true" />
                  <h3 className="font-display font-semibold text-white">{cat.title}</h3>
                </div>
                {cat.items.length === 0 ? (
                  <div className="mt-5 flex items-center gap-3 rounded-xl border border-dashed border-white/10 px-4 py-5 text-sm text-zinc-500">
                    <Plus className="h-4 w-4 shrink-0" aria-hidden="true" /> {cat.emptyText}
                  </div>
                ) : (
                  <ul className="mt-5 space-y-3">
                    {cat.items.map((a) => (
                      <li key={a.title} className="rounded-xl border border-line bg-white/[0.02] px-4 py-3">
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-medium text-zinc-100">{a.title}</p>
                          {a.date && <span className="shrink-0 font-mono text-xs text-zinc-500">{a.date}</span>}
                        </div>
                        {a.issuer && <p className="text-sm text-zinc-400">{a.issuer}</p>}
                        {a.description && <p className="mt-1 text-sm text-zinc-400">{a.description}</p>}
                        {a.url && (
                          <a href={a.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm text-violet-300 hover:text-violet-200">
                            View <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </GlassCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
