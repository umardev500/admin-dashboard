import Head from 'next/head'
import { ReactElement } from 'react'
import { AccountContent, Dashboard } from '../../../components'
import { AccountLayout } from '../../../components/template/AccountLayout'
import { NextPageWithLayout } from '../../_app'

const Account: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Account</title>
            </Head>

            <AccountContent />
        </>
    )
}

Account.getLayout = (page: ReactElement) => {
    return (
        <Dashboard>
            <AccountLayout>{page}</AccountLayout>
        </Dashboard>
    )
}

export default Account
