// Central, editable content file. Anything not explicitly provided by the
// shop is left as an obvious placeholder rather than invented.

export const shopInfo = {
  name: 'Cookies Factory',
  category: 'Bakery',
  tagline: 'Best cookies in town',
  description: 'Pure beurre… sucre brun. Vos papilles n’en reviendront pas.',
  instagram: '@cookiesfactory_tn',
  instagramUrl: 'https://instagram.com/cookiesfactory_tn',
  locations: [
    {
      name: 'Menzah 5',
      address: '15 Bis, Rue Mouawiya Ibn Abi Sofien', // from in-store signage
      phone: '+216 51 315 845',
      hours: 'Hours — add your current opening hours here', // not provided, left editable
      mapsQuery: 'Cookies Factory Menzah 5 Tunis',
    },
    {
      name: 'Jardins de Carthage',
      address: 'Residence California', // partial, seen on packaging — confirm full address
      phone: '+216 98 640 345',
      hours: 'Hours — add your current opening hours here',
      mapsQuery: 'Cookies Factory Jardins de Carthage Tunis',
    },
  ],
}

// Sample/placeholder testimonials — replace with real reviews when available.
export const testimonials = [
  {
    quote:
      'Sample review — replace with a real customer quote once you have one on hand.',
    name: 'Isra',
    role: 'Menzah 5',
  },
  {
    quote:
      'Sample review — the Forêt Noire in particular deserves its own fan club.',
    name: 'Salma',
    role: 'Jardins de Carthage',
  },
  {
    quote:
      'Sample review — swap this block for whatever your customers actually say.',
    name: 'Zaineb',
    role: 'Menzah 5',
  },
]

export const process = [
  {
    step: '01',
    title: 'Mix',
    text: 'Pure butter and brown sugar, creamed slow, the way it should be.',
  },
  {
    step: '02',
    title: 'Shape',
    text: 'Portioned and loaded by hand — never a shortcut, never a machine.',
  },
  {
    step: '03',
    title: 'Bake',
    text: 'Golden at the edge, soft in the middle. Timing is everything.',
  },
  {
    step: '04',
    title: 'Enjoy',
    text: 'Best within the hour. We won’t judge if it doesn’t last that long.',
  },
]
