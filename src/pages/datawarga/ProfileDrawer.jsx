export function ProfileDrawer({ warga, onClose }) {
  if (!warga) return null
  return (
    <div className="col-span-12 xl:col-span-4 bg-surface-container-lowest rounded-xl shadow-xl flex flex-col p-space-lg">
      <div className="flex items-center justify-between pb-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-primary text-[22px]">badge</span>
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Profil Keluarga</span>
        </div>
        <button className="p-1.5 rounded-full hover:bg-surface-container-low text-outline hover:text-on-surface transition-colors" onClick={onClose} type="button">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>
      <div className="p-space-md rounded-xl bg-surface-container-low my-space-sm flex flex-col gap-space-xs">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">{warga.kepemilikanLabel}</span>
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">{warga.nama}</h2>
            <p className="font-body-sm text-body-sm text-outline">No. KK: {warga.noKKPlain}</p>
          </div>
          <div className="text-right shrink-0">
            <span className="font-label-lg text-label-lg text-primary font-bold">{warga.blokShort}</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">RT 05 / RW 08</p>
          </div>
        </div>
        <div className="pt-2 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
          <span>Status Iuran Kas: <strong className="text-primary font-bold">{warga.iuran}</strong></span>
          <a className="text-primary font-semibold flex items-center gap-1 hover:underline" href={warga.waLink} target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined text-[15px]">chat</span> WhatsApp
          </a>
        </div>
      </div>
      {warga.disaster && (
        <div className="p-space-sm rounded-lg bg-tertiary-fixed text-on-tertiary-fixed mb-space-md flex items-start gap-space-xs shadow-sm">
          <span className="material-symbols-outlined text-tertiary text-[20px] flex-shrink-0 mt-0.5">warning</span>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-tertiary-fixed-variant">Protokol Siaga &amp; Tanggap Bencana</span>
            <p className="font-body-sm text-body-sm leading-snug">{warga.disaster}</p>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-space-xs mb-space-md">
        <div className="flex items-center justify-between">
          <span className="font-label-lg text-label-lg text-on-surface font-bold">Daftar Anggota Keluarga ({warga.members.length} Jiwa)</span>
          <button className="text-primary font-label-sm text-label-sm hover:underline font-semibold" type="button">+ Tambah Anggota</button>
        </div>
        {warga.members.map((m) => (
          <div key={m.nik} className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className={`px-1.5 py-0.5 rounded font-label-sm text-[10px] font-bold shrink-0 ${m.role === 'Kepala' ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface'}`}>{m.role}</span>
                <span className="font-label-md text-label-md font-bold text-on-surface truncate">{m.nama}</span>
              </div>
              <span className="font-label-sm text-label-sm text-outline whitespace-nowrap">Gol. Darah: {m.goldar}</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2 text-body-sm font-body-sm text-on-surface-variant pt-1">
              <span className="truncate">NIK: {m.nik}</span>
              <span className="text-right">Usia: {m.usia}</span>
              <span className="truncate">Pekerjaan: {m.pekerjaan}</span>
              <span className={`text-right font-semibold ${m.verified ? 'text-primary' : 'text-tertiary'}`}>{m.verified ? 'e-KTP Terverifikasi' : 'e-KTP Perlu Update'}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-space-xs mb-space-md">
        <div className="flex items-center justify-between">
          <span className="font-label-lg text-label-lg text-on-surface font-bold">Galeri Berkas Digital Resmi</span>
          <span className="font-label-sm text-label-sm text-primary">Terenkripsi Cloud RT</span>
        </div>
        <div className="grid grid-cols-2 gap-space-xs">
          <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col gap-1.5 group cursor-pointer hover:bg-surface-container-high transition-colors">
            <div className="h-20 w-full rounded bg-surface-container-high overflow-hidden flex items-center justify-center relative">
              <span className="material-symbols-outlined text-outline text-[32px] group-hover:scale-110 transition-transform">badge</span>
              <span className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-primary text-on-primary rounded text-[9px] font-bold">PDF</span>
            </div>
            <span className="font-label-sm text-label-sm font-bold text-on-surface truncate">e-KTP {warga.nama.split(' ').slice(-1)}</span>
            <span className="text-[10px] text-outline">Diperbarui 12 Jan 2024</span>
          </div>
          <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col gap-1.5 group cursor-pointer hover:bg-surface-container-high transition-colors">
            <div className="h-20 w-full rounded bg-surface-container-high overflow-hidden flex items-center justify-center relative">
              <span className="material-symbols-outlined text-outline text-[32px] group-hover:scale-110 transition-transform">description</span>
              <span className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-secondary text-on-secondary rounded text-[9px] font-bold">SCAN</span>
            </div>
            <span className="font-label-sm text-label-sm font-bold text-on-surface truncate">Kartu Keluarga (Asli)</span>
            <span className="text-[10px] text-outline">Format Barcode Dukcapil</span>
          </div>
        </div>
      </div>
      <div className="mt-auto pt-space-sm flex items-center gap-space-xs">
        <button className="flex-1 py-2.5 rounded-lg bg-primary-container text-on-primary-container font-label-lg text-label-lg hover:opacity-95 transition-opacity text-center font-bold" type="button">
          Sunting Data KK
        </button>
        <button className="p-2.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors" title="Download ZIP Arsip" type="button">
          <span className="material-symbols-outlined text-[20px]">download</span>
        </button>
        <button className="p-2.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors" title="Cetak Kartu Warga" type="button">
          <span className="material-symbols-outlined text-[20px]">print</span>
        </button>
      </div>
    </div>
  )
}
