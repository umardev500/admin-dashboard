import React from 'react'
import { OverviewDetail, OverviewEarning } from '../../molecules'

export const AccountContent: React.FC = () => {
    return (
        <div className="mt-10 flex flex-wrap flex-col lg:flex-row gap-5">
            <OverviewDetail />
            <OverviewEarning />
        </div>
    )
}
