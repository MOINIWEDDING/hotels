import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Waves, Loader2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { isSupabaseConfigured } from '../lib/supabaseClient'

export default function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ email: '', password: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      await signIn(form)
      const redirectTo = location.state?.redirectTo || '/'
      navigate(redirectTo)
    } catch (err) {
      setError(err.message || 'No se pudo iniciar sesión.')
      setStatus('idle')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-palm-950 px-6 py-16">
      <div className="w-full max-w-md rounded-3xl bg-sand-50 p-8 shadow-soft sm:p-10">
        <Link to="/" className="flex items-center justify-center gap-2">
          <Waves className="h-6 w-6 text-lagoon-600" />
          <span className="font-display text-xl font-normal text-palm-900">
            Santa Fe Sosúa
          </span>
        </Link>

        <h1 className="mt-8 text-center text-2xl font-light text-palm-900">
          Inicia sesión
        </h1>
        <p className="mt-1 text-center text-sm text-palm-600">
          Accede para gestionar tus reservas.
        </p>

        {!isSupabaseConfigured && (
          <p className="mt-4 rounded-xl bg-sand-200 p-3 text-xs text-palm-800">
            Supabase no está configurado todavía. Completa <code>.env</code> según el README para habilitar el login real.
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-normal text-palm-700">Correo electrónico</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-xl border border-palm-800/15 bg-white px-4 py-3 text-sm outline-none focus:border-lagoon-500"
              placeholder="tu@correo.com"
            />
          </div>
          <div>
            <label className="text-xs font-normal text-palm-700">Contraseña</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-1 w-full rounded-xl border border-palm-800/15 bg-white px-4 py-3 text-sm outline-none focus:border-lagoon-500"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
            {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-palm-700">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="font-normal text-lagoon-700">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  )
}
