import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, LayoutDashboard, CheckCircle2, XCircle } from 'lucide-react'
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient'

const statusStyles = {
  pending: 'bg-sand-200 text-sand-800',
  confirmed: 'bg-lagoon-100 text-lagoon-700',
  cancelled: 'bg-red-100 text-red-700',
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    if (!isSupabaseConfigured) {
      setLoading(false)
      return
    }
    setLoading(true)
    const { data } = await supabase
      .from('bookings')
      .select('*, profiles(full_name, email)')
      .order('created_at', { ascending: false })
    setBookings(data || [])
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  const updateStatus = async (id, status) => {
    await supabase.from('bookings').update({ status }).eq('id', id)
    load()
  }

  const totals = bookings.reduce(
    (acc, b) => {
      acc.revenue += b.status === 'confirmed' ? Number(b.total_price) : 0
      acc[b.status] = (acc[b.status] || 0) + 1
      return acc
    },
    { revenue: 0 }
  )

  return (
    <div className="min-h-screen bg-sand-50 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="flex items-center gap-1.5 text-sm font-medium text-palm-700">
          <ArrowLeft className="h-4 w-4" /> Volver al sitio
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <LayoutDashboard className="h-7 w-7 text-lagoon-600" />
          <h1 className="text-3xl font-semibold text-palm-900">Panel de administración</h1>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-palm-800/10 bg-white p-5">
            <p className="text-xs text-palm-600">Reservas totales</p>
            <p className="mt-1 text-2xl font-bold text-palm-900">{bookings.length}</p>
          </div>
          <div className="rounded-2xl border border-palm-800/10 bg-white p-5">
            <p className="text-xs text-palm-600">Pendientes</p>
            <p className="mt-1 text-2xl font-bold text-palm-900">{totals.pending || 0}</p>
          </div>
          <div className="rounded-2xl border border-palm-800/10 bg-white p-5">
            <p className="text-xs text-palm-600">Confirmadas</p>
            <p className="mt-1 text-2xl font-bold text-palm-900">{totals.confirmed || 0}</p>
          </div>
          <div className="rounded-2xl border border-palm-800/10 bg-white p-5">
            <p className="text-xs text-palm-600">Ingresos confirmados</p>
            <p className="mt-1 text-2xl font-bold text-palm-900">${totals.revenue}</p>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-palm-800/10 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-palm-800/10 bg-sand-50 text-xs uppercase text-palm-600">
              <tr>
                <th className="px-5 py-3">Huésped</th>
                <th className="px-5 py-3">Habitación</th>
                <th className="px-5 py-3">Fechas</th>
                <th className="px-5 py-3">Total</th>
                <th className="px-5 py-3">Estado</th>
                <th className="px-5 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={6} className="px-5 py-6 text-center text-palm-600">
                    Cargando…
                  </td>
                </tr>
              )}
              {!loading && bookings.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-6 text-center text-palm-600">
                    Aún no hay reservas.
                  </td>
                </tr>
              )}
              {bookings.map((b) => (
                <tr key={b.id} className="border-b border-palm-800/5 last:border-0">
                  <td className="px-5 py-3">
                    <p className="font-medium text-palm-900">{b.profiles?.full_name || '—'}</p>
                    <p className="text-xs text-palm-600">{b.profiles?.email}</p>
                  </td>
                  <td className="px-5 py-3">{b.room_name}</td>
                  <td className="px-5 py-3 text-xs">
                    {b.check_in} → {b.check_out}
                  </td>
                  <td className="px-5 py-3 font-semibold">${b.total_price}</td>
                  <td className="px-5 py-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles[b.status]}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateStatus(b.id, 'confirmed')}
                        className="rounded-full bg-lagoon-100 p-1.5 text-lagoon-700 hover:bg-lagoon-200"
                        title="Confirmar"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => updateStatus(b.id, 'cancelled')}
                        className="rounded-full bg-red-100 p-1.5 text-red-700 hover:bg-red-200"
                        title="Cancelar"
                      >
                        <XCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
