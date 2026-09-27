import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { shopInfo } from '../data/content.js'

const items = [
  { src: '/assets/gallery_pistachio.png', label: 'Full Pistachio', span: 'row-span-2' },
  { src: '/assets/cookie_foret_noire.png', label: 'Forêt Noire', span: '' },
  { src: '/assets/gallery_choco_swirl.png', label: 'Pistache Nutella', span: '' },
  { src: '/assets/gallery_breakfast_flatlay.png', label: 'Morning ritual', span: 'row-span-2' },
  { src: '/assets/cookie_redvelvet.png', label: 'Red Velvet', span: '' },
  { src: '/assets/gallery_product_flatlay.png', label: 'Merch drop', span: '' },
]

export default function Gallery() {
  return (
    <section className="relative bg-cream py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="font-body text-xs tracking-[0.2em] uppercase text-rose-deep font-semibold">
              From the feed
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl mt-3 text-cocoa">
              {shopInfo.instagram}
            </h2>
          </div>
          <a
            href={shopInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor=""
            className="inline-flex items-center gap-2 font-semibold text-sm text-cocoa hover:text-rose-deep"
          >
            <Instagram size={16} /> Follow along
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[160px] md:auto-rows-[200px] gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-body text-cream text-sm font-semibold">{it.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
