import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { geometry, materials } from './cubeMaterials'

export const Cubie = ({ position, register }: any) => {
  const ref = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    if (ref.current) register(ref.current)
  }, [register])

  return (
    <mesh ref={ref} geometry={geometry} material={materials} position={position} />
  )
}
