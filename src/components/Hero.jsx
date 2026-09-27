import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import CookieScene from './3d/CookieScene.jsx'
import { shopInfo } from '../data/content.js'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-cream flex flex-col justify-between pt-28 pb-10"
    >
      {/* 3D cookie, positioned right on desktop, behind text on mobile */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 md:inset-y-0 md:right-[-6%] md:left-auto md:w-[60%] opacity-90 pointer-events-none"
      >
        <CookieScene />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 px-6 md:px-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <img
            src="/assets/logo_circle.png"
            alt={`${shopInfo.name} logo`}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-lg"
          />
          <span className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-rose-deep font-semibold">
            {shopInfo.category} &middot; {shopInfo.tagline}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="font-display font-semibold leading-[0.88] text-cocoa select-none"
          style={{ fontSize: 'clamp(3.2rem, 12vw, 9.5rem)' }}
        >
          Cookies
          <br />
          <span className="text-outline">Factory</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-md font-body text-cocoa/80 text-base md:text-lg"
        >
          {shopInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#cookies"
            data-cursor="VIEW"
            className="rounded-full bg-cocoa text-cream px-7 py-3.5 font-semibold text-sm hover:bg-rose-deep transition-colors"
          >
            Explore the cookies
          </a>
          <a
            href="#shop"
            data-cursor=""
            className="rounded-full border border-cocoa/30 px-7 py-3.5 font-semibold text-sm text-cocoa hover:border-cocoa transition-colors"
          >
            Visit us
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="relative z-10 mx-auto flex flex-col items-center text-cocoa/50 text-xs tracking-[0.25em] uppercase"
      >
        Scroll
        <ArrowDown className="mt-2 animate-bounce" size={16} />
      </motion.div>
    </section>
  )
}
