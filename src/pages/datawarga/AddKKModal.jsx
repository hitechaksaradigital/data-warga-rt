import { useState } from 'react'

const initial = { noKK: '', nik: '', nama: '', blok: '', wa: '', kepemilikan: 'tetap', pekerjaan: '', subAlamat: 'RT 05 / RW 08' }

export function AddKKModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState(initial)
  const [saving, setSaving] = useState(false)
  const [err, setErr] = useState(null)

  if (!open) return null
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault(); setErr(null)
    if (!/^[0-9]{16}$/.test(form.noKK)) { setErr('No. KK harus 16 digit angka.'); return }
    if (!/^[0-9]{16}$/.test(form.nik)) { setErr('NIK kepala keluarga harus 16 digit angka.'); return }
    if (!form.nama.trim() || !form.blok.trim()) { setErr('Nama dan Blok wajib diisi.'); return }
    setSaving(true)
    try { await onSubmit(form); setForm(initial); onClose() }
    catch (ex) { setErr(ex.message) }
    finally { setSaving(false) }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-on-surface/40" onClick={onClose} />
      <form onSubmit={handleSubmit} className="relative w-full max-w-lg bg-surface-container-lowest rounded-xl shadow-xl p-space-lg flex flex-col gap-3 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-md text-headline-md text-on-surface">Tambah Data KK Baru</h2>
          <button type="button" onClick={onClose} className="p-1.5 rounded-full hover:bg-surface-container-low" aria-label="Tutup">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        {err && <p className="p-2.5 rounded-lg bg-error-container text-on-error-container font-label-sm text-label-sm">{err}</p>}
        <label className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface">No. KK (16 digit)</span>
          <input value={form.noKK} onChange={set('noKK')} inputMode="numeric" placeholder="32710..." className="px-3 py-2.5 bg-surface-container-low rounded-lg text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface">NIK Kepala Keluarga (16 digit)</span>
          <input value={form.nik} onChange={set('nik')} inputMode="numeric" placeholder="32710..." className="px-3 py-2.5 bg-surface-container-low rounded-lg text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-label-md text-label-md text-on-surface">Nama Kepala Keluarga</span>
          <input value={form.nama} onChange={set('nama')} placeholder="cth. H. Ahmad Yani" className="px-3 py-2.5 bg-surface-container-low rounded-lg text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface">Blok / Alamat</span>
            <input value={form.blok} onChange={set('blok')} placeholder="Blok A1 No. 4" className="px-3 py-2.5 bg-surface-container-low rounded-lg text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface">No. WA</span>
            <input value={form.wa} onChange={set('wa')} placeholder="0812..." className="px-3 py-2.5 bg-surface-container-low rounded-lg text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <label className="flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface">Kepemilikan</span>
            <select value={form.kepemilikan} onChange={set('kepemilikan')} className="px-3 py-2.5 bg-surface-container-low rounded-lg text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40">
              <option value="tetap">Rumah Tetap</option>
              <option value="kontrak">Kontrak / Sewa</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface">Pekerjaan</span>
            <input value={form.pekerjaan} onChange={set('pekerjaan')} placeholder="cth. Wiraswasta" className="px-3 py-2.5 bg-surface-container-low rounded-lg text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </label>
        </div>
        <div className="flex items-center justify-end gap-2 pt-2">
          <button type="button" onClick={onClose} className="px-4 py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high font-label-lg text-label-lg">Batal</button>
          <button type="submit" disabled={saving} className="px-5 py-2.5 rounded-lg bg-primary-container text-on-primary-container font-label-lg text-label-lg hover:opacity-95 disabled:opacity-50">
            {saving ? 'Menyimpan...' : 'Simpan ke Supabase'}
          </button>
        </div>
      </form>
    </div>
  )
}
