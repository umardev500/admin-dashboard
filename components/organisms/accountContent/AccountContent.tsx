import React, { useEffect, useState } from 'react'
import { IncomeResponse } from '../../../types'
import { OverviewDetail, OverviewEarning } from '../../molecules'

const MEMBERSHIP_API = process.env.MEMBERSHIP_API as string

export const AccountContent: React.FC = () => {
    const [earning, setEarning] = useState(0)

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const target = `${MEMBERSHIP_API}/orders/income/sum`
            try {
                const response = await fetch(target)
                const jsonData: IncomeResponse = await response.json()
                const isEmpty = jsonData.data.is_empty ?? false
                if (!isEmpty) setEarning(jsonData.data.payload.total)
            } catch {}
        }

        fetchData().catch(() => {})
    }, [])

    return (
        <div className="mt-10 flex flex-wrap flex-col lg:flex-row gap-5">
            <OverviewDetail />
            <OverviewEarning earning={earning} />
        </div>
    )
}
