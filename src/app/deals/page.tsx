import CategoryOptions from '@/components/CategoryOptions'
import DealsList from '../../components/deals/DealsList'
import { redirect } from 'next/navigation'

export default async function DealsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-4">
        View all deals
      </h1>
      <p className="text-white mb-8">
        From online courses to conferance tickets, we&apos;ve curated the best ongoing deals!
      </p>
      <hr className="mb-8" />
      <CategoryOptions />
      {/* <DealsList deals={dealsList} /> */}
    </div>
  )
}
