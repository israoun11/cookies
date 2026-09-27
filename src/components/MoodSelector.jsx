import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { moods, moodRecommendations } from '../data/cookies.js'
import CookieIcon from './CookieIcon.jsx'

export default function MoodSelector() {
  const [mood, setMood] = useState(null)
  const rec = mood ? moodRecommendations[mood] : null

  return (
    <section className="relative bg-blush py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-body text-xs tracking-[0.2em] uppercase text-rose-deep font-semibold">
          A little help
        </span>
        <h2 className="font-display font-semibold text-4xl md:text-5xl mt-3 text-cocoa">
          What's your mood today?
        </h2>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {moods.map((m) => (
            <button
              key={m.id}
              onClick={() => setMood(m.id)}
              data-cursor=""
              className={`rounded-2xl px-4 py-6 font-body font-semibold text-sm transition-all border-2 ${
                mood === m.id
                  ? 'bg-cocoa text-cream border-cocoa'
                  : 'bg-cream/60 text-cocoa border-transparent hover:border-rose'
              }`}
            >
              {m.label}
              <span className="block mt-1 text-xs font-normal opacity-70">{m.hint}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {rec && (
            <motion.div
              key={mood}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mt-12 inline-flex flex-col md:flex-row items-center gap-6 bg-cream rounded-3xl p-6 md:p-8 shadow-xl text-left"
            >
              {rec.image ? (
                <img
                  src={rec.image}
                  alt={rec.name}
                  className="w-28 h-28 rounded-full object-cover shadow-lg"
                />
              ) : (
                <CookieIcon name={rec.name} size={112} />
              )}
              <div>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-rose-deep font-semibold">
                  Try this one
                </span>
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-cocoa mt-1">
                  {rec.name}
                </h3>
                {rec.tagline && (
                  <p className="font-body text-cocoa/60 text-sm mt-1 max-w-xs">{rec.tagline}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
