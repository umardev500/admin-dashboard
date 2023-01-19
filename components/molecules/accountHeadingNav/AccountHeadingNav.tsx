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
                className += ' border-b-2 border-b-gray-500'
            }
        })

        return className
    }

    return (
        <ul className="flex gap-x-4">
            <li>
                <a href="#" className={getClasses([''])}>
                    Overview
                </a>
            </li>
            <li>
                <a href="#" className={getClasses(['/earning'])}>
                    Earnings
                </a>
            </li>
            <li>
                <a href="#" className={getClasses(['/profile'])}>
                    Profiles
                </a>
            </li>
        </ul>
    )
}
