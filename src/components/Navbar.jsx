import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, LayoutDashboard, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const links = [
  { href: '#day-pass', label: 'Pasadía' },
  { href: '#restaurante', label: 'Restaurante' },
  { href: '#bodas-eventos', label: 'Bodas y Eventos' },
  { href: '#alojamiento', label: 'Alojamiento' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { isAuthenticated, isAdmin, profile, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goHome = (hash) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSignOut = async () => {
    await signOut()
    setOpen(false)
    navigate('/')
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-sand-50/90 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.svg" alt="Santa Fe Club" className="h-11 w-auto lg:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => goHome(l.href)}
              className={`text-sm font-normal tracking-wide transition-colors ${
                scrolled ? 'text-palm-800 hover:text-lagoon-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {isAuthenticated ? (
            <>
              {isAdmin && (
                <Link
                  to="/admin"
                  className={`flex items-center gap-1.5 text-sm font-normal ${
                    scrolled ? 'text-palm-800' : 'text-white'
                  }`}
                >
                  <LayoutDashboard className="h-4 w-4" /> Panel admin
                </Link>
              )}
              <Link
                to="/mi-cuenta"
                className={`flex items-center gap-1.5 text-sm font-normal ${
                  scrolled ? 'text-palm-800' : 'text-white'
                }`}
              >
                <User className="h-4 w-4" /> {profile?.full_name?.split(' ')[0] || 'Mi cuenta'}
              </Link>
              <button onClick={handleSignOut} className="btn-secondary !px-5 !py-2.5 text-xs">
                <LogOut className="h-3.5 w-3.5" /> Salir
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`text-sm font-normal ${scrolled ? 'text-palm-800' : 'text-white'}`}
              >
                Iniciar sesión
              </Link>
              <button onClick={() => goHome('#alojamiento')} className="btn-primary !px-6 !py-2.5 text-xs">
                Reservar ahora
              </button>
            </>
          )}
        </div>

        <button
          className={`lg:hidden ${scrolled ? 'text-palm-900' : 'text-white'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-sand-50 shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => goHome(l.href)}
                  className="py-2.5 text-left text-sm font-normal text-palm-800"
                >
                  {l.label}
                </button>
              ))}
              <hr className="my-2 border-palm-800/10" />
              {isAuthenticated ? (
                <>
                  {isAdmin && (
                    <Link to="/admin" onClick={() => setOpen(false)} className="py-2.5 text-sm font-normal text-palm-800">
                      Panel admin
                    </Link>
                  )}
                  <Link to="/mi-cuenta" onClick={() => setOpen(false)} className="py-2.5 text-sm font-normal text-palm-800">
                    Mi cuenta
                  </Link>
                  <button onClick={handleSignOut} className="py-2.5 text-left text-sm font-normal text-palm-800">
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setOpen(false)} className="py-2.5 text-sm font-normal text-palm-800">
                    Iniciar sesión
                  </Link>
                  <Link to="/register" onClick={() => setOpen(false)} className="py-2.5 text-sm font-normal text-palm-800">
                    Crear cuenta
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
