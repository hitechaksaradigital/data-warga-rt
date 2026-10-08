import { NavLink, useNavigate } from 'react-router-dom'
import { NAV_ITEMS } from '../data/dashboard'
import { useAuth } from '../context/AuthContext'

export default function MobileDrawer({ open, onClose, query, setQuery }) {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  if (!open) return null
  async function handleLogout() { await signOut(); onClose(); navigate('/login', { replace: true }) }
  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-on-surface/40" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-xl overflow-y-auto flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex items-center justify-between h-16 px-space-md">
            <span className="font-headline-sm text-headline-sm text-primary">WargaNet RT 05</span>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container-high" aria-label="Tutup menu" type="button">
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>
          <div className="px-space-md">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span>
              <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-lg text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Cari warga, KK, iuran..." type="text" />
            </div>
          </div>
          <nav className="flex flex-col gap-1 px-space-md mt-space-md">
            <div className="px-space-sm pb-1">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Menu Administrasi</span>
            </div>
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.path} to={item.to} onClick={onClose} className={({ isActive }) => isActive ? 'flex items-center gap-space-sm px-space-md py-2.5 bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-sm' : 'flex items-center gap-space-sm px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high'}>
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="p-space-md">
          <button onClick={handleLogout} className="w-full mb-2 py-2.5 rounded-lg bg-surface-container-low font-semibold text-[13px] flex items-center justify-center gap-2" type="button">
            <span className="material-symbols-outlined text-[18px]">logout</span> Keluar Akun
          </button>
          <div className="bg-error-container p-space-sm rounded-lg flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-error-container font-bold">Hotline Darurat</span>
            <a className="bg-error text-on-error px-2.5 py-1 rounded-full text-label-sm" href="tel:112">Panggil</a>
          </div>
        </div>
      </div>
    </div>
  )
}
