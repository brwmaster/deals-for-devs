import CategoryOptions from '@/components/CategoryOptions'
import DealsList from '../../components/deals/DealsList'
import { redirect } from 'next/navigation'

export default async function DealsPage() {
  return (
    <div className="mx-7 grid">
      <h1 className="text-4xl font-semibold text-white mb-4">
        View all deals
      </h1>
      <p className="text-sm text-white mb-9">
        From online courses to conferance tickets, we&apos;ve curated the best ongoing deals!
      </p>
      <hr className="mb-16 opacity-30" />
      <DealsList />
    </div>
  )
}
