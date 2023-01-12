import React from 'react'
import { Featured } from '../../molecules'

interface Props {
    customerCount: number
    expiredCount: number
    orderPendingCount: number
}

export const FeaturedList: React.FC<Props> = ({ customerCount, expiredCount, orderPendingCount }) => {
    return (
        <div className="flex flex-col lg:flex-row pt-5">
            <Featured icon="url('/app/assets/icons/book-filled.svg')" color="#6271EB" textName="Pelanggan" textValue={customerCount} />
            <Featured icon="url('/app/assets/icons/receipt-filled.svg')" color="#059669" textName="Pendaftaran" textValue={10} />
            <Featured icon="url('/app/assets/icons/refresh.svg')" color="#FB923C" textName="Kadaluarsa" textValue={expiredCount} />
            <Featured icon="url('/app/assets/icons/task-featured.svg')" color="#DC3545" textName="Order Pending" textValue={orderPendingCount} />
        </div>
    )
}
