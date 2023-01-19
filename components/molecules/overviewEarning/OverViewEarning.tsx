import Image from 'next/image'
import React from 'react'

export const OverviewEarning: React.FC = () => {
    return (
        <div className="bg-white flex flex-1 flex-col rounded-xl px-6 py-5">
            <span className="roboto font-medium text-lg text-gray-500">Earnings</span>
            <div className="flex-1 flex items-center">
                <Image className="ml-5" src={'/app/assets/icons/money-bag.png'} width={179} height={179} alt="icon" />
                <span className="text-8xl font-bold ml-4 text-gray-500 roboto">80.000.000</span>
            </div>
        </div>
    )
}
