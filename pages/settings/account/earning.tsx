import React, { ReactElement } from 'react'
import { Dashboard } from '../../../components'
import { OverviewEarning } from '../../../components/molecules'
import { NextPageWithLayout } from '../../_app'
import { Layout } from './Layout'

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
            <Layout>{page}</Layout>
        </Dashboard>
    )
}

export default Earning
