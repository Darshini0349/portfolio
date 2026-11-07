/**
 * SKILLS — only list technologies you have actually worked with.
 * To add a skill, add a string to `items`. To add a category, add an object.
 * `icon` must be one of the keys in src/components/sections/Skills.tsx → iconMap.
 */
export type SkillCategory = {
  title: string
  icon: 'code' | 'brain' | 'globe' | 'wrench'
  items: string[]
}

export const skills: SkillCategory[] = [
  { title: 'Programming', icon: 'code', items: ['C++', 'Python', 'SQL'] },
  { title: 'AI / ML', icon: 'brain', items: ['NumPy', 'Pandas', 'Scikit-learn', 'Machine Learning'] },
  { title: 'Web Development', icon: 'globe', items: ['HTML', 'CSS', 'JavaScript', 'Flask'] },
  { title: 'Tools', icon: 'wrench', items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'MySQL'] },
]
