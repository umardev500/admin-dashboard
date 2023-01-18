import React from 'react'

export const OverviewEarning: React.FC = () => {
    return (
        <div className="bg-white flex flex-1 flex-col rounded-xl px-6 py-5">
            <span className="roboto font-medium text-lg text-gray-500">Earnings</span>
            <div className="flex-1 flex items-center justify-center">
                <span className="text-8xl font-bold text-gray-500 roboto">25.000.000</span>
            </div>
        </div>
    )
}
