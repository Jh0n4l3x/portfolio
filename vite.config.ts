import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve(process.cwd(), "node_modules/react"),
      "react-dom": path.resolve(process.cwd(), "node_modules/react-dom"),
      "react-reconciler": path.resolve(process.cwd(), "node_modules/react-reconciler"),
      scheduler: path.resolve(process.cwd(), "node_modules/scheduler"),
    },
    dedupe: ["react", "react-dom", "react-reconciler", "scheduler"],
  },
})
