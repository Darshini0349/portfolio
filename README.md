# Darshini N. — Portfolio

Personal portfolio built with **React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide React**.

## Run it locally (Windows Command Prompt)

```cmd
cd darshini-portfolio
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload          |
| `npm run build`   | Type-check and build to `dist/`               |
| `npm run preview` | Serve the built `dist/` folder locally        |

## Updating your content: edit `src/data/` only

You never need to touch the components to update the site.

| File                         | What's in it                                                   |
| ---------------------------- | -------------------------------------------------------------- |
| `src/data/profile.ts`        | Name, role, intro, email, GitHub / LinkedIn / LeetCode, About text, Education |
| `src/data/skills.ts`         | Skill categories and items                                     |
| `src/data/projects.ts`       | Project cards and the details view (GitHub and demo links)     |
| `src/data/dsa.ts`            | DSA intro, topics (and their status), problem-solving approach |
| `src/data/achievements.ts`   | Certifications, hackathons, internships, technical achievements |
| `public/resume.pdf`          | **Placeholder.** Replace with your real resume, keeping the same file name |

**Placeholders still to fill in** (search the project for `TODO`):
- `profile.email`, `profile.links.linkedin`, `profile.links.leetcode`
- `education[0].degree` (full degree name) and `period`
- `github` (and `demo`, once one exists) for each project
- `dsa.topics`: make sure it lists what you've actually studied
- `public/resume.pdf`

Any link left as `''` shows a greyed-out **"soon"** button instead of a broken link. Add the URL and the button turns on.

### Adding a project
Copy one of the objects in `src/data/projects.ts` and change the fields. `status` can be
`'In development' | 'Exploring' | 'Learning project' | 'Completed'`.

### Adding an achievement
```ts
// src/data/achievements.ts → inside the right category's items: []
{ title: 'Certificate name', issuer: 'Issuer', date: '2026', url: 'https://...' }
```

## Contact form
The form validates name, email and message. Since there's no backend, a valid submit opens the
visitor's email app with the message filled in. To have messages delivered straight to your inbox,
sign up for a free form service (Formspree, Web3Forms or EmailJS) and replace the
`window.location.href = mailto:...` line in `src/components/sections/Contact.tsx` with a `fetch` to that service.

## Deploying for free
- **Vercel / Netlify:** import the GitHub repo. Build command `npm run build`, output folder `dist`.
- **GitHub Pages:** run `npm run build` and publish the `dist/` folder. `vite.config.ts` uses `base: './'`, so it works from a sub-path.

After deploying, add your live URL as `<meta property="og:url">` and `<link rel="canonical">` in `index.html`.

## Folder structure
```
src/
├─ data/                 ← your content (edit these)
├─ components/
│  ├─ ui/                ← Button, ButtonLink, Section, GlassCard, Badge, Reveal, brand icons
│  ├─ layout/            ← Navbar (with mobile menu), Footer
│  ├─ sections/          ← Hero, About, Skills, Projects, Dsa, Education, Achievements, Contact
│  ├─ NeuralCanvas.tsx   ← animated hero visual (pure canvas)
│  ├─ ProjectModal.tsx   ← project details view
│  └─ projectMeta.ts
├─ hooks/useActiveSection.ts
├─ lib/validate.ts       ← contact form validation
├─ App.tsx, main.tsx, index.css
```

## Accessibility and performance notes
- Skip-to-content link, semantic landmarks, labelled form fields with `aria-invalid` and error messages
- The project modal traps Escape and returns focus to where it was opened from
- Respects `prefers-reduced-motion` (the canvas freezes and reveal animations are skipped)
- The hero canvas pauses when it's off-screen
