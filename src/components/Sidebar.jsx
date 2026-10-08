import { NavLink, useNavigate } from 'react-router-dom'
import { NAV_ITEMS } from '../data/dashboard'
import { useAuth } from '../context/AuthContext'

export default function Sidebar({ query, setQuery }) {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  async function handleLogout() { await signOut(); navigate('/login', { replace: true }) }
  return (
    <aside className="fixed left-0 top-0 hidden h-full w-72 flex-col justify-between bg-surface-container-lowest shadow-card z-50 lg:flex">
      <div className="flex flex-col overflow-y-auto">
        <div className="h-20 px-space-lg flex items-center gap-space-sm bg-surface-container-lowest">
          <img
            alt="RT Digital Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1UqqjXiJzHlqkQGXuo5Gwka2mI55J7wgaYZ2R6UqKQuHEX2cR2tWi4dJeviwkQtEkCbwb3GvTkH_qJaM8Ct56IQPrK5STmAP9lg33ZSPo1mjboJb8bboU93GQ-5ha0mqMxHKN3OBlTaGyCkR_Kj90z0nui6goEXupZyraNe5zIRKXzd9DH9hZOjyRjasQ-rfiengjE7xNeQI3-4DHBK0ScatiM-XwulyANBywgJHgl5Ig"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight truncate">
              WargaNet RT 05
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
              RW 08 Harmoni Sejahtera
            </span>
          </div>
        </div>

        <div className="px-space-md py-space-sm">
          <div className="bg-surface-container-low px-space-md py-space-sm rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px]">calendar_today</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Periode Aktif</span>
            </div>
            <span className="font-label-md text-label-md text-primary">Mei 2024</span>
          </div>
        </div>

        <div className="px-space-md mt-space-xs">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">search</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-lg text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Cari warga, KK, iuran..."
              type="text"
            />
          </div>
        </div>

        <nav className="flex flex-col gap-1 px-space-md mt-space-md">
          <div className="px-space-sm pb-1">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
              Menu Administrasi
            </span>
          </div>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center gap-space-sm px-space-md py-2.5 transition-colors bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-sm'
                  : 'flex items-center gap-space-sm px-space-md py-2.5 rounded-lg text-body-md font-body-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors'
              }
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-space-md bg-surface-container-lowest">
        <div className="flex items-center justify-between px-1 pb-2">
          <span className="font-label-sm text-label-sm text-outline truncate max-w-[150px]">{user?.email || 'Pengurus'}</span>
          <button onClick={handleLogout} className="inline-flex items-center gap-1 text-[12px] font-semibold text-error hover:underline" type="button">
            <span className="material-symbols-outlined text-[16px]">logout</span> Keluar
          </button>
        </div>
        <div className="bg-error-container p-space-sm rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-error text-[20px]">emergency</span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-error-container font-bold">
                Hotline Darurat
              </span>
              <span className="font-body-sm text-body-sm text-on-error-container">Siaga Kamling 24 Jam</span>
            </div>
          </div>
          <a
            className="bg-error text-on-error px-2.5 py-1 rounded-full text-label-sm font-label-lg hover:opacity-90 transition-opacity"
            href="tel:112"
          >
            Panggil
          </a>
        </div>
        <div className="mt-space-sm text-center">
          <span className="font-label-sm text-label-sm text-outline">v2.4 • RT Digital 05 Harmoni</span>
        </div>
      </div>
    </aside>
  )
}
