import * as THREE from 'three'

export const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9)

const baseMaterialProps = {
  roughness: 0.35,
  metalness: 0.15,
  clearcoat: 0.8,
  clearcoatRoughness: 0.1
}

const black = new THREE.MeshPhysicalMaterial({
  color: '#0f0f14',
  ...baseMaterialProps,
  roughness: 0.5
})

const createFace = (color: string) =>
  new THREE.MeshPhysicalMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.15,
    ...baseMaterialProps
  })

export const materials = [
  createFace('#3b82f6'), // right (blue)
  createFace('#22c55e'), // left (green)
  createFace('#eab308'), // top (yellow)
  createFace('#ffffff'), // bottom (white)
  createFace('#ef4444'), // front (red)
  createFace('#f97316')  // back (orange)
].map((m, i) => (i < 6 ? m : black))
