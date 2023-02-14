import { ReactElement } from 'react'
import { Dashboard } from '../../../components'
import { OverviewEarning } from '../../../components/molecules'
import { AccountLayout } from '../../../components/template/AccountLayout'
import { useEarning } from '../../../hooks/useEarning'
import { NextPageWithLayout } from '../../_app'

const Earning: NextPageWithLayout = () => {
    const earning = useEarning()

    return (
        <div className="mt-10">
            <OverviewEarning earning={earning} isPage />
        </div>
    )
}

Earning.getLayout = (page: ReactElement) => {
    return (
        <Dashboard>
            <AccountLayout>{page}</AccountLayout>
        </Dashboard>
    )
}

export default Earning
