import { useRouter } from 'next/router'
import React, { ReactNode, useCallback } from 'react'
import { ProfileMenu } from '../molecules'

interface Props {
    children?: ReactNode
    title: string
}

export const ProfileLayout: React.FC<Props> = ({ children, title }) => {
    const router = useRouter()
    const handleBack = useCallback(() => {
        router.back()
    }, [])

    return (
        <>
            <div className="mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    {/* Menu */}
                    <ProfileMenu />

                    {/* Content */}
                    <div className="w-full col-span-full lg:col-span-9">
                        <div className="bg-white rounded-lg px-8 py-5 roboto">
                            <div className={`flex h-14 items-center gap-5 roboto font-medium text-lg text-gray-500`}>
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
                                <span>{title}</span>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
