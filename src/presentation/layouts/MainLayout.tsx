import { useState, useEffect } from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  /* Close mobile menu + scroll */
  useEffect(() => {
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/about', label: 'Sobre mí' },
    { to: '/contact', label: 'Contacto' }
  ]

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 glass-strong border-b border-white/10">

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="font-display font-bold text-xl sm:text-2xl gradient-text hover:scale-105 transition-transform"
          >
            Jhonalex.dev
          </Link>

          {/* DESKTOP */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            {links.map(link => {
              const isActive = location.pathname === link.to

              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`relative group transition-colors ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* MOBILE BTN */}
          <button
            aria-label="Abrir menú"
            className="md:hidden p-2 rounded-lg glass hover:bg-white/10"
            onClick={() => setMobileMenuOpen(v => !v)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-strong border-t border-white/10">
            <ul className="flex flex-col gap-2 p-4">

              {links.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="block py-2 px-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        )}

      </header>
        <motion.main
          key={location.pathname}
          className="flex-1 relative z-10"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 glass mt-20">

        <div className="max-w-7xl mx-auto px-6 py-10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()}{' '}
          <span className="gradient-text font-semibold">
            Jhon Alex
          </span>
        </div>

      </footer>

    </div>
  )
}