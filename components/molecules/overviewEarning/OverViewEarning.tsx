import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { toCurrency } from '../../../helpers'

interface Props {
    isPage?: boolean
    earning: number
}

export const OverviewEarning: React.FC<Props> = ({ isPage, earning }) => {
    const router = useRouter()
    const handleBack = useCallback(() => {
        router.back()
    }, [])

    const handleGoto = useCallback(() => {
        router.push(`${router.pathname}/earning`).catch(() => {})
    }, [])

    return (
        <div className="bg-white flex earning flex-col rounded-xl px-6 pt-2 pb-6">
            <div className={`flex h-14 items-center ${isPage !== true ? 'justify-between' : 'gap-5'} roboto font-medium text-lg text-gray-500`}>
                {isPage === true ? (
                    <button onClick={handleBack}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.77234 5.43585L3.20817 11L8.77234 16.5642M18.7915 11H3.364"
                                stroke="#9CA3AF"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                ) : null}
                <span>Earnings</span>
                {isPage !== true ? (
                    <button onClick={handleGoto}>
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
                    </button>
                ) : null}
            </div>
            <div className="flex-1 flex flex-wrap items-center justify-center py-4">
                <Image className="max-lg:w-36 ml-5 opacity-50" src={'/app/assets/icons/money-bag.png'} width={211} height={210} alt="icon" />
                <span className="text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-bold ml-4 text-gray-500 roboto">{toCurrency(earning)}</span>
            </div>
        </div>
    )
}
