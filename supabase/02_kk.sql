-- 02: Tabel induk Kepala Keluarga (KK)
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
CREATE INDEX IF NOT EXISTS idx_kk_nama ON kepala_keluarga (nama_kepala);
CREATE INDEX IF NOT EXISTS idx_kk_blok ON kepala_keluarga (blok);
