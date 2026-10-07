export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-primary/5 transition-transform group-hover:scale-125"></div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">Kependudukan</span>
            <span className="font-headline-xl text-headline-xl text-on-surface mt-1">348</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Jiwa Terdaftar</span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">group</span>
          </div>
        </div>
        <div className="mt-space-md pt-space-sm flex flex-col gap-1.5">
          <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
            <span>182 Laki-laki</span>
            <span className="text-outline">•</span>
            <span>166 Perempuan</span>
          </div>
          <div className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold">
            <span className="material-symbols-outlined text-[15px]">trending_up</span>
            <span>+4 jiwa bulan ini</span>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-secondary-container/30 transition-transform group-hover:scale-125"></div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">Kepala Keluarga</span>
            <span className="font-headline-xl text-headline-xl text-on-surface mt-1">94</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Kepala Keluarga (KK)</span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">cottage</span>
          </div>
        </div>
        <div className="mt-space-md pt-space-sm flex flex-col gap-1">
          <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
            <span className="font-medium text-on-surface">78 Tetap</span>
            <span className="text-outline">/</span>
            <span>16 Kontrak / Sewa</span>
          </div>
          <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden flex">
            <div className="bg-secondary h-full" style={{ width: '83%' }}></div>
            <div className="bg-secondary-fixed-dim h-full" style={{ width: '17%' }}></div>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-primary/5 transition-transform group-hover:scale-125"></div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase">Realisasi Iuran Mei</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-headline-xl text-headline-xl text-primary">86.4%</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Terkumpul</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Rp 8.120.000 / Rp 9.4jt</span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">payments</span>
          </div>
        </div>
        <div className="mt-space-md pt-space-sm flex flex-col gap-1.5">
          <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
            <div className="bg-primary h-full rounded-full" style={{ width: '86.4%' }}></div>
          </div>
          <div className="flex justify-between items-center font-label-sm text-label-sm text-outline">
            <span>Target: Rp 9.400.000</span>
            <span className="text-primary font-semibold">Sisa: Rp 1.280.000</span>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-tertiary/5 transition-transform group-hover:scale-125"></div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">Atensi Khusus</span>
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            </div>
            <span className="font-headline-xl text-headline-xl text-tertiary mt-1">24</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Warga Prioritas / Rentan</span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-tertiary-fixed text-on-tertiary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">health_and_safety</span>
          </div>
        </div>
        <div className="mt-space-md pt-space-sm flex items-center gap-1 flex-wrap">
          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">14 Lansia</span>
          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">8 Balita</span>
          <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-sm text-label-sm font-semibold">2 Disabilitas</span>
        </div>
      </div>
    </div>
  )
}
