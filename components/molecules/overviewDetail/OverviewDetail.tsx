import React from 'react'

export const OverviewDetail: React.FC = () => {
    return (
        <div className="bg-white rounded-xl px-6 py-5 w-96">
            <span className="roboto font-medium text-lg text-gray-500">Details</span>
            <div className="flex justify-between items-center mt-4 border-b h-11 border-b-gray-100">
                <span className="roboto font-medium text-gray-500">Email</span>
                <span className="roboto text-gray-400">smith.dev500@gmail.com</span>
            </div>
            <div className="flex justify-between items-center border-b h-11 border-b-gray-100">
                <span className="roboto font-medium text-gray-500">Username</span>
                <span className="roboto text-gray-400">wilsmith</span>
            </div>
            <div className="flex justify-between items-center border-b h-11 border-b-gray-100">
                <span className="roboto font-medium text-gray-500">Full Name</span>
                <span className="roboto mt-1 text-gray-400">Mark Wilson Smith</span>
            </div>
            <div className="flex justify-between items-center h-11 border-b-gray-100">
                <span className="roboto font-medium text-gray-500">Address</span>
                <span className="roboto mt-1 text-gray-400">California, United States</span>
            </div>
            <div className="mt-6">
                <button className="flex h-11 items-center justify-center roboto font-medium bg-blue-100 px-4 py-1.5 rounded text-blue-500 w-full">
                    <span className="mr-2">See more</span>
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
            </div>
        </div>
    )
}
