import { NextPage } from 'next'
import Head from 'next/head'
import { AccountContent, AccountHeading, FramerLayout } from '../../components'
import { Banner } from '../../components/atoms'

const Account: NextPage = () => {
    return (
        <>
            <Head>
                <title>Account</title>
            </Head>

            <FramerLayout>
                <div className="no-padding">
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

export default Account
