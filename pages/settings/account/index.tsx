import Head from 'next/head'
import { ReactElement } from 'react'
import { AccountContent, AccountHeading, Dashboard, FramerLayout } from '../../../components'
import { Banner } from '../../../components/atoms'
import { NextPageWithLayout } from '../../_app'

const Account: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Account</title>
            </Head>

            <FramerLayout>
                <div className="no-padding pb-40">
                    <Banner />
                    <div className="account-content">
                        <AccountHeading />
                        <AccountContent />
                    </div>
                </div>
            </FramerLayout>
        </>
    )
}

Account.getLayout = (page: ReactElement) => {
    return <Dashboard>{page}</Dashboard>
}

export default Account
