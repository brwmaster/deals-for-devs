import Deal from '@/components/deals/Deal'
import CategoryOptions from '@/components/CategoryOptions'
import SubscribeForm from '@/components/forms/SubscribeForm'
import { getXataClient } from '@/xata'

export default async function DealsList({
  isAdmin = false,
}: {
  isAdmin?: boolean
}) {
  const selectedCategory = 'Course'

  const options = {
    approved: true,
    category: selectedCategory ? selectedCategory : undefined,
  }

  const xataClient = getXataClient()
  const deals = await xataClient.db.deals
    .filter(options)
    .sort('xata.createdAt', 'desc')
    .getMany()

  return (
    <div>
      <CategoryOptions />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {deals && deals.slice(0, 1).map((deal) => (
          <Deal key={deal.xata.id} deal={deal} isAdmin={isAdmin} />
        ))}
      </div>
      <div className="bg-[#0C111C] flex flex-col items-center justify-center w-full text-white text-center my-4 h-80">
        <h2 className="text-2xl font-semibold mb-4">
          Never miss a <span className="text-teal-600">deal</span> for your favorite tools or courses
        </h2>
        <p className="text-xs mb-10 px-4">We&apos;ll send upcoming and ongoing deals straight to your inbox every month</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {deals && deals.slice(1).map((deal) => (
          <Deal key={deal.xata.id} deal={deal} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  )
}
