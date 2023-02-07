import React from 'react'
import { AccountHeading, Dashboard } from '../../../components'
import { Banner } from '../../../components/atoms'

interface Props {
    children?: React.ReactNode
}
export const Layout: React.FC<Props> = ({ children }): React.ReactElement => {
    return (
        <Dashboard>
            <div className="no-padding pb-40">
                <Banner />
                <div className="account-content">
                    <AccountHeading />
                    {children}
                </div>
            </div>
        </Dashboard>
    )
}
