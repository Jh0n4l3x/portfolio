import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Cubie } from './Cubie'
import {
  CUBE_COUNT,
  BOUNDS,
  MAX_SPEED,
  REPULSION_RADIUS,
  REPULSION_FORCE,
  ROTATION_SPEED
} from './cubeConstants'

export const CubeManager = () => {
  const cubies = useRef<THREE.Mesh[]>([])
  const velocities = useRef<THREE.Vector3[]>([])
  const rotations = useRef<THREE.Vector3[]>([])
  const impactGlow = useRef<number[]>([])

  const positions = useMemo(() => {
    return Array.from({ length: CUBE_COUNT }, () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * BOUNDS * 2,
        (Math.random() - 0.5) * BOUNDS * 2,
        (Math.random() - 0.5) * BOUNDS * 2
      )
    )
  }, [])

  if (impactGlow.current.length === 0) {
    impactGlow.current = positions.map(() => 0)
  }

  if (velocities.current.length === 0) {
    velocities.current = positions.map(
      () =>
        new THREE.Vector3(
          (Math.random() - 0.5) * MAX_SPEED,
          (Math.random() - 0.5) * MAX_SPEED,
          (Math.random() - 0.5) * MAX_SPEED
        )
    )

    rotations.current = positions.map(
      () =>
        new THREE.Vector3(
          Math.random(),
          Math.random(),
          Math.random()
        ).multiplyScalar(ROTATION_SPEED)
    )
  }

  useFrame((_, delta) => {
    for (let i = 0; i < cubies.current.length; i++) {
      const c = cubies.current[i]
      const v = velocities.current[i]

      if (!c) continue

      c.position.addScaledVector(v, delta)

      c.rotation.x += rotations.current[i].x * delta
      c.rotation.y += rotations.current[i].y * delta
      c.rotation.z += rotations.current[i].z * delta

      ;(['x', 'y', 'z'] as const).forEach(axis => {
        if (Math.abs(c.position[axis]) > BOUNDS) {
          c.position[axis] = THREE.MathUtils.clamp(
            c.position[axis],
            -BOUNDS,
            BOUNDS
          )
          v[axis] *= -1
        }
      })
    }

    for (let i = 0; i < cubies.current.length; i++) {
      for (let j = i + 1; j < cubies.current.length; j++) {
        const a = cubies.current[i]
        const b = cubies.current[j]
        if (!a || !b) continue

        const d = a.position.distanceTo(b.position)
        if (d > 0 && d < REPULSION_RADIUS) {
          const dir = a.position.clone().sub(b.position).normalize()
          dir.multiplyScalar((REPULSION_RADIUS - d) * REPULSION_FORCE * delta)

          velocities.current[i].add(dir)
          velocities.current[j].sub(dir)
        }
      }
    }
  })

  return (
    <>
      {positions.map((p, i) => (
        <Cubie
          key={i}
          position={p}
          register={(m: any) => {cubies.current[i] = m}}
        />
      ))}
    </>
  )
}
