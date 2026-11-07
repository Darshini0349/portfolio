import { HeartPulse, Leaf, Ship } from 'lucide-react'
import type { Project } from '../data/projects'

export const projectIcons = { leaf: Leaf, heart: HeartPulse, ship: Ship }

export const accents: Record<Project['accent'], { glow: string; icon: string; ring: string }> = {
  violet: { glow: 'from-violet-500/25', icon: 'text-violet-200 bg-violet-500/15', ring: 'group-hover:border-violet-400/40' },
  blue: { glow: 'from-blue-500/25', icon: 'text-blue-200 bg-blue-500/15', ring: 'group-hover:border-blue-400/40' },
  cyan: { glow: 'from-cyan-500/20', icon: 'text-cyan-200 bg-cyan-500/15', ring: 'group-hover:border-cyan-400/40' },
}

export const statusTone = (s: Project['status']) =>
  s === 'Completed' ? 'green' : s === 'In development' ? 'violet' : s === 'Exploring' ? 'amber' : 'neutral'
