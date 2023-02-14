import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { checkPath } from '../../../helpers'

export const AccountHeadingNav: React.FC = () => {
    const router = useRouter()

    const basePath = '/settings/account'
    const getClasses = (path: string[]): string => {
        let className = 'outline-none inline-flex items-center justify-center roboto font-medium text-gray-500 hover:text-gray-600 px-4 h-10'
        path.forEach((val) => {
            if (checkPath(router, basePath + val)) {
                className +=
                    " !text-gray-600 before:absolute before:content-[''] before:bg-slate-500 before:border-b-2 before:border-gray-500 before:flex before:left-0 before:right-0 before:bottom-0"
            }
        })

        return className
    }

    return (
        <ul className="flex gap-x-4 overflow-auto heading-nav">
            <li className="relative">
                <Link href="/settings/account/" className={`${getClasses([''])} `}>
                    Overview
                </Link>
            </li>
            <li className="relative">
                <Link href="/settings/account/earning" className={getClasses(['/earning'])}>
                    Earnings
                </Link>
            </li>
            <li className="relative">
                <Link href="/settings/account/profiles" className={getClasses(['/profiles'])}>
                    Profiles
                </Link>
            </li>
        </ul>
    )
}
