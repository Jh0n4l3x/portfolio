import { RubiksCube } from "./rubiks-cube/RubiksCube"

export const Background = () => {
  return (
    <>
      {/* 3D BACKGROUND */}
      <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
        <RubiksCube />
      </div>

      {/* GRADIENT BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />

        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />

        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>
    </>
  )
}
