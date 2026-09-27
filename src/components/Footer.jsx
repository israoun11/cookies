import { Instagram, Facebook } from 'lucide-react'
import { shopInfo } from '../data/content.js'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Cookies', href: '#cookies' },
  { label: 'Story', href: '#story' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-cocoa text-cream/70 pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-10 border-b border-cream/10">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo_circle.png"
              alt={`${shopInfo.name} logo`}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-display font-semibold text-xl text-cream">{shopInfo.name}</p>
              <p className="font-body text-xs text-cream/50">{shopInfo.tagline}</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 font-body text-sm">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-cream transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <a
              href={shopInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-cream transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-cream transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between gap-2 font-body text-xs text-cream/40">
          <p>&copy; {new Date().getFullYear()} {shopInfo.name}. All rights reserved.</p>
          <p>Concept site — built to show what's possible.</p>
        </div>
      </div>
    </footer>
  )
}
