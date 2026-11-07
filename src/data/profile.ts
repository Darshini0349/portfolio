/**
 * ─────────────────────────────────────────────────────────────
 *  PROFILE — your name, links and intro text.
 *  Anything left as an empty string ('') shows as "coming soon"
 *  on the site instead of a broken link.
 * ─────────────────────────────────────────────────────────────
 */
export const profile = {
  name: 'Darshini N.',
  firstName: 'Darshini',
  role: 'Aspiring AI Engineer | Software Developer',
  location: 'Mysore, Karnataka, India',
  headline: 'Building Intelligent Solutions for Real-World Problems.',
  intro:
    "I'm a Computer Science student who loves turning ideas into working software. I'm learning AI, machine learning and software engineering by building things that solve practical problems, from crop intelligence for farmers to health-risk prediction.",

  // Path to your resume inside /public. Replace public/resume.pdf with your own file.
  resumeUrl: './resume.pdf',

  links: {
    github: 'https://github.com/Darshini0349',
    linkedin: '', // TODO: e.g. 'https://www.linkedin.com/in/your-handle'
    leetcode: '', // TODO: e.g. 'https://leetcode.com/u/your-handle'
  },

  // TODO: replace with the email address you want people to contact you on.
  email: 'your.email@example.com',
}

export const about = {
  paragraphs: [
    "I'm a Computer Science student at SJC College, Mysore, focused on AI engineering and machine learning. I like understanding how things work under the hood, which is why I spend as much time on data structures and algorithms as I do on models.",
    'I also build full-stack, because a model only matters once people can use it. My goal is to build products that make a real difference, and I treat every project as a chance to learn something new.',
  ],
  interests: [
    'AI Engineering',
    'Machine Learning',
    'Data Structures & Algorithms',
    'Full-Stack Development',
  ],
  traits: [
    { title: 'Curious', text: 'I ask "why does this work?" until I can explain it simply.' },
    { title: 'Always learning', text: 'I pick up new tools by building real projects with them.' },
    { title: 'Impact-driven', text: 'I choose problems where good software helps real people.' },
  ],
}

/** Education. Add more objects to the array for additional entries. */
export const education = [
  {
    degree: 'Computer Science', // TODO: full degree name, e.g. "B.Sc. in Computer Science"
    institution: 'SJC College, Mysore',
    period: '', // TODO: e.g. '2024 – 2027'
    details: '', // TODO: optional, e.g. relevant coursework
    current: true,
  },
]
