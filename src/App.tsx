import { MotionConfig } from 'framer-motion'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Achievements } from './components/sections/Achievements'
import { Contact } from './components/sections/Contact'
import { Dsa } from './components/sections/Dsa'
import { Education } from './components/sections/Education'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Dsa />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
