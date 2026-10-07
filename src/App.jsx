import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import DataWargaPage from './pages/DataWargaPage'

function Placeholder({ title }) {
  return (
    <div className="pt-space-md">
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
        <h1 className="font-headline-lg text-headline-lg text-on-surface">{title}</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">Halaman ini belum diimplementasikan. Kembali ke Dashboard atau Data Warga.</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="data-warga" element={<DataWargaPage />} />
          <Route path="keuangan" element={<Placeholder title="Keuangan & Iuran" />} />
          <Route path="layanan" element={<Placeholder title="Layanan & Pengaduan" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
