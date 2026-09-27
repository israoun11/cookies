import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import Loader from './components/Loader.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import CookieShowcase from './components/CookieShowcase.jsx'
import MoodSelector from './components/MoodSelector.jsx'
import CookieMoment from './components/CookieMoment.jsx'
import Process from './components/Process.jsx'
import ShopSection from './components/ShopSection.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [ready, setReady] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader done={ready} />
      <CustomCursor />

      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-caramel origin-left z-[60]"
      />

      <Navbar />

      <main>
        <Hero />
        <Story />
        <CookieShowcase />
        <MoodSelector />
        <CookieMoment />
        <Process />
        <Gallery />
        <ShopSection />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
