import { useState } from 'react'

export function DeleteConfirm({ open, warga, onClose, onConfirm }) {
  const [deleting, setDeleting] = useState(false)
  const [err, setErr] = useState(null)

  if (!open || !warga) return null

  async function handleDelete() {
    setErr(null); setDeleting(true)
    try { await onConfirm(warga.id); onClose() }
    catch (ex) { setErr(ex.message) }
    finally { setDeleting(false) }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-on-surface/40" onClick={onClose} />
      <div className="relative w-full max-w-md bg-surface-container-lowest rounded-xl shadow-xl p-space-lg flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-error-container text-error flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[22px]">warning</span>
          </div>
          <div className="flex flex-col">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Hapus Data KK?</h2>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Tindakan ini tidak dapat dibatalkan.</span>
          </div>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Data <strong className="text-on-surface">{warga.nama}</strong> ({warga.noKK}) beserta {warga.members?.length || 0} anggota keluarga akan dihapus permanen dari database.
        </p>
        {err && <p className="p-2.5 rounded-lg bg-error-container text-on-error-container font-label-sm text-label-sm">{err}</p>}
        <div className="flex items-center justify-end gap-2 pt-1">
          <button type="button" onClick={onClose} className="px-4 py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high font-label-lg text-label-lg">Batal</button>
          <button type="button" onClick={handleDelete} disabled={deleting} className="px-5 py-2.5 rounded-lg bg-error text-on-error font-label-lg text-label-lg hover:opacity-90 disabled:opacity-50">
            {deleting ? 'Menghapus...' : 'Ya, Hapus'}
          </button>
        </div>
      </div>
    </div>
  )
}
