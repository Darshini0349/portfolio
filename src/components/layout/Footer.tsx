import { Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from '../ui/BrandIcons'

export function Footer() {
  const socials = [
    { label: 'GitHub', href: profile.links.github, icon: <GithubIcon /> },
    { label: 'LinkedIn', href: profile.links.linkedin, icon: <LinkedinIcon /> },
    { label: 'LeetCode', href: profile.links.leetcode, icon: <LeetcodeIcon /> },
    { label: 'Email', href: `mailto:${profile.email}`, icon: <Mail className="h-4 w-4" /> },
  ].filter((s) => s.href)

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-zinc-500">{profile.role}</p>
        </div>
        <ul className="flex items-center gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="glass grid h-10 w-10 place-items-center rounded-xl text-zinc-400 transition hover:-translate-y-0.5 hover:text-white"
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-zinc-500">© {new Date().getFullYear()} {profile.name} All rights reserved.</p>
      </div>
    </footer>
  )
}
