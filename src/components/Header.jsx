export default function Header({ onMenu }) {
  return (
    <header className="fixed top-0 left-0 lg:left-72 right-0 h-20 bg-surface/80 backdrop-blur-xl shadow-card z-40 px-4 lg:px-space-margin flex items-center justify-between">
      <div className="flex items-center gap-space-sm">
        <button
          onClick={onMenu}
          className="lg:hidden p-2 -ml-2 rounded-full text-on-surface-variant hover:bg-surface-container-high"
          type="button"
          aria-label="Buka menu"
        >
          <span className="material-symbols-outlined text-[22px]">menu</span>
        </button>
        <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
          <span className="hover:text-primary transition-colors cursor-pointer hidden sm:inline">Portal RT 05</span>
          <span className="material-symbols-outlined text-[16px] text-outline hidden sm:inline">chevron_right</span>
          <span className="text-on-surface font-semibold">Harmoni Sejahtera</span>
        </nav>
        <div className="hidden xl:flex items-center gap-space-xs ml-space-md px-space-sm py-1 bg-secondary-container rounded-full">
          <span className="material-symbols-outlined text-on-secondary-container text-[16px]">verified</span>
          <span className="font-label-sm text-label-sm text-on-secondary-container font-medium">
            Kas Aktif &amp; Terverifikasi
          </span>
        </div>
      </div>
      <div className="flex items-center gap-space-md">
        <button
          className="relative p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error font-label-sm text-[10px] font-bold">
            3
          </span>
        </button>
        <div className="h-8 w-px bg-outline-variant hidden sm:block"></div>
        <div className="flex items-center gap-space-sm pl-space-xs">
          <div className="hidden sm:flex flex-col text-right">
            <span className="font-label-lg text-label-lg text-on-surface font-bold leading-tight">
              Bpk. H. Bambang Sutrisno
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Ketua RT 05</span>
          </div>
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover shadow-sm"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtRbA2lPDUgiXZ4-VQRnCImsqfg14gUyfacpQ4HQpcYX359ooduS0TZFg-jp-CWkfuIJ_1wZGuiBAelaxhYDPy-hT4lFR5NxaNcLZieRw5tAEQziGylmDeaFfM4Sxil7LOKda5Yeh4F3LUhsrpfgAdbESxM6KhH4LWXezr-WXhaiF5Gmrqoq-NBsG8Queon_yDAgKdL643m16lwmPFkyaDBy1nBhGl8txOXw8ag70-"
          />
        </div>
      </div>
    </header>
  )
}
