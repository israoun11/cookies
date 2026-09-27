import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { signatureCookies, fullMenu } from '../data/cookies.js'
import CookieIcon from './CookieIcon.jsx'

export default function CookieShowcase() {
  const [active, setActive] = useState(signatureCookies[0].id)
  const activeCookie = signatureCookies.find((c) => c.id === active)
  const [showFullMenu, setShowFullMenu] = useState(false)

  return (
    <section id="cookies" className="relative bg-cocoa text-cream py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="font-body text-xs tracking-[0.2em] uppercase text-caramel font-semibold">
              Signature cookies
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-6xl mt-3">
              Four you have to try
            </h2>
          </div>
          <button
            onClick={() => setShowFullMenu((v) => !v)}
            data-cursor=""
            className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold hover:border-cream transition-colors"
          >
            {showFullMenu ? 'Hide full menu' : 'See full menu (33)'}
          </button>
        </div>

        {/* Desktop interactive showcase */}
        <div className="hidden md:grid grid-cols-12 gap-10 items-start">
          <div className="col-span-5 flex flex-col gap-3">
            {signatureCookies.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                data-cursor="VIEW"
                className={`text-left rounded-2xl px-6 py-5 transition-all border ${
                  active === c.id
                    ? 'bg-cream text-cocoa border-cream'
                    : 'border-cream/20 hover:border-cream/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold text-2xl">{c.name}</span>
                  <span className="font-body text-sm font-semibold">{c.price} DT</span>
                </div>
                <p
                  className={`mt-1 font-body text-sm ${
                    active === c.id ? 'text-cocoa/70' : 'text-cream/60'
                  }`}
                >
                  {c.tagline}
                </p>
              </button>
            ))}
          </div>

          <div className="col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCookie.id}
                initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="rounded-[2rem] overflow-hidden relative aspect-[4/3]"
                style={{ background: activeCookie.tint }}
              >
                <img
                  src={activeCookie.image}
                  alt={activeCookie.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-body text-cream/90 max-w-md">{activeCookie.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile swipeable strip */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6">
          {signatureCookies.map((c) => (
            <div
              key={c.id}
              className="snap-center shrink-0 w-[80vw] rounded-3xl overflow-hidden relative aspect-[4/5]"
              style={{ background: c.tint }}
            >
              <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold text-2xl text-cream">{c.name}</span>
                  <span className="font-body text-sm font-semibold text-cream">{c.price} DT</span>
                </div>
                <p className="mt-1 font-body text-sm text-cream/80">{c.tagline}</p>
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {showFullMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-1 border-t border-cream/15 pt-10">
                {fullMenu.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 py-3 border-b border-cream/10"
                  >
                    <CookieIcon name={item.name} size={36} className="shrink-0" />
                    <span className="font-body flex-1 text-sm">{item.name}</span>
                    <span className="font-body text-sm text-caramel font-semibold">
                      {item.price} DT
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
