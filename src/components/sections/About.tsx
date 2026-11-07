import { BookOpen, Search, Target } from 'lucide-react'
import { about } from '../../data/profile'
import { Badge, GlassCard, Reveal, Section } from '../ui'

const traitIcons = [Search, BookOpen, Target]

export function About() {
  return (
    <Section id="about" eyebrow="01 · About me" title="Curious by nature, builder by choice.">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-zinc-400">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <div className="flex flex-wrap gap-2 pt-2">
            {about.interests.map((i) => <Badge key={i} tone="violet">{i}</Badge>)}
          </div>
        </Reveal>
        <div className="grid gap-4">
          {about.traits.map((t, i) => {
            const Icon = traitIcons[i % traitIcons.length]
            return (
              <Reveal key={t.title} delay={i * 0.08}>
                <GlassCard className="flex gap-4 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-200">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-white">{t.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{t.text}</p>
                  </div>
                </GlassCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
