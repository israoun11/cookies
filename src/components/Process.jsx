import { motion } from 'framer-motion'
import { process } from '../data/content.js'

export default function Process() {
  return (
    <section className="relative bg-cream py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <span className="font-body text-xs tracking-[0.2em] uppercase text-rose-deep font-semibold">
          How it's made
        </span>
        <h2 className="font-display font-semibold text-4xl md:text-5xl mt-3 text-cocoa mb-16 max-w-xl">
          From butter to bite, in four steps
        </h2>

        <div className="grid md:grid-cols-4 gap-10 md:gap-6">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t-2 border-cocoa/10 pt-6"
            >
              <span className="font-display font-semibold text-5xl text-rose">{p.step}</span>
              <h3 className="font-display font-semibold text-2xl text-cocoa mt-3">{p.title}</h3>
              <p className="font-body text-cocoa/65 text-sm mt-2">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
