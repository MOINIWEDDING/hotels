// Contenido y fotos reales de Santa Fe Sosúa (subidas por el cliente).

// Contenido real de Santa Fe / Sosúa Ocean Village, extraído de una copia
// guardada por el cliente de la página oficial de Alojamiento (santafe.do).
// Los precios son estimados de referencia — el sitio real no publica precio
// fijo, muestra "Ver precios de alquiler" enlazando a su motor de reservas.

export const rooms = [
  {
    id: 'ocean-village-deluxe',
    name: 'Ocean Village Deluxe',
    description:
      'Resort y spa de lujo frente al mar con amplias villas y apartamentos. Restaurantes, bares, parque acuático, piscinas, gimnasio, canchas de tenis y centro de entretenimiento familiar.',
    price: 220,
    capacity: 6,
    image: '/images/room-1.jpg',
  },
  {
    id: 'sosua-ocean-village',
    name: 'Sosúa Ocean Village',
    description:
      'Apartamentos de 2 y 3 dormitorios, villas de 2, 3 y 4 dormitorios, y estudios acogedores — para alquiler a corto y largo plazo dentro de la comunidad residencial.',
    price: 150,
    capacity: 8,
    image: '/images/room-4.jpg',
  },
  {
    id: 'santa-fe-laguna-hotel',
    name: 'Santa Fe Laguna Hotel',
    description:
      'Cómodas habitaciones estilo apartamento dentro del parque acuático Laguna SOV. Estadía 100% consumible: lo que pagas se convierte en crédito para restaurantes y gimnasio.',
    price: 95,
    capacity: 3,
    image: '/images/room-2.jpg',
  },
  {
    id: 'bubble-glamping',
    name: 'Santa Fe Bubble Glamping',
    description:
      'Domos junto a la laguna donde el lujo se encuentra con la naturaleza. Estadía 100% consumible, con acceso gratuito a Santa Fe y al parque acuático Laguna SOV al reservar directo.',
    price: 210,
    capacity: 2,
    image: '/images/room-3.jpg',
  },
]

export const dayPassPlans = [
  {
    id: 'day-pass-clasico',
    name: 'Pasadía Clásico',
    price: 35,
    perks: ['Acceso a piscina y playa', 'Camastro y sombrilla', 'Uso de áreas verdes'],
  },
  {
    id: 'day-pass-premium',
    name: 'Pasadía Premium',
    price: 65,
    perks: ['Todo lo del plan Clásico', 'Crédito de $20 en restaurante', 'Toallas y casillero'],
  },
  {
    id: 'day-pass-familiar',
    name: 'Pasadía Familiar',
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
