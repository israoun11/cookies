import { motion } from 'framer-motion'
import CookieScene from './3d/CookieScene.jsx'

export default function CookieMoment() {
  return (
    <section className="relative bg-cream py-10 md:py-16 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative rounded-[2.5rem] bg-cocoa overflow-hidden">
        <div className="relative h-[70vh] md:h-[85vh]">
          <CookieScene spin={0.25} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-body text-xs tracking-[0.25em] uppercase text-caramel font-semibold"
            >
              Baked fresh, every single day
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-semibold text-cream leading-[0.9] mt-4"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
            >
              Chocolate in
              <br />
              every angle
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  )
}
