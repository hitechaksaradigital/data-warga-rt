-- 04: Row Level Security (buka akses read publik, tulis via anon key)
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
