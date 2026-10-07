export default function DemografiChart() {
  const total = 348
  const laki = 178
  const perempuan = 170
  const pctLaki = (laki / total) * 100
  const R = 53
  const C = 2 * Math.PI * R
  const ktp = 98.2

  const usia = [
    { label: 'Usia Produktif', pct: 74, color: 'bg-primary' },
    { label: 'Anak & Balita', pct: 15, color: 'bg-secondary' },
    { label: 'Lansia', pct: 11, color: 'bg-tertiary-container' },
  ]

  const rentan = [
    { label: 'Lansia >60 th', value: 14, max: 20, color: 'bg-tertiary' },
    { label: 'Balita', value: 8, max: 20, color: 'bg-secondary' },
    { label: 'Kontrak', value: 16, max: 20, color: 'bg-primary' },
    { label: 'Khusus', value: 3, max: 20, color: 'bg-error' },
  ]

  return (
    <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[28px]">query_stats</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Komposisi Penduduk RT 05</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Visual demografi {total} jiwa • terupdate Mei 2024</span>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">Live dari Data KK</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        <div className="p-4 rounded-xl bg-surface-container-low flex items-center gap-4">
          <div className="relative w-[120px] h-[120px] shrink-0">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r={R} fill="none" stroke="#ffe9e7" strokeWidth="14" />
              <circle cx="60" cy="60" r={R} fill="none" stroke="#006a69" strokeWidth="14" strokeLinecap="round" strokeDasharray={`${(C * pctLaki) / 100} ${C}`} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline-md text-headline-md text-on-surface font-bold">{total}</span>
              <span className="font-label-sm text-label-sm text-outline">jiwa</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-w-0">
            <span className="font-label-md text-label-md text-on-surface font-bold">Jenis Kelamin</span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full shrink-0 bg-primary"></span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Laki-laki: <strong className="text-on-surface">{laki} ({pctLaki.toFixed(1)}%)</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full shrink-0 bg-primary-container"></span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Perempuan: <strong className="text-on-surface">{perempuan} ({(100 - pctLaki).toFixed(1)}%)</strong></span>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2.5">
          <span className="font-label-md text-label-md text-on-surface font-bold">Kelompok Usia</span>
          {usia.map((u) => (
            <div key={u.label} className="flex flex-col gap-1">
              <div className="flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-on-surface-variant">{u.label}</span>
                <span className="text-on-surface font-bold">{u.pct}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                <div className={`h-full rounded-full ${u.color}`} style={{ width: `${u.pct}%` }}></div>
              </div>
            </div>
          ))}
          <span className="font-body-sm text-body-sm text-outline mt-1">74% warga berada di usia produktif</span>
        </div>
        <div className="p-4 rounded-xl bg-surface-container-low flex items-center gap-4">
          <div className="relative w-[120px] h-[120px] shrink-0">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r={R} fill="none" stroke="#ffdad6" strokeWidth="14" />
              <circle cx="60" cy="60" r={R} fill="none" stroke="#006a69" strokeWidth="14" strokeLinecap="round" strokeDasharray={`${(C * ktp) / 100} ${C}`} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">{ktp}%</span>
              <span className="font-label-sm text-label-sm text-outline">e-KTP</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 min-w-0 flex-1">
            <span className="font-label-md text-label-md text-on-surface font-bold">Kelengkapan e-KTP</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">342 dari 348 jiwa sudah merekam e-KTP.</span>
            <div className="flex flex-col gap-1 mt-1">
              {rentan.map((r) => (
                <div key={r.label} className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-outline w-24 truncate">{r.label}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-surface-container overflow-hidden">
                    <div className={`h-full rounded-full ${r.color}`} style={{ width: `${(r.value / r.max) * 100}%` }}></div>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface font-bold w-5 text-right">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
