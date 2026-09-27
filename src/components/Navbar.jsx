import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { shopInfo } from '../data/content.js'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Cookies', href: '#cookies' },
  { label: 'Story', href: '#story' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 bg-cream/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3" data-cursor="">
            <img
              src="/assets/logo_circle.png"
              alt={`${shopInfo.name} logo`}
              className={`rounded-full object-cover transition-all duration-300 ${
                scrolled ? 'w-9 h-9' : 'w-11 h-11'
              }`}
            />
            <span className="font-display font-semibold text-lg tracking-tight text-cocoa hidden sm:block">
              {shopInfo.name}
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-9 font-body text-sm font-medium text-cocoa">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="relative group" data-cursor="">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-rose-deep transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#shop"
            data-cursor="VISIT"
            className="hidden md:inline-block rounded-full bg-cocoa text-cream px-5 py-2.5 text-sm font-semibold hover:bg-rose-deep transition-colors"
          >
            Visit us
          </a>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden text-cocoa"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-cocoa text-cream flex flex-col items-center justify-center gap-8"
            initial={{ clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
