# Santa Fe Sosúa — Sitio web (React + Tailwind + Supabase)

Sitio de una sola página para **Santa Fe** (Sosúa, República Dominicana) que unifica
Day Pass, Restaurante, Bodas y Eventos, y Alojamiento en una sola experiencia,
con animaciones al hacer scroll, sistema de usuarios (cliente/administrador) y
reservas con calendario.

## 📸 Fotos

Las fotos reales que subiste ya están integradas en `public/images/`. Mapeo
actual (puedes reemplazar cualquiera de estos archivos por otra foto sin
tocar el código, siempre que conserves el mismo nombre):

| Archivo | Uso |
|---|---|
| `hero.jpg` | Vista aérea — fondo del hero principal |
| `room-1.jpg` … `room-4.jpg` | Villa Laguna, Suite Palmar, Domo Glamping, Apartamento Familiar |
| `restaurant-1.jpg`, `restaurant-2.jpg`, `restaurant-3.jpg` | Sección restaurante |
| `events-1.jpg` | Sección bodas y eventos (terraza al atardecer) |
| `daypass-bg.jpg` | Fondo de la sección Day Pass (piscina/mar) |
| `gallery-1.jpg` … `gallery-8.jpg` | Sección Galería |

Nota: `santafe.do` y `santafeclub.do` (y Booking.com) bloquean el scraping
automático vía `robots.txt`, por eso las fotos se cargaron manualmente en
vez de extraerse del sitio. Si quieres agregar más fotos, súbelas a
`public/images/` y referencia el archivo en `src/data/content.js` o en el
componente correspondiente.

## 🎨 Stack

- **React 18 + Vite**
- **Tailwind CSS** (paleta personalizada `lagoon`, `palm`, `sand`)
- **Framer Motion** — animaciones al hacer scroll
- **React Router** — navegación
- **Supabase** — autenticación (usuarios/administradores) y base de datos de reservas
- **react-day-picker** — calendario de reservas

## 🚀 Empezar en local

```bash
npm install
cp .env.example .env   # y completa tus credenciales de Supabase (ver abajo)
npm run dev
```

El sitio funciona igualmente sin Supabase configurado (verás avisos claros en
el login/registro y en la reserva), pero para tener **usuarios y reservas
reales** necesitas conectar Supabase.

## 🗄️ Configurar Supabase (gratis)

1. Crea un proyecto en [supabase.com](https://supabase.com).
2. Ve a **SQL Editor** y ejecuta todo el contenido de `supabase/schema.sql`.
   Esto crea:
   - `profiles` (usuarios con rol `user` o `admin`, con Row Level Security).
   - `bookings` (reservas, con RLS: cada usuario solo ve las suyas; los
     administradores ven todas).
   - Un trigger que crea automáticamente el perfil al registrarse.
3. Ve a **Project Settings > API** y copia `Project URL` y `anon public key`
   a tu archivo `.env`:
   ```
   VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
   VITE_SUPABASE_ANON_KEY=tu-anon-key
   ```
4. **Crear un administrador**: registra una cuenta normal desde el sitio y
   luego, en el SQL Editor de Supabase, ejecuta:
   ```sql
   update public.profiles set role = 'admin' where email = 'tu-correo@ejemplo.com';
   ```
   Esa cuenta ahora verá el enlace **"Panel admin"** en el menú y podrá
   confirmar/cancelar reservas desde `/admin`.
5. (Opcional) En **Authentication > Providers**, puedes desactivar la
   confirmación por correo si quieres pruebas más rápidas.

## ☁️ Desplegar en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com), importa el repositorio.
3. Framework preset: **Vite** (se detecta automáticamente).
4. En **Environment Variables**, agrega:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Deploy. El archivo `vercel.json` ya está incluido para que las rutas de
   React Router (`/login`, `/admin`, etc.) funcionen correctamente.

## 📁 Estructura

```
src/
  components/   Navbar, Hero, DayPass, Restaurant, WeddingsEvents,
                Accommodation, BookingCalendar, Footer, AnimatedSection...
  pages/        Home, Login, Register, MyBookings, AdminDashboard
  context/      AuthContext (maneja sesión y rol admin/usuario)
  lib/          cliente de Supabase
  data/         contenido de referencia (habitaciones, day pass, eventos)
supabase/
  schema.sql    esquema completo de base de datos + RLS
public/images/  aquí van tus fotos reales
```

## ✏️ Personalizar textos y precios

Edita `src/data/content.js` para cambiar habitaciones, precios de Day Pass y
tipos de evento. Los textos de cada sección están directamente en sus
componentes dentro de `src/components/`.
