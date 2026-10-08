import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth, friendlyAuthError } from '../context/AuthContext'

export default function LoginPage() {
  const { signIn, user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  if (user) { navigate(from, { replace: true }); return null }
  async function onSubmit(e) {
    e.preventDefault(); setError('')
    if (!email.trim() || !password) { setError('Email dan kata sandi wajib diisi.'); return }
    setLoading(true)
    try { await signIn({ email: email.trim(), password }); navigate(from, { replace: true }) }
    catch (err) { setError(friendlyAuthError(err.message)) }
    finally { setLoading(false) }
  }
  return (
    <div className="min-h-screen bg-surface flex">
      <div className="hidden lg:flex w-[44%] flex-col justify-between bg-primary text-on-primary p-10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 -left-12 w-96 h-96 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center"><span className="material-symbols-outlined">groups</span></div>
          <div><p className="font-headline-sm text-headline-sm">WargaNet RT 05</p><p className="text-white/70 text-[12px]">RW 08 Harmoni Sejahtera</p></div>
        </div>
        <div className="relative">
          <h1 className="font-headline-xl text-headline-xl">Kelola Data Warga dengan Aman.</h1>
          <p className="text-white/75 mt-3 max-w-md">Masuk untuk membuka Dashboard &amp; Master Data 94 KK.</p>
        </div>
        <p className="relative text-white/60 text-[12px]">Portal Pengurus RT • Siaga 24 Jam</p>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-card p-6 md:p-8 border border-surface-container-high">
          <p className="font-label-md text-label-md text-primary uppercase tracking-wider">Masuk Pengurus</p>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-1">Selamat datang kembali</h2>
          {error && <div className="mt-4 bg-error-container text-on-error-container rounded-xl px-3.5 py-3 text-[13px] font-medium">{error}</div>}
          <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-4">
            <label className="flex flex-col gap-1.5"><span className="font-label-md text-label-md">Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="pengurus@rt05.id" className="px-3.5 py-2.5 bg-surface-container-low rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/60" />
            </label>
            <label className="flex flex-col gap-1.5"><span className="font-label-md text-label-md">Kata sandi</span>
              <div className="relative">
                <input type={show ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-3.5 py-2.5 pr-11 bg-surface-container-low rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/60" />
                <button type="button" onClick={() => setShow((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-outline"><span className="material-symbols-outlined text-[19px]">{show ? 'visibility_off' : 'visibility'}</span></button>
              </div>
            </label>
            <button disabled={loading} className="py-3 rounded-xl bg-primary text-on-primary font-semibold text-[14px] disabled:opacity-60">{loading ? 'Memeriksa...' : 'Masuk ke Dashboard'}</button>
          </form>
          <p className="text-center text-[13px] text-on-surface-variant mt-5">Belum punya akun? <Link to="/register" className="text-primary font-semibold hover:underline">Daftar</Link></p>
        </div>
      </div>
    </div>
  )
}
