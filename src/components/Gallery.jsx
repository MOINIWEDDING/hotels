import AnimatedSection from './AnimatedSection'

const photos = [
  { src: '/images/gallery-7.jpg', label: 'Domos junto a la laguna' },
  { src: '/images/gallery-3.jpg', label: 'Habitaciones' },
  { src: '/images/gallery-1.jpg', label: 'Baños con vista al jardín' },
  { src: '/images/gallery-8.jpg', label: 'Domo con tina exterior' },
  { src: '/images/gallery-2.jpg', label: 'Cocinas equipadas' },
  { src: '/images/gallery-5.jpg', label: 'Habitaciones' },
  { src: '/images/gallery-4.jpg', label: 'Baños de mármol' },
  { src: '/images/gallery-6.jpg', label: 'Habitaciones' },
]

export default function Gallery() {
  return (
    <section id="galeria" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Un vistazo por dentro</span>
          <h2 className="mt-3 text-3xl font-semibold text-palm-900 sm:text-4xl">
            Galería
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {photos.map((p, i) => (
            <AnimatedSection
              key={p.src}
              delay={(i % 4) * 0.08}
              effect="scale"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft"
            >
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${p.src})` }}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-palm-950/60 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-medium text-white">{p.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
