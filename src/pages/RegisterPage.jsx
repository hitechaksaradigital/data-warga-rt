import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth, friendlyAuthError } from '../context/AuthContext'

export default function RegisterPage() {
  const { signUp, user } = useAuth()
  const navigate = useNavigate()
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  if (user) { navigate('/', { replace: true }); return null }
  async function onSubmit(e) {
    e.preventDefault(); setError('')
    if (!nama.trim() || !email.trim() || !password) { setError('Nama, email, dan kata sandi wajib diisi.'); return }
    if (password.length < 6) { setError('Kata sandi minimal 6 karakter.'); return }
    if (password !== confirm) { setError('Konfirmasi kata sandi tidak sama.'); return }
    setLoading(true)
    try {
      const data = await signUp({ email: email.trim(), password, nama: nama.trim() })
      if (data.session) navigate('/', { replace: true })
      else setDone(true)
    } catch (err) { setError(friendlyAuthError(err.message)) }
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
          <h1 className="font-headline-xl text-headline-xl">Daftar Akun Pengurus Baru.</h1>
          <p className="text-white/75 mt-3 max-w-md">Satu akun untuk seluruh operasional RT 05.</p>
        </div>
        <p className="relative text-white/60 text-[12px]">Portal Pengurus RT • Siaga 24 Jam</p>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-card p-6 md:p-8 border border-surface-container-high">
          <p className="font-label-md text-label-md text-primary uppercase tracking-wider">Daftar Pengurus</p>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-1">Buat akun baru</h2>
          {done ? (
            <div className="mt-5 bg-primary-container/30 border border-primary/20 rounded-xl p-4 text-[13px]">
              <p className="font-semibold text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-primary">mark_email_read</span>Cek email Anda</p>
              <p className="text-on-surface-variant mt-1">Pendaftaran berhasil. Jika verifikasi email aktif, klik tautan di inbox lalu <Link to="/login" className="text-primary font-semibold">masuk di sini</Link>.</p>
            </div>
          ) : (
            <>
              {error && <div className="mt-4 bg-error-container text-on-error-container rounded-xl px-3.5 py-3 text-[13px] font-medium">{error}</div>}
              <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-4">
                <label className="flex flex-col gap-1.5"><span className="font-label-md text-label-md">Nama lengkap</span>
                  <input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="cth. Bambang Sutrisno" className="px-3.5 py-2.5 bg-surface-container-low rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/60" />
                </label>
                <label className="flex flex-col gap-1.5"><span className="font-label-md text-label-md">Email</span>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="pengurus@rt05.id" className="px-3.5 py-2.5 bg-surface-container-low rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/60" />
                </label>
                <label className="flex flex-col gap-1.5"><span className="font-label-md text-label-md">Kata sandi (min. 6)</span>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="px-3.5 py-2.5 bg-surface-container-low rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/60" />
                </label>
                <label className="flex flex-col gap-1.5"><span className="font-label-md text-label-md">Konfirmasi sandi</span>
                  <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="••••••••" className="px-3.5 py-2.5 bg-surface-container-low rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/60" />
                </label>
                <button disabled={loading} className="py-3 rounded-xl bg-primary text-on-primary font-semibold text-[14px] disabled:opacity-60">{loading ? 'Mendaftar...' : 'Daftar Akun'}</button>
              </form>
            </>
          )}
          <p className="text-center text-[13px] text-on-surface-variant mt-5">Sudah punya akun? <Link to="/login" className="text-primary font-semibold hover:underline">Masuk</Link></p>
        </div>
      </div>
    </div>
  )
}
