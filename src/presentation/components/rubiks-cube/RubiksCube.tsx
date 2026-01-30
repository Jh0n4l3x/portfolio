import { Canvas } from '@react-three/fiber'
import { CubeScene } from './CubeScene'

export const RubiksCube = () => (
  <div className="absolute inset-0 -z-10 bg-[#0a0a0f]" style={{ pointerEvents: 'none' }}>
    <Canvas camera={{ position: [0, 0, 12], fov: 45 }} dpr={[1, 2]}>
      <CubeScene />
    </Canvas>
  </div>
)
