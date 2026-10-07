export const NAV_ITEMS = [
  { label: 'Dashboard Utama', icon: 'grid_view', path: 'dashboard-utama', to: '/', active: true },
  { label: 'Data Warga & KK', icon: 'groups', path: 'data-warga-kk', to: '/data-warga', active: false },
  { label: 'Keuangan & Iuran', icon: 'account_balance_wallet', path: 'keuangan-iuran', to: '/keuangan', active: false },
  { label: 'Layanan & Pengaduan', icon: 'assignment_late', path: 'layanan-pengaduan', to: '/layanan', active: false },
]

export const SURAT_ANTRIAN = [
  { nama: 'Siti Rahmawati', desc: 'Surat Ket. Domisili • Blok B2/14', time: '10 mnt lalu' },
  { nama: 'Budi Santoso', desc: 'Pengantar SKTM • Gang Dahlia No. 4', time: '45 mnt lalu' },
  { nama: 'Agus Kurniawan', desc: 'Pengantar Usaha Mikro • Blok A1/08', time: '2 jam lalu' },
]

export const VALIDASI_IURAN = [
  {
    nama: 'Bpk. Hendra Gunawan',
    desc: 'Iuran Mei • Rp 100.000 (BCA)',
    alamat: 'Rumah Blok C3/02',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcgVF7VUW0y7-06qMDEUElksaBSR2lBB16hQKFdCG4OP_KjwHGrAhNntdfy5exbRAWibzy0vKNw4j5RpP2UgVQN4PqtpIvRpb04fIneaD20Z7yIRj0dPcuwr6xfXSsN_h9DOl_KzG10FFH_OUWwwHV9jsH4zCgmVWxQw3x2CyfOQzvpzDDU72eN69ZiaJPSSb5y71JhY6X33IBnAoXIjnN3QFdnnhZ7-bTOvnA9EAD',
  },
  {
    nama: 'Ibu Dewi Safitri',
    desc: 'Iuran Mei + Sampah • Rp 150.000',
    alamat: 'Rumah Blok A2/11',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU_RlgqVgEMiSHuqMXkXHloAqF3rFIwrfkvRFHwvM51MbG00RpukkPXKnRYtPDbbpaJ4lCtnuLrvIW9CkC8zyxcrEUGmC39qIjRf9TOiDHYwFwUJSkLTtJ6NuNNqeUELZILaORQ7Rxrl7_ziaChITyLnAJdU6WS86cOfF-L3sNrAxur2-MrkmH49RSio8Yltw_dvEy2GJp5PO3NsycYFPcFjTxp2qoS0B8qsAWnHOd',
  },
]

export const ADUAN = [
  {
    title: 'Lampu Jalan Blok B Mati',
    desc: 'Tiang No. 04 depan musholla gelap, rawan keamanan malam.',
    badge: 'Perlu Teknisi',
    badgeClass: 'bg-secondary-container text-on-secondary-container',
    action: 'Tugaskan Seksi Sarpras',
  },
  {
    title: 'TPS Liar di Ujung Gang 3',
    desc: 'Penumpukan sampah liar dari luar warga RT 05 mulai bau.',
    badge: 'Urgensi Tinggi',
    badgeClass: 'bg-error-container text-on-error-container',
    action: 'Jadwalkan Kerja Bakti',
  },
]

export const RONDA_PETUGAS = [
  { nama: 'Bpk. Hendro (Koord)', alamat: 'Blok B1/05', aktif: true },
  { nama: 'Bpk. Slamet Riyadi', alamat: 'Blok B2/09', aktif: false },
  { nama: 'Bpk. Faisal Akbar', alamat: 'Blok A3/12', aktif: false },
  { nama: 'Bpk. Anton Hartono', alamat: 'Blok C1/03', aktif: false },
]

export const KONTAK_DARURAT = [
  { role: 'Bhabinkamtibmas', nama: 'Aipda Joko W.', sub: 'Polsek Sukajadi', icon: 'local_police', iconColor: 'text-tertiary', tel: 'tel:081234567890', btn: 'bg-primary text-on-primary' },
  { role: 'Babinsa TNI AD', nama: 'Serka M. Ridwan', sub: 'Koramil 04', icon: 'military_tech', iconColor: 'text-secondary', tel: 'tel:081298765432', btn: 'bg-primary text-on-primary' },
  { role: 'Ambulans & Puskesmas', nama: 'UGD 24 Jam', sub: 'Pusk. Harmoni Sejahtera', icon: 'medical_services', iconColor: 'text-primary', tel: 'tel:119', btn: 'bg-tertiary text-on-tertiary' },
  { role: 'Pemadam Kebakaran', nama: 'Pos Damkar Sektor 2', sub: 'Siaga Tanggap Bencana', icon: 'fire_truck', iconColor: 'text-error', tel: 'tel:113', btn: 'bg-tertiary text-on-tertiary' },
]
