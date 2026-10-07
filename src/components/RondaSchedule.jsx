import { RONDA_PETUGAS } from '../data/dashboard'

export default function RondaSchedule() {
  return (
    <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-md">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">shield_moon</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Jadwal Ronda Malam Ini</h3>
              <span className="font-label-sm text-label-sm text-outline">Kamis Malam - Jumat Subuh</span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">Regu 3</span>
        </div>
        <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-outline text-[18px]">schedule</span>
              <span className="font-label-md text-label-md text-on-surface">22.00 – 04.00 WIB</span>
            </div>
            <span className="font-label-sm text-label-sm text-primary font-semibold">Pos Kamling Utama (Blok A)</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Petugas Jaga Warga (4 Orang):</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {RONDA_PETUGAS.map((p) => (
                <div key={p.nama} className="p-2 rounded-lg bg-surface-container-lowest flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${p.aktif ? 'bg-primary' : 'bg-outline'}`}></span>
                  <div className="flex flex-col min-w-0">
                    <span className={`font-label-sm text-label-sm text-on-surface truncate ${p.aktif ? 'font-bold' : ''}`}>{p.nama}</span>
                    <span className="text-[10px] text-outline">{p.alamat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container">
          <span className="material-symbols-outlined text-secondary text-[22px]">notifications_active</span>
          <div className="flex flex-col min-w-0">
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">Instruksi Patroli:</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Pukul 01.30 periksa portal timur &amp; penerangan gang buntu.</span>
          </div>
        </div>
      </div>
      <div className="pt-space-md mt-space-md flex flex-wrap items-center justify-between gap-2">
        <a className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1" href="https://wa.me/" target="_blank" rel="noreferrer">
          <span className="material-symbols-outlined text-[16px]">chat</span>
          WhatsApp Grup Ronda
        </a>
        <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:opacity-95 transition-opacity" type="button">
          Kirim Pengingat SMS/WA
        </button>
      </div>
    </div>
  )
}
