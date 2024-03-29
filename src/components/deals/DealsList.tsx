import Deal from '@/components/deals/Deal'
import CategoryOptions from '@/components/CategoryOptions'
import SubscribeForm from '@/components/forms/SubscribeForm'
import { getXataClient } from '@/xata'

export default async function DealsList({
  isAdmin = false,
}: {
  isAdmin?: boolean
}) {
  const xataClient = getXataClient()
  const deals = await xataClient.db.deals
    .filter({ approved: true })
    .sort('xata.createdAt', 'desc')
    .getMany()

  return (
    <div>
      <CategoryOptions />
      <div className="grid grid-cols-1">
        {deals && deals.slice(0, 2).map((deal) => (
          <Deal key={deal.xata.id} deal={deal} isAdmin={isAdmin} />
        ))}
        <div className="bg-[#0C111C] w-full text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Never miss a <span className="text-teal-600">deal</span> for your favorite tools or courses
          </h2>
          <p className="text-xs" >We&apos;ll send upcoming and ongoing deals straight to your inbox every month</p>
          <SubscribeForm />
        </div>
        {deals && deals.slice(2).map((deal) => (
          <Deal key={deal.xata.id} deal={deal} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  )
}
