import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function CookieModel({ mouse, spin = 0.15 }) {
  const group = useRef()
  const { scene } = useGLTF('/models/cookie.glb')

  const cookie = useMemo(() => {
    const clone = scene.clone(true)

    clone.traverse((child) => {
      if (child.isMesh) {
        child.visible = true
        child.frustumCulled = false
        child.castShadow = true
        child.receiveShadow = true
      }
    })

    return clone
  }, [scene])

  useFrame((state, delta) => {
    if (!group.current) return

    group.current.rotation.y += delta * spin

    if (mouse?.current) {
      const targetX = mouse.current.y * 0.25
      const targetZ = -mouse.current.x * 0.25

      group.current.rotation.x +=
        (targetX - group.current.rotation.x) * 0.04

      group.current.rotation.z +=
        (targetZ - group.current.rotation.z) * 0.04
    }
  })

  return (
    <group ref={group} scale={35}>
      <primitive object={cookie} />
    </group>
  )
}

useGLTF.preload('/models/cookie.glb')