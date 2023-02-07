import { ReactElement } from 'react'
import { Dashboard } from '../../../components'
import { OverviewEarning } from '../../../components/molecules'
import { AccountLayout } from '../../../components/template/AccountLayout'
import { NextPageWithLayout } from '../../_app'

const Earning: NextPageWithLayout = () => {
    return (
        <div className="mt-10">
            <OverviewEarning isPage />
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
