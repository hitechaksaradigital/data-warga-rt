import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setLoading(false)
      return
    }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session ?? null)
      setUser(data.session?.user ?? null)
      setLoading(false)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession ?? null)
      setUser(nextSession?.user ?? null)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  const value = useMemo(() => {
    async function signIn({ email, password }) {
      if (!supabase) throw new Error('Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY di .env')
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      return data
    }

    async function signUp({ email, password, nama }) {
      if (!supabase) throw new Error('Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY di .env')
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { nama: nama || email.split('@')[0] } },
      })
      if (error) throw error
      return data
    }

    async function signOut() {
      if (!supabase) return
      await supabase.auth.signOut()
      setSession(null)
      setUser(null)
    }

    return { session, user, loading, signIn, signUp, signOut, isConfigured: isSupabaseConfigured }
  }, [session, user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth harus dipakai di dalam <AuthProvider>')
  return ctx
}

export function friendlyAuthError(message) {
  const m = (message || '').toLowerCase()
  if (m.includes('invalid login credentials')) return 'Email atau kata sandi salah. Periksa kembali.'
  if (m.includes('email not confirmed')) return 'Email belum diverifikasi. Cek kotak masuk email Anda.'
  if (m.includes('user already registered') || m.includes('already exists')) return 'Email sudah terdaftar. Silakan masuk.'
  if (m.includes('password should be at least')) return 'Kata sandi minimal 6 karakter.'
  if (m.includes('rate limit') || m.includes('too many')) return 'Terlalu banyak percobaan. Tunggu sebentar lalu coba lagi.'
  return message || 'Terjadi kesalahan. Coba lagi.'
}
