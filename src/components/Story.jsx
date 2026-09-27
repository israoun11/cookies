import { motion } from 'framer-motion'
import { shopInfo } from '../data/content.js'

export default function Story() {
  return (
    <section id="story" className="relative bg-cream py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="md:col-span-5 md:col-start-1 order-2 md:order-1"
        >
          <span className="font-body text-xs tracking-[0.2em] uppercase text-rose-deep font-semibold">
            The idea
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[1.05] mt-4 text-cocoa">
            {shopInfo.description}
          </h2>
          <p className="mt-6 font-body text-cocoa/70 max-w-sm">
            Every batch at {shopInfo.name} starts the same way — real butter,
            brown sugar, and no shortcuts. It's a small menu built around one
            obsession: getting the texture exactly right.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="md:col-span-6 md:col-start-7 order-1 md:order-2"
        >
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[2rem] overflow-hidden shadow-2xl rotate-[-2deg]">
            <img
              src="/assets/gallery_breakfast_flatlay.png"
              alt="A Cookies Factory cookie plated with coffee"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
