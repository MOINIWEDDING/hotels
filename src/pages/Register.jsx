import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Waves, Loader2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { isSupabaseConfigured } from '../lib/supabaseClient'

export default function Register() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ fullName: '', email: '', password: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      await signUp(form)
      setDone(true)
    } catch (err) {
      setError(err.message || 'No se pudo crear la cuenta.')
    } finally {
      setStatus('idle')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-palm-950 px-6 py-16">
      <div className="w-full max-w-md rounded-3xl bg-sand-50 p-8 shadow-soft sm:p-10">
        <Link to="/" className="flex items-center justify-center gap-2">
          <Waves className="h-6 w-6 text-lagoon-600" />
          <span className="font-display text-xl font-semibold text-palm-900">
            Santa Fe Sosúa
          </span>
        </Link>

        <h1 className="mt-8 text-center text-2xl font-semibold text-palm-900">
          Crea tu cuenta
        </h1>
        <p className="mt-1 text-center text-sm text-palm-600">
          Regístrate para reservar tu estadía o Day Pass.
        </p>

        {!isSupabaseConfigured && (
          <p className="mt-4 rounded-xl bg-sand-200 p-3 text-xs text-palm-800">
            Supabase no está configurado todavía. Completa <code>.env</code> según el README para habilitar el registro real.
          </p>
        )}

        {done ? (
          <div className="mt-8 rounded-2xl bg-lagoon-100 p-5 text-center text-sm text-palm-800">
            Cuenta creada. Revisa tu correo para confirmar tu cuenta y luego{' '}
            <Link to="/login" className="font-semibold text-lagoon-700">
              inicia sesión
            </Link>
            .
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-medium text-palm-700">Nombre completo</label>
              <input
                type="text"
                required
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="mt-1 w-full rounded-xl border border-palm-800/15 bg-white px-4 py-3 text-sm outline-none focus:border-lagoon-500"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-palm-700">Correo electrónico</label>
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
              <label className="text-xs font-medium text-palm-700">Contraseña</label>
              <input
                type="password"
                required
                minLength={6}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="mt-1 w-full rounded-xl border border-palm-800/15 bg-white px-4 py-3 text-sm outline-none focus:border-lagoon-500"
                placeholder="Mínimo 6 caracteres"
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
              {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
              Crear cuenta
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-palm-700">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="font-semibold text-lagoon-700">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}
