import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import CookieModel from './CookieModel.jsx'

export default function CookieScene() {
  const mouse = useRef({ x: 0, y: 0 })

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <Suspense fallback={null}>
        <CookieModel
          mouse={mouse}
          spin={0.15}
        />
      </Suspense>
    </Canvas>
  )
}