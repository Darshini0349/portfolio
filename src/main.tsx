import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { profile } from './data/profile'

// Reminder in the dev console only: lists details still left to fill in.
if (import.meta.env.DEV) {
  const todo = [
    !profile.links.linkedin && 'profile.links.linkedin',
    !profile.links.leetcode && 'profile.links.leetcode',
    profile.email.includes('example.com') && 'profile.email',
  ].filter(Boolean)
  if (todo.length) console.info('[portfolio] Still to fill in (src/data/profile.ts):', todo.join(', '))
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
