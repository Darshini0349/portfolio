import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Project } from '../data/projects'
import { Badge, ButtonLink } from './ui'
import { GithubIcon } from './ui/BrandIcons'
import { accents, projectIcons, statusTone } from './projectMeta'

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const prev = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prev?.focus()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-line bg-ink-2 sm:rounded-3xl"
          >
            <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${accents[project.accent].glow} to-transparent`} aria-hidden="true" />
            <div className="relative p-6 sm:p-9">
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {(() => { const Icon = projectIcons[project.icon]; return (
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accents[project.accent].icon}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
              ) })()}

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <h3 id="project-modal-title" className="font-display text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
                <Badge tone={statusTone(project.status)}>{project.status}</Badge>
              </div>
              <p className="mt-1 text-zinc-400">{project.tagline}</p>

              <div className="mt-7 space-y-4 leading-relaxed text-zinc-300">
                {project.overview.map((p) => <p key={p}>{p}</p>)}
              </div>

              <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                {project.status === 'Completed' ? 'What it covers' : 'Current focus'}
              </h4>
              <ul className="mt-3 space-y-2">
                {project.focus.map((f) => (
                  <li key={f} className="flex gap-3 text-zinc-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-blue-400" />
                    {f}
                  </li>
                ))}
              </ul>

              <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">Tech</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => <Badge key={t}>{t}</Badge>)}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href={project.github} variant="ghost"><GithubIcon /> Source code</ButtonLink>
                <ButtonLink href={project.demo}><ExternalLink className="h-4 w-4" /> Live demo</ButtonLink>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
