# Integrasi Supabase — WargaNet RT 05

## 1. Buat project & ambil kredensial
1. Buka https://supabase.com/dashboard → New project.
2. Project Settings → API → salin `Project URL` dan `anon public key`.
3. Isi file `.env`:
```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
```
4. Restart `npm run dev` (Vite membaca `.env` saat start).

## 2. Buat skema database
Buka SQL Editor → New query → tempel isi `supabase/setup.sql` → Run.
(Alternatif bertahap: jalankan `01_enums.sql` → `02_kk.sql` → `03_members.sql` → `04_rls.sql` → `05_seed.sql`.)

Hasil: tabel `kepala_keluarga` + `anggota_keluarga`, RLS read/write terbuka via anon key, dan 4 KK contoh.

## 3. Alur aplikasi
- `src/lib/supabase.js` — client; jika `.env` kosong → `isSupabaseConfigured = false` dan app memakai data lokal (`src/data/warga.js`) + banner "Mode data lokal".
- `src/hooks/useWargaKK.js` — `fetchAll()` baca KK + anggota lalu mapping ke format UI; `addKK()` insert ke `kepala_keluarga` + 1 baris kepala di `anggota_keluarga`, lalu refetch.
- Halaman `/data-warga` — tabel dari hook (label "Sumber: Supabase/Lokal"), tombol "Tambah Data KK Baru" membuka `AddKKModal` (validasi 16 digit KK & NIK) → simpan ke Supabase → tabel refresh otomatis.

## 4. Skema ringkas
- `kepala_keluarga`: id, no_kk UNIQUE 16 digit, nama_kepala, blok, kepemilikan (tetap/kontrak), wa, status (Aktif/Pindah/Musiman), prioritas, ktp_ok, kk_ok, disaster_note, timestamps.
- `anggota_keluarga`: id, kk_id FK cascade, nik UNIQUE 16 digit, nama, hubungan, goldar, usia, pekerjaan, ktp_verified, flag is_lansia/is_balita/is_disabilitas.
