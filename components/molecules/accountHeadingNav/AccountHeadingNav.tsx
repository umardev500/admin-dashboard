import React from 'react'

export const AccountHeadingNav: React.FC = () => {
    return (
        <ul className="flex gap-x-4">
            <li>
                <a href="#" className="outline-none inline-flex items-center justify-center roboto font-medium text-gray-600 px-4 h-10 border-b-2 border-b-gray-500">
                    Overview
                </a>
            </li>
            <li>
                <a href="#" className="outline-none inline-flex items-center justify-center roboto font-medium text-gray-500 px-4 h-10">
                    Earnings
                </a>
            </li>
            <li>
                <a href="#" className="outline-none inline-flex items-center justify-center roboto font-medium text-gray-500 px-4 h-10">
                    Profiles
                </a>
            </li>
        </ul>
    )
}
