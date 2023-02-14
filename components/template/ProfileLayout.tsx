import React, { ReactNode } from 'react'
import { ProfileMenu } from '../molecules'

interface Props {
    children?: ReactNode
}

export const ProfileLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div className="mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-5">
                    {/* Menu */}
                    <ProfileMenu />

                    {/* Content */}
                    <div className="w-full col-span-full lg:col-span-9">{children}</div>
                </div>
            </div>
        </>
    )
}
