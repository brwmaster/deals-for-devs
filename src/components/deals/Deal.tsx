import type { DealsRecord } from '@/xata'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import AdminOptions from '../AdminOptions'

export default function Deal({
  deal,
  showAdminOptions = false,
}: {
  deal: DealsRecord
  showAdminOptions?: boolean
}) {
  if (!deal) {
    return null
  }
  return (
    <div
      className="relative max-w-sm px-4 py-8"
    >
      {/* {deal.image && <Image src={deal.image.url!} alt={deal.name} width={400} height={400} /> */}
      <div className="h-48 border-2 border-transparent hover:border-teal-600 rounded-2xl"></div>
      <h2 className="text-lg font-semibold tracking-tight text-white">
        {deal.name}
      </h2>
      <Link href={deal.link} target="_blank" rel="noopener noreferrer" className="text-teal-600 text-sm md:text-white">Learn more</Link>
      {deal.coupon && deal.couponPercent && (
        <p className="absolute top-2 right-2 rounded-full bg-[#C4B97AE5] w-14 h-14 font-bold text-lg leading-tight flex flex-col items-center justify-center -rotate-12 ">
          <span>{deal.couponPercent}&#x25;</span>
          <span className="font-normal text-[9px]">off</span>
        </p>
      )}
      {showAdminOptions && <AdminOptions id={deal.id} />}
    </div>
  )
}
