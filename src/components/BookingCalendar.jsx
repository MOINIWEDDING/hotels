import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { useNavigate } from 'react-router-dom'
import { CalendarDays, Users, Loader2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient'

function nightsBetween(range) {
  if (!range?.from || !range?.to) return 0
  const ms = range.to.getTime() - range.from.getTime()
  return Math.max(1, Math.round(ms / (1000 * 60 * 60 * 24)))
}

export default function BookingCalendar({ room, onClose }) {
  const { user, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [range, setRange] = useState(undefined)
  const [guests, setGuests] = useState(2)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const nights = nightsBetween(range)
  const total = nights * room.price

  const handleConfirm = async () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { redirectTo: '/#alojamiento' } })
      return
    }
    if (!range?.from || !range?.to) {
      setErrorMsg('Selecciona una fecha de entrada y de salida.')
      return
    }
    if (!isSupabaseConfigured) {
      setErrorMsg(
        'La conexión con Supabase no está configurada todavía (ver README.md). Esta es una vista previa de la reserva.'
      )
      return
    }

    setStatus('loading')
    setErrorMsg('')
    const { error } = await supabase.from('bookings').insert({
      user_id: user.id,
      room_id: room.id,
      room_name: room.name,
      check_in: range.from.toISOString().slice(0, 10),
      check_out: range.to.toISOString().slice(0, 10),
      guests,
      total_price: total,
      status: 'pending',
    })

    if (error) {
      setStatus('error')
      setErrorMsg(error.message)
      return
    }
    setStatus('success')
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-palm-950/60 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-sand-50 p-6 shadow-soft sm:p-8">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-lagoon-600">
              Reservar
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-palm-900">
              {room.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-palm-700 hover:bg-palm-900/5"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {status === 'success' ? (
          <div className="mt-8 rounded-2xl bg-lagoon-100 p-6 text-center">
            <p className="font-semibold text-palm-900">¡Solicitud de reserva enviada!</p>
            <p className="mt-2 text-sm text-palm-700">
              Puedes ver el estado de tu reserva en "Mi cuenta".
            </p>
            <button onClick={onClose} className="btn-primary mt-5">
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <div className="mt-6 flex items-center justify-center rounded-2xl border border-palm-800/10 bg-white p-2">
              <DayPicker
                mode="range"
                selected={range}
                onSelect={setRange}
                numberOfMonths={1}
                disabled={{ before: new Date() }}
                classNames={{
                  day_selected: 'bg-lagoon-600 text-white',
                  day_range_middle: 'bg-lagoon-100 text-palm-900',
                  day_today: 'font-bold text-lagoon-700',
                }}
              />
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-palm-800/10 bg-white px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-palm-800">
                <Users className="h-4 w-4 text-lagoon-600" /> Huéspedes
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="h-7 w-7 rounded-full bg-sand-100 text-sm font-semibold"
                >
                  −
                </button>
                <span className="w-4 text-center text-sm font-semibold">{guests}</span>
                <button
                  onClick={() => setGuests((g) => Math.min(room.capacity, g + 1))}
                  className="h-7 w-7 rounded-full bg-sand-100 text-sm font-semibold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-palm-700">
                <CalendarDays className="h-4 w-4 text-lagoon-600" />
                {nights > 0 ? `${nights} noche${nights > 1 ? 's' : ''}` : 'Selecciona fechas'}
              </span>
              <span className="font-display text-lg font-bold text-palm-900">
                ${total || 0}
              </span>
            </div>

            {errorMsg && <p className="mt-3 text-sm text-red-600">{errorMsg}</p>}

            <button
              onClick={handleConfirm}
              disabled={status === 'loading'}
              className="btn-primary mt-6 w-full"
            >
              {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
              {isAuthenticated ? 'Confirmar reserva' : 'Inicia sesión para reservar'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
