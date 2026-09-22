import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, ArrowLeft } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient'

const statusStyles = {
  pending: 'bg-sand-200 text-sand-800',
  confirmed: 'bg-lagoon-100 text-lagoon-700',
  cancelled: 'bg-red-100 text-red-700',
}

export default function MyBookings() {
  const { user, profile } = useAuth()
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isSupabaseConfigured || !user) {
      setLoading(false)
      return
    }
    supabase
      .from('bookings')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setBookings(data || [])
        setLoading(false)
      })
  }, [user])

  return (
    <div className="min-h-screen bg-sand-50 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Link to="/" className="flex items-center gap-1.5 text-sm font-medium text-palm-700">
          <ArrowLeft className="h-4 w-4" /> Volver al inicio
        </Link>

        <h1 className="mt-6 text-3xl font-semibold text-palm-900">
          Hola, {profile?.full_name?.split(' ')[0] || 'viajero'}
        </h1>
        <p className="mt-1 text-palm-700">Aquí puedes ver el estado de tus reservas.</p>

        <div className="mt-8 space-y-4">
          {loading && <p className="text-palm-600">Cargando reservas…</p>}
          {!loading && bookings.length === 0 && (
            <div className="rounded-2xl border border-dashed border-palm-800/20 p-10 text-center text-palm-600">
              Aún no tienes reservas.{' '}
              <a href="/#alojamiento" className="font-semibold text-lagoon-700">
                Explora el alojamiento
              </a>
              .
            </div>
          )}
          {bookings.map((b) => (
            <div
              key={b.id}
              className="flex flex-col justify-between gap-3 rounded-2xl border border-palm-800/10 bg-white p-5 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-semibold text-palm-900">{b.room_name}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-palm-600">
                  <CalendarDays className="h-4 w-4" />
                  {b.check_in} → {b.check_out} · {b.guests} huéspedes
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-display text-lg font-bold text-palm-900">
                  ${b.total_price}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                    statusStyles[b.status] || statusStyles.pending
                  }`}
                >
                  {b.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
