import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // No detenemos la app: mostramos un aviso claro en consola y en pantalla
  // para que sea evidente que falta configurar Supabase (ver README.md).
  console.warn(
    '[Santa Fe] Faltan las variables VITE_SUPABASE_URL y/o VITE_SUPABASE_ANON_KEY. ' +
      'Copia .env.example a .env y completa tus credenciales de Supabase.'
  )
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)
