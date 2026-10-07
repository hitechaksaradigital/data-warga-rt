import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import MobileDrawer from '../components/MobileDrawer'
import Header from '../components/Header'

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar query={query} setQuery={setQuery} />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} query={query} setQuery={setQuery} />
      <div className="lg:pl-72 flex flex-col min-h-screen">
        <Header onMenu={() => setDrawerOpen(true)} />
        <main className="relative pt-20 w-full min-h-screen bg-surface px-4 md:px-space-margin pb-space-xl">
          <Outlet context={{ query, setQuery }} />
        </main>
      </div>
    </div>
  )
}
