import { UtensilsCrossed, Clock, MapPin } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Restaurant() {
  return (
    <section id="restaurante" className="relative overflow-hidden bg-palm-900 py-24 text-sand-50 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <AnimatedSection effect="left" className="order-2 lg:order-1">
          <span className="section-eyebrow !text-lagoon-300">Sabores del Caribe</span>
          <h2 className="mt-3 text-3xl font-light sm:text-4xl">
            Restaurante frente al mar
          </h2>
          <p className="mt-5 text-sand-100/85">
            Cocina caribeña e internacional preparada con ingredientes locales,
            servida con vista directa a la laguna turquesa de Santa Fe. Desde un
            almuerzo relajado hasta una cena romántica al atardecer.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-lagoon-300" />
              <div>
                <p className="text-sm font-normal">Horario</p>
                <p className="text-sm text-sand-100/70">8:00 am – 10:00 pm todos los días</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <UtensilsCrossed className="mt-0.5 h-5 w-5 text-lagoon-300" />
              <div>
                <p className="text-sm font-normal">Especialidad</p>
                <p className="text-sm text-sand-100/70">Mariscos frescos y cocina dominicana</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-lagoon-300" />
              <div>
                <p className="text-sm font-normal">Ubicación</p>
                <p className="text-sm text-sand-100/70">Terraza principal, frente a la playa</p>
              </div>
            </div>
          </div>

          <a href="#contacto" className="btn-light mt-9 inline-flex">
            Reservar una mesa
          </a>
        </AnimatedSection>

        <AnimatedSection effect="right" className="order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <div
              className="col-span-2 h-64 rounded-3xl bg-cover bg-center shadow-soft"
              style={{ backgroundImage: 'url(/images/restaurant-1.jpg)' }}
            />
            <div
              className="h-40 rounded-3xl bg-cover bg-center shadow-soft"
              style={{ backgroundImage: 'url(/images/restaurant-2.jpg)' }}
            />
            <div
              className="h-40 rounded-3xl bg-cover bg-center shadow-soft"
              style={{ backgroundImage: 'url(/images/restaurant-3.jpg)' }}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
