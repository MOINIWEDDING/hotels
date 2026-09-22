import { useState } from 'react'
import { Users, BedDouble } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import BookingCalendar from './BookingCalendar'
import { rooms } from '../data/content'

export default function Accommodation() {
  const [selectedRoom, setSelectedRoom] = useState(null)

  return (
    <section id="alojamiento" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Encuentra tu habitación</span>
          <h2 className="mt-3 text-3xl font-light text-palm-900 sm:text-4xl">
            Alojamiento
          </h2>
          <p className="mt-4 text-palm-700">
            Villas y suites frente al mar, pensadas para desconectar. Elige tus
            fechas y reserva en minutos.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {rooms.map((room, i) => (
            <AnimatedSection
              key={room.id}
              delay={i * 0.1}
              effect="up"
              className="group flex flex-col overflow-hidden rounded-3xl border border-palm-800/10 shadow-soft"
            >
              <div
                className="h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${room.image})` }}
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-normal text-palm-900">{room.name}</h3>
                <p className="mt-2 flex-1 text-sm text-palm-700">{room.description}</p>

                <div className="mt-4 flex items-center gap-4 text-xs text-palm-600">
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" /> Hasta {room.capacity}
                  </span>
                  <span className="flex items-center gap-1">
                    <BedDouble className="h-3.5 w-3.5" /> 1 habitación
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <p className="font-display text-xl font-light text-palm-900">
                    ${room.price}
                    <span className="text-xs font-normal text-palm-600"> / noche</span>
                  </p>
                  <button onClick={() => setSelectedRoom(room)} className="btn-primary !px-5 !py-2.5 text-xs">
                    Reservar
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {selectedRoom && (
        <BookingCalendar room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </section>
  )
}
