-- 05: Seed 4 KK contoh (sesuai desain). Idempotent via ON CONFLICT.
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
