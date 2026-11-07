/**
 * PROJECTS — each object becomes a card and a details view.
 *
 *  - `github` / `demo`: paste the full URL. Leave '' and the button
 *    shows as "coming soon" instead of a broken link.
 *  - `status` is shown as a badge. Keep it honest: update it as you go.
 *  - Only describe what is actually built or in progress.
 */
export type ProjectStatus = 'In development' | 'Exploring' | 'Learning project' | 'Completed'

export type Project = {
  slug: string
  title: string
  tagline: string
  summary: string
  status: ProjectStatus
  icon: 'leaf' | 'heart' | 'ship'
  accent: 'violet' | 'blue' | 'cyan'
  tech: string[]
  /** Paragraphs shown in the details view. */
  overview: string[]
  /** What you are doing now / what the project covers. */
  focus: string[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    slug: 'krishidrishti',
    title: 'KrishiDrishti',
    tagline: 'AI-powered agricultural intelligence',
    summary:
      'A platform that helps farmers make better crop decisions using satellite imagery and machine learning.',
    status: 'In development',
    icon: 'leaf',
    accent: 'violet',
    tech: ['Python', 'Machine Learning', 'Satellite Imagery'],
    overview: [
      'KrishiDrishti is an agricultural intelligence platform that aims to help farmers make better crop decisions. It combines satellite imagery with machine learning to give farmers insight into their fields.',
    ],
    focus: [
      'Building a crop classification module',
      'Starting with Mysore, Karnataka as the first region',
    ],
    github: '', // TODO: repo URL
    demo: '',
  },
  {
    slug: 'predictwell',
    title: 'PredictWell',
    tagline: 'Machine learning for health-risk prediction',
    summary:
      'A healthcare prediction platform exploring how machine learning can predict health risks such as diabetes and heart disease.',
    status: 'Exploring',
    icon: 'heart',
    accent: 'blue',
    tech: ['Python', 'Machine Learning'], // TODO: add the libraries you use
    overview: [
      'PredictWell explores how machine learning can predict health risks early. The first targets are diabetes and heart disease.',
    ],
    focus: ['Diabetes risk prediction', 'Heart disease risk prediction'],
    github: '', // TODO: repo URL
    demo: '',
  },
  {
    slug: 'titanic-survival',
    title: 'Titanic Survival Prediction',
    tagline: 'End-to-end classification workflow',
    summary:
      'Predicts passenger survival using data preprocessing, feature engineering and classification models.',
    status: 'Learning project',
    icon: 'ship',
    accent: 'cyan',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    overview: [
      'A machine learning project that predicts whether a Titanic passenger survived. It walks through the full workflow on a real dataset, from raw data to trained classifiers.',
    ],
    focus: ['Data preprocessing', 'Feature engineering', 'Classification models'],
    github: '', // TODO: repo URL
    demo: '',
  },
]
