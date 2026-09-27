// Real menu data transcribed from the Cookies Factory Instagram menu.
// Prices are in Tunisian Dinar (DT). Edit freely — this is the single
// source of truth for every cookie shown on the site.

// The four "signature" cookies have real product photography.
// Everything else uses the generative 2D cookie icon (see CookieIcon.jsx)
// until real photos are supplied — no invented photography.
export const signatureCookies = [
  {
    id: 'red-velvet',
    name: 'Red Velvet',
    tagline: 'Deep cocoa dough, cream cheese swirl',
    description:
      'A rich red velvet base finished with a swirl of whipped cream-cheese frosting. Soft in the middle, just enough crackle on top.',
    price: 7.5,
    image: '/assets/cookie_redvelvet.png',
    mood: 'chocolate',
    tint: '#7A2233',
  },
  {
    id: 'cheesecake-citron',
    name: 'Cheesecake Citron',
    tagline: 'Lemon curd, whipped cheesecake cream',
    description:
      'A buttery base topped with tangy lemon curd and a cloud of cheesecake cream. Bright, citrusy, unexpected.',
    price: 8,
    image: '/assets/cookie_cheesecake_citron.png',
    mood: 'adventure',
    tint: '#C9A227',
  },
  {
    id: 'bueno-home-made',
    name: 'Bueno Home Made',
    tagline: 'Hazelnut cream, house-made Bueno filling',
    description:
      'Our take on the classic — a soft hazelnut cookie base with a generous pool of home-made Bueno-style cream.',
    price: 7.5,
    image: '/assets/cookie_bueno.png',
    mood: 'sweet-salty',
    tint: '#A9752F',
  },
  {
    id: 'foret-noire',
    name: 'Forêt Noire',
    tagline: 'Dark chocolate, cherry, cocoa dust',
    description:
      'A dark chocolate cookie crowned with whipped cream, a whole cherry and a dusting of cocoa. Black Forest, in cookie form.',
    price: 9,
    image: '/assets/cookie_foret_noire.png',
    mood: 'chocolate',
    tint: '#3B2419',
  },
]

// Full menu — every item and price from the in-store menu board.
export const fullMenu = [
  { name: 'Classic', price: 8 },
  { name: 'Original American Cookie', price: 8 },
  { name: 'Kounefa', price: 8.5 },
  { name: 'Banana', price: 8 },
  { name: 'Blacky', price: 8 },
  { name: 'Nutella Spéculoos', price: 7.5 },
  { name: 'Bounty', price: 7.5 },
  { name: 'Cheesecake Fruits Rouges', price: 8 },
  { name: 'Cheesecake Citron', price: 8, signature: 'cheesecake-citron' },
  { name: 'Raffaello', price: 9 },
  { name: 'Rocher', price: 8 },
  { name: 'Spéculoos', price: 8 },
  { name: 'Kinderella', price: 8 },
  { name: 'Snickers', price: 8 },
  { name: 'Red Velvet', price: 7.5, signature: 'red-velvet' },
  { name: 'Full Fruits Rouges', price: 7.5 },
  { name: 'Bueno Home Made', price: 7.5, signature: 'bueno-home-made' },
  { name: 'Full Pistachio', price: 10 },
  { name: 'Pistache Nutella', price: 9 },
  { name: 'Pistache Chocolat Blanc', price: 9 },
  { name: 'Pistachio Fruits Rouges', price: 9 },
  { name: 'Choco Noir Fruits Rouges', price: 7 },
  { name: 'Choco Blanc Fruits Rouges', price: 7 },
  { name: 'Nutella', price: 8 },
  { name: 'Citron', price: 8 },
  { name: 'Full Noisette', price: 8.5 },
  { name: 'Chocolat Dubaï', price: 10 },
  { name: 'Cookie Fondant', price: 8.5 },
  { name: 'Forêt Noire', price: 9, signature: 'foret-noire' },
  { name: 'Amandine', price: 8.5 },
  { name: 'Tiramisu', price: 8.5 },
  { name: 'Caramel Beurre Salé', price: 8 },
  { name: 'Moka', price: 8 },
]

export const moods = [
  {
    id: 'chocolate',
    label: 'Chocolate lover',
    hint: 'Deep, dark, and dripping',
  },
  {
    id: 'sweet-salty',
    label: 'Sweet & salty',
    hint: 'Caramel, hazelnut, a little edge',
  },
  {
    id: 'classic',
    label: 'Classic',
    hint: 'Butter, brown sugar, nothing fancy',
  },
  {
    id: 'adventure',
    label: 'Feeling adventurous',
    hint: 'Citron, pistachio, the unexpected',
  },
]

export const moodRecommendations = {
  chocolate: signatureCookies.find((c) => c.id === 'foret-noire'),
  'sweet-salty': signatureCookies.find((c) => c.id === 'bueno-home-made'),
  classic: fullMenu.find((c) => c.name === 'Classic'),
  adventure: signatureCookies.find((c) => c.id === 'cheesecake-citron'),
}
