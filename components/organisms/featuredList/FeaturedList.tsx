import React from 'react'
import { Featured } from '../../molecules'

export const FeaturedList: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row pt-5">
            <Featured icon="url('/assets/icons/book-filled.svg')" color="#6271EB" textName="Pelanggan" textValue={10} />
            <Featured icon="url('/assets/icons/receipt-filled.svg')" color="#059669" textName="Pendaftaran" textValue={10} />
            <Featured icon="url('/assets/icons/refresh.svg')" color="#FB923C" textName="Kadaluarsa" textValue={10} />
            <Featured icon="url('/assets/icons/task-featured.svg')" color="#DC3545" textName="Pending" textValue={10} />
        </div>
    )
}
