import { useMemo } from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../components/Hero'
import StatCards from '../components/StatCards'
import ActionCenter from '../components/ActionCenter'
import FinanceSummary from '../components/FinanceSummary'
import RondaSchedule from '../components/RondaSchedule'
import EmergencyContacts from '../components/EmergencyContacts'
import SearchResults from '../components/SearchResults'

export default function DashboardPage() {
  const { query, setQuery } = useOutletContext()
  const searching = useMemo(() => query.trim().length > 0, [query])

  return (
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
  )
}
