import { Check, Sun } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { dayPassPlans } from '../data/content'

export default function DayPass() {
  return (
    <section id="day-pass" className="relative overflow-hidden bg-sand-50 py-24 lg:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.14]"
        style={{ backgroundImage: 'url(/images/daypass-bg.jpg)' }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <AnimatedSection effect="scale" className="mb-14 overflow-hidden rounded-3xl shadow-soft">
          <div
            className="h-64 bg-cover bg-center sm:h-80"
            style={{ backgroundImage: 'url(/images/daypass-bg.jpg)' }}
          />
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Vive el día</span>
          <h2 className="mt-3 text-3xl font-semibold text-palm-900 sm:text-4xl">
            Planes Day Pass
          </h2>
          <p className="mt-4 text-palm-700">
            Disfruta la piscina, la playa y los espacios verdes de Santa Fe sin
            necesidad de hospedarte. Elige el plan que mejor se adapte a tu día.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {dayPassPlans.map((plan, i) => (
            <AnimatedSection
              key={plan.id}
              delay={i * 0.1}
              effect="scale"
              className={`flex flex-col rounded-3xl border p-8 shadow-soft ${
                i === 1
                  ? 'border-lagoon-500 bg-palm-900 text-sand-50'
                  : 'border-palm-800/10 bg-white text-palm-900'
              }`}
            >
              <Sun className={`h-8 w-8 ${i === 1 ? 'text-lagoon-300' : 'text-lagoon-500'}`} />
              <h3 className="mt-5 text-xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-display font-bold">
                ${plan.price}
                <span className="text-sm font-normal opacity-70"> / persona</span>
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${i === 1 ? 'text-lagoon-300' : 'text-lagoon-600'}`} />
                    <span className={i === 1 ? 'text-sand-100/90' : 'text-palm-700'}>{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-8 text-center ${i === 1 ? 'btn-light' : 'btn-primary'}`}
              >
                Elegir plan
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
