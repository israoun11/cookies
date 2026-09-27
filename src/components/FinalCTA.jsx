import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section id="contact" className="relative bg-rose overflow-hidden py-28 md:py-40 px-6 md:px-10">
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-display font-semibold text-[14vw] px-8 text-cream">
              COOKIES FACTORY
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-semibold text-cream leading-[0.95]"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
        >
          Your next favorite
          <br />
          cookie is waiting.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#cookies"
            data-cursor="VIEW"
            className="rounded-full bg-cocoa text-cream px-8 py-4 font-semibold text-sm hover:bg-cocoa-light transition-colors"
          >
            Explore the menu
          </a>
          <a
            href="#shop"
            data-cursor=""
            className="rounded-full border-2 border-cream px-8 py-4 font-semibold text-sm text-cream hover:bg-cream hover:text-rose-deep transition-colors"
          >
            Visit the shop
          </a>
        </motion.div>
      </div>
    </section>
  )
}
