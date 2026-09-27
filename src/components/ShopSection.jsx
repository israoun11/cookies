import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Instagram } from 'lucide-react'
import { shopInfo } from '../data/content.js'

export default function ShopSection() {
  return (
    <section id="shop" className="relative bg-blush py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="font-body text-xs tracking-[0.2em] uppercase text-rose-deep font-semibold">
              Come visit us
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-6xl mt-3 text-cocoa">
              Two spots, same craving
            </h2>
          </div>
          <a
            href={shopInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor=""
            className="inline-flex items-center gap-2 rounded-full bg-cocoa text-cream px-6 py-3 text-sm font-semibold hover:bg-rose-deep transition-colors"
          >
            <Instagram size={16} /> {shopInfo.instagram}
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {shopInfo.locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-cream rounded-3xl p-8 md:p-10 shadow-lg"
            >
              <h3 className="font-display font-semibold text-3xl text-cocoa">{loc.name}</h3>
              <ul className="mt-6 space-y-4 font-body text-sm text-cocoa/75">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-rose-deep shrink-0 mt-0.5" />
                  {loc.address}
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-rose-deep shrink-0 mt-0.5" />
                  <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="hover:text-cocoa">
                    {loc.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-rose-deep shrink-0 mt-0.5" />
                  {loc.hours}
                </li>
              </ul>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapsQuery)}`}
                target="_blank"
                rel="noreferrer"
                data-cursor=""
                className="mt-8 inline-block rounded-full border border-cocoa/30 px-6 py-2.5 text-sm font-semibold text-cocoa hover:border-cocoa transition-colors"
              >
                Get directions
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
