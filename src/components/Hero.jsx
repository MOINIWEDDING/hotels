import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-palm-950">
      {/* Fondo: foto real de la piscina frente al mar de Santa Fe */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(10,40,44,0.55) 0%, rgba(10,40,44,0.3) 35%, rgba(10,40,44,0.85) 100%), url(/images/hero.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-palm-950 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-lagoon-200"
        >
          Costa Norte · Sosúa, República Dominicana
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          Refresca, relaja y redescubre los placeres simples de la vida
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 max-w-xl text-base text-sand-100/90 sm:text-lg"
        >
          Day pass, restaurante frente al mar, bodas y eventos, y alojamiento
          boutique — todo en un mismo destino turquesa en el corazón de Sosúa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a href="#alojamiento" className="btn-light">
            Reservar mi estadía
          </a>
          <a href="#day-pass" className="btn-secondary !border-white/40 !bg-white/10 !text-white hover:!bg-white/20">
            Ver planes Day Pass
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#day-pass"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80"
        aria-label="Desplázate hacia abajo"
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  )
}
