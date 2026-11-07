/**
 * ACHIEVEMENTS & LEARNING
 * Add real entries only. An empty `items` array shows an
 * "updates coming soon" placeholder for that category.
 *
 * Example entry:
 *   { title: 'Machine Learning Specialization', issuer: 'Coursera', date: '2026', url: 'https://...' }
 */
export type Achievement = { title: string; issuer?: string; date?: string; description?: string; url?: string }

export type AchievementCategory = {
  title: string
  icon: 'award' | 'trophy' | 'briefcase' | 'sparkles'
  emptyText: string
  items: Achievement[]
}

export const achievements: AchievementCategory[] = [
  { title: 'Certifications', icon: 'award', emptyText: 'Certifications will be added here.', items: [] },
  { title: 'Hackathons', icon: 'trophy', emptyText: 'Hackathon participation will be added here.', items: [] },
  { title: 'Internships', icon: 'briefcase', emptyText: 'Looking for my first internship.', items: [] },
  { title: 'Technical Achievements', icon: 'sparkles', emptyText: 'Milestones will be added here.', items: [] },
]
