export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-space-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            Wilayah Kondusif • RT 05 / RW 08
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Harmoni Sejahtera</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
          Selamat Datang, Pak Bambang
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Berikut ringkasan operasional kependudukan, keuangan, dan ketertiban malam ini.
        </p>
      </div>
      <div className="flex items-center gap-space-sm bg-surface-container-lowest px-space-md py-2.5 rounded-xl shadow-sm w-fit">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-surface-container-low text-primary">
          <span className="material-symbols-outlined text-[20px]">event_upcoming</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-outline">Kalender Administrasi</span>
          <span className="font-label-lg text-label-lg text-on-surface">Kamis, 23 Mei 2024</span>
        </div>
        <span className="mx-1 h-6 w-px bg-surface-container"></span>
        <button
          className="px-3 py-1.5 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:opacity-95 transition-opacity flex items-center gap-1"
          type="button"
        >
          <span className="material-symbols-outlined text-[16px]">add_task</span>
          Buat Surat
        </button>
      </div>
    </div>
  )
}
