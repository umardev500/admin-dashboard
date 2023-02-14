import React from 'react'
import { useEarning } from '../../../hooks/useEarning'
import { OverviewDetail, OverviewEarning } from '../../molecules'

export const AccountContent: React.FC = () => {
    const earning = useEarning()

    return (
        <div className="mt-10 flex flex-wrap flex-col lg:flex-row gap-5">
            <OverviewDetail />
            <OverviewEarning earning={earning} />
        </div>
    )
}
