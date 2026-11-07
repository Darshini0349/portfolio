import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { useCallback, useState } from 'react'
import { projects, type Project } from '../../data/projects'
import { ProjectModal } from '../ProjectModal'
import { accents, projectIcons, statusTone } from '../projectMeta'
import { Badge, ButtonLink, Reveal, Section } from '../ui'
import { GithubIcon } from '../ui/BrandIcons'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <Section id="projects" eyebrow="03 · Featured projects" title="What I'm building." intro="Real projects, labelled honestly with where each one stands today.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const Icon = projectIcons[p.icon]
          const a = accents[p.accent]
          return (
            <Reveal key={p.slug} delay={i * 0.08} className="h-full">
              <article className={`group glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${a.ring}`}>
                <div className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${a.glow} to-transparent opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} aria-hidden="true" />
                <div className="relative flex items-start justify-between gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl ${a.icon}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <Badge tone={statusTone(p.status)}>{p.status}</Badge>
                </div>

                <h3 className="relative mt-6 font-display text-xl font-semibold text-white">{p.title}</h3>
                <p className="relative mt-1 text-sm text-violet-200/70">{p.tagline}</p>
                <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-zinc-400">{p.summary}</p>

                <ul className="relative mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[11px] text-zinc-300">{t}</li>
                  ))}
                </ul>

                <div className="relative mt-6 flex flex-wrap items-center gap-2 border-t border-line pt-5">
                  <button
                    type="button"
                    onClick={() => setSelected(p)}
                    className="inline-flex items-center gap-1.5 rounded-lg px-1 text-sm font-medium text-white hover:text-violet-200"
                    aria-label={`View details for ${p.title}`}
                  >
                    View details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                  <div className="ml-auto flex gap-2">
                    <ButtonLink href={p.github} variant="ghost" className="!px-3 !py-2" aria-label={`${p.title} source code on GitHub`}>
                      <GithubIcon />
                    </ButtonLink>
                    <ButtonLink href={p.demo} variant="ghost" className="!px-3 !py-2" aria-label={`${p.title} live demo`}>
                      <ExternalLink className="h-4 w-4" />
                    </ButtonLink>
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
      <ProjectModal project={selected} onClose={close} />
    </Section>
  )
}
