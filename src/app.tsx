import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { MainLayout } from './presentation/layouts'
import { Background } from './presentation/components'

const HomePage = lazy(() =>
  import('./presentation/pages/HomePage').then(m => ({
    default: m.HomePage
  }))
)

const AboutPage = lazy(() =>
  import('./presentation/pages/AboutPage').then(m => ({
    default: m.AboutPage
  }))
)

const ContactPage = lazy(() =>
  import('./presentation/pages/ContactPage').then(m => ({
    default: m.ContactPage
  }))
)

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <HomePage />
              </motion.div>
            }
          />

          <Route
            path="/about"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <AboutPage />
              </motion.div>
            }
          />

          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ContactPage />
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export const App = () => {
  return (
    <BrowserRouter>
      {/* Fondo global */}
      <Background />
      <Suspense fallback={<div className="h-screen" />}>
        <AnimatedRoutes />
      </Suspense>

    </BrowserRouter>
  )
}
