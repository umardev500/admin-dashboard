import React, { ReactElement } from 'react'
import { Dashboard } from '../../../components'
import { NextPageWithLayout } from '../../_app'
import { Layout } from './Layout'

const Earning: NextPageWithLayout = () => {
    return <p></p>
}

Earning.getLayout = (page: ReactElement) => {
    return (
        <Dashboard>
            <Layout>{page}</Layout>
        </Dashboard>
    )
}

export default Earning
