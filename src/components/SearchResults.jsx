import { SURAT_ANTRIAN, VALIDASI_IURAN, ADUAN } from '../data/dashboard'

export default function SearchResults({ query, onClear }) {
  const q = query.trim().toLowerCase()
  const surat = SURAT_ANTRIAN.filter((s) => `${s.nama} ${s.desc}`.toLowerCase().includes(q))
  const iuran = VALIDASI_IURAN.filter((v) => `${v.nama} ${v.desc} ${v.alamat}`.toLowerCase().includes(q))
  const aduan = ADUAN.filter((a) => `${a.title} ${a.desc}`.toLowerCase().includes(q))
  const total = surat.length + iuran.length + aduan.length

  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface">Hasil pencarian “{query.trim()}”</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            {total === 0 ? 'Tidak ada hasil yang cocok.' : `${total} hasil ditemukan di surat, iuran, dan aduan.`}
          </p>
        </div>
        <button onClick={onClear} className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-sm text-label-sm" type="button">
          Reset pencarian
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-space-md">
        <div className="p-3 rounded-lg bg-surface-container-low">
          <p className="font-label-md text-label-md text-on-surface mb-2">Surat ({surat.length})</p>
          {surat.length === 0 && <p className="font-body-sm text-body-sm text-outline">Tidak ada.</p>}
          {surat.map((s) => (
            <div key={s.nama} className="py-1.5 border-b border-surface-container last:border-0">
              <p className="font-label-lg text-label-lg text-on-surface">{s.nama}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-lg bg-surface-container-low">
          <p className="font-label-md text-label-md text-on-surface mb-2">Iuran ({iuran.length})</p>
          {iuran.length === 0 && <p className="font-body-sm text-body-sm text-outline">Tidak ada.</p>}
          {iuran.map((v) => (
            <div key={v.nama} className="py-1.5 border-b border-surface-container last:border-0">
              <p className="font-label-lg text-label-lg text-on-surface">{v.nama}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{v.desc} • {v.alamat}</p>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-lg bg-surface-container-low">
          <p className="font-label-md text-label-md text-on-surface mb-2">Aduan ({aduan.length})</p>
          {aduan.length === 0 && <p className="font-body-sm text-body-sm text-outline">Tidak ada.</p>}
          {aduan.map((a) => (
            <div key={a.title} className="py-1.5 border-b border-surface-container last:border-0">
              <p className="font-label-lg text-label-lg text-on-surface">{a.title}</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
