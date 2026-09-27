import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Small floating crumb / chocolate-chunk particles drifting slowly
// around the scene. Lightweight — instanced-style loop, no heavy geometry.
export default function FloatingCrumbs({ count = 18 }) {
  const group = useRef()

  const items = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        pos: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 3,
        ],
        speed: 0.2 + Math.random() * 0.4,
        offset: Math.random() * Math.PI * 2,
        size: 0.04 + Math.random() * 0.06,
        color: Math.random() > 0.5 ? '#3B2015' : '#E3A55E',
      })),
    [count]
  )

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.children.forEach((mesh, i) => {
      const it = items[i]
      mesh.position.y = it.pos[1] + Math.sin(t * it.speed + it.offset) * 0.4
      mesh.position.x = it.pos[0] + Math.cos(t * it.speed * 0.6 + it.offset) * 0.2
      mesh.rotation.x += 0.003
      mesh.rotation.y += 0.004
    })
  })

  return (
    <group ref={group}>
      {items.map((it, i) => (
        <mesh key={i} position={it.pos}>
          <boxGeometry args={[it.size, it.size, it.size]} />
          <meshStandardMaterial color={it.color} roughness={0.6} />
        </mesh>
      ))}
    </group>
  )
}
