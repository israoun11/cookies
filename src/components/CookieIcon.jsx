// A small generative cookie glyph used for menu items that don't have
// real product photography yet. Deterministic per name so each cookie
// keeps a stable look, and chip placement varies by hash.
function hashName(name) {
  let h = 0
  for (let i = 0; i < name.length; i++) {
    h = (h << 5) - h + name.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}

export default function CookieIcon({ name, size = 64, className = '' }) {
  const h = hashName(name)
  const chipCount = 5 + (h % 4)
  const chips = Array.from({ length: chipCount }).map((_, i) => {
    const seed = h + i * 977
    const angle = (seed % 360) * (Math.PI / 180)
    const dist = 8 + ((seed >> 3) % 14)
    const cx = 32 + Math.cos(angle) * dist
    const cy = 32 + Math.sin(angle) * dist
    const r = 2 + ((seed >> 5) % 3)
    return { cx, cy, r, key: i }
  })
  const doughTones = ['#E3A960', '#DCA255', '#E7B36C']
  const dough = doughTones[h % doughTones.length]

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={`${name} cookie icon`}
    >
      <circle cx="32" cy="32" r="29" fill={dough} stroke="#B97A3A" strokeWidth="1.5" />
      {chips.map((c) => (
        <circle key={c.key} cx={c.cx} cy={c.cy} r={c.r} fill="#4A2A1E" />
      ))}
    </svg>
  )
}
