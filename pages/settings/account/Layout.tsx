import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { AccountHeading } from '../../../components'
import { Banner } from '../../../components/atoms'

interface Props {
    children?: React.ReactNode
}
export const Layout: React.FC<Props> = ({ children }): React.ReactElement => {
    return (
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
            <div className="no-padding pb-40">
                <Banner />
                <div className="account-content">
                    <AccountHeading />
                    {children}
                </div>
            </div>
        </AnimatePresence>
    )
}
