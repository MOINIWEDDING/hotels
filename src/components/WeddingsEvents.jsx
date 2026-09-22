import { Heart, Briefcase, PartyPopper } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { eventTypes } from '../data/content'

const icons = { bodas: Heart, corporativos: Briefcase, privados: PartyPopper }

export default function WeddingsEvents() {
  return (
    <section id="bodas-eventos" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <AnimatedSection effect="left">
            <div
              className="h-[420px] rounded-3xl bg-cover bg-center shadow-soft"
              style={{ backgroundImage: 'url(/images/events-1.jpg)' }}
            />
          </AnimatedSection>

          <AnimatedSection effect="right">
            <span className="section-eyebrow">Momentos inolvidables</span>
            <h2 className="mt-3 text-3xl font-semibold text-palm-900 sm:text-4xl">
              Bodas y Eventos
            </h2>
            <p className="mt-4 text-palm-700">
              Espacios frente al mar diseñados para celebrar. Nuestro equipo se
              encarga de cada detalle, desde la decoración hasta el catering,
              para que tu evento en Santa Fe sea inolvidable.
            </p>

            <div className="mt-8 space-y-5">
              {eventTypes.map((e, i) => {
                const Icon = icons[e.id]
                return (
                  <AnimatedSection
                    key={e.id}
                    delay={i * 0.08}
                    effect="up"
                    className="flex items-start gap-4 rounded-2xl border border-palm-800/10 bg-white p-5"
                  >
                    <div className="rounded-xl bg-lagoon-100 p-3">
                      <Icon className="h-5 w-5 text-lagoon-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-palm-900">{e.title}</p>
                      <p className="mt-1 text-sm text-palm-700">{e.description}</p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>

            <a href="#contacto" className="btn-primary mt-9 inline-flex">
              Solicitar cotización
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
