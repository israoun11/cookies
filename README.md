# Cookies Factory — Concept Website

A premium, interactive concept website built for **Cookies Factory**
(@cookiesfactory_tn) — a real 3D hero, scroll storytelling, and an
interactive menu of all 33 cookies from the real in-store menu.

Built with React + Vite, Tailwind CSS, React Three Fiber / Three.js,
and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/         All UI sections (Hero, CookieShowcase, ShopSection...)
  components/3d/       React Three Fiber scene, cookie model, floating crumbs
  data/cookies.js      Full 33-item menu + the 4 signature cookies (real photos)
  data/content.js      Shop info, locations, testimonials, process steps
public/assets/          Real logo + cookie/lifestyle photography, cropped from
                        the shop's own Instagram assets
```

## What to edit before launch

Everything editable lives in two files:

- **`src/data/cookies.js`** — menu items, prices, the 4 signature cookies
  and their descriptions.
- **`src/data/content.js`** — shop name, tagline, both locations
  (address / phone / **opening hours — currently a placeholder, please
  fill in**), Instagram handle, and sample testimonials (replace with
  real customer reviews when you have them).

### Known placeholders (intentionally left editable, not invented)

- Opening hours for both locations
- Full street address for the Jardins de Carthage location
- Testimonials/reviews — sample copy only, swap for real quotes

## Notes on the 3D scene

The floating cookie in the hero and the "Chocolate in every angle"
section is built entirely from primitive Three.js geometry (no external
`.glb`/`.obj` model needed), so there's nothing extra to download —
it just works out of the box. It's lighter on mobile automatically
(fewer floating crumbs, capped pixel ratio) and respects
`prefers-reduced-motion`.

## Adding real product photography

Four cookies already use real photos cropped from the shop's Instagram
(Red Velvet, Cheesecake Citron, Bueno Home Made, Forêt Noire). The
remaining 29 menu items use a small generative cookie icon
(`src/components/CookieIcon.jsx`) as a placeholder — drop real photos
into `public/assets/` and reference them in `cookies.js` to swap them
in individually.
