import { useMemo, useState } from 'react'
import { WARGA_TABS } from '../data/warga'
import { useWargaKK } from '../hooks/useWargaKK'
import { FilterSelect, WargaRow } from './datawarga/parts'
import { ProfileDrawer } from './datawarga/ProfileDrawer'
import { AddKKModal } from './datawarga/AddKKModal'
import DemografiChart from './datawarga/DemografiChart'

export default function DataWargaPage() {
  const { rows, loading, error, source, addKK } = useWargaKK()
  const [tab, setTab] = useState('semua')
  const [search, setSearch] = useState('')
  const [kepemilikan, setKepemilikan] = useState('')
  const [rentan, setRentan] = useState('')
  const [selectedId, setSelectedId] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return rows.filter((w) => {
      if (tab !== 'semua' && !w.kategori.includes(tab)) return false
      if (kepemilikan && w.kepemilikan !== kepemilikan) return false
      if (rentan && !w.kategori.includes(rentan)) return false
      if (q && !`${w.nama} ${w.noKK} ${w.noKKPlain} ${w.blok}`.toLowerCase().includes(q)) return false
      return true
    })
  }, [rows, tab, search, kepemilikan, rentan])

  const selected = rows.find((w) => w.id === selectedId) || null
  const drawerOpen = selected !== null

  return (
    <div className="flex flex-col w-full pt-space-md">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md mb-space-lg">
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs mb-1">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[16px]">folder_shared</span>
            </span>
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Sistem Administrasi Sipil RW 08</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">Master Data Kependudukan &amp; Kepala Keluarga (KK)</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Pendataan terpadu 94 Kepala Keluarga, verifikasi berkas sipil, dan pemetaan demografi warga RT 05.</p>
        </div>
        <div className="flex flex-wrap items-center gap-space-sm">
          <button className="inline-flex items-center gap-space-xs px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors shadow-sm" type="button">
            <span className="material-symbols-outlined text-[18px] text-outline">tune</span>
            <span>Filter Lanjutan</span>
          </button>
          <button className="inline-flex items-center gap-space-xs px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors shadow-sm" type="button">
            <span className="material-symbols-outlined text-[18px] text-secondary">file_download</span>
            <span>Import / Export Excel</span>
            <span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
          </button>
          <button className="inline-flex items-center gap-space-xs px-5 py-2.5 rounded-lg bg-primary-container text-on-primary-container font-label-lg text-label-lg hover:opacity-95 active:scale-[0.99] transition-all shadow-md" onClick={() => setModalOpen(true)} type="button">
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            <span>Tambah Data KK Baru</span>
          </button>
        </div>
      </div>
      {source === 'lokal' && (
        <div className="mb-space-md p-3 rounded-xl bg-secondary-container text-on-secondary-container font-label-md text-label-md flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">info</span>
          <span>Mode data lokal — isi VITE_SUPABASE_URL &amp; VITE_SUPABASE_ANON_KEY di .env lalu jalankan SQL di folder supabase/ untuk mengaktifkan database.</span>
        </div>
      )}
      {error && (
        <div className="mb-space-md p-3 rounded-xl bg-error-container text-on-error-container font-label-md text-label-md">
          Gagal memuat Supabase ({error}) — menampilkan data lokal.
        </div>
      )}
      <div className="flex flex-col gap-space-md mb-space-lg">
        <div className="flex items-center gap-space-xs overflow-x-auto pb-2">
          {WARGA_TABS.map((t) => {
            const active = tab === t.id
            return (
              <button key={t.id} onClick={() => setTab(t.id)} className={active ? 'px-4 py-2 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md flex items-center gap-2 shadow-sm whitespace-nowrap' : 'px-4 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-label-md text-label-md flex items-center gap-2 transition-colors whitespace-nowrap'} type="button">
                {t.icon && <span className={`material-symbols-outlined text-[16px] ${active ? '' : t.iconColor}`}>{t.icon}</span>}
                <span>{t.label}</span>
                <span className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${active ? 'bg-on-primary-container/15' : t.id === 'lansia' ? 'bg-tertiary-fixed text-on-tertiary-fixed' : t.id === 'balita' ? 'bg-secondary-fixed text-on-secondary-fixed' : t.id === 'khusus' ? 'bg-error-container text-on-error-container' : 'bg-surface-container text-outline'}`}>{t.count}</span>
              </button>
            )
          })}
        </div>
        <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col lg:flex-row gap-space-md items-stretch lg:items-center justify-between">
          <div className="relative flex-1 min-w-[280px]">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-11 pr-4 py-2.5 bg-surface-container-low rounded-lg text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all" placeholder="Cari berdasarkan Nama Kepala Keluarga, No. KK, NIK, atau Blok Rumah (mis. A1/04)..." type="text" />
          </div>
          <div className="flex flex-wrap items-center gap-space-sm">
            <FilterSelect icon="home_work" value={kepemilikan} onChange={setKepemilikan}>
              <option value="">Semua Kepemilikan</option>
              <option value="tetap">Rumah Tetap</option>
              <option value="kontrak">Kontrak / Sewa</option>
            </FilterSelect>
            <FilterSelect icon="family_restroom" value={rentan} onChange={setRentan} minWidth="min-w-[180px]">
              <option value="">Kategori Rentan</option>
              <option value="lansia">Ada Lansia (&gt;60 th)</option>
              <option value="balita">Ada Balita (0-5 th)</option>
              <option value="khusus">Disabilitas / Khusus</option>
            </FilterSelect>
            <button className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Reset Filter" type="button" onClick={() => { setSearch(''); setKepemilikan(''); setRentan(''); setTab('semua') }}>
              <span className="material-symbols-outlined text-[20px]">replay</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative grid grid-cols-12 gap-space-lg items-start">
        <div className={`${drawerOpen ? 'col-span-12 xl:col-span-8' : 'col-span-12'} transition-all duration-300`}>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
            <div className="px-space-lg py-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Daftar Induk Kepala Keluarga (KK)</span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">Menampilkan {filtered.length} KK • Sumber: {source === 'supabase' ? 'Supabase' : 'Lokal'}</span>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">sync</span>
                <span>Sinkronisasi Dukcapil Terakhir: Hari ini, 08:30 WIB</span>
              </div>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[960px]">
                <thead>
                  <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-semibold">No. KK &amp; Kepala Keluarga</th>
                    <th className="py-3.5 px-4 font-semibold">Alamat / Blok</th>
                    <th className="py-3.5 px-4 font-semibold text-center">Anggota</th>
                    <th className="py-3.5 px-4 font-semibold">Kepemilikan</th>
                    <th className="py-3.5 px-4 font-semibold">Kontak WA</th>
                    <th className="py-3.5 px-4 font-semibold">Status Berkas</th>
                    <th className="py-3.5 px-4 font-semibold">Status</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Aksi Tindakan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low font-body-md text-body-md text-on-surface">
                  {loading && (
                    <tr>
                      <td colSpan={8} className="py-10 px-4 text-center text-on-surface-variant">Memuat data dari Supabase...</td>
                    </tr>
                  )}
                  {!loading && filtered.map((w) => (
                    <WargaRow key={w.id} warga={w} onShow={setSelectedId} />
                  ))}
                  {!loading && filtered.length === 0 && (
                    <tr>
                      <td colSpan={8} className="py-10 px-4 text-center text-on-surface-variant">Tidak ada data yang cocok dengan filter.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {drawerOpen && <ProfileDrawer warga={selected} onClose={() => setSelectedId(null)} />}
      </div>
      <DemografiChart />
      <AddKKModal open={modalOpen} onClose={() => setModalOpen(false)} onSubmit={addKK} />
    </div>
  )
}
