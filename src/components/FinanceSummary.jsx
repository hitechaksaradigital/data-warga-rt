export default function FinanceSummary() {
  return (
    <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
      <div className="flex flex-col gap-space-md">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Transparansi Keuangan</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mt-0.5">Ringkasan Kas RT 05 Berjalan</h3>
          </div>
          <div className="text-right">
            <span className="font-label-sm text-label-sm text-outline block">Total Saldo Kas</span>
            <span className="font-headline-lg text-headline-lg text-primary font-bold">Rp 24.850.000</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-surface-container-low flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-outline">Pemasukan Mei</span>
              <span className="font-headline-sm text-headline-sm font-bold text-primary">+Rp 8.120.000</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Iuran bulanan &amp; donasi warga</span>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-surface-container-low flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-on-tertiary-container flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-outline">Pengeluaran Mei</span>
              <span className="font-headline-sm text-headline-sm text-tertiary font-bold">-Rp 3.450.000</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Ops kebersihan &amp; satpam</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wide">Rincian Pengeluaran Terbesar Bulan Ini</span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2 text-body-sm font-body-sm">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                <span className="text-on-surface font-medium truncate">Honor Satpam &amp; Penjaga Malam (2 Org)</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface whitespace-nowrap">Rp 2.000.000</span>
            </div>
            <div className="flex items-center justify-between gap-2 text-body-sm font-body-sm">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                <span className="text-on-surface font-medium truncate">Iuran Angkut Sampah DLH &amp; TPS</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface whitespace-nowrap">Rp 850.000</span>
            </div>
            <div className="flex items-center justify-between gap-2 text-body-sm font-body-sm">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2 h-2 rounded-full bg-tertiary shrink-0"></span>
                <span className="text-on-surface font-medium truncate">Material Semen &amp; Perbaikan Selokan Blok C</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface whitespace-nowrap">Rp 600.000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-space-md mt-space-md flex flex-wrap items-center justify-between gap-2">
        <span className="font-label-sm text-label-sm text-outline">Diaudit berkala oleh Pengurus RW 08</span>
        <button className="px-3.5 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm flex items-center gap-1.5 transition-colors" type="button">
          <span className="material-symbols-outlined text-[16px]">download</span>
          Unduh Laporan PDF
        </button>
      </div>
    </div>
  )
}
