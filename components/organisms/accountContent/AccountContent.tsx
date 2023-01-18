import React from 'react'
import { OverviewDetail, OverviewEarning } from '../../molecules'

export const AccountContent: React.FC = () => {
    return (
        <div className="mt-10 flex gap-5">
            <OverviewDetail />
            <OverviewEarning />
        </div>
    )
}
