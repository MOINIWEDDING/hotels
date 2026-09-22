// Contenido y fotos reales de Santa Fe Sosúa (subidas por el cliente).

export const rooms = [
  {
    id: 'villa-laguna',
    name: 'Villa Laguna',
    description:
      'Villa con cama tipo dosel de madera, vista directa a la piscina a través de puertas corredizas y terraza privada.',
    price: 180,
    capacity: 2,
    image: '/images/room-1.jpg',
  },
  {
    id: 'suite-palmar',
    name: 'Suite Palmar',
    description:
      'Suite con techos altos de madera, cama dosel y acceso directo al área de piscina rodeada de palmeras.',
    price: 165,
    capacity: 3,
    image: '/images/room-2.jpg',
  },
  {
    id: 'domo-glamping',
    name: 'Domo Glamping',
    description:
      'Domo geodésico junto a la laguna, con terraza privada y tina exterior — una experiencia única de glamping en Santa Fe.',
    price: 210,
    capacity: 2,
    image: '/images/room-3.jpg',
  },
  {
    id: 'apartamento-familiar',
    name: 'Apartamento Familiar',
    description:
      'Apartamento amplio con sala, comedor para 8 personas y cocina totalmente equipada, ideal para familias o grupos.',
    price: 230,
    capacity: 6,
    image: '/images/room-4.jpg',
  },
]

export const dayPassPlans = [
  {
    id: 'day-pass-clasico',
    name: 'Day Pass Clásico',
    price: 35,
    perks: ['Acceso a piscina y playa', 'Camastro y sombrilla', 'Uso de áreas verdes'],
  },
  {
    id: 'day-pass-premium',
    name: 'Day Pass Premium',
    price: 65,
    perks: ['Todo lo del plan Clásico', 'Crédito de $20 en restaurante', 'Toallas y casillero'],
  },
  {
    id: 'day-pass-familiar',
    name: 'Day Pass Familiar',
    price: 110,
    perks: ['Hasta 4 personas', 'Acceso a zona infantil', 'Descuento en actividades acuáticas'],
  },
]

export const eventTypes = [
  {
    id: 'bodas',
    title: 'Bodas frente al mar',
    description: 'Ceremonias y recepciones con la puesta de sol del Caribe como telón de fondo.',
  },
  {
    id: 'corporativos',
    title: 'Eventos corporativos',
    description: 'Espacios versátiles para retiros de equipo, lanzamientos y conferencias.',
  },
  {
    id: 'privados',
    title: 'Celebraciones privadas',
    description: 'Cumpleaños, aniversarios y reuniones familiares con servicio personalizado.',
  },
]
