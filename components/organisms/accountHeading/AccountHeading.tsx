import React from 'react'
import Image from 'next/image'

export const AccountHeading: React.FC = () => {
    return (
        <>
            <div className="mt-10 flex items-center">
                <Image src={'/app/assets/avatars/avatar-2.png'} width={150} height={150} alt="avatar" />
                <div className="flex flex-col ml-6">
                    <span className="roboto text-2xl font-medium text-gray-600">Umar Alfaruq</span>
                    <span className="roboto text-15 text-gray-500 mt-1">Owner & Founder</span>
                    <span className="roboto text-15 text-gray-500 mt-1">California, United States</span>
                </div>
            </div>
            <div className="mt-10 flex items-center justify-between">
                <ul className="flex gap-x-4">
                    <li>
                        <a href="#" className="inline-flex items-center justify-center roboto font-medium text-gray-500 px- h-10 border-b-2 border-b-gray-400">
                            Overview
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-flex items-center justify-center roboto font-medium text-gray-500 px-4 h-10">
                            Earnings
                        </a>
                    </li>
                </ul>

                <button className="roboto text-gray-500 hover:text-gray-600 bg-gray-200 hover:bg-gray-300 font-medium px-4 h-10 rounded">Edit Profile</button>
            </div>
        </>
    )
}
