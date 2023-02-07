import React from 'react'
import { AccountHeading } from '../../../components'
import { Banner } from '../../../components/atoms'

interface Props {
    children?: React.ReactNode
}
export const Layout: React.FC<Props> = ({ children }): React.ReactElement => {
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
