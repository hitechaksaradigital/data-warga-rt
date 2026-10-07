import { useCallback, useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { WARGA_KK as FALLBACK_KK } from '../data/warga'

function toUiRow(kk, members = []) {
  const waDigits = (kk.wa || '').replace(/\D/g, '')
  const waLink = waDigits ? `https://wa.me/${waDigits.startsWith('0') ? '62' + waDigits.slice(1) : waDigits}` : '#'
  const uiMembers = members.map((m) => ({
    role: m.hubungan, nama: m.nama, goldar: m.goldar || '-', nik: m.nik,
    usia: m.usia || '-', pekerjaan: m.pekerjaan || '-', verified: m.ktp_verified,
  }))
  const hasLansia = members.some((m) => m.is_lansia)
  const hasBalita = members.some((m) => m.is_balita)
  const hasKhusus = members.some((m) => m.is_disabilitas)
  const kategori = ['semua', 'kk']
  if (kk.kepemilikan === 'kontrak') kategori.push('kontrak')
  if (hasLansia) kategori.push('lansia')
  if (hasBalita) kategori.push('balita')
  if (hasKhusus || kk.prioritas) kategori.push('khusus')
  return {
    id: kk.id, nama: kk.nama_kepala, noKK: `KK ${kk.no_kk}`, noKKPlain: kk.no_kk,
    blok: kk.blok, blokShort: kk.blok_short || kk.blok, subAlamat: kk.sub_alamat,
    subAlamatWarning: kk.sub_alamat_warning, anggota: members.length || 1,
    anggotaLabel: `${members.length || 1} Jiwa`,
    anggotaNote: hasLansia ? 'Ada Lansia' : hasBalita ? 'Ada Balita' : null,
    anggotaNoteColor: hasBalita ? 'text-secondary' : undefined,
    kepemilikan: kk.kepemilikan,
    kepemilikanLabel: kk.kepemilikan === 'tetap' ? 'Rumah Tetap' : 'Kontrak',
    wa: kk.wa || '-', waLink,
    berkas: [{ label: kk.ktp_ok ? 'KTP ✓' : 'KTP ⚠', ok: kk.ktp_ok }, { label: 'KK ✓', ok: kk.kk_ok }],
    status: kk.status, prioritas: kk.prioritas, highlight: kk.highlight,
    foto: kk.foto_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(kk.nama_kepala)}&background=006a69&color=fff`,
    kategori, iuran: kk.iuran_status || '-', disaster: kk.disaster_note || null, members: uiMembers,
  }
}

export function useWargaKK() {
  const [rows, setRows] = useState(FALLBACK_KK)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [source, setSource] = useState('lokal')

  const fetchAll = useCallback(async () => {
    if (!isSupabaseConfigured) { setRows(FALLBACK_KK); setSource('lokal'); return }
    setLoading(true); setError(null)
    try {
      const { data: kkList, error: kkErr } = await supabase.from('kepala_keluarga').select('*').order('created_at', { ascending: true })
      if (kkErr) throw kkErr
      const { data: members, error: mErr } = await supabase.from('anggota_keluarga').select('*')
      if (mErr) throw mErr
      const byKk = {}
      ;(members || []).forEach((m) => { (byKk[m.kk_id] = byKk[m.kk_id] || []).push(m) })
      setRows((kkList || []).map((kk) => toUiRow(kk, byKk[kk.id] || [])))
      setSource('supabase')
    } catch (e) {
      setError(e.message); setRows(FALLBACK_KK); setSource('lokal')
    } finally { setLoading(false) }
  }, [])

  useEffect(() => { fetchAll() }, [fetchAll])

  const addKK = useCallback(async (payload) => {
    if (!isSupabaseConfigured) throw new Error('Supabase belum dikonfigurasi — isi VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY di .env')
    const { data: kk, error: kkErr } = await supabase.from('kepala_keluarga').insert({
      no_kk: payload.noKK, nama_kepala: payload.nama, blok: payload.blok,
      blok_short: payload.blokShort || payload.blok, sub_alamat: payload.subAlamat || 'RT 05 / RW 08',
      kepemilikan: payload.kepemilikan, wa: payload.wa, status: 'Aktif',
    }).select().single()
    if (kkErr) throw kkErr
    const { error: mErr } = await supabase.from('anggota_keluarga').insert({
      kk_id: kk.id, nik: payload.nik, nama: payload.nama, hubungan: 'Kepala', pekerjaan: payload.pekerjaan || null,
    })
    if (mErr) throw mErr
    await fetchAll()
    return kk
  }, [fetchAll])

  return { rows, loading, error, source, refetch: fetchAll, addKK }
}
