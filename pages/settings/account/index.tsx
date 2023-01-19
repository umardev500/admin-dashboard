import Head from 'next/head'
import { ReactElement } from 'react'
import { AccountContent, Dashboard, FramerLayout } from '../../../components'
import { NextPageWithLayout } from '../../_app'
import { Layout } from './Layout'

const Account: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Account</title>
            </Head>

            <FramerLayout>
                <AccountContent />
            </FramerLayout>
        </>
    )
}

Account.getLayout = (page: ReactElement) => {
    return (
        <Dashboard>
            <Layout>{page}</Layout>
        </Dashboard>
    )
}

export default Account
