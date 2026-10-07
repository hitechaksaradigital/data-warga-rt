import { KONTAK_DARURAT } from '../data/dashboard'

export default function EmergencyContacts() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-space-md">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-tertiary animate-pulse"></div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Direktori Kontak Cepat Tanggap Terpadu</h3>
        </div>
        <span className="font-label-sm text-label-sm text-outline">Siaga 24 Jam • Terkoneksi ke Komando RW 08</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {KONTAK_DARURAT.map((k) => (
          <div key={k.nama} className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className={`w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 ${k.iconColor}`}>
                <span className="material-symbols-outlined text-[20px]">{k.icon}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-outline">{k.role}</span>
                <span className="font-label-lg text-label-lg text-on-surface leading-tight truncate">{k.nama}</span>
                <span className="text-[11px] text-on-surface-variant truncate">{k.sub}</span>
              </div>
            </div>
            <a className={`w-8 h-8 rounded-full flex items-center justify-center hover:opacity-90 shrink-0 ${k.btn}`} href={k.tel}>
              <span className="material-symbols-outlined text-[16px]">call</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
