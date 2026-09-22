import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-palm-950 text-sand-100">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <AnimatedSection className="grid gap-12 lg:grid-cols-3">
          <div>
            <img src="/images/logo.png" alt="Santa Fe Club" className="h-14 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-sand-100/70">
              Day Pass, restaurante, bodas y eventos, y alojamiento frente al mar
              en la costa norte de República Dominicana.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-normal uppercase tracking-widest text-lagoon-300">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm text-sand-100/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lagoon-300" />
                Sosúa, Puerto Plata, República Dominicana
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-lagoon-300" />
                +1 (809) 000-0000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-lagoon-300" />
                reservas@santafe.do
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-normal uppercase tracking-widest text-lagoon-300">
              Secciones
            </p>
            <ul className="mt-4 space-y-2 text-sm text-sand-100/80">
              <li><a href="#day-pass" className="hover:text-white">Day Pass</a></li>
              <li><a href="#restaurante" className="hover:text-white">Restaurante</a></li>
              <li><a href="#bodas-eventos" className="hover:text-white">Bodas y Eventos</a></li>
              <li><a href="#alojamiento" className="hover:text-white">Alojamiento</a></li>
            </ul>
          </div>
        </AnimatedSection>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-sand-100/50">
          © {new Date().getFullYear()} Santa Fe Sosúa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
