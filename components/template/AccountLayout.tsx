import React from 'react'
import { Banner } from '../atoms'
import { AccountHeading } from '../organisms'

interface Props {
    children?: React.ReactNode
}
export const AccountLayout: React.FC<Props> = ({ children }): React.ReactElement => {
    return (
        <div className="no-padding pb-40">
            <Banner />
            <div className="account-content">
                <AccountHeading />
                {children}
            </div>
        </div>
    )
}
