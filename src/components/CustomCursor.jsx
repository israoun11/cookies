import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const [label, setLabel] = useState('')
  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    const touch = window.matchMedia('(pointer: coarse)').matches
    setIsTouch(touch)
    if (touch) return

    document.body.classList.add('custom-cursor-active')
    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }
    const over = (e) => {
      const target = e.target.closest('[data-cursor]')
      setLabel(target ? target.getAttribute('data-cursor') : '')
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  if (isTouch) return null

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0 z-[90] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200 ease-out"
      style={{ willChange: 'transform' }}
    >
      <div
        className={`flex items-center justify-center rounded-full bg-cocoa/90 text-cream text-[10px] font-semibold tracking-wide uppercase transition-all duration-200 ease-out ${
          label ? 'w-16 h-16' : 'w-3 h-3'
        }`}
        style={{ transform: 'translate(-50%,-50%)' }}
      >
        {label}
      </div>
    </div>
  )
}
