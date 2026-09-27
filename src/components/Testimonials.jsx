import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/content.js'

export default function Testimonials() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative bg-cocoa text-cream py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <Quote className="mx-auto text-caramel" size={36} />
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-6"
          >
            <p className="font-display font-medium text-2xl md:text-4xl leading-snug">
              “{testimonials[i].quote}”
            </p>
            <p className="mt-6 font-body text-sm text-cream/60">
              {testimonials[i].name} &middot; {testimonials[i].role}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? 'w-8 bg-caramel' : 'w-1.5 bg-cream/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
