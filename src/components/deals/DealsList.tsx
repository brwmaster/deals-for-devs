import Deal from '@/components/deals/Deal'
import CategoryOptions from '@/components/CategoryOptions'
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
        {deals && deals.map((deal) => (
          <Deal key={deal.xata.id} deal={deal} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  )
}
