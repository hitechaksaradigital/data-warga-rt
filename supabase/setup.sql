-- WargaNet RT 05 — FULL SETUP (jalankan sekaligus di SQL Editor)
-- Membuat enum, tabel kepala_keluarga + anggota_keluarga, trigger, RLS, dan seed 4 KK.
DO $$ BEGIN CREATE TYPE kk_status AS ENUM ('Aktif', 'Pindah', 'Musiman'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE kepemilikan AS ENUM ('tetap', 'kontrak'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE hubungan AS ENUM ('Kepala', 'Istri', 'Suami', 'Anak', 'Orang Tua', 'Menantu', 'Cucu', 'Famili Lain'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS kepala_keluarga (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  no_kk TEXT NOT NULL UNIQUE CHECK (no_kk ~ '^[0-9]{16}$'),
  nama_kepala TEXT NOT NULL,
  blok TEXT NOT NULL,
  blok_short TEXT,
  sub_alamat TEXT DEFAULT 'RT 05 / RW 08',
  sub_alamat_warning BOOLEAN DEFAULT FALSE,
  kepemilikan kepemilikan NOT NULL DEFAULT 'tetap',
  wa TEXT,
  foto_url TEXT,
  status kk_status NOT NULL DEFAULT 'Aktif',
  prioritas BOOLEAN DEFAULT FALSE,
  highlight BOOLEAN DEFAULT FALSE,
  ktp_ok BOOLEAN DEFAULT TRUE,
  kk_ok BOOLEAN DEFAULT TRUE,
  iuran_status TEXT DEFAULT 'Lunas (Mei 2024)',
  disaster_note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS anggota_keluarga (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  kk_id UUID NOT NULL REFERENCES kepala_keluarga(id) ON DELETE CASCADE,
  nik TEXT NOT NULL UNIQUE CHECK (nik ~ '^[0-9]{16}$'),
  nama TEXT NOT NULL,
  hubungan hubungan NOT NULL DEFAULT 'Anak',
  goldar TEXT CHECK (goldar IN ('A+','A-','B+','B-','AB+','AB-','O+','O-')),
  usia TEXT,
  pekerjaan TEXT,
  ktp_verified BOOLEAN DEFAULT TRUE,
  is_lansia BOOLEAN DEFAULT FALSE,
  is_balita BOOLEAN DEFAULT FALSE,
  is_disabilitas BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION touch_updated_at()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW(); RETURN NEW; END; $$ LANGUAGE plpgsql;
DROP TRIGGER IF EXISTS trg_kk_updated ON kepala_keluarga;
CREATE TRIGGER trg_kk_updated BEFORE UPDATE ON kepala_keluarga FOR EACH ROW EXECUTE FUNCTION touch_updated_at();

ALTER TABLE kepala_keluarga ENABLE ROW LEVEL SECURITY;
ALTER TABLE anggota_keluarga ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "kk_read_all" ON kepala_keluarga;
CREATE POLICY "kk_read_all" ON kepala_keluarga FOR SELECT USING (true);
DROP POLICY IF EXISTS "kk_write_all" ON kepala_keluarga;
CREATE POLICY "kk_write_all" ON kepala_keluarga FOR ALL USING (true) WITH CHECK (true);
DROP POLICY IF EXISTS "anggota_read_all" ON anggota_keluarga;
CREATE POLICY "anggota_read_all" ON anggota_keluarga FOR SELECT USING (true);
DROP POLICY IF EXISTS "anggota_write_all" ON anggota_keluarga;
CREATE POLICY "anggota_write_all" ON anggota_keluarga FOR ALL USING (true) WITH CHECK (true);

INSERT INTO kepala_keluarga (no_kk, nama_kepala, blok, blok_short, sub_alamat, kepemilikan, wa, status, ktp_ok, kk_ok)
VALUES
  ('3271012304910001', 'H. Bambang Sutrisno', 'Blok A1 No. 4', 'Blok A1 / 04', 'RT 05 / RW 08', 'tetap', '0812-9841-234', 'Aktif', TRUE, TRUE),
  ('3271015607930005', 'Budi Santoso', 'Blok B2 No. 12', 'Blok B2 / 12', 'Sewa Exp: Des 2024', 'kontrak', '0857-1120-993', 'Aktif', FALSE, TRUE)
ON CONFLICT (no_kk) DO NOTHING;
INSERT INTO kepala_keluarga (no_kk, nama_kepala, blok, blok_short, sub_alamat, kepemilikan, wa, status, prioritas, highlight, ktp_ok, kk_ok, disaster_note)
VALUES
  ('3271018809920008', 'Dra. Ratna Kusuma', 'Blok A3 No. 7', 'Blok A3 / 07', 'Lantai 1 Akses Khusus', 'tetap', '0813-1499-021', 'Aktif', TRUE, TRUE, TRUE, TRUE, 'Lansia pengguna kursi roda di kamar lantai 1. Memerlukan pendampingan relawan Kamling saat evakuasi darurat atau banjir.'),
  ('3271014401880003', 'Ahmad Fauzi', 'Blok C1 No. 9', 'Blok C1 / 09', 'RT 05 / RW 08', 'tetap', '0818-0922-881', 'Aktif', FALSE, FALSE, TRUE, TRUE, 'Keluarga memiliki 1 balita (2 tahun). Terdaftar dalam pemantauan rutin gizi & Posyandu Melati bulanan.')
ON CONFLICT (no_kk) DO NOTHING;
