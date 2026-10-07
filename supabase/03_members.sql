-- 03: Tabel anggota keluarga + trigger updated_at
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
CREATE INDEX IF NOT EXISTS idx_anggota_kk ON anggota_keluarga (kk_id);

CREATE OR REPLACE FUNCTION touch_updated_at()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW(); RETURN NEW; END; $$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_kk_updated ON kepala_keluarga;
CREATE TRIGGER trg_kk_updated BEFORE UPDATE ON kepala_keluarga
FOR EACH ROW EXECUTE FUNCTION touch_updated_at();
