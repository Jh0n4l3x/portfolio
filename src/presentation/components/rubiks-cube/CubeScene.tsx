import { Environment, Float, Sparkles, ContactShadows } from '@react-three/drei'
import { CubeManager } from './CubeManager'

export const CubeScene = () => (
  <>
    <ambientLight intensity={0.2} />
    <pointLight position={[10, 10, 10]} intensity={1.5} />
    <pointLight position={[-10, -10, -10]} intensity={1.5} />
    <Environment preset="city" />

    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <CubeManager />
    </Float>

    <Sparkles count={80} scale={20} size={2} opacity={0.4} />
    <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} />
  </>
)
