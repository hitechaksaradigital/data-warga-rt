export function FilterSelect({ icon, value, onChange, children, minWidth = 'min-w-[170px]' }) {
  return (
    <div className={`relative flex items-center ${minWidth}`}>
      <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">{icon}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 pr-8 py-2.5 bg-surface-container-low rounded-lg text-body-md font-body-md text-on-surface appearance-none focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
      >
        {children}
      </select>
      <span className="material-symbols-outlined absolute right-2.5 pointer-events-none text-outline text-[18px]">expand_more</span>
    </div>
  )
}

export function WargaRow({ warga, onShow }) {
  return (
    <tr className={`hover:bg-surface-container-low/60 transition-colors group ${warga.highlight ? 'bg-surface-container-low/20' : ''}`}>
      <td className="py-4 px-4">
        <div className="flex items-center gap-space-sm">
          <img className="w-10 h-10 rounded-full object-cover flex-shrink-0 shadow-sm" alt={warga.nama} src={warga.foto} />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1">
              <button className="text-left font-label-lg text-label-lg text-primary hover:underline font-bold truncate" onClick={() => onShow(warga.id)} type="button">
                {warga.nama}
              </button>
              {warga.prioritas && (
                <span className="material-symbols-outlined text-tertiary text-[16px]" title="Memerlukan Perhatian Khusus Evakuasi">flag</span>
              )}
            </div>
            <span className="font-body-sm text-body-sm text-outline tracking-tight">{warga.noKK}</span>
          </div>
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex flex-col">
          <span className="font-label-md text-label-md text-on-surface font-semibold">{warga.blok}</span>
          <span className={`font-body-sm text-body-sm ${warga.subAlamatWarning ? 'text-tertiary' : 'text-on-surface-variant'}`}>{warga.subAlamat}</span>
        </div>
      </td>
      <td className="py-4 px-4 text-center">
        <div className="inline-flex flex-col items-center">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-md text-label-md font-bold">
            <span className="material-symbols-outlined text-[15px] text-primary">groups</span>
            {warga.anggotaLabel}
          </span>
          {warga.anggotaNote && (
            <span className={`text-[11px] font-bold mt-0.5 ${warga.anggotaNoteColor || 'text-tertiary'}`}>{warga.anggotaNote}</span>
          )}
        </div>
      </td>
      <td className="py-4 px-4">
        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold ${warga.kepemilikan === 'tetap' ? 'bg-secondary-fixed text-on-secondary-fixed' : 'bg-surface-container-high text-on-surface-variant'}`}>
          <span className="material-symbols-outlined text-[14px]">{warga.kepemilikan === 'tetap' ? 'home' : 'key'}</span>
          {warga.kepemilikanLabel}
        </span>
      </td>
      <td className="py-4 px-4">
        <a className="inline-flex items-center gap-1.5 text-primary hover:text-on-primary-fixed-variant font-label-md text-label-md font-medium" href={warga.waLink} target="_blank" rel="noreferrer">
          <span className="material-symbols-outlined text-[18px]">chat</span>
          {warga.wa}
        </a>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-1.5">
          {warga.berkas.map((b) => (
            <span key={b.label} className={`px-2 py-0.5 rounded font-label-sm text-label-sm font-bold ${b.ok ? 'bg-primary-fixed-dim/40 text-on-primary-fixed' : 'bg-error-container text-on-error-container'}`} title={b.ok ? 'Terverifikasi' : 'Perlu Update'}>{b.label}</span>
          ))}
        </div>
      </td>
      <td className="py-4 px-4">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          {warga.status}
        </span>
      </td>
      <td className="py-4 px-4 text-right">
        <div className="inline-flex items-center gap-1">
          <button className="p-1.5 rounded-lg hover:bg-surface-container text-primary transition-colors" onClick={() => onShow(warga.id)} title="Lihat Profil Keluarga" type="button">
            <span className="material-symbols-outlined text-[20px]">visibility</span>
          </button>
          <button className="p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant transition-colors" title="Edit Data" type="button">
            <span className="material-symbols-outlined text-[20px]">edit</span>
          </button>
          <button className="p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant transition-colors" title="Cetak Formulir Pengantar" type="button">
            <span className="material-symbols-outlined text-[20px]">print</span>
          </button>
        </div>
      </td>
    </tr>
  )
}
