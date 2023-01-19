import { ReactElement } from 'react'
import { Dashboard, FramerLayout } from '../../../components'
import { OverviewEarning } from '../../../components/molecules'
import { NextPageWithLayout } from '../../_app'
import { Layout } from './Layout'

const Earning: NextPageWithLayout = () => {
    return (
        <div className="mt-10">
            <FramerLayout>
                <OverviewEarning isPage />
            </FramerLayout>
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
