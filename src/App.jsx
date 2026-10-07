import { useMemo, useState } from 'react'
import Sidebar from './components/Sidebar'
import MobileDrawer from './components/MobileDrawer'
import Header from './components/Header'
import Hero from './components/Hero'
import StatCards from './components/StatCards'
import ActionCenter from './components/ActionCenter'
import FinanceSummary from './components/FinanceSummary'
import RondaSchedule from './components/RondaSchedule'
import EmergencyContacts from './components/EmergencyContacts'
import SearchResults from './components/SearchResults'

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [query, setQuery] = useState('')

  const searching = useMemo(() => query.trim().length > 0, [query])

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar query={query} setQuery={setQuery} />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} query={query} setQuery={setQuery} />

      <div className="lg:pl-72 flex flex-col min-h-screen">
        <Header onMenu={() => setDrawerOpen(true)} />
        <main className="relative pt-20 w-full min-h-screen bg-surface px-4 md:px-space-margin pb-space-xl">
          <div className="flex flex-col w-full gap-y-space-lg pt-space-md">
            <Hero />
            <StatCards />
            {searching ? (
              <SearchResults query={query} onClear={() => setQuery('')} />
            ) : (
              <>
                <ActionCenter />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
                  <FinanceSummary />
                  <RondaSchedule />
                </div>
                <EmergencyContacts />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
