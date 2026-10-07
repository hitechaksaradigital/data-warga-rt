-- 01: Enum status & kepemilikan
DO $$ BEGIN CREATE TYPE kk_status AS ENUM ('Aktif', 'Pindah', 'Musiman'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE kepemilikan AS ENUM ('tetap', 'kontrak'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE hubungan AS ENUM ('Kepala', 'Istri', 'Suami', 'Anak', 'Orang Tua', 'Menantu', 'Cucu', 'Famili Lain'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
