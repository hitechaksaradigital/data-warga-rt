# WargaNet RT 05 — Dashboard Utama Pengurus RT

Project website hasil konversi dari `design/dashboard_utama_pengurus_rt/code.html` ke **React + Vite + Tailwind CSS**.

## Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Struktur

- `src/App.jsx` — layout utama (sidebar + header + konten)
- `src/components/` — Sidebar, Header, Hero, StatCards, ActionCenter, FinanceSummary, RondaSchedule, EmergencyContacts, SearchResults, MobileDrawer
- `src/data/dashboard.js` — data dummy dashboard (surat, iuran, aduan, ronda, kontak)
- `tailwind.config.js` — token warna/spacing/tipografi sesuai desain asli
