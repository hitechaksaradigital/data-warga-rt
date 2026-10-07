import { SURAT_ANTRIAN, VALIDASI_IURAN, ADUAN } from '../data/dashboard'

function SuratCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">assignment_turned_in</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Surat Pengantar</h3>
          </div>
          <span className="px-2 py-0.5 bg-primary/10 text-primary font-label-sm text-label-sm rounded-full font-semibold">3 Baru</span>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          {SURAT_ANTRIAN.map((s) => (
            <div key={s.nama} className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="font-label-lg text-label-lg text-on-surface block">{s.nama}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{s.desc}</span>
                </div>
                <span className="font-label-sm text-label-sm text-outline whitespace-nowrap">{s.time}</span>
              </div>
              <div className="flex items-center justify-end gap-2 pt-1">
                <button className="px-2.5 py-1 text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm rounded" type="button">Tinjau</button>
                <button className="px-3 py-1 bg-primary text-on-primary rounded font-label-sm text-label-sm flex items-center gap-1 hover:opacity-90" type="button">
                  <span className="material-symbols-outlined text-[14px]">qr_code_2</span>
                  Setujui &amp; TTD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-3 mt-3 flex justify-center">
        <a className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1" href="#" onClick={(e) => e.preventDefault()}>
          Lihat Semua Antrean Surat
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        </a>
      </div>
    </div>
  )
}


function ValidasiCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">receipt_long</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Validasi Bukti Iuran</h3>
          </div>
          <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full font-semibold">2 Pending</span>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          {VALIDASI_IURAN.map((v) => (
            <div key={v.nama} className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-lg bg-surface-container overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" alt={v.nama} src={v.img} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-lg text-label-lg text-on-surface truncate">{v.nama}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{v.desc}</span>
                  <span className="font-label-sm text-label-sm text-outline mt-0.5">{v.alamat}</span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button className="px-2.5 py-1 text-tertiary hover:bg-error-container rounded font-label-sm text-label-sm transition-colors" type="button">Tolak</button>
                <button className="px-3 py-1 bg-surface-container-highest text-on-surface hover:bg-primary hover:text-on-primary rounded font-label-sm text-label-sm transition-colors flex items-center gap-1" type="button">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  Verifikasi Kas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-3 mt-3 flex justify-center">
        <a className="font-label-sm text-label-sm text-secondary hover:underline items-center gap-1 font-semibold flex" href="#" onClick={(e) => e.preventDefault()}>
          Buka Buku Kas Bendahara
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        </a>
      </div>
    </div>
  )
}

function AduanCard() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary text-[20px]">report_problem</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Aduan Lingkungan</h3>
          </div>
          <span className="px-2 py-0.5 bg-error-container text-on-error-container font-label-sm text-label-sm rounded-full font-bold">2 Tindakan</span>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          {ADUAN.map((a) => (
            <div key={a.title} className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-2">
              <div>
                <span className="font-label-lg text-label-lg text-on-surface">{a.title}</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{a.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-1 gap-2">
                <span className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${a.badgeClass}`}>{a.badge}</span>
                <button className="px-3 py-1 bg-tertiary text-on-tertiary rounded font-label-sm text-label-sm hover:opacity-90 whitespace-nowrap" type="button">
                  {a.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-3 mt-3 flex justify-center">
        <a className="font-label-sm text-label-sm text-tertiary hover:underline items-center gap-1 font-semibold flex" href="#" onClick={(e) => e.preventDefault()}>
          Lihat Seluruh Log Aduan Warga
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        </a>
      </div>
    </div>
  )
}

export default function ActionCenter() {
  return (
    <div className="flex flex-col gap-space-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-6 rounded bg-primary"></span>
          <h2 className="font-headline-md text-headline-md text-on-surface">Pusat Tindakan &amp; Verifikasi Cepat</h2>
          <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">7 Butuh Aksi</span>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">Update real-time warga RT 05</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
        <SuratCard />
        <ValidasiCard />
        <AduanCard />
      </div>
    </div>
  )
}
