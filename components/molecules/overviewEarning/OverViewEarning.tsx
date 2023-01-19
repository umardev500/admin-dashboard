import Image from 'next/image'
import React from 'react'

export const OverviewEarning: React.FC = () => {
    return (
        <div className="bg-white flex flex-1 flex-col rounded-xl px-6 py-5">
            <div className="flex items-center justify-between roboto font-medium text-lg text-gray-500">
                <span>Earnings</span>
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.7274 5.43582L19.2916 11L13.7274 16.5642M3.70825 11H19.1358"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className="flex-1 flex items-center">
                <Image className="ml-5" src={'/app/assets/icons/money-bag.png'} width={179} height={179} alt="icon" />
                <span className="text-8xl font-bold ml-4 text-gray-500 roboto">80.000.000</span>
            </div>
        </div>
    )
}
