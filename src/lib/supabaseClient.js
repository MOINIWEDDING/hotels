import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

if (!isSupabaseConfigured) {
  // No detenemos la app: mostramos un aviso claro en consola para que sea
  // evidente que falta configurar Supabase (ver README.md). Usamos una URL
  // "placeholder" válida para que createClient() no lance una excepción y
  // rompa el render de toda la aplicación.
  console.warn(
    '[Santa Fe] Faltan las variables VITE_SUPABASE_URL y/o VITE_SUPABASE_ANON_KEY. ' +
      'Copia .env.example a .env y completa tus credenciales de Supabase. ' +
      'El sitio funciona igual, pero el login/registro/reservas quedarán deshabilitados.'
  )
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)
